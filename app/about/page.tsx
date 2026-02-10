"use client";

import {
  Section,
  SectionHeader,
  Button,
  CheckCircleIcon,
  ArrowRightIcon,
  FadeIn,
  StaggerContainer,
  StaggerItem,
  PageHero,
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
      {/* Hero Section with KingGen branded background */}
      <PageHero
        title="About KingGen Ministries"
        description="KingGen Ministries exists to offer Gospel-centered counseling to women who need support, especially when cost is a barrier. We believe no woman should be left alone in her hardest seasons."
        background="kinggen-branded"
        showStones={true}
        stonesPosition="both"
      />

      {/* Mission Section */}
      <Section variant="warm-cream" padding="xl" watermark="none">
        <FadeIn>
          <SectionHeader
            title="Mission"
            subtitle="As a 501(c)(3), KingGen Ministries provides counseling at no cost. Donations allow us to continue offering care and expanding access for women in need."
          />
        </FadeIn>
      </Section>

      {/* Scripture Divider */}
      <Section variant="sage-mist" padding="lg" watermark="none">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center">
            <div className="decorative-line mx-auto mb-6" />
            <blockquote className="border-l-0 pl-0 text-xl md:text-2xl font-heading italic text-text-primary leading-relaxed">
              &ldquo;He heals the brokenhearted and binds up their wounds.&rdquo;
            </blockquote>
            <p className="mt-4 text-text-muted text-sm tracking-wide uppercase">
              Psalm 147:3
            </p>
            <div className="decorative-line mx-auto mt-6" />
          </div>
        </FadeIn>
      </Section>

      {/* Heart and Approach Section - GREEN with KingGen texture */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* KingGen branded background */}
        <OptimizedBackground
          src="/bg_green_texture_1920x1080.png"
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/85 to-brand-secondary/90" />

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

        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="max-w-3xl mx-auto">
              <div className="decorative-line-wide mx-auto mb-8" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)" }} />
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
      <Section variant="light" padding="lg" watermark="none">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-text-primary mb-4">
              A ministry you can refer to with confidence
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              If you are a pastor, church leader, or community professional, we aim to serve with discretion, clarity, and care.
            </p>
            <Button
              href="/for-referrers"
              variant="primary"
              icon={<ArrowRightIcon className="w-5 h-5" />}
              iconPosition="right"
              className="!rounded-full"
            >
              For Referrers
            </Button>
          </div>
        </FadeIn>
      </Section>

      {/* Speaking & Interview Requests - KingGen branded section */}
      <section id="speaking" className="relative py-16 md:py-24 overflow-hidden">
        {/* KingGen background */}
        <OptimizedBackground
          src="/KingGen Background (1).png"
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/90 via-brand-secondary/85 to-brand-primary/92" />

        {/* Cross art accents */}
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
              <div className="decorative-line-wide mx-auto mb-8" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)" }} />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-white mb-4 text-center">
                Book LeeAnn as a speaker
              </h2>
              <p className="text-base sm:text-lg text-white/90 mb-12 text-center max-w-2xl mx-auto">
                LeeAnn is available for speaking engagements, podcast interviews, and ministry events. Her heart is to encourage women, equip churches, and share the hope of the Gospel.
              </p>

              <StaggerContainer staggerDelay={0.12} className="grid md:grid-cols-3 gap-4 md:gap-6 mb-12">
                <StaggerItem>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 text-center h-full">
                    <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-white text-lg mb-2">Churches &amp; Retreats</h3>
                    <p className="text-sm text-white/80 leading-relaxed">Women&apos;s events, Sunday services, and weekend retreats</p>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 text-center h-full">
                    <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-white text-lg mb-2">Podcasts &amp; Interviews</h3>
                    <p className="text-sm text-white/80 leading-relaxed">Faith, counseling, ministry, and mental health topics</p>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 text-center h-full">
                    <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-white text-lg mb-2">Conferences &amp; Panels</h3>
                    <p className="text-sm text-white/80 leading-relaxed">Workshops on pastoral care and women&apos;s ministry</p>
                  </div>
                </StaggerItem>
              </StaggerContainer>

              <div className="text-center">
                <Button
                  href="/contact"
                  variant="white"
                  size="lg"
                  icon={<ArrowRightIcon className="w-5 h-5" />}
                  iconPosition="right"
                  className="!rounded-full"
                >
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
