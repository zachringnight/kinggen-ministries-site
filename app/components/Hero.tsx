import { ReactNode } from "react";
import Button from "./Button";
import OptimizedBackground from "./OptimizedBackground";
import { BrandLockup } from "./Logo";

interface HeroProps {
  title: string | ReactNode;
  subtitle?: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  centered?: boolean;
  size?: "default" | "large" | "small";
  variant?: "gradient" | "image" | "simple";
  children?: ReactNode;
}

export default function Hero({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  centered = true,
  size = "default",
  variant = "gradient",
  children,
}: HeroProps) {
  const sizeStyles = {
    small: "py-16 md:py-24",
    default: "py-24 md:py-32 lg:py-40",
    large: "py-32 md:py-40 lg:py-52",
  };

  const variantStyles = {
    gradient: "hero-gradient text-white",
    image: "bg-brand-primary text-white relative",
    simple: "bg-brand-light",
  };

  return (
    <section
      className={`${variantStyles[variant]} ${sizeStyles[size]} relative overflow-hidden`}
    >
      {/* Decorative dot pattern */}
      {variant === "gradient" && (
        <div className="absolute inset-0 pattern-dots" />
      )}

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div
          className={`${centered ? "text-center max-w-4xl mx-auto" : "max-w-3xl"}`}
        >
          {/* Subtitle/Eyebrow */}
          {subtitle && (
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
                variant === "simple"
                  ? "bg-brand-primary/10 text-brand-primary"
                  : "bg-white/10 text-white/90"
              } text-sm font-medium mb-6 animate-fade-in-up`}
            >
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse-soft" />
              {subtitle}
            </div>
          )}

          {/* Title */}
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading mb-6 leading-tight animate-fade-in-up stagger-1 ${
              variant === "simple" ? "text-text-primary" : ""
            }`}
          >
            {title}
          </h1>

          {/* Description */}
          {description && (
            <p
              className={`text-lg md:text-xl lg:text-2xl mb-10 leading-relaxed animate-fade-in-up stagger-2 ${
                variant === "simple" ? "text-text-secondary" : "text-white/90"
              }`}
            >
              {description}
            </p>
          )}

          {/* CTA Buttons */}
          {(primaryCTA || secondaryCTA) && (
            <div
              className={`flex flex-col sm:flex-row gap-4 animate-fade-in-up stagger-3 ${
                centered ? "justify-center" : ""
              }`}
            >
              {primaryCTA && (
                <Button
                  href={primaryCTA.href}
                  variant={variant === "simple" ? "primary" : "white"}
                  size="lg"
                >
                  {primaryCTA.text}
                </Button>
              )}
              {secondaryCTA && (
                <Button
                  href={secondaryCTA.href}
                  variant={variant === "simple" ? "outline" : "accent"}
                  size="lg"
                >
                  {secondaryCTA.text}
                </Button>
              )}
            </div>
          )}

          {/* Additional content */}
          {children && (
            <div className="mt-12 animate-fade-in-up stagger-4">{children}</div>
          )}
        </div>
      </div>
    </section>
  );
}

type PageHeroBackground = "kinggen-branded" | "green-texture" | "green-art" | "sage" | "cream" | "cross-branded" | "cross-texture";

interface PageHeroProps {
  title: string;
  description?: string;
  background?: PageHeroBackground;
  children?: ReactNode;
}

const pageHeroBackgrounds: Record<PageHeroBackground, { primary: string; overlay: string }> = {
  "kinggen-branded": {
    primary: "/brand/curated/bg/green-watermark-tall.png",
    overlay: "bg-gradient-to-b from-brand-primary/52 via-brand-primary/62 to-brand-primary/74",
  },
  "green-texture": {
    primary: "/brand/curated/bg/green-watermark-tall.png",
    overlay: "bg-gradient-to-b from-brand-primary/54 via-brand-primary/64 to-brand-primary/76",
  },
  "green-art": {
    primary: "/brand/curated/bg/green-watermark-tall.png",
    overlay: "bg-gradient-to-br from-brand-primary/50 via-brand-primary/60 to-brand-primary/72",
  },
  "sage": {
    primary: "/brand/curated/bg/green-watermark-tall.png",
    overlay: "bg-gradient-to-b from-brand-primary/50 via-brand-primary/58 to-brand-primary/70",
  },
  "cream": {
    primary: "/brand/curated/bg/green-watermark-tall.png",
    overlay: "bg-gradient-to-b from-brand-primary/48 via-brand-primary/56 to-brand-primary/68",
  },
  "cross-branded": {
    primary: "/brand/curated/bg/green-watermark-tall.png",
    overlay: "bg-gradient-to-br from-brand-primary/52 via-brand-primary/62 to-brand-primary/74",
  },
  "cross-texture": {
    primary: "/brand/curated/bg/green-watermark-tall.png",
    overlay: "bg-gradient-to-br from-brand-primary/50 via-brand-primary/60 to-brand-primary/72",
  },
};

export function PageHero({
  title,
  description,
  background = "kinggen-branded",
  children,
}: PageHeroProps) {
  const bgConfig = pageHeroBackgrounds[background];
  const isLight = false; // all variants now use dark branded hero

  return (
    <section className="relative brand-hero-banner py-16 sm:py-20 md:py-28 overflow-hidden">
      {/* Main branded background image - optimized with lazy loading */}
      <OptimizedBackground
        src={bgConfig.primary}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        priority
      />

      {/* Gradient overlay for text readability */}
      <div className={`absolute inset-0 ${bgConfig.overlay}`} aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(123,163,144,0.15)_0%,transparent_62%)] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className={`max-w-3xl mx-auto text-center ${isLight ? "text-text-primary" : "text-white"}`}>
          <div className="inline-flex items-center justify-center rounded-2xl border border-white/25 bg-white/10 px-4 py-2 backdrop-blur-sm">
            <BrandLockup theme="dark" size="sm" />
          </div>
          <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4 md:mb-6">
            {title}
          </h1>
          {description && (
            <p className={`text-base sm:text-lg md:text-xl leading-relaxed ${isLight ? "text-text-secondary" : "text-white/90"}`}>
              {description}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>

    </section>
  );
}
