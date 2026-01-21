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
      {/* Hero Section with Background */}
      <section className="relative py-16 sm:py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/bg-green.jpg')" }}
        />

        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4 md:mb-6">
                Information for Clients
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed">
                If someone you trust shared this page with you, it&apos;s because they care about your well-being. You are not alone.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Opening Section */}
      <Section variant="light" padding="lg">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center px-2">
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              KingGen Ministries offers Gospel-centered counseling for women in need. Counseling is offered at no cost through referrals from pastors, counselors, and trusted community partners.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* What to Expect Section */}
      <Section variant="primary" padding="xl" watermark="none">
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
      </Section>

      {/* Reasons Section */}
      <Section variant="light" padding="xl">
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

      {/* How to Begin Section */}
      <Section variant="primary" padding="xl" watermark="none">
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
      </Section>

      {/* Privacy Section */}
      <Section variant="light" padding="lg">
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

      {/* For Referrers Note */}
      <Section variant="primary" padding="lg" watermark="none">
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
      </Section>

    </>
  );
}
