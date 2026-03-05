import type { Metadata } from "next";
import { siteConfig } from "../config/site";
import {
  Section,
  SectionHeader,
  Button,
  CheckCircleIcon,
  ArrowRightIcon,
  MailIcon,
  FadeIn,
  StaggerContainer,
  StaggerItem,
  InnerPageHero,
} from "../components";
import { getPageContent } from "../lib/content";

export const metadata: Metadata = {
  title: "For Grant Writers",
  description:
    "Organizational information, funding priorities, and partnership context for grant writers and foundations supporting KingGen Ministries.",
};

const DEFAULT_HERO = {
  title: "For Grant Writers and Foundations",
  subtitle: "Organizational details and mission context to support partnership opportunities.",
};

const DEFAULT_ORG_FACTS = [
  { label: "Organization Name", value: "KingGen Ministries" },
  { label: "Tax Status", value: "501(c)(3) Nonprofit" },
  { label: "EIN", value: siteConfig.ein },
  { label: "Location", value: "Keller, Texas" },
  { label: "Service Area", value: "North Texas and surrounding regions" },
  { label: "Founded", value: "2023" },
];

const DEFAULT_MISSION_POINTS = [
  "Provide Gospel-centered clinical pastoral counseling for women",
  "Remove cost barriers so women in need can access care",
  "Serve women facing anxiety, grief, trauma, and life transitions",
  "Partner with churches and community organizations for referrals",
  "Maintain confidentiality, compassion, and professionalism",
];

const DEFAULT_FUNDING_NEEDS = [
  { area: "Counseling Services", description: "Direct support for counseling sessions and client care" },
  { area: "Operations", description: "Administrative costs, communications, and outreach" },
  { area: "Training & Development", description: "Continuing education and professional development" },
  { area: "Technology", description: "Secure platforms for scheduling and telehealth" },
];

const DEFAULT_PARTNER_NOTES = [
  "501(c)(3) nonprofit structure and donor stewardship",
  "Direct-service counseling mission with cost barriers removed",
  "Documentation available for verified grant and foundation partners",
];

const DEFAULT_DOCUMENTS_AVAILABLE = [
  "IRS determination and tax-exempt confirmation",
  "Organizational overview and mission context",
  "Funding priorities and current ministry needs",
  "Additional reports or supporting materials upon request",
];

export const revalidate = 60;

export default async function ForGrantWriters() {
  const content = await getPageContent("for-grant-writers");
  const hero = { ...DEFAULT_HERO, ...(content?.hero as Record<string, unknown>) };
  const organizationFacts = (content?.organizationFacts as typeof DEFAULT_ORG_FACTS) ?? DEFAULT_ORG_FACTS;
  const missionPoints = (content?.missionPoints as string[]) ?? DEFAULT_MISSION_POINTS;
  const fundingNeeds = (content?.fundingNeeds as typeof DEFAULT_FUNDING_NEEDS) ?? DEFAULT_FUNDING_NEEDS;
  const overviewFacts = organizationFacts.slice(0, 3);

  return (
    <>
      <InnerPageHero
        title={hero.title as string}
        subtitle={hero.subtitle as string}
        background="inner"
        ariaLabel="For Grant Writers and Foundations"
      />

      <Section variant="cross-light" padding="lg">
        <div className="grid max-w-5xl mx-auto gap-6 lg:grid-cols-[0.92fr,1.08fr] items-start">
          <FadeIn>
            <div className="brand-panel brand-panel-mist brand-panel-frame brand-panel-accent-top p-6 md:p-8">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-brand-primary/72">
                Grant & Foundation Partners
              </p>
              <h2 className="mt-3 text-2xl md:text-[2rem] font-bold font-heading text-text-primary">
                The essentials, without making you dig for them.
              </h2>
              <p className="mt-4 text-[0.98rem] md:text-[1.04rem] leading-relaxed text-text-secondary">
                This page is designed to give grant writers and funding partners a concise view of who KingGen is, what the ministry funds, and how to request supporting materials.
              </p>

              <div className="mt-6 space-y-3">
                {DEFAULT_PARTNER_NOTES.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircleIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-primary" />
                    <p className="text-sm md:text-[0.98rem] text-text-primary">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {overviewFacts.map((fact) => (
                  <div key={fact.label} className="rounded-2xl border border-brand-light/90 bg-white/82 px-4 py-3 text-left">
                    <p className="text-[0.7rem] uppercase tracking-[0.14em] text-text-muted">{fact.label}</p>
                    <p className="mt-1 text-sm font-semibold text-text-primary">{fact.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <div>
            <FadeIn delay={0.06}>
              <SectionHeader
                title="Organization overview"
                subtitle="A quick operational snapshot for proposals, background materials, and due diligence."
                className="mb-6"
              />
            </FadeIn>

            <StaggerContainer staggerDelay={0.08} className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {organizationFacts.map((fact, i) => (
                <StaggerItem key={i}>
                  <div className="brand-panel brand-panel-interactive brand-panel-accent-top p-4 md:p-5 text-center h-full">
                    <p className="text-xs sm:text-sm text-text-muted mb-1">{fact.label}</p>
                    <p className="font-bold text-text-primary text-sm sm:text-base">{fact.value}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </Section>

      <Section variant="art-cream" padding="lg">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="brand-panel brand-panel-mist brand-panel-accent-top p-6 md:p-8 text-center">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-brand-primary/72">
                Mission
              </p>
              <h2 className="mt-3 text-2xl md:text-[2rem] font-bold font-heading text-text-primary">
                Ministry care for women when cost would otherwise stop the conversation.
              </h2>
              <p className="mt-4 text-[1rem] md:text-[1.08rem] leading-relaxed text-text-secondary max-w-3xl mx-auto italic">
                &ldquo;KingGen Ministries exists so women can access counseling even when cost is a barrier. We provide Gospel-centered, compassionate care for women facing anxiety, grief, trauma, relationship pain, and life transitions.&rdquo;
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="mt-6 text-center">
              <h3 className="text-xl md:text-[1.55rem] font-bold font-heading text-text-primary">
                Core activities
              </h3>
              <p className="mt-2 text-sm md:text-base text-text-secondary">
                The work your grant or funding support helps sustain.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-2 gap-4 mt-6 max-w-3xl mx-auto">
            {missionPoints.map((point, i) => (
              <StaggerItem key={i}>
                <div className="brand-panel brand-panel-interactive brand-panel-frame flex items-start gap-3 p-4 md:p-5 h-full">
                  <CheckCircleIcon className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm md:text-base text-text-secondary">{point}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Section>

      <Section variant="cross-green" padding="lg">
        <FadeIn>
          <SectionHeader
            title="Funding areas"
            subtitle="Current priorities where support directly strengthens ministry capacity and client care."
            light
          />
        </FadeIn>

        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-4xl mx-auto">
          {fundingNeeds.map((need, i) => (
            <StaggerItem key={i}>
              <div className="brand-panel-dark brand-panel-frame rounded-2xl p-5 md:p-6 h-full flex flex-col">
                <h3 className="font-bold text-white text-lg mb-2">{need.area}</h3>
                <p className="text-sm md:text-base text-white/95 flex-grow">{need.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      <Section variant="soft" padding="lg">
        <div className="grid max-w-5xl mx-auto gap-6 lg:grid-cols-[0.96fr,1.04fr] items-start">
          <FadeIn>
            <div className="brand-panel brand-panel-frame brand-panel-accent-top p-6 md:p-8">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-brand-primary/72">
                Tax-Exempt Status
              </p>
              <h2 className="mt-3 text-2xl md:text-[2rem] font-bold font-heading text-text-primary">
                Verified nonprofit structure
              </h2>
              <p className="mt-4 text-[0.98rem] md:text-[1.04rem] leading-relaxed text-text-secondary">
                KingGen Ministries is recognized by the IRS as a <strong>501(c)(3)</strong> tax-exempt organization. Donations are tax-deductible to the extent allowed by law.
              </p>

              <div className="mt-6 inline-flex rounded-2xl border border-brand-light bg-white px-6 py-4 shadow-sm">
                <div>
                  <p className="text-sm text-text-muted mb-1">Employer Identification Number (EIN)</p>
                  <p className="text-2xl font-bold text-brand-primary">{siteConfig.ein}</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <div>
            <FadeIn delay={0.06}>
              <div className="brand-panel brand-panel-mist brand-panel-frame p-6 md:p-8">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-brand-primary/72">
                  Available Materials
                </p>
                <h3 className="mt-3 text-2xl md:text-[1.9rem] font-bold font-heading text-text-primary">
                  Supporting documents for verified grant partners
                </h3>
                <p className="mt-4 text-[0.98rem] md:text-[1.04rem] leading-relaxed text-text-secondary">
                  Additional documentation including IRS determination letters, financial reports, and organizational bylaws are available upon request for verified grant writers and foundation representatives.
                </p>

                <div className="mt-6 space-y-3">
                  {DEFAULT_DOCUMENTS_AVAILABLE.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircleIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-primary" />
                      <p className="text-sm md:text-base text-text-secondary">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.12}>
              <div className="mt-6 brand-panel brand-panel-frame flex flex-col sm:flex-row items-start gap-4 p-5 md:p-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-primary text-white flex items-center justify-center shadow-md shadow-brand-primary/18 flex-shrink-0">
                  <MailIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold font-heading text-text-primary mb-2">
                    Contact for grant inquiries
                  </h3>
                  <p className="text-sm md:text-base text-text-secondary mb-3">
                    For additional documentation, financial statements, or partnership questions, contact us directly.
                  </p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="font-semibold text-brand-primary transition-colors hover:text-brand-primary-dark"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      <Section variant="cross-green" padding="lg">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center brand-panel-dark rounded-3xl p-7 md:p-9">
            <h2 className="text-2xl md:text-[2rem] font-bold font-heading text-white mb-4">
              Request supporting materials
            </h2>
            <p className="text-[0.98rem] md:text-[1.04rem] text-white/95 mb-6 leading-relaxed">
              If you are preparing a grant application, foundation review, or partnership brief, we can help you gather the organizational details you need.
            </p>
            <Button
              href="/contact"
              variant="white"
              size="lg"
              icon={<ArrowRightIcon className="w-5 h-5" />}
              iconPosition="right"
            >
              Contact Us
            </Button>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
