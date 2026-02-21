import type { Metadata } from "next";
import {
  Button,
  FadeIn,
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

      {/* Services List */}
      {services.map((service) => {
        const Icon = service.icon;

        return (
          <section
            key={service.title}
            className="relative brand-surface-cream py-16 md:py-24"
            style={{
              backgroundImage: "url('/brand/social/content-section-bg.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="relative z-10 container mx-auto px-4 sm:px-6">
              <FadeIn>
                <div className="max-w-3xl mx-auto text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-brand-primary/10 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-brand-primary" />
                    </div>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-text-primary mb-4">
                    {service.title}
                  </h2>
                  <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </FadeIn>
            </div>
          </section>
        );
      })}

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
