import type { Metadata } from "next";
import { Section, FadeIn, InnerPageHero, LocationIcon } from "../components";
import { siteConfig } from "../config/site";
import { contactContent } from "../content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact KingGen Ministries by mail at our Keller, Texas mailing address. Referral and partner inquiries are welcome.",
};

export default function ContactPage() {
  return (
    <>
      <InnerPageHero
        title={contactContent.hero.title}
        subtitle={contactContent.hero.subtitle}
        background="inner"
        ariaLabel="Contact KingGen Ministries"
        eyebrow="Referral & Partner Inquiries"
      />

      <Section variant="cross-light" padding="lg">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-text-secondary leading-relaxed">{contactContent.note}</p>
          </div>
        </FadeIn>
      </Section>

      <Section variant="art-cream" padding="xl">
        <FadeIn>
          <div className="max-w-2xl mx-auto">
            <div className="brand-panel brand-panel-premium p-8 md:p-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-primary text-white flex items-center justify-center shrink-0 shadow-md shadow-brand-primary/20">
                  <LocationIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold font-heading text-text-primary mb-2">
                    Contact us by mail
                  </h2>
                  <p className="text-base text-text-secondary leading-relaxed mb-5">
                    Send referrals, partnership inquiries, and donor questions to our mailing address. We do not
                    accept inquiries by phone or email at this time.
                  </p>
                  <address className="not-italic text-base text-text-primary leading-relaxed font-medium">
                    {siteConfig.address.line1}
                    <br />
                    {siteConfig.address.line2}
                    <br />
                    {siteConfig.address.line3}
                    <br />
                    {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                  </address>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
