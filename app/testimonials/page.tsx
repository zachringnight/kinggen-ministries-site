import type { Metadata } from "next";
import Image from "next/image";
import {
  Section,
  Button,
  QuoteIcon,
  HeartIcon,
  ArrowRightIcon,
  CrossIcon,
  FadeIn,
  StaggerContainer,
  StaggerItem,
  TiltCard,
  InnerPageHero,
} from "../components";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Read stories and reflections from partners and clients about the care and support offered through KingGen Ministries.",
};

export default function TestimonialsPage() {
  const testimonials = [
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

  return (
    <>
      <InnerPageHero
        title="Testimonials"
        subtitle="Stories of hope, trust, and Gospel-centered care."
        background="inner"
        ariaLabel="Testimonials"
       
      />

      <Section variant="art-cream" padding="xl">
        <StaggerContainer staggerDelay={0.15} className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <StaggerItem key={i}>
              <TiltCard className="h-full" tiltAmount={3}>
                <div className="brand-panel p-8 h-full relative flex flex-col">
                  <QuoteIcon className="absolute top-6 right-6 w-10 h-10 text-brand-accent/20" />
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-brand-light text-brand-primary text-sm font-medium rounded-full">
                      {testimonial.role}
                    </span>
                  </div>
                  <p className="text-text-secondary italic mb-6 leading-relaxed text-lg flex-grow">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-text-primary">{testimonial.name}</p>
                      <p className="text-sm text-text-muted">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      <Section variant="cross-green" padding="xl">
        <FadeIn>
          <div className="flex justify-center mb-4">
            <CrossIcon className="w-7 h-7 text-white/50" strokeWidth={1.5} />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-white mb-4 text-center">
            Hope in Every Season
          </h2>
          <p className="text-base sm:text-lg text-white/95 mb-10 text-center max-w-2xl mx-auto">
            We share encouragement through Scripture and prayer, reminding women of the hope found in Christ.
          </p>
        </FadeIn>

        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <StaggerItem>
            <TiltCard tiltAmount={3} className="h-full">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl border-2 border-white/20">
                <Image
                  src="/brand/social/social-scripture.png"
                  alt="Scripture encouragement - Luke 19:36-38"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </TiltCard>
          </StaggerItem>
          <StaggerItem>
            <TiltCard tiltAmount={3} className="h-full">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl border-2 border-white/20">
                <Image
                  src="/brand/social/social-hero.png"
                  alt="National Day of Prayer for Mental Illness - KingGen Ministries"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </TiltCard>
          </StaggerItem>
          <StaggerItem>
            <TiltCard tiltAmount={3} className="h-full">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl border-2 border-white/20">
                <Image
                  src="/brand/social/social-prayer.png"
                  alt="National Day of Prayer - If you are in crisis, call 988"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </TiltCard>
          </StaggerItem>
        </StaggerContainer>

        <FadeIn delay={0.5}>
          <p className="text-center text-white/95 text-sm mt-8">
            Follow us on social media for daily encouragement
          </p>
        </FadeIn>
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
              <Button href="/donate" variant="outline" size="lg" icon={<HeartIcon className="w-5 h-5" />}>
                Donate
              </Button>
              <Button href="/contact" variant="outline" size="lg" icon={<ArrowRightIcon className="w-5 h-5" />} iconPosition="right">
                Contact
              </Button>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
