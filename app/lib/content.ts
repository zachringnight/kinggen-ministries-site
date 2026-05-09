import { list, put } from "@vercel/blob";

const CONTENT_PREFIX = "content/";

export const CONTENT_PAGES = [
  "home",
  "about",
  "services",
  "contact",
  "donate",
  "for-referrers",
  "for-grant-writers",
  "get-support",
  "testimonials",
  "forms",
  "privacy",
  "disclaimer",
  "site-config",
] as const;

export type ContentPage = (typeof CONTENT_PAGES)[number];

/**
 * Fetch content for a page from Vercel Blob.
 * Returns parsed JSON or null if not found.
 */
export async function getPageContent(page: ContentPage): Promise<Record<string, unknown> | null> {
  try {
    const { blobs } = await list({
      prefix: `${CONTENT_PREFIX}${page}.json`,
    });

    if (blobs.length === 0) return null;

    const response = await fetch(blobs[0].url, {
      next: { revalidate: 60 },
    });
    if (!response.ok) return null;

    return (await response.json()) as Record<string, unknown>;
  } catch {
    return null;
  }
}

/**
 * Save content for a page to Vercel Blob.
 * Uses addRandomSuffix: false so each page overwrites cleanly.
 */
export async function savePageContent(page: ContentPage, content: Record<string, unknown>) {
  const blob = await put(
    `${CONTENT_PREFIX}${page}.json`,
    JSON.stringify(
      {
        ...content,
        _meta: {
          updatedAt: new Date().toISOString(),
          updatedBy: "admin",
        },
      },
      null,
      2,
    ),
    {
      access: "public",
      addRandomSuffix: false,
      contentType: "application/json",
    },
  );
  return blob;
}
