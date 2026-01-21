"use client";

import { siteConfig } from "../config/site";
import {
  Section,
  Button,
  HeartIcon,
  MailIcon,
  CheckCircleIcon,
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "../components";

export default function DonatePage() {
  const impactPoints = [
    "Provides free counseling sessions for women in need",
    "Covers operational costs and outreach",
    "Supports training and resources",
    "Expands access to underserved communities",
  ];

  return (
    <>
      {/* Hero Section with Donate CTA */}
      <section className="relative py-16 sm:py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/bg-green.jpg')" }}
        />

        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4 md:mb-6">
                Help keep counseling free
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed mb-8">
                Your generosity removes barriers and provides hope for women who need support but cannot afford care.
              </p>

              {/* Prominent Donate Button */}
              <Button
                href={siteConfig.paypalUrl}
                variant="white"
                size="lg"
                icon={<HeartIcon className="w-5 h-5" />}
                className="text-brand-primary"
              >
                Donate via PayPal
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Impact Section */}
      <Section variant="light" padding="xl">
        <FadeIn>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-text-primary mb-4 text-center">
            Your gift makes a difference
          </h2>
          <p className="text-base sm:text-lg text-text-secondary mb-8 md:mb-12 text-center max-w-2xl mx-auto">
            Every donation directly supports our mission to provide free, Gospel-centered counseling.
          </p>
        </FadeIn>

        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {impactPoints.map((point, i) => (
            <StaggerItem key={i}>
              <div className="flex items-start gap-3 p-4 bg-brand-cream rounded-xl border border-brand-light">
                <CheckCircleIcon className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                <p className="text-text-secondary">{point}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Ways to Give Section */}
      <Section variant="primary" padding="xl" watermark="none">
        <FadeIn>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-white mb-8 md:mb-12 text-center">
            Ways to give
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {/* Online Giving Card */}
          <FadeIn delay={0.1}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 h-full flex flex-col">
              <h3 className="text-xl md:text-2xl font-bold font-heading text-white mb-3">
                Online
              </h3>
              <p className="text-white/80 mb-6 flex-grow">
                Give securely through PayPal. One-time or recurring gifts welcome.
              </p>
              <Button
                href={siteConfig.paypalUrl}
                variant="white"
                size="lg"
                fullWidth
                icon={<HeartIcon className="w-5 h-5" />}
              >
                Donate via PayPal
              </Button>
            </div>
          </FadeIn>

          {/* Mail a Check Card */}
          <FadeIn delay={0.2}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 h-full">
              <h3 className="text-xl md:text-2xl font-bold font-heading text-white mb-3">
                By Mail
              </h3>
              <p className="text-white/80 mb-4">
                Make checks payable to:
              </p>
              <div className="bg-white/10 rounded-xl p-4 mb-4">
                <p className="text-white font-semibold">KingGen Ministries</p>
                <address className="text-white/80 not-italic text-sm leading-relaxed mt-2">
                  {siteConfig.address.line2}<br />
                  {siteConfig.address.line3}<br />
                  {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                </address>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Tax Deductible Info */}
      <Section variant="light" padding="lg">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-brand-cream rounded-2xl p-6 md:p-8 border border-brand-light">
              <h3 className="text-lg md:text-xl font-bold font-heading text-text-primary mb-3">
                Tax-deductible giving
              </h3>
              <p className="text-text-secondary mb-4">
                KingGen Ministries is a <strong>501(c)(3)</strong> nonprofit organization.
                Your donation is tax-deductible to the extent allowed by law.
              </p>
              <p className="text-lg font-semibold text-brand-primary mb-6">
                EIN: {siteConfig.ein}
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-secondary transition-colors"
              >
                <MailIcon className="w-5 h-5" />
                <span>Questions? {siteConfig.email}</span>
              </a>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Final CTA */}
      <Section variant="primary" padding="lg" watermark="none">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-white mb-4">
              Ready to make a difference?
            </h2>
            <p className="text-white/90 mb-8">
              Your support helps women access the care they need.
            </p>
            <Button
              href={siteConfig.paypalUrl}
              variant="white"
              size="lg"
              icon={<HeartIcon className="w-5 h-5" />}
            >
              Donate Now
            </Button>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
