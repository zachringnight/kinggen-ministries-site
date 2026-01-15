import Link from "next/link";
import { siteConfig } from "./config/site";
import {
  Hero,
  Section,
  SectionHeader,
  FeatureCard,
  TestimonialCard,
  Button,
  HeartIcon,
  CrossIcon,
  UsersIcon,
  ShieldIcon,
  SparklesIcon,
  BookOpenIcon,
  PhoneIcon,
  CalendarIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  GiftIcon,
} from "./components";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        subtitle="Gospel-Centered Clinical Pastoral Counseling"
        title={
          <>
            Hope and Healing for{" "}
            <span className="text-brand-accent">Every Woman</span>
          </>
        }
        description="We provide free, professional clinical pastoral counseling rooted in faith and compassion. You don't have to walk this journey alone."
        primaryCTA={{ text: "Get Support Today", href: "/contact" }}
        secondaryCTA={{ text: "Learn More", href: "/about" }}
        size="large"
      >
        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-white/80 text-sm">
          <div className="flex items-center gap-2">
            <CheckCircleIcon className="w-5 h-5 text-brand-accent" />
            <span>Licensed Counselors</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircleIcon className="w-5 h-5 text-brand-accent" />
            <span>100% Free Services</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircleIcon className="w-5 h-5 text-brand-accent" />
            <span>Confidential & Safe</span>
          </div>
        </div>
      </Hero>

      {/* What We Offer Section */}
      <Section variant="light" padding="xl">
        <SectionHeader
          title="What We Offer"
          subtitle="Compassionate, faith-based support for women facing life's challenges. Our licensed pastoral counselors are here to help."
        />

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<HeartIcon className="w-8 h-8" />}
            title="Clinical Pastoral Counseling"
            description="Professional counseling services that integrate clinical expertise with spiritual care, addressing the whole person."
          />
          <FeatureCard
            icon={<GiftIcon className="w-8 h-8" />}
            title="Always Free"
            description="All our services are provided at no cost. We believe financial barriers should never prevent anyone from receiving help."
          />
          <FeatureCard
            icon={<UsersIcon className="w-8 h-8" />}
            title="For Women in Need"
            description="A safe, supportive environment specifically designed to serve women seeking guidance and emotional healing."
          />
        </div>
      </Section>

      {/* Mission Section */}
      <Section variant="default" padding="xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="decorative-line mb-6" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-text-primary mb-6">
              Rooted in Faith,{" "}
              <span className="gradient-text">Committed to Care</span>
            </h2>
            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              At KingGen Ministries, we believe that true healing comes through the integration of professional care and spiritual guidance. Our mission is to walk alongside women during their most challenging moments, offering hope, understanding, and a path forward.
            </p>
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              Led by Pastor LeeAnn, a licensed clinical pastoral counselor with years of experience in both ministry and counseling, we are committed to providing the highest quality care in a confidential, compassionate environment.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button href="/about" variant="primary" icon={<ArrowRightIcon className="w-5 h-5" />} iconPosition="right">
                Our Story
              </Button>
              <Button href="/services" variant="outline">
                Our Services
              </Button>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-brand-light rounded-2xl p-6 card-hover">
              <CrossIcon className="w-10 h-10 text-brand-primary mb-4" />
              <h3 className="font-bold font-heading text-text-primary mb-2">Faith</h3>
              <p className="text-sm text-text-secondary">Grounded in Scripture and centered on Christ</p>
            </div>
            <div className="bg-brand-soft rounded-2xl p-6 card-hover">
              <HeartIcon className="w-10 h-10 text-brand-primary mb-4" />
              <h3 className="font-bold font-heading text-text-primary mb-2">Compassion</h3>
              <p className="text-sm text-text-secondary">Meeting you where you are with grace</p>
            </div>
            <div className="bg-brand-soft rounded-2xl p-6 card-hover">
              <ShieldIcon className="w-10 h-10 text-brand-primary mb-4" />
              <h3 className="font-bold font-heading text-text-primary mb-2">Integrity</h3>
              <p className="text-sm text-text-secondary">Honest, transparent, and trustworthy</p>
            </div>
            <div className="bg-brand-light rounded-2xl p-6 card-hover">
              <SparklesIcon className="w-10 h-10 text-brand-primary mb-4" />
              <h3 className="font-bold font-heading text-text-primary mb-2">Excellence</h3>
              <p className="text-sm text-text-secondary">Committed to the highest quality care</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Services Preview Section */}
      <Section variant="soft" padding="xl">
        <SectionHeader
          title="How We Can Help"
          subtitle="Our services are designed to meet you wherever you are on your journey toward healing and wholeness."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm card-hover border border-gray-100">
            <div className="w-12 h-12 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-4">
              <HeartIcon className="w-6 h-6" />
            </div>
            <h3 className="font-bold font-heading text-text-primary mb-2">Crisis Support</h3>
            <p className="text-sm text-text-secondary mb-4">Immediate help during difficult times</p>
            <Link href="/services#crisis" className="text-brand-primary font-medium text-sm hover:underline inline-flex items-center gap-1">
              Learn more <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm card-hover border border-gray-100">
            <div className="w-12 h-12 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-4">
              <BookOpenIcon className="w-6 h-6" />
            </div>
            <h3 className="font-bold font-heading text-text-primary mb-2">Grief Counseling</h3>
            <p className="text-sm text-text-secondary mb-4">Support through loss and mourning</p>
            <Link href="/services#grief" className="text-brand-primary font-medium text-sm hover:underline inline-flex items-center gap-1">
              Learn more <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm card-hover border border-gray-100">
            <div className="w-12 h-12 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-4">
              <SparklesIcon className="w-6 h-6" />
            </div>
            <h3 className="font-bold font-heading text-text-primary mb-2">Spiritual Direction</h3>
            <p className="text-sm text-text-secondary mb-4">Guidance for your faith journey</p>
            <Link href="/services#spiritual" className="text-brand-primary font-medium text-sm hover:underline inline-flex items-center gap-1">
              Learn more <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm card-hover border border-gray-100">
            <div className="w-12 h-12 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-4">
              <ShieldIcon className="w-6 h-6" />
            </div>
            <h3 className="font-bold font-heading text-text-primary mb-2">Anxiety & Depression</h3>
            <p className="text-sm text-text-secondary mb-4">Help managing life&apos;s struggles</p>
            <Link href="/services#anxiety" className="text-brand-primary font-medium text-sm hover:underline inline-flex items-center gap-1">
              Learn more <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button href="/services" variant="primary" size="lg" icon={<ArrowRightIcon className="w-5 h-5" />} iconPosition="right">
            View All Services
          </Button>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section variant="default" padding="xl">
        <SectionHeader
          title="Stories of Hope"
          subtitle="Hear from women whose lives have been touched by our ministry."
        />

        <div className="grid md:grid-cols-3 gap-8">
          <TestimonialCard
            quote="I came to KingGen Ministries feeling completely lost. Pastor LeeAnn helped me find my way back to hope and faith. I'm forever grateful."
            author="Sarah M."
            role="Program Participant"
          />
          <TestimonialCard
            quote="The counseling I received was life-changing. It was a blessing to find professional help that also understood and supported my faith."
            author="Jennifer L."
            role="Program Participant"
          />
          <TestimonialCard
            quote="In my darkest moment, KingGen was there. The compassion and care I experienced reminded me that I was not alone."
            author="Maria R."
            role="Program Participant"
          />
        </div>
      </Section>

      {/* Impact Stats Section */}
      <Section variant="primary" padding="xl">
        <div className="text-center mb-12">
          <div className="decorative-line mx-auto mb-6" style={{ background: "linear-gradient(90deg, #c9a227, #fff)" }} />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white mb-4">
            Making a Difference
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Through the generosity of our donors, we continue to serve women in need every day.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6">
            <p className="text-5xl md:text-6xl font-bold font-heading text-white mb-2">500+</p>
            <p className="text-white/80">Women Served</p>
          </div>
          <div className="text-center p-6">
            <p className="text-5xl md:text-6xl font-bold font-heading text-white mb-2">100%</p>
            <p className="text-white/80">Free Services</p>
          </div>
          <div className="text-center p-6">
            <p className="text-5xl md:text-6xl font-bold font-heading text-white mb-2">10+</p>
            <p className="text-white/80">Years of Ministry</p>
          </div>
          <div className="text-center p-6">
            <p className="text-5xl md:text-6xl font-bold font-heading text-white mb-2">1000+</p>
            <p className="text-white/80">Counseling Sessions</p>
          </div>
        </div>
      </Section>

      {/* Call to Action Section */}
      <Section variant="default" padding="xl">
        <div className="bg-gradient-to-br from-brand-light to-brand-soft rounded-3xl p-8 md:p-12 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-primary mb-4">
                Ready to Take the First Step?
              </h2>
              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                Whether you&apos;re seeking support for yourself or want to learn more about our ministry, we&apos;re here for you. Reach out today and begin your journey toward hope and healing.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  href={`tel:${siteConfig.phone}`}
                  variant="primary"
                  size="lg"
                  icon={<PhoneIcon className="w-5 h-5" />}
                >
                  Call Us Now
                </Button>
                <Button
                  href="/contact"
                  variant="outline"
                  size="lg"
                  icon={<CalendarIcon className="w-5 h-5" />}
                >
                  Schedule Appointment
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold font-heading text-text-primary mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-brand-light hover:bg-brand-light/70 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-primary text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    <PhoneIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-text-muted">Call us</p>
                    <p className="font-semibold text-text-primary">{siteConfig.phone}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-brand-light hover:bg-brand-light/70 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-secondary text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-text-muted">Email us</p>
                    <p className="font-semibold text-text-primary">{siteConfig.email}</p>
                  </div>
                </a>

                <Link
                  href="/contact"
                  className="flex items-center gap-4 p-4 rounded-xl bg-brand-light hover:bg-brand-light/70 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-accent text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    <CalendarIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-text-muted">Book online</p>
                    <p className="font-semibold text-text-primary">Schedule Appointment</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Donation CTA Section */}
      <Section variant="soft" padding="lg">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-text-primary mb-4">
            Support Our Mission
          </h2>
          <p className="text-lg text-text-secondary mb-8">
            Your generous donation helps us continue providing free counseling services to women in need. Every gift makes a difference.
          </p>
          <Button href="/donate" variant="accent" size="lg" icon={<HeartIcon className="w-5 h-5" />}>
            Make a Donation
          </Button>
        </div>
      </Section>
    </>
  );
}
