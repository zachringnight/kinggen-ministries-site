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
    overlayClassName: "bg-gradient-to-b from-brand-primary/74 via-brand-primary/82 to-brand-primary/90",
    titleClassName: "text-white",
    subtitleClassName: "text-white/95",
    lockupClassName: "text-white",
  },
  about: {
    overlayClassName: "bg-gradient-to-b from-brand-primary/72 via-brand-primary/80 to-brand-primary/88",
    titleClassName: "text-white",
    subtitleClassName: "text-white/95",
    lockupClassName: "text-white",
  },
  "inner-logo": {
    overlayClassName: "bg-gradient-to-b from-brand-primary/73 via-brand-primary/81 to-brand-primary/89",
    titleClassName: "text-white",
    subtitleClassName: "text-white/95",
    lockupClassName: "text-white",
  },
};

export default function InnerPageHero({
  title,
  subtitle,
  background = "inner",
  ariaLabel,
  children,
  minHeightClassName = "min-h-[28vh] md:min-h-[36vh]",
}: InnerPageHeroProps) {
  const backgroundConfig = backgroundMap[background];

  return (
    <section
      className={`relative brand-hero-banner w-full ${minHeightClassName} animate-fade-in-up flex items-end isolate`}
      role="banner"
      aria-label={ariaLabel ?? title}
    >
      <OptimizedBackground src={heroTexture} className="absolute inset-0 bg-cover bg-center pointer-events-none" />

      <div className={`absolute inset-0 ${backgroundConfig.overlayClassName}`} />

      {/* Subtle radial highlight for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(123,163,144,0.12)_0%,transparent_60%)] pointer-events-none" />

      <div className="relative z-10 w-full pb-12 pt-24 md:pb-14 md:pt-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex justify-center">
              <BrandLockup theme="dark" size="sm" className={backgroundConfig.lockupClassName} />
            </div>

            <h1
              className={`mt-4 text-[clamp(2rem,6vw,3.5rem)] font-bold font-heading leading-tight ${backgroundConfig.titleClassName}`}
            >
              {title}
            </h1>

            {subtitle && (
              <p
                className={`mt-3 text-base md:text-lg max-w-2xl mx-auto leading-relaxed ${backgroundConfig.subtitleClassName}`}
              >
                {subtitle}
              </p>
            )}

            {children && <div className="mt-6 md:mt-7">{children}</div>}
          </div>
        </div>
      </div>
    </section>
  );
}
