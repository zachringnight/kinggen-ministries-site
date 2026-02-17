"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import {
  Section,
  Button,
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  FadeIn,
  CheckCircleIcon,
  AlertIcon,
  InnerPageHero,
} from "../components";
import { siteConfig } from "../config/site";

type SubmitState = "idle" | "submitting" | "success" | "error";

interface ContactFormData {
  reason: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  website: string;
}

type ContactFormErrors = Partial<Record<keyof ContactFormData | "form", string>>;

const initialFormData: ContactFormData = {
  reason: "referring-someone",
  name: "",
  email: "",
  phone: "",
  message: "",
  website: "",
};

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [formErrors, setFormErrors] = useState<ContactFormErrors>({});
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const hasConfiguredFormEndpoint =
    Boolean(siteConfig.formspreeEndpoint) &&
    !siteConfig.formspreeEndpoint.includes("your-form-id");

  const validateForm = (data: ContactFormData): ContactFormErrors => {
    const errors: ContactFormErrors = {};

    if (!data.name.trim()) {
      errors.name = "Please enter your name.";
    }

    const normalizedEmail = data.email.trim();
    if (!normalizedEmail) {
      errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      errors.email = "Please enter a valid email address.";
    }

    if (data.phone.trim() && !/^[+\d()\-\s.]{7,}$/.test(data.phone.trim())) {
      errors.phone = "Please enter a valid phone number.";
    }

    if (!data.message.trim()) {
      errors.message = "Please include a brief message.";
    } else if (data.message.trim().length < 20) {
      errors.message = "Please add at least 20 characters so we can help well.";
    }

    return errors;
  };

  const handleFieldChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    setFormErrors((prev) => {
      if (!prev[name as keyof ContactFormErrors] && !prev.form) return prev;
      return {
        ...prev,
        [name]: undefined,
        form: undefined,
      };
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errors = validateForm(formData);

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setSubmitState("error");
      setStatusMessage("Please correct the highlighted fields and try again.");
      return;
    }

    // Honeypot field for simple bot filtering.
    if (formData.website.trim()) {
      setSubmitState("success");
      setStatusMessage("Thank you. Your message has been received.");
      setFormData(initialFormData);
      setFormErrors({});
      return;
    }

    if (!hasConfiguredFormEndpoint) {
      const subject = `KingGen Contact (${formData.reason})`;
      const emailBody = [
        `Name: ${formData.name.trim()}`,
        `Email: ${formData.email.trim()}`,
        `Phone: ${formData.phone.trim() || "Not provided"}`,
        "",
        "Message:",
        formData.message.trim(),
      ].join("\n");

      window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
      setSubmitState("success");
      setStatusMessage("Your email app should open so you can send this message directly.");
      setFormData(initialFormData);
      setFormErrors({});
      return;
    }

    setSubmitState("submitting");
    setStatusMessage("");
    setFormErrors({});

    try {
      const response = await fetch(siteConfig.formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          reason: formData.reason,
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          message: formData.message.trim(),
          _subject: "New inquiry from KingGen website",
        }),
      });

      const payload = await response.json().catch(() => null);

      if (!response.ok) {
        const messageFromApi =
          payload?.errors?.[0]?.message || "We could not send your message right now. Please try again.";
        throw new Error(messageFromApi);
      }

      setSubmitState("success");
      setStatusMessage("Thank you for reaching out. We usually respond within 1-2 business days.");
      setFormData(initialFormData);
    } catch (error) {
      setSubmitState("error");
      setFormErrors((prev) => ({
        ...prev,
        form: error instanceof Error ? error.message : "Something went wrong while sending your message.",
      }));
      setStatusMessage("Your message was not sent. Please try again in a moment.");
    }
  };

  return (
    <>
      <InnerPageHero
        title="Contact KingGen"
        subtitle="Referral and partner inquiries are welcome."
        background="inner-logo"
        ariaLabel="Contact KingGen Ministries"
        showWatermarkCorners
      />

      {/* Note */}
      <Section variant="cross-light" padding="lg" watermark="none">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-text-secondary leading-relaxed">
              We often coordinate intake through referrers and ministry partners. If you are seeking support personally, we encourage you to ask a pastor, counselor, or trusted professional to submit a referral with you.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* Contact Form and Info */}
      <Section variant="art-cream" padding="xl" watermark="cross-subtle" ornamentLevel="featured">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <FadeIn direction="left">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-brand-light">
                <h2 className="text-2xl font-bold font-heading text-text-primary mb-6">
                  Referral &amp; Partner Contact
                </h2>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  noValidate
                >
                  <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={handleFieldChange}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="hidden"
                  />

                  {/* Reaching out as */}
                  <div>
                    <label
                      htmlFor="reason"
                      className="block text-sm font-medium text-text-primary mb-2"
                    >
                      I am contacting KingGen as:
                    </label>
                    <select
                      id="reason"
                      name="reason"
                      value={formData.reason}
                      onChange={handleFieldChange}
                      disabled={submitState === "submitting"}
                      className="w-full px-4 py-3 border border-brand-light rounded-xl bg-brand-soft focus:bg-white focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 transition-all outline-none"
                    >
                      <option value="referring-someone">Referring someone</option>
                      <option value="pastor-church-staff">Pastor or church staff</option>
                      <option value="professional-partner">Professional partner</option>
                      <option value="donor-partner">Donor or partner</option>
                      <option value="other">Other</option>
                    </select>
                    <p className="mt-2 text-xs text-text-muted">
                      For privacy and coordinated care, intake usually begins through a referrer.
                    </p>
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
                      value={formData.name}
                      onChange={handleFieldChange}
                      required
                      aria-invalid={Boolean(formErrors.name)}
                      aria-describedby={formErrors.name ? "name-error" : undefined}
                      disabled={submitState === "submitting"}
                      className="w-full px-4 py-3 border border-brand-light rounded-xl bg-brand-soft focus:bg-white focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 transition-all outline-none"
                      placeholder="Your name"
                    />
                    {formErrors.name && (
                      <p id="name-error" className="mt-2 text-sm text-red-700">
                        {formErrors.name}
                      </p>
                    )}
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
                      value={formData.email}
                      onChange={handleFieldChange}
                      required
                      aria-invalid={Boolean(formErrors.email)}
                      aria-describedby={formErrors.email ? "email-error" : undefined}
                      disabled={submitState === "submitting"}
                      className="w-full px-4 py-3 border border-brand-light rounded-xl bg-brand-soft focus:bg-white focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 transition-all outline-none"
                      placeholder="your@email.com"
                    />
                    {formErrors.email && (
                      <p id="email-error" className="mt-2 text-sm text-red-700">
                        {formErrors.email}
                      </p>
                    )}
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
                      value={formData.phone}
                      onChange={handleFieldChange}
                      aria-invalid={Boolean(formErrors.phone)}
                      aria-describedby={formErrors.phone ? "phone-error" : undefined}
                      disabled={submitState === "submitting"}
                      className="w-full px-4 py-3 border border-brand-light rounded-xl bg-brand-soft focus:bg-white focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 transition-all outline-none"
                      placeholder="(817) 555-1234"
                    />
                    {formErrors.phone && (
                      <p id="phone-error" className="mt-2 text-sm text-red-700">
                        {formErrors.phone}
                      </p>
                    )}
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
                      value={formData.message}
                      onChange={handleFieldChange}
                      rows={5}
                      required
                      maxLength={1500}
                      aria-invalid={Boolean(formErrors.message)}
                      aria-describedby={formErrors.message ? "message-error" : "message-help"}
                      disabled={submitState === "submitting"}
                      className="w-full px-4 py-3 border border-brand-light rounded-xl bg-brand-soft focus:bg-white focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/20 transition-all outline-none resize-none"
                      placeholder="How can we help you?"
                    />
                    <div id="message-help" className="mt-2 flex items-center justify-between text-xs text-text-muted">
                      <span>Please keep private details minimal in your first message.</span>
                      <span>{formData.message.length}/1500</span>
                    </div>
                    {formErrors.message && (
                      <p id="message-error" className="mt-2 text-sm text-red-700">
                        {formErrors.message}
                      </p>
                    )}
                  </div>

                  {submitState === "success" && (
                    <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">
                      <div className="flex items-start gap-3">
                        <CheckCircleIcon className="w-5 h-5 mt-0.5" />
                        <p className="text-sm">{statusMessage}</p>
                      </div>
                    </div>
                  )}

                  {(submitState === "error" || formErrors.form) && (
                    <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-800">
                      <div className="flex items-start gap-3">
                        <AlertIcon className="w-5 h-5 mt-0.5" />
                        <p className="text-sm">{formErrors.form || statusMessage}</p>
                      </div>
                    </div>
                  )}

                  <Button
                    type="submit"
                    variant="primary"
                    fullWidth
                    size="lg"
                    disabled={submitState === "submitting"}
                  >
                    {submitState === "submitting" ? "Sending..." : "Send Message"}
                  </Button>

                  <p className="text-xs text-text-muted text-center">
                    Your information is safe with us. We typically reply within 1-2 business days.
                  </p>
                  {!hasConfiguredFormEndpoint && (
                    <p className="text-xs text-text-muted text-center">
                      Online form routing is temporarily using your email app.
                    </p>
                  )}
                </form>
              </div>
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

              <div className="mt-8 rounded-2xl bg-white/85 border border-brand-light p-6 shadow-sm">
                <h3 className="font-bold font-heading text-xl text-text-primary mb-3">What Happens Next</h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li>1. We review your message and pray over your request.</li>
                  <li>2. We respond with next-step guidance (usually within 1-2 business days).</li>
                  <li>3. If needed, we help route you to the right support path.</li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
