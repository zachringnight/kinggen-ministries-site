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
  ImpactCounterSection,
  AnimatedDivider,
  GlassCard,
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
    description: "Gospel-centered support for anxiety, stress, grief, and life transitions - offered at no cost to clients.",
  },
  {
    icon: ShieldIcon,
    title: "Crisis & Trauma Support",
    description: "Compassionate, confidential care for women walking through trauma, crisis, and seasons of deep pain.",
  },
  {
    icon: CrossIcon,
    title: "Spiritual & Emotional Growth",
    description: "Help with boundaries, identity, confidence, and spiritual discouragement - rooted in Scripture and hope.",
  },
];

const audienceCards = [
  {
    icon: UsersIcon,
    title: "Referrers",
    description:
      "For pastors, churches, social workers, and trusted professionals looking for a compassionate referral option for women in need.",
    href: "/for-referrers",
    cta: "For Referrers",
    iconColor: "bg-brand-primary",
  },
  {
    icon: HeartIcon,
    title: "Donors",
    description:
      "Your tax-deductible gift helps remove cost barriers and ensures women receive the care they need.",
    href: "/donate",
    cta: "Donate",
    iconColor: "bg-brand-accent",
  },
  {
    icon: GiftIcon,
    title: "Grant Writers & Foundations",
    description:
      "Access organizational information, impact data, and resources to support grant applications.",
    href: "/for-grant-writers",
    cta: "For Grant Writers",
    iconColor: "bg-brand-warm",
  },
];

export default function Home() {
  return (
    <>
      <section
        className="relative w-full min-h-[62vh] md:min-h-[78vh] flex items-center animate-fade-in-up isolate overflow-hidden"
        role="banner"
        aria-label="KingGen Ministries - Christian Counseling for Women"
      >
        <OptimizedBackground
          src="/brand/headers/homepage-hero.webp"
          className="absolute inset-0 bg-cover bg-center pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/60 via-brand-primary/75 to-brand-primary/92" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(123,163,144,0.18)_0%,transparent_60%)] pointer-events-none" />

        <h1 className="sr-only">KingGen Ministries</h1>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-28 pb-16 md:pt-36 md:pb-24">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-white/12 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium rounded-full mb-6 tracking-wide">
              501(c)(3) Christian Counseling Nonprofit
            </span>
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading text-white leading-[1.05] text-balance">
              Free Gospel-centered counseling for women in need.
            </p>
            <p className="text-base md:text-lg text-white/85 mt-5 max-w-2xl leading-relaxed">
              Compassionate, confidential pastoral care offered at no cost. For referrals, donors, and ministry partners.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button href="/contact" variant="gold" size="lg" icon={<ArrowRightIcon className="w-5 h-5" />} iconPosition="right">
                Start a Referral Conversation
              </Button>
              <Button href="/donate" variant="outline-white" size="lg" icon={<HeartIcon className="w-5 h-5" />}>
                Support the Mission
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "No-cost client services",
                "15+ years clinical experience",
                "Confidential & private",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-white/80 text-sm">
                  <CheckCircleIcon className="w-4 h-4 text-brand-gold-light flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AnimatedDivider variant="wave" color="var(--brand-soft)" className="-mt-1" />

      <Section variant="art-cream" padding="xl" watermark="cross-subtle" ornamentLevel="featured">
        <FadeIn>
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <SectionHeader
              title="About our ministry"
              subtitle="At KingGen Ministries, we believe everyone should have access to counseling. As a 501(c)(3), we offer Gospel-centered counseling for women in need by a licensed clinical pastoral counselor."
              className="mb-8"
            />
            <Button href="/about" variant="primary" icon={<ArrowRightIcon className="w-5 h-5" />} iconPosition="right">
              Learn More
            </Button>
          </div>
        </FadeIn>
      </Section>

      <Section variant="default" padding="xl" watermark="stones-right" ornamentLevel="featured">
        <FadeIn>
          <SectionHeader
            title="Our services"
            subtitle="Free, Gospel-centered clinical pastoral counseling for women in need."
          />
        </FadeIn>

        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <StaggerItem key={i}>
              <div className="brand-panel p-6 md:p-8 h-full flex flex-col card-hover">
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

      <Section variant="cross-green" padding="xl" watermark="cross" ornamentLevel="featured">
        <FadeIn>
          <SectionHeader
            title="Our impact"
            subtitle="Making a difference in women's lives through Gospel-centered care"
            light
          />
        </FadeIn>

        <ImpactCounterSection stats={impactStats} className="max-w-4xl mx-auto" />
      </Section>

      <AnimatedDivider variant="curve" color="var(--brand-soft)" flip className="-mb-1" />

      <Section variant="light" padding="xl" watermark="stones-left" ornamentLevel="featured">
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
              <div className="brand-panel p-4 h-full card-hover">
                <div className="flex flex-col items-center text-center p-2">
                  <div className="w-12 h-12 rounded-xl bg-brand-primary flex items-center justify-center mb-4 shadow-lg">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm md:text-base text-text-primary font-medium">{item.text}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      <Section variant="soft" padding="xl" watermark="stones-left" ornamentLevel="featured">
        <FadeIn>
          <SectionHeader title="Partner with us" />
        </FadeIn>

        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {audienceCards.map((card) => (
            <StaggerItem key={card.title}>
              <div className="brand-panel p-6 md:p-8 h-full flex flex-col relative overflow-hidden group card-shine">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/6 via-transparent to-brand-accent/6 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl ${card.iconColor} flex items-center justify-center mb-4 shadow-lg`}>
                    <card.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold font-heading text-text-primary mb-2 md:mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm md:text-base text-text-secondary mb-4 md:mb-6 flex-grow">
                    {card.description}
                  </p>
                  <Button href={card.href} variant="primary" fullWidth>
                    {card.cta}
                  </Button>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      <Section variant="cross-green" padding="xl" watermark="cross" ornamentLevel="featured">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center brand-panel-dark rounded-3xl p-8 md:p-10">
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
              <Button href="/donate" variant="white" size="lg" icon={<HeartIcon className="w-5 h-5" />} className="shadow-xl shadow-black/20">
                Donate Now
              </Button>
              <Button href="/for-grant-writers" variant="outline-white" size="lg">
                Grant Information
              </Button>
            </div>
          </div>
        </FadeIn>
      </Section>

      <AnimatedDivider variant="wave" color="var(--brand-soft)" className="-mt-1" />

      <Section variant="art-cream" padding="xl" watermark="stones-right" ornamentLevel="featured">
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
                  <div className="brand-panel p-6 md:p-8 h-full relative group">
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
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          <div className="md:hidden">
            <div className="brand-panel rounded-2xl overflow-hidden border border-brand-light">
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
      </Section>

      <Section variant="cross-green" padding="xl" watermark="cross" ornamentLevel="featured">
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
                  <Button href="/about#speaking" variant="white" size="lg" icon={<ArrowRightIcon className="w-5 h-5" />} iconPosition="right">
                    Learn More
                  </Button>
                  <Button href="/contact" variant="outline-white" size="lg">
                    Request a Booking
                  </Button>
                </div>
              </FadeIn>
            </div>
          </GlassCard>
        </div>
      </Section>

      <Section variant="art-cream" padding="xl" watermark="cross-subtle" ornamentLevel="featured">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-text-primary mb-4 md:mb-6">
              Ready to partner with us?
            </h2>
            <p className="text-base sm:text-lg text-text-secondary mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto">
              Whether you&apos;re making a referral, considering a donation, or exploring grant opportunities, we&apos;d love to connect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary" size="lg" icon={<ArrowRightIcon className="w-5 h-5" />} iconPosition="right">
                Contact Us
              </Button>
              <Button href="/donate" variant="gold" size="lg" icon={<HeartIcon className="w-5 h-5" />}>
                Support Our Mission
              </Button>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
