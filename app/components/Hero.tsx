import { ReactNode } from "react";
import Button from "./Button";

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

type PageHeroBackground = "kinggen-branded" | "green-texture" | "green-art" | "sage" | "cream";

interface PageHeroProps {
  title: string;
  description?: string;
  background?: PageHeroBackground;
  showArt?: boolean;
  artPosition?: "left" | "right" | "both";
  children?: ReactNode;
}

const pageHeroBackgrounds: Record<PageHeroBackground, { primary: string; overlay: string }> = {
  "kinggen-branded": {
    primary: "/KingGen Background (1).png",
    overlay: "bg-gradient-to-br from-brand-primary/92 via-brand-secondary/88 to-brand-primary/95",
  },
  "green-texture": {
    primary: "/bg_green_texture_1920x1080.png",
    overlay: "bg-gradient-to-b from-brand-primary/85 via-brand-primary/80 to-brand-primary/90",
  },
  "green-art": {
    primary: "/bg-green.jpg",
    overlay: "bg-gradient-to-br from-brand-primary/70 to-brand-secondary/80",
  },
  "sage": {
    primary: "/bg-sage.jpg",
    overlay: "bg-gradient-to-b from-brand-primary/80 to-brand-primary/85",
  },
  "cream": {
    primary: "/bg-cream.jpg",
    overlay: "bg-gradient-to-b from-brand-cream/85 to-brand-cream/90",
  },
};

export function PageHero({
  title,
  description,
  background = "kinggen-branded",
  showArt = true,
  artPosition = "both",
  children,
}: PageHeroProps) {
  const bgConfig = pageHeroBackgrounds[background];
  const isLight = background === "cream";

  return (
    <section className="relative py-16 sm:py-20 md:py-28 overflow-hidden">
      {/* Main background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${bgConfig.primary}')` }}
        aria-hidden="true"
      />

      {/* Gradient overlay for readability */}
      <div className={`absolute inset-0 ${bgConfig.overlay}`} aria-hidden="true" />

      {/* Art decorations using KingGen cross designs */}
      {showArt && (artPosition === "left" || artPosition === "both") && (
        <div
          className="absolute left-0 bottom-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-no-repeat pointer-events-none opacity-25"
          style={{
            backgroundImage: "url('/Untitled-3.png')",
            backgroundPosition: "left bottom",
            backgroundSize: "contain",
          }}
          aria-hidden="true"
        />
      )}

      {showArt && (artPosition === "right" || artPosition === "both") && (
        <div
          className="absolute right-0 top-0 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-no-repeat pointer-events-none opacity-20"
          style={{
            backgroundImage: "url('/Untitled-1.png')",
            backgroundPosition: "right top",
            backgroundSize: "contain",
          }}
          aria-hidden="true"
        />
      )}

      {/* Additional decorative elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-brand-accent/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
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
