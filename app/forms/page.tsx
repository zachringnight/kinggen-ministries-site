"use client";

import {
  Section,
  SectionHeader,
  Button,
  DocumentIcon,
  DownloadIcon,
  ArrowRightIcon,
  HeartIcon,
  BookOpenIcon,
  SunIcon,
  QuoteIcon,
  FadeIn,
  StaggerContainer,
  StaggerItem,
  PageHero,
} from "../components";

export default function ResourcesPage() {
  const resources = [
    {
      name: "Scripture for Anxious Moments",
      description: "A collection of verses to read when you feel overwhelmed",
      filename: "scripture-for-anxiety.pdf",
      icon: BookOpenIcon,
      color: "from-brand-primary to-brand-accent",
    },
    {
      name: "Prayer Guide for Hard Days",
      description: "Simple prayers for when words are hard to find",
      filename: "prayer-guide.pdf",
      icon: HeartIcon,
      color: "from-brand-accent to-brand-warm",
    },
    {
      name: "Journaling Prompts for Healing",
      description: "Reflective questions to help process your thoughts",
      filename: "journaling-prompts.pdf",
      icon: DocumentIcon,
      color: "from-brand-warm to-brand-primary",
    },
    {
      name: "Daily Encouragement Cards",
      description: "Printable cards with Scripture and affirmations",
      filename: "encouragement-cards.pdf",
      icon: SunIcon,
      color: "from-brand-primary to-brand-warm",
    },
  ];

  return (
    <>
      <PageHero
        title="Resources"
        description="Free resources to encourage you in your journey. Download and use at your own pace."
        background="kinggen-branded"
        showStones={true}
        stonesPosition="both"
      />

      {/* Opening Section */}
      <Section variant="warm-cream" padding="lg">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-text-secondary leading-relaxed">
              These resources are meant to be a small gift of encouragement.
              They are not a substitute for counseling, but we hope they bring
              comfort and hope.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* Downloads Section */}
      <Section variant="sage-mist" padding="xl">
        <SectionHeader
          title="Free Downloads"
          subtitle="Practical tools for encouragement and reflection."
        />

        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto"
        >
          {resources.map((resource, i) => (
            <StaggerItem key={i}>
              <a
                href={`/resources/${resource.filename}`}
                className="block bg-white rounded-2xl shadow-brand border border-brand-light/50 overflow-hidden hover:shadow-brand-lg transition-all group h-full"
              >
                {/* Accent bar */}
                <div
                  className={`h-1 bg-gradient-to-r ${resource.color}`}
                />

                <div className="p-5 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-light text-brand-primary flex items-center justify-center flex-shrink-0 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                    <resource.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-text-primary mb-1">
                      {resource.name}
                    </p>
                    <p className="text-sm text-text-muted">
                      {resource.description}
                    </p>
                  </div>
                  <DownloadIcon className="w-5 h-5 text-text-muted group-hover:text-brand-primary transition-colors flex-shrink-0 mt-1" />
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.3}>
          <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-2xl text-center shadow-brand-sm">
            <p className="text-text-secondary">
              More resources coming soon. If there&apos;s something specific
              that would help you, let us know.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* Scripture Divider */}
      <Section variant="warm-cream" padding="md">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center">
            <QuoteIcon className="w-6 h-6 text-brand-primary/30 mx-auto mb-4" />
            <p className="text-lg md:text-xl font-heading italic text-text-primary leading-relaxed">
              &ldquo;Your word is a lamp for my feet, a light on my
              path.&rdquo;
            </p>
            <p className="text-sm text-text-muted mt-3 tracking-wide uppercase">
              Psalm 119:105
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* Contact CTA */}
      <Section variant="art-cream" padding="lg">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-text-primary mb-4">
              Need someone to talk to?
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              Resources are helpful, but sometimes you need more. We&apos;re
              here for you.
            </p>
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRightIcon className="w-5 h-5" />}
              iconPosition="right"
              className="!rounded-full"
            >
              Contact Us
            </Button>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
