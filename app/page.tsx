"use client";

import Link from "next/link";
import { siteConfig } from "./config/site";
import {
  Section,
  SectionHeader,
  Button,
  HeartIcon,
  CrossIcon,
  UsersIcon,
  ShieldIcon,
  SparklesIcon,
  BookOpenIcon,
  PhoneIcon,
  CalendarIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  GiftIcon,
  // Motion components
  FloatingParticles,
  GlowingOrbs,
  FadeIn,
  StaggerContainer,
  StaggerItem,
  AnimatedCounter,
  TiltCard,
  TextReveal,
  Magnetic,
  MorphingGradient,
  PulseRings,
  FloatingIcon,
  ScrollProgress,
} from "./components";

export default function Home() {
  return (
    <>
      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Hero Section with Particles */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-primary">
        {/* Animated Background Elements */}
        <MorphingGradient className="opacity-50" />
        <GlowingOrbs />
        <FloatingParticles count={60} />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <FadeIn delay={0.2}>
            <p className="text-brand-accent font-medium tracking-wider uppercase mb-6 text-sm md:text-base">
              Gospel-Centered Clinical Pastoral Counseling
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading text-white mb-6 leading-tight">
              <TextReveal text="Hope and Healing for" delay={0.5} />
              <br />
              <span className="text-brand-accent">
                <TextReveal text="Every Woman" delay={0.8} />
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.8}>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed">
              We provide free, professional clinical pastoral counseling rooted in faith and compassion. You don&apos;t have to walk this journey alone.
            </p>
          </FadeIn>

          <FadeIn delay={1}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Magnetic strength={0.2}>
                <Button href="/contact" variant="accent" size="lg" className="shadow-2xl shadow-brand-accent/30">
                  Get Support Today
                </Button>
              </Magnetic>
              <Magnetic strength={0.2}>
                <Button href="/about" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                  Learn More
                </Button>
              </Magnetic>
            </div>
          </FadeIn>

          {/* Animated Trust Badges */}
          <FadeIn delay={1.2}>
            <div className="flex flex-wrap items-center justify-center gap-6 text-white/80 text-sm">
              <FloatingIcon delay={0}>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <CheckCircleIcon className="w-5 h-5 text-brand-accent" />
                  <span>Licensed Counselors</span>
                </div>
              </FloatingIcon>
              <FloatingIcon delay={0.5}>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <CheckCircleIcon className="w-5 h-5 text-brand-accent" />
                  <span>100% Free Services</span>
                </div>
              </FloatingIcon>
              <FloatingIcon delay={1}>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <CheckCircleIcon className="w-5 h-5 text-brand-accent" />
                  <span>Confidential & Safe</span>
                </div>
              </FloatingIcon>
            </div>
          </FadeIn>
        </div>

        {/* Animated scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <FadeIn delay={1.5}>
            <div className="flex flex-col items-center gap-2 text-white/60">
              <span className="text-xs tracking-widest uppercase">Scroll</span>
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
                <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What We Offer Section */}
      <Section variant="light" padding="xl">
        <FadeIn>
          <SectionHeader
            title="What We Offer"
            subtitle="Compassionate, faith-based support for women facing life's challenges. Our licensed pastoral counselors are here to help."
          />
        </FadeIn>

        <StaggerContainer staggerDelay={0.15} className="grid md:grid-cols-3 gap-8">
          <StaggerItem>
            <TiltCard className="h-full">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full">
                <FloatingIcon delay={0}>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-primary to-brand-secondary text-white flex items-center justify-center mb-6 shadow-lg">
                    <HeartIcon className="w-8 h-8" />
                  </div>
                </FloatingIcon>
                <h3 className="text-xl font-bold font-heading text-text-primary mb-3">Clinical Pastoral Counseling</h3>
                <p className="text-text-secondary leading-relaxed">
                  Professional counseling services that integrate clinical expertise with spiritual care, addressing the whole person.
                </p>
              </div>
            </TiltCard>
          </StaggerItem>

          <StaggerItem>
            <TiltCard className="h-full">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full">
                <FloatingIcon delay={0.3}>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-accent to-brand-primary text-white flex items-center justify-center mb-6 shadow-lg">
                    <GiftIcon className="w-8 h-8" />
                  </div>
                </FloatingIcon>
                <h3 className="text-xl font-bold font-heading text-text-primary mb-3">Always Free</h3>
                <p className="text-text-secondary leading-relaxed">
                  All our services are provided at no cost. We believe financial barriers should never prevent anyone from receiving help.
                </p>
              </div>
            </TiltCard>
          </StaggerItem>

          <StaggerItem>
            <TiltCard className="h-full">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full">
                <FloatingIcon delay={0.6}>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-secondary to-brand-accent text-white flex items-center justify-center mb-6 shadow-lg">
                    <UsersIcon className="w-8 h-8" />
                  </div>
                </FloatingIcon>
                <h3 className="text-xl font-bold font-heading text-text-primary mb-3">For Women in Need</h3>
                <p className="text-text-secondary leading-relaxed">
                  A safe, supportive environment specifically designed to serve women seeking guidance and emotional healing.
                </p>
              </div>
            </TiltCard>
          </StaggerItem>
        </StaggerContainer>
      </Section>

      {/* Mission Section */}
      <Section variant="default" padding="xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <div>
              <div className="decorative-line mb-6" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-text-primary mb-6">
                Rooted in Faith,{" "}
                <span className="gradient-text">Committed to Care</span>
              </h2>
              <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                At KingGen Ministries, we believe that true healing comes through the integration of professional care and spiritual guidance. Our mission is to walk alongside women during their most challenging moments, offering hope, understanding, and a path forward.
              </p>
              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                Led by Pastor LeeAnn, a licensed clinical pastoral counselor with years of experience in both ministry and counseling, we are committed to providing the highest quality care in a confidential, compassionate environment.
              </p>

              <div className="flex flex-wrap gap-4">
                <Magnetic>
                  <Button href="/about" variant="primary" icon={<ArrowRightIcon className="w-5 h-5" />} iconPosition="right">
                    Our Story
                  </Button>
                </Magnetic>
                <Magnetic>
                  <Button href="/services" variant="outline">
                    Our Services
                  </Button>
                </Magnetic>
              </div>
            </div>
          </FadeIn>

          {/* Values Grid with 3D Tilt */}
          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-2 gap-4">
            <StaggerItem>
              <TiltCard className="h-full">
                <div className="bg-brand-light rounded-2xl p-6 h-full">
                  <FloatingIcon>
                    <CrossIcon className="w-10 h-10 text-brand-primary mb-4" />
                  </FloatingIcon>
                  <h3 className="font-bold font-heading text-text-primary mb-2">Faith</h3>
                  <p className="text-sm text-text-secondary">Grounded in Scripture and centered on Christ</p>
                </div>
              </TiltCard>
            </StaggerItem>

            <StaggerItem>
              <TiltCard className="h-full">
                <div className="bg-brand-soft rounded-2xl p-6 h-full">
                  <FloatingIcon delay={0.2}>
                    <HeartIcon className="w-10 h-10 text-brand-primary mb-4" />
                  </FloatingIcon>
                  <h3 className="font-bold font-heading text-text-primary mb-2">Compassion</h3>
                  <p className="text-sm text-text-secondary">Meeting you where you are with grace</p>
                </div>
              </TiltCard>
            </StaggerItem>

            <StaggerItem>
              <TiltCard className="h-full">
                <div className="bg-brand-soft rounded-2xl p-6 h-full">
                  <FloatingIcon delay={0.4}>
                    <ShieldIcon className="w-10 h-10 text-brand-primary mb-4" />
                  </FloatingIcon>
                  <h3 className="font-bold font-heading text-text-primary mb-2">Integrity</h3>
                  <p className="text-sm text-text-secondary">Honest, transparent, and trustworthy</p>
                </div>
              </TiltCard>
            </StaggerItem>

            <StaggerItem>
              <TiltCard className="h-full">
                <div className="bg-brand-light rounded-2xl p-6 h-full">
                  <FloatingIcon delay={0.6}>
                    <SparklesIcon className="w-10 h-10 text-brand-primary mb-4" />
                  </FloatingIcon>
                  <h3 className="font-bold font-heading text-text-primary mb-2">Excellence</h3>
                  <p className="text-sm text-text-secondary">Committed to the highest quality care</p>
                </div>
              </TiltCard>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </Section>

      {/* Services Preview Section */}
      <Section variant="soft" padding="xl">
        <FadeIn>
          <SectionHeader
            title="How We Can Help"
            subtitle="Our services are designed to meet you wherever you are on your journey toward healing and wholeness."
          />
        </FadeIn>

        <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StaggerItem>
            <TiltCard className="h-full">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-primary to-brand-secondary text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <HeartIcon className="w-6 h-6" />
                </div>
                <h3 className="font-bold font-heading text-text-primary mb-2">Crisis Support</h3>
                <p className="text-sm text-text-secondary mb-4">Immediate help during difficult times</p>
                <Link href="/services#crisis" className="text-brand-primary font-medium text-sm hover:underline inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </TiltCard>
          </StaggerItem>

          <StaggerItem>
            <TiltCard className="h-full">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-accent to-brand-primary text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BookOpenIcon className="w-6 h-6" />
                </div>
                <h3 className="font-bold font-heading text-text-primary mb-2">Grief Counseling</h3>
                <p className="text-sm text-text-secondary mb-4">Support through loss and mourning</p>
                <Link href="/services#grief" className="text-brand-primary font-medium text-sm hover:underline inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </TiltCard>
          </StaggerItem>

          <StaggerItem>
            <TiltCard className="h-full">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-secondary to-brand-accent text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <SparklesIcon className="w-6 h-6" />
                </div>
                <h3 className="font-bold font-heading text-text-primary mb-2">Spiritual Direction</h3>
                <p className="text-sm text-text-secondary mb-4">Guidance for your faith journey</p>
                <Link href="/services#spiritual" className="text-brand-primary font-medium text-sm hover:underline inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </TiltCard>
          </StaggerItem>

          <StaggerItem>
            <TiltCard className="h-full">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-primary to-brand-accent text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <ShieldIcon className="w-6 h-6" />
                </div>
                <h3 className="font-bold font-heading text-text-primary mb-2">Anxiety & Depression</h3>
                <p className="text-sm text-text-secondary mb-4">Help managing life&apos;s struggles</p>
                <Link href="/services#anxiety" className="text-brand-primary font-medium text-sm hover:underline inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </TiltCard>
          </StaggerItem>
        </StaggerContainer>

        <FadeIn delay={0.5}>
          <div className="text-center mt-12">
            <Magnetic>
              <Button href="/services" variant="primary" size="lg" icon={<ArrowRightIcon className="w-5 h-5" />} iconPosition="right">
                View All Services
              </Button>
            </Magnetic>
          </div>
        </FadeIn>
      </Section>

      {/* Testimonials Section */}
      <Section variant="default" padding="xl">
        <FadeIn>
          <SectionHeader
            title="Stories of Hope"
            subtitle="Hear from women whose lives have been touched by our ministry."
          />
        </FadeIn>

        <StaggerContainer staggerDelay={0.15} className="grid md:grid-cols-3 gap-8">
          {[
            {
              quote: "I came to KingGen Ministries feeling completely lost. Pastor LeeAnn helped me find my way back to hope and faith. I'm forever grateful.",
              author: "Sarah M.",
              role: "Program Participant",
            },
            {
              quote: "The counseling I received was life-changing. It was a blessing to find professional help that also understood and supported my faith.",
              author: "Jennifer L.",
              role: "Program Participant",
            },
            {
              quote: "In my darkest moment, KingGen was there. The compassion and care I experienced reminded me that I was not alone.",
              author: "Maria R.",
              role: "Program Participant",
            },
          ].map((testimonial, i) => (
            <StaggerItem key={i}>
              <TiltCard className="h-full" tiltAmount={5}>
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full relative overflow-hidden">
                  {/* Quote mark decoration */}
                  <div className="absolute top-4 right-4 text-brand-accent/10 text-8xl font-serif leading-none">&ldquo;</div>
                  <div className="relative z-10">
                    <p className="text-text-secondary italic mb-6 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center text-white font-bold">
                        {testimonial.author.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-text-primary">{testimonial.author}</p>
                        <p className="text-sm text-text-muted">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Impact Stats Section with Animated Counters */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-primary">
        <MorphingGradient className="opacity-30" />
        <FloatingParticles count={30} />

        <div className="relative z-10 container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="decorative-line mx-auto mb-6" style={{ background: "linear-gradient(90deg, #c9a227, #fff)" }} />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white mb-4">
                Making a Difference
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Through the generosity of our donors, we continue to serve women in need every day.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: 500, suffix: "+", label: "Women Served" },
              { value: 100, suffix: "%", label: "Free Services" },
              { value: 10, suffix: "+", label: "Years of Ministry" },
              { value: 1000, suffix: "+", label: "Counseling Sessions" },
            ].map((stat, i) => (
              <StaggerItem key={i}>
                <div className="text-center p-6 relative">
                  <PulseRings className="opacity-20" />
                  <p className="text-5xl md:text-6xl font-bold font-heading text-white mb-2 relative z-10">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={2.5} />
                  </p>
                  <p className="text-white/80 relative z-10">{stat.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Call to Action Section */}
      <Section variant="default" padding="xl">
        <FadeIn>
          <div className="bg-gradient-to-br from-brand-light to-brand-soft rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-primary/10 rounded-full blur-3xl" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-primary mb-4">
                  Ready to Take the First Step?
                </h2>
                <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                  Whether you&apos;re seeking support for yourself or want to learn more about our ministry, we&apos;re here for you. Reach out today and begin your journey toward hope and healing.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Magnetic>
                    <Button
                      href={`tel:${siteConfig.phone}`}
                      variant="primary"
                      size="lg"
                      icon={<PhoneIcon className="w-5 h-5" />}
                    >
                      Call Us Now
                    </Button>
                  </Magnetic>
                  <Magnetic>
                    <Button
                      href="/contact"
                      variant="outline"
                      size="lg"
                      icon={<CalendarIcon className="w-5 h-5" />}
                    >
                      Schedule Appointment
                    </Button>
                  </Magnetic>
                </div>
              </div>

              <TiltCard tiltAmount={5}>
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <h3 className="text-xl font-bold font-heading text-text-primary mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="flex items-center gap-4 p-4 rounded-xl bg-brand-light hover:bg-brand-light/70 transition-all duration-300 group hover:scale-[1.02]"
                    >
                      <div className="w-12 h-12 rounded-xl bg-brand-primary text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                        <PhoneIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm text-text-muted">Call us</p>
                        <p className="font-semibold text-text-primary">{siteConfig.phone}</p>
                      </div>
                    </a>

                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="flex items-center gap-4 p-4 rounded-xl bg-brand-light hover:bg-brand-light/70 transition-all duration-300 group hover:scale-[1.02]"
                    >
                      <div className="w-12 h-12 rounded-xl bg-brand-secondary text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-text-muted">Email us</p>
                        <p className="font-semibold text-text-primary">{siteConfig.email}</p>
                      </div>
                    </a>

                    <Link
                      href="/contact"
                      className="flex items-center gap-4 p-4 rounded-xl bg-brand-light hover:bg-brand-light/70 transition-all duration-300 group hover:scale-[1.02]"
                    >
                      <div className="w-12 h-12 rounded-xl bg-brand-accent text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                        <CalendarIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm text-text-muted">Book online</p>
                        <p className="font-semibold text-text-primary">Schedule Appointment</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </TiltCard>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Donation CTA Section */}
      <Section variant="soft" padding="lg">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto relative">
            <PulseRings />
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-text-primary mb-4 relative z-10">
              Support Our Mission
            </h2>
            <p className="text-lg text-text-secondary mb-8 relative z-10">
              Your generous donation helps us continue providing free counseling services to women in need. Every gift makes a difference.
            </p>
            <Magnetic>
              <Button href="/donate" variant="accent" size="lg" icon={<HeartIcon className="w-5 h-5" />} className="relative z-10">
                Make a Donation
              </Button>
            </Magnetic>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
