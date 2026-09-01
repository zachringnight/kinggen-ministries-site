import type { GetSupportContent } from "./types";

export const getSupportContent: GetSupportContent = {
  hero: {
    title: "Client Information",
    subtitle: "Helpful guidance for women and those supporting a referral.",
  },
  intro:
    "At KingGen Ministries, we believe everyone should have access to counseling. As a 501(c)(3), we offer Gospel-centered counseling for women in need by a licensed clinical pastoral counselor.",
  whatToExpect: {
    title: "What to expect",
    subtitle:
      "Counseling is a place to slow down, tell the truth about what you're carrying, and take steady steps forward with hope and wisdom. You will be met with compassion and respect, at a pace that feels manageable.",
  },
  reasons: {
    title: "You don't have to have the perfect words",
    subtitle: "Women are referred for many reasons, including:",
    items: [
      "anxiety, stress, or burnout",
      "grief and loss",
      "relationship pain or family conflict",
      "trauma and life transitions",
      "spiritual discouragement",
      "boundaries, identity, and rebuilding confidence",
    ],
  },
  howItWorks: {
    title: "How it works",
    steps: [
      {
        number: "1",
        title: "Your referrer reaches out",
        description:
          "The pastor, counselor, or trusted person who shared this page contacts us on your behalf with your permission.",
      },
      {
        number: "2",
        title: "We follow up",
        description: "We'll respond and help clarify next steps together.",
      },
      {
        number: "3",
        title: "Forms and scheduling",
        description: "If it's a fit, we'll share any needed forms and coordinate an appointment.",
      },
    ],
  },
  privacy: {
    title: "Privacy and confidentiality",
    body: "We treat your story with care. We do not share personal information without your permission, except where disclosure is required by law or where there is a serious safety concern.",
    note: "Please keep your first message brief. We can gather details after we connect.",
  },
  crisis: {
    title: "In Crisis?",
    body: "If you or someone you know is experiencing a mental health crisis, please reach out for immediate help. You are not alone, and support is available.",
    prayerNote: "We are praying for you.",
    actions: [
      { label: "Call 988", href: "tel:988" },
      { label: "Text 988", href: "sms:988" },
    ],
  },
  referrerCta: {
    title: "Are you a referrer?",
    subtitle:
      "If you're a pastor, counselor, or community professional looking to refer someone, visit our referrer page for more information.",
  },
};
