import type { Metadata } from "next";
import {
  Section,
  FadeIn,
  PageHero,
} from "../components";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Important emergency and informational disclaimers for KingGen Ministries website visitors.",
};

export default function DisclaimerPage() {
  return (
    <>
      {/* Hero Section with KingGen branded background */}
      <PageHero
        title="Disclaimer"
        background="kinggen-branded"
      />

      {/* Content Section with art */}
      <Section variant="art-cream" padding="xl">
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              This website is for informational purposes and is not an emergency service.
            </p>

            <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
              <p className="text-red-800">
                If you are in immediate danger, call <strong>911</strong> (or your local emergency number).
              </p>
              <p className="text-red-800 mt-4">
                If you are experiencing thoughts of self-harm, call or text <strong>988</strong> (United States).
              </p>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
