import { describe, expect, it } from "vitest";
import { normalizeSiteUrl, siteConfig, toPhoneHref } from "./site";

describe("normalizeSiteUrl", () => {
  it("uses the default URL when value is missing", () => {
    expect(normalizeSiteUrl(undefined)).toBe("https://kinggen-ministries-site.vercel.app");
  });

  it("adds https protocol when omitted", () => {
    expect(normalizeSiteUrl("kinggenministries.org")).toBe("https://kinggenministries.org");
  });

  it("normalizes to origin when path/query are present", () => {
    expect(normalizeSiteUrl("https://kinggenministries.org/contact?from=test")).toBe(
      "https://kinggenministries.org"
    );
  });

  it("falls back for unsupported protocols", () => {
    expect(normalizeSiteUrl("ftp://kinggenministries.org")).toBe(
      "https://kinggen-ministries-site.vercel.app"
    );
  });
});

describe("toPhoneHref", () => {
  it("formats US display phone numbers for tel links", () => {
    expect(toPhoneHref("(817) 682-4341")).toBe("+18176824341");
  });

  it("preserves international numbers with explicit plus", () => {
    expect(toPhoneHref("+44 20 7946 0018")).toBe("+442079460018");
  });

  it("returns empty when no digits are present", () => {
    expect(toPhoneHref("N/A")).toBe("");
  });
});

describe("siteConfig", () => {
  it("exposes a normalized phoneHref used by tel links", () => {
    expect(siteConfig.phoneHref).toBe("+18176824341");
  });
});
