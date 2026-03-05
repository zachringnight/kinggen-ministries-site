const DEFAULT_SITE_URL = "https://kinggen-ministries-site.vercel.app";
const DEFAULT_PHONE = "(817) 682-4341";

export function normalizeSiteUrl(rawUrl: string | undefined): string {
  const trimmed = rawUrl?.trim();
  if (!trimmed) return DEFAULT_SITE_URL;

  const withProtocol = /^[a-zA-Z][a-zA-Z\d+\-.]*:\/\//.test(trimmed)
    ? trimmed
    : `https://${trimmed}`;

  try {
    const parsed = new URL(withProtocol);
    if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
      return DEFAULT_SITE_URL;
    }

    return parsed.origin;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export function toPhoneHref(rawPhone: string): string {
  const trimmed = rawPhone.trim();
  const digitsOnly = trimmed.replace(/\D/g, "");

  if (!digitsOnly) return "";

  if (trimmed.startsWith("+")) {
    return `+${digitsOnly}`;
  }

  if (digitsOnly.length === 10) {
    return `+1${digitsOnly}`;
  }

  return `+${digitsOnly}`;
}

export const siteConfig = {
  name: "KingGen Ministries",
  url: normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL),
  tagline: "Gospel-centered counseling for women in need.",
  description: "A 501(c)(3) nonprofit providing free clinical pastoral counseling for women. Partner with us through referrals, donations, or grants.",
  phone: DEFAULT_PHONE,
  phoneHref: toPhoneHref(DEFAULT_PHONE),
  email: "kinggencounseling@gmail.com",
  address: {
    line1: "KingGen Ministries",
    line2: "1540 Keller Parkway",
    line3: "Suite 108, Box 102",
    city: "Keller",
    state: "TX",
    zip: "76248",
  },
  ein: "33-3032264",
  paypalUrl: "https://www.paypal.com/ncp/payment/7BTC79TNBLL8E",
  social: {
    instagram: "https://www.instagram.com/kinggenministries/",
    facebook: "https://www.facebook.com/profile.php?id=61573569056063",
  },
};

export const primaryNavLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/for-referrers", label: "For Referrers" },
  { href: "/contact", label: "Contact" },
];

export const secondaryNavLinks = [
  { href: "/for-grant-writers", label: "For Grant Writers" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/get-support", label: "Client Information", description: "Guidance for referred clients" },
  { href: "/forms", label: "Forms", description: "Intake and resources" },
];

// Legacy export retained for compatibility.
export const navLinks = [...primaryNavLinks, ...secondaryNavLinks];

export const footerLinks = [
  { href: "/get-support", label: "Client Information" },
  { href: "/forms", label: "Forms & Resources" },
  { href: "/privacy", label: "Privacy" },
  { href: "/disclaimer", label: "Disclaimer" },
];
