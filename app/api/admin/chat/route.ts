import { NextRequest, NextResponse } from "next/server";

// Current site configuration for reference
import { siteConfig } from "../../../config/site";

// Message history type for future Claude API integration
// interface ChatMessage {
//   role: "user" | "assistant";
//   content: string;
// }

// Simple pattern matching for common edit requests
// This can be enhanced with actual Claude API integration
function parseEditRequest(message: string): {
  field: string;
  newValue: string;
  oldValue: string;
} | null {
  const lowerMessage = message.toLowerCase();

  // Phone number changes
  const phoneMatch = message.match(
    /(?:change|update|set)\s+(?:the\s+)?phone\s*(?:number)?\s+(?:to\s+)?["']?([(\d)\s-]+)["']?/i
  );
  if (phoneMatch || lowerMessage.includes("phone")) {
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
  const emailMatch = message.match(
    /(?:change|update|set)\s+(?:the\s+)?email\s*(?:address)?\s+(?:to\s+)?["']?([^\s"']+@[^\s"']+)["']?/i
  );
  if (emailMatch) {
    return {
      field: "email",
      newValue: emailMatch[1],
      oldValue: siteConfig.email,
    };
  }
  // Also check for email in the message
  const emailInMessage = message.match(/[\w.-]+@[\w.-]+\.\w+/);
  if (emailInMessage && lowerMessage.includes("email")) {
    return {
      field: "email",
      newValue: emailInMessage[0],
      oldValue: siteConfig.email,
    };
  }

  // Tagline changes
  const taglineMatch = message.match(
    /(?:change|update|set)\s+(?:the\s+)?tagline\s+(?:to\s+)?["'](.+?)["']/i
  );
  if (taglineMatch) {
    return {
      field: "tagline",
      newValue: taglineMatch[1],
      oldValue: siteConfig.tagline,
    };
  }

  // Description changes
  const descMatch = message.match(
    /(?:change|update|set)\s+(?:the\s+)?description\s+(?:to\s+)?["'](.+?)["']/i
  );
  if (descMatch) {
    return {
      field: "description",
      newValue: descMatch[1],
      oldValue: siteConfig.description,
    };
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

• **Phone number** - "Change the phone number to (555) 123-4567"
• **Email address** - "Update the email to newemail@gmail.com"
• **Tagline** - "Change the tagline to 'Your new tagline here'"
• **Description** - "Update the description to 'New description here'"

Just tell me what you'd like to change, and I'll show you a preview before making any changes.`,
    };
  }

  // Current info request
  if (
    lowerMessage.includes("current") ||
    lowerMessage.includes("what is") ||
    lowerMessage.includes("show me")
  ) {
    return {
      message: `Here's the current site information:

• **Phone:** ${siteConfig.phone}
• **Email:** ${siteConfig.email}
• **Tagline:** ${siteConfig.tagline}

Would you like to change any of these?`,
    };
  }

  // Couldn't understand
  if (
    lowerMessage.includes("phone") ||
    lowerMessage.includes("email") ||
    lowerMessage.includes("tagline")
  ) {
    return {
      message: `I think you want to make a change, but I'm not quite sure what the new value should be.

Could you try again with something like:
• "Change the phone number to (555) 123-4567"
• "Update the email to newemail@gmail.com"
• "Change the tagline to 'Your new tagline'"`,
    };
  }

  return {
    message: `I'm here to help you update the website! You can ask me to:

• Change the phone number
• Update the email address
• Edit the tagline
• Modify the site description

Just tell me what you'd like to change and what the new value should be.`,
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
