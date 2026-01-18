import { ReactNode } from "react";
import Image from "next/image";

type SectionVariant = "default" | "light" | "soft" | "primary" | "dark";
type WatermarkPosition = "bottom-left" | "bottom-right" | "top-right" | "center" | "none";

interface SectionProps {
  children: ReactNode;
  variant?: SectionVariant;
  className?: string;
  id?: string;
  containerSize?: "default" | "narrow" | "wide" | "full";
  padding?: "none" | "sm" | "md" | "lg" | "xl";
  noWatermark?: boolean;
  watermarkPosition?: WatermarkPosition;
  watermarkSize?: "sm" | "md" | "lg" | "xl";
}

const variantStyles: Record<SectionVariant, string> = {
  default: "bg-brand-soft",
  light: "bg-brand-light",
  soft: "bg-brand-cream",
  primary: "bg-brand-primary text-white",
  dark: "bg-brand-primary text-white",
};

// Variants that should have logo watermark
const watermarkVariants: SectionVariant[] = ["default", "light", "soft"];

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

const watermarkPositionStyles: Record<WatermarkPosition, string> = {
  "bottom-left": "bottom-0 left-0 -translate-x-1/4 translate-y-1/4",
  "bottom-right": "bottom-0 right-0 translate-x-1/4 translate-y-1/4",
  "top-right": "top-0 right-0 translate-x-1/4 -translate-y-1/4",
  "center": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  "none": "hidden",
};

const watermarkSizeStyles: Record<string, string> = {
  sm: "w-48 h-48 md:w-64 md:h-64",
  md: "w-64 h-64 md:w-80 md:h-80",
  lg: "w-80 h-80 md:w-96 md:h-96",
  xl: "w-96 h-96 md:w-[500px] md:h-[500px]",
};

export default function Section({
  children,
  variant = "default",
  className = "",
  id,
  containerSize = "default",
  padding = "lg",
  noWatermark = false,
  watermarkPosition = "bottom-right",
  watermarkSize = "lg",
}: SectionProps) {
  const hasWatermark = !noWatermark && watermarkVariants.includes(variant);
  const isLightVariant = watermarkVariants.includes(variant);

  return (
    <section
      id={id}
      className={`${variantStyles[variant]} ${paddingStyles[padding]} ${className} relative overflow-hidden`}
    >
      {/* Logo watermark for light sections */}
      {hasWatermark && (
        <div
          className={`absolute ${watermarkPositionStyles[watermarkPosition]} ${watermarkSizeStyles[watermarkSize]} pointer-events-none`}
        >
          <Image
            src="/logo-icon.png"
            alt=""
            fill
            className={`object-contain ${isLightVariant ? "opacity-[0.04]" : "opacity-[0.08]"}`}
            aria-hidden="true"
          />
        </div>
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
