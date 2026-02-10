"use client";

import {
  Section,
  SectionHeader,
  Button,
  CheckCircleIcon,
  ShieldIcon,
  ArrowRightIcon,
  HeartIcon,
  ChatIcon,
  FadeIn,
  StaggerContainer,
  StaggerItem,
  PageHero,
  OptimizedBackground,
  QuoteIcon,
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
    {
      title: "Confidential intake",
      description: "We protect the privacy of every woman referred to us",
      icon: ShieldIcon,
    },
    {
      title: "Clear communication",
      description: "We keep referrers informed as appropriate and permitted",
      icon: ChatIcon,
    },
    {
      title: "Compassionate care",
      description: "Women receive Gospel-centered support at their own pace",
      icon: HeartIcon,
    },
    {
      title: "Professional standards",
      description: "Licensed clinical pastoral counseling with ethical guidelines",
      icon: CheckCircleIcon,
    },
  ];

  const helpfulInfo = [
    "First name of the person being referred",
    "Best contact method (email or phone)",
    "General reason for referral",
    "Any immediate safety concerns",
  ];

  return (
    <>
      {/* Hero */}
      <PageHero
        title="For Referrers"
        description="Thank you for caring for women well. If you're supporting someone who needs counseling and cost is a barrier, we're grateful you're here. KingGen Ministries aims to be a trustworthy, compassionate referral partner."
        background="kinggen-branded"
        showStones={true}
        stonesPosition="both"
      />

      {/* Who Can Refer */}
      <Section variant="warm-cream" padding="xl" watermark="none">
        <SectionHeader
          title="Who can refer"
          subtitle="We welcome referrals from trusted sources who are supporting women in need."
        />

        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {whoCanRefer.map((referrer, i) => (
            <StaggerItem key={i}>
              <div className="flex items-center gap-3 p-5 bg-white rounded-xl border border-brand-light/60 shadow-brand hover:shadow-brand-lg transition-shadow duration-300">
                <div className="w-8 h-8 rounded-full bg-brand-sage-light flex items-center justify-center flex-shrink-0">
                  <CheckCircleIcon className="w-4 h-4 text-brand-primary" />
                </div>
                <p className="text-sm md:text-base text-text-secondary">{referrer}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Scripture Divider */}
      <Section variant="default" padding="sm" watermark="none">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center py-4">
            <QuoteIcon className="w-6 h-6 text-brand-accent/40 mx-auto mb-3" />
            <p className="text-lg md:text-xl text-text-secondary italic font-heading leading-relaxed">
              &ldquo;Carry each other&apos;s burdens, and in this way you will fulfill the law of Christ.&rdquo;
            </p>
            <p className="text-sm text-text-muted mt-2">Galatians 6:2</p>
          </div>
        </FadeIn>
      </Section>

      {/* When Referral is Appropriate */}
      <Section variant="sage-mist" padding="xl" watermark="none">
        <SectionHeader
          title="When a referral may be appropriate"
          subtitle="A referral may be a good fit when someone:"
        />

        <StaggerContainer staggerDelay={0.12} className="max-w-2xl mx-auto space-y-4">
          {referralReasons.map((reason, i) => (
            <StaggerItem key={i}>
              <div className="flex items-start gap-4 p-5 bg-white/80 backdrop-blur-sm rounded-xl border border-brand-light/40 shadow-brand">
                <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircleIcon className="w-4 h-4 text-brand-primary" />
                </div>
                <p className="text-text-primary text-base sm:text-lg leading-relaxed">{reason}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* What to Expect - Branded dark section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <OptimizedBackground
          src="/KingGen Background (1).png"
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/90 via-brand-secondary/85 to-brand-primary/92" />

        <OptimizedBackground
          src="/Untitled-2.png"
          className="absolute left-0 bottom-0 w-48 h-48 md:w-64 md:h-64 bg-no-repeat pointer-events-none"
          style={{
            backgroundPosition: "left bottom",
            backgroundSize: "contain",
            opacity: 0.20,
          }}
        />

        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="text-center mb-12 md:mb-16">
              <div className="decorative-line mx-auto mb-5 !bg-white/40" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white mb-4">
                What referrers can expect
              </h2>
              <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
                When you refer someone to KingGen, here is what the process looks like.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 max-w-4xl mx-auto">
            {whatToExpect.map((item, i) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={i}>
                  <div className="bg-white/12 backdrop-blur-sm rounded-2xl p-6 md:p-7 border border-white/15 h-full hover:bg-white/18 transition-colors duration-300">
                    <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-lg text-white mb-2">{item.title}</h3>
                    <p className="text-sm md:text-base text-white/75 leading-relaxed">{item.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* How to Refer */}
      <Section variant="light" padding="xl" watermark="stones-right">
        <SectionHeader
          title="How to refer someone"
        />

        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-6 md:p-8 mb-10 shadow-brand border border-brand-light/40">
              <p className="text-base sm:text-lg text-text-primary mb-3">
                <strong>Preferred:</strong> Encourage her to reach out directly. This helps her remain in control of her story and timing.
              </p>
              <p className="text-text-secondary leading-relaxed">
                If needed, you may also contact us to initiate a referral on her behalf.
              </p>
            </div>

            <h3 className="text-lg md:text-xl font-bold font-heading text-text-primary mb-6 text-center">
              Helpful information to include:
            </h3>
          </div>
        </FadeIn>

        <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {helpfulInfo.map((info, i) => (
            <StaggerItem key={i}>
              <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-brand-light/40 shadow-brand">
                <div className="w-7 h-7 rounded-full bg-brand-sage-light flex items-center justify-center flex-shrink-0">
                  <CheckCircleIcon className="w-4 h-4 text-brand-primary" />
                </div>
                <p className="text-text-secondary text-sm md:text-base">{info}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.4}>
          <div className="text-center mt-12">
            <Button href="/contact" variant="primary" size="lg" icon={<ArrowRightIcon className="w-5 h-5" />} iconPosition="right" className="!rounded-full">
              Contact to Refer
            </Button>
          </div>
        </FadeIn>
      </Section>

      {/* Confidentiality */}
      <Section variant="warm-cream" padding="lg" watermark="none">
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row items-start gap-5 p-7 md:p-8 bg-white rounded-2xl shadow-brand-lg border border-brand-light/30">
              <div className="w-14 h-14 rounded-2xl bg-brand-sage-light flex items-center justify-center flex-shrink-0">
                <ShieldIcon className="w-7 h-7 text-brand-primary" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold font-heading text-text-primary mb-3">
                  Confidentiality
                </h3>
                <p className="text-text-secondary text-base leading-relaxed">
                  We do not share session details without the client&apos;s permission, except where disclosure is required by law or where there is a serious safety concern. Your referral is handled with discretion and care.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Partner CTA - Branded dark section */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <OptimizedBackground
          src="/bg_green_texture_1920x1080.png"
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/88 to-brand-secondary/90" />

        <OptimizedBackground
          src="/Untitled-6.png"
          className="absolute left-0 top-0 w-44 h-44 md:w-56 md:h-56 bg-no-repeat pointer-events-none"
          style={{
            backgroundPosition: "left top",
            backgroundSize: "contain",
            opacity: 0.15,
          }}
        />

        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-white mb-4">
                Partner with us
              </h2>
              <p className="text-base sm:text-lg text-white/90 mb-8 leading-relaxed">
                If you&apos;d like to establish an ongoing referral relationship or learn more about how KingGen can serve your community, we&apos;d love to connect.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/contact" variant="white" size="lg" icon={<ArrowRightIcon className="w-5 h-5" />} iconPosition="right" className="!rounded-full">
                  Contact Us
                </Button>
                <Button href="/donate" variant="outline" size="lg" icon={<HeartIcon className="w-5 h-5" />} className="border-white/40 text-white hover:bg-white/10 !rounded-full">
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
