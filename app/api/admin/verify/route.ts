import { NextRequest, NextResponse } from "next/server";

// PIN is stored as environment variable for security
// Set ADMIN_PIN in your Vercel environment variables
const ADMIN_PIN = process.env.ADMIN_PIN || "1234"; // Default for development

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { pin } = body;

    if (!pin || typeof pin !== "string") {
      return NextResponse.json(
        { success: false, error: "PIN is required" },
        { status: 400 }
      );
    }

    // Simple PIN check
    const isValid = pin === ADMIN_PIN;

    if (isValid) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { success: false, error: "Invalid PIN" },
        { status: 401 }
      );
    }
  } catch {
    return NextResponse.json(
      { success: false, error: "Something went wrong" },
      { status: 500 }
    );
  }
}
