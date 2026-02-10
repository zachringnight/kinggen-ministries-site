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
  OptimizedBackground,
  FadeIn,
  StaggerContainer,
  StaggerItem,
  TiltCard,
  Magnetic,
  ScrollProgress,
  AnimatedGradientBg,
  TextSplitReveal,
  FloatingActionButton,
  ImpactCounterSection,
  AnimatedDivider,
  GlassCard,
  AnimatedBorderCard,
  BlurInText,
  FloatingParticles,
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

export default function Home() {
  return (
    <>
      <ScrollProgress />

      <FloatingActionButton
        href="/donate"
        icon={<HeartIcon className="w-5 h-5" />}
        label="Support Our Mission"
      />

      {/* ===== HERO ===== */}
      <section className="relative min-h-[92vh] md:min-h-[88vh] flex items-center overflow-hidden">
        <OptimizedBackground
          src="/KingGen Background (1).png"
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          priority
        />
        <AnimatedGradientBg />
        <FloatingParticles count={12} className="opacity-30" />

        <OptimizedBackground
          src="/bg_white_cross.png"
          className="absolute right-0 bottom-0 w-64 sm:w-80 md:w-96 bg-no-repeat pointer-events-none"
          style={{
            backgroundPosition: "right bottom",
            backgroundSize: "contain",
            opacity: 0.15,
            height: "450px",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/25" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-white text-sm font-medium mb-8">
                <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
                501(c)(3) Nonprofit Ministry
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-heading text-white mb-4 md:mb-6 leading-[1.08]">
                <TextSplitReveal text="KingGen" delay={0.3} />
                <br />
                <span className="text-white/90">
                  <TextSplitReveal text="Ministries" delay={0.5} />
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.6}>
              <p className="text-xl sm:text-2xl md:text-3xl font-heading text-white/90 mb-4 md:mb-6 italic">
                <BlurInText text="Gospel-centered counseling for women in need" delay={0.7} />
              </p>
            </FadeIn>

            <FadeIn delay={0.8}>
              <p className="text-base sm:text-lg md:text-xl text-white/75 max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed">
                A 501(c)(3) nonprofit providing free clinical pastoral counseling.
                Partner with us through referrals, donations, or grants.
              </p>
            </FadeIn>

            <FadeIn delay={1}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Magnetic strength={0.15}>
                  <Button href="/for-referrers" variant="white" size="lg" className="w-full sm:w-auto shadow-xl shadow-black/20 !rounded-full">
                    For Referrers
                  </Button>
                </Magnetic>
                <Magnetic strength={0.15}>
                  <Button href="/donate" variant="outline" size="lg" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 backdrop-blur-sm !rounded-full">
                    <HeartIcon className="w-5 h-5 mr-2" />
                    Donate
                  </Button>
                </Magnetic>
                <Magnetic strength={0.15}>
                  <Button href="/for-grant-writers" variant="outline" size="lg" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 backdrop-blur-sm !rounded-full">
                    For Grant Writers
                  </Button>
                </Magnetic>
              </div>
            </FadeIn>
          </div>
        </div>

        <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2">
          <FadeIn delay={1.4}>
            <div className="flex flex-col items-center gap-2 text-white/60">
              <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
              <div className="w-5 h-9 border-2 border-white/30 rounded-full flex justify-center pt-2">
                <div className="w-1 h-1 bg-white/80 rounded-full animate-bounce" />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <AnimatedDivider variant="wave" color="var(--brand-soft)" className="-mt-1" />

      {/* ===== ABOUT THE MINISTRY ===== */}
      <Section variant="default" padding="xl" watermark="none">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center px-2">
            <div className="decorative-line mx-auto mb-6" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-text-primary mb-6">
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

      {/* ===== IMPACT STATISTICS ===== */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <AnimatedGradientBg />
        <FloatingParticles count={8} className="opacity-20" />

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

      <AnimatedDivider variant="curve" color="var(--brand-light)" flip className="-mb-1" />

      {/* ===== WHAT SETS US APART ===== */}
      <Section variant="light" padding="xl" watermark="none">
        <FadeIn>
          <SectionHeader
            title="What sets KingGen apart"
            subtitle="A trusted partner for churches, community organizations, and foundations seeking to support women's mental health and spiritual care."
          />
        </FadeIn>

        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {[
            { icon: HeartIcon, title: "Gospel-centered", text: "Compassionate care rooted in Scripture", color: "from-rose-500 to-pink-600" },
            { icon: ShieldIcon, title: "Confidential", text: "Trauma-informed and private", color: "from-emerald-500 to-teal-600" },
            { icon: UsersIcon, title: "No cost barrier", text: "Free for every client", color: "from-blue-500 to-indigo-600" },
            { icon: CheckCircleIcon, title: "Accountable", text: "501(c)(3) nonprofit stewardship", color: "from-amber-500 to-orange-600" },
          ].map((item, i) => (
            <StaggerItem key={i}>
              <AnimatedBorderCard>
                <div className="flex flex-col items-center text-center p-3">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-lg`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-sm font-bold text-text-primary mb-1">{item.title}</h3>
                  <p className="text-sm text-text-secondary">{item.text}</p>
                </div>
              </AnimatedBorderCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* ===== PARTNER WITH US ===== */}
      <Section variant="warm-cream" padding="xl" watermark="stones">
        <FadeIn>
          <SectionHeader title="Partner with us" />
        </FadeIn>

        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              icon: UsersIcon,
              title: "Referrers",
              desc: "For pastors, churches, social workers, and trusted professionals looking for a compassionate referral option for women in need.",
              href: "/for-referrers",
              label: "For Referrers",
              gradient: "from-brand-primary to-brand-secondary",
              shadowColor: "shadow-brand-primary/20",
            },
            {
              icon: HeartIcon,
              title: "Donors",
              desc: "Your tax-deductible gift helps remove cost barriers and ensures women receive the care they need.",
              href: "/donate",
              label: "Donate",
              gradient: "from-brand-accent to-brand-warm",
              shadowColor: "shadow-brand-accent/20",
            },
            {
              icon: GiftIcon,
              title: "Grant Writers & Foundations",
              desc: "Access organizational information, impact data, and resources to support grant applications.",
              href: "/for-grant-writers",
              label: "For Grant Writers",
              gradient: "from-brand-warm to-brand-primary",
              shadowColor: "shadow-brand-warm/20",
            },
          ].map((card, i) => (
            <StaggerItem key={i}>
              <TiltCard className="h-full">
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-brand-lg border border-brand-light/60 h-full flex flex-col relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/3 to-brand-accent/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-5 shadow-lg ${card.shadowColor}`}>
                      <card.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold font-heading text-text-primary mb-2 md:mb-3">
                      {card.title}
                    </h3>
                    <p className="text-sm md:text-base text-text-secondary mb-5 md:mb-6 flex-grow leading-relaxed">
                      {card.desc}
                    </p>
                    <Button href={card.href} variant="primary" fullWidth className="!rounded-xl">
                      {card.label}
                    </Button>
                  </div>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* ===== OUR COMMITMENT ===== */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <AnimatedGradientBg />

        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto mb-6" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-white mb-4 md:mb-6">
                Our commitment
              </h2>
              <p className="text-base sm:text-lg text-white/85 mb-3 md:mb-4 leading-relaxed">
                As a <strong>501(c)(3)</strong> nonprofit, KingGen Ministries is committed to stewardship, transparency, and accountability. Every donation directly supports our mission to provide free counseling for women in need.
              </p>
              <p className="text-base sm:text-lg text-white/85 mb-2 leading-relaxed">
                We partner with churches, community organizations, and foundations who share our vision.
              </p>
              <p className="text-white/55 mb-8 md:mb-10 text-sm">
                <strong className="text-white/75">EIN:</strong> {siteConfig.ein}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Magnetic strength={0.15}>
                  <Button href="/donate" variant="white" size="lg" icon={<HeartIcon className="w-5 h-5" />} className="shadow-xl shadow-black/20 !rounded-full">
                    Donate Now
                  </Button>
                </Magnetic>
                <Magnetic strength={0.15}>
                  <Button href="/for-grant-writers" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm !rounded-full">
                    Grant Information
                  </Button>
                </Magnetic>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <AnimatedDivider variant="wave" color="var(--brand-light)" className="-mt-1" />

      {/* ===== TESTIMONIALS ===== */}
      <Section variant="light" padding="xl" watermark="stones-right">
        <FadeIn>
          <SectionHeader
            title="What partners say"
            subtitle="Hear from pastors, referrers, and community partners who trust KingGen Ministries."
          />
        </FadeIn>

        <div className="max-w-5xl mx-auto">
          <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonialData.map((testimonial, index) => (
              <StaggerItem key={index}>
                <div className="bg-white rounded-2xl p-6 md:p-7 shadow-brand border border-brand-light/50 h-full relative group hover:shadow-brand-lg transition-shadow duration-300">
                  <QuoteIcon className="absolute top-5 right-5 w-6 h-6 text-brand-accent/15 group-hover:text-brand-accent/25 transition-colors" />
                  <p className="text-sm md:text-base text-text-secondary italic mb-5 leading-relaxed pr-6">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center text-white font-bold text-sm shadow-md">
                      {testimonial.initial}
                    </div>
                    <div>
                      <p className="font-bold text-text-primary text-sm">{testimonial.author}</p>
                      <p className="text-xs text-text-muted">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        <FadeIn delay={0.3}>
          <div className="text-center mt-10">
            <Button href="/testimonials" variant="outline" icon={<ArrowRightIcon className="w-5 h-5" />} iconPosition="right" className="!rounded-full">
              Read All Testimonials
            </Button>
          </div>
        </FadeIn>
      </Section>

      {/* ===== BOOK LEEANN ===== */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <AnimatedGradientBg />

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
                  <p className="text-base sm:text-lg text-white/85 mb-8 max-w-2xl mx-auto leading-relaxed">
                    LeeAnn is available for speaking engagements, podcast interviews, and ministry events. Her heart is to encourage women and share the hope of the Gospel.
                  </p>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Magnetic strength={0.15}>
                      <Button href="/about#speaking" variant="white" size="lg" icon={<ArrowRightIcon className="w-5 h-5" />} iconPosition="right" className="!rounded-full">
                        Learn More
                      </Button>
                    </Magnetic>
                    <Magnetic strength={0.15}>
                      <Button href="/contact" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 !rounded-full">
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

      {/* ===== SCRIPTURE ===== */}
      <Section variant="default" padding="lg" watermark="none">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-brand-accent/40 to-transparent mx-auto mb-6" />
            <blockquote className="border-0 p-0 text-center">
              <p className="text-lg sm:text-xl md:text-2xl font-heading italic text-text-primary leading-relaxed mb-4">
                &ldquo;He heals the brokenhearted and binds up their wounds.&rdquo;
              </p>
              <cite className="text-sm text-text-muted not-italic tracking-wide">
                Psalm 147:3
              </cite>
            </blockquote>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-brand-accent/40 to-transparent mx-auto mt-6" />
          </div>
        </FadeIn>
      </Section>

      {/* ===== FINAL CTA ===== */}
      <Section variant="light" padding="xl" watermark="none">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-text-primary mb-4 md:mb-6">
              Ready to partner with us?
            </h2>
            <p className="text-base sm:text-lg text-text-secondary mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto">
              Whether you&apos;re making a referral, considering a donation, or exploring grant opportunities, we&apos;d love to connect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Magnetic strength={0.15}>
                <Button href="/contact" variant="primary" size="lg" icon={<ArrowRightIcon className="w-5 h-5" />} iconPosition="right" className="!rounded-full">
                  Contact Us
                </Button>
              </Magnetic>
              <Magnetic strength={0.15}>
                <Button href="/donate" variant="outline" size="lg" icon={<HeartIcon className="w-5 h-5" />} className="!rounded-full">
                  Support Our Mission
                </Button>
              </Magnetic>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
