"use client";

import {
  Section,
  Button,
  DocumentIcon,
  DownloadIcon,
  ArrowRightIcon,
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "../components";

export default function FormsPage() {
  const forms = [
    { name: "Client Intake Form", filename: "client-intake-form.pdf" },
    { name: "Consent for Counseling", filename: "consent-for-counseling.pdf" },
    { name: "Confidentiality and Privacy Notice", filename: "confidentiality-notice.pdf" },
    { name: "Release of Information (Optional)", filename: "release-of-information.pdf" },
    { name: "Policies and Scheduling", filename: "policies-scheduling.pdf" },
    { name: "Telehealth Consent", filename: "telehealth-consent.pdf", note: "if applicable" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-primary to-brand-secondary py-20 md:py-28">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
                Forms and Resources
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                We provide forms to keep the process simple and respectful. You can download and complete them at your own pace.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Opening Section */}
      <Section variant="light" padding="lg">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-text-secondary leading-relaxed">
              If you&apos;re unsure which form you need, contact us and we&apos;ll guide you.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* Downloads Section */}
      <Section variant="default" padding="xl">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-primary mb-8 text-center">
            Downloads
          </h2>
        </FadeIn>

        <StaggerContainer staggerDelay={0.1} className="max-w-2xl mx-auto space-y-4">
          {forms.map((form, i) => (
            <StaggerItem key={i}>
              <a
                href={`/forms/${form.filename}`}
                className="flex items-center justify-between p-5 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-brand-primary/20 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-light text-brand-primary flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-colors">
                    <DocumentIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium text-text-primary">{form.name}</p>
                    {form.note && (
                      <p className="text-sm text-text-muted">{form.note}</p>
                    )}
                    <p className="text-xs text-text-muted">PDF</p>
                  </div>
                </div>
                <DownloadIcon className="w-5 h-5 text-text-muted group-hover:text-brand-primary transition-colors" />
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.3}>
          <div className="max-w-2xl mx-auto mt-8 p-6 bg-brand-soft rounded-2xl">
            <p className="text-text-secondary text-center">
              If you prefer not to email forms, let us know and we&apos;ll provide another way to submit them.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* Contact CTA */}
      <Section variant="soft" padding="lg">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-text-primary mb-4">
              Need help with forms?
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              We&apos;re happy to walk you through the process.
            </p>
            <Button href="/contact" variant="primary" icon={<ArrowRightIcon className="w-5 h-5" />} iconPosition="right">
              Contact
            </Button>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
