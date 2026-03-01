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
  default: 0.12,
  light: 0.1,
  soft: 0.1,
  "art-cream": 0.14,
  "cross-light": 0.12,
};

const darkTextureOpacity: Partial<Record<SectionVariant, number>> = {
  primary: 0.2,
  dark: 0.22,
  "art-green": 0.22,
  "kinggen-branded": 0.24,
  "cross-green": 0.2,
};

const curatedTexture = {
  light: "/brand/bg/cream-cross-texture.webp",
  dark: "/brand/bg/dark-green-texture.webp",
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

  return (
    <section
      id={id}
      className={`${variantStyles[variant]} ${paddingStyles[padding]} ${className} relative overflow-hidden isolate`}
    >
      <OptimizedBackground
        src={isLightSection ? curatedTexture.light : curatedTexture.dark}
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundPosition: "center",
          backgroundSize: "cover",
          opacity: isLightSection
            ? (lightTextureOpacity[variant] ?? 0.12)
            : (darkTextureOpacity[variant] ?? 0.2),
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
