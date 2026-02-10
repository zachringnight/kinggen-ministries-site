"use client";

import {
  Section,
  SectionHeader,
  Button,
  CheckCircleIcon,
  ShieldIcon,
  ArrowRightIcon,
  HeartIcon,
  QuoteIcon,
  FadeIn,
  StaggerContainer,
  StaggerItem,
  PageHero,
  OptimizedBackground,
} from "../components";

export default function GetSupport() {
  const reasons = [
    "Anxiety, stress, or burnout",
    "Grief and loss",
    "Relationship pain or family conflict",
    "Trauma and life transitions",
    "Spiritual discouragement",
    "Boundaries, identity, and rebuilding confidence",
  ];

  const steps = [
    {
      number: "1",
      title: "Your referrer reaches out",
      description:
        "The pastor, counselor, or trusted person who shared this page contacts us on your behalf, or encourages you to reach out directly.",
      icon: "envelope",
    },
    {
      number: "2",
      title: "We follow up",
      description:
        "We'll respond and help clarify next steps together.",
      icon: "phone",
    },
    {
      number: "3",
      title: "Forms and scheduling",
      description:
        "If it's a fit, we'll share any needed forms and coordinate an appointment.",
      icon: "calendar",
    },
  ];

  return (
    <>
      <PageHero
        title="Information for Clients"
        description="If someone you trust shared this page with you, it's because they care about your well-being. You are not alone."
        background="kinggen-branded"
        showStones={true}
        stonesPosition="both"
      />

      {/* Opening Section */}
      <Section variant="warm-cream" padding="lg">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center px-2">
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              KingGen Ministries offers Gospel-centered counseling for women in
              need. Counseling is offered at no cost through referrals from
              pastors, counselors, and trusted community partners.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* What to Expect Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <OptimizedBackground
          src="/KingGen Background (1).png"
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/90 via-brand-secondary/85 to-brand-primary/92" />

        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          <FadeIn>
            <div className="max-w-3xl mx-auto px-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-white mb-4 md:mb-6 text-center">
                What to expect
              </h2>
              <p className="text-base sm:text-lg text-white/90 leading-relaxed text-center">
                Counseling is a place to slow down, tell the truth about what
                you&apos;re carrying, and take steady steps forward with hope
                and wisdom. You will be met with compassion and respect, at a
                pace that feels manageable.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Reasons Section */}
      <Section variant="sage-mist" padding="xl">
        <SectionHeader
          title="You don't have to have the perfect words"
          subtitle="Women are referred for many reasons, including:"
        />

        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto"
        >
          {reasons.map((reason, i) => (
            <StaggerItem key={i}>
              <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-brand-sm">
                <CheckCircleIcon className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-text-secondary">
                  {reason}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Scripture Divider */}
      <Section variant="warm-cream" padding="md">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center">
            <QuoteIcon className="w-6 h-6 text-brand-primary/30 mx-auto mb-4" />
            <p className="text-lg md:text-xl font-heading italic text-text-primary leading-relaxed">
              &ldquo;Come to me, all you who are weary and burdened, and I will
              give you rest.&rdquo;
            </p>
            <p className="text-sm text-text-muted mt-3 tracking-wide uppercase">
              Matthew 11:28
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* How It Works Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <OptimizedBackground
          src="/bg_green_texture_1920x1080.png"
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/88 to-brand-secondary/90" />

        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-white mb-10 md:mb-14 text-center">
              How it works
            </h2>
          </FadeIn>

          <StaggerContainer
            staggerDelay={0.15}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto"
          >
            {steps.map((step, i) => (
              <StaggerItem key={i}>
                <div className="text-center relative">
                  {/* Connector line between steps on desktop */}
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] right-[calc(-50%+2rem)] h-px bg-white/20" />
                  )}
                  <div className="w-16 h-16 rounded-full bg-white/15 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4 border-2 border-white/25 backdrop-blur-sm">
                    {step.number}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold font-heading text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base text-white/80 max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Privacy Section */}
      <Section variant="art-cream" padding="lg">
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-brand border border-brand-light">
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center flex-shrink-0">
                  <ShieldIcon className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold font-heading text-text-primary mb-2">
                    Privacy and confidentiality
                  </h3>
                  <p className="text-sm md:text-base text-text-secondary mb-3 md:mb-4">
                    We treat your story with care. We do not share personal
                    information without your permission, except where disclosure
                    is required by law or where there is a serious safety
                    concern.
                  </p>
                  <p className="text-text-muted text-xs md:text-sm">
                    Please keep your first message brief. We can gather details
                    after we connect.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* For Referrers Note */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <OptimizedBackground
          src="/KingGen Background (1).png"
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/90 via-brand-secondary/85 to-brand-primary/92" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <HeartIcon className="w-8 h-8 text-white/40 mx-auto mb-4" />
              <h3 className="text-lg md:text-xl font-bold font-heading text-white mb-3">
                Are you a referrer?
              </h3>
              <p className="text-white/90 mb-6">
                If you&apos;re a pastor, counselor, or community professional
                looking to refer someone, visit our referrer page for more
                information.
              </p>
              <Button
                href="/for-referrers"
                variant="white"
                icon={<ArrowRightIcon className="w-5 h-5" />}
                iconPosition="right"
                className="!rounded-full"
              >
                For Referrers
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
