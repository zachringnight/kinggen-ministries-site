"use client";

import {
  Section,
  Button,
  CheckCircleIcon,
  ArrowRightIcon,
  FadeIn,
  StaggerContainer,
  StaggerItem,
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
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/bg-green.jpg')" }}
        />

        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4 md:mb-6">
                About KingGen Ministries
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed">
                KingGen Ministries exists to offer Gospel-centered counseling to women who need support, especially when cost is a barrier. We believe no woman should be left alone in her hardest seasons.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Mission Section */}
      <Section variant="light" padding="xl">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-primary mb-6">
              Mission
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              As a <strong>501(c)(3)</strong>, KingGen Ministries provides counseling at no cost. Donations allow us to continue offering care and expanding access for women in need.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* Heart and Approach Section - GREEN with texture */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/bg-green.jpg')" }}
        />

        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="max-w-3xl mx-auto">
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

      {/* For Referrers CTA - WHITE */}
      <Section variant="light" padding="lg">
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

      {/* Speaking & Interview Requests - GREEN with texture */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/bg-green.jpg')" }}
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
