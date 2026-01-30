"use client";

import {
  Section,
  Button,
  CheckCircleIcon,
  ArrowRightIcon,
  FadeIn,
  StaggerContainer,
  StaggerItem,
  PageHero,
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
      {/* Hero Section with KingGen branded background */}
      <PageHero
        title="About KingGen Ministries"
        description="KingGen Ministries exists to offer Gospel-centered counseling to women who need support, especially when cost is a barrier. We believe no woman should be left alone in her hardest seasons."
        background="kinggen-branded"
        showArt={true}
        artPosition="both"
      />

      {/* Mission Section with art background */}
      <Section variant="art-cream" padding="xl" watermark="art-right" artImage="cross-1">
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

      {/* Heart and Approach Section - GREEN with KingGen texture */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* KingGen branded background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/bg_green_texture_1920x1080.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/85 to-brand-secondary/90" />

        {/* Art accents */}
        <div
          className="absolute left-0 top-0 w-40 h-40 md:w-56 md:h-56 bg-no-repeat pointer-events-none opacity-15"
          style={{
            backgroundImage: "url('/Untitled-7.png')",
            backgroundPosition: "left top",
            backgroundSize: "contain",
          }}
        />
        <div
          className="absolute right-0 bottom-0 w-48 h-48 md:w-64 md:h-64 bg-no-repeat pointer-events-none opacity-20"
          style={{
            backgroundImage: "url('/Untitled-5.png')",
            backgroundPosition: "right bottom",
            backgroundSize: "contain",
          }}
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

      {/* For Referrers CTA with art accent */}
      <Section variant="art-cream" padding="lg" watermark="art-left" artImage="cross-4">
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

      {/* Speaking & Interview Requests - KingGen branded section */}
      <section id="speaking" className="relative py-16 md:py-24 overflow-hidden">
        {/* KingGen background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/KingGen Background (1).png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/90 via-brand-secondary/85 to-brand-primary/92" />

        {/* Cross art accents */}
        <div
          className="absolute left-0 bottom-0 w-56 h-56 md:w-72 md:h-72 bg-no-repeat pointer-events-none opacity-20"
          style={{
            backgroundImage: "url('/Untitled-2.png')",
            backgroundPosition: "left bottom",
            backgroundSize: "contain",
          }}
        />
        <div
          className="absolute right-0 top-0 w-48 h-48 md:w-60 md:h-60 bg-no-repeat pointer-events-none opacity-15"
          style={{
            backgroundImage: "url('/Untitled-4.png')",
            backgroundPosition: "right top",
            backgroundSize: "contain",
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
