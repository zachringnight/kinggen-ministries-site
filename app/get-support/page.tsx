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
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-primary to-brand-secondary py-20 md:py-28">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
                Get Support
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                If you&apos;re here, something may feel heavy. You may feel overwhelmed, discouraged, anxious, or simply exhausted. You are not alone.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Opening Section */}
      <Section variant="light" padding="xl">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-text-secondary leading-relaxed">
              KingGen Ministries offers Gospel-centered counseling for women in need. Counseling is offered at no cost, supported by donations.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* What to Expect Section */}
      <Section variant="default" padding="xl">
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-primary mb-6 text-center">
              What to expect
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed text-center">
              Counseling is a place to slow down, tell the truth about what you&apos;re carrying, and take steady steps forward with hope and wisdom. You will be met with compassion and respect, at a pace that feels manageable.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* Reasons Section */}
      <Section variant="soft" padding="xl">
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-primary mb-4 text-center">
              You don&apos;t have to have the perfect words
            </h2>
            <p className="text-lg text-text-secondary mb-8 text-center">
              Women reach out for many reasons, including:
            </p>
          </div>
        </FadeIn>

        <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {reasons.map((reason, i) => (
            <StaggerItem key={i}>
              <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm">
                <CheckCircleIcon className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                <p className="text-text-secondary">{reason}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.3}>
          <p className="text-center text-text-muted mt-8 max-w-2xl mx-auto">
            If you&apos;re unsure whether this is a fit, you&apos;re welcome to reach out anyway.
          </p>
        </FadeIn>
      </Section>

      {/* How to Begin Section */}
      <Section variant="default" padding="xl">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-primary mb-12 text-center">
            How to begin
          </h2>
        </FadeIn>

        <StaggerContainer staggerDelay={0.15} className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <StaggerItem key={i}>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-brand-primary text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold font-heading text-text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-text-secondary">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Button href="/contact" variant="primary" size="lg" icon={<ArrowRightIcon className="w-5 h-5" />} iconPosition="right">
              Contact
            </Button>
            <Button href="/forms" variant="outline" size="lg">
              Forms
            </Button>
          </div>
        </FadeIn>
      </Section>

      {/* Privacy Section */}
      <Section variant="light" padding="lg">
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm">
              <ShieldIcon className="w-8 h-8 text-brand-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold font-heading text-text-primary mb-2">
                  Privacy and confidentiality
                </h3>
                <p className="text-text-secondary mb-4">
                  We treat your story with care. We do not share personal information without your permission, except where disclosure is required by law or where there is a serious safety concern.
                </p>
                <p className="text-text-muted text-sm">
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
          <div className="max-w-3xl mx-auto bg-red-50 border border-red-200 rounded-2xl p-6">
            <p className="text-red-800 text-center">
              <strong>KingGen Ministries is not an emergency service.</strong> If you are in immediate danger, call <strong>911</strong>. If you are experiencing thoughts of self-harm, call or text <strong>988</strong> (United States).
            </p>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
