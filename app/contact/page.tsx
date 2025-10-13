import { siteConfig } from "../config/site";

export default function ContactPage() {
  return (
    <div>
      <section className="bg-brand-primary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold font-heading text-center">
            Contact Us
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold font-heading mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-700 mb-8">
                We&apos;re here to help and answer any questions you might have. We look
                forward to hearing from you!
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Phone</h3>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="text-brand-primary hover:underline"
                  >
                    {siteConfig.phone}
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-brand-primary hover:underline"
                  >
                    {siteConfig.email}
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Schedule an Appointment
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Book a time that works for you using our online scheduler.
                  </p>
                  <a
                    href={siteConfig.calendlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-brand-accent text-white px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition"
                  >
                    Book Appointment
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold font-heading mb-6">
                Send a Message
              </h2>
              <form
                action={siteConfig.formspreeEndpoint}
                method="POST"
                className="space-y-4"
              >
                <div>
                  <label htmlFor="name" className="block font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block font-medium mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
