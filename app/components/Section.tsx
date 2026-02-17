import { ReactNode } from "react";
import OptimizedBackground from "./OptimizedBackground";

type SectionVariant = "default" | "light" | "soft" | "primary" | "dark" | "art-cream" | "art-green" | "kinggen-branded" | "cross-light" | "cross-green";
type WatermarkType = "stones" | "stones-left" | "stones-right" | "logo" | "kinggen-bg" | "cross" | "cross-subtle" | "cross-left" | "cross-right" | "none";
type OrnamentLevel = "none" | "subtle" | "featured";

interface SectionProps {
  children: ReactNode;
  variant?: SectionVariant;
  className?: string;
  id?: string;
  containerSize?: "default" | "narrow" | "wide" | "full";
  padding?: "none" | "sm" | "md" | "lg" | "xl";
  watermark?: WatermarkType;
  ornamentLevel?: OrnamentLevel;
}

const variantStyles: Record<SectionVariant, string> = {
  default: "bg-brand-soft",
  light: "bg-brand-light",
  soft: "bg-brand-cream",
  primary: "bg-brand-primary text-white",
  dark: "bg-brand-primary text-white",
  "art-cream": "bg-brand-cream",
  "art-green": "bg-brand-primary text-white",
  "kinggen-branded": "bg-brand-primary text-white",
  "cross-light": "bg-brand-cream",
  "cross-green": "bg-brand-primary text-white",
};

const containerSizes: Record<string, string> = {
  default: "max-w-7xl",
  narrow: "max-w-4xl",
  wide: "max-w-screen-2xl",
  full: "max-w-full",
};

const paddingStyles: Record<string, string> = {
  none: "py-0",
  sm: "py-8 md:py-12",
  md: "py-12 md:py-16",
  lg: "py-16 md:py-24",
  xl: "py-20 md:py-32",
};

const lightTextureOpacity: Partial<Record<SectionVariant, number>> = {
  default: 0.22,
  light: 0.18,
  soft: 0.16,
  "art-cream": 0.34,
  "cross-light": 0.30,
};

const darkTextureOpacity: Partial<Record<SectionVariant, number>> = {
  primary: 0.28,
  dark: 0.30,
  "art-green": 0.34,
  "kinggen-branded": 0.36,
  "cross-green": 0.32,
};

const curatedTexture = {
  light: "/brand/social/content-section-bg.webp",
  dark: "/brand/social/cta-testimonial-section-bg.webp",
} as const;

const curatedWatermarks = {
  light: "/brand/logo/icon-light-gray.webp",
  dark: "/brand/logo/icon-white.webp",
  darkGreen: "/brand/logo/icon-dark-green.webp",
} as const;

export default function Section({
  children,
  variant = "default",
  className = "",
  id,
  containerSize = "default",
  padding = "lg",
  watermark = "stones",
  ornamentLevel = "subtle",
}: SectionProps) {
  const isLightSection = ["default", "light", "soft", "art-cream", "cross-light"].includes(variant);
  const isGreenSection = ["primary", "dark", "art-green", "kinggen-branded", "cross-green"].includes(variant);
  const isCrossVariant = ["cross-light", "cross-green"].includes(variant);
  const showTextureMotif = ornamentLevel === "subtle";
  const showWatermarkMotif = ornamentLevel === "featured";

  // Watermark settings
  const showStonesWatermark = showWatermarkMotif && watermark === "stones" && isLightSection && !isCrossVariant;
  const showStonesLeft = showWatermarkMotif && watermark === "stones-left" && !isCrossVariant;
  const showStonesRight = showWatermarkMotif && watermark === "stones-right" && !isCrossVariant;
  const showLogoWatermark = showWatermarkMotif && watermark === "logo" && isGreenSection;
  const showKinggenBg = showWatermarkMotif && watermark === "kinggen-bg";

  // Cross watermark settings
  const showCrossWatermark = showWatermarkMotif && (watermark === "cross" || isCrossVariant);
  const showCrossSubtle = showWatermarkMotif && watermark === "cross-subtle";
  const showCrossLeft = showWatermarkMotif && watermark === "cross-left";
  const showCrossRight = showWatermarkMotif && watermark === "cross-right";
  const centeredMarkSource = isLightSection ? curatedWatermarks.darkGreen : curatedWatermarks.dark;
  const sideMarkSource = isLightSection ? curatedWatermarks.light : curatedWatermarks.dark;

  return (
    <section
      id={id}
      className={`${variantStyles[variant]} ${paddingStyles[padding]} ${className} relative overflow-hidden`}
    >
      {/* Branded texture base layers to keep visual identity cohesive */}
      {showTextureMotif && isLightSection && (
        <OptimizedBackground
          src={curatedTexture.light}
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundPosition: "center",
            backgroundSize: "cover",
            opacity: lightTextureOpacity[variant] ?? 0.16,
          }}
        />
      )}

      {showTextureMotif && isGreenSection && (
        <OptimizedBackground
          src={curatedTexture.dark}
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundPosition: "center",
            backgroundSize: "cover",
            opacity: darkTextureOpacity[variant] ?? 0.34,
          }}
        />
      )}

      {/* Stacked stones watermark for cream/light sections - signature branding */}
      {showStonesWatermark && (
        <OptimizedBackground
          src={sideMarkSource}
          className="absolute right-0 bottom-0 w-64 h-auto md:w-80 bg-no-repeat pointer-events-none"
          style={{
            backgroundPosition: "right bottom",
            backgroundSize: "contain",
            opacity: 0.10,
            height: "400px",
          }}
        />
      )}

      {/* Stones watermark on left */}
      {showStonesLeft && (
        <OptimizedBackground
          src={sideMarkSource}
          className="absolute left-0 bottom-0 w-56 h-auto md:w-72 bg-no-repeat pointer-events-none"
          style={{
            backgroundPosition: "left bottom",
            backgroundSize: "contain",
            opacity: 0.08,
            height: "350px",
          }}
        />
      )}

      {/* Stones watermark on right */}
      {showStonesRight && (
        <OptimizedBackground
          src={sideMarkSource}
          className="absolute right-0 bottom-0 w-56 h-auto md:w-72 bg-no-repeat pointer-events-none"
          style={{
            backgroundPosition: "right bottom",
            backgroundSize: "contain",
            opacity: 0.08,
            height: "350px",
          }}
        />
      )}

      {/* Full logo watermark for green sections */}
      {showLogoWatermark && (
        <OptimizedBackground
          src={curatedWatermarks.dark}
          className="absolute inset-0 bg-no-repeat bg-center pointer-events-none"
          style={{
            backgroundSize: "320px auto",
            opacity: 0.10,
          }}
        />
      )}

      {/* KingGen branded full background */}
      {showKinggenBg && (
        <OptimizedBackground
          src={curatedTexture.dark}
          className="absolute inset-0 bg-no-repeat pointer-events-none"
          style={{
            backgroundPosition: "center",
            backgroundSize: "cover",
            opacity: 0.24,
          }}
        />
      )}

      {/* Cross background for cross variants */}
      {showWatermarkMotif && variant === "cross-light" && (
        <OptimizedBackground
          src={curatedWatermarks.darkGreen}
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundPosition: "center",
            backgroundSize: "400px auto",
            opacity: 0.06,
          }}
        />
      )}

      {showWatermarkMotif && variant === "cross-green" && (
        <OptimizedBackground
          src={curatedWatermarks.dark}
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundPosition: "center",
            backgroundSize: "350px auto",
            opacity: 0.12,
          }}
        />
      )}

      {/* Cross watermark - centered */}
      {showCrossWatermark && !isCrossVariant && (
        <OptimizedBackground
          src={centeredMarkSource}
          className="absolute inset-0 bg-no-repeat pointer-events-none"
          style={{
            backgroundPosition: "center",
            backgroundSize: isLightSection ? "300px auto" : "280px auto",
            opacity: isLightSection ? 0.06 : 0.10,
          }}
        />
      )}

      {/* Cross watermark - subtle/small */}
      {showCrossSubtle && (
        <OptimizedBackground
          src={centeredMarkSource}
          className="absolute right-8 bottom-8 w-32 h-auto md:w-40 bg-no-repeat pointer-events-none"
          style={{
            backgroundPosition: "right bottom",
            backgroundSize: "contain",
            opacity: isLightSection ? 0.05 : 0.08,
            height: "180px",
          }}
        />
      )}

      {/* Cross watermark on left */}
      {showCrossLeft && (
        <OptimizedBackground
          src={centeredMarkSource}
          className="absolute left-0 bottom-0 w-48 h-auto md:w-64 bg-no-repeat pointer-events-none"
          style={{
            backgroundPosition: "left bottom",
            backgroundSize: "contain",
            opacity: isLightSection ? 0.06 : 0.10,
            height: "280px",
          }}
        />
      )}

      {/* Cross watermark on right */}
      {showCrossRight && (
        <OptimizedBackground
          src={centeredMarkSource}
          className="absolute right-0 bottom-0 w-48 h-auto md:w-64 bg-no-repeat pointer-events-none"
          style={{
            backgroundPosition: "right bottom",
            backgroundSize: "contain",
            opacity: isLightSection ? 0.06 : 0.10,
            height: "280px",
          }}
        />
      )}

      <div className={`container mx-auto px-4 lg:px-8 ${containerSizes[containerSize]} relative z-10`}>
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  light = false,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? "text-center" : ""} ${className}`}>
      <div className={`decorative-line ${centered ? "mx-auto" : ""} mb-6`} />
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4 ${
          light ? "text-white" : "text-text-primary"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg md:text-xl max-w-3xl ${centered ? "mx-auto" : ""} ${
            light ? "text-white" : "text-text-secondary"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
