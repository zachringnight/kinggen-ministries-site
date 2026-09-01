import { describe, expect, it } from "vitest";
import { normalizeSiteUrl, primaryNavLinks, secondaryNavLinks, siteConfig } from "./site";

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

  it("ships the current Venture Church service boundary", () => {
    expect(siteConfig.serviceAvailability).toEqual({
      acceptingExternalReferrals: false,
      notice: "Currently only serving the community of Venture Church in Keller, TX.",
      memberGuidance:
        "If you are part of the Venture Church community and would like counseling support, please connect with the church care team for next steps.",
      memberNextStep: {
        label: "Contact Venture Church",
        href: "https://venturechurch.net/contact/",
      },
      currentCommunityDescription:
        "KingGen Ministries currently provides no-cost, Gospel-centered counseling for women in the Venture Church community through a licensed clinical pastoral counselor.",
      outsideCommunityGuidance:
        "If you are outside the Venture Church community, KingGen Ministries is unable to offer counseling services at this time.",
    });
  });

  it("keeps curated Instagram highlights in configuration with explicit destinations", () => {
    expect(siteConfig.social.instagramHighlights).toHaveLength(3);

    for (const highlight of siteConfig.social.instagramHighlights) {
      expect(highlight.src).toMatch(/^\/brand\/social\//);
      expect(highlight.alt.length).toBeGreaterThan(0);
      expect(highlight.title.length).toBeGreaterThan(0);
      expect(highlight.href).toMatch(/^https:\/\/www\.instagram\.com\//);
    }
  });

  it("keeps referral links out of public navigation while external referrals are closed", () => {
    expect([...primaryNavLinks, ...secondaryNavLinks].map((link) => link.href)).not.toContain("/for-referrers");
    expect(secondaryNavLinks.map((link) => link.href)).not.toContain("/testimonials");
  });

  it("promotes client information and Instagram in public navigation", () => {
    expect(primaryNavLinks.map((link) => link.href)).toContain("/get-support");
    expect(secondaryNavLinks).toContainEqual({
      href: "https://www.instagram.com/kinggenministries/",
      label: "Instagram",
      description: "Follow @kinggenministries",
      external: true,
    });
  });
});
