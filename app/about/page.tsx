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
      <section className="bg-gradient-to-br from-brand-primary to-brand-secondary py-20 md:py-28">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
                About KingGen Ministries
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
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

      {/* Heart and Approach Section */}
      <Section variant="default" padding="xl">
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-primary mb-6 text-center">
              Our heart and approach
            </h2>
            <p className="text-lg text-text-secondary mb-8 text-center leading-relaxed">
              We believe the Gospel brings hope, truth, and healing. Counseling is a place to bring what feels heavy into the light, to be met with compassion, and to take wise steps forward.
            </p>
            <p className="text-lg text-text-secondary mb-6 text-center">
              You can expect:
            </p>
          </div>
        </FadeIn>

        <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {expectations.map((item, i) => (
            <StaggerItem key={i}>
              <div className="flex items-center gap-3 p-4 bg-brand-light rounded-xl">
                <CheckCircleIcon className="w-5 h-5 text-brand-primary flex-shrink-0" />
                <p className="text-text-primary">{item}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* For Referrers CTA */}
      <Section variant="soft" padding="lg">
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

      {/* Speaking Requests */}
      <Section variant="default" padding="lg">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-text-primary mb-4">
              Speaking and ministry requests
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              If you&apos;d like KingGen to speak to your church or group, contact us with details and availability.
            </p>
            <Button href="/contact" variant="outline" icon={<ArrowRightIcon className="w-5 h-5" />} iconPosition="right">
              Contact
            </Button>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
