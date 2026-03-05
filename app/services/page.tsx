import type { Metadata } from "next";
import {
  Section,
  Button,
  FadeIn,
  ArrowRightIcon,
  InnerPageHero,
  StaggerContainer,
  StaggerItem,
} from "../components";
import { getPageContent } from "../lib/content";
import { resolveIcon } from "../lib/icon-map";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore KingGen Ministries counseling services, including Gospel-centered support for anxiety, grief, trauma, relationships, and spiritual growth.",
};

const DEFAULT_SERVICES = [
  { icon: "HeartIcon", title: "Individual Pastoral Counseling", description: "Gospel-centered support for anxiety, stress, grief, and life transitions. Offered at no cost." },
  { icon: "CrossIcon", title: "Grief & Loss Care", description: "Walking through grief, loss, and the seasons that follow with compassion and Scripture." },
  { icon: "ShieldIcon", title: "Trauma & Crisis Support", description: "Confidential, trauma-informed care for women in crisis or walking through deep pain." },
  { icon: "UsersIcon", title: "Relationship & Family Support", description: "Help navigating relationship pain, family conflict, and communication challenges." },
  { icon: "CheckCircleIcon", title: "Spiritual Care & Growth", description: "Support for spiritual discouragement, faith questions, and deepening your walk with God." },
  { icon: "ArrowRightIcon", title: "Boundaries, Identity & Confidence", description: "Practical guidance for setting healthy boundaries, reclaiming identity, and rebuilding confidence." },
];

const DEFAULT_HERO = {
  title: "Our Services",
  subtitle: "Compassionate, Gospel-centered counseling at no cost to clients.",
};

export const revalidate = 60;

export default async function ServicesPage() {
  const content = await getPageContent('services');
  const hero = { ...DEFAULT_HERO, ...(content?.hero as Record<string, unknown>) };
  const services = (content?.services as Record<string, unknown>)?.items as typeof DEFAULT_SERVICES ?? DEFAULT_SERVICES;
  return (
    <>
      <InnerPageHero
        title={hero.title as string}
        subtitle={hero.subtitle as string}
        background="inner-logo"
        ariaLabel="Our Services"
       
      />

      <Section variant="art-cream" padding="xl">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-primary mb-4">
              Counseling support rooted in hope
            </h2>
            <p className="text-base sm:text-lg text-text-secondary">
              Each area of care is offered through confidential, Gospel-centered clinical pastoral counseling.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, i) => {
            const Icon = resolveIcon(service.icon);
            return (
              <StaggerItem key={service.title}>
                <div className="brand-panel brand-panel-premium brand-panel-interactive p-6 h-full flex flex-col" tabIndex={0}>
                  <div className="w-14 h-14 rounded-2xl bg-brand-primary text-white flex items-center justify-center mb-5 shadow-md shadow-brand-primary/18">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed flex-grow">
                    {service.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Section>

      <Section variant="cross-green" padding="xl">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center brand-panel-dark rounded-3xl p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-white mb-4">
              Ready to take the next step?
            </h2>
            <p className="text-base sm:text-lg text-white/95 mb-8">
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
      </Section>
    </>
  );
}
