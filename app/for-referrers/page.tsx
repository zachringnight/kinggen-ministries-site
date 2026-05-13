import type { Metadata } from "next";
import {
  Section,
  Button,
  CheckCircleIcon,
  ShieldIcon,
  HeartIcon,
  FadeIn,
  StaggerContainer,
  StaggerItem,
  InnerPageHero,
} from "../components";
import { forReferrersContent } from "../content";

export const metadata: Metadata = {
  title: "For Referrers",
  description:
    "Information for pastors, counselors, and partners who want to refer women to KingGen Ministries for Gospel-centered counseling support.",
};

export default function ForReferrers() {
  return (
    <>
      <InnerPageHero
        title={forReferrersContent.hero.title}
        subtitle={forReferrersContent.hero.subtitle}
        background="inner"
        ariaLabel="For Referrers"
        eyebrow="Compassionate Referral Pathway"
      />

      <Section variant="cross-light" padding="xl">
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-text-primary mb-6 text-center">
              {forReferrersContent.whoCanRefer.title}
            </h2>
            <p className="text-base sm:text-lg text-text-secondary mb-8 text-center">
              {forReferrersContent.whoCanRefer.subtitle}
            </p>
          </div>
        </FadeIn>

        <StaggerContainer
          staggerDelay={0.08}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto"
        >
          {forReferrersContent.whoCanRefer.items.map((referrer, i) => (
            <StaggerItem key={i}>
              <div className="brand-panel flex items-center gap-3 p-4">
                <CheckCircleIcon className="w-5 h-5 text-brand-primary flex-shrink-0" />
                <p className="text-sm md:text-base text-text-secondary">{referrer}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      <Section variant="art-cream" padding="xl">
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-text-primary mb-6 text-center">
              {forReferrersContent.whenAppropriate.title}
            </h2>
            <p className="text-base sm:text-lg text-text-secondary mb-8 text-center">
              {forReferrersContent.whenAppropriate.subtitle}
            </p>
          </div>
        </FadeIn>

        <StaggerContainer staggerDelay={0.1} className="max-w-2xl mx-auto">
          {forReferrersContent.whenAppropriate.reasons.map((reason, i) => (
            <StaggerItem key={i}>
              <div className="brand-panel flex items-start gap-4 p-4 mb-3">
                <CheckCircleIcon className="w-6 h-6 text-brand-primary flex-shrink-0" />
                <p className="text-text-primary text-base sm:text-lg">{reason}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      <Section variant="cross-green" padding="xl">
        <FadeIn>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-white mb-8 text-center">
            {forReferrersContent.whatToExpect.title}
          </h2>
        </FadeIn>

        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto"
        >
          {forReferrersContent.whatToExpect.items.map((item, i) => (
            <StaggerItem key={i}>
              <div className="brand-panel-dark rounded-xl p-5 md:p-6 h-full flex flex-col">
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm md:text-base text-white/95 flex-grow">{item.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      <Section variant="art-cream" padding="xl">
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-text-primary mb-8 text-center">
              {forReferrersContent.howToRefer.title}
            </h2>

            <div className="brand-panel p-6 md:p-8 mb-8">
              <p className="text-base sm:text-lg text-text-primary mb-4">
                <strong>{forReferrersContent.howToRefer.approach}</strong>
              </p>
              <p className="text-text-secondary">{forReferrersContent.howToRefer.approachDetail}</p>
            </div>

            <h3 className="text-lg md:text-xl font-bold font-heading text-text-primary mb-4">
              {forReferrersContent.howToRefer.helpfulInfoTitle}
            </h3>
          </div>
        </FadeIn>

        <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {forReferrersContent.howToRefer.helpfulInfo.map((info, i) => (
            <StaggerItem key={i}>
              <div className="brand-panel flex items-center gap-3 p-4">
                <CheckCircleIcon className="w-5 h-5 text-brand-primary flex-shrink-0" />
                <p className="text-text-secondary text-sm md:text-base">{info}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      <Section variant="art-cream" padding="lg">
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <div className="brand-panel flex flex-col sm:flex-row items-start gap-4 p-6">
              <ShieldIcon className="w-8 h-8 text-brand-primary flex-shrink-0" />
              <div>
                <h3 className="text-lg md:text-xl font-bold font-heading text-text-primary mb-2">
                  {forReferrersContent.confidentiality.title}
                </h3>
                <p className="text-text-secondary text-sm md:text-base">{forReferrersContent.confidentiality.body}</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      <Section variant="cross-green" padding="xl">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center brand-panel-dark rounded-3xl p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-white mb-4">
              {forReferrersContent.partnerCta.title}
            </h2>
            <p className="text-base sm:text-lg text-white/95 mb-8">{forReferrersContent.partnerCta.subtitle}</p>
            <div className="flex justify-center">
              <Button href="/donate" variant="white" size="lg" icon={<HeartIcon className="w-5 h-5" />}>
                Support the Mission
              </Button>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
