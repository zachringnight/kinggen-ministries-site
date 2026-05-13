export interface SectionText {
  title: string;
  subtitle?: string;
  body?: string;
}

export interface ServiceItem {
  title: string;
  description: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
}

export interface ImpactStat {
  value: number;
  suffix?: string;
  animate: boolean;
  staticValue?: string;
  label: string;
  description: string;
}

export interface AudienceCard {
  title: string;
  description: string;
  cta: string;
  href: string;
}

export interface ValueItem {
  text: string;
  desc: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}

export interface ResourceItem {
  name: string;
  description: string;
  filename: string;
}

export interface FundingNeed {
  area: string;
  description: string;
}

export interface WhatToExpectItem {
  title: string;
  description: string;
}

export interface OrgFact {
  label: string;
  value: string;
}

export interface SpeakingVenue {
  title: string;
  description: string;
}

export interface HomeContent {
  hero: {
    /** Legacy: rendered as a pill above the eyebrow. No longer displayed; kept on the type so existing CMS content stays valid. */
    badge?: string;
    eyebrow: string;
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trustBadges: string[];
    heroMetrics: { value: string; label: string }[];
    trustLine: string;
  };
  about: SectionText;
  services: SectionText & { items: ServiceItem[] };
  impact: SectionText;
  values: SectionText & { items: ValueItem[] };
  partners: SectionText & { cards: AudienceCard[] };
  commitment: {
    title: string;
    body1: string;
    body2: string;
  };
  testimonials: SectionText & { items: TestimonialItem[] };
  speaker: {
    title: string;
    body: string;
  };
  cta: {
    title: string;
    body: string;
  };
  impactStats: ImpactStat[];
}

export interface AboutContent {
  hero: SectionText;
  mission: SectionText;
  approach: {
    title: string;
    body: string;
    expectationsLabel: string;
    expectations: string[];
  };
  referrers: SectionText;
  speaking: {
    title: string;
    body: string;
    venues: SpeakingVenue[];
  };
}

export interface ServicesContent {
  hero: SectionText;
  intro: SectionText;
  services: ServiceItem[];
  cta: SectionText;
}

export interface DonateContent {
  hero: SectionText;
  impact: SectionText & { points: string[] };
  waysToGive: {
    title: string;
    online: { title: string; body: string };
    mail: { title: string; body: string };
  };
  taxInfo: {
    title: string;
    body: string;
  };
  cta: SectionText;
}

export interface ForReferrersContent {
  hero: SectionText;
  whoCanRefer: SectionText & { items: string[] };
  whenAppropriate: SectionText & { reasons: string[] };
  whatToExpect: { title: string; items: WhatToExpectItem[] };
  howToRefer: {
    title: string;
    approach: string;
    approachDetail: string;
    helpfulInfoTitle: string;
    helpfulInfo: string[];
  };
  confidentiality: {
    title: string;
    body: string;
  };
  partnerCta: SectionText;
}

export interface ForGrantWritersContent {
  hero: SectionText;
  overview: SectionText;
  missionStatement: {
    title: string;
    quote: string;
    coreActivitiesTitle: string;
    points: string[];
  };
  fundingAreas: {
    title: string;
    items: FundingNeed[];
  };
  taxExempt: {
    title: string;
    body: string;
  };
  contact: SectionText;
  footnote: string;
}

export interface GetSupportContent {
  hero: SectionText;
  intro: string;
  whatToExpect: SectionText;
  reasons: {
    title: string;
    subtitle: string;
    items: string[];
  };
  howItWorks: {
    title: string;
    steps: StepItem[];
  };
  privacy: {
    title: string;
    body: string;
    note: string;
  };
  crisis: {
    title: string;
    body: string;
    prayerNote: string;
  };
  referrerCta: SectionText;
}

export interface TestimonialsContent {
  hero: SectionText;
  testimonials: TestimonialItem[];
  hope: SectionText & { socialNote: string };
  cta: SectionText;
}

export interface FormsContent {
  hero: SectionText;
  intro: string;
  downloads: {
    title: string;
    subtitle: string;
    items: ResourceItem[];
    comingSoon: string;
  };
  needHelp: SectionText;
}

export interface PrivacyContent {
  hero: { title: string };
  intro: string;
  points: string[];
}

export interface DisclaimerContent {
  hero: { title: string };
  intro: string;
  emergency: string;
  crisis: string;
}

export interface AllContent {
  home: HomeContent;
  about: AboutContent;
  services: ServicesContent;
  donate: DonateContent;
  forReferrers: ForReferrersContent;
  forGrantWriters: ForGrantWritersContent;
  getSupport: GetSupportContent;
  testimonials: TestimonialsContent;
  forms: FormsContent;
  privacy: PrivacyContent;
  disclaimer: DisclaimerContent;
}
