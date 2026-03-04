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

type ContainerSize = "default" | "narrow" | "wide" | "full";
type SectionPadding = "none" | "sm" | "md" | "lg" | "xl";

interface SectionProps {
  children: ReactNode;
  variant?: SectionVariant;
  className?: string;
  id?: string;
  containerSize?: ContainerSize;
  padding?: SectionPadding;
}

const lightVariants = new Set<SectionVariant>([
  "default",
  "light",
  "soft",
  "art-cream",
  "cross-light",
]);

const darkVariants = new Set<SectionVariant>([
  "primary",
  "dark",
  "art-green",
  "kinggen-branded",
  "cross-green",
]);

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
  sm: "py-8 md:py-10",
  md: "py-10 md:py-12",
  lg: "py-12 md:py-16",
  xl: "py-14 md:py-[4.5rem]",
};

const lightTextureOpacity: Partial<Record<SectionVariant, number>> = {
  default: 0.14,
  light: 0.12,
  soft: 0.1,
  "art-cream": 0.16,
  "cross-light": 0.14,
};

const darkTextureOpacity: Partial<Record<SectionVariant, number>> = {
  primary: 0.42,
  dark: 0.45,
  "art-green": 0.45,
  "kinggen-branded": 0.5,
  "cross-green": 0.42,
};

const curatedTexture = {
  light: "/brand/curated/bg/light-watermark-right.png",
  dark: "/brand/curated/bg/green-watermark-tall.png",
} as const;

export default function Section({
  children,
  variant = "default",
  className = "",
  id,
  containerSize = "default",
  padding = "lg",
}: SectionProps) {
  const isLightSection = lightVariants.has(variant);
  const isDarkSection = darkVariants.has(variant);

  return (
    <section
      id={id}
      className={`${variantStyles[variant]} ${paddingStyles[padding]} ${isDarkSection ? "section-dark" : "section-light"} ${className} relative overflow-hidden isolate`}
    >
      <OptimizedBackground
        src={isLightSection ? curatedTexture.light : curatedTexture.dark}
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundPosition: isLightSection ? "center right" : "center",
          backgroundSize: "cover",
          opacity: isLightSection
            ? (lightTextureOpacity[variant] ?? 0.22)
            : (darkTextureOpacity[variant] ?? 0.55),
        }}
      />
      <div
        className={`absolute inset-0 pointer-events-none ${isLightSection ? "brand-surface-light-overlay" : "brand-surface-dark-overlay"}`}
        aria-hidden="true"
      />

      <div
        className={`container mx-auto px-4 lg:px-8 ${containerSizes[containerSize]} relative z-10`}
      >
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
    <div className={`mb-10 md:mb-12 ${centered ? "text-center" : ""} ${className}`}>
      <div className={`h-[2px] w-12 rounded-full bg-gradient-to-r from-brand-accent to-brand-primary/70 ${centered ? "mx-auto" : ""} mb-5 opacity-85`} />
      <h2
        className={`text-3xl md:text-4xl lg:text-[2.65rem] font-bold font-heading mb-3 ${light ? "text-white" : "text-text-primary"}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base md:text-lg leading-relaxed max-w-2xl ${centered ? "mx-auto" : ""} ${light ? "text-white/95" : "text-text-secondary"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
