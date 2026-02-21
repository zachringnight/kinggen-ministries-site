import type { Metadata } from "next";
import {
  Button,
  Section,
  FadeIn,
  StaggerContainer,
  StaggerItem,
  ArrowRightIcon,
  HeartIcon,
  CrossIcon,
  ShieldIcon,
  UsersIcon,
  CheckCircleIcon,
  InnerPageHero,
  OptimizedBackground,
} from "../components";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore KingGen Ministries counseling services, including Gospel-centered support for anxiety, grief, trauma, relationships, and spiritual growth.",
};

const services = [
  {
    icon: HeartIcon,
    title: "Individual Pastoral Counseling",
    description:
      "Gospel-centered support for anxiety, stress, grief, and life transitions. Offered at no cost.",
  },
  {
    icon: CrossIcon,
    title: "Grief & Loss Care",
    description:
      "Walking through grief, loss, and the seasons that follow with compassion and Scripture.",
  },
  {
    icon: ShieldIcon,
    title: "Trauma & Crisis Support",
    description:
      "Confidential, trauma-informed care for women in crisis or walking through deep pain.",
  },
  {
    icon: UsersIcon,
    title: "Relationship & Family Support",
    description:
      "Help navigating relationship pain, family conflict, and communication challenges.",
  },
  {
    icon: CheckCircleIcon,
    title: "Spiritual Care & Growth",
    description:
      "Support for spiritual discouragement, faith questions, and deepening your walk with God.",
  },
  {
    icon: ArrowRightIcon,
    title: "Boundaries, Identity & Confidence",
    description:
      "Practical guidance for setting healthy boundaries, reclaiming identity, and rebuilding confidence.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <InnerPageHero
        title="Our Services"
        subtitle="Compassionate, Gospel-centered counseling at no cost to clients."
        background="inner-logo"
        ariaLabel="Our Services"
        showWatermarkCorners
      />

      {/* Services Grid */}
      <Section variant="art-cream" padding="xl" watermark="cross-subtle" ornamentLevel="featured">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <div className="flex justify-center mb-4">
              <CrossIcon className="w-6 h-6 text-brand-primary/50" strokeWidth={1.5} />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-text-primary mb-4">
              How we can help
            </h2>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              Every woman&apos;s story is different. Our services are tailored to meet you where you are with compassion, confidentiality, and Gospel-centered care.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={i}>
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-brand-light h-full flex flex-col group hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-brand-primary flex items-center justify-center mb-5 shadow-lg group-hover:bg-brand-accent transition-colors duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold font-heading text-text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-text-secondary leading-relaxed flex-grow">
                    {service.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Section>

      {/* Approach Note */}
      <Section variant="cross-light" padding="lg" watermark="none">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-text-primary mb-4">
              Our approach
            </h2>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              Sessions are led by a licensed clinical pastoral counselor and grounded in Scripture. We meet women with kindness, at their own pace, and walk alongside them toward healing and hope.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* Contact CTA */}
      <section
        className="relative brand-surface-dark py-16 md:py-24 overflow-hidden"
        style={{
          backgroundImage: "url('/brand/social/cta-testimonial-section-bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Logo art accents */}
        <OptimizedBackground
          src="/brand/logo/icon-white.webp"
          className="absolute left-0 bottom-0 w-48 h-48 md:w-64 md:h-64 bg-no-repeat pointer-events-none"
          style={{
            backgroundPosition: "left bottom",
            backgroundSize: "contain",
            opacity: 0.15,
          }}
        />
        <OptimizedBackground
          src="/brand/logo/icon-white.webp"
          className="absolute right-0 top-0 w-40 h-40 md:w-56 md:h-56 bg-no-repeat pointer-events-none"
          style={{
            backgroundPosition: "right top",
            backgroundSize: "contain",
            opacity: 0.12,
          }}
        />

        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-white mb-4">
                Ready to take the next step?
              </h2>
              <p className="text-base sm:text-lg text-white/90 mb-8">
                Connect with us to discuss a referral or partnership path. All services are offered at no cost to clients.
              </p>
              <Button
                href="/contact"
                variant="white"
                size="lg"
                icon={<ArrowRightIcon className="w-5 h-5" />}
                iconPosition="right"
              >
                Start a Referral Conversation
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
