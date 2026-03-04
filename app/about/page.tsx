import {
  Section,
  Button,
  CheckCircleIcon,
  ArrowRightIcon,
  CrossIcon,
  FadeIn,
  StaggerContainer,
  StaggerItem,
  InnerPageHero,
} from "../components";
import { getPageContent } from "../lib/content";

const DEFAULTS = {
  hero: {
    title: "About KingGen Ministries",
    subtitle: "A Gospel-centered counseling ministry serving women in need.",
  },
  mission: "At KingGen Ministries, we believe everyone should have access to counseling. As a 501(c)(3), we offer Gospel-centered counseling for women in need by a licensed clinical pastoral counselor.",
  heart: "We believe the Gospel brings hope, truth, and healing. Counseling is a place to bring what feels heavy into the light, to be met with compassion, and to take wise steps forward.",
  expectations: [
    "kindness and respect",
    "a steady pace and clear next steps",
    "faith-rooted care grounded in Scripture",
    "practical guidance for everyday life",
  ],
  referrer_trust: {
    headline: "A ministry you can refer to with confidence",
    description: "If you are a pastor, church leader, or community professional, we aim to serve with discretion, clarity, and care.",
  },
  speaking: {
    headline: "Book LeeAnn as a speaker",
    description: "LeeAnn is available for speaking engagements, podcast interviews, and ministry events. Her heart is to encourage women, equip churches, and share the hope of the Gospel.",
    topics: [
      { title: "Churches & Retreats", description: "Women's events, Sunday services, and weekend retreats" },
      { title: "Podcasts & Interviews", description: "Faith, counseling, ministry, and mental health topics" },
      { title: "Conferences & Panels", description: "Workshops on pastoral care and women's ministry" },
    ],
  },
};

export const revalidate = 60;

export default async function AboutPage() {
  const content = await getPageContent('about');
  const hero = { ...DEFAULTS.hero, ...(content?.hero as Record<string, unknown>) };
  const mission = (content?.mission as string) ?? DEFAULTS.mission;
  const heart = (content?.heart as string) ?? DEFAULTS.heart;
  const expectations = (content?.expectations as string[]) ?? DEFAULTS.expectations;
  const referrerTrust = { ...DEFAULTS.referrer_trust, ...(content?.referrer_trust as Record<string, unknown>) };
  const speaking = { ...DEFAULTS.speaking, ...(content?.speaking as Record<string, unknown>) };
  const speakingTopics = (speaking.topics as typeof DEFAULTS.speaking.topics) ?? DEFAULTS.speaking.topics;

  return (
    <>
      <InnerPageHero
        title={hero.title as string}
        subtitle={hero.subtitle as string}
        background="about"
        ariaLabel="About KingGen Ministries"
       
      />

      <Section variant="cross-light" padding="xl">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <CrossIcon className="w-6 h-6 text-brand-primary/50" strokeWidth={1.5} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-text-primary mb-6">
              Mission
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              {mission}
            </p>
          </div>
        </FadeIn>
      </Section>

      <Section variant="cross-green" padding="xl">
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-4">
              <CrossIcon className="w-7 h-7 text-white/55" strokeWidth={1.5} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6 text-center">
              Our heart and approach
            </h2>
            <p className="text-lg text-white/95 mb-8 text-center leading-relaxed">
              {heart}
            </p>
            <p className="text-lg text-white mb-6 text-center">
              You can expect:
            </p>
          </div>
        </FadeIn>

        <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {expectations.map((item, i) => (
            <StaggerItem key={i}>
              <div className="brand-panel-dark rounded-xl flex items-center gap-3 p-4">
                <CheckCircleIcon className="w-5 h-5 text-white flex-shrink-0" />
                <p className="text-white">{item}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      <Section variant="art-cream" padding="lg">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-text-primary mb-4">
              {referrerTrust.headline as string}
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              {referrerTrust.description as string}
            </p>
            <Button href="/for-referrers" variant="primary" icon={<ArrowRightIcon className="w-5 h-5" />} iconPosition="right">
              For Referrers
            </Button>
          </div>
        </FadeIn>
      </Section>

      <Section id="speaking" variant="cross-green" padding="xl">
        <FadeIn>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-white mb-4 text-center">
              {speaking.headline as string}
            </h2>
            <p className="text-base sm:text-lg text-white/95 mb-10 text-center max-w-2xl mx-auto">
              {speaking.description as string}
            </p>

            <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-10">
              {speakingTopics.map((topic) => (
              <div key={topic.title} className="brand-panel-dark rounded-xl p-5 md:p-6 text-center h-full">
                <h3 className="font-bold text-white mb-2">{topic.title}</h3>
                <p className="text-sm text-white/95">{topic.description}</p>
              </div>
              ))}
            </div>

            <div className="text-center">
              <Button href="/contact" variant="white" size="lg" icon={<ArrowRightIcon className="w-5 h-5" />} iconPosition="right">
                Request a Booking
              </Button>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
