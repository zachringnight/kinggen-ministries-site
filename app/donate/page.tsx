"use client";

import { siteConfig } from "../config/site";
import {
  Section,
  Button,
  HeartIcon,
  MailIcon,
  FadeIn,
  StaggerContainer,
  StaggerItem,
  TiltCard,
} from "../components";

export default function DonatePage() {
  const impactLevels = [
    { amount: "$25", description: "supports resources and materials" },
    { amount: "$50", description: "helps sustain weekly care" },
    { amount: "$100", description: "strengthens monthly capacity" },
    { amount: "$250+", description: "helps expand access for women in need" },
  ];

  return (
    <>
      {/* Hero Section with Background */}
      <section className="relative py-16 sm:py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/bg-green-alternate.png')" }}
        />
        <div className="absolute inset-0 bg-brand-primary/85" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4 md:mb-6">
                Help keep counseling free
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
                KingGen Ministries provides Gospel-centered counseling for women in need. Counseling is offered at no cost. Donations allow us to continue offering care and expanding access for women who need support.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Thank You Message */}
      <Section variant="light" padding="lg">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center px-2">
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              Thank you for considering giving. Your generosity helps remove barriers and makes space for hope, healing, and steady next steps.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* Impact Section */}
      <Section variant="default" padding="xl">
        <FadeIn>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-text-primary mb-6 md:mb-8 text-center">
            Your gift makes this possible
          </h2>
          <p className="text-base sm:text-lg text-text-secondary mb-8 md:mb-12 text-center max-w-2xl mx-auto px-2">
            Your donation helps sustain counseling availability and the practical needs that support this work.
          </p>
        </FadeIn>

        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-5xl mx-auto">
          {impactLevels.map((level, i) => (
            <StaggerItem key={i}>
              <TiltCard className="h-full">
                <div className="bg-brand-light rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center h-full">
                  <p className="text-2xl sm:text-3xl font-bold text-brand-primary mb-1 sm:mb-2">{level.amount}</p>
                  <p className="text-xs sm:text-sm md:text-base text-text-secondary">{level.description}</p>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Ways to Give Section */}
      <Section variant="soft" padding="xl">
        <FadeIn>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-text-primary mb-8 md:mb-12 text-center">
            Ways to give
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          <FadeIn delay={0.1}>
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg h-full">
              <h3 className="text-lg md:text-xl font-bold font-heading text-text-primary mb-3 md:mb-4">
                Online giving
              </h3>
              <p className="text-sm md:text-base text-text-secondary mb-4 md:mb-6">
                Give securely through PayPal.
              </p>
              <Button
                href={siteConfig.paypalUrl}
                variant="accent"
                size="lg"
                fullWidth
                icon={<HeartIcon className="w-5 h-5" />}
              >
                Donate via PayPal
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg h-full">
              <h3 className="text-lg md:text-xl font-bold font-heading text-text-primary mb-3 md:mb-4">
                Mail a check
              </h3>
              <p className="text-sm md:text-base text-text-secondary mb-3 md:mb-4">
                Payable to: <strong>KingGen Ministries</strong>
              </p>
              <address className="text-sm md:text-base text-text-secondary not-italic leading-relaxed">
                {siteConfig.address.line1}<br />
                {siteConfig.address.line2}<br />
                {siteConfig.address.line3}<br />
                {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
              </address>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Tax Deductible Section */}
      <Section variant="default" padding="lg">
        <FadeIn>
          <div className="max-w-3xl mx-auto bg-brand-light rounded-2xl p-6 md:p-8 text-center">
            <h3 className="text-lg md:text-xl font-bold font-heading text-text-primary mb-3 md:mb-4">
              Tax-deductible giving
            </h3>
            <p className="text-sm md:text-base text-text-secondary mb-2">
              KingGen Ministries is a <strong>501(c)(3)</strong>. Donations are tax deductible as allowed by law.
            </p>
            <p className="text-text-primary font-semibold mb-4 md:mb-6">
              EIN: {siteConfig.ein}
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-secondary transition-colors text-sm md:text-base"
            >
              <MailIcon className="w-4 h-4 md:w-5 md:h-5" />
              <span>Donor questions: {siteConfig.email}</span>
            </a>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
