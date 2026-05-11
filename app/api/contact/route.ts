import { NextResponse } from "next/server";

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

function getFormEndpoint(): string | null {
  const endpoint = (process.env.FORMSPREE_ENDPOINT ?? process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "").trim();
  if (!endpoint || endpoint.includes("your-form-id")) {
    return null;
  }
  return endpoint;
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

  const endpoint = getFormEndpoint();
  if (!endpoint) {
    return NextResponse.json({ error: "Contact form is not configured yet." }, { status: 500 });
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        reason,
        name,
        email,
        phone,
        message,
        _subject: "New inquiry from KingGen website",
      }),
    });

    if (!response.ok) {
      const responsePayload = await response.json().catch(() => null);
      const errorMessage = responsePayload?.errors?.[0]?.message || "We could not submit your message.";
      console.error(`[contact] Formspree returned ${response.status} for endpoint ${endpoint}:`, responsePayload);
      return NextResponse.json({ error: errorMessage }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(`[contact] fetch to endpoint failed (endpoint=${endpoint}):`, error);
    return NextResponse.json({ error: "We could not send your message right now. Please try again." }, { status: 503 });
  }
}
