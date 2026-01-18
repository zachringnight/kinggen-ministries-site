import { ReactNode } from "react";

type SectionVariant = "default" | "light" | "soft" | "primary" | "dark";
type WatermarkType = "cross" | "logo" | "none";

interface SectionProps {
  children: ReactNode;
  variant?: SectionVariant;
  className?: string;
  id?: string;
  containerSize?: "default" | "narrow" | "wide" | "full";
  padding?: "none" | "sm" | "md" | "lg" | "xl";
  watermark?: WatermarkType;
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

export default function Section({
  children,
  variant = "default",
  className = "",
  id,
  containerSize = "default",
  padding = "lg",
  watermark = "cross",
}: SectionProps) {
  const isLightSection = ["default", "light", "soft"].includes(variant);
  const showWatermark = watermark !== "none" && isLightSection;

  return (
    <section
      id={id}
      className={`${variantStyles[variant]} ${paddingStyles[padding]} ${className} relative overflow-hidden`}
    >
      {/* Cross pattern watermark - subtle background */}
      {showWatermark && watermark === "cross" && (
        <div
          className="absolute inset-0 bg-no-repeat pointer-events-none opacity-50"
          style={{
            backgroundImage: "url('/bg_white_cross.png')",
            backgroundPosition: "left bottom",
            backgroundSize: "300px auto",
          }}
          aria-hidden="true"
        />
      )}

      {/* Full logo watermark - centered, very subtle */}
      {showWatermark && watermark === "logo" && (
        <div
          className="absolute inset-0 bg-no-repeat bg-center pointer-events-none opacity-[0.035]"
          style={{
            backgroundImage: "url('/logo-full.png')",
            backgroundSize: "320px auto",
          }}
          aria-hidden="true"
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
