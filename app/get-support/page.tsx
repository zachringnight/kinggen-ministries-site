"use client";

import {
  Section,
  Button,
  CheckCircleIcon,
  ShieldIcon,
  ArrowRightIcon,
  FadeIn,
  StaggerContainer,
  StaggerItem,
  PageHero,
} from "../components";

export default function GetSupport() {
  const reasons = [
    "anxiety, stress, or burnout",
    "grief and loss",
    "relationship pain or family conflict",
    "trauma and life transitions",
    "spiritual discouragement",
    "boundaries, identity, and rebuilding confidence",
  ];

  const steps = [
    {
      number: "1",
      title: "Your referrer reaches out",
      description: "The pastor, counselor, or trusted person who shared this page contacts us on your behalf, or encourages you to reach out directly.",
    },
    {
      number: "2",
      title: "We follow up",
      description: "We'll respond and help clarify next steps together.",
    },
    {
      number: "3",
      title: "Forms and scheduling",
      description: "If it's a fit, we'll share any needed forms and coordinate an appointment.",
    },
  ];

  return (
    <>
      {/* Hero Section with KingGen branded background */}
      <PageHero
        title="Information for Clients"
        description="If someone you trust shared this page with you, it's because they care about your well-being. You are not alone."
        background="kinggen-branded"
        showStones={true}
        stonesPosition="both"
      />

      {/* Opening Section with art */}
      <Section variant="art-cream" padding="lg" watermark="stones-right">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center px-2">
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              KingGen Ministries offers Gospel-centered counseling for women in need. Counseling is offered at no cost through referrals from pastors, counselors, and trusted community partners.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* What to Expect Section with KingGen background */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* KingGen branded background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/KingGen Background (1).png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/90 via-brand-secondary/85 to-brand-primary/92" />

        {/* Cross art accents */}
        <div
          className="absolute left-0 bottom-0 w-48 h-48 md:w-64 md:h-64 bg-no-repeat pointer-events-none opacity-20"
          style={{
            backgroundImage: "url('/Untitled-4.png')",
            backgroundPosition: "left bottom",
            backgroundSize: "contain",
          }}
        />
        <div
          className="absolute right-0 top-0 w-40 h-40 md:w-56 md:h-56 bg-no-repeat pointer-events-none opacity-15"
          style={{
            backgroundImage: "url('/Untitled-7.png')",
            backgroundPosition: "right top",
            backgroundSize: "contain",
          }}
        />

        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <FadeIn>
          <div className="max-w-3xl mx-auto px-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-white mb-4 md:mb-6 text-center">
              What to expect
            </h2>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed text-center">
              Counseling is a place to slow down, tell the truth about what you&apos;re carrying, and take steady steps forward with hope and wisdom. You will be met with compassion and respect, at a pace that feels manageable.
            </p>
          </div>
        </FadeIn>
        </div>
      </section>

      {/* Reasons Section with art */}
      <Section variant="art-cream" padding="xl" watermark="stones-left">
        <FadeIn>
          <div className="max-w-3xl mx-auto px-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-text-primary mb-3 md:mb-4 text-center">
              You don&apos;t have to have the perfect words
            </h2>
            <p className="text-base sm:text-lg text-text-secondary mb-6 md:mb-8 text-center">
              Women are referred for many reasons, including:
            </p>
          </div>
        </FadeIn>

        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto">
          {reasons.map((reason, i) => (
            <StaggerItem key={i}>
              <div className="flex items-start gap-3 p-3 md:p-4 bg-brand-cream rounded-xl border border-brand-light">
                <CheckCircleIcon className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-text-secondary">{reason}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* How to Begin Section with KingGen background */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* KingGen background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/bg_green_texture_1920x1080.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/88 to-brand-secondary/90" />

        {/* Cross art accents */}
        <div
          className="absolute left-0 top-0 w-44 h-44 md:w-56 md:h-56 bg-no-repeat pointer-events-none opacity-15"
          style={{
            backgroundImage: "url('/Untitled-6.png')",
            backgroundPosition: "left top",
            backgroundSize: "contain",
          }}
        />
        <div
          className="absolute right-0 bottom-0 w-48 h-48 md:w-64 md:h-64 bg-no-repeat pointer-events-none opacity-20"
          style={{
            backgroundImage: "url('/Untitled-1.png')",
            backgroundPosition: "right bottom",
            backgroundSize: "contain",
          }}
        />

        <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <FadeIn>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-white mb-8 md:mb-12 text-center">
            How it works
          </h2>
        </FadeIn>

        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <StaggerItem key={i}>
              <div className="text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/20 text-white text-xl md:text-2xl font-bold flex items-center justify-center mx-auto mb-3 md:mb-4 border border-white/30">
                  {step.number}
                </div>
                <h3 className="text-lg md:text-xl font-bold font-heading text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-white/80">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        </div>
      </section>

      {/* Privacy Section with art */}
      <Section variant="art-cream" padding="lg" watermark="stones-right">
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row items-start gap-4 p-4 md:p-6 bg-brand-cream rounded-2xl border border-brand-light">
              <ShieldIcon className="w-6 h-6 md:w-8 md:h-8 text-brand-primary flex-shrink-0" />
              <div>
                <h3 className="text-lg md:text-xl font-bold font-heading text-text-primary mb-2">
                  Privacy and confidentiality
                </h3>
                <p className="text-sm md:text-base text-text-secondary mb-3 md:mb-4">
                  We treat your story with care. We do not share personal information without your permission, except where disclosure is required by law or where there is a serious safety concern.
                </p>
                <p className="text-text-muted text-xs md:text-sm">
                  Please keep your first message brief. We can gather details after we connect.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* For Referrers Note with KingGen background */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* KingGen branded background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/KingGen Background (1).png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/90 via-brand-secondary/85 to-brand-primary/92" />

        {/* Art accent */}
        <div
          className="absolute right-0 bottom-0 w-56 h-56 md:w-72 md:h-72 bg-no-repeat pointer-events-none opacity-15"
          style={{
            backgroundImage: "url('/Untitled-3.png')",
            backgroundPosition: "right bottom",
            backgroundSize: "contain",
          }}
        />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-lg md:text-xl font-bold font-heading text-white mb-3">
                Are you a referrer?
              </h3>
              <p className="text-white/90 mb-6">
                If you&apos;re a pastor, counselor, or community professional looking to refer someone, visit our referrer page for more information.
              </p>
              <Button href="/for-referrers" variant="white" icon={<ArrowRightIcon className="w-5 h-5" />} iconPosition="right">
                For Referrers
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

    </>
  );
}
