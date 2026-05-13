/**
 * Seed script: extracts all hardcoded content from page components
 * and writes it to Vercel Blob as JSON files.
 *
 * Run once: npx tsx scripts/seed-content.ts
 *
 * Requires BLOB_READ_WRITE_TOKEN in .env.local or environment.
 */

import "dotenv/config";
import { put } from "@vercel/blob";

const CONTENT_PREFIX = "content/";

async function savePageContent(page: string, content: Record<string, unknown>) {
  const blob = await put(
    `${CONTENT_PREFIX}${page}.json`,
    JSON.stringify(
      {
        ...content,
        _meta: {
          updatedAt: new Date().toISOString(),
          updatedBy: "seed-script",
        },
      },
      null,
      2,
    ),
    {
      access: "public",
      addRandomSuffix: false,
      contentType: "application/json",
    },
  );
  console.log(`  ✓ ${page} → ${blob.url}`);
  return blob;
}

// ---------------------------------------------------------------------------
// Content definitions (extracted from each page component)
// ---------------------------------------------------------------------------

const homeContent = {
  hero: {
    badge: "501(c)(3) Christian Counseling Nonprofit",
    headline: "Free Gospel-centered counseling for women in need.",
    pills: ["No-cost client services", "Licensed clinical pastoral counselor", "Confidential & private"],
    hero_metrics: [
      { value: "15+", label: "Years of care" },
      { value: "100%", label: "No-cost sessions" },
      { value: "501(c)(3)", label: "Nonprofit stewardship" },
    ],
    cta_primary_text: "Refer a Client",
    cta_primary_href: "/for-referrers",
    cta_secondary_text: "Support Our Mission",
    cta_secondary_href: "/donate",
  },
  about: {
    title: "About our ministry",
    subtitle:
      "KingGen Ministries is a 501(c)(3) nonprofit providing free, confidential, Gospel-centered counseling to women in need.",
  },
  services: {
    title: "Our services",
    subtitle: "Compassionate, professional counseling rooted in faith and clinical training.",
    items: [
      {
        icon: "HeartIcon",
        title: "Pastoral Counseling",
        description: "One-on-one sessions that integrate clinical expertise with Gospel truth.",
      },
      {
        icon: "ShieldIcon",
        title: "Crisis & Trauma Support",
        description: "Compassionate care for women walking through grief, abuse, or life-altering events.",
      },
      {
        icon: "CrossIcon",
        title: "Spiritual & Emotional Growth",
        description: "Helping women grow in identity, confidence, and Christ-centered resilience.",
      },
    ],
  },
  impact: {
    title: "Our impact",
    subtitle: "Every number represents a life touched by compassion and Gospel-centered care.",
    stats: [
      {
        value: 100,
        suffix: "%",
        animate: true,
        label: "Free Services",
        description: "No cost to clients",
      },
      {
        value: 501,
        staticValue: "501(c)(3)",
        animate: false,
        label: "Nonprofit Status",
        description: "Tax-deductible gifts",
      },
      {
        value: 15,
        suffix: "+",
        animate: true,
        label: "Years Experience",
        description: "Clinical pastoral care",
      },
      {
        value: 24,
        staticValue: "24/7",
        animate: false,
        label: "Confidential",
        description: "Private & secure",
      },
    ],
  },
  values: {
    title: "What sets KingGen apart",
    items: [
      {
        icon: "CrossIcon",
        text: "Gospel-centered, compassionate care",
        description: "Rooted in Scripture and clinical training",
      },
      {
        icon: "ShieldIcon",
        text: "Confidential and trauma-informed",
        description: "Private, safe, and respectful of each woman",
      },
      {
        icon: "UsersIcon",
        text: "No cost barrier for clients",
        description: "Free services funded by donors and grants",
      },
      {
        icon: "CheckCircleIcon",
        text: "501(c)(3) nonprofit accountability",
        description: "Transparent stewardship of every gift",
      },
    ],
  },
  audience: {
    title: "Partner with us",
    cards: [
      {
        icon: "UsersIcon",
        iconColor: "brand-primary",
        title: "Referrers",
        description: "Pastors, counselors, and community leaders who connect women with care.",
        cta: "Learn More",
        href: "/for-referrers",
      },
      {
        icon: "HeartIcon",
        iconColor: "brand-accent",
        title: "Donors",
        description: "Generous supporters who make free counseling possible.",
        cta: "Give Today",
        href: "/donate",
      },
      {
        icon: "GiftIcon",
        iconColor: "brand-secondary",
        title: "Grant Writers",
        description: "Professionals seeking organization and program information.",
        cta: "View Details",
        href: "/for-grant-writers",
      },
    ],
  },
  testimonials: {
    title: "What partners say",
    subtitle: "Hear from those who have experienced or supported the mission of KingGen Ministries.",
    items: [
      {
        quote:
          "In our ministry, there are times when we deal with female members inside or outside our Church body, who need counseling for many issues: marriage, depression, kids, life structure, personal decisions, etc. Our Deacon body is very confident to send these women to our associate Dr. LeeAnn Howarth at KingGen Ministries in Keller, Texas. LeeAnn is a highly qualified Christian Counselor who exudes integrity and wisdom. If your ministry is looking for a qualified Christian Counselor specializing in helping women, I highly recommend Dr. LeeAnn Howarth at KingGen Ministries!",
        author: "Dennis S.",
        role: "Chairman of Deacons, First Baptist Church - Watauga, TX",
        initial: "D",
      },
    ],
  },
  speaking: {
    title: "Invite LeeAnn to speak",
    description:
      "LeeAnn King is available for speaking engagements at churches, retreats, conferences, and podcasts on topics including pastoral counseling, women's ministry, faith and mental health, and nonprofit leadership.",
  },
  commitment: {
    title: "Our commitment",
    description:
      "KingGen Ministries is a registered 501(c)(3) nonprofit. Every gift is tax-deductible and goes directly toward providing free counseling for women in need.",
  },
  cta: {
    title: "Ready to partner with us?",
    description:
      "Whether you want to refer someone, support the mission, or learn more about our work, we would love to connect.",
  },
};

const aboutContent = {
  hero: {
    title: "About KingGen Ministries",
    subtitle: "A Gospel-centered counseling ministry serving women in need.",
    background: "about",
  },
  mission: {
    title: "Mission",
    text: "At KingGen Ministries, we believe everyone should have access to counseling. As a 501(c)(3), we offer Gospel-centered counseling for women in need by a licensed clinical pastoral counselor.",
  },
  heart: {
    title: "Our heart and approach",
    text: "We believe the Gospel brings hope, truth, and healing. Counseling is a place to bring what feels heavy into the light, to be met with compassion, and to take wise steps forward.",
  },
  expectations: [
    "kindness and respect",
    "a steady pace and clear next steps",
    "faith-rooted care grounded in Scripture",
    "practical guidance for everyday life",
  ],
  referrer_trust: {
    title: "A ministry you can refer to with confidence",
    subtitle:
      "We partner with pastors, counselors, and community leaders who trust us to care for the women they serve.",
  },
  speaking: {
    title: "Book LeeAnn as a speaker",
    description: "LeeAnn King brings warmth, wisdom, and clinical insight to every speaking engagement.",
    cards: [
      {
        title: "Churches & Retreats",
        description: "Faith-centered messages on hope, healing, and resilience for women.",
      },
      {
        title: "Podcasts & Interviews",
        description: "Conversations on pastoral counseling, faith, and mental health.",
      },
      {
        title: "Conferences & Panels",
        description: "Professional insights on nonprofit leadership and Gospel-centered care.",
      },
    ],
  },
};

const servicesContent = {
  hero: {
    title: "Our Services",
    subtitle: "Compassionate, Gospel-centered counseling at no cost to clients.",
    background: "inner-logo",
  },
  intro: {
    title: "Counseling support rooted in hope",
    subtitle: "Every woman deserves access to care. We offer a range of services designed to meet you where you are.",
  },
  services: [
    {
      icon: "HeartIcon",
      title: "Individual Pastoral Counseling",
      description:
        "One-on-one sessions integrating clinical expertise with Gospel truth for emotional and spiritual healing.",
    },
    {
      icon: "CrossIcon",
      title: "Grief & Loss Care",
      description: "Compassionate support for women navigating death, divorce, miscarriage, or other significant loss.",
    },
    {
      icon: "ShieldIcon",
      title: "Trauma & Crisis Support",
      description: "Trauma-informed care for women walking through abuse, domestic violence, or life-altering events.",
    },
    {
      icon: "UsersIcon",
      title: "Relationship & Family Support",
      description: "Guidance for navigating relationship pain, family conflict, and rebuilding trust.",
    },
    {
      icon: "CheckCircleIcon",
      title: "Spiritual Care & Growth",
      description:
        "Helping women deepen their walk with Christ through seasons of doubt, discouragement, or transition.",
    },
    {
      icon: "ArrowRightIcon",
      title: "Boundaries, Identity & Confidence",
      description: "Equipping women to set healthy boundaries, reclaim identity in Christ, and grow in confidence.",
    },
  ],
  cta: {
    title: "Ready to take the next step?",
    description: "Whether you need support or want to refer someone, we are here to help.",
  },
};

const donateContent = {
  hero: {
    title: "Help Keep Counseling Free",
    subtitle: "Every gift helps remove cost barriers for women who need care.",
  },
  impact: {
    title: "Your gift makes a difference",
    subtitle: "Every donation directly supports our mission to provide free, Gospel-centered counseling.",
    points: [
      "Provides free counseling sessions for women in need",
      "Covers operational costs and outreach",
      "Supports training and resources",
      "Expands access to underserved communities",
    ],
  },
  ways_to_give: {
    title: "Ways to give",
    online: {
      title: "Online",
      description: "Give securely through PayPal. One-time or recurring gifts welcome.",
    },
    mail: {
      title: "By Mail",
      description: "Make checks payable to:",
    },
  },
  tax_deductible: {
    title: "Tax-deductible giving",
    description:
      "KingGen Ministries is a 501(c)(3) nonprofit organization. Your donation is tax-deductible to the extent allowed by law.",
  },
  cta: {
    title: "Ready to make a difference?",
    description: "Your support helps women access the care they need.",
  },
};

const forReferrersContent = {
  hero: {
    title: "For Referrers",
    subtitle: "A clear and compassionate referral pathway for women who need support.",
  },
  who_can_refer: {
    title: "Who can refer",
    subtitle: "We welcome referrals from trusted sources who are supporting women in need:",
    items: [
      "Pastors and church staff",
      "Licensed counselors and therapists",
      "Social workers and case managers",
      "Healthcare professionals",
      "Community organization leaders",
      "Trusted family members or mentors",
    ],
  },
  when_appropriate: {
    title: "When a referral may be appropriate",
    subtitle: "A referral may be a good fit when someone:",
    items: [
      "is seeking counseling support and cost is a barrier",
      "is open to Gospel-centered counseling",
      "can participate by appointment (in-person or telehealth)",
    ],
  },
  what_to_expect: {
    title: "What referrers can expect",
    items: [
      {
        title: "Confidential intake",
        description: "We protect the privacy of every woman referred to us",
      },
      {
        title: "Clear communication",
        description: "We keep referrers informed as appropriate and permitted",
      },
      {
        title: "Compassionate care",
        description: "Women receive Gospel-centered support at their own pace",
      },
      {
        title: "Professional standards",
        description: "Licensed clinical pastoral counseling with ethical guidelines",
      },
    ],
  },
  how_to_refer: {
    title: "How to refer someone",
    approach: "Submit the referral on her behalf with her awareness and consent.",
    approach_detail:
      "This helps us keep intake clear, confidential, and coordinated through trusted referral relationships.",
    helpful_info_title: "Helpful information to include:",
    helpful_info: [
      "First name of the person being referred",
      "Best contact method (email or phone)",
      "General reason for referral",
      "Any immediate safety concerns",
    ],
  },
  confidentiality: {
    title: "Confidentiality",
    text: "We do not share session details without the client's permission, except where disclosure is required by law or where there is a serious safety concern. Your referral is handled with discretion and care.",
  },
  partner: {
    title: "Partner with us",
    description:
      "If you'd like to establish an ongoing referral relationship or learn more about how KingGen can serve your community, we'd love to connect.",
  },
};

const forGrantWritersContent = {
  hero: {
    title: "For Grant Writers",
    subtitle: "Organization and program details for grant applications and funding proposals.",
  },
  organization_facts: [
    { label: "Organization Name", value: "KingGen Ministries" },
    { label: "Tax Status", value: "501(c)(3) Nonprofit" },
    { label: "EIN", value: "33-3032264" },
    { label: "Location", value: "Keller, Texas" },
    { label: "Service Area", value: "North Texas and surrounding regions" },
    { label: "Founded", value: "2023" },
  ],
  mission_statement:
    "KingGen Ministries exists so women can access counseling even when cost is a barrier. We provide free, confidential, Gospel-centered pastoral counseling by a licensed clinical pastoral counselor.",
  mission_points: [
    "Provide no-cost pastoral counseling to women in need",
    "Integrate clinical best practices with Gospel-centered care",
    "Partner with churches, ministries, and community organizations",
    "Maintain confidential, trauma-informed service delivery",
    "Steward donations and grants with transparency and accountability",
  ],
  funding_needs: [
    {
      area: "Counseling Services",
      description: "Direct session costs, intake coordination, and follow-up support.",
    },
    {
      area: "Operations",
      description: "Office space, technology, insurance, and administrative costs.",
    },
    {
      area: "Training & Development",
      description: "Continuing education, certifications, and professional development.",
    },
    {
      area: "Technology",
      description: "Secure telehealth platform, website, and donor management systems.",
    },
  ],
  tax_exempt: {
    title: "Tax-Exempt Status",
    text: "KingGen Ministries is recognized by the IRS as a 501(c)(3) tax-exempt organization.",
  },
  contact: {
    title: "Contact for Grant Inquiries",
    text: "For additional documentation, financial statements, or program details, please contact us.",
  },
};

const getSupportContent = {
  hero: {
    title: "Client Information",
    subtitle: "Helpful guidance for women and those supporting a referral.",
  },
  intro:
    "At KingGen Ministries, we believe everyone should have access to counseling. As a 501(c)(3), we offer Gospel-centered counseling for women in need by a licensed clinical pastoral counselor.",
  what_to_expect: {
    title: "What to expect",
    text: "Counseling is a place to slow down, tell the truth about what you're carrying, and take steady steps forward with hope and wisdom. You will be met with compassion and respect, at a pace that feels manageable.",
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
  how_it_works: {
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
    text: "We treat your story with care. We do not share personal information without your permission, except where disclosure is required by law or where there is a serious safety concern.",
    note: "Please keep your first message brief. We can gather details after we connect.",
  },
  crisis: {
    title: "In Crisis?",
    text: "If you or someone you know is experiencing a mental health crisis, please reach out for immediate help. You are not alone, and support is available.",
    phone: "988",
    phone_label: "Call or Text 988",
    phone_sublabel: "Suicide & Crisis Lifeline",
    note: "We are praying for you.",
  },
  referrer_cta: {
    title: "Are you a referrer?",
    text: "If you're a pastor, counselor, or community professional looking to refer someone, visit our referrer page for more information.",
  },
};

const testimonialsContent = {
  hero: {
    title: "Testimonials",
    subtitle: "Stories of hope, trust, and Gospel-centered care.",
  },
  testimonials: [
    {
      quote:
        "In our ministry, there are times when we deal with female members inside or outside our Church body, who need counseling for many issues: marriage, depression, kids, life structure, personal decisions, etc. Our Deacon body is very confident to send these women to our associate Dr. LeeAnn Howarth at KingGen Ministries in Keller, Texas. LeeAnn is a highly qualified Christian Counselor who exudes integrity and wisdom. If your ministry is looking for a qualified Christian Counselor specializing in helping women, I highly recommend Dr. LeeAnn Howarth at KingGen Ministries!",
      name: "Dennis S.",
      role: "Chairman of Deacons, First Baptist Church - Watauga, TX",
    },
  ],
  hope_section: {
    title: "Hope in Every Season",
    description: "We share encouragement through Scripture and prayer, reminding women of the hope found in Christ.",
    social_note: "Follow us on social media for daily encouragement",
  },
  cta: {
    title: "Ready to take the next step?",
    description: "Whether you need support, want to make a referral, or feel led to give, we're here.",
  },
};

const formsContent = {
  hero: {
    title: "Forms and Resources",
    subtitle: "Practical downloads and encouragement for this season.",
  },
  intro:
    "These resources are a gift of encouragement. Whether you are waiting on an appointment, processing something hard, or just need a quiet moment with the Lord, we hope these help.",
  resources: [
    {
      name: "Scripture for Anxious Moments",
      description: "A curated collection of verses for when worry or fear feels overwhelming.",
      filename: "scripture-anxious-moments.pdf",
      icon: "BookOpenIcon",
    },
    {
      name: "Prayer Guide for Hard Days",
      description: "Simple, honest prayers for grief, confusion, anger, and hope.",
      filename: "prayer-guide-hard-days.pdf",
      icon: "HeartIcon",
    },
    {
      name: "Journaling Prompts for Healing",
      description: "Guided questions to help you process, reflect, and grow.",
      filename: "journaling-prompts-healing.pdf",
      icon: "DocumentIcon",
    },
    {
      name: "Daily Encouragement Cards",
      description: "Printable cards with Scripture and affirmations to carry with you.",
      filename: "daily-encouragement-cards.pdf",
      icon: "SunIcon",
    },
  ],
  need_support: {
    title: "Need someone to talk to?",
    description:
      "These resources are helpful, but they're no substitute for real support. If you or someone you know needs counseling, we're here.",
  },
};

const privacyContent = {
  hero: {
    title: "Privacy and Confidentiality",
    background: "kinggen-branded",
  },
  content: [
    "Your privacy matters. KingGen Ministries protects client confidentiality and does not share personal information without your consent, except where required by law or in cases involving imminent danger.",
    "Information submitted through our website contact form is handled securely and used only for intake and communication purposes.",
    "If you or someone you know is in immediate danger, please call 911 or the 988 Suicide & Crisis Lifeline.",
  ],
};

const disclaimerContent = {
  hero: {
    title: "Disclaimer",
    background: "kinggen-branded",
  },
  emergency: {
    text: "If you are in crisis or immediate danger, please call 911 or the 988 Suicide & Crisis Lifeline.",
    phone_911: "911",
    phone_988: "988",
  },
};

const siteConfigContent = {
  name: "KingGen Ministries",
  tagline: "Gospel-centered counseling for women in need.",
  description:
    "A 501(c)(3) nonprofit providing free clinical pastoral counseling for women in need. Confidential, compassionate, Christ-centered care.",
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

// ---------------------------------------------------------------------------
// Run seed
// ---------------------------------------------------------------------------

const allContent: Record<string, Record<string, unknown>> = {
  home: homeContent,
  about: aboutContent,
  services: servicesContent,
  donate: donateContent,
  "for-referrers": forReferrersContent,
  "for-grant-writers": forGrantWritersContent,
  "get-support": getSupportContent,
  testimonials: testimonialsContent,
  forms: formsContent,
  privacy: privacyContent,
  disclaimer: disclaimerContent,
  "site-config": siteConfigContent,
};

async function main() {
  console.log("Seeding Vercel Blob content store...\n");

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    console.error("ERROR: BLOB_READ_WRITE_TOKEN is not set.");
    console.error("Set it in .env.local or your environment.");
    process.exit(1);
  }

  for (const [page, content] of Object.entries(allContent)) {
    await savePageContent(page, content);
  }

  console.log(`\nDone! Seeded ${Object.keys(allContent).length} content files.`);
}

main().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
