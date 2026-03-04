import { NextResponse } from "next/server";

interface SubmitPayload {
  changes: { page: string; field: string; oldValue: string; newValue: string }[];
  fullContent: Record<string, unknown>;
}

function getFormEndpoint(): string | null {
  const endpoint = (
    process.env.FORMSPREE_ENDPOINT ??
    process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ??
    ""
  ).trim();
  if (!endpoint || endpoint.includes("your-form-id")) {
    return null;
  }
  return endpoint;
}

function buildChangeSummary(
  changes: SubmitPayload["changes"]
): string {
  if (changes.length === 0) return "No changes were made.";

  const byPage = new Map<string, SubmitPayload["changes"]>();
  for (const c of changes) {
    const list = byPage.get(c.page) || [];
    list.push(c);
    byPage.set(c.page, list);
  }

  const lines: string[] = [
    `${changes.length} field(s) changed across ${byPage.size} page(s):`,
    "",
  ];

  for (const [page, pageChanges] of byPage) {
    lines.push(`--- ${page} ---`);
    for (const c of pageChanges) {
      lines.push(`  Field: ${c.field}`);
      lines.push(`  Was: "${truncate(c.oldValue, 120)}"`);
      lines.push(`  Now: "${truncate(c.newValue, 120)}"`);
      lines.push("");
    }
  }

  return lines.join("\n");
}

function truncate(s: string, max: number): string {
  if (s.length <= max) return s;
  return s.slice(0, max) + "…";
}

export async function POST(request: Request) {
  let payload: SubmitPayload;

  try {
    payload = (await request.json()) as SubmitPayload;
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  if (!payload.changes || !Array.isArray(payload.changes)) {
    return NextResponse.json(
      { error: "Missing changes list." },
      { status: 400 }
    );
  }

  const endpoint = getFormEndpoint();
  if (!endpoint) {
    return NextResponse.json(
      { error: "Email is not configured yet. Please set up Formspree." },
      { status: 500 }
    );
  }

  const summary = buildChangeSummary(payload.changes);

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _subject: `KingGen Content Edits — ${payload.changes.length} change(s) submitted`,
        message: summary,
        fullContentJson: JSON.stringify(payload.fullContent),
      }),
    });

    if (!response.ok) {
      const body = await response.json().catch(() => null);
      const msg =
        body?.errors?.[0]?.message || "Could not send edits. Please try again.";
      return NextResponse.json({ error: msg }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Could not send edits right now. Please try again later." },
      { status: 503 }
    );
  }
}
