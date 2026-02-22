import type { ReactNode } from "react";
import OptimizedBackground from "./OptimizedBackground";

type HeroBackground = "inner" | "about" | "inner-logo";

interface InnerPageHeroProps {
  title: string;
  subtitle?: string;
  background?: HeroBackground;
  ariaLabel?: string;
  children?: ReactNode;
  minHeightClassName?: string;
  showWatermarkCorners?: boolean;
}

const backgroundMap: Record<
  HeroBackground,
  {
    texture: string;
    overlayClassName: string;
    titleClassName: string;
    subtitleClassName: string;
    eyebrowClassName: string;
    watermarkSrc: string;
    watermarkOpacity: number;
    showEyebrow: boolean;
  }
> = {
  inner: {
    texture: "/brand/headers/inner-header.webp",
    overlayClassName:
      "bg-gradient-to-b from-brand-primary/70 via-brand-primary/78 to-brand-primary/88",
    titleClassName: "text-white",
    subtitleClassName: "text-white/90",
    eyebrowClassName: "border-white/30 bg-white/10 text-white/85",
    watermarkSrc: "/brand/logo/icon-white.webp",
    watermarkOpacity: 0.08,
    showEyebrow: true,
  },
  about: {
    texture: "/brand/headers/about-header.webp",
    overlayClassName:
      "bg-gradient-to-b from-white/50 via-brand-soft/60 to-brand-light/72",
    titleClassName: "text-brand-primary",
    subtitleClassName: "text-text-secondary",
    eyebrowClassName: "border-brand-primary/20 bg-white/70 text-brand-primary",
    watermarkSrc: "/brand/logo/icon-dark-green.webp",
    watermarkOpacity: 0.06,
    showEyebrow: false,
  },
  "inner-logo": {
    texture: "/brand/headers/inner-header.webp",
    overlayClassName:
      "bg-gradient-to-b from-white/48 via-brand-soft/58 to-brand-light/70",
    titleClassName: "text-brand-primary",
    subtitleClassName: "text-text-secondary",
    eyebrowClassName: "border-brand-primary/20 bg-white/70 text-brand-primary",
    watermarkSrc: "/brand/logo/icon-dark-green.webp",
    watermarkOpacity: 0.04,
    showEyebrow: false,
  },
};

export default function InnerPageHero({
  title,
  subtitle,
  background = "inner",
  ariaLabel,
  children,
  minHeightClassName = "min-h-[34vh] md:min-h-[44vh]",
  showWatermarkCorners = false,
}: InnerPageHeroProps) {
  const backgroundConfig = backgroundMap[background];

  return (
    <section
      className={`relative brand-hero-banner w-full ${minHeightClassName} bg-cover bg-center animate-fade-in-up flex items-end`}
      style={{ backgroundImage: `url('${backgroundConfig.texture}')` }}
      role="banner"
      aria-label={ariaLabel ?? title}
    >
      {showWatermarkCorners && (
        <>
          <OptimizedBackground
            src={backgroundConfig.watermarkSrc}
            className="absolute left-0 top-0 w-40 md:w-56 h-40 md:h-56 bg-no-repeat pointer-events-none"
            style={{
              backgroundPosition: "left top",
              backgroundSize: "contain",
              opacity: backgroundConfig.watermarkOpacity,
            }}
          />
          <OptimizedBackground
            src={backgroundConfig.watermarkSrc}
            className="absolute right-0 bottom-0 w-44 md:w-60 h-44 md:h-60 bg-no-repeat pointer-events-none"
            style={{
              backgroundPosition: "right bottom",
              backgroundSize: "contain",
              opacity: backgroundConfig.watermarkOpacity * 0.95,
            }}
          />
        </>
      )}
      <div className={`absolute inset-0 ${backgroundConfig.overlayClassName}`} />

      <div className="relative z-10 w-full pb-10 pt-24 md:pb-14 md:pt-28">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            {backgroundConfig.showEyebrow && (
              <p
                className={`inline-flex items-center rounded-full border px-4 py-2 text-xs sm:text-sm font-semibold tracking-[0.08em] uppercase backdrop-blur-sm ${backgroundConfig.eyebrowClassName}`}
              >
                KingGen Ministries
              </p>
            )}
            <h1
              className={`${backgroundConfig.showEyebrow ? "mt-5" : "mt-0"} text-4xl sm:text-5xl lg:text-6xl font-bold font-heading leading-tight ${backgroundConfig.titleClassName}`}
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
