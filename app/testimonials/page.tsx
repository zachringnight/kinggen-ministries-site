import type { Metadata } from "next";
import Link from "next/link";
import {
  Section,
  Button,
  QuoteIcon,
  ArrowRightIcon,
  HeartIcon,
  InstagramIcon,
  CheckCircleIcon,
  FadeIn,
  StaggerContainer,
  StaggerItem,
  InnerPageHero,
} from "../components";
import { siteConfig } from "../config/site";
import { getPageContent } from "../lib/content";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Read stories and reflections from partners and clients about the care and support offered through KingGen Ministries.",
};

const DEFAULT_HERO = {
  title: "Testimonials",
  subtitle: "Stories of hope, trust, and Gospel-centered care.",
};

const DEFAULT_TESTIMONIALS = [
  {
    quote: "KingGen is a trustworthy referral option. The care is compassionate, discreet, and Gospel-centered.",
    name: "Mark",
    role: "Pastor",
  },
  {
    quote: "Communication has been clear and respectful. I'm grateful for a place to refer women who need support and privacy.",
    name: "Jenna",
    role: "Referrer",
  },
  {
    quote: "I felt safe, understood, and guided with wisdom. KingGen helped me find hope again.",
    name: "Sarah",
    role: "Client",
  },
];

const INSTAGRAM_EMBED_URL = "https://www.instagram.com/kinggenministries/embed/";

export const revalidate = 60;

export default async function TestimonialsPage() {
  const content = await getPageContent("testimonials");
  const hero = { ...DEFAULT_HERO, ...(content?.hero as Record<string, unknown>) };
  const testimonials = (content?.testimonials as typeof DEFAULT_TESTIMONIALS) ?? DEFAULT_TESTIMONIALS;

  return (
    <>
      <InnerPageHero
        title={hero.title as string}
        subtitle={hero.subtitle as string}
        background="inner"
        ariaLabel="Testimonials"
      />

      <Section variant="art-cream" padding="xl">
        <StaggerContainer staggerDelay={0.15} className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <StaggerItem key={i}>
              <div className="brand-panel brand-panel-premium brand-panel-interactive p-8 h-full relative flex flex-col">
                <QuoteIcon className="absolute top-6 right-6 w-10 h-10 text-brand-accent/20" />
                <div className="mb-4">
                  <span className="inline-block rounded-full bg-brand-light px-3 py-1 text-sm font-medium text-brand-primary">
                    {testimonial.role}
                  </span>
                </div>
                <p className="text-lg italic leading-relaxed text-text-secondary mb-6 flex-grow">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-primary to-brand-accent font-bold text-white">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-text-primary">{testimonial.name}</p>
                    <p className="text-sm text-text-muted">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      <Section variant="cross-green" padding="xl">
        <div className="grid max-w-6xl mx-auto gap-8 lg:grid-cols-[0.88fr,1.12fr] items-start">
          <FadeIn>
            <div className="brand-panel-dark rounded-[2rem] p-8 md:p-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/10 px-3.5 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/95 backdrop-blur-sm">
                <InstagramIcon className="h-4 w-4" />
                Instagram
              </div>

              <h2 className="mt-5 text-3xl md:text-4xl font-bold font-heading text-white">
                Encouragement beyond the session
              </h2>
              <p className="mt-4 text-base md:text-lg leading-relaxed text-white/95">
                We share Scripture, hope-filled reminders, and ministry updates throughout the week. The feed below is pulled directly from the public KingGen Ministries Instagram profile.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Scripture-centered encouragement for women and families",
                  "Ministry updates and prayer-focused reminders",
                  "A direct path to follow or share KingGen with others",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-white/95">
                    <CheckCircleIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-white" />
                    <p className="text-sm md:text-base">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button
                  href={siteConfig.social.instagram}
                  external
                  variant="white"
                  size="lg"
                  icon={<ArrowRightIcon className="h-5 w-5" />}
                  iconPosition="right"
                >
                  Follow on Instagram
                </Button>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="brand-panel brand-panel-premium rounded-[2rem] p-4 md:p-5">
              <div className="flex flex-col gap-3 border-b border-brand-light/80 px-2 pb-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-primary text-white shadow-md shadow-brand-primary/18">
                    <InstagramIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text-primary">@kinggenministries</p>
                    <p className="text-xs text-text-muted">Latest encouragement and ministry updates</p>
                  </div>
                </div>

                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-brand-primary transition-colors hover:text-brand-primary-dark"
                >
                  Open profile
                </a>
              </div>

              <div className="mt-4 overflow-hidden rounded-[1.5rem] border border-brand-light bg-white shadow-[0_18px_40px_-28px_rgba(38,61,39,0.35)]">
                <iframe
                  title="KingGen Ministries Instagram profile feed"
                  src={INSTAGRAM_EMBED_URL}
                  className="block h-[740px] w-full sm:h-[800px] lg:h-[860px]"
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section variant="art-cream" padding="xl">
        <FadeIn>
          <div className="brand-panel rounded-3xl p-8 md:p-12 lg:p-16 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-primary mb-6">
              Ready to take the next step?
            </h2>
            <p className="text-lg text-text-secondary mb-8 leading-relaxed max-w-2xl mx-auto">
              Whether you need support, want to make a referral, or feel led to give, we&apos;re here.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/get-support" variant="primary" size="lg">
                Get Support
              </Button>
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRightIcon className="w-5 h-5" />}
                iconPosition="right"
              >
                Contact
              </Button>
            </div>

            <p className="mt-5 text-sm text-text-muted">
              <Link href="/donate" className="font-semibold text-brand-primary hover:text-brand-primary-dark">
                Support the mission
              </Link>
              {" "}through donor partnership.
            </p>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
