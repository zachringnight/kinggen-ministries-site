import { ReactNode } from "react";
import Button from "./Button";
import OptimizedBackground from "./OptimizedBackground";

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
      {/* Decorative elements */}
      {variant === "gradient" && (
        <>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-accent/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          </div>
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 pattern-dots" />
        </>
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
  showStones?: boolean;
  stonesPosition?: "left" | "right" | "both";
  showCross?: boolean;
  crossPosition?: "center" | "left" | "right";
  children?: ReactNode;
}

const pageHeroBackgrounds: Record<PageHeroBackground, { primary: string; overlay: string; hasCross?: boolean }> = {
  "kinggen-branded": {
    primary: "/brand/bg/dark-green-texture.webp",
    overlay: "bg-gradient-to-br from-brand-primary/70 via-brand-secondary/65 to-brand-primary/75",
  },
  "green-texture": {
    primary: "/optimized/bg_green_texture_1920x1080.webp",
    overlay: "bg-gradient-to-b from-brand-primary/80 via-brand-primary/75 to-brand-primary/85",
  },
  "green-art": {
    primary: "/optimized/bg-green-alternate.webp",
    overlay: "bg-gradient-to-br from-brand-primary/60 to-brand-secondary/70",
  },
  "sage": {
    primary: "/bg-sage.jpg",
    overlay: "bg-gradient-to-b from-brand-primary/75 to-brand-primary/80",
  },
  "cream": {
    primary: "/optimized/bg-light-stones.webp",
    overlay: "bg-gradient-to-b from-brand-soft/60 to-brand-cream/70",
  },
  "cross-branded": {
    primary: "/brand/bg/dark-green-texture.webp",
    overlay: "bg-gradient-to-br from-brand-primary/75 via-brand-secondary/70 to-brand-primary/80",
    hasCross: true,
  },
  "cross-texture": {
    primary: "/optimized/bg_green_texture_1920x1080.webp",
    overlay: "bg-gradient-to-br from-brand-primary/82 via-brand-secondary/78 to-brand-primary/85",
    hasCross: true,
  },
};

export function PageHero({
  title,
  description,
  background = "kinggen-branded",
  showStones = true,
  stonesPosition = "right",
  showCross = false,
  crossPosition = "center",
  children,
}: PageHeroProps) {
  const bgConfig = pageHeroBackgrounds[background];
  const isLight = background === "cream";
  const displayCross = showCross || bgConfig.hasCross;

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

      {/* Cross branding element - Gospel-centered ministry */}
      {displayCross && crossPosition === "center" && (
        <OptimizedBackground
          src="/bg_white_cross.png"
          className="absolute inset-0 bg-no-repeat pointer-events-none"
          style={{
            backgroundPosition: "center 40%",
            backgroundSize: "220px auto",
            opacity: 0.08,
          }}
        />
      )}

      {displayCross && crossPosition === "left" && (
        <OptimizedBackground
          src="/bg_white_cross.png"
          className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 w-32 md:w-48 bg-no-repeat pointer-events-none"
          style={{
            backgroundPosition: "left center",
            backgroundSize: "contain",
            opacity: 0.10,
            height: "200px",
          }}
        />
      )}

      {displayCross && crossPosition === "right" && (
        <OptimizedBackground
          src="/bg_white_cross.png"
          className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 w-32 md:w-48 bg-no-repeat pointer-events-none"
          style={{
            backgroundPosition: "right center",
            backgroundSize: "contain",
            opacity: 0.10,
            height: "200px",
          }}
        />
      )}

      {/* Stone cairn art - signature KingGen branding */}
      {showStones && (stonesPosition === "left" || stonesPosition === "both") && (
        <OptimizedBackground
          src="/logo_stack_cropped.png"
          className="absolute left-0 bottom-0 w-48 sm:w-56 md:w-72 bg-no-repeat pointer-events-none"
          style={{
            backgroundPosition: "left bottom",
            backgroundSize: "contain",
            opacity: 0.15,
            height: "320px",
          }}
        />
      )}

      {showStones && (stonesPosition === "right" || stonesPosition === "both") && (
        <OptimizedBackground
          src="/logo_stack_cropped.png"
          className="absolute right-0 bottom-0 w-48 sm:w-56 md:w-72 bg-no-repeat pointer-events-none"
          style={{
            backgroundPosition: "right bottom",
            backgroundSize: "contain",
            opacity: 0.15,
            height: "320px",
          }}
        />
      )}

      {/* Subtle decorative glow */}
      <div className="absolute inset-0 opacity-15 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-brand-accent/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-white/20 rounded-full blur-2xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className={`max-w-3xl mx-auto text-center ${isLight ? "text-text-primary" : "text-white"}`}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4 md:mb-6">
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

      {/* Decorative bottom accent */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-accent/50 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
