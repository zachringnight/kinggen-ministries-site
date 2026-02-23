import type { Metadata } from "next";
import Image from "next/image";
import {
  Section,
  Button,
  CheckCircleIcon,
  ShieldIcon,
  ArrowRightIcon,
  PhoneIcon,
  FadeIn,
  StaggerContainer,
  StaggerItem,
  InnerPageHero,
} from "../components";

export const metadata: Metadata = {
  title: "Client Information",
  description:
    "Guidance for women and trusted referrers on how to begin care with KingGen Ministries.",
};

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
      description: "The pastor, counselor, or trusted person who shared this page contacts us on your behalf with your permission.",
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
      <InnerPageHero
        title="Client Information"
        subtitle="Helpful guidance for women and those supporting a referral."
        background="inner"
        ariaLabel="Information for Clients"
        showWatermarkCorners
      />

      <Section variant="art-cream" padding="lg" watermark="stones-right" ornamentLevel="featured">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center px-2">
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              At KingGen Ministries, we believe everyone should have access to counseling. As a 501(c)(3), we offer Gospel-centered counseling for women in need by a licensed clinical pastoral counselor.
            </p>
          </div>
        </FadeIn>
      </Section>

      <Section variant="cross-green" padding="xl" watermark="cross" ornamentLevel="featured">
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

      <Section variant="art-cream" padding="xl" watermark="stones-left" ornamentLevel="featured">
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
              <div className="brand-panel flex items-start gap-3 p-3 md:p-4">
                <CheckCircleIcon className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm md:text-base text-text-secondary">{reason}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      <Section variant="cross-green" padding="xl" watermark="cross" ornamentLevel="featured">
        <FadeIn>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-white mb-8 md:mb-12 text-center">
            How it works
          </h2>
        </FadeIn>

        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <StaggerItem key={i}>
              <div className="text-center brand-panel-dark rounded-2xl p-6 h-full">
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

      <Section variant="art-cream" padding="lg" watermark="stones-right" ornamentLevel="featured">
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <div className="brand-panel flex flex-col sm:flex-row items-start gap-4 p-4 md:p-6">
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

      <Section variant="cross-light" padding="lg" watermark="none">
        <FadeIn>
          <div className="max-w-4xl mx-auto">
            <div className="brand-panel flex flex-col md:flex-row items-center gap-6 md:gap-10 p-6 md:p-8">
              <div className="relative w-full md:w-64 aspect-square md:aspect-auto md:h-64 flex-shrink-0 rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/social-prayer.png"
                  alt="National Day of Prayer for Mental Illness - If you are in crisis, call 988"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 256px"
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold font-heading text-text-primary mb-3">
                  In Crisis?
                </h3>
                <p className="text-text-secondary mb-4">
                  If you or someone you know is experiencing a mental health crisis, please reach out for immediate help. You are not alone, and support is available.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-3 justify-center md:justify-start">
                  <a
                    href="tel:988"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary text-white font-bold rounded-xl hover:bg-brand-secondary transition-colors shadow-md"
                  >
                    <PhoneIcon className="w-5 h-5" />
                    Call or Text 988
                  </a>
                  <span className="text-sm text-text-muted">
                    Suicide & Crisis Lifeline
                  </span>
                </div>
                <p className="text-xs text-text-muted mt-4">
                  We are praying for you.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      <Section variant="cross-green" padding="xl" watermark="cross" ornamentLevel="featured">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center brand-panel-dark rounded-3xl p-8 md:p-10">
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
