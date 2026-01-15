import type { Metadata } from "next";
import {
  PageHero,
  Section,
  Button,
  PhoneIcon,
  MailIcon,
  CalendarIcon,
  CheckCircleIcon,
} from "../components";
import { siteConfig } from "../config/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with KingGen Ministries. Schedule a free consultation, call us, or send a message. We're here to help.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        description="We're here to help. Reach out today and take the first step toward hope and healing."
      />

      {/* Contact Options Section */}
      <Section variant="light" padding="xl">
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Phone */}
          <a
            href={`tel:${siteConfig.phone}`}
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 card-hover text-center group"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-primary to-brand-secondary text-white flex items-center justify-center mx-auto mb-6 shadow-lg shadow-brand-primary/20 group-hover:scale-110 transition-transform">
              <PhoneIcon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold font-heading text-text-primary mb-2">
              Call Us
            </h3>
            <p className="text-text-secondary mb-4">
              Speak directly with our team
            </p>
            <p className="text-brand-primary font-semibold text-lg">
              {siteConfig.phone}
            </p>
          </a>

          {/* Email */}
          <a
            href={`mailto:${siteConfig.email}`}
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 card-hover text-center group"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-secondary to-brand-primary text-white flex items-center justify-center mx-auto mb-6 shadow-lg shadow-brand-secondary/20 group-hover:scale-110 transition-transform">
              <MailIcon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold font-heading text-text-primary mb-2">
              Email Us
            </h3>
            <p className="text-text-secondary mb-4">
              Send us a message anytime
            </p>
            <p className="text-brand-primary font-semibold">
              {siteConfig.email}
            </p>
          </a>

          {/* Schedule */}
          <a
            href={siteConfig.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 card-hover text-center group"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-accent to-brand-primary text-white flex items-center justify-center mx-auto mb-6 shadow-lg shadow-brand-accent/20 group-hover:scale-110 transition-transform">
              <CalendarIcon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold font-heading text-text-primary mb-2">
              Schedule Online
            </h3>
            <p className="text-text-secondary mb-4">
              Book an appointment online
            </p>
            <span className="text-brand-accent font-semibold">
              Book Appointment
            </span>
          </a>
        </div>

        {/* Main Contact Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info & Message */}
          <div>
            <div className="decorative-line mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-primary mb-6">
              We&apos;d Love to Hear From You
            </h2>
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              Whether you&apos;re seeking support for yourself, have questions about our services, or want
              to learn how you can help, we&apos;re here to listen. All inquiries are handled with care
              and confidentiality.
            </p>

            {/* What to Expect */}
            <div className="bg-brand-light rounded-2xl p-6 mb-8">
              <h3 className="font-bold font-heading text-text-primary mb-4">
                What to Expect
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                  <span className="text-text-secondary">
                    We&apos;ll respond to your inquiry within 24-48 hours
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                  <span className="text-text-secondary">
                    All communications are private and confidential
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                  <span className="text-text-secondary">
                    No pressure - we&apos;re here to help when you&apos;re ready
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                  <span className="text-text-secondary">
                    Initial consultations are always free
                  </span>
                </li>
              </ul>
            </div>

            {/* Crisis Notice */}
            <div className="bg-brand-soft rounded-2xl p-6 border-l-4 border-brand-accent">
              <h3 className="font-bold font-heading text-text-primary mb-2">
                Need Immediate Help?
              </h3>
              <p className="text-text-secondary mb-4">
                If you&apos;re in crisis or need immediate support, please don&apos;t hesitate to reach out
                directly by phone.
              </p>
              <Button
                href={`tel:${siteConfig.phone}`}
                variant="accent"
                size="sm"
                icon={<PhoneIcon className="w-4 h-4" />}
              >
                Call Now: {siteConfig.phone}
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold font-heading text-text-primary mb-6">
              Send Us a Message
            </h2>
            <form
              action={siteConfig.formspreeEndpoint}
              method="POST"
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-text-primary mb-2"
                >
                  Full Name <span className="text-brand-accent">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-text-primary mb-2"
                >
                  Email Address <span className="text-brand-accent">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-text-primary mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white transition-colors"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-text-primary mb-2"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white transition-colors"
                >
                  <option value="">Select a subject...</option>
                  <option value="counseling">I&apos;m Interested in Counseling</option>
                  <option value="appointment">Schedule an Appointment</option>
                  <option value="volunteer">Volunteer Opportunities</option>
                  <option value="donation">Donation Questions</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-text-primary mb-2"
                >
                  Your Message <span className="text-brand-accent">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white transition-colors resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <Button type="submit" variant="primary" fullWidth size="lg">
                Send Message
              </Button>

              <p className="text-xs text-text-muted text-center">
                Your information is safe with us. We will never share your details with third parties.
              </p>
            </form>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section variant="soft" padding="lg">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-text-primary mb-4">
            Questions About Reaching Out?
          </h2>
          <p className="text-lg text-text-secondary mb-8">
            We understand that taking the first step can feel overwhelming. Our team is compassionate,
            understanding, and ready to meet you wherever you are on your journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/services" variant="outline">
              View Our Services
            </Button>
            <Button href="/about" variant="ghost">
              Learn About Us
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
