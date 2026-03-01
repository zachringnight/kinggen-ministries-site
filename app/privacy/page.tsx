import type { Metadata } from "next";
import {
  Section,
  FadeIn,
  PageHero,
} from "../components";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Read how KingGen Ministries handles privacy, confidentiality, and safety-related information.",
};

export default function PrivacyPage() {
  return (
    <>
      {/* Hero Section with KingGen branded background */}
      <PageHero
        title="Privacy and Confidentiality"
        background="kinggen-branded"
        showStones={false}
      />

      {/* Content Section with art */}
      <Section variant="art-cream" padding="xl">
        <FadeIn>
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              We respect your privacy and treat your story with care.
            </p>

            <ul className="space-y-4 list-none p-0">
              <li className="flex items-start gap-3 text-text-secondary">
                <span className="text-brand-primary font-bold">•</span>
                <span>We do not share personal information without consent, except where disclosure is required by law or where there is a serious safety concern.</span>
              </li>
              <li className="flex items-start gap-3 text-text-secondary">
                <span className="text-brand-primary font-bold">•</span>
                <span>Website forms and email may not be perfectly secure. Please avoid sharing highly sensitive details in a first message.</span>
              </li>
              <li className="flex items-start gap-3 text-text-secondary">
                <span className="text-brand-primary font-bold">•</span>
                <span>KingGen Ministries is not an emergency service. If you are in immediate danger, call <strong>911</strong>. If you are experiencing thoughts of self-harm, call or text <strong>988</strong> (United States).</span>
              </li>
            </ul>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
