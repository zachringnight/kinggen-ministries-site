import { NextResponse } from "next/server";
import { put, list } from "@vercel/blob";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body || typeof body !== "object" || !body.changes || !body.fullContent) {
      return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
    }

    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const filename = `content-edits/draft-${timestamp}.json`;

    const blob = await put(filename, JSON.stringify(body, null, 2), {
      access: "public",
      contentType: "application/json",
    });

    return NextResponse.json({ success: true, url: blob.url });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function GET() {
  try {
    const { blobs } = await list({ prefix: "content-edits/" });

    const drafts = blobs
      .sort((a, b) => new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime())
      .map((b) => ({
        url: b.url,
        uploadedAt: b.uploadedAt,
        size: b.size,
        pathname: b.pathname,
      }));

    return NextResponse.json({ drafts });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
