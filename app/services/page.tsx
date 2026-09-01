import type { Metadata } from "next";
import {
  Section,
  Button,
  FadeIn,
  ArrowRightIcon,
  InnerPageHero,
  StaggerContainer,
  StaggerItem,
  HeartIcon,
  CrossIcon,
  ShieldIcon,
  UsersIcon,
  CheckCircleIcon,
} from "../components";
import { servicesContent } from "../content";
import { siteConfig } from "../config/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore KingGen Ministries counseling services, including Gospel-centered support for anxiety, grief, trauma, relationships, and spiritual growth.",
};

const serviceIcons = [HeartIcon, CrossIcon, ShieldIcon, UsersIcon, CheckCircleIcon, ArrowRightIcon];

export default function ServicesPage() {
  return (
    <>
      <InnerPageHero
        title={servicesContent.hero.title}
        subtitle={servicesContent.hero.subtitle}
        background="inner-logo"
        ariaLabel="Our Services"
        eyebrow="Our Counseling Care"
      />

      <Section variant="art-cream" padding="xl">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-primary mb-4">
              {servicesContent.intro.title}
            </h2>
            <p className="text-base sm:text-lg text-text-secondary">{servicesContent.intro.subtitle}</p>
          </div>
        </FadeIn>

        <StaggerContainer
          staggerDelay={0.08}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {servicesContent.services.map((service, i) => {
            const Icon = serviceIcons[i];

            return (
              <StaggerItem key={service.title}>
                <div className="brand-panel p-6 h-full flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-brand-primary/12 flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7 text-brand-primary" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-text-primary mb-3">{service.title}</h3>
                  <p className="text-text-secondary leading-relaxed flex-grow">{service.description}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Section>

      <Section variant="cross-green" padding="xl">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center brand-panel-dark rounded-3xl p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-white mb-4">
              {siteConfig.serviceAvailability.acceptingExternalReferrals
                ? servicesContent.cta.title
                : "Service Availability"}
            </h2>
            <p className="text-base sm:text-lg text-white/95 mb-8">
              {siteConfig.serviceAvailability.acceptingExternalReferrals
                ? servicesContent.cta.subtitle
                : siteConfig.serviceAvailability.notice}
            </p>
            {siteConfig.serviceAvailability.acceptingExternalReferrals && (
              <Button
                href="/for-referrers"
                variant="white"
                size="lg"
                icon={<ArrowRightIcon className="w-5 h-5" />}
                iconPosition="right"
              >
                Learn How to Refer
              </Button>
            )}
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
