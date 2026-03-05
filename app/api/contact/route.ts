import { NextResponse } from "next/server";
import {
  isContactSubmissionStorageConfigured,
  saveContactSubmission,
} from "../../lib/contact-submissions";

interface ContactPayload {
  reason?: string;
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = payload.name?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const phone = payload.phone?.trim() ?? "";
  const message = payload.message?.trim() ?? "";
  const reason = payload.reason?.trim() ?? "general-inquiry";

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  if (!isContactSubmissionStorageConfigured()) {
    return NextResponse.json({ error: "Contact form is not configured yet." }, { status: 500 });
  }

  try {
    await saveContactSubmission({
      reason,
      name,
      email,
      phone,
      message,
      submittedAt: new Date().toISOString(),
      source: "website-contact-form",
      metadata: {
        ipAddress: request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null,
        userAgent: request.headers.get("user-agent"),
      },
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "We could not send your message right now. Please try again." },
      { status: 503 }
    );
  }
}
