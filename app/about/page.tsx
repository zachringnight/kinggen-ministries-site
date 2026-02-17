"use client";

import {
  Section,
  Button,
  CheckCircleIcon,
  ArrowRightIcon,
  CrossIcon,
  FadeIn,
  StaggerContainer,
  StaggerItem,
  OptimizedBackground,
} from "../components";

export default function AboutPage() {
  const expectations = [
    "kindness and respect",
    "a steady pace and clear next steps",
    "faith-rooted care grounded in Scripture",
    "practical guidance for everyday life",
  ];

  return (
    <>
      {/* Hero — about-header banner, text baked in */}
      <section
        className="relative w-full min-h-[40vh] md:min-h-[50vh] bg-cover bg-center animate-fade-in-up"
        style={{ backgroundImage: "url('/brand/headers/about-header.png')" }}
        role="banner"
        aria-label="About KingGen Ministries"
      />

      {/* Mission Section */}
      <Section variant="cross-light" padding="xl" watermark="none">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <CrossIcon className="w-6 h-6 text-brand-primary/50" strokeWidth={1.5} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-primary mb-6">
              Mission
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              As a <strong>501(c)(3)</strong>, KingGen Ministries provides counseling at no cost. Donations allow us to continue offering care and expanding access for women in need.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* Heart and Approach Section */}
      <section
        className="relative py-16 md:py-24 overflow-hidden"
        style={{
          backgroundImage: "url('/brand/bg/dark-green-texture.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Art accents */}
        <OptimizedBackground
          src="/Untitled-7.png"
          className="absolute left-0 top-0 w-40 h-40 md:w-56 md:h-56 bg-no-repeat pointer-events-none"
          style={{
            backgroundPosition: "left top",
            backgroundSize: "contain",
            opacity: 0.15,
          }}
        />
        <OptimizedBackground
          src="/Untitled-5.png"
          className="absolute right-0 bottom-0 w-48 h-48 md:w-64 md:h-64 bg-no-repeat pointer-events-none"
          style={{
            backgroundPosition: "right bottom",
            backgroundSize: "contain",
            opacity: 0.20,
          }}
        />

        {/* Cross watermark */}
        <OptimizedBackground
          src="/bg_white_cross.png"
          className="absolute inset-0 bg-no-repeat pointer-events-none"
          style={{
            backgroundPosition: "center 30%",
            backgroundSize: "180px auto",
            opacity: 0.08,
          }}
        />

        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="max-w-3xl mx-auto">
              <div className="flex justify-center mb-4">
                <CrossIcon className="w-7 h-7 text-white/50" strokeWidth={1.5} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6 text-center">
                Our heart and approach
              </h2>
              <p className="text-lg text-white/90 mb-8 text-center leading-relaxed">
                We believe the Gospel brings hope, truth, and healing. Counseling is a place to bring what feels heavy into the light, to be met with compassion, and to take wise steps forward.
              </p>
              <p className="text-lg text-white mb-6 text-center">
                You can expect:
              </p>
            </div>
          </FadeIn>

          <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {expectations.map((item, i) => (
              <StaggerItem key={i}>
                <div className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                  <CheckCircleIcon className="w-5 h-5 text-white flex-shrink-0" />
                  <p className="text-white">{item}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* For Referrers CTA */}
      <Section variant="art-cream" padding="lg" watermark="cross-right">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-text-primary mb-4">
              A ministry you can refer to with confidence
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              If you are a pastor, church leader, or community professional, we aim to serve with discretion, clarity, and care.
            </p>
            <Button href="/for-referrers" variant="primary" icon={<ArrowRightIcon className="w-5 h-5" />} iconPosition="right">
              For Referrers
            </Button>
          </div>
        </FadeIn>
      </Section>

      {/* Speaking & Interview Requests */}
      <section
        id="speaking"
        className="relative py-16 md:py-24 overflow-hidden"
        style={{
          backgroundImage: "url('/brand/bg/dark-green-texture.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Art accents */}
        <OptimizedBackground
          src="/Untitled-2.png"
          className="absolute left-0 bottom-0 w-56 h-56 md:w-72 md:h-72 bg-no-repeat pointer-events-none"
          style={{
            backgroundPosition: "left bottom",
            backgroundSize: "contain",
            opacity: 0.20,
          }}
        />
        <OptimizedBackground
          src="/Untitled-4.png"
          className="absolute right-0 top-0 w-48 h-48 md:w-60 md:h-60 bg-no-repeat pointer-events-none"
          style={{
            backgroundPosition: "right top",
            backgroundSize: "contain",
            opacity: 0.15,
          }}
        />

        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-white mb-4 text-center">
                Book LeeAnn as a speaker
              </h2>
              <p className="text-base sm:text-lg text-white/90 mb-10 text-center max-w-2xl mx-auto">
                LeeAnn is available for speaking engagements, podcast interviews, and ministry events. Her heart is to encourage women, equip churches, and share the hope of the Gospel.
              </p>

              <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-10">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 md:p-6 border border-white/20 text-center">
                  <h3 className="font-bold text-white mb-2">Churches & Retreats</h3>
                  <p className="text-sm text-white/80">Women&apos;s events, Sunday services, and weekend retreats</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 md:p-6 border border-white/20 text-center">
                  <h3 className="font-bold text-white mb-2">Podcasts & Interviews</h3>
                  <p className="text-sm text-white/80">Faith, counseling, ministry, and mental health topics</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 md:p-6 border border-white/20 text-center">
                  <h3 className="font-bold text-white mb-2">Conferences & Panels</h3>
                  <p className="text-sm text-white/80">Workshops on pastoral care and women&apos;s ministry</p>
                </div>
              </div>

              <div className="text-center">
                <Button href="/contact" variant="white" size="lg" icon={<ArrowRightIcon className="w-5 h-5" />} iconPosition="right">
                  Request a Booking
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
