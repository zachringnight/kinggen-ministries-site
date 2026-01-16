"use client";

import {
  Section,
  FadeIn,
} from "../components";

export default function DisclaimerPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-primary to-brand-secondary py-20 md:py-28">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
                Disclaimer
              </h1>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Content Section */}
      <Section variant="light" padding="xl">
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              This website is for informational purposes and is not an emergency service.
            </p>

            <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
              <p className="text-red-800">
                If you are in immediate danger, call <strong>911</strong> (or your local emergency number).
              </p>
              <p className="text-red-800 mt-4">
                If you are experiencing thoughts of self-harm, call or text <strong>988</strong> (United States).
              </p>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
