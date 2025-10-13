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
              At {siteConfig.name}, we are dedicated to empowering individuals and
              families through faith-based pastoral care and ministry. Our mission is
              to provide compassionate support, biblical guidance, and spiritual
              resources to help people navigate life&apos;s challenges and grow in their
              relationship with God.
            </p>

            <h2 className="text-3xl font-bold font-heading mb-6 mt-12">
              Meet Pastor LeeAnn
            </h2>
            <p className="text-gray-700 mb-6">
              With years of experience in pastoral ministry, Pastor LeeAnn brings a
              heart for service and a commitment to helping others discover God&apos;s
              purpose for their lives. Her approach combines theological depth with
              practical wisdom, creating a safe space for spiritual growth and
              healing.
            </p>

            <h2 className="text-3xl font-bold font-heading mb-6 mt-12">
              What We Offer
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
              <li>Individual and family pastoral counseling</li>
              <li>Biblical teaching and discipleship</li>
              <li>Prayer ministry and spiritual guidance</li>
              <li>Life coaching from a Christian perspective</li>
              <li>Crisis intervention and support</li>
              <li>Wedding and funeral services</li>
            </ul>

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
