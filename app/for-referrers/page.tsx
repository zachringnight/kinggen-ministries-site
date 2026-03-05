import type { Metadata } from "next";
import {
  Section,
  SectionHeader,
  Button,
  CheckCircleIcon,
  ShieldIcon,
  ArrowRightIcon,
  FadeIn,
  StaggerContainer,
  StaggerItem,
  InnerPageHero,
} from "../components";
import { getPageContent } from "../lib/content";

export const metadata: Metadata = {
  title: "For Referrers",
  description:
    "Information for pastors, counselors, and partners who want to refer women to KingGen Ministries for Gospel-centered counseling support.",
};

const DEFAULT_HERO = {
  title: "For Referrers",
  subtitle: "A clear and compassionate referral pathway for women who need support.",
};

const DEFAULT_WHO_CAN_REFER = [
  "Pastors and church staff",
  "Licensed counselors and therapists",
  "Social workers and case managers",
  "Healthcare professionals",
  "Community organization leaders",
  "Trusted family members or mentors",
];

const DEFAULT_REFERRAL_REASONS = [
  "is seeking counseling support and cost is a barrier",
  "is open to Gospel-centered counseling",
  "can participate by appointment (in-person or telehealth)",
];

const DEFAULT_WHAT_TO_EXPECT = [
  { title: "Confidential intake", description: "We protect the privacy of every woman referred to us." },
  { title: "Clear communication", description: "We keep referrers informed as appropriate and permitted." },
  { title: "Compassionate care", description: "Women receive Gospel-centered support at their own pace." },
  { title: "Professional standards", description: "Licensed clinical pastoral counseling with ethical guidelines." },
];

const DEFAULT_HELPFUL_INFO = [
  "First name of the person being referred",
  "Best contact method (email or phone)",
  "General reason for referral",
  "Any immediate safety concerns",
];

const DEFAULT_REFERRAL_VALUES = [
  "Trusted referral relationships",
  "Warm, coordinated communication",
  "Care shaped by confidentiality and wisdom",
];

export const revalidate = 60;

export default async function ForReferrers() {
  const content = await getPageContent("for-referrers");
  const hero = { ...DEFAULT_HERO, ...(content?.hero as Record<string, unknown>) };
  const whoCanRefer = (content?.whoCanRefer as string[]) ?? DEFAULT_WHO_CAN_REFER;
  const referralReasons = (content?.referralReasons as string[]) ?? DEFAULT_REFERRAL_REASONS;
  const whatToExpect = (content?.whatToExpect as typeof DEFAULT_WHAT_TO_EXPECT) ?? DEFAULT_WHAT_TO_EXPECT;
  const helpfulInfo = (content?.helpfulInfo as string[]) ?? DEFAULT_HELPFUL_INFO;

  return (
    <>
      <InnerPageHero
        title={hero.title as string}
        subtitle={hero.subtitle as string}
        background="inner"
        ariaLabel="For Referrers"
      />

      <Section variant="cross-light" padding="lg">
        <div className="grid max-w-5xl mx-auto gap-6 lg:grid-cols-[0.92fr,1.08fr] items-start">
          <FadeIn>
            <div className="brand-panel brand-panel-mist brand-panel-frame brand-panel-accent-top p-6 md:p-8">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-brand-primary/72">
                Referral Partnerships
              </p>
              <h2 className="mt-3 text-2xl md:text-[2rem] font-bold font-heading text-text-primary">
                Clear intake. Quiet confidence. Compassionate care.
              </h2>
              <p className="mt-4 text-[0.98rem] md:text-[1.04rem] leading-relaxed text-text-secondary">
                KingGen works best through trusted referral relationships. This page is built to help pastors, counselors, and care teams quickly see if a referral path makes sense.
              </p>

              <div className="mt-6 space-y-3">
                {DEFAULT_REFERRAL_VALUES.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircleIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-primary" />
                    <p className="text-sm md:text-[0.98rem] text-text-primary">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <div>
            <FadeIn delay={0.06}>
              <SectionHeader
                title="Who can refer"
                subtitle="We welcome referrals from trusted sources supporting women in need."
                className="mb-6"
              />
            </FadeIn>

            <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {whoCanRefer.map((referrer, i) => (
                <StaggerItem key={i}>
                  <div className="brand-panel brand-panel-interactive brand-panel-accent-top flex items-center gap-3 p-4 md:p-5 h-full">
                    <CheckCircleIcon className="w-5 h-5 text-brand-primary flex-shrink-0" />
                    <p className="text-sm md:text-base text-text-secondary">{referrer}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </Section>

      <Section variant="art-cream" padding="lg">
        <FadeIn>
          <SectionHeader
            title="When a referral may be appropriate"
            subtitle="A referral may be a good fit when someone:"
          />
        </FadeIn>

        <StaggerContainer staggerDelay={0.1} className="max-w-3xl mx-auto space-y-3">
          {referralReasons.map((reason, i) => (
            <StaggerItem key={i}>
              <div className="brand-panel brand-panel-interactive brand-panel-frame flex items-start gap-4 p-4 md:p-5">
                <CheckCircleIcon className="w-6 h-6 text-brand-primary flex-shrink-0 mt-0.5" />
                <p className="text-text-primary text-base md:text-[1.05rem]">{reason}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      <Section variant="cross-green" padding="lg">
        <FadeIn>
          <SectionHeader
            title="What referrers can expect"
            subtitle="A simple, ministry-minded process from first contact to next steps."
            light
          />
        </FadeIn>

        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-4xl mx-auto">
          {whatToExpect.map((item, i) => (
            <StaggerItem key={i}>
              <div className="brand-panel-dark brand-panel-frame rounded-2xl p-5 md:p-6 h-full flex flex-col">
                <h3 className="font-bold text-white text-lg mb-2">{item.title}</h3>
                <p className="text-sm md:text-base text-white/95 flex-grow">{item.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      <Section variant="soft" padding="lg">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="brand-panel brand-panel-mist brand-panel-accent-top p-6 md:p-8 text-center">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-brand-primary/72">
                How to refer
              </p>
              <h2 className="mt-3 text-2xl md:text-[2rem] font-bold font-heading text-text-primary">
                Submit the referral with her awareness and consent.
              </h2>
              <p className="mt-4 text-[0.98rem] md:text-[1.04rem] leading-relaxed text-text-secondary max-w-2xl mx-auto">
                This keeps intake coordinated, private, and easier to follow through from the start.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="mt-6 text-center">
              <h3 className="text-xl md:text-[1.55rem] font-bold font-heading text-text-primary">
                Helpful information to include
              </h3>
              <p className="mt-2 text-sm md:text-base text-text-secondary">
                Enough detail to guide next steps, without overloading the first message.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-2 gap-4 mt-6 max-w-3xl mx-auto">
            {helpfulInfo.map((info, i) => (
              <StaggerItem key={i}>
                <div className="brand-panel brand-panel-interactive brand-panel-frame flex items-center gap-3 p-4 md:p-5 h-full">
                  <CheckCircleIcon className="w-5 h-5 text-brand-primary flex-shrink-0" />
                  <p className="text-text-secondary text-sm md:text-base">{info}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.12}>
            <div className="mt-6">
              <div className="brand-panel brand-panel-frame flex flex-col sm:flex-row items-start gap-4 p-5 md:p-6 max-w-3xl mx-auto">
                <ShieldIcon className="w-7 h-7 text-brand-primary flex-shrink-0" />
                <div>
                  <h3 className="text-lg md:text-xl font-bold font-heading text-text-primary mb-2">
                    Confidentiality
                  </h3>
                  <p className="text-text-secondary text-sm md:text-base">
                    We do not share session details without the client&apos;s permission, except where disclosure is required by law or there is a serious safety concern. Your referral is handled with discretion and care.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.18}>
            <div className="text-center mt-8">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRightIcon className="w-5 h-5" />}
                iconPosition="right"
              >
                Start a Referral
              </Button>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section variant="cross-green" padding="lg">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center brand-panel-dark rounded-3xl p-7 md:p-9">
            <h2 className="text-2xl md:text-[2rem] font-bold font-heading text-white mb-4">
              Partner with us
            </h2>
            <p className="text-[0.98rem] md:text-[1.04rem] text-white/95 mb-6 leading-relaxed">
              If you&apos;d like to establish an ongoing referral relationship or talk through how KingGen can support your church, practice, or organization, we&apos;d love to connect.
            </p>
            <Button
              href="/contact"
              variant="white"
              size="lg"
              icon={<ArrowRightIcon className="w-5 h-5" />}
              iconPosition="right"
            >
              Contact Us
            </Button>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
