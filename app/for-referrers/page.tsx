"use client";

import { siteConfig } from "../config/site";
import {
  Section,
  Button,
  CheckCircleIcon,
  ShieldIcon,
  ArrowRightIcon,
  HeartIcon,
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "../components";

export default function ForReferrers() {
  const whoCanRefer = [
    "Pastors and church staff",
    "Licensed counselors and therapists",
    "Social workers and case managers",
    "Healthcare professionals",
    "Community organization leaders",
    "Trusted family members or mentors",
  ];

  const referralReasons = [
    "is seeking counseling support and cost is a barrier",
    "is open to Gospel-centered counseling",
    "can participate by appointment (in-person or telehealth)",
  ];

  const whatToExpect = [
    { title: "Confidential intake", description: "We protect the privacy of every woman referred to us" },
    { title: "Clear communication", description: "We keep referrers informed as appropriate and permitted" },
    { title: "Compassionate care", description: "Women receive Gospel-centered support at their own pace" },
    { title: "Professional standards", description: "Licensed clinical pastoral counseling with ethical guidelines" },
  ];

  const helpfulInfo = [
    "First name of the person being referred",
    "Best contact method (email or phone)",
    "General reason for referral",
    "Any immediate safety concerns",
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${siteConfig.images.bgGreen}')` }}
        />

        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4 md:mb-6">
                For Referrers
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed">
                Thank you for caring for women well. If you&apos;re supporting someone who needs counseling and cost is a barrier, we&apos;re grateful you&apos;re here. KingGen Ministries aims to be a trustworthy, compassionate referral partner.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Who Can Refer */}
      <Section variant="light" padding="xl">
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-text-primary mb-6 text-center">
              Who can refer
            </h2>
            <p className="text-base sm:text-lg text-text-secondary mb-8 text-center">
              We welcome referrals from trusted sources who are supporting women in need:
            </p>
          </div>
        </FadeIn>

        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto">
          {whoCanRefer.map((referrer, i) => (
            <StaggerItem key={i}>
              <div className="flex items-center gap-3 p-4 bg-brand-cream rounded-xl border border-brand-light">
                <CheckCircleIcon className="w-5 h-5 text-brand-primary flex-shrink-0" />
                <p className="text-sm md:text-base text-text-secondary">{referrer}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* When Referral is Appropriate */}
      <Section variant="default" padding="xl">
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-text-primary mb-6 text-center">
              When a referral may be appropriate
            </h2>
            <p className="text-base sm:text-lg text-text-secondary mb-8 text-center">
              A referral may be a good fit when someone:
            </p>
          </div>
        </FadeIn>

        <StaggerContainer staggerDelay={0.1} className="max-w-2xl mx-auto">
          {referralReasons.map((reason, i) => (
            <StaggerItem key={i}>
              <div className="flex items-start gap-4 p-4 mb-3 bg-brand-light rounded-xl">
                <CheckCircleIcon className="w-6 h-6 text-brand-primary flex-shrink-0" />
                <p className="text-text-primary text-base sm:text-lg">{reason}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </Section>

      {/* What to Expect - GREEN with texture */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${siteConfig.images.bgGreen}')` }}
        />

        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-white mb-8 text-center">
              What referrers can expect
            </h2>
          </FadeIn>

          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
            {whatToExpect.map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 md:p-6 border border-white/20 h-full">
                  <h3 className="font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm md:text-base text-white/80">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* How to Refer Section */}
      <Section variant="default" padding="xl">
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-text-primary mb-8 text-center">
              How to refer someone
            </h2>

            <div className="bg-brand-light rounded-2xl p-6 md:p-8 mb-8">
              <p className="text-base sm:text-lg text-text-primary mb-4">
                <strong>Preferred:</strong> Encourage her to reach out directly. This helps her remain in control of her story and timing.
              </p>
              <p className="text-text-secondary">
                If needed, you may also contact us to initiate a referral on her behalf.
              </p>
            </div>

            <h3 className="text-lg md:text-xl font-bold font-heading text-text-primary mb-4">
              Helpful information to include:
            </h3>
          </div>
        </FadeIn>

        <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {helpfulInfo.map((info, i) => (
            <StaggerItem key={i}>
              <div className="flex items-center gap-3 p-4 bg-brand-cream rounded-xl border border-brand-light">
                <CheckCircleIcon className="w-5 h-5 text-brand-primary flex-shrink-0" />
                <p className="text-text-secondary text-sm md:text-base">{info}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.4}>
          <div className="text-center mt-10">
            <Button href="/contact" variant="primary" size="lg" icon={<ArrowRightIcon className="w-5 h-5" />} iconPosition="right">
              Contact to Refer
            </Button>
          </div>
        </FadeIn>
      </Section>

      {/* Confidentiality Section */}
      <Section variant="light" padding="lg">
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row items-start gap-4 p-6 bg-brand-cream rounded-2xl border border-brand-light">
              <ShieldIcon className="w-8 h-8 text-brand-primary flex-shrink-0" />
              <div>
                <h3 className="text-lg md:text-xl font-bold font-heading text-text-primary mb-2">
                  Confidentiality
                </h3>
                <p className="text-text-secondary text-sm md:text-base">
                  We do not share session details without the client&apos;s permission, except where disclosure is required by law or where there is a serious safety concern. Your referral is handled with discretion and care.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Partner CTA - GREEN with texture */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${siteConfig.images.bgGreen}')` }}
        />

        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-white mb-4">
                Partner with us
              </h2>
              <p className="text-base sm:text-lg text-white/90 mb-8">
                If you&apos;d like to establish an ongoing referral relationship or learn more about how KingGen can serve your community, we&apos;d love to connect.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/contact" variant="white" size="lg" icon={<ArrowRightIcon className="w-5 h-5" />} iconPosition="right">
                  Contact Us
                </Button>
                <Button href="/donate" variant="outline" size="lg" icon={<HeartIcon className="w-5 h-5" />} className="border-white/40 text-white hover:bg-white/10">
                  Support the Mission
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
