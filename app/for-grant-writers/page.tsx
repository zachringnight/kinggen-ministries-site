import type { Metadata } from "next";
import { siteConfig } from "../config/site";
import { forGrantWritersContent } from "../content";
import {
  Section,
  Button,
  CheckCircleIcon,
  HeartIcon,
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
    {
      label: "Service Area",
      value: siteConfig.serviceAvailability.acceptingExternalReferrals
        ? "North Texas and surrounding regions"
        : "Venture Church community in Keller, TX",
    },
    { label: "Founded", value: "2023" },
  ];
  const missionStatementPoints = siteConfig.serviceAvailability.acceptingExternalReferrals
    ? forGrantWritersContent.missionStatement.points
    : forGrantWritersContent.missionStatement.points.filter((point) => !point.toLowerCase().includes("referral"));

  return (
    <>
      <InnerPageHero
        title={forGrantWritersContent.hero.title}
        subtitle={forGrantWritersContent.hero.subtitle}
        background="inner"
        ariaLabel="For Grant Writers and Foundations"
      />

      <Section variant="art-cream" padding="xl">
        <FadeIn>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-text-primary mb-6 text-center">
              {forGrantWritersContent.overview.title}
            </h2>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed text-center mb-8">
              {forGrantWritersContent.overview.subtitle}
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
              {forGrantWritersContent.missionStatement.title}
            </h2>
            <div className="brand-panel p-6 md:p-8 mb-8">
              <p className="text-base sm:text-lg text-text-primary leading-relaxed text-center italic">
                &ldquo;{forGrantWritersContent.missionStatement.quote}&rdquo;
              </p>
            </div>
          </div>
        </FadeIn>

        <StaggerContainer staggerDelay={0.1} className="max-w-3xl mx-auto">
          <h3 className="text-lg md:text-xl font-bold font-heading text-text-primary mb-4 text-center">
            {forGrantWritersContent.missionStatement.coreActivitiesTitle}
          </h3>
          {missionStatementPoints.map((point, i) => (
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
            {forGrantWritersContent.fundingAreas.title}
          </h2>
        </FadeIn>

        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto"
        >
          {forGrantWritersContent.fundingAreas.items.map((need, i) => (
            <StaggerItem key={i}>
              <div className="brand-panel p-5 md:p-6 h-full flex flex-col">
                <h3 className="font-bold text-text-primary mb-2">{need.area}</h3>
                <p className="text-sm md:text-base text-text-secondary flex-grow">{need.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      <Section variant="art-cream" padding="lg">
        <FadeIn>
          <div className="max-w-3xl mx-auto brand-panel p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-text-primary mb-4 text-center">
              {forGrantWritersContent.taxExempt.title}
            </h2>
            <div className="text-center">
              <p className="text-text-secondary mb-4">{forGrantWritersContent.taxExempt.body}</p>
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
              {forGrantWritersContent.contact.title}
            </h2>
            <p className="text-base sm:text-lg text-text-secondary mb-8">{forGrantWritersContent.contact.subtitle}</p>

            <div className="flex justify-center">
              <Button href="/donate" variant="primary" size="lg" icon={<HeartIcon className="w-5 h-5" />}>
                Donate
              </Button>
            </div>
          </div>
        </FadeIn>
      </Section>

      <Section variant="art-cream" padding="lg">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-text-muted text-sm md:text-base">{forGrantWritersContent.footnote}</p>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
