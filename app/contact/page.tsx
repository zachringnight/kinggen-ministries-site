"use client";

import {
  Section,
  Button,
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  FadeIn,
  TiltCard,
  PageHero,
} from "../components";
import { siteConfig } from "../config/site";

export default function ContactPage() {
  return (
    <>
      {/* Hero Section with cross-branded background */}
      <PageHero
        title="Contact Us"
        description="Whether you're reaching out for yourself, referring someone, or asking about donating, please contact us. We will respond as soon as possible."
        background="cross-branded"
        showStones={true}
        stonesPosition="both"
        showCross={true}
      />

      {/* Note */}
      <Section variant="cross-light" padding="lg" watermark="none">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-text-secondary leading-relaxed">
              Please keep your first message brief. We&apos;ll follow up for details.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* Contact Form and Info */}
      <Section variant="art-cream" padding="xl" watermark="cross-subtle">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <FadeIn direction="left">
            <TiltCard tiltAmount={3}>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-brand-light">
                <h2 className="text-2xl font-bold font-heading text-text-primary mb-6">
                  Send Us a Message
                </h2>
                <form
                  action={siteConfig.formspreeEndpoint}
                  method="POST"
                  className="space-y-6"
                >
                  {/* Reaching out as */}
                  <div>
                    <label
                      htmlFor="reason"
                      className="block text-sm font-medium text-text-primary mb-2"
                    >
                      I am reaching out as:
                    </label>
                    <select
                      id="reason"
                      name="reason"
                      className="w-full px-4 py-3 border border-brand-light rounded-xl bg-brand-soft focus:bg-white focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 transition-all outline-none"
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
                      className="block text-sm font-medium text-text-primary mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 border border-brand-light rounded-xl bg-brand-soft focus:bg-white focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 transition-all outline-none"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-text-primary mb-2"
                    >
                      Email <span className="text-brand-accent">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-brand-light rounded-xl bg-brand-soft focus:bg-white focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 transition-all outline-none"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-text-primary mb-2"
                    >
                      Phone (optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-brand-light rounded-xl bg-brand-soft focus:bg-white focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 transition-all outline-none"
                      placeholder="(817) 555-1234"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-text-primary mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3 border border-brand-light rounded-xl bg-brand-soft focus:bg-white focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 transition-all outline-none resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <Button type="submit" variant="primary" fullWidth size="lg">
                    Send Message
                  </Button>

                  <p className="text-xs text-text-muted text-center">
                    Your information is safe with us.
                  </p>
                </form>
              </div>
            </TiltCard>
          </FadeIn>

          {/* Direct Contact */}
          <FadeIn direction="right">
            <div>
              <h2 className="text-2xl font-bold font-heading text-text-primary mb-6">
                Direct contact
              </h2>

              <div className="space-y-6">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-brand-light hover:shadow-md hover:border-brand-primary/20 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-light text-brand-primary flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-colors">
                    <MailIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-text-muted mb-1">Email</p>
                    <p className="font-medium text-text-primary">{siteConfig.email}</p>
                  </div>
                </a>

                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-brand-light hover:shadow-md hover:border-brand-primary/20 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-light text-brand-primary flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-colors">
                    <PhoneIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-text-muted mb-1">Phone</p>
                    <p className="font-medium text-text-primary">{siteConfig.phone}</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-brand-light">
                  <div className="w-12 h-12 rounded-xl bg-brand-light text-brand-primary flex items-center justify-center">
                    <MapPinIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-text-muted mb-1">Mailing Address</p>
                    <address className="font-medium text-text-primary not-italic">
                      {siteConfig.address.line1}<br />
                      {siteConfig.address.line2}<br />
                      {siteConfig.address.line3}<br />
                      {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                    </address>
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
