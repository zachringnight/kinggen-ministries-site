import type { ReactNode } from "react";
import OptimizedBackground from "./OptimizedBackground";
import { BrandLockup } from "./Logo";

type HeroBackground = "inner" | "about" | "inner-logo";

interface InnerPageHeroProps {
  title: string;
  subtitle?: string;
  background?: HeroBackground;
  ariaLabel?: string;
  children?: ReactNode;
  minHeightClassName?: string;
}

const heroTexture = "/brand/curated/bg/green-watermark-tall.png";

const backgroundMap: Record<
  HeroBackground,
  {
    overlayClassName: string;
    titleClassName: string;
    subtitleClassName: string;
    lockupClassName: string;
  }
> = {
  inner: {
    overlayClassName:
      "bg-gradient-to-b from-brand-primary/70 via-brand-primary/78 to-brand-primary/85",
    titleClassName: "text-white",
    subtitleClassName: "text-white/90",
    lockupClassName: "border-white/30 bg-white/10 text-white/92",
  },
  about: {
    overlayClassName:
      "bg-gradient-to-b from-brand-primary/65 via-brand-primary/72 to-brand-primary/80",
    titleClassName: "text-white",
    subtitleClassName: "text-white/90",
    lockupClassName: "border-white/30 bg-white/10 text-white/92",
  },
  "inner-logo": {
    overlayClassName:
      "bg-gradient-to-b from-brand-primary/68 via-brand-primary/75 to-brand-primary/82",
    titleClassName: "text-white",
    subtitleClassName: "text-white/90",
    lockupClassName: "border-white/30 bg-white/10 text-white/92",
  },
};

export default function InnerPageHero({
  title,
  subtitle,
  background = "inner",
  ariaLabel,
  children,
  minHeightClassName = "min-h-[34vh] md:min-h-[44vh]",
}: InnerPageHeroProps) {
  const backgroundConfig = backgroundMap[background];

  return (
    <section
      className={`relative brand-hero-banner w-full ${minHeightClassName} animate-fade-in-up flex items-end isolate`}
      role="banner"
      aria-label={ariaLabel ?? title}
    >
      <OptimizedBackground
        src={heroTexture}
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
      />

      <div
        className={`absolute inset-0 ${backgroundConfig.overlayClassName}`}
      />

      {/* Subtle radial highlight for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(123,163,144,0.12)_0%,transparent_60%)] pointer-events-none" />

      <div className="relative z-10 w-full pb-10 pt-24 md:pb-14 md:pt-28">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div
              className={`inline-flex items-center justify-center rounded-2xl border px-4 py-2 backdrop-blur-sm ${backgroundConfig.lockupClassName}`}
            >
              <BrandLockup theme="dark" size="sm" />
            </div>

            <h1
              className={`mt-5 text-3xl sm:text-5xl lg:text-6xl font-bold font-heading leading-tight ${backgroundConfig.titleClassName}`}
            >
              {title}
            </h1>

            {subtitle && (
              <p
                className={`mt-4 text-base md:text-lg max-w-2xl mx-auto leading-relaxed ${backgroundConfig.subtitleClassName}`}
              >
                {subtitle}
              </p>
            )}

            {children && <div className="mt-8">{children}</div>}
          </div>
        </div>
      </div>
    </section>
  );
}
