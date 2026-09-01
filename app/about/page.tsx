import {
  Section,
  Button,
  CheckCircleIcon,
  ArrowRightIcon,
  CrossIcon,
  FadeIn,
  StaggerContainer,
  StaggerItem,
  InnerPageHero,
} from "../components";
import { aboutContent } from "../content";
import { siteConfig } from "../config/site";

export default function AboutPage() {
  return (
    <>
      <InnerPageHero
        title={aboutContent.hero.title}
        subtitle={
          siteConfig.serviceAvailability.acceptingExternalReferrals
            ? aboutContent.hero.subtitle
            : "A Gospel-centered counseling ministry currently serving women in the Venture Church community."
        }
        background="about"
        ariaLabel="About KingGen Ministries"
        eyebrow="Our Story & Approach"
      />

      <Section variant="cross-light" padding="xl">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <CrossIcon className="w-6 h-6 text-brand-primary/50" strokeWidth={1.5} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-primary mb-6">
              {aboutContent.mission.title}
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              {siteConfig.serviceAvailability.acceptingExternalReferrals
                ? aboutContent.mission.body
                : siteConfig.serviceAvailability.currentCommunityDescription}
            </p>
          </div>
        </FadeIn>
      </Section>

      <Section variant="cross-green" padding="xl">
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-4">
              <CrossIcon className="w-7 h-7 text-white/55" strokeWidth={1.5} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6 text-center">
              {aboutContent.approach.title}
            </h2>
            <p className="text-lg text-white/95 mb-8 text-center leading-relaxed">{aboutContent.approach.body}</p>
            <p className="text-lg text-white mb-6 text-center">{aboutContent.approach.expectationsLabel}</p>
          </div>
        </FadeIn>

        <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {aboutContent.approach.expectations.map((item, i) => (
            <StaggerItem key={i}>
              <div className="brand-panel-dark rounded-xl flex items-center gap-3 p-4">
                <CheckCircleIcon className="w-5 h-5 text-white flex-shrink-0" />
                <p className="text-white">{item}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      <Section variant="art-cream" padding="lg">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-text-primary mb-4">
              {siteConfig.serviceAvailability.acceptingExternalReferrals
                ? aboutContent.referrers.title
                : "Service Availability"}
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              {siteConfig.serviceAvailability.acceptingExternalReferrals
                ? aboutContent.referrers.subtitle
                : siteConfig.serviceAvailability.notice}
            </p>
            {siteConfig.serviceAvailability.acceptingExternalReferrals ? (
              <Button
                href="/for-referrers"
                variant="primary"
                icon={<ArrowRightIcon className="w-5 h-5" />}
                iconPosition="right"
              >
                For Referrers
              </Button>
            ) : (
              <Button
                href="/get-support"
                variant="primary"
                icon={<ArrowRightIcon className="w-5 h-5" />}
                iconPosition="right"
              >
                Client Information
              </Button>
            )}
          </div>
        </FadeIn>
      </Section>

      <Section id="speaking" variant="cross-green" padding="xl">
        <FadeIn>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-white mb-4 text-center">
              {aboutContent.speaking.title}
            </h2>
            <p className="text-base sm:text-lg text-white/95 mb-10 text-center max-w-2xl mx-auto">
              {aboutContent.speaking.body}
            </p>

            <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-10">
              {aboutContent.speaking.venues.map((venue) => (
                <div key={venue.title} className="brand-panel-dark rounded-xl p-5 md:p-6 text-center h-full">
                  <h3 className="font-bold text-white mb-2">{venue.title}</h3>
                  <p className="text-sm text-white/95">{venue.description}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
