import { ReactNode } from "react";
import OptimizedBackground from "./OptimizedBackground";

type SectionVariant = "default" | "light" | "soft" | "primary" | "dark" | "art-cream" | "art-green" | "kinggen-branded";
type WatermarkType = "stones" | "stones-left" | "stones-right" | "logo" | "kinggen-bg" | "none";

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
  "art-cream": "bg-brand-cream",
  "art-green": "bg-brand-primary text-white",
  "kinggen-branded": "bg-brand-primary text-white",
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
  watermark = "stones",
}: SectionProps) {
  const isLightSection = ["default", "light", "soft", "art-cream"].includes(variant);
  const isGreenSection = ["primary", "dark", "art-green", "kinggen-branded"].includes(variant);

  // Watermark settings
  const showStonesWatermark = watermark === "stones" && isLightSection;
  const showStonesLeft = watermark === "stones-left";
  const showStonesRight = watermark === "stones-right";
  const showLogoWatermark = watermark === "logo" && isGreenSection;
  const showKinggenBg = watermark === "kinggen-bg";

  return (
    <section
      id={id}
      className={`${variantStyles[variant]} ${paddingStyles[padding]} ${className} relative overflow-hidden`}
    >
      {/* Stacked stones watermark for cream/light sections - signature branding */}
      {showStonesWatermark && (
        <OptimizedBackground
          src="/logo_stack_cropped.png"
          className="absolute right-0 bottom-0 w-64 h-auto md:w-80 bg-no-repeat pointer-events-none"
          style={{
            backgroundPosition: "right bottom",
            backgroundSize: "contain",
            opacity: 0.12,
            height: "400px",
          }}
        />
      )}

      {/* Stones watermark on left */}
      {showStonesLeft && (
        <OptimizedBackground
          src="/logo_stack_cropped.png"
          className="absolute left-0 bottom-0 w-56 h-auto md:w-72 bg-no-repeat pointer-events-none"
          style={{
            backgroundPosition: "left bottom",
            backgroundSize: "contain",
            opacity: 0.10,
            height: "350px",
          }}
        />
      )}

      {/* Stones watermark on right */}
      {showStonesRight && (
        <OptimizedBackground
          src="/logo_stack_cropped.png"
          className="absolute right-0 bottom-0 w-56 h-auto md:w-72 bg-no-repeat pointer-events-none"
          style={{
            backgroundPosition: "right bottom",
            backgroundSize: "contain",
            opacity: 0.10,
            height: "350px",
          }}
        />
      )}

      {/* Full logo watermark for green sections */}
      {showLogoWatermark && (
        <OptimizedBackground
          src="/Untitled design.png"
          className="absolute inset-0 bg-no-repeat bg-center pointer-events-none"
          style={{
            backgroundSize: "320px auto",
            opacity: 0.08,
          }}
        />
      )}

      {/* KingGen branded full background */}
      {showKinggenBg && (
        <OptimizedBackground
          src="/KingGen Background (1).png"
          className="absolute inset-0 bg-no-repeat pointer-events-none"
          style={{
            backgroundPosition: "center",
            backgroundSize: "cover",
            opacity: 0.15,
          }}
        />
      )}

      {/* KingGen branded background for art-cream variant */}
      {variant === "art-cream" && (
        <OptimizedBackground
          src="/KingGen Background (1).png"
          className="absolute inset-0 bg-no-repeat pointer-events-none"
          style={{
            backgroundPosition: "center",
            backgroundSize: "cover",
            opacity: 0.06,
          }}
        />
      )}

      {/* KingGen branded background for kinggen-branded and art-green variants */}
      {(variant === "art-green" || variant === "kinggen-branded") && (
        <OptimizedBackground
          src="/KingGen Background (1).png"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundPosition: "center",
            backgroundSize: "cover",
            opacity: 0.35,
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
