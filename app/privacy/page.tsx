"use client";

import {
  Section,
  FadeIn,
} from "../components";

export default function PrivacyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-primary to-brand-secondary py-20 md:py-28">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
                Privacy and Confidentiality
              </h1>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Content Section */}
      <Section variant="light" padding="xl">
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
