import { NextRequest, NextResponse } from "next/server";

const DEFAULT_CANONICAL_URL = "https://kinggenministries.org";

function normalizeSiteUrl(rawUrl: string | undefined): URL {
  const trimmed = rawUrl?.trim();
  if (!trimmed) return new URL(DEFAULT_CANONICAL_URL);

  const withProtocol = /^[a-zA-Z][a-zA-Z\d+\-.]*:\/\//.test(trimmed)
    ? trimmed
    : `https://${trimmed}`;

  try {
    const parsed = new URL(withProtocol);
    if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
      return new URL(DEFAULT_CANONICAL_URL);
    }
    if (parsed.hostname.toLowerCase().endsWith(".vercel.app")) {
      return new URL(DEFAULT_CANONICAL_URL);
    }

    return new URL(parsed.origin);
  } catch {
    return new URL(DEFAULT_CANONICAL_URL);
  }
}

const canonicalUrl = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);
// Use hostname (not host) so the comparison stays stable even when
// NEXT_PUBLIC_SITE_URL carries a non-default port; getRequestHost() and
// redirectHosts are both portless, so a port-bearing canonicalHost would
// otherwise fail to filter itself out and risk a 308 redirect loop.
const canonicalHost = canonicalUrl.hostname.toLowerCase();

const redirectHosts = new Set(
  [
    "www.kinggenministries.org",
    "kinggen-ministries-site.vercel.app",
  ].filter((host) => host !== canonicalHost)
);

function getRequestHost(request: NextRequest): string {
  const rawHost = request.headers.get("host") ?? "";
  return rawHost.split(":")[0].toLowerCase();
}

export function proxy(request: NextRequest) {
  const requestHost = getRequestHost(request);
  if (!redirectHosts.has(requestHost)) {
    return NextResponse.next();
  }

  const redirectUrl = request.nextUrl.clone();
  redirectUrl.protocol = canonicalUrl.protocol;
  redirectUrl.hostname = canonicalUrl.hostname;
  redirectUrl.port = canonicalUrl.port;

  return NextResponse.redirect(redirectUrl, 308);
}

export const config = {
  matcher: ["/:path*"],
};
