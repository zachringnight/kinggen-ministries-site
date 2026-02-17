import type { Metadata } from "next";
import {
  Section,
  Button,
  DocumentIcon,
  DownloadIcon,
  ArrowRightIcon,
  HeartIcon,
  BookOpenIcon,
  SunIcon,
  FadeIn,
  StaggerContainer,
  StaggerItem,
  InnerPageHero,
} from "../components";

export const metadata: Metadata = {
  title: "Forms and Resources",
  description:
    "Download KingGen Ministries resources, including Scripture encouragement, prayer guides, and practical healing prompts.",
};

export default function ResourcesPage() {
  const resources = [
    {
      name: "Scripture for Anxious Moments",
      description: "A collection of verses to read when you feel overwhelmed",
      filename: "scripture-for-anxiety.pdf",
      icon: BookOpenIcon,
    },
    {
      name: "Prayer Guide for Hard Days",
      description: "Simple prayers for when words are hard to find",
      filename: "prayer-guide.pdf",
      icon: HeartIcon,
    },
    {
      name: "Journaling Prompts for Healing",
      description: "Reflective questions to help process your thoughts",
      filename: "journaling-prompts.pdf",
      icon: DocumentIcon,
    },
    {
      name: "Daily Encouragement Cards",
      description: "Printable cards with Scripture and affirmations",
      filename: "encouragement-cards.pdf",
      icon: SunIcon,
    },
  ];

  return (
    <>
      <InnerPageHero
        title="Forms and Resources"
        subtitle="Practical downloads and encouragement for this season."
        ariaLabel="Forms and Resources"
      />

      {/* Opening Section with art */}
      <Section variant="soft" padding="lg" watermark="stones-right" ornamentLevel="featured">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-text-secondary leading-relaxed">
              These resources are meant to be a small gift of encouragement. They are not a substitute for counseling, but we hope they bring comfort and hope.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* Downloads Section - dark with cross watermark */}
      <Section variant="dark" padding="xl" watermark="cross" ornamentLevel="featured">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-3 text-center">
            Free Downloads
          </h2>
          <p className="text-center text-white/85 mb-8">
            Download and share these printable PDF guides.
          </p>
        </FadeIn>

        <StaggerContainer staggerDelay={0.1} className="space-y-4 max-w-4xl mx-auto">
          {resources.map((resource, i) => (
            <StaggerItem key={i}>
              <a
                href={`/resources/${resource.filename}`}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-5 bg-white/95 backdrop-blur-sm rounded-xl shadow-sm border border-white/50 hover:shadow-md hover:border-white/90 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-light text-brand-primary flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-colors">
                    <resource.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary">{resource.name}</p>
                    <p className="text-sm text-text-muted">{resource.description}</p>
                    <p className="text-xs text-brand-primary mt-1">PDF Download</p>
                  </div>
                </div>
                <DownloadIcon className="w-5 h-5 text-text-muted group-hover:text-brand-primary transition-colors flex-shrink-0" />
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.3}>
          <div className="mt-8 p-6 bg-white/10 border border-white/20 backdrop-blur-sm rounded-2xl text-center max-w-4xl mx-auto">
            <p className="text-white/90">
              More resources coming soon. If there&apos;s something specific that would help you, let us know.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* Contact CTA with art */}
      <Section variant="light" padding="lg" watermark="none">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-text-primary mb-4">
              Need someone to talk to?
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              Resources are helpful, but sometimes you need more. We&apos;re here for you.
            </p>
            <Button href="/contact" variant="primary" icon={<ArrowRightIcon className="w-5 h-5" />} iconPosition="right">
              Contact Us
            </Button>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
