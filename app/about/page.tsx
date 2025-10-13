import { siteConfig } from "../config/site";

export default function AboutPage() {
  return (
    <div>
      <section className="bg-brand-primary text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold font-heading text-center">
            About {siteConfig.name}
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg mx-auto">
            <h2 className="text-3xl font-bold font-heading mb-6">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              At {siteConfig.name}, we are a 501(c)(3) non-profit organization dedicated to
              providing Gospel-centered clinical pastoral counseling to women in need. Our licensed
              clinical pastoral counselors offer professional, compassionate support—completely free
              of charge. Through the generosity of our donors, we are able to serve women seeking
              spiritual guidance, emotional healing, and hope during difficult seasons of life.
            </p>

            <h2 className="text-3xl font-bold font-heading mb-6 mt-12">
              Meet Pastor LeeAnn
            </h2>
            <p className="text-gray-700 mb-6">
              Pastor LeeAnn is a licensed clinical pastoral counselor with a passion for
              helping women discover healing, hope, and purpose through Christ. With years
              of experience in ministry and counseling, she creates a safe, non-judgmental
              space where women can share their struggles and find the support they need.
              Her approach integrates psychological principles with biblical wisdom, addressing
              both emotional and spiritual needs.
            </p>

            <h2 className="text-3xl font-bold font-heading mb-6 mt-12">
              What We Offer
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
              <li>Clinical pastoral counseling for women</li>
              <li>Gospel-centered guidance and support</li>
              <li>Crisis intervention and emotional care</li>
              <li>Grief and loss counseling</li>
              <li>Anxiety and depression support</li>
              <li>Spiritual direction and prayer ministry</li>
            </ul>
            <p className="text-gray-700 mb-6 font-semibold">
              All services are provided free of charge, made possible by the generous
              donations of supporters who believe in our mission.
            </p>

            <h2 className="text-3xl font-bold font-heading mb-6 mt-12">
              Our Values
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Faith</h3>
                <p className="text-gray-700">
                  Grounded in Scripture and centered on Christ
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Compassion</h3>
                <p className="text-gray-700">
                  Meeting people where they are with grace and understanding
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Integrity</h3>
                <p className="text-gray-700">
                  Honest, transparent, and trustworthy in all we do
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-gray-700">
                  Committed to providing the highest quality care
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-heading mb-4">
            Connect With Us
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            We&apos;d love to hear from you and discuss how we can support your spiritual
            journey.
          </p>
          <a
            href="/contact"
            className="inline-block bg-brand-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
