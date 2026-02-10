"use client";

import {
  Section,
  SectionHeader,
  Button,
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  ArrowRightIcon,
  QuoteIcon,
  FadeIn,
  StaggerContainer,
  StaggerItem,
  TiltCard,
  PageHero,
} from "../components";
import { siteConfig } from "../config/site";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        title="Contact Us"
        description="Whether you're reaching out for yourself, referring someone, or asking about donating, please contact us. We will respond as soon as possible."
        background="kinggen-branded"
        showStones={true}
        stonesPosition="both"
      />

      {/* Brief note */}
      <Section variant="warm-cream" padding="sm" watermark="none">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center py-4">
            <QuoteIcon className="w-5 h-5 text-brand-accent/40 mx-auto mb-3" />
            <p className="text-lg text-text-secondary italic font-heading leading-relaxed">
              We&apos;d love to hear from you. Reach out by email or phone and we&apos;ll respond as soon as possible.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* Contact Info */}
      <Section variant="default" padding="xl" watermark="none">
        <SectionHeader
          title="Get in touch"
          subtitle="Reach out directly by email, phone, or mail. We look forward to hearing from you."
        />

        <div className="max-w-2xl mx-auto">
          <StaggerContainer staggerDelay={0.1} className="space-y-5">
            {/* Email card */}
            <StaggerItem>
              <TiltCard tiltAmount={3}>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="group block p-6 bg-white rounded-2xl shadow-brand border border-brand-light/30 hover:shadow-brand-lg hover:border-brand-accent/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-sage-light text-brand-primary flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300 flex-shrink-0">
                      <MailIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">Email</p>
                      <p className="font-semibold text-text-primary group-hover:text-brand-primary transition-colors">{siteConfig.email}</p>
                      <p className="text-sm text-text-secondary mt-1">Best for general inquiries and referrals</p>
                    </div>
                  </div>
                </a>
              </TiltCard>
            </StaggerItem>

            {/* Phone card */}
            <StaggerItem>
              <TiltCard tiltAmount={3}>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="group block p-6 bg-white rounded-2xl shadow-brand border border-brand-light/30 hover:shadow-brand-lg hover:border-brand-accent/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-sage-light text-brand-primary flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300 flex-shrink-0">
                      <PhoneIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">Phone</p>
                      <p className="font-semibold text-text-primary group-hover:text-brand-primary transition-colors">{siteConfig.phone}</p>
                      <p className="text-sm text-text-secondary mt-1">Leave a voicemail and we&apos;ll call you back</p>
                    </div>
                  </div>
                </a>
              </TiltCard>
            </StaggerItem>

            {/* Mailing Address card */}
            <StaggerItem>
              <TiltCard tiltAmount={3}>
                <div className="p-6 bg-white rounded-2xl shadow-brand border border-brand-light/30">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-sage-light text-brand-primary flex items-center justify-center flex-shrink-0">
                      <MapPinIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">Mailing Address</p>
                      <address className="font-semibold text-text-primary not-italic leading-relaxed">
                        {siteConfig.address.line1}<br />
                        {siteConfig.address.line2}<br />
                        {siteConfig.address.line3}<br />
                        {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                      </address>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </Section>

      {/* Donate CTA */}
      <Section variant="art-cream" padding="lg" watermark="stones">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-text-primary mb-4">
              Support Our Mission
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              Your generosity makes free counseling possible for women in need.
            </p>
            <Button href="/donate" variant="primary" icon={<ArrowRightIcon className="w-5 h-5" />} iconPosition="right">
              Learn About Giving
            </Button>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
