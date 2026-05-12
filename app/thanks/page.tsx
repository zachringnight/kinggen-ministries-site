import type { Metadata } from "next";
import {
  Section,
  Button,
  ArrowRightIcon,
  HeartIcon,
  CheckCircleIcon,
  FadeIn,
  InnerPageHero,
} from "../components";
import { siteConfig } from "../config/site";

export const metadata: Metadata = {
  title: "Thank you",
  description: "Your message has been received.",
  robots: { index: false, follow: false },
};

export default function ThanksPage() {
  return (
    <>
      <InnerPageHero
        title="Thank you"
        subtitle="Your message has been received."
        background="inner"
        ariaLabel="Thank you"
      />

      <Section variant="art-cream" padding="lg">
        <FadeIn>
          <div className="max-w-2xl mx-auto">
            <div className="brand-panel brand-panel-premium p-8 md:p-10 text-center">
              <div className="w-14 h-14 rounded-2xl bg-brand-primary text-white flex items-center justify-center mx-auto mb-5 shadow-md shadow-brand-primary/20">
                <CheckCircleIcon className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold font-heading text-text-primary mb-3">
                We received your message
              </h2>
              <p className="text-base md:text-lg text-text-secondary mb-6 leading-relaxed">
                We typically respond within 1–2 business days. For urgent matters, please call{" "}
                <a href={`tel:${siteConfig.phoneHref}`} className="text-brand-primary font-semibold underline">
                  {siteConfig.phone}
                </a>
                .
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button href="/" variant="primary" icon={<ArrowRightIcon className="w-5 h-5" />} iconPosition="right">
                  Back to home
                </Button>
                <Button href="/donate" variant="outline" icon={<HeartIcon className="w-5 h-5" />}>
                  Support our mission
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
