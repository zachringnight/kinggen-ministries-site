"use client";

import {
  Section,
  SectionHeader,
  Button,
  QuoteIcon,
  HeartIcon,
  ArrowRightIcon,
  FadeIn,
  StaggerContainer,
  StaggerItem,
  PageHero,
} from "../components";

export default function TestimonialsPage() {
  const testimonials = [
    {
      quote:
        "KingGen is a trustworthy referral option. The care is compassionate, discreet, and Gospel-centered.",
      name: "Mark",
      role: "Pastor",
      accent: "from-brand-primary to-brand-accent",
    },
    {
      quote:
        "Communication has been clear and respectful. I'm grateful for a place to refer women who need support and privacy.",
      name: "Jenna",
      role: "Referrer",
      accent: "from-brand-accent to-brand-warm",
    },
    {
      quote:
        "I felt safe, understood, and guided with wisdom. KingGen helped me find hope again.",
      name: "Sarah",
      role: "Client",
      accent: "from-brand-warm to-brand-primary",
    },
  ];

  return (
    <>
      <PageHero
        title="Testimonials"
        description="These words reflect the experiences of those we've served. To protect privacy, we share first names and roles only."
        background="kinggen-branded"
        showStones={true}
        stonesPosition="both"
      />

      {/* Testimonials Grid */}
      <Section variant="warm-cream" padding="xl">
        <SectionHeader
          title="Words of Encouragement"
          subtitle="From pastors, referrers, and the women we serve."
        />

        <StaggerContainer
          staggerDelay={0.15}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {testimonials.map((testimonial, i) => (
            <StaggerItem key={i}>
              <div className="bg-white rounded-2xl shadow-brand-lg h-full relative overflow-hidden group">
                {/* Colored top accent bar */}
                <div
                  className={`h-1.5 bg-gradient-to-r ${testimonial.accent}`}
                />

                <div className="p-8">
                  <QuoteIcon className="w-8 h-8 text-brand-accent/25 mb-4" />

                  <p className="text-text-secondary italic leading-relaxed text-lg mb-8">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center text-white font-bold text-sm">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-text-primary">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-text-muted">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Scripture Divider */}
      <Section variant="sage-mist" padding="lg">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center">
            <QuoteIcon className="w-6 h-6 text-brand-primary/30 mx-auto mb-4" />
            <p className="text-xl md:text-2xl font-heading italic text-text-primary leading-relaxed">
              &ldquo;The Lord is close to the brokenhearted and saves those who
              are crushed in spirit.&rdquo;
            </p>
            <p className="text-sm text-text-muted mt-3 tracking-wide uppercase">
              Psalm 34:18
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* CTA Section */}
      <Section variant="art-cream" padding="xl">
        <FadeIn>
          <div className="bg-gradient-to-br from-brand-light to-brand-soft rounded-3xl p-8 md:p-12 lg:p-16 text-center max-w-4xl mx-auto shadow-brand">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-primary mb-6">
              Ready to take the next step?
            </h2>
            <p className="text-lg text-text-secondary mb-8 leading-relaxed max-w-2xl mx-auto">
              Whether you need support, want to make a referral, or feel led to
              give, we&apos;re here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/get-support"
                variant="primary"
                size="lg"
                className="!rounded-full"
              >
                Get Support
              </Button>
              <Button
                href="/donate"
                variant="outline"
                size="lg"
                icon={<HeartIcon className="w-5 h-5" />}
                className="!rounded-full"
              >
                Donate
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                icon={<ArrowRightIcon className="w-5 h-5" />}
                iconPosition="right"
                className="!rounded-full"
              >
                Contact
              </Button>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
