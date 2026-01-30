"use client";

import {
  Section,
  Button,
  QuoteIcon,
  HeartIcon,
  ArrowRightIcon,
  FadeIn,
  StaggerContainer,
  StaggerItem,
  TiltCard,
  PageHero,
} from "../components";

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
      {/* Hero Section with KingGen branded background */}
      <PageHero
        title="Testimonials"
        description="These words reflect the experiences of those we've served. To protect privacy, we share first names and roles only."
        background="kinggen-branded"
        showArt={true}
        artPosition="both"
      />

      {/* Testimonials Section with art background */}
      <Section variant="art-cream" padding="xl" watermark="art-left" artImage="cross-2">
        <StaggerContainer staggerDelay={0.15} className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <StaggerItem key={i}>
              <TiltCard className="h-full" tiltAmount={5}>
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-brand-light h-full relative">
                  <QuoteIcon className="absolute top-6 right-6 w-10 h-10 text-brand-accent/20" />
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-brand-light text-brand-primary text-sm font-medium rounded-full">
                      {testimonial.role}
                    </span>
                  </div>
                  <p className="text-text-secondary italic mb-6 leading-relaxed text-lg">
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

      {/* CTA Section with art */}
      <Section variant="art-cream" padding="xl" watermark="art-right" artImage="cross-1">
        <FadeIn>
          <div className="bg-gradient-to-br from-brand-light to-brand-soft rounded-3xl p-8 md:p-12 lg:p-16 text-center max-w-4xl mx-auto">
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
