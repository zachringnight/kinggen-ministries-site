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
  ShieldIcon,
  GiftIcon,
  CrossIcon,
  OptimizedBackground,
  FadeIn,
  StaggerContainer,
  StaggerItem,
  TiltCard,
  Magnetic,
  ImpactCounterSection,
  AnimatedDivider,
  GlassCard,
  AnimatedBorderCard,
} from "./components";

const impactStats = [
  { value: 100, suffix: "%", label: "Free Services", description: "No cost to clients" },
  { value: 501, prefix: "", suffix: "(c)(3)", label: "Nonprofit Status", description: "Tax-deductible gifts" },
  { value: 15, suffix: "+", label: "Years Experience", description: "Clinical pastoral care" },
  { value: 24, suffix: "/7", label: "Confidential", description: "Private & secure" },
];

const testimonialData = [
  {
    quote: "As a pastor, I'm grateful for a referral option that is compassionate, discreet, and Gospel-centered. I trust KingGen with the women in our congregation.",
    author: "Mark",
    role: "Pastor",
    initial: "M",
  },
  {
    quote: "Communication has been clear and respectful. I'm grateful for a place to refer women who need support and privacy.",
    author: "Jenna",
    role: "Community Referrer",
    initial: "J",
  },
  {
    quote: "KingGen provides the kind of care that transforms lives. Their commitment to serving women in need is truly remarkable.",
    author: "Sarah",
    role: "Ministry Partner",
    initial: "S",
  },
];

const services = [
  {
    icon: HeartIcon,
    title: "Individual Pastoral Counseling",
    description: "Gospel-centered support for anxiety, stress, grief, and life transitions — offered at no cost to clients.",
  },
  {
    icon: ShieldIcon,
    title: "Crisis & Trauma Support",
    description: "Compassionate, confidential care for women walking through trauma, crisis, and seasons of deep pain.",
  },
  {
    icon: CrossIcon,
    title: "Spiritual & Emotional Growth",
    description: "Help with boundaries, identity, confidence, and spiritual discouragement — rooted in Scripture and hope.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section — baked-in banner image, no text overlay */}
      <section
        className="relative w-full min-h-[60vh] bg-cover bg-center animate-fade-in-up"
        style={{ backgroundImage: "url('/brand/headers/homepage-hero.png')" }}
        role="banner"
        aria-label="KingGen Ministries — Christian Counseling for Women"
      />

      {/* Wave Divider */}
      <AnimatedDivider variant="wave" color="var(--brand-soft)" className="-mt-1" />

      {/* About the Ministry Section */}
      <section
        className="relative py-16 md:py-24"
        style={{
          backgroundImage: "url('/brand/bg/off-white-texture.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center px-4 sm:px-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-text-primary mb-4 md:mb-6">
                About our ministry
              </h2>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-4">
                KingGen Ministries exists so women can access counseling even when cost is a barrier. We provide compassionate, Gospel-centered care for women facing anxiety, grief, trauma, relationship pain, and life transitions.
              </p>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-8">
                Counseling is offered at no cost to clients. Donations and grants make it possible to continue serving women in need.
              </p>
              <Button href="/about" variant="primary" icon={<ArrowRightIcon className="w-5 h-5" />} iconPosition="right">
                Learn More
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services Section — 3-column cards */}
      <Section variant="default" padding="xl">
        <FadeIn>
          <SectionHeader
            title="Our services"
            subtitle="Free, Gospel-centered clinical pastoral counseling for women in need."
          />
        </FadeIn>

        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <StaggerItem key={i}>
              <TiltCard className="h-full" tiltAmount={4}>
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-brand-light h-full flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-brand-primary flex items-center justify-center mb-5 shadow-lg">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold font-heading text-text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-text-secondary flex-grow">
                    {service.description}
                  </p>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.3}>
          <div className="text-center mt-8 md:mt-10">
            <Button href="/services" variant="outline" icon={<ArrowRightIcon className="w-5 h-5" />} iconPosition="right">
              View All Services
            </Button>
          </div>
        </FadeIn>
      </Section>

      {/* Impact Statistics Section */}
      <section
        className="relative py-16 md:py-24 overflow-hidden"
        style={{
          backgroundImage: "url('/brand/bg/dark-green-texture.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <FadeIn>
            <SectionHeader
              title="Our impact"
              subtitle="Making a difference in women's lives through Gospel-centered care"
              light
            />
          </FadeIn>

          <ImpactCounterSection stats={impactStats} className="max-w-4xl mx-auto" />
        </div>
      </section>

      {/* Curve Divider */}
      <AnimatedDivider variant="curve" color="var(--brand-soft)" flip className="-mb-1" />

      {/* What Sets Us Apart */}
      <Section variant="light" padding="xl" watermark="stones-left">
        <FadeIn>
          <SectionHeader
            title="What sets KingGen apart"
            subtitle="We are a trusted partner for churches, community organizations, and foundations seeking to support women's mental health and spiritual care."
          />
        </FadeIn>

        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {[
            { icon: CrossIcon, text: "Gospel-centered, compassionate care" },
            { icon: ShieldIcon, text: "Confidential and trauma-informed" },
            { icon: UsersIcon, text: "No cost barrier for clients" },
            { icon: CheckCircleIcon, text: "501(c)(3) nonprofit accountability" },
          ].map((item, i) => (
            <StaggerItem key={i}>
              <AnimatedBorderCard>
                <div className="flex flex-col items-center text-center p-2">
                  <div className="w-12 h-12 rounded-xl bg-brand-primary flex items-center justify-center mb-4 shadow-lg">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm md:text-base text-text-primary font-medium">{item.text}</p>
                </div>
              </AnimatedBorderCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Partner With Us Section */}
      <Section variant="soft" padding="xl" watermark="stones-left">
        <FadeIn>
          <SectionHeader title="Partner with us" />
        </FadeIn>

        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <StaggerItem>
            <TiltCard className="h-full">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-brand-light h-full flex flex-col relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-brand-primary flex items-center justify-center mb-4 shadow-lg">
                    <UsersIcon className="w-7 h-7 text-white" />
                  </div>
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
              </div>
            </TiltCard>
          </StaggerItem>

          <StaggerItem>
            <TiltCard className="h-full">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-brand-light h-full flex flex-col relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-brand-accent flex items-center justify-center mb-4 shadow-lg">
                    <HeartIcon className="w-7 h-7 text-white" />
                  </div>
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
              </div>
            </TiltCard>
          </StaggerItem>

          <StaggerItem>
            <TiltCard className="h-full">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-brand-light h-full flex flex-col relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-warm/5 to-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-brand-warm flex items-center justify-center mb-4 shadow-lg">
                    <GiftIcon className="w-7 h-7 text-white" />
                  </div>
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
              </div>
            </TiltCard>
          </StaggerItem>
        </StaggerContainer>
      </Section>

      {/* Commitment Section */}
      <section
        className="relative py-16 md:py-24 overflow-hidden"
        style={{
          backgroundImage: "url('/brand/bg/dark-green-texture.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <OptimizedBackground
          src="/bg_white_cross.png"
          className="absolute inset-0 bg-no-repeat pointer-events-none"
          style={{
            backgroundPosition: "center",
            backgroundSize: "200px auto",
            opacity: 0.06,
          }}
        />

        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center mb-4">
                <CrossIcon className="w-8 h-8 text-white/60" strokeWidth={1.5} />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-white mb-4 md:mb-6">
                Our commitment
              </h2>
              <p className="text-base sm:text-lg text-white/90 mb-3 md:mb-4 leading-relaxed">
                As a <strong>501(c)(3)</strong> nonprofit, KingGen Ministries is committed to stewardship, transparency, and accountability. Every donation directly supports our mission to provide free counseling for women in need.
              </p>
              <p className="text-base sm:text-lg text-white/90 mb-2 leading-relaxed">
                We partner with churches, community organizations, and foundations who share our vision.
              </p>
              <p className="text-white/80 mb-6 md:mb-8">
                <strong>EIN:</strong> {siteConfig.ein}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Magnetic>
                  <Button href="/donate" variant="white" size="lg" icon={<HeartIcon className="w-5 h-5" />} className="shadow-xl shadow-black/20">
                    Donate Now
                  </Button>
                </Magnetic>
                <Magnetic>
                  <Button href="/for-grant-writers" variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10 backdrop-blur-sm">
                    Grant Information
                  </Button>
                </Magnetic>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Wave Divider */}
      <AnimatedDivider variant="wave" color="var(--brand-soft)" className="-mt-1" />

      {/* Testimonials Section */}
      <section
        className="relative py-16 md:py-24"
        style={{
          backgroundImage: "url('/brand/bg/off-white-texture.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <FadeIn>
            <SectionHeader
              title="What partners say"
              subtitle="Hear from pastors, referrers, and community partners who trust KingGen Ministries."
            />
          </FadeIn>

          <div className="max-w-4xl mx-auto">
            <div className="hidden md:block">
              <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {testimonialData.slice(0, 2).map((testimonial, index) => (
                  <StaggerItem key={index}>
                    <TiltCard className="h-full" tiltAmount={5}>
                      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg h-full relative border border-brand-light group">
                        <QuoteIcon className="absolute top-4 right-4 md:top-6 md:right-6 w-6 h-6 md:w-8 md:h-8 text-brand-primary/20 group-hover:text-brand-accent/30 transition-colors" />
                        <p className="text-sm md:text-base text-text-secondary italic mb-4 md:mb-6 leading-relaxed pr-8">
                          &ldquo;{testimonial.quote}&rdquo;
                        </p>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center text-white font-bold text-lg shadow-lg">
                            {testimonial.initial}
                          </div>
                          <div>
                            <p className="font-bold text-text-primary text-sm md:text-base">{testimonial.author}</p>
                            <p className="text-xs md:text-sm text-text-muted">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </TiltCard>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            <div className="md:hidden">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-brand-light">
                {testimonialData.map((testimonial, index) => (
                  <FadeIn key={index} delay={0.1 * index}>
                    <div className="p-6 border-b border-brand-light last:border-b-0">
                      <QuoteIcon className="w-6 h-6 text-brand-primary/20 mb-3" />
                      <p className="text-sm text-text-secondary italic mb-4 leading-relaxed">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center text-white font-bold text-sm">
                          {testimonial.initial}
                        </div>
                        <div>
                          <p className="font-bold text-text-primary text-sm">{testimonial.author}</p>
                          <p className="text-xs text-text-muted">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>

          <FadeIn delay={0.3}>
            <div className="text-center mt-8 md:mt-10">
              <Button href="/testimonials" variant="primary" icon={<ArrowRightIcon className="w-5 h-5" />} iconPosition="right">
                Read All Testimonials
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Book LeeAnn Section */}
      <section
        className="relative py-16 md:py-24 overflow-hidden"
        style={{
          backgroundImage: "url('/brand/bg/dark-green-texture.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <GlassCard className="p-8 md:p-12">
              <div className="text-center">
                <FadeIn>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-white mb-4">
                    Invite LeeAnn to speak
                  </h2>
                </FadeIn>
                <FadeIn delay={0.1}>
                  <p className="text-base sm:text-lg text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
                    LeeAnn is available for speaking engagements, podcast interviews, and ministry events. Her heart is to encourage women and share the hope of the Gospel.
                  </p>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Magnetic>
                      <Button href="/about#speaking" variant="white" size="lg" icon={<ArrowRightIcon className="w-5 h-5" />} iconPosition="right">
                        Learn More
                      </Button>
                    </Magnetic>
                    <Magnetic>
                      <Button href="/contact" variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">
                        Request a Booking
                      </Button>
                    </Magnetic>
                  </div>
                </FadeIn>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        className="relative py-16 md:py-24"
        style={{
          backgroundImage: "url('/brand/bg/off-white-texture.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-text-primary mb-4 md:mb-6">
              Ready to partner with us?
            </h2>
            <p className="text-base sm:text-lg text-text-secondary mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto">
              Whether you&apos;re making a referral, considering a donation, or exploring grant opportunities, we&apos;d love to connect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Magnetic>
                <Button href="/contact" variant="primary" size="lg" icon={<ArrowRightIcon className="w-5 h-5" />} iconPosition="right">
                  Contact Us
                </Button>
              </Magnetic>
              <Magnetic>
                <Button href="/donate" variant="outline" size="lg" icon={<HeartIcon className="w-5 h-5" />}>
                  Support Our Mission
                </Button>
              </Magnetic>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
