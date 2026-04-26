import type { HomeContent } from "./types";

export const homeContent: HomeContent = {
  hero: {
    badge: "501(c)(3) Christian Counseling Nonprofit",
    eyebrow: "Clinical pastoral counseling ministry",
    headline: "Free Gospel-centered counseling for women in need.",
    subheadline: "Compassionate, confidential pastoral care offered at no cost. For referrals, donors, and ministry partners.",
    ctaPrimary: "Start a Referral Conversation",
    ctaSecondary: "Support the Mission",
    trustBadges: [
      "No-cost client services",
      "Licensed clinical pastoral counselor",
      "Confidential & private",
    ],
    heroMetrics: [
      { value: "15+", label: "Years of care" },
      { value: "100%", label: "No-cost sessions" },
      { value: "501(c)(3)", label: "Nonprofit stewardship" },
    ],
    trustLine: "Trusted by pastors, church leaders, social workers, and community referrers.",
  },
  about: {
    title: "About our ministry",
    subtitle: "At KingGen Ministries, we believe everyone should have access to counseling. As a 501(c)(3), we offer Gospel-centered counseling for women in need by a licensed clinical pastoral counselor.",
  },
  services: {
    title: "Our services",
    subtitle: "Free, Gospel-centered clinical pastoral counseling for women in need.",
    items: [
      {
        title: "Individual Pastoral Counseling",
        description: "Gospel-centered support for anxiety, stress, grief, and life transitions - offered at no cost to clients.",
      },
      {
        title: "Crisis & Trauma Support",
        description: "Compassionate, confidential care for women walking through trauma, crisis, and seasons of deep pain.",
      },
      {
        title: "Spiritual & Emotional Growth",
        description: "Help with boundaries, identity, confidence, and spiritual discouragement - rooted in Scripture and hope.",
      },
    ],
  },
  impact: {
    title: "Our impact",
    subtitle: "Making a difference in women's lives through Gospel-centered care",
  },
  impactStats: [
    { value: 100, suffix: "%", animate: true, label: "Free Services", description: "No cost to clients" },
    { value: 501, staticValue: "501(c)(3)", animate: false, label: "Nonprofit Status", description: "Tax-deductible gifts" },
    { value: 15, suffix: "+", animate: true, label: "Years Experience", description: "Clinical pastoral care" },
    { value: 24, staticValue: "24/7", animate: false, label: "Confidential", description: "Private & secure" },
  ],
  values: {
    title: "What sets KingGen apart",
    subtitle: "We are a trusted partner for churches, community organizations, and foundations seeking to support women's mental health and spiritual care.",
    items: [
      { text: "Gospel-centered, compassionate care", desc: "Rooted in Scripture and clinical training" },
      { text: "Confidential and trauma-informed", desc: "Private, safe, and respectful of each woman" },
      { text: "No cost barrier for clients", desc: "Free services funded by donors and grants" },
      { text: "501(c)(3) nonprofit accountability", desc: "Transparent stewardship of every gift" },
    ],
  },
  partners: {
    title: "Partner with us",
    cards: [
      {
        title: "Referrers",
        description: "For pastors, churches, social workers, and trusted professionals looking for a compassionate referral option for women in need.",
        href: "/for-referrers",
        cta: "For Referrers",
      },
      {
        title: "Donors",
        description: "Your tax-deductible gift helps remove cost barriers and ensures women receive the care they need.",
        href: "/donate",
        cta: "Donate",
      },
      {
        title: "Grant Writers & Foundations",
        description: "Access organizational information, impact data, and resources to support grant applications.",
        href: "/for-grant-writers",
        cta: "For Grant Writers",
      },
    ],
  },
  commitment: {
    title: "Our commitment",
    body1: "As a 501(c)(3) nonprofit, KingGen Ministries is committed to stewardship, transparency, and accountability. Every donation directly supports our mission to provide free counseling for women in need.",
    body2: "We partner with churches, community organizations, and foundations who share our vision.",
  },
  testimonials: {
    title: "What partners say",
    subtitle: "Hear from pastors, referrers, and community partners who trust KingGen Ministries.",
    items: [
      {
        quote: "In our ministry, there are times when we deal with female members inside or outside our Church body, who need counseling for many issues: marriage, depression, kids, life structure, personal decisions, etc. Our Deacon body is very confident to send these women to our associate Dr. LeeAnn Howarth at KingGen Ministries in Keller, Texas. LeeAnn is a highly qualified Christian Counselor who exudes integrity and wisdom. If your ministry is looking for a qualified Christian Counselor specializing in helping women, I highly recommend Dr. LeeAnn Howarth at KingGen Ministries!",
        author: "Dennis S.",
        role: "Chairman of Deacons, First Baptist Church - Watauga, TX",
      },
    ],
  },
  speaker: {
    title: "Invite LeeAnn to speak",
    body: "LeeAnn is available for speaking engagements, podcast interviews, and ministry events. Her heart is to encourage women and share the hope of the Gospel.",
  },
  cta: {
    title: "Ready to partner with us?",
    body: "Whether you're making a referral, considering a donation, or exploring grant opportunities, we'd love to connect.",
  },
};
