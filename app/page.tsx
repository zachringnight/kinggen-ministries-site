import Image from "next/image";
import { siteConfig } from "./config/site";
import {
  Section,
  SectionHeader,
  Button,
  HeartIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ShieldIcon,
  CrossIcon,
  InstagramIcon,
  ExternalLinkIcon,
  OptimizedBackground,
  FadeIn,
  StaggerContainer,
  StaggerItem,
  ImpactCounterSection,
  AnimatedDivider,
  BrandLockup,
} from "./components";
import { homeContent } from "./content";

const referralsOpen = siteConfig.serviceAvailability.acceptingExternalReferrals;

const services = [
  { icon: HeartIcon, ...homeContent.services.items[0] },
  { icon: ShieldIcon, ...homeContent.services.items[1] },
  { icon: CrossIcon, ...homeContent.services.items[2] },
];

export default function Home() {
  return (
    <>
      <section
        className="relative w-full min-h-[38rem] md:min-h-[42rem] flex items-center animate-fade-in-up isolate overflow-hidden"
        aria-label="KingGen Ministries - Gospel-centered counseling for women"
      >
        <OptimizedBackground
          src="/brand/curated/bg/green-watermark-tall.png"
          className="absolute inset-0 bg-cover bg-center pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/54 via-brand-primary/66 to-brand-primary/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(123,163,144,0.12)_0%,transparent_62%)] pointer-events-none" />

        <h1 className="sr-only">KingGen Ministries</h1>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 md:py-16">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <div className="mb-3 flex justify-center">
              <BrandLockup theme="dark" size="lg" className="mx-auto max-w-[190px] sm:max-w-[230px] md:max-w-[330px]" />
            </div>

            <p className="text-xs sm:text-sm uppercase tracking-[0.12em] text-brand-gold-light font-semibold mb-3">
              {homeContent.hero.eyebrow}
            </p>
            <p className="text-[clamp(2rem,6vw,4rem)] font-bold font-heading text-white leading-[1.08] text-balance max-w-4xl">
              {referralsOpen
                ? homeContent.hero.headline
                : "Free Gospel-centered counseling for women in the Venture Church community."}
            </p>
            <p className="text-base md:text-lg text-white/95 mt-4 max-w-3xl leading-relaxed text-balance">
              {referralsOpen ? homeContent.hero.subheadline : siteConfig.serviceAvailability.notice}
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Button
                href={referralsOpen ? "/for-referrers" : "/get-support"}
                variant="gold"
                size="lg"
                icon={<ArrowRightIcon className="w-5 h-5" />}
                iconPosition="right"
              >
                {referralsOpen ? homeContent.hero.ctaPrimary : "Client Information"}
              </Button>
              <Button href="/donate" variant="outline-white" size="lg" icon={<HeartIcon className="w-5 h-5" />}>
                {homeContent.hero.ctaSecondary}
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap gap-2.5 justify-center">
              {homeContent.hero.trustBadges.slice(0, 3).map((item, index) => (
                <div
                  key={item}
                  className={`${index === 2 ? "hidden sm:flex" : "flex"} items-center gap-2 text-white/95 text-sm bg-white/10 border border-white/20 rounded-full px-3 py-1.5`}
                >
                  <CheckCircleIcon className="w-4 h-4 text-brand-gold-light flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
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
              subtitle={
                referralsOpen
                  ? homeContent.about.subtitle
                  : "KingGen Ministries provides no-cost, Gospel-centered counseling for women in the Venture Church community through a licensed clinical pastoral counselor."
              }
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
            title={homeContent.services.title}
            subtitle={
              referralsOpen
                ? homeContent.services.subtitle
                : "Gospel-centered clinical pastoral counseling for women in the Venture Church community."
            }
          />
        </FadeIn>

        <StaggerContainer
          staggerDelay={0.15}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto"
        >
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <div className="brand-panel brand-panel-premium brand-panel-interactive p-6 md:p-8 h-full flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-brand-primary text-white flex items-center justify-center mb-5 shadow-md shadow-brand-primary/20">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold font-heading text-text-primary mb-3">{service.title}</h3>
                <p className="text-sm md:text-base text-text-secondary flex-grow">{service.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.3}>
          <div className="text-center mt-8 md:mt-10">
            <Button
              href="/services"
              variant="outline"
              icon={<ArrowRightIcon className="w-5 h-5" />}
              iconPosition="right"
            >
              View All Services
            </Button>
          </div>
        </FadeIn>
      </Section>

      <Section variant="cross-green" padding="lg">
        <FadeIn>
          <SectionHeader
            title={homeContent.impact.title}
            subtitle={
              referralsOpen
                ? homeContent.impact.subtitle
                : "Sustaining compassionate, Gospel-centered care in the community KingGen currently serves."
            }
            light
          />
        </FadeIn>

        <ImpactCounterSection stats={homeContent.impactStats.slice(0, 3)} className="max-w-4xl mx-auto" />
      </Section>

      <Section variant="art-cream" padding="lg">
        <FadeIn>
          <SectionHeader
            title="Encouragement on Instagram"
            subtitle="Follow @kinggenministries for Scripture, prayer, mental health encouragement, and ministry updates."
          />
          <p className="sm:hidden -mt-5 mb-4 text-center text-sm text-text-muted">Swipe to explore highlights.</p>
        </FadeIn>

        <StaggerContainer
          staggerDelay={0.1}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-4 pb-4 -mx-4 sm:mx-auto sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 sm:pb-0 md:gap-6 max-w-5xl"
        >
          {siteConfig.social.instagramHighlights.map((highlight) => (
            <StaggerItem key={highlight.src} className="min-w-[82vw] snap-center sm:min-w-0">
              <a
                href={highlight.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group brand-panel brand-panel-premium brand-panel-interactive block overflow-hidden h-full"
                aria-label={`${highlight.title}: open @kinggenministries on Instagram`}
              >
                <div className="relative aspect-square overflow-hidden bg-brand-light">
                  <Image
                    src={highlight.src}
                    alt={highlight.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 640px) 82vw, 33vw"
                  />
                </div>
                <div className="flex items-center justify-between gap-3 p-4">
                  <span className="font-semibold text-text-primary">{highlight.title}</span>
                  <ExternalLinkIcon className="w-4 h-4 text-brand-primary flex-shrink-0" />
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.25}>
          <div className="text-center mt-8">
            <Button
              href={siteConfig.social.instagram}
              variant="primary"
              external
              icon={<InstagramIcon className="w-5 h-5" />}
            >
              Follow @kinggenministries
            </Button>
          </div>
        </FadeIn>
      </Section>

      <Section variant="white" padding="lg">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="brand-panel brand-panel-premium p-8 md:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-text-primary mb-4">
                {homeContent.speaker.title}
              </h2>
              <p className="text-base sm:text-lg text-text-secondary mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
                {homeContent.speaker.body}
              </p>
              <Button
                href="/about#speaking"
                variant="primary"
                size="lg"
                icon={<ArrowRightIcon className="w-5 h-5" />}
                iconPosition="right"
              >
                Learn More
              </Button>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section variant="cross-green" padding="lg">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center brand-panel-dark rounded-3xl p-8 md:p-10 shadow-[0_28px_64px_-28px_rgba(0,0,0,0.65)]">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-white mb-4">
              {referralsOpen ? homeContent.commitment.title : "Help sustain care in the Venture Church community"}
            </h2>
            <p className="text-base sm:text-lg text-white/95 mb-4 leading-relaxed">
              {referralsOpen
                ? homeContent.commitment.body1
                : "Your tax-deductible gift helps KingGen Ministries provide no-cost, Gospel-centered counseling to women in the Venture Church community."}
            </p>
            <p className="text-white/95 mb-6">
              <strong>EIN:</strong> {siteConfig.ein}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/donate" variant="white" size="lg" icon={<HeartIcon className="w-5 h-5" />}>
                Donate Now
              </Button>
              <Button href="/for-grant-writers" variant="outline-white" size="lg">
                Grant Information
              </Button>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
