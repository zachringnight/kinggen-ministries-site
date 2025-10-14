import Link from "next/link";
import { siteConfig } from "./config/site";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold font-heading mb-4">
            Welcome to {siteConfig.name}
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {siteConfig.description}
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-brand-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Get in Touch
            </Link>
            <Link
              href="/donate"
              className="bg-brand-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
            >
              Support Our Mission
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-heading text-center mb-8">
            Our Ministry
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-brand-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Clinical Pastoral Counseling</h3>
              <p className="text-gray-600">
                Licensed clinical pastoral counselors providing professional, Gospel-centered support.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-brand-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Services</h3>
              <p className="text-gray-600">
                All counseling services provided at no cost, sustained by generous donations.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-brand-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Women in Need</h3>
              <p className="text-gray-600">
                Dedicated to serving women seeking spiritual guidance and emotional support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-heading mb-4">
            Ready to Connect?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Schedule a consultation or reach out with any questions.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href={`tel:${siteConfig.phone}`}
              className="bg-brand-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
            >
              Call Us
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="bg-brand-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
            >
              Email Us
            </a>
            <Link
              href="/contact"
              className="bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              Schedule Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
