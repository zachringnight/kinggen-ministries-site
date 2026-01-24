import { NextRequest, NextResponse } from "next/server";

interface Preview {
  field: string;
  oldValue: string;
  newValue: string;
}

// GitHub configuration - these should be set as environment variables
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_OWNER = process.env.GITHUB_OWNER || "zachringnight";
const GITHUB_REPO = process.env.GITHUB_REPO || "kinggen-ministries-site";
const GITHUB_BRANCH = process.env.GITHUB_BRANCH || "Claude/main";

// Escape special regex characters in a string
function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Generate the regex pattern and replacement for a given field
function getFieldReplacement(
  field: string,
  newValue: string,
  oldValue: string
): { pattern: RegExp; replacement: string } | null {
  // Escape the old value for use in regex
  const escapedOldValue = escapeRegex(oldValue);

  // Simple top-level fields
  const simpleFields = ["phone", "email", "tagline", "description"];
  if (simpleFields.includes(field)) {
    return {
      pattern: new RegExp(`(${field}:\\s*)["']${escapedOldValue}["']`),
      replacement: `$1"${newValue}"`,
    };
  }

  // Nested address fields
  if (field.startsWith("address.")) {
    const subField = field.replace("address.", "");
    return {
      pattern: new RegExp(`(${subField}:\\s*)["']${escapedOldValue}["']`),
      replacement: `$1"${newValue}"`,
    };
  }

  // Nested social fields
  if (field.startsWith("social.")) {
    const subField = field.replace("social.", "");
    return {
      pattern: new RegExp(`(${subField}:\\s*)["']${escapedOldValue}["']`),
      replacement: `$1"${newValue}"`,
    };
  }

  return null;
}

async function updateSiteConfig(preview: Preview): Promise<{ success: boolean; error?: string }> {
  if (!GITHUB_TOKEN) {
    return { success: false, error: "GitHub token not configured" };
  }

  const filePath = "app/config/site.ts";

  try {
    // 1. Get the current file content and SHA
    const getFileResponse = await fetch(
      `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${filePath}?ref=${GITHUB_BRANCH}`,
      {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          Accept: "application/vnd.github.v3+json",
        },
      }
    );

    if (!getFileResponse.ok) {
      const error = await getFileResponse.text();
      console.error("Failed to get file:", error);
      return { success: false, error: "Could not read current configuration" };
    }

    const fileData = await getFileResponse.json();
    const currentContent = Buffer.from(fileData.content, "base64").toString("utf-8");
    const sha = fileData.sha;

    // 2. Get the replacement pattern for this field
    const replacement = getFieldReplacement(preview.field, preview.newValue, preview.oldValue);

    if (!replacement) {
      return { success: false, error: "Unknown field type" };
    }

    // 3. Apply the replacement
    const newContent = currentContent.replace(replacement.pattern, replacement.replacement);

    // 4. Check if content actually changed
    if (newContent === currentContent) {
      return { success: false, error: "Could not find the field to update" };
    }

    // 5. Create a friendly field name for the commit message
    const fieldNames: Record<string, string> = {
      phone: "phone number",
      email: "email address",
      tagline: "tagline",
      description: "description",
      "address.line2": "street address",
      "address.line3": "suite/unit",
      "address.city": "city",
      "address.zip": "zip code",
      "social.instagram": "Instagram",
      "social.facebook": "Facebook",
    };

    const friendlyFieldName = fieldNames[preview.field] || preview.field;

    // 6. Commit the new content
    const commitMessage = `Update ${friendlyFieldName}

Changed via website editor`;

    const updateResponse = await fetch(
      `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${filePath}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          Accept: "application/vnd.github.v3+json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: commitMessage,
          content: Buffer.from(newContent).toString("base64"),
          sha: sha,
          branch: GITHUB_BRANCH,
        }),
      }
    );

    if (!updateResponse.ok) {
      const error = await updateResponse.text();
      console.error("Failed to update file:", error);
      return { success: false, error: "Could not save the change" };
    }

    return { success: true };
  } catch (error) {
    console.error("GitHub API error:", error);
    return { success: false, error: "Connection error - please try again" };
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { preview } = body as { preview: Preview };

    if (!preview || !preview.field || !preview.newValue) {
      return NextResponse.json(
        { success: false, error: "Invalid preview data" },
        { status: 400 }
      );
    }

    // Apply the change
    const result = await updateSiteConfig(preview);

    if (result.success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Apply API error:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong" },
      { status: 500 }
    );
  }
}
