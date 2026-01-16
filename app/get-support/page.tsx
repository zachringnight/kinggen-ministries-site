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
      title: "Reach out",
      description: "Send a brief message using our contact form, email, or phone.",
    },
    {
      number: "2",
      title: "We follow up",
      description: "We'll respond and help clarify next steps.",
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
          style={{ backgroundImage: "url('/bg_green_texture_1920x1080.png')" }}
        />
        <div className="absolute inset-0 bg-brand-primary/80" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4 md:mb-6">
                Get Support
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed">
                If you&apos;re here, something may feel heavy. You may feel overwhelmed, discouraged, anxious, or simply exhausted. You are not alone.
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
              KingGen Ministries offers Gospel-centered counseling for women in need. Counseling is offered at no cost, supported by donations.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* What to Expect Section */}
      <Section variant="default" padding="xl">
        <FadeIn>
          <div className="max-w-3xl mx-auto px-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-text-primary mb-4 md:mb-6 text-center">
              What to expect
            </h2>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed text-center">
              Counseling is a place to slow down, tell the truth about what you&apos;re carrying, and take steady steps forward with hope and wisdom. You will be met with compassion and respect, at a pace that feels manageable.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* Reasons Section */}
      <Section variant="soft" padding="xl">
        <FadeIn>
          <div className="max-w-3xl mx-auto px-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-text-primary mb-3 md:mb-4 text-center">
              You don&apos;t have to have the perfect words
            </h2>
            <p className="text-base sm:text-lg text-text-secondary mb-6 md:mb-8 text-center">
              Women reach out for many reasons, including:
            </p>
          </div>
        </FadeIn>

        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto">
          {reasons.map((reason, i) => (
            <StaggerItem key={i}>
              <div className="flex items-start gap-3 p-3 md:p-4 bg-white rounded-xl shadow-sm">
                <CheckCircleIcon className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-text-secondary">{reason}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.3}>
          <p className="text-center text-text-muted mt-6 md:mt-8 max-w-2xl mx-auto text-sm md:text-base px-2">
            If you&apos;re unsure whether this is a fit, you&apos;re welcome to reach out anyway.
          </p>
        </FadeIn>
      </Section>

      {/* How to Begin Section */}
      <Section variant="default" padding="xl">
        <FadeIn>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-text-primary mb-8 md:mb-12 text-center">
            How to begin
          </h2>
        </FadeIn>

        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <StaggerItem key={i}>
              <div className="text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-brand-primary text-white text-xl md:text-2xl font-bold flex items-center justify-center mx-auto mb-3 md:mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg md:text-xl font-bold font-heading text-text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-text-secondary">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mt-8 md:mt-12">
            <Button href="/contact" variant="primary" size="lg" icon={<ArrowRightIcon className="w-5 h-5" />} iconPosition="right" className="w-full sm:w-auto">
              Contact
            </Button>
            <Button href="/forms" variant="outline" size="lg" className="w-full sm:w-auto">
              Forms
            </Button>
          </div>
        </FadeIn>
      </Section>

      {/* Privacy Section */}
      <Section variant="light" padding="lg">
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row items-start gap-4 p-4 md:p-6 bg-white rounded-2xl shadow-sm">
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

      {/* Crisis Note Section */}
      <Section variant="default" padding="lg">
        <FadeIn>
          <div className="max-w-3xl mx-auto bg-red-50 border border-red-200 rounded-2xl p-4 md:p-6">
            <p className="text-red-800 text-center text-sm md:text-base">
              <strong>KingGen Ministries is not an emergency service.</strong> If you are in immediate danger, call <strong>911</strong>. If you are experiencing thoughts of self-harm, call or text <strong>988</strong> (United States).
            </p>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
