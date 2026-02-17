export const siteConfig = {
  name: "KingGen Ministries",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://kinggenministries.org",
  tagline: "Gospel-centered counseling for women in need.",
  description: "A 501(c)(3) nonprofit providing free clinical pastoral counseling for women. Partner with us through referrals, donations, or grants.",
  phone: "(817) 682-4341",
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
  formspreeEndpoint: process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "https://formspree.io/f/your-form-id",
  social: {
    instagram: "https://www.instagram.com/kinggenministries/",
    facebook: "https://www.facebook.com/profile.php?id=61573569056063",
  },
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/for-referrers", label: "For Referrers" },
  { href: "/for-grant-writers", label: "For Grant Writers" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export const footerLinks = [
  { href: "/get-support", label: "Client Information" },
  { href: "/forms", label: "Forms & Resources" },
  { href: "/privacy", label: "Privacy" },
  { href: "/disclaimer", label: "Disclaimer" },
];
