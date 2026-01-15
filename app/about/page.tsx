import type { Metadata } from "next";
import {
  PageHero,
  Section,
  SectionHeader,
  Button,
  HeartIcon,
  CrossIcon,
  ShieldIcon,
  SparklesIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  BookOpenIcon,
} from "../components";
import { siteConfig } from "../config/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about KingGen Ministries, our mission to provide free gospel-centered clinical pastoral counseling for women, and meet Pastor LeeAnn.",
};

const values = [
  {
    icon: <CrossIcon className="w-8 h-8" />,
    title: "Faith",
    description:
      "Every aspect of our ministry is grounded in Scripture and centered on the redemptive love of Jesus Christ. We believe that true healing begins with faith.",
  },
  {
    icon: <HeartIcon className="w-8 h-8" />,
    title: "Compassion",
    description:
      "We meet every woman where she is, without judgment. Our approach is rooted in grace, understanding, and genuine care for each individual's unique journey.",
  },
  {
    icon: <ShieldIcon className="w-8 h-8" />,
    title: "Integrity",
    description:
      "We maintain the highest ethical standards in all we do. Trust, honesty, and transparency are foundational to our relationships with those we serve.",
  },
  {
    icon: <SparklesIcon className="w-8 h-8" />,
    title: "Excellence",
    description:
      "We are committed to providing the highest quality care through professional training, continued education, and a dedication to best practices.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Our Ministry"
        description="A story of faith, compassion, and dedication to serving women in need."
      />

      {/* Mission Section */}
      <Section variant="light" padding="xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="decorative-line mb-6" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-text-primary mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              At {siteConfig.name}, we are a 501(c)(3) nonprofit organization dedicated to providing
              Gospel-centered clinical pastoral counseling to women in need. Our mission is simple but
              profound: to walk alongside women during their most challenging moments, offering hope,
              understanding, and a path forward through the love of Christ.
            </p>
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              We believe that every woman deserves access to professional, compassionate care—regardless
              of her financial circumstances. That&apos;s why all of our services are provided completely free
              of charge, made possible through the generosity of our donors and supporters.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                href="/services"
                variant="primary"
                icon={<ArrowRightIcon className="w-5 h-5" />}
                iconPosition="right"
              >
                Our Services
              </Button>
              <Button href="/contact" variant="outline">
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Mission Highlights */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 card-hover">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-accent/10 text-brand-accent flex items-center justify-center flex-shrink-0">
                  <CheckCircleIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold font-heading text-text-primary mb-2">
                    Licensed Professional Counselors
                  </h3>
                  <p className="text-text-secondary">
                    Our team consists of licensed clinical pastoral counselors trained in both
                    psychological principles and biblical wisdom.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 card-hover">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center flex-shrink-0">
                  <HeartIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold font-heading text-text-primary mb-2">
                    100% Free Services
                  </h3>
                  <p className="text-text-secondary">
                    Financial barriers should never prevent anyone from receiving help. All services
                    are provided at no cost.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 card-hover">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-secondary/10 text-brand-secondary flex items-center justify-center flex-shrink-0">
                  <ShieldIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold font-heading text-text-primary mb-2">
                    Safe & Confidential
                  </h3>
                  <p className="text-text-secondary">
                    We provide a safe, confidential environment where women can share their struggles
                    without fear of judgment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Pastor LeeAnn Section */}
      <Section variant="default" padding="xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Portrait placeholder */}
          <div className="order-2 lg:order-1">
            <div className="bg-gradient-to-br from-brand-light to-brand-soft rounded-3xl p-8 lg:p-12 relative">
              <div className="absolute top-4 right-4 w-24 h-24 bg-brand-accent/10 rounded-full blur-2xl" />
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center mx-auto mb-8">
                  <span className="text-5xl text-white font-bold font-heading">L</span>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold font-heading text-text-primary mb-2">
                    Pastor LeeAnn
                  </h3>
                  <p className="text-brand-accent font-medium mb-4">
                    Licensed Clinical Pastoral Counselor
                  </p>
                  <p className="text-text-secondary leading-relaxed">
                    &ldquo;My calling is to help women discover that they are not alone in their struggles.
                    Through faith and professional care, I believe every woman can find healing, hope,
                    and a renewed sense of purpose.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="decorative-line mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-primary mb-6">
              Meet Pastor LeeAnn
            </h2>
            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Pastor LeeAnn is the heart of KingGen Ministries. As a licensed clinical pastoral
              counselor with years of experience in ministry and professional counseling, she brings
              a unique blend of clinical expertise and spiritual wisdom to her practice.
            </p>
            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Her approach integrates psychological principles with biblical wisdom, addressing both
              emotional and spiritual needs. She creates a safe, non-judgmental space where women can
              share their deepest struggles and find the support they need to move forward.
            </p>
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              Pastor LeeAnn&apos;s passion for helping women stems from her own journey of faith and her
              belief that God can redeem even the darkest circumstances. She has dedicated her life
              to being a vessel of His grace and healing.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-brand-light rounded-xl p-4 text-center">
                <p className="text-2xl font-bold font-heading text-brand-primary">10+</p>
                <p className="text-sm text-text-secondary">Years of Experience</p>
              </div>
              <div className="bg-brand-soft rounded-xl p-4 text-center">
                <p className="text-2xl font-bold font-heading text-brand-primary">500+</p>
                <p className="text-sm text-text-secondary">Women Served</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section variant="soft" padding="xl">
        <SectionHeader
          title="Our Core Values"
          subtitle="These principles guide everything we do at KingGen Ministries."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 card-hover text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-primary to-brand-secondary text-white flex items-center justify-center mx-auto mb-6 shadow-lg shadow-brand-primary/20">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold font-heading text-text-primary mb-3">
                {value.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* What We Believe Section */}
      <Section variant="default" padding="xl">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="What We Believe"
            subtitle="Our ministry is built on foundational biblical principles."
          />

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-accent/20 text-brand-accent flex items-center justify-center flex-shrink-0 mt-1">
                <BookOpenIcon className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold font-heading text-text-primary mb-2">
                  Scripture as Our Foundation
                </h3>
                <p className="text-text-secondary">
                  We believe the Bible is the inspired Word of God and the ultimate authority for
                  faith and life. Our counseling approach is rooted in biblical truth.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-primary/20 text-brand-primary flex items-center justify-center flex-shrink-0 mt-1">
                <HeartIcon className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold font-heading text-text-primary mb-2">
                  Christ-Centered Healing
                </h3>
                <p className="text-text-secondary">
                  We believe that Jesus Christ offers hope, redemption, and healing to all who come
                  to Him. Our counseling points women toward the transformative power of His love.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-secondary/20 text-brand-secondary flex items-center justify-center flex-shrink-0 mt-1">
                <SparklesIcon className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold font-heading text-text-primary mb-2">
                  The Value of Every Person
                </h3>
                <p className="text-text-secondary">
                  We believe every person is created in the image of God and has inherent worth and
                  dignity. Every woman who comes to us is treated with respect and compassion.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-accent/20 text-brand-accent flex items-center justify-center flex-shrink-0 mt-1">
                <ShieldIcon className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold font-heading text-text-primary mb-2">
                  Integration of Faith and Professional Care
                </h3>
                <p className="text-text-secondary">
                  We believe that excellent clinical care and deep faith work together. Our
                  counselors are trained professionals who integrate psychological insights with
                  spiritual wisdom.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section variant="primary" padding="xl">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-white/80 mb-10">
            Whether you&apos;re seeking support or want to help us serve more women in need, we&apos;d love to
            connect with you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="white" size="lg">
              Get Support
            </Button>
            <Button href="/donate" variant="accent" size="lg">
              Support Our Ministry
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
