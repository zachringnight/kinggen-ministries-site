"use client";

import {
  Section,
  SectionHeader,
  Button,
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  QuoteIcon,
  FadeIn,
  TiltCard,
  PageHero,
} from "../components";
import { siteConfig } from "../config/site";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        title="Contact Us"
        description="Whether you're reaching out for yourself, referring someone, or asking about donating, please contact us. We will respond as soon as possible."
        background="kinggen-branded"
        showStones={true}
        stonesPosition="both"
      />

      {/* Brief note */}
      <Section variant="warm-cream" padding="sm" watermark="none">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center py-4">
            <QuoteIcon className="w-5 h-5 text-brand-accent/40 mx-auto mb-3" />
            <p className="text-lg text-text-secondary italic font-heading leading-relaxed">
              Please keep your first message brief. We&apos;ll follow up for details.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* Contact Form and Info */}
      <Section variant="default" padding="xl" watermark="none">
        <SectionHeader
          title="Get in touch"
          subtitle="Send us a message or reach out directly. We look forward to hearing from you."
        />

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 max-w-6xl mx-auto">
          {/* Contact Form - takes 3 columns */}
          <FadeIn direction="left" className="lg:col-span-3">
            <TiltCard tiltAmount={2}>
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-brand-lg border border-brand-light/30">
                <h2 className="text-2xl md:text-3xl font-bold font-heading text-text-primary mb-2">
                  Send Us a Message
                </h2>
                <p className="text-text-muted text-sm mb-8">
                  All fields are optional except email.
                </p>

                <form
                  action={siteConfig.formspreeEndpoint}
                  method="POST"
                  className="space-y-5"
                >
                  {/* Reaching out as */}
                  <div>
                    <label
                      htmlFor="reason"
                      className="block text-sm font-semibold text-text-primary mb-2"
                    >
                      I am reaching out as:
                    </label>
                    <select
                      id="reason"
                      name="reason"
                      className="w-full px-5 py-3.5 border border-brand-light/60 rounded-xl bg-brand-soft/50 focus:bg-white focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 transition-all duration-200 outline-none text-text-primary"
                    >
                      <option value="seeking-support">Seeking support</option>
                      <option value="referring-someone">Referring someone</option>
                      <option value="donor-partner">Donor or partner</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-text-primary mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-5 py-3.5 border border-brand-light/60 rounded-xl bg-brand-soft/50 focus:bg-white focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 transition-all duration-200 outline-none text-text-primary placeholder:text-text-muted/60"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-text-primary mb-2"
                    >
                      Email <span className="text-brand-accent">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-5 py-3.5 border border-brand-light/60 rounded-xl bg-brand-soft/50 focus:bg-white focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 transition-all duration-200 outline-none text-text-primary placeholder:text-text-muted/60"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-text-primary mb-2"
                    >
                      Phone <span className="text-text-muted font-normal">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-5 py-3.5 border border-brand-light/60 rounded-xl bg-brand-soft/50 focus:bg-white focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 transition-all duration-200 outline-none text-text-primary placeholder:text-text-muted/60"
                      placeholder="(817) 555-1234"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-text-primary mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-5 py-3.5 border border-brand-light/60 rounded-xl bg-brand-soft/50 focus:bg-white focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 transition-all duration-200 outline-none resize-none text-text-primary placeholder:text-text-muted/60"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <Button type="submit" variant="primary" fullWidth size="lg" className="!rounded-full">
                      Send Message
                    </Button>
                  </div>

                  <p className="text-xs text-text-muted text-center pt-1">
                    Your information is safe with us.
                  </p>
                </form>
              </div>
            </TiltCard>
          </FadeIn>

          {/* Direct Contact - takes 2 columns */}
          <FadeIn direction="right" className="lg:col-span-2">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-heading text-text-primary mb-2">
                Direct contact
              </h2>
              <p className="text-text-muted text-sm mb-8">
                Prefer to reach us another way? Here is how.
              </p>

              <div className="space-y-5">
                {/* Email card */}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="group block p-6 bg-white rounded-2xl shadow-brand border border-brand-light/30 hover:shadow-brand-lg hover:border-brand-accent/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-sage-light text-brand-primary flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300 flex-shrink-0">
                      <MailIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">Email</p>
                      <p className="font-semibold text-text-primary group-hover:text-brand-primary transition-colors">{siteConfig.email}</p>
                    </div>
                  </div>
                </a>

                {/* Phone card */}
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="group block p-6 bg-white rounded-2xl shadow-brand border border-brand-light/30 hover:shadow-brand-lg hover:border-brand-accent/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-sage-light text-brand-primary flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300 flex-shrink-0">
                      <PhoneIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">Phone</p>
                      <p className="font-semibold text-text-primary group-hover:text-brand-primary transition-colors">{siteConfig.phone}</p>
                    </div>
                  </div>
                </a>

                {/* Mailing Address card */}
                <div className="p-6 bg-white rounded-2xl shadow-brand border border-brand-light/30">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-sage-light text-brand-primary flex items-center justify-center flex-shrink-0">
                      <MapPinIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">Mailing Address</p>
                      <address className="font-semibold text-text-primary not-italic leading-relaxed">
                        {siteConfig.address.line1}<br />
                        {siteConfig.address.line2}<br />
                        {siteConfig.address.line3}<br />
                        {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                      </address>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
