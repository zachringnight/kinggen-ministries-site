import { describe, expect, it } from "vitest";
import { normalizeSiteUrl, siteConfig } from "./site";

describe("normalizeSiteUrl", () => {
  it("uses the default URL when value is missing", () => {
    expect(normalizeSiteUrl(undefined)).toBe("https://kinggenministries.org");
  });

  it("adds https protocol when omitted", () => {
    expect(normalizeSiteUrl("kinggenministries.org")).toBe("https://kinggenministries.org");
  });

  it("normalizes to origin when path/query are present", () => {
    expect(normalizeSiteUrl("https://kinggenministries.org/about?from=test")).toBe("https://kinggenministries.org");
  });

  it("falls back for unsupported protocols", () => {
    expect(normalizeSiteUrl("ftp://kinggenministries.org")).toBe("https://kinggenministries.org");
  });

  it("rejects vercel.app overrides so SEO fields stay on the production domain", () => {
    expect(normalizeSiteUrl("https://kinggen-ministries-site.vercel.app")).toBe("https://kinggenministries.org");
    expect(normalizeSiteUrl("https://kinggen-ministries-site-mwqc.vercel.app")).toBe("https://kinggenministries.org");
    expect(normalizeSiteUrl("any-preview.vercel.app")).toBe("https://kinggenministries.org");
  });
});

describe("siteConfig", () => {
  it("ships the production mailing address", () => {
    expect(siteConfig.address.city).toBe("Keller");
    expect(siteConfig.address.state).toBe("TX");
  });

  it("ships the 501(c)(3) EIN", () => {
    expect(siteConfig.ein).toBe("33-3032264");
  });
});
