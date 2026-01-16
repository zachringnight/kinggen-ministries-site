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

export default function ForReferrers() {
  const referralReasons = [
    "is seeking counseling support and cost is a barrier",
    "is open to Gospel-centered counseling",
    "can participate by appointment",
  ];

  const helpfulInfo = [
    "first name",
    "best contact method",
    "general reason for referral",
    "any immediate safety concerns",
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-primary to-brand-secondary py-20 md:py-28">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
                For Referrers
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Thank you for caring for people well. If you&apos;re supporting a woman who needs counseling and cost is a barrier, we&apos;re grateful you&apos;re here. KingGen Ministries aims to be a trustworthy, compassionate referral partner.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* When Referral is Appropriate */}
      <Section variant="light" padding="xl">
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-primary mb-6 text-center">
              When a referral may be appropriate
            </h2>
            <p className="text-lg text-text-secondary mb-8 text-center">
              A referral may be a good fit when someone:
            </p>
          </div>
        </FadeIn>

        <StaggerContainer staggerDelay={0.1} className="max-w-2xl mx-auto">
          {referralReasons.map((reason, i) => (
            <StaggerItem key={i}>
              <div className="flex items-start gap-4 p-4 mb-3 bg-white rounded-xl shadow-sm">
                <CheckCircleIcon className="w-6 h-6 text-brand-primary flex-shrink-0" />
                <p className="text-text-secondary text-lg">{reason}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.3}>
          <div className="max-w-3xl mx-auto mt-8 bg-red-50 border border-red-200 rounded-2xl p-6">
            <p className="text-red-800 text-center">
              If someone is in immediate danger or active crisis, please call <strong>911</strong> or local emergency services.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* How to Refer Section */}
      <Section variant="default" padding="xl">
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-primary mb-8 text-center">
              How to refer someone
            </h2>

            <div className="bg-brand-light rounded-2xl p-8 mb-8">
              <p className="text-lg text-text-primary mb-4">
                <strong>Preferred:</strong> Encourage her to reach out directly. This helps her remain in control of her story and timing.
              </p>
              <p className="text-text-secondary">
                If needed, you may also contact us to initiate a referral.
              </p>
            </div>

            <h3 className="text-xl font-bold font-heading text-text-primary mb-4">
              Helpful to include:
            </h3>
          </div>
        </FadeIn>

        <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {helpfulInfo.map((info, i) => (
            <StaggerItem key={i}>
              <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                <CheckCircleIcon className="w-5 h-5 text-brand-primary flex-shrink-0" />
                <p className="text-text-secondary">{info}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.4}>
          <div className="text-center mt-10">
            <Button href="/contact" variant="primary" size="lg" icon={<ArrowRightIcon className="w-5 h-5" />} iconPosition="right">
              Contact
            </Button>
          </div>
        </FadeIn>
      </Section>

      {/* Confidentiality Section */}
      <Section variant="soft" padding="lg">
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm">
              <ShieldIcon className="w-8 h-8 text-brand-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold font-heading text-text-primary mb-2">
                  Confidentiality
                </h3>
                <p className="text-text-secondary">
                  We do not share session details without the client&apos;s permission, except where disclosure is required by law or where there is a serious safety concern.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
