import { NextRequest, NextResponse } from "next/server";

// Current site configuration for reference
import { siteConfig } from "../../../config/site";

// Format full address for display
function formatAddress(): string {
  const { address } = siteConfig;
  return `${address.line2}, ${address.line3}, ${address.city}, ${address.state} ${address.zip}`;
}

// Simple pattern matching for common edit requests
function parseEditRequest(message: string): {
  field: string;
  newValue: string;
  oldValue: string;
} | null {
  const lowerMessage = message.toLowerCase();

  // Phone number changes
  if (lowerMessage.includes("phone")) {
    const phoneNumbers = message.match(/\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g);
    if (phoneNumbers && phoneNumbers.length > 0) {
      return {
        field: "phone",
        newValue: phoneNumbers[phoneNumbers.length - 1],
        oldValue: siteConfig.phone,
      };
    }
  }

  // Email changes
  const emailInMessage = message.match(/[\w.-]+@[\w.-]+\.\w+/);
  if (emailInMessage && lowerMessage.includes("email")) {
    return {
      field: "email",
      newValue: emailInMessage[0],
      oldValue: siteConfig.email,
    };
  }

  // Tagline changes (text in quotes after "tagline")
  if (lowerMessage.includes("tagline")) {
    const quotedText = message.match(/["']([^"']+)["']/);
    if (quotedText) {
      return {
        field: "tagline",
        newValue: quotedText[1],
        oldValue: siteConfig.tagline,
      };
    }
  }

  // Description changes (text in quotes after "description")
  if (lowerMessage.includes("description")) {
    const quotedText = message.match(/["']([^"']+)["']/);
    if (quotedText) {
      return {
        field: "description",
        newValue: quotedText[1],
        oldValue: siteConfig.description,
      };
    }
  }

  // Street address changes (line2 - the main street address)
  if (lowerMessage.includes("street") || (lowerMessage.includes("address") && !lowerMessage.includes("email"))) {
    // Look for a street address pattern or quoted text
    const streetPattern = message.match(/\d+\s+[\w\s]+(?:street|st|avenue|ave|road|rd|drive|dr|lane|ln|way|parkway|pkwy|boulevard|blvd)/i);
    const quotedText = message.match(/["']([^"']+)["']/);

    if (streetPattern) {
      return {
        field: "address.line2",
        newValue: streetPattern[0],
        oldValue: siteConfig.address.line2,
      };
    } else if (quotedText) {
      return {
        field: "address.line2",
        newValue: quotedText[1],
        oldValue: siteConfig.address.line2,
      };
    }
  }

  // Suite/Unit changes
  if (lowerMessage.includes("suite") || lowerMessage.includes("unit") || lowerMessage.includes("box")) {
    const quotedText = message.match(/["']([^"']+)["']/);
    const suitePattern = message.match(/(?:suite|ste|unit|box)\s*#?\s*[\w-]+(?:\s*,\s*(?:suite|ste|unit|box)\s*#?\s*[\w-]+)*/i);

    if (quotedText) {
      return {
        field: "address.line3",
        newValue: quotedText[1],
        oldValue: siteConfig.address.line3,
      };
    } else if (suitePattern) {
      return {
        field: "address.line3",
        newValue: suitePattern[0],
        oldValue: siteConfig.address.line3,
      };
    }
  }

  // City changes
  if (lowerMessage.includes("city")) {
    const quotedText = message.match(/["']([^"']+)["']/);
    // Look for "to [CityName]" pattern
    const toPattern = message.match(/(?:to|is)\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)/);

    if (quotedText) {
      return {
        field: "address.city",
        newValue: quotedText[1],
        oldValue: siteConfig.address.city,
      };
    } else if (toPattern) {
      return {
        field: "address.city",
        newValue: toPattern[1],
        oldValue: siteConfig.address.city,
      };
    }
  }

  // Zip code changes
  if (lowerMessage.includes("zip")) {
    const zipPattern = message.match(/\d{5}(?:-\d{4})?/);
    if (zipPattern) {
      return {
        field: "address.zip",
        newValue: zipPattern[0],
        oldValue: siteConfig.address.zip,
      };
    }
  }

  // Instagram changes
  if (lowerMessage.includes("instagram")) {
    const urlPattern = message.match(/https?:\/\/(?:www\.)?instagram\.com\/[\w.-]+\/?/i);
    const handlePattern = message.match(/@?([\w.-]+)/);

    if (urlPattern) {
      return {
        field: "social.instagram",
        newValue: urlPattern[0],
        oldValue: siteConfig.social.instagram,
      };
    } else if (handlePattern && !handlePattern[1].includes(".")) {
      // Convert handle to URL
      return {
        field: "social.instagram",
        newValue: `https://www.instagram.com/${handlePattern[1]}/`,
        oldValue: siteConfig.social.instagram,
      };
    }
  }

  // Facebook changes
  if (lowerMessage.includes("facebook")) {
    const urlPattern = message.match(/https?:\/\/(?:www\.)?facebook\.com\/[\w./?=&-]+/i);

    if (urlPattern) {
      return {
        field: "social.facebook",
        newValue: urlPattern[0],
        oldValue: siteConfig.social.facebook,
      };
    }
  }

  return null;
}

function generateResponse(
  message: string,
  editRequest: ReturnType<typeof parseEditRequest>
): { message: string; preview?: typeof editRequest } {
  const lowerMessage = message.toLowerCase();

  // If we found an edit request, return it with a preview
  if (editRequest) {
    const fieldNames: Record<string, string> = {
      phone: "phone number",
      email: "email address",
      tagline: "tagline",
      description: "site description",
      "address.line2": "street address",
      "address.line3": "suite/unit",
      "address.city": "city",
      "address.zip": "zip code",
      "social.instagram": "Instagram link",
      "social.facebook": "Facebook link",
    };

    return {
      message: `I can update the ${fieldNames[editRequest.field] || editRequest.field} for you. Please review the change below:`,
      preview: editRequest,
    };
  }

  // Help with common questions
  if (lowerMessage.includes("what can") || lowerMessage.includes("help")) {
    return {
      message: `I can help you update these parts of the website:

**Contact Info:**
• Phone number - "Change the phone to (555) 123-4567"
• Email address - "Update the email to new@email.com"

**About Text:**
• Tagline - "Change the tagline to 'Your new tagline'"
• Description - "Update the description to 'New text'"

**Address:**
• Street - "Change the street address to '123 Main St'"
• Suite/Unit - "Update the suite to 'Suite 200'"
• City - "Change the city to 'Dallas'"
• Zip code - "Update the zip to 75001"

**Social Media:**
• Instagram - "Change Instagram to @newhandle"
• Facebook - "Update Facebook to [URL]"

Just tell me what you'd like to change!`,
    };
  }

  // Current info request
  if (
    lowerMessage.includes("current") ||
    lowerMessage.includes("what is") ||
    lowerMessage.includes("show")
  ) {
    return {
      message: `Here's the current site information:

**Contact:**
• Phone: ${siteConfig.phone}
• Email: ${siteConfig.email}

**Address:**
• ${formatAddress()}

**About:**
• Tagline: "${siteConfig.tagline}"

**Social:**
• Instagram: ${siteConfig.social.instagram}
• Facebook: ${siteConfig.social.facebook}

Would you like to change any of these?`,
    };
  }

  // Partial match - they mentioned something but we couldn't parse it
  const mentionedFields = [];
  if (lowerMessage.includes("phone")) mentionedFields.push("phone number");
  if (lowerMessage.includes("email")) mentionedFields.push("email");
  if (lowerMessage.includes("tagline")) mentionedFields.push("tagline");
  if (lowerMessage.includes("address")) mentionedFields.push("address");
  if (lowerMessage.includes("instagram")) mentionedFields.push("Instagram");
  if (lowerMessage.includes("facebook")) mentionedFields.push("Facebook");

  if (mentionedFields.length > 0) {
    const examples: Record<string, string> = {
      "phone number": '"Change the phone to (555) 123-4567"',
      email: '"Update the email to new@email.com"',
      tagline: '"Change the tagline to \'Your new tagline\'"',
      address: '"Change the street address to \'123 Main St\'"',
      Instagram: '"Change Instagram to @newhandle"',
      Facebook: '"Update the Facebook URL to [paste URL]"',
    };

    const exampleList = mentionedFields
      .map((f) => `• ${examples[f] || f}`)
      .join("\n");

    return {
      message: `I think you want to update the ${mentionedFields.join(" or ")}, but I couldn't figure out the new value.

Try something like:
${exampleList}`,
    };
  }

  return {
    message: `I'm here to help you update the website!

You can say things like:
• "Change the phone number to (555) 123-4567"
• "Update the email to newemail@gmail.com"
• "Show me the current info"

What would you like to change?`,
  };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message } = body;

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    // Parse the edit request
    const editRequest = parseEditRequest(message);

    // Generate response
    const response = generateResponse(message, editRequest);

    return NextResponse.json(response);
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      {
        message:
          "I'm sorry, something went wrong on my end. Could you try again?",
      },
      { status: 500 }
    );
  }
}
