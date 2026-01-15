"use client";

import {
  PageHero,
  Section,
  SectionHeader,
  Button,
  HeartIcon,
  CheckCircleIcon,
  GiftIcon,
  UsersIcon,
  SparklesIcon,
  ShieldIcon,
  FadeIn,
  StaggerContainer,
  StaggerItem,
  TiltCard,
  AnimatedCounter,
  FloatingParticles,
  MorphingGradient,
  PulseRings,
} from "../components";
import { siteConfig } from "../config/site";

const impactTiers = [
  {
    amount: 25,
    display: "$25",
    title: "Provides Resources",
    description: "Supplies materials and resources for counseling sessions",
    icon: <GiftIcon className="w-6 h-6" />,
  },
  {
    amount: 50,
    display: "$50",
    title: "One Session",
    description: "Funds one complete counseling session for a woman in need",
    icon: <HeartIcon className="w-6 h-6" />,
    featured: true,
  },
  {
    amount: 100,
    display: "$100",
    title: "Multiple Sessions",
    description: "Provides ongoing counseling support over several weeks",
    icon: <UsersIcon className="w-6 h-6" />,
  },
  {
    amount: 250,
    display: "$250",
    title: "Monthly Support",
    description: "Sustains free counseling services for an entire month",
    icon: <SparklesIcon className="w-6 h-6" />,
  },
];

const benefits = [
  "100% of donations directly support counseling services",
  "All gifts are tax-deductible",
  "Regular updates on ministry impact",
  "Recognition in our annual report (optional)",
];

export default function DonatePage() {
  return (
    <>
      <PageHero
        title="Support Our Ministry"
        description="Your generosity makes free counseling possible for women who need it most."
      />

      {/* Main Donation Section */}
      <Section variant="light" padding="xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Why Give */}
          <FadeIn direction="left">
            <div className="decorative-line mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-primary mb-6">
              Why Your Gift Matters
            </h2>
            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              At KingGen Ministries, we believe that financial barriers should never prevent a woman
              from receiving the help she needs. Your generous donation makes it possible for us to
              provide professional, Gospel-centered clinical pastoral counseling completely free of
              charge.
            </p>
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              Every gift—no matter the size—directly impacts the lives of women seeking hope and
              healing during their most challenging moments.
            </p>

            {/* Benefits */}
            <TiltCard tiltAmount={3}>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8">
                <h3 className="font-bold font-heading text-text-primary mb-4 flex items-center gap-2">
                  <ShieldIcon className="w-5 h-5 text-brand-accent" />
                  Your Donation Benefits
                </h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircleIcon className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                      <span className="text-text-secondary">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TiltCard>

            {/* Nonprofit Status */}
            <div className="bg-brand-soft rounded-2xl p-6">
              <p className="text-text-secondary text-sm">
                <strong className="text-text-primary">{siteConfig.name}</strong> is a registered
                501(c)(3) nonprofit organization. All donations are tax-deductible to the full extent
                allowed by law. You will receive a receipt for your records.
              </p>
            </div>
          </FadeIn>

          {/* Right Column - Donation CTA */}
          <FadeIn direction="right">
            <TiltCard tiltAmount={5}>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center relative overflow-hidden">
                <PulseRings className="opacity-10" />
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-accent to-brand-primary flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <HeartIcon className="w-10 h-10 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold font-heading text-text-primary mb-4">
                    Give Securely Online
                  </h3>

                  <p className="text-text-secondary mb-8">
                    Make a one-time gift or set up recurring monthly donations through our secure
                    donation platform.
                  </p>

                  <Button
                    href={siteConfig.donorboxPageUrl}
                    variant="accent"
                    size="lg"
                    fullWidth
                    external
                    icon={<HeartIcon className="w-5 h-5" />}
                  >
                    Donate Now
                  </Button>

                  <p className="text-sm text-text-muted mt-4">
                    You&apos;ll be redirected to our secure Donorbox page
                  </p>

                  {/* Trust badges */}
                  <div className="flex items-center justify-center gap-4 mt-8 pt-6 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-text-muted text-sm">
                      <ShieldIcon className="w-4 h-4" />
                      <span>Secure</span>
                    </div>
                    <div className="flex items-center gap-2 text-text-muted text-sm">
                      <CheckCircleIcon className="w-4 h-4" />
                      <span>Tax-Deductible</span>
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>

            {/* Monthly Giving */}
            <FadeIn delay={0.3}>
              <div className="bg-brand-light rounded-2xl p-6 mt-6 text-center">
                <h4 className="font-bold font-heading text-text-primary mb-2">
                  Consider Monthly Giving
                </h4>
                <p className="text-text-secondary text-sm">
                  Recurring donations help us plan ahead and serve more women consistently throughout
                  the year.
                </p>
              </div>
            </FadeIn>
          </FadeIn>
        </div>
      </Section>

      {/* Impact Section */}
      <Section variant="default" padding="xl">
        <FadeIn>
          <SectionHeader
            title="Your Impact"
            subtitle="See how your donation directly supports women in need."
          />
        </FadeIn>

        <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactTiers.map((tier) => (
            <StaggerItem key={tier.amount}>
              <TiltCard className="h-full">
                <div
                  className={`rounded-2xl p-6 text-center h-full ${
                    tier.featured
                      ? "bg-gradient-to-br from-brand-primary to-brand-secondary text-white shadow-xl shadow-brand-primary/20 ring-4 ring-brand-accent/30"
                      : "bg-white shadow-sm border border-gray-100"
                  }`}
                >
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 ${
                      tier.featured
                        ? "bg-white/20 text-white"
                        : "bg-brand-light text-brand-primary"
                    }`}
                  >
                    {tier.icon}
                  </div>

                  <p
                    className={`text-3xl font-bold font-heading mb-2 ${
                      tier.featured ? "text-white" : "text-brand-accent"
                    }`}
                  >
                    {tier.display}
                  </p>

                  <h3
                    className={`font-bold font-heading mb-2 ${
                      tier.featured ? "text-white" : "text-text-primary"
                    }`}
                  >
                    {tier.title}
                  </h3>

                  <p
                    className={`text-sm ${
                      tier.featured ? "text-white/80" : "text-text-secondary"
                    }`}
                  >
                    {tier.description}
                  </p>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Other Ways to Give */}
      <Section variant="soft" padding="xl">
        <FadeIn>
          <SectionHeader
            title="Other Ways to Give"
            subtitle="There are many ways to support our ministry beyond online donations."
          />
        </FadeIn>

        <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-3 gap-8">
          <StaggerItem>
            <TiltCard className="h-full">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full">
                <div className="w-12 h-12 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold font-heading text-text-primary mb-3">
                  By Mail
                </h3>
                <p className="text-text-secondary mb-4">
                  Send a check payable to KingGen Ministries. Contact us for our mailing address.
                </p>
                <Button href="/contact" variant="ghost" size="sm">
                  Get Address
                </Button>
              </div>
            </TiltCard>
          </StaggerItem>

          <StaggerItem>
            <TiltCard className="h-full">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full">
                <div className="w-12 h-12 rounded-xl bg-brand-accent/10 text-brand-accent flex items-center justify-center mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold font-heading text-text-primary mb-3">
                  Monthly Partnership
                </h3>
                <p className="text-text-secondary mb-4">
                  Become a sustaining partner with automatic monthly donations that provide consistent support.
                </p>
                <Button href={siteConfig.donorboxPageUrl} variant="ghost" size="sm" external>
                  Set Up Monthly
                </Button>
              </div>
            </TiltCard>
          </StaggerItem>

          <StaggerItem>
            <TiltCard className="h-full">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full">
                <div className="w-12 h-12 rounded-xl bg-brand-secondary/10 text-brand-secondary flex items-center justify-center mb-6">
                  <GiftIcon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading text-text-primary mb-3">
                  In-Kind Donations
                </h3>
                <p className="text-text-secondary mb-4">
                  Donate supplies, services, or other resources that support our ministry operations.
                </p>
                <Button href="/contact" variant="ghost" size="sm">
                  Contact Us
                </Button>
              </div>
            </TiltCard>
          </StaggerItem>
        </StaggerContainer>
      </Section>

      {/* Impact Stats */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-primary">
        <MorphingGradient className="opacity-30" />
        <FloatingParticles count={30} />

        <div className="relative z-10 container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white mb-4">
                Together, We&apos;re Making a Difference
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Your support joins a community of generous donors helping women find hope and healing.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: 500, suffix: "+", label: "Women Served" },
              { value: 1000, suffix: "+", label: "Sessions Provided" },
              { value: 100, suffix: "%", label: "Free Services" },
              { value: 10, suffix: "+", label: "Years of Ministry" },
            ].map((stat, i) => (
              <StaggerItem key={i}>
                <div className="text-center p-6">
                  <p className="text-5xl md:text-6xl font-bold font-heading text-white mb-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={2.5} />
                  </p>
                  <p className="text-white/80">{stat.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Final CTA */}
      <Section variant="default" padding="lg">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-text-primary mb-4">
              Questions About Giving?
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              We&apos;re happy to answer any questions you have about donations, tax receipts, or other ways
              to support our ministry.
            </p>
            <Button href="/contact" variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
