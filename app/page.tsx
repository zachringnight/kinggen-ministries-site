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
import { homeContent } from "./content";

const services = [
  { icon: HeartIcon, ...homeContent.services.items[0] },
  { icon: ShieldIcon, ...homeContent.services.items[1] },
  { icon: CrossIcon, ...homeContent.services.items[2] },
];

const audienceCards = [
  { icon: UsersIcon, iconColor: "bg-brand-primary", ...homeContent.partners.cards[0] },
  { icon: HeartIcon, iconColor: "bg-brand-accent", ...homeContent.partners.cards[1] },
  { icon: GiftIcon, iconColor: "bg-brand-warm", ...homeContent.partners.cards[2] },
];

const valuesItems = [
  { icon: CrossIcon, ...homeContent.values.items[0] },
  { icon: ShieldIcon, ...homeContent.values.items[1] },
  { icon: UsersIcon, ...homeContent.values.items[2] },
  { icon: CheckCircleIcon, ...homeContent.values.items[3] },
];

export default function Home() {
  return (
    <>
      <section
        className="relative w-full min-h-[56vh] md:min-h-[66vh] flex items-center animate-fade-in-up isolate overflow-hidden"
        aria-label="KingGen Ministries - Christian Counseling for Women"
      >
        <OptimizedBackground
          src="/brand/curated/bg/green-watermark-tall.png"
          className="absolute inset-0 bg-cover bg-center pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/54 via-brand-primary/66 to-brand-primary/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(123,163,144,0.12)_0%,transparent_62%)] pointer-events-none" />

        <h1 className="sr-only">KingGen Ministries</h1>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-24 pb-14 md:pt-24 md:pb-20">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <div>
              <div className="mb-5 flex justify-center">
                <BrandLockup theme="dark" size="lg" className="mx-auto" />
              </div>

              <span className="inline-block px-3.5 py-1.5 bg-white/9 backdrop-blur-sm border border-white/18 text-white/95 text-xs sm:text-sm font-medium rounded-full mb-4 tracking-wide">
                {homeContent.hero.badge}
              </span>
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.12em] text-brand-gold-light/95 font-semibold mb-3">
                {homeContent.hero.eyebrow}
              </p>
              <p className="text-[clamp(2rem,6vw,4rem)] font-bold font-heading text-white leading-[1.08] text-balance">
                {homeContent.hero.headline}
              </p>
              <p className="text-base md:text-lg text-white/95 mt-4 max-w-2xl leading-relaxed">
                {homeContent.hero.subheadline}
              </p>
              <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
                <Button href="/contact" variant="gold" size="lg" icon={<ArrowRightIcon className="w-5 h-5" />} iconPosition="right">
                  {homeContent.hero.ctaPrimary}
                </Button>
                <Button href="/donate" variant="outline-white" size="lg" icon={<HeartIcon className="w-5 h-5" />}>
                  {homeContent.hero.ctaSecondary}
                </Button>
              </div>
              <div className="mt-6 flex flex-wrap gap-3 justify-center">
                {homeContent.hero.trustBadges.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-white/95 text-[13px] sm:text-sm bg-white/10 border border-white/16 rounded-full px-3 py-1.5">
                    <CheckCircleIcon className="w-4 h-4 text-brand-gold-light flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-2.5 max-w-3xl mx-auto">
                {homeContent.hero.heroMetrics.map((metric) => (
                  <div key={metric.label} className="brand-hero-stat px-4 py-2.5 text-center">
                    <p className="text-white font-semibold text-base">{metric.value}</p>
                    <p className="text-[11px] text-white/95 uppercase tracking-[0.08em]">{metric.label}</p>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-sm text-white/90 max-w-2xl mx-auto">
                {homeContent.hero.trustLine}
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
              title={homeContent.about.title}
              subtitle={homeContent.about.subtitle}
              className="mb-8"
            />
            <Button href="/about" variant="primary" icon={<ArrowRightIcon className="w-5 h-5" />} iconPosition="right">
              Learn More
            </Button>
          </div>
        </FadeIn>
      </Section>

      <Section variant="default" padding="lg">
        <FadeIn>
          <SectionHeader
            title={homeContent.services.title}
            subtitle={homeContent.services.subtitle}
          />
        </FadeIn>

        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <StaggerItem key={i}>
              <div className="brand-panel brand-panel-premium brand-panel-interactive p-6 md:p-8 h-full flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-brand-primary text-white flex items-center justify-center mb-5 shadow-md shadow-brand-primary/20">
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

      <Section variant="cross-green" padding="lg">
        <FadeIn>
          <SectionHeader
            title={homeContent.impact.title}
            subtitle={homeContent.impact.subtitle}
            light
          />
        </FadeIn>

        <ImpactCounterSection stats={homeContent.impactStats} className="max-w-4xl mx-auto" />
      </Section>

      <Section variant="light" padding="lg">
        <FadeIn>
          <SectionHeader
            title={homeContent.values.title}
            subtitle={homeContent.values.subtitle}
          />
        </FadeIn>

        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {valuesItems.map((item, i) => (
            <StaggerItem key={i}>
              <div className="brand-panel brand-panel-premium brand-panel-interactive p-6 h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-xl bg-brand-primary text-white flex items-center justify-center mb-4 shadow-sm shadow-brand-primary/20">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm md:text-base text-text-primary font-semibold mb-1">{item.text}</p>
                  <p className="text-xs text-text-muted">{item.desc}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      <Section variant="soft" padding="lg">
        <FadeIn>
          <SectionHeader title={homeContent.partners.title} />
        </FadeIn>

        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {audienceCards.map((card) => (
            <StaggerItem key={card.title}>
              <div className="brand-panel brand-panel-premium brand-panel-interactive p-6 md:p-8 h-full flex flex-col">
                <div className="h-full flex flex-col">
                  <div className={`w-14 h-14 rounded-2xl ${card.iconColor} flex items-center justify-center mb-4 shadow-lg`}>
                    <card.icon className="w-7 h-7 text-white" />
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
          ))}
        </StaggerContainer>
      </Section>

      <Section variant="cross-green" padding="lg">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center brand-panel-dark rounded-3xl p-8 md:p-10 shadow-[0_28px_64px_-28px_rgba(0,0,0,0.65)]">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-white mb-4 md:mb-6">
              {homeContent.commitment.title}
            </h2>
            <p className="text-base sm:text-lg text-white/95 mb-3 md:mb-4 leading-relaxed">
              {homeContent.commitment.body1}
            </p>
            <p className="text-base sm:text-lg text-white/95 mb-2 leading-relaxed">
              {homeContent.commitment.body2}
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
            title={homeContent.testimonials.title}
            subtitle={homeContent.testimonials.subtitle}
          />
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          <div className="hidden md:block">
            <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
              {homeContent.testimonials.items.map((testimonial, index) => (
                <StaggerItem key={index}>
                  <div className="brand-panel brand-panel-premium brand-panel-interactive p-6 md:p-7 h-full flex flex-col">
                    <QuoteIcon className="w-7 h-7 text-brand-primary/22 mb-4" />
                    <p className="text-sm md:text-base text-text-secondary italic mb-4 md:mb-6 leading-relaxed flex-grow">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {testimonial.author.charAt(0)}
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
            <div className="brand-panel brand-panel-premium rounded-2xl overflow-hidden border border-brand-light">
              {homeContent.testimonials.items.map((testimonial, index) => (
                <FadeIn key={index} delay={0.1 * index}>
                  <div className="p-6 border-b border-brand-light last:border-b-0">
                    <QuoteIcon className="w-6 h-6 text-brand-primary/20 mb-3" />
                    <p className="text-sm text-text-secondary italic mb-4 leading-relaxed">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center text-white font-bold text-sm">
                        {testimonial.author.charAt(0)}
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

      <Section variant="soft" padding="lg">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="brand-panel brand-panel-premium p-8 md:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-text-primary mb-4">
                {homeContent.speaker.title}
              </h2>
              <p className="text-base sm:text-lg text-text-secondary mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
                {homeContent.speaker.body}
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
              {homeContent.cta.title}
            </h2>
            <p className="text-base sm:text-lg text-text-secondary mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto">
              {homeContent.cta.body}
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
