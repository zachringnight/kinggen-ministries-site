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
  BrandLockup,
} from "./components";
import { getPageContent } from "./lib/content";
import { resolveIcon } from "./lib/icon-map";

// --- Hardcoded defaults (fallback when Blob is empty/unreachable) ---

const DEFAULT_IMPACT_STATS = [
  { value: 100, suffix: "%", animate: true, label: "Free Services", description: "No cost to clients" },
  { value: 501, staticValue: "501(c)(3)", animate: false, label: "Nonprofit Status", description: "Tax-deductible gifts" },
  { value: 15, suffix: "+", animate: true, label: "Years Experience", description: "Clinical pastoral care" },
  { value: 24, staticValue: "24/7", animate: false, label: "Confidential", description: "Private & secure" },
];

const DEFAULT_TESTIMONIALS = [
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

const DEFAULT_SERVICES = [
  {
    icon: "HeartIcon",
    title: "Individual Pastoral Counseling",
    description: "Gospel-centered support for anxiety, stress, grief, and life transitions - offered at no cost to clients.",
  },
  {
    icon: "ShieldIcon",
    title: "Crisis & Trauma Support",
    description: "Compassionate, confidential care for women walking through trauma, crisis, and seasons of deep pain.",
  },
  {
    icon: "CrossIcon",
    title: "Spiritual & Emotional Growth",
    description: "Help with boundaries, identity, confidence, and spiritual discouragement - rooted in Scripture and hope.",
  },
];

const DEFAULT_AUDIENCE_CARDS = [
  {
    icon: "UsersIcon",
    title: "Referrers",
    description:
      "For pastors, churches, social workers, and trusted professionals looking for a compassionate referral option for women in need.",
    href: "/for-referrers",
    cta: "For Referrers",
    iconColor: "bg-brand-primary",
  },
  {
    icon: "HeartIcon",
    title: "Donors",
    description:
      "Your tax-deductible gift helps remove cost barriers and ensures women receive the care they need.",
    href: "/donate",
    cta: "Donate",
    iconColor: "bg-brand-accent",
  },
  {
    icon: "GiftIcon",
    title: "Grant Writers & Foundations",
    description:
      "Access organizational information, impact data, and resources to support grant applications.",
    href: "/for-grant-writers",
    cta: "For Grant Writers",
    iconColor: "bg-brand-warm",
  },
];

const DEFAULT_VALUES = [
  { icon: "CrossIcon", text: "Gospel-centered, compassionate care", desc: "Rooted in Scripture and clinical training" },
  { icon: "ShieldIcon", text: "Confidential and trauma-informed", desc: "Private, safe, and respectful of each woman" },
  { icon: "UsersIcon", text: "No cost barrier for clients", desc: "Free services funded by donors and grants" },
  { icon: "CheckCircleIcon", text: "501(c)(3) nonprofit accountability", desc: "Transparent stewardship of every gift" },
];

const DEFAULT_HERO = {
  badge: "501(c)(3) Christian Counseling Nonprofit",
  headline: "Free Gospel-centered counseling for women in need.",
  pills: ["No-cost client services", "Licensed clinical pastoral counselor", "Confidential & private"],
  hero_metrics: [
    { value: "15+", label: "Years of care" },
    { value: "100%", label: "No-cost sessions" },
    { value: "501(c)(3)", label: "Nonprofit stewardship" },
  ],
};

export const revalidate = 60;

export default async function Home() {
  const content = await getPageContent('home');

  // Merge: Blob content wins, defaults fill gaps
  const hero = { ...DEFAULT_HERO, ...(content?.hero as Record<string, unknown>) };
  const impactStats = (content?.impact as Record<string, unknown>)?.stats as typeof DEFAULT_IMPACT_STATS ?? DEFAULT_IMPACT_STATS;
  const testimonialData = (content?.testimonials as Record<string, unknown>)?.items as typeof DEFAULT_TESTIMONIALS ?? DEFAULT_TESTIMONIALS;
  const serviceItems = (content?.services as Record<string, unknown>)?.items as typeof DEFAULT_SERVICES ?? DEFAULT_SERVICES;
  const audienceCards = (content?.audience as Record<string, unknown>)?.cards as typeof DEFAULT_AUDIENCE_CARDS ?? DEFAULT_AUDIENCE_CARDS;
  const valueItems = (content?.values as Record<string, unknown>)?.items as typeof DEFAULT_VALUES ?? DEFAULT_VALUES;
  return (
    <>
      <section
        className="relative w-full min-h-[42vh] md:min-h-[60vh] flex items-center animate-fade-in-up isolate overflow-hidden"
        aria-label="KingGen Ministries - Christian Counseling for Women"
      >
        <OptimizedBackground
          src="/brand/curated/bg/green-watermark-tall.png"
          className="absolute inset-0 bg-cover bg-center pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/54 via-brand-primary/66 to-brand-primary/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(123,163,144,0.12)_0%,transparent_62%)] pointer-events-none" />

        <h1 className="sr-only">KingGen Ministries</h1>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-20 pb-10 md:pt-24 md:pb-20">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <div>
              <div className="mb-4 flex justify-center">
                <BrandLockup theme="dark" size="lg" className="mx-auto max-w-[260px] md:max-w-[380px]" />
              </div>

              <span className="inline-block px-3.5 py-1.5 bg-white/9 backdrop-blur-sm border border-white/18 text-white/95 text-xs sm:text-sm font-medium rounded-full mb-4 tracking-wide">
                {hero.badge as string}
              </span>
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.12em] text-brand-gold-light/95 font-semibold mb-3">
                Clinical pastoral counseling ministry
              </p>
              <p className="text-[clamp(2rem,6vw,4rem)] font-bold font-heading text-white leading-[1.08] text-balance">
                {hero.headline as string}
              </p>
              <p className="text-base md:text-lg text-white/95 mt-4 max-w-2xl leading-relaxed">
                Compassionate, confidential pastoral care offered at no cost. For referrals, donors, and ministry partners.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center items-center">
                <Button href="/contact" variant="gold" size="lg" icon={<ArrowRightIcon className="w-5 h-5" />} iconPosition="right">
                  Start a Referral Conversation
                </Button>
                <Button href="/donate" variant="outline-white" size="lg" icon={<HeartIcon className="w-5 h-5" />}>
                  Support the Mission
                </Button>
              </div>
              <div className="mt-6 flex flex-wrap gap-3 justify-center">
                {(hero.pills as string[]).map((item) => (
                  <div key={item} className="flex items-center gap-2 text-white/95 text-[13px] sm:text-sm bg-white/10 border border-white/16 rounded-full px-3 py-1.5">
                    <CheckCircleIcon className="w-4 h-4 text-brand-gold-light flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-7 grid grid-cols-3 gap-2.5 max-w-3xl mx-auto">
                {(hero.hero_metrics as Array<{value: string; label: string}>).map((metric) => (
                  <div key={metric.label} className="brand-hero-stat px-4 py-2.5 text-center">
                    <p className="text-white font-semibold text-base">{metric.value}</p>
                    <p className="text-[11px] text-white/95 uppercase tracking-[0.08em]">{metric.label}</p>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-sm text-white/90 max-w-2xl mx-auto">
                Trusted by pastors, church leaders, social workers, and community referrers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AnimatedDivider variant="wave" color="var(--brand-soft)" className="-mt-1" />

      <Section variant="art-cream" padding="lg">
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

      <Section variant="white" padding="lg">
        <FadeIn>
          <SectionHeader
            title="Our services"
            subtitle="Free, Gospel-centered clinical pastoral counseling for women in need."
          />
        </FadeIn>

        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto">
          {serviceItems.map((service, i) => {
            const Icon = resolveIcon(service.icon);
            return (
            <StaggerItem key={i}>
              <div className="brand-panel brand-panel-premium brand-panel-interactive p-6 md:p-8 h-full flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-brand-primary text-white flex items-center justify-center mb-5 shadow-md shadow-brand-primary/20">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold font-heading text-text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-text-secondary flex-grow">
                  {service.description}
                </p>
              </div>
            </StaggerItem>
            );
          })}
        </StaggerContainer>

        <FadeIn delay={0.3}>
          <div className="text-center mt-8 md:mt-10">
            <Button href="/services" variant="outline" icon={<ArrowRightIcon className="w-5 h-5" />} iconPosition="right">
              View All Services
            </Button>
          </div>
        </FadeIn>
      </Section>

      <Section variant="cross-green" padding="lg">
        <FadeIn>
          <SectionHeader
            title="Our impact"
            subtitle="Making a difference in women's lives through Gospel-centered care"
            light
          />
        </FadeIn>

        <ImpactCounterSection stats={impactStats} className="max-w-4xl mx-auto" />
      </Section>

      <Section variant="light" padding="lg">
        <FadeIn>
          <SectionHeader
            title="What sets KingGen apart"
            subtitle="We are a trusted partner for churches, community organizations, and foundations seeking to support women's mental health and spiritual care."
          />
        </FadeIn>

        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {valueItems.map((item, i) => {
            const Icon = resolveIcon(item.icon);
            return (
            <StaggerItem key={i}>
              <div className="brand-panel brand-panel-premium brand-panel-interactive p-6 h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-xl bg-brand-primary text-white flex items-center justify-center mb-4 shadow-sm shadow-brand-primary/20">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm md:text-base text-text-primary font-semibold mb-1">{item.text}</p>
                  <p className="text-xs text-text-muted">{item.desc}</p>
                </div>
              </div>
            </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Section>

      <Section variant="white" padding="lg">
        <FadeIn>
          <SectionHeader title="Partner with us" />
        </FadeIn>

        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {audienceCards.map((card) => {
            const CardIcon = resolveIcon(card.icon);
            return (
            <StaggerItem key={card.title}>
              <div className="brand-panel brand-panel-premium brand-panel-interactive p-6 md:p-8 h-full flex flex-col">
                <div className="h-full flex flex-col">
                  <div className={`w-14 h-14 rounded-2xl ${card.iconColor} flex items-center justify-center mb-4 shadow-lg`}>
                    <CardIcon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold font-heading text-text-primary mb-2 md:mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm md:text-base text-text-secondary mb-4 md:mb-6 flex-grow">
                    {card.description}
                  </p>
                  <div className="pt-1 mt-auto">
                    <Button href={card.href} variant="primary" fullWidth>
                      {card.cta}
                    </Button>
                  </div>
                </div>
              </div>
            </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Section>

      <Section variant="cross-green" padding="lg">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center brand-panel-dark rounded-3xl p-8 md:p-10 shadow-[0_28px_64px_-28px_rgba(0,0,0,0.65)]">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-white mb-4 md:mb-6">
              Our commitment
            </h2>
            <p className="text-base sm:text-lg text-white/95 mb-3 md:mb-4 leading-relaxed">
              As a <strong>501(c)(3)</strong> nonprofit, KingGen Ministries is committed to stewardship, transparency, and accountability. Every donation directly supports our mission to provide free counseling for women in need.
            </p>
            <p className="text-base sm:text-lg text-white/95 mb-2 leading-relaxed">
              We partner with churches, community organizations, and foundations who share our vision.
            </p>
            <p className="text-white/95 mb-6 md:mb-8">
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

      <Section variant="art-cream" padding="lg">
        <FadeIn>
          <SectionHeader
            title="What partners say"
            subtitle="Hear from pastors, referrers, and community partners who trust KingGen Ministries."
          />
        </FadeIn>

        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto">
          {testimonialData.map((testimonial, index) => (
            <StaggerItem key={index}>
              <div className="brand-panel brand-panel-premium brand-panel-interactive p-6 h-full flex flex-col">
                <QuoteIcon className="w-7 h-7 text-brand-primary/22 mb-4" />
                <p className="text-sm md:text-base text-text-secondary italic mb-4 md:mb-6 leading-relaxed flex-grow">
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

        <FadeIn delay={0.3}>
          <div className="text-center mt-8 md:mt-10">
            <Button href="/testimonials" variant="primary" icon={<ArrowRightIcon className="w-5 h-5" />} iconPosition="right">
              Read All Testimonials
            </Button>
          </div>
        </FadeIn>
      </Section>

      <Section variant="white" padding="lg">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="brand-panel brand-panel-premium p-8 md:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-text-primary mb-4">
                Invite LeeAnn to speak
              </h2>
              <p className="text-base sm:text-lg text-text-secondary mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
                LeeAnn is available for speaking engagements, podcast interviews, and ministry events. Her heart is to encourage women and share the hope of the Gospel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/about#speaking" variant="primary" size="lg" icon={<ArrowRightIcon className="w-5 h-5" />} iconPosition="right">
                  Learn More
                </Button>
                <Button href="/contact" variant="outline" size="lg">
                  Request a Booking
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section variant="art-cream" padding="lg">
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
