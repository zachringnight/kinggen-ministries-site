import { siteConfig } from "../config/site";
import Button from "./Button";
import { ExternalLinkIcon } from "./Icons";

interface ServiceAvailabilityCardProps {
  showClientInformation?: boolean;
}

export default function ServiceAvailabilityCard({ showClientInformation = false }: ServiceAvailabilityCardProps) {
  const availability = siteConfig.serviceAvailability;

  return (
    <div className="brand-panel max-w-3xl mx-auto p-5 sm:p-7 md:p-9 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-primary/70">Current availability</p>
      <h2 className="mt-2 text-2xl sm:text-3xl font-bold font-heading text-text-primary text-balance">
        Counseling through Venture Church
      </h2>
      <p className="mt-3 text-base sm:text-lg font-semibold text-brand-primary leading-relaxed">
        {availability.notice}
      </p>
      <p className="mt-3 text-sm sm:text-base text-text-secondary leading-relaxed max-w-2xl mx-auto">
        {availability.memberGuidance}
      </p>

      <div className="mt-5 flex flex-col sm:flex-row gap-3 justify-center">
        <Button
          href={availability.memberNextStep.href}
          variant="primary"
          external
          icon={<ExternalLinkIcon className="w-4 h-4" />}
          iconPosition="right"
        >
          {availability.memberNextStep.label}
        </Button>
        {showClientInformation && (
          <Button href="/get-support" variant="outline">
            Client Information
          </Button>
        )}
      </div>

      <p className="mt-6 border-t border-brand-light/90 pt-4 text-sm text-text-muted leading-relaxed max-w-2xl mx-auto">
        {availability.outsideCommunityGuidance}
      </p>
    </div>
  );
}
