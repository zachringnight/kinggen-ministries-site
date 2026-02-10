"use client";

import { siteConfig } from "../config/site";
import {
  Section,
  SectionHeader,
  Button,
  CheckCircleIcon,
  HeartIcon,
  ArrowRightIcon,
  MailIcon,
  DocumentIcon,
  FadeIn,
  StaggerContainer,
  StaggerItem,
  PageHero,
} from "../components";

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
    {
      area: "Counseling Services",
      description:
        "Direct support for counseling sessions and client care",
    },
    {
      area: "Operations",
      description:
        "Administrative costs, communications, and outreach",
    },
    {
      area: "Training & Development",
      description:
        "Continuing education and professional development",
    },
    {
      area: "Technology",
      description:
        "Secure platforms for scheduling and telehealth",
    },
  ];

  return (
    <>
      <PageHero
        title="For Grant Writers & Foundations"
        description="Thank you for considering KingGen Ministries. This page provides organizational information to support grant applications and funding inquiries."
        background="kinggen-branded"
        showStones={true}
        stonesPosition="both"
      />

      {/* Organization Overview */}
      <Section variant="warm-cream" padding="xl">
        <SectionHeader
          title="Organization Overview"
          subtitle="KingGen Ministries is a 501(c)(3) nonprofit organization providing free clinical pastoral counseling for women in need."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {organizationFacts.map((fact, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="bg-white rounded-xl p-5 md:p-6 shadow-brand border border-brand-light/50 text-center h-full">
                <p className="text-xs sm:text-sm text-text-muted mb-1 uppercase tracking-wide">
                  {fact.label}
                </p>
                <p className="font-bold text-text-primary text-sm sm:text-base">
                  {fact.value}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Mission Statement */}
      <Section variant="sage-mist" padding="xl">
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <SectionHeader title="Mission Statement" />
            <div className="bg-white rounded-2xl p-6 md:p-8 mb-10 shadow-brand">
              <p className="text-base sm:text-lg text-text-primary leading-relaxed text-center italic">
                &ldquo;KingGen Ministries exists so women can access counseling
                even when cost is a barrier. We provide Gospel-centered,
                compassionate care for women facing anxiety, grief, trauma,
                relationship pain, and life transitions.&rdquo;
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-lg md:text-xl font-bold font-heading text-text-primary mb-5 text-center">
            Core Activities
          </h3>
          <StaggerContainer staggerDelay={0.08} className="space-y-2">
            {missionPoints.map((point, i) => (
              <StaggerItem key={i}>
                <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-brand-sm">
                  <CheckCircleIcon className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm md:text-base text-text-secondary">
                    {point}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Section>

      {/* Funding Needs */}
      <Section variant="art-cream" padding="xl">
        <SectionHeader
          title="Funding Areas"
          subtitle="Key areas where grant funding supports our mission."
        />

        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto"
        >
          {fundingNeeds.map((need, i) => (
            <StaggerItem key={i}>
              <div className="bg-white rounded-xl p-6 shadow-brand border border-brand-light/50 h-full">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-light flex items-center justify-center flex-shrink-0">
                    <DocumentIcon className="w-5 h-5 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-text-primary mb-1">
                      {need.area}
                    </h3>
                    <p className="text-sm md:text-base text-text-secondary">
                      {need.description}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Tax Information */}
      <Section variant="warm-cream" padding="lg">
        <FadeIn>
          <div className="max-w-3xl mx-auto bg-white rounded-2xl p-6 md:p-8 shadow-brand">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-text-primary mb-4 text-center">
              Tax-Exempt Status
            </h2>
            <div className="text-center">
              <p className="text-text-secondary mb-5">
                KingGen Ministries is recognized by the IRS as a{" "}
                <strong>501(c)(3)</strong> tax-exempt organization. Donations are
                tax-deductible to the extent allowed by law.
              </p>
              <div className="inline-block bg-brand-light rounded-xl px-6 py-4">
                <p className="text-sm text-text-muted mb-1">
                  Employer Identification Number (EIN)
                </p>
                <p className="text-2xl font-bold text-brand-primary font-heading">
                  {siteConfig.ein}
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Contact for Grant Inquiries */}
      <Section variant="sage-mist" padding="xl">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeader
              title="Contact for Grant Inquiries"
              subtitle="For additional documentation, financial statements, or questions about partnership opportunities, please contact us directly."
            />

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-brand inline-block mb-8">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-brand-primary hover:text-brand-secondary transition-colors"
              >
                <MailIcon className="w-6 h-6" />
                <span className="font-medium">{siteConfig.email}</span>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRightIcon className="w-5 h-5" />}
                iconPosition="right"
                className="!rounded-full"
              >
                Contact Us
              </Button>
              <Button
                href="/donate"
                variant="outline"
                size="lg"
                icon={<HeartIcon className="w-5 h-5" />}
                className="!rounded-full"
              >
                Donate
              </Button>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Additional Resources Note */}
      <Section variant="warm-cream" padding="md">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-text-muted text-sm md:text-base">
              Additional documentation including IRS determination letters,
              financial reports, and organizational bylaws are available upon
              request for verified grant writers and foundation representatives.
            </p>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
