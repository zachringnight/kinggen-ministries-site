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
import { formsContent } from "../content";

export const metadata: Metadata = {
  title: "Forms and Resources",
  description:
    "Download KingGen Ministries resources, including Scripture encouragement, prayer guides, and practical healing prompts.",
};

const resourceIcons = [BookOpenIcon, HeartIcon, DocumentIcon, SunIcon];

export default function ResourcesPage() {
  return (
    <>
      <InnerPageHero
        title={formsContent.hero.title}
        subtitle={formsContent.hero.subtitle}
        background="inner"
        ariaLabel="Forms and Resources"
      />

      <Section variant="art-cream" padding="lg">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-text-secondary leading-relaxed">{formsContent.intro}</p>
          </div>
        </FadeIn>
      </Section>

      <Section variant="cross-green" padding="xl">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-3 text-center">
            {formsContent.downloads.title}
          </h2>
          <p className="text-center text-white/95 mb-8">{formsContent.downloads.subtitle}</p>
        </FadeIn>

        <StaggerContainer staggerDelay={0.1} className="space-y-4 max-w-4xl mx-auto">
          {formsContent.downloads.items.map((resource, i) => {
            const Icon = resourceIcons[i];
            return (
              <StaggerItem key={i}>
                <a
                  href={`/resources/${resource.filename}`}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-5 brand-panel rounded-xl hover:shadow-xl transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-light text-brand-primary flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
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
            );
          })}
        </StaggerContainer>

        <FadeIn delay={0.3}>
          <div className="mt-8 p-6 brand-panel-dark rounded-2xl text-center max-w-4xl mx-auto">
            <p className="text-white/95">{formsContent.downloads.comingSoon}</p>
          </div>
        </FadeIn>
      </Section>

      <Section variant="cross-light" padding="lg">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-text-primary mb-4">
              {formsContent.needHelp.title}
            </h2>
            <p className="text-lg text-text-secondary mb-8">{formsContent.needHelp.subtitle}</p>
            <Button
              href="/contact"
              variant="primary"
              icon={<ArrowRightIcon className="w-5 h-5" />}
              iconPosition="right"
            >
              Contact Us
            </Button>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
