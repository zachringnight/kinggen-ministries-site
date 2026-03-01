import type { Metadata } from "next";
import { siteConfig } from "../config/site";
import {
  Section,
  Button,
  CheckCircleIcon,
  HeartIcon,
  ArrowRightIcon,
  MailIcon,
  FadeIn,
  StaggerContainer,
  StaggerItem,
  InnerPageHero,
} from "../components";

export const metadata: Metadata = {
  title: "For Grant Writers",
  description:
    "Organizational information, funding priorities, and partnership context for grant writers and foundations supporting KingGen Ministries.",
};

export default function ForGrantWriters() {
  const organizationFacts = [
    { label: "Organization Name", value: "KingGen Ministries" },
    { label: "Tax Status", value: "501(c)(3) Nonprofit" },
    { label: "EIN", value: siteConfig.ein },
    { label: "Location", value: "Keller, Texas" },
    { label: "Service Area", value: "North Texas and surrounding regions" },
    { label: "Founded", value: "2023" },
  ];

  const missionPoints = [
    "Provide Gospel-centered clinical pastoral counseling for women",
    "Remove cost barriers so women in need can access care",
    "Serve women facing anxiety, grief, trauma, and life transitions",
    "Partner with churches and community organizations for referrals",
    "Maintain confidentiality, compassion, and professionalism",
  ];

  const fundingNeeds = [
    { area: "Counseling Services", description: "Direct support for counseling sessions and client care" },
    { area: "Operations", description: "Administrative costs, communications, and outreach" },
    { area: "Training & Development", description: "Continuing education and professional development" },
    { area: "Technology", description: "Secure platforms for scheduling and telehealth" },
  ];

  return (
    <>
      <InnerPageHero
        title="For Grant Writers and Foundations"
        subtitle="Organizational details and mission context to support partnership opportunities."
        background="inner"
        ariaLabel="For Grant Writers and Foundations"
       
      />

      <Section variant="art-cream" padding="xl">
        <FadeIn>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-text-primary mb-6 text-center">
              Organization Overview
            </h2>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed text-center mb-8">
              KingGen Ministries is a 501(c)(3) nonprofit organization providing free clinical pastoral counseling for women in need.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {organizationFacts.map((fact, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="brand-panel p-4 md:p-6 text-center h-full">
                <p className="text-xs sm:text-sm text-text-muted mb-1">{fact.label}</p>
                <p className="font-bold text-text-primary text-sm sm:text-base">{fact.value}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section variant="art-cream" padding="xl">
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-text-primary mb-6 text-center">
              Mission Statement
            </h2>
            <div className="brand-panel p-6 md:p-8 mb-8">
              <p className="text-base sm:text-lg text-text-primary leading-relaxed text-center italic">
                &ldquo;KingGen Ministries exists so women can access counseling even when cost is a barrier. We provide Gospel-centered, compassionate care for women facing anxiety, grief, trauma, relationship pain, and life transitions.&rdquo;
              </p>
            </div>
          </div>
        </FadeIn>

        <StaggerContainer staggerDelay={0.1} className="max-w-3xl mx-auto">
          <h3 className="text-lg md:text-xl font-bold font-heading text-text-primary mb-4 text-center">
            Core Activities
          </h3>
          {missionPoints.map((point, i) => (
            <StaggerItem key={i}>
              <div className="brand-panel flex items-start gap-3 p-3 md:p-4 mb-2">
                <CheckCircleIcon className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-text-secondary">{point}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      <Section variant="art-cream" padding="xl">
        <FadeIn>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-text-primary mb-8 text-center">
            Funding Areas
          </h2>
        </FadeIn>

        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          {fundingNeeds.map((need, i) => (
            <StaggerItem key={i}>
              <div className="brand-panel p-5 md:p-6 h-full">
                <h3 className="font-bold text-text-primary mb-2">{need.area}</h3>
                <p className="text-sm md:text-base text-text-secondary">{need.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      <Section variant="art-cream" padding="lg">
        <FadeIn>
          <div className="max-w-3xl mx-auto brand-panel p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-text-primary mb-4 text-center">
              Tax-Exempt Status
            </h2>
            <div className="text-center">
              <p className="text-text-secondary mb-4">
                KingGen Ministries is recognized by the IRS as a <strong>501(c)(3)</strong> tax-exempt organization. Donations are tax-deductible to the extent allowed by law.
              </p>
              <div className="inline-block bg-white rounded-xl px-6 py-4 shadow-sm border border-brand-light">
                <p className="text-sm text-text-muted mb-1">Employer Identification Number (EIN)</p>
                <p className="text-2xl font-bold text-brand-primary">{siteConfig.ein}</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      <Section variant="art-cream" padding="xl">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-text-primary mb-4">
              Contact for Grant Inquiries
            </h2>
            <p className="text-base sm:text-lg text-text-secondary mb-8">
              For additional documentation, financial statements, or questions about partnership opportunities, please contact us directly.
            </p>

            <div className="brand-panel p-6 md:p-8 inline-block mb-8">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-brand-primary hover:text-brand-secondary transition-colors"
              >
                <MailIcon className="w-6 h-6" />
                <span className="font-medium">{siteConfig.email}</span>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary" size="lg" icon={<ArrowRightIcon className="w-5 h-5" />} iconPosition="right">
                Contact Us
              </Button>
              <Button href="/donate" variant="outline" size="lg" icon={<HeartIcon className="w-5 h-5" />}>
                Donate
              </Button>
            </div>
          </div>
        </FadeIn>
      </Section>

      <Section variant="art-cream" padding="lg">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-text-muted text-sm md:text-base">
              Additional documentation including IRS determination letters, financial reports, and organizational bylaws are available upon request for verified grant writers and foundation representatives.
            </p>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
