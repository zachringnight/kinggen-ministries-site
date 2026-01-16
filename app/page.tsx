"use client";

import Image from "next/image";
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
  ShieldIcon,
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
      <section className="relative min-h-[85vh] md:min-h-[80vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/bg_green_texture_1920x1080.png')" }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 md:bg-gradient-to-r md:from-black/30 md:via-transparent md:to-black/30" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn delay={0.2}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-4 md:mb-6 leading-tight">
                Gospel-centered counseling for women in need
              </h1>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-xl mx-auto mb-6 md:mb-8 leading-relaxed">
                KingGen Ministries is a 501(c)(3) nonprofit providing free clinical pastoral counseling. Partner with us through referrals, donations, or grants.
              </p>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 justify-center">
                <Magnetic strength={0.2}>
                  <Button href="/for-referrers" variant="accent" size="lg" className="w-full sm:w-auto">
                    For Referrers
                  </Button>
                </Magnetic>
                <Magnetic strength={0.2}>
                  <Button href="/donate" variant="outline" size="lg" className="w-full sm:w-auto border-white/40 text-white hover:bg-white/10">
                    Donate
                  </Button>
                </Magnetic>
                <Magnetic strength={0.2}>
                  <Button href="/for-grant-writers" variant="outline" size="lg" className="w-full sm:w-auto border-white/40 text-white hover:bg-white/10">
                    For Grant Writers
                  </Button>
                </Magnetic>
              </div>
            </FadeIn>

            <FadeIn delay={0.8}>
              <p className="text-white/70 text-sm">
                <strong className="text-white/90">EIN:</strong> {siteConfig.ein}
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Scroll indicator - hidden on mobile */}
        <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2">
          <FadeIn delay={1.2}>
            <div className="flex flex-col items-center gap-2 text-white/50">
              <span className="text-xs tracking-widest uppercase">Scroll</span>
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
                <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* About the Ministry Section */}
      <Section variant="light" padding="xl">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center px-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-text-primary mb-4 md:mb-6">
              About our ministry
            </h2>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-4">
              KingGen Ministries exists so women can access counseling even when cost is a barrier. We provide compassionate, Gospel-centered care for women facing anxiety, grief, trauma, relationship pain, and life transitions.
            </p>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              Counseling is offered at no cost to clients. Donations and grants make it possible to continue serving women in need.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* What Sets Us Apart */}
      <Section variant="default" padding="xl">
        <FadeIn>
          <SectionHeader
            title="What sets KingGen apart"
            subtitle="We are a trusted partner for churches, community organizations, and foundations seeking to support women's mental health and spiritual care."
          />
        </FadeIn>

        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {[
            { icon: HeartIcon, text: "Gospel-centered, compassionate care" },
            { icon: ShieldIcon, text: "Confidential and trauma-informed" },
            { icon: UsersIcon, text: "No cost barrier for clients" },
            { icon: CheckCircleIcon, text: "501(c)(3) nonprofit accountability" },
          ].map((item, i) => (
            <StaggerItem key={i}>
              <div className="flex items-start gap-3 md:gap-4 p-4 md:p-6 bg-brand-light rounded-xl h-full">
                <item.icon className="w-5 h-5 md:w-6 md:h-6 text-brand-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-text-primary font-medium">{item.text}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Partner With Us Section */}
      <Section variant="soft" padding="xl">
        <FadeIn>
          <SectionHeader title="Partner with us" />
        </FadeIn>

        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <StaggerItem>
            <TiltCard className="h-full">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 h-full flex flex-col">
                <h3 className="text-lg md:text-xl font-bold font-heading text-text-primary mb-2 md:mb-3">
                  Referrers
                </h3>
                <p className="text-sm md:text-base text-text-secondary mb-4 md:mb-6 flex-grow">
                  For pastors, churches, social workers, and trusted professionals looking for a compassionate referral option for women in need.
                </p>
                <Button href="/for-referrers" variant="primary" fullWidth>
                  For Referrers
                </Button>
              </div>
            </TiltCard>
          </StaggerItem>

          <StaggerItem>
            <TiltCard className="h-full">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 h-full flex flex-col">
                <h3 className="text-lg md:text-xl font-bold font-heading text-text-primary mb-2 md:mb-3">
                  Donors
                </h3>
                <p className="text-sm md:text-base text-text-secondary mb-4 md:mb-6 flex-grow">
                  Your tax-deductible gift helps remove cost barriers and ensures women receive the care they need.
                </p>
                <Button href="/donate" variant="primary" fullWidth>
                  Donate
                </Button>
              </div>
            </TiltCard>
          </StaggerItem>

          <StaggerItem>
            <TiltCard className="h-full">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 h-full flex flex-col">
                <h3 className="text-lg md:text-xl font-bold font-heading text-text-primary mb-2 md:mb-3">
                  Grant Writers &amp; Foundations
                </h3>
                <p className="text-sm md:text-base text-text-secondary mb-4 md:mb-6 flex-grow">
                  Access organizational information, impact data, and resources to support grant applications.
                </p>
                <Button href="/for-grant-writers" variant="primary" fullWidth>
                  For Grant Writers
                </Button>
              </div>
            </TiltCard>
          </StaggerItem>
        </StaggerContainer>
      </Section>

      {/* Impact Section with Background */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/bg-green-alternate.png')" }}
        />
        <div className="absolute inset-0 bg-brand-primary/85" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-white mb-4 md:mb-6">
                Our commitment
              </h2>
              <p className="text-base sm:text-lg text-white/90 mb-3 md:mb-4 leading-relaxed">
                As a <strong>501(c)(3)</strong> nonprofit, KingGen Ministries is committed to stewardship, transparency, and accountability. Every donation directly supports our mission to provide free counseling for women in need.
              </p>
              <p className="text-base sm:text-lg text-white/90 mb-2 leading-relaxed">
                We partner with churches, community organizations, and foundations who share our vision.
              </p>
              <p className="text-white/70 mb-6 md:mb-8">
                <strong className="text-white/90">EIN:</strong> {siteConfig.ein}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Magnetic>
                  <Button href="/donate" variant="accent" size="lg" icon={<HeartIcon className="w-5 h-5" />}>
                    Donate
                  </Button>
                </Magnetic>
                <Magnetic>
                  <Button href="/for-grant-writers" variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">
                    Grant Information
                  </Button>
                </Magnetic>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Testimonials Preview Section */}
      <Section variant="light" padding="xl">
        <FadeIn>
          <SectionHeader
            title="What partners say"
            subtitle="Hear from pastors, referrers, and community partners who trust KingGen Ministries."
          />
        </FadeIn>

        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          <StaggerItem>
            <TiltCard className="h-full" tiltAmount={5}>
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 h-full relative">
                <QuoteIcon className="absolute top-4 right-4 md:top-6 md:right-6 w-6 h-6 md:w-8 md:h-8 text-brand-accent/20" />
                <p className="text-sm md:text-base text-text-secondary italic mb-4 md:mb-6 leading-relaxed pr-8">
                  &ldquo;As a pastor, I&apos;m grateful for a referral option that is compassionate, discreet, and Gospel-centered. I trust KingGen with the women in our congregation.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center text-white font-bold text-sm">
                    M
                  </div>
                  <div>
                    <p className="font-bold text-text-primary text-sm md:text-base">Mark</p>
                    <p className="text-xs md:text-sm text-text-muted">Pastor</p>
                  </div>
                </div>
              </div>
            </TiltCard>
          </StaggerItem>

          <StaggerItem>
            <TiltCard className="h-full" tiltAmount={5}>
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 h-full relative">
                <QuoteIcon className="absolute top-4 right-4 md:top-6 md:right-6 w-6 h-6 md:w-8 md:h-8 text-brand-accent/20" />
                <p className="text-sm md:text-base text-text-secondary italic mb-4 md:mb-6 leading-relaxed pr-8">
                  &ldquo;Communication has been clear and respectful. I&apos;m grateful for a place to refer women who need support and privacy.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center text-white font-bold text-sm">
                    J
                  </div>
                  <div>
                    <p className="font-bold text-text-primary text-sm md:text-base">Jenna</p>
                    <p className="text-xs md:text-sm text-text-muted">Community Referrer</p>
                  </div>
                </div>
              </div>
            </TiltCard>
          </StaggerItem>
        </StaggerContainer>

        <FadeIn delay={0.3}>
          <div className="text-center mt-8 md:mt-10">
            <Button href="/testimonials" variant="outline" icon={<ArrowRightIcon className="w-5 h-5" />} iconPosition="right">
              Read Testimonials
            </Button>
          </div>
        </FadeIn>
      </Section>

      {/* Closing Invitation Section */}
      <Section variant="default" padding="xl">
        <FadeIn>
          <div className="bg-gradient-to-br from-brand-light to-brand-soft rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 text-center max-w-4xl mx-auto relative overflow-hidden">
            {/* Decorative stones image - contained within bounds */}
            <div className="absolute bottom-4 right-4 w-24 h-24 md:w-32 md:h-32 opacity-[0.08] pointer-events-none">
              <Image
                src="/logo-icon.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>

            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-text-primary mb-4 md:mb-6">
                Ready to partner with us?
              </h2>
              <p className="text-base sm:text-lg text-text-secondary mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto">
                Whether you&apos;re making a referral, considering a donation, or exploring grant opportunities, we&apos;d love to connect.
              </p>
              <Magnetic>
                <Button href="/contact" variant="primary" size="lg" icon={<ArrowRightIcon className="w-5 h-5" />} iconPosition="right">
                  Contact Us
                </Button>
              </Magnetic>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
