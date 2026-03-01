import { ReactNode } from "react";
import OptimizedBackground from "./OptimizedBackground";

type SectionVariant =
  | "default"
  | "light"
  | "soft"
  | "primary"
  | "dark"
  | "art-cream"
  | "art-green"
  | "kinggen-branded"
  | "cross-light"
  | "cross-green";
type WatermarkType =
  | "stones"
  | "stones-left"
  | "stones-right"
  | "logo"
  | "kinggen-bg"
  | "cross"
  | "cross-subtle"
  | "cross-left"
  | "cross-right"
  | "none";
type OrnamentLevel = "none" | "subtle" | "featured";

type ContainerSize = "default" | "narrow" | "wide" | "full";
type SectionPadding = "none" | "sm" | "md" | "lg" | "xl";

interface SectionProps {
  children: ReactNode;
  variant?: SectionVariant;
  className?: string;
  id?: string;
  containerSize?: ContainerSize;
  padding?: SectionPadding;
  watermark?: WatermarkType;
  ornamentLevel?: OrnamentLevel;
}

const lightVariants = new Set<SectionVariant>([
  "default",
  "light",
  "soft",
  "art-cream",
  "cross-light",
]);

const greenVariants = new Set<SectionVariant>([
  "primary",
  "dark",
  "art-green",
  "kinggen-branded",
  "cross-green",
]);

const crossVariants = new Set<SectionVariant>(["cross-light", "cross-green"]);

const variantStyles: Record<SectionVariant, string> = {
  default: "bg-brand-soft text-text-primary",
  light: "bg-brand-light text-text-primary",
  soft: "bg-brand-cream text-text-primary",
  primary: "bg-brand-primary text-white",
  dark: "bg-brand-primary text-white",
  "art-cream": "bg-brand-cream text-text-primary",
  "art-green": "bg-brand-primary text-white",
  "kinggen-branded": "bg-brand-primary text-white",
  "cross-light": "bg-brand-cream text-text-primary",
  "cross-green": "bg-brand-primary text-white",
};

const containerSizes: Record<ContainerSize, string> = {
  default: "max-w-7xl",
  narrow: "max-w-4xl",
  wide: "max-w-screen-2xl",
  full: "max-w-full",
};

const paddingStyles: Record<SectionPadding, string> = {
  none: "py-0",
  sm: "py-8 md:py-12",
  md: "py-12 md:py-16",
  lg: "py-16 md:py-24",
  xl: "py-20 md:py-32",
};

const lightTextureOpacity: Partial<Record<SectionVariant, number>> = {
  default: 0.18,
  light: 0.16,
  soft: 0.15,
  "art-cream": 0.24,
  "cross-light": 0.2,
};

const darkTextureOpacity: Partial<Record<SectionVariant, number>> = {
  primary: 0.24,
  dark: 0.25,
  "art-green": 0.26,
  "kinggen-branded": 0.28,
  "cross-green": 0.24,
};

const curatedTexture = {
  light: "/brand/bg/cream-cross-texture.webp",
  dark: "/brand/bg/dark-green-texture.webp",
} as const;

const curatedWatermarks = {
  light: "/brand/logo/icon-light-gray.webp",
  dark: "/brand/logo/icon-white.webp",
  darkGreen: "/brand/logo/icon-dark-green.webp",
} as const;

const featuredGlowClass: Record<"light" | "dark", string> = {
  light: "bg-[radial-gradient(circle_at_84%_18%,rgba(123,163,144,0.14)_0%,rgba(123,163,144,0)_60%)]",
  dark: "bg-[radial-gradient(circle_at_16%_12%,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_58%)]",
};

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
  const isLightSection = lightVariants.has(variant);
  const isGreenSection = greenVariants.has(variant);
  const isCrossVariant = crossVariants.has(variant);
  const showTextureMotif = ornamentLevel !== "none";
  const showWatermarkMotif = ornamentLevel === "featured";

  const tone = isLightSection ? "light" : "dark";
  const centeredMarkSource = isLightSection ? curatedWatermarks.darkGreen : curatedWatermarks.dark;
  const sideMarkSource = isLightSection ? curatedWatermarks.light : curatedWatermarks.dark;

  const showStonesWatermark = showWatermarkMotif && watermark === "stones" && isLightSection && !isCrossVariant;
  const showStonesLeft = showWatermarkMotif && watermark === "stones-left" && !isCrossVariant;
  const showStonesRight = showWatermarkMotif && watermark === "stones-right" && !isCrossVariant;
  const showLogoWatermark = showWatermarkMotif && watermark === "logo" && isGreenSection;
  const showKinggenBg = showWatermarkMotif && watermark === "kinggen-bg";

  const showCrossWatermark = showWatermarkMotif && (watermark === "cross" || isCrossVariant);
  const showCrossSubtle = showWatermarkMotif && watermark === "cross-subtle";
  const showCrossLeft = showWatermarkMotif && watermark === "cross-left";
  const showCrossRight = showWatermarkMotif && watermark === "cross-right";

  return (
    <section
      id={id}
      className={`${variantStyles[variant]} ${paddingStyles[padding]} ${className} relative overflow-hidden isolate`}
    >
      {showTextureMotif && (
        <>
          <OptimizedBackground
            src={isLightSection ? curatedTexture.light : curatedTexture.dark}
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundPosition: "center",
              backgroundSize: "cover",
              opacity: isLightSection
                ? (lightTextureOpacity[variant] ?? 0.18)
                : (darkTextureOpacity[variant] ?? 0.34),
            }}
          />
          <div
            className={`absolute inset-0 pointer-events-none ${
              isLightSection ? "brand-surface-light-overlay" : "brand-surface-dark-overlay"
            }`}
            aria-hidden="true"
          />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent pointer-events-none" />
        </>
      )}

      {showWatermarkMotif && (
        <div
          className={`absolute inset-0 pointer-events-none ${featuredGlowClass[tone]}`}
          aria-hidden="true"
        />
      )}

      {showStonesWatermark && (
        <OptimizedBackground
          src={sideMarkSource}
          className="absolute right-0 bottom-0 w-64 h-auto md:w-80 bg-no-repeat pointer-events-none"
          style={{
            backgroundPosition: "right bottom",
            backgroundSize: "contain",
            opacity: 0.08,
            height: "410px",
          }}
        />
      )}

      {showStonesLeft && (
        <OptimizedBackground
          src={sideMarkSource}
          className="absolute left-0 bottom-0 w-56 h-auto md:w-72 bg-no-repeat pointer-events-none"
          style={{
            backgroundPosition: "left bottom",
            backgroundSize: "contain",
            opacity: 0.06,
            height: "320px",
          }}
        />
      )}

      {showStonesRight && (
        <OptimizedBackground
          src={sideMarkSource}
          className="absolute right-0 bottom-0 w-56 h-auto md:w-72 bg-no-repeat pointer-events-none"
          style={{
            backgroundPosition: "right bottom",
            backgroundSize: "contain",
            opacity: 0.06,
            height: "320px",
          }}
        />
      )}

      {showLogoWatermark && (
        <OptimizedBackground
          src={curatedWatermarks.dark}
          className="absolute inset-0 bg-no-repeat bg-center pointer-events-none"
          style={{
            backgroundSize: "320px auto",
            opacity: 0.07,
          }}
        />
      )}

      {showKinggenBg && (
        <OptimizedBackground
          src={curatedTexture.dark}
          className="absolute inset-0 bg-no-repeat pointer-events-none"
          style={{
            backgroundPosition: "center",
            backgroundSize: "cover",
            opacity: 0.26,
          }}
        />
      )}

      {showCrossWatermark && !isCrossVariant && (
        <OptimizedBackground
          src={centeredMarkSource}
          className="absolute inset-0 bg-no-repeat pointer-events-none"
          style={{
            backgroundPosition: "center",
            backgroundSize: isLightSection ? "340px auto" : "320px auto",
            opacity: isLightSection ? 0.05 : 0.08,
          }}
        />
      )}

      {showCrossSubtle && (
        <OptimizedBackground
          src={centeredMarkSource}
          className="absolute right-8 bottom-8 w-32 h-auto md:w-40 bg-no-repeat pointer-events-none"
          style={{
            backgroundPosition: "right bottom",
            backgroundSize: "contain",
            opacity: isLightSection ? 0.04 : 0.06,
            height: "180px",
          }}
        />
      )}

      {showCrossLeft && (
        <OptimizedBackground
          src={centeredMarkSource}
          className="absolute left-0 bottom-0 w-48 h-auto md:w-64 bg-no-repeat pointer-events-none"
          style={{
            backgroundPosition: "left bottom",
            backgroundSize: "contain",
            opacity: isLightSection ? 0.045 : 0.07,
            height: "280px",
          }}
        />
      )}

      {showCrossRight && (
        <OptimizedBackground
          src={centeredMarkSource}
          className="absolute right-0 bottom-0 w-48 h-auto md:w-64 bg-no-repeat pointer-events-none"
          style={{
            backgroundPosition: "right bottom",
            backgroundSize: "contain",
            opacity: isLightSection ? 0.045 : 0.07,
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
            light ? "text-white/90" : "text-text-secondary"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
