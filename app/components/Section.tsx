import { ReactNode } from "react";

type SectionVariant = "default" | "light" | "soft" | "primary" | "dark" | "art-cream" | "art-green";
type WatermarkType = "cross" | "logo" | "art-left" | "art-right" | "art-center" | "kinggen-bg" | "none";

interface SectionProps {
  children: ReactNode;
  variant?: SectionVariant;
  className?: string;
  id?: string;
  containerSize?: "default" | "narrow" | "wide" | "full";
  padding?: "none" | "sm" | "md" | "lg" | "xl";
  watermark?: WatermarkType;
  artImage?: string;
}

const variantStyles: Record<SectionVariant, string> = {
  default: "bg-brand-soft",
  light: "bg-brand-light",
  soft: "bg-brand-cream",
  primary: "bg-brand-primary text-white",
  dark: "bg-brand-primary text-white",
  "art-cream": "bg-brand-cream",
  "art-green": "bg-brand-primary text-white",
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

// Art images for watermarks
const artImages: Record<string, { src: string; position: string; size: string; opacity: string }> = {
  "cross-1": { src: "/Untitled-1.png", position: "right bottom", size: "320px auto", opacity: "0.35" },
  "cross-2": { src: "/Untitled-2.png", position: "left bottom", size: "280px auto", opacity: "0.40" },
  "cross-3": { src: "/Untitled-3.png", position: "right top", size: "300px auto", opacity: "0.30" },
  "cross-4": { src: "/Untitled-4.png", position: "left center", size: "260px auto", opacity: "0.35" },
  "cross-5": { src: "/Untitled-5.png", position: "right center", size: "280px auto", opacity: "0.30" },
  "cross-6": { src: "/Untitled-6.png", position: "center bottom", size: "320px auto", opacity: "0.25" },
  "cross-7": { src: "/Untitled-7.png", position: "left top", size: "260px auto", opacity: "0.35" },
  "white-cross": { src: "/bg_white_cross.png", position: "center center", size: "400px auto", opacity: "0.08" },
  "kinggen-bg": { src: "/KingGen Background (1).png", position: "center center", size: "cover", opacity: "0.15" },
};

export default function Section({
  children,
  variant = "default",
  className = "",
  id,
  containerSize = "default",
  padding = "lg",
  watermark = "cross",
  artImage,
}: SectionProps) {
  const isLightSection = ["default", "light", "soft", "art-cream"].includes(variant);
  const isGreenSection = ["primary", "dark", "art-green"].includes(variant);

  // Determine which art to show
  const showCrossWatermark = watermark === "cross" && isLightSection;
  const showLogoWatermark = watermark === "logo" && isGreenSection;
  const showArtLeft = watermark === "art-left";
  const showArtRight = watermark === "art-right";
  const showArtCenter = watermark === "art-center";
  const showKinggenBg = watermark === "kinggen-bg";

  // Get custom art or default based on position
  const getArtConfig = () => {
    if (artImage && artImages[artImage]) return artImages[artImage];
    if (showArtLeft) return artImages["cross-4"];
    if (showArtRight) return artImages["cross-1"];
    if (showArtCenter) return artImages["cross-6"];
    if (showKinggenBg) return artImages["kinggen-bg"];
    return null;
  };

  const artConfig = getArtConfig();

  return (
    <section
      id={id}
      className={`${variantStyles[variant]} ${paddingStyles[padding]} ${className} relative overflow-hidden`}
    >
      {/* Cross watermark for cream/light sections - using Untitled cross designs */}
      {showCrossWatermark && (
        <div
          className="absolute inset-0 bg-no-repeat pointer-events-none"
          style={{
            backgroundImage: "url('/Untitled-2.png')",
            backgroundPosition: "left bottom",
            backgroundSize: "280px auto",
            opacity: 0.40,
          }}
          aria-hidden="true"
        />
      )}

      {/* Full logo watermark for green sections */}
      {showLogoWatermark && (
        <div
          className="absolute inset-0 bg-no-repeat bg-center pointer-events-none"
          style={{
            backgroundImage: "url('/logo-full.png')",
            backgroundSize: "350px auto",
            opacity: 0.06,
          }}
          aria-hidden="true"
        />
      )}

      {/* Custom art watermark */}
      {artConfig && (showArtLeft || showArtRight || showArtCenter || showKinggenBg) && (
        <div
          className="absolute inset-0 bg-no-repeat pointer-events-none"
          style={{
            backgroundImage: `url('${artConfig.src}')`,
            backgroundPosition: artConfig.position,
            backgroundSize: artConfig.size,
            opacity: parseFloat(artConfig.opacity),
          }}
          aria-hidden="true"
        />
      )}

      {/* KingGen branded background texture overlay for art variants */}
      {variant === "art-cream" && (
        <div
          className="absolute inset-0 bg-no-repeat pointer-events-none"
          style={{
            backgroundImage: "url('/kinggen-background-1.png')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            opacity: 0.08,
          }}
          aria-hidden="true"
        />
      )}

      {variant === "art-green" && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url('/bg_green_texture_1920x1080.png')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            opacity: 0.3,
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
