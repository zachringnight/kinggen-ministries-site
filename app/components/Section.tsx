import { ReactNode } from "react";
import OptimizedBackground from "./OptimizedBackground";

type SectionVariant = "default" | "light" | "soft" | "primary" | "dark";
type WatermarkType = "none" | "stones-left" | "stones-right" | "cross";
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
  watermark = "none",
  ornamentLevel = "subtle",
}: SectionProps) {
  const isLight = ["default", "light", "soft"].includes(variant);
  const isDark = ["primary", "dark"].includes(variant);
  const showTexture = ornamentLevel === "subtle" || ornamentLevel === "featured";
  const showWatermark = ornamentLevel === "featured" && watermark !== "none";

  const textureOpacity = isLight ? 0.15 : 0.25;
  const watermarkSrc = isLight ? curatedWatermarks.light : curatedWatermarks.dark;
  const crossSrc = isLight ? curatedWatermarks.darkGreen : curatedWatermarks.dark;

  return (
    <section
      id={id}
      className={`${variantStyles[variant]} ${paddingStyles[padding]} ${className} relative overflow-hidden`}
    >
      {/* Branded texture layer */}
      {showTexture && (
        <OptimizedBackground
          src={isLight ? curatedTexture.light : curatedTexture.dark}
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundPosition: "center",
            backgroundSize: "cover",
            opacity: textureOpacity,
          }}
        />
      )}

      {/* Watermark: stones left */}
      {showWatermark && watermark === "stones-left" && (
        <OptimizedBackground
          src={watermarkSrc}
          className="absolute left-0 bottom-0 w-56 md:w-72 bg-no-repeat pointer-events-none"
          style={{
            backgroundPosition: "left bottom",
            backgroundSize: "contain",
            opacity: 0.10,
            height: "350px",
          }}
        />
      )}

      {/* Watermark: stones right */}
      {showWatermark && watermark === "stones-right" && (
        <OptimizedBackground
          src={watermarkSrc}
          className="absolute right-0 bottom-0 w-56 md:w-72 bg-no-repeat pointer-events-none"
          style={{
            backgroundPosition: "right bottom",
            backgroundSize: "contain",
            opacity: 0.10,
            height: "350px",
          }}
        />
      )}

      {/* Watermark: cross centered */}
      {showWatermark && watermark === "cross" && (
        <OptimizedBackground
          src={crossSrc}
          className="absolute inset-0 bg-no-repeat pointer-events-none"
          style={{
            backgroundPosition: "center",
            backgroundSize: isDark ? "280px auto" : "300px auto",
            opacity: isDark ? 0.10 : 0.06,
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
