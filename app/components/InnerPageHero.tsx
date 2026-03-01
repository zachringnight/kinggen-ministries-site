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
}

const backgroundMap: Record<
  HeroBackground,
  {
    texture: string;
    overlayClassName: string;
    titleClassName: string;
    subtitleClassName: string;
    eyebrowClassName: string;
    showEyebrow: boolean;
  }
> = {
  inner: {
    texture: "/brand/headers/inner-header.webp",
    overlayClassName:
      "bg-gradient-to-b from-brand-primary/72 via-brand-primary/82 to-brand-primary/92",
    titleClassName: "text-white",
    subtitleClassName: "text-white/90",
    eyebrowClassName: "border-white/30 bg-white/10 text-white/85",
    showEyebrow: true,
  },
  about: {
    texture: "/brand/headers/about-header.webp",
    overlayClassName:
      "bg-gradient-to-b from-white/24 via-brand-soft/48 to-brand-light/66",
    titleClassName: "text-brand-primary",
    subtitleClassName: "text-text-secondary",
    eyebrowClassName: "border-brand-primary/20 bg-white/72 text-brand-primary",
    showEyebrow: false,
  },
  "inner-logo": {
    texture: "/brand/headers/inner-header.webp",
    overlayClassName:
      "bg-gradient-to-b from-white/26 via-brand-soft/42 to-brand-light/58",
    titleClassName: "text-brand-primary",
    subtitleClassName: "text-text-secondary",
    eyebrowClassName: "border-brand-primary/20 bg-white/74 text-brand-primary",
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
}: InnerPageHeroProps) {
  const backgroundConfig = backgroundMap[background];

  return (
    <section
      className={`relative brand-hero-banner w-full ${minHeightClassName} animate-fade-in-up flex items-end isolate`}
      role="banner"
      aria-label={ariaLabel ?? title}
    >
      <OptimizedBackground
        src={backgroundConfig.texture}
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
      />

      <div className={`absolute inset-0 ${backgroundConfig.overlayClassName}`} />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />

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
