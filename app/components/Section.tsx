import { ReactNode } from "react";

type SectionVariant = "default" | "light" | "soft" | "primary" | "dark";

interface SectionProps {
  children: ReactNode;
  variant?: SectionVariant;
  className?: string;
  id?: string;
  containerSize?: "default" | "narrow" | "wide" | "full";
  padding?: "none" | "sm" | "md" | "lg" | "xl";
  noWatermark?: boolean;
}

const variantStyles: Record<SectionVariant, string> = {
  default: "bg-background",
  light: "section-light",
  soft: "bg-brand-soft/50",
  primary: "hero-gradient text-white",
  dark: "bg-brand-primary text-white",
};

// Variants that should have white cross watermark background
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

export default function Section({
  children,
  variant = "default",
  className = "",
  id,
  containerSize = "default",
  padding = "lg",
  noWatermark = false,
}: SectionProps) {
  const hasWatermark = !noWatermark && watermarkVariants.includes(variant);

  return (
    <section
      id={id}
      className={`${variantStyles[variant]} ${paddingStyles[padding]} ${className} relative overflow-hidden`}
    >
      {hasWatermark && (
        <div
          className="absolute inset-0 bg-no-repeat bg-left-bottom pointer-events-none opacity-60"
          style={{
            backgroundImage: "url('/bg_white_cross.png')",
            backgroundSize: "400px auto",
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
