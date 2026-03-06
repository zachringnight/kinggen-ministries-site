import type { Metadata } from "next";
import {
  Section,
  Button,
  ArrowRightIcon,
  InstagramIcon,
  CheckCircleIcon,
  FadeIn,
  InnerPageHero,
} from "../components";
import { siteConfig } from "../config/site";

export const metadata: Metadata = {
  title: "Ministry Updates",
  description: "Follow KingGen Ministries for Scripture, encouragement, and ministry updates.",
  robots: {
    index: false,
    follow: true,
  },
};

const INSTAGRAM_EMBED_URL = "https://www.instagram.com/kinggenministries/embed/";

export const revalidate = 60;

export default function TestimonialsPage() {
  return (
    <>
      <InnerPageHero
        title="Ministry Updates"
        subtitle="Follow KingGen Ministries for Scripture, encouragement, and ministry news."
        background="inner"
        ariaLabel="KingGen Ministries updates"
      />

      <Section variant="cross-green" padding="xl">
        <div className="grid max-w-6xl mx-auto gap-8 lg:grid-cols-[0.88fr,1.12fr] items-start">
          <FadeIn>
            <div className="brand-panel-dark rounded-[2rem] p-8 md:p-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/10 px-3.5 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white/95 backdrop-blur-sm">
                <InstagramIcon className="h-4 w-4" />
                Instagram
              </div>

              <h2 className="mt-5 text-3xl md:text-4xl font-bold font-heading text-white">
                Encouragement beyond the session
              </h2>
              <p className="mt-4 text-base md:text-lg leading-relaxed text-white/95">
                We share Scripture, hope-filled reminders, and ministry updates throughout the week. The feed below is pulled directly from the public KingGen Ministries Instagram profile.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Scripture-centered encouragement for women and families",
                  "Ministry updates and prayer-focused reminders",
                  "A direct path to follow or share KingGen with others",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-white/95">
                    <CheckCircleIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-white" />
                    <p className="text-sm md:text-base">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button
                  href={siteConfig.social.instagram}
                  external
                  variant="white"
                  size="lg"
                  icon={<ArrowRightIcon className="h-5 w-5" />}
                  iconPosition="right"
                >
                  Follow on Instagram
                </Button>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="brand-panel brand-panel-premium rounded-[2rem] p-4 md:p-5">
              <div className="flex flex-col gap-3 border-b border-brand-light/80 px-2 pb-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-primary text-white shadow-md shadow-brand-primary/18">
                    <InstagramIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text-primary">@kinggenministries</p>
                    <p className="text-xs text-text-muted">Latest encouragement and ministry updates</p>
                  </div>
                </div>

                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-brand-primary transition-colors hover:text-brand-primary-dark"
                >
                  Open profile
                </a>
              </div>

              <div className="mt-4 overflow-hidden rounded-[1.5rem] border border-brand-light bg-white shadow-[0_18px_40px_-28px_rgba(38,61,39,0.35)]">
                <iframe
                  title="KingGen Ministries Instagram profile feed"
                  src={INSTAGRAM_EMBED_URL}
                  className="block h-[740px] w-full sm:h-[800px] lg:h-[860px]"
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
