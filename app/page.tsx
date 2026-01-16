"use client";

import { siteConfig } from "./config/site";
import {
  Section,
  SectionHeader,
  Button,
  HeartIcon,
  UsersIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  QuoteIcon,
  // Motion components
  FadeIn,
  StaggerContainer,
  StaggerItem,
  TiltCard,
  Magnetic,
  ScrollProgress,
} from "./components";

export default function Home() {
  return (
    <>
      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/bg_green_texture_1920x1080.png')" }}
        />

        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/30" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - empty for stones graphic */}
            <div className="hidden lg:block" />

            {/* Right side - content */}
            <div className="text-left">
              <FadeIn delay={0.2}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-6 leading-tight">
                  Christian counseling for women
                </h1>
              </FadeIn>

              <FadeIn delay={0.4}>
                <p className="text-lg md:text-xl text-white/90 max-w-xl mb-8 leading-relaxed">
                  You do not have to carry this alone. KingGen Ministries offers Gospel-centered counseling for women in need. Counseling is offered at no cost, made possible through donations.
                </p>
              </FadeIn>

              <FadeIn delay={0.6}>
                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                  <Magnetic strength={0.2}>
                    <Button href="/get-support" variant="accent" size="lg">
                      Get Support
                    </Button>
                  </Magnetic>
                  <Magnetic strength={0.2}>
                    <Button href="/for-referrers" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                      For Referrers
                    </Button>
                  </Magnetic>
                  <Magnetic strength={0.2}>
                    <Button href="/donate" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                      Donate
                    </Button>
                  </Magnetic>
                </div>
              </FadeIn>

              <FadeIn delay={0.8}>
                <p className="text-white/70 text-sm">
                  Not sure what to say? A short message is enough.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <Section variant="light" padding="xl">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-primary mb-6">
              You are welcome here
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              Taking the first step can feel hard, especially when life feels heavy. Whether you are seeking support, helping someone you love, or looking for a trusted place to refer, we hope you find clarity and peace of mind here.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* What KingGen Offers Section */}
      <Section variant="default" padding="xl">
        <FadeIn>
          <SectionHeader
            title="What KingGen offers"
            subtitle="KingGen Ministries provides Gospel-centered counseling for women in need. We offer a safe and respectful space to talk honestly, find steady ground, and take wise next steps at a manageable pace."
          />
        </FadeIn>

        <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { icon: HeartIcon, text: "Compassionate, faith-rooted care" },
            { icon: CheckCircleIcon, text: "Practical guidance for everyday life" },
            { icon: UsersIcon, text: "A steady pace, without pressure" },
            { icon: HeartIcon, text: "No cost, because donors make it possible" },
          ].map((item, i) => (
            <StaggerItem key={i}>
              <div className="flex items-start gap-4 p-6 bg-brand-light rounded-xl">
                <item.icon className="w-6 h-6 text-brand-primary flex-shrink-0 mt-1" />
                <p className="text-text-primary font-medium">{item.text}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Start Here Section */}
      <Section variant="soft" padding="xl">
        <FadeIn>
          <SectionHeader title="Start here" />
        </FadeIn>

        <StaggerContainer staggerDelay={0.15} className="grid md:grid-cols-3 gap-8">
          <StaggerItem>
            <TiltCard className="h-full">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full flex flex-col">
                <h3 className="text-xl font-bold font-heading text-text-primary mb-3">
                  Women seeking support
                </h3>
                <p className="text-text-secondary mb-6 flex-grow">
                  What to expect, how to reach out, and a simple next step.
                </p>
                <Button href="/get-support" variant="primary" fullWidth>
                  Get Support
                </Button>
              </div>
            </TiltCard>
          </StaggerItem>

          <StaggerItem>
            <TiltCard className="h-full">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full flex flex-col">
                <h3 className="text-xl font-bold font-heading text-text-primary mb-3">
                  Referrers
                </h3>
                <p className="text-text-secondary mb-6 flex-grow">
                  For pastors, churches, and trusted professionals making a referral.
                </p>
                <Button href="/for-referrers" variant="primary" fullWidth>
                  For Referrers
                </Button>
              </div>
            </TiltCard>
          </StaggerItem>

          <StaggerItem>
            <TiltCard className="h-full">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full flex flex-col">
                <h3 className="text-xl font-bold font-heading text-text-primary mb-3">
                  Donors
                </h3>
                <p className="text-text-secondary mb-6 flex-grow">
                  Help keep counseling free and support the mission.
                </p>
                <Button href="/donate" variant="primary" fullWidth>
                  Donate
                </Button>
              </div>
            </TiltCard>
          </StaggerItem>
        </StaggerContainer>
      </Section>

      {/* Mission Section */}
      <Section variant="default" padding="xl">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-primary mb-6">
              Our mission
            </h2>
            <p className="text-lg text-text-secondary mb-4 leading-relaxed">
              KingGen Ministries exists so women can access counseling even when cost is a barrier. As a <strong>501(c)(3)</strong>, we provide Gospel-centered counseling for women in need.
            </p>
            <p className="text-lg text-text-secondary mb-2 leading-relaxed">
              Counseling is offered at no cost. Donations make it possible to continue serving women in need.
            </p>
            <p className="text-text-muted mb-8">
              <strong>EIN:</strong> {siteConfig.ein}
            </p>
            <Magnetic>
              <Button href="/donate" variant="accent" size="lg" icon={<HeartIcon className="w-5 h-5" />}>
                Donate
              </Button>
            </Magnetic>
          </div>
        </FadeIn>
      </Section>

      {/* Testimonials Preview Section */}
      <Section variant="light" padding="xl">
        <FadeIn>
          <SectionHeader
            title="Words shared with care"
            subtitle="To protect privacy, we share first names and roles only."
          />
        </FadeIn>

        <StaggerContainer staggerDelay={0.15} className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <StaggerItem>
            <TiltCard className="h-full" tiltAmount={5}>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full relative">
                <QuoteIcon className="absolute top-6 right-6 w-8 h-8 text-brand-accent/20" />
                <p className="text-text-secondary italic mb-6 leading-relaxed">
                  &ldquo;KingGen gave me a calm place to breathe again. I felt cared for and guided with wisdom.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center text-white font-bold text-sm">
                    S
                  </div>
                  <div>
                    <p className="font-bold text-text-primary">Sarah</p>
                    <p className="text-sm text-text-muted">Client</p>
                  </div>
                </div>
              </div>
            </TiltCard>
          </StaggerItem>

          <StaggerItem>
            <TiltCard className="h-full" tiltAmount={5}>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full relative">
                <QuoteIcon className="absolute top-6 right-6 w-8 h-8 text-brand-accent/20" />
                <p className="text-text-secondary italic mb-6 leading-relaxed">
                  &ldquo;As a pastor, I&apos;m grateful for a referral option that is compassionate, discreet, and Gospel-centered.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center text-white font-bold text-sm">
                    M
                  </div>
                  <div>
                    <p className="font-bold text-text-primary">Mark</p>
                    <p className="text-sm text-text-muted">Pastor</p>
                  </div>
                </div>
              </div>
            </TiltCard>
          </StaggerItem>
        </StaggerContainer>

        <FadeIn delay={0.3}>
          <div className="text-center mt-10">
            <Button href="/testimonials" variant="outline" icon={<ArrowRightIcon className="w-5 h-5" />} iconPosition="right">
              Read Testimonials
            </Button>
          </div>
        </FadeIn>
      </Section>

      {/* Closing Invitation Section */}
      <Section variant="default" padding="xl">
        <FadeIn>
          <div className="bg-gradient-to-br from-brand-light to-brand-soft rounded-3xl p-8 md:p-12 lg:p-16 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-primary mb-6">
              Ready to reach out?
            </h2>
            <p className="text-lg text-text-secondary mb-8 leading-relaxed max-w-2xl mx-auto">
              If you&apos;re seeking support, we&apos;re here. If you&apos;re making a referral, we&apos;re grateful to partner with you. If you feel led to give, thank you for helping keep counseling free.
            </p>
            <Magnetic>
              <Button href="/contact" variant="primary" size="lg" icon={<ArrowRightIcon className="w-5 h-5" />} iconPosition="right">
                Contact
              </Button>
            </Magnetic>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
