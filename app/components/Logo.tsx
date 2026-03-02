import Image from "next/image";

type LogoTheme = "light" | "dark";
type BrandMarkTheme = LogoTheme | "soft";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "horizontal" | "stacked" | "icon";
  theme?: LogoTheme;
}

const iconSizes: Record<NonNullable<LogoProps["size"]>, number> = {
  sm: 32,
  md: 40,
  lg: 52,
};

const textSizes: Record<NonNullable<LogoProps["size"]>, string> = {
  sm: "text-base",
  md: "text-xl",
  lg: "text-2xl",
};

const subtitleSizes: Record<NonNullable<LogoProps["size"]>, string> = {
  sm: "text-[10px]",
  md: "text-xs",
  lg: "text-sm",
};

const brandMarkSrc: Record<BrandMarkTheme, string> = {
  light: "/brand/logo/icon-dark-green.webp",
  dark: "/brand/logo/icon-white.webp",
  soft: "/brand/logo/icon-light-gray.webp",
};

const brandMarkStyles: Record<BrandMarkTheme, { frameClassName: string; imageClassName: string }> = {
  light: {
    frameClassName:
      "bg-gradient-to-br from-white to-brand-light border border-brand-light/85 shadow-[0_10px_30px_-20px_rgba(45,74,44,0.85)]",
    imageClassName: "ring-1 ring-black/5",
  },
  dark: {
    frameClassName: "bg-white/16 border border-white/30 shadow-[0_16px_36px_-24px_rgba(0,0,0,0.75)]",
    imageClassName: "",
  },
  soft: {
    frameClassName: "bg-white/14 border border-white/28 shadow-[0_12px_28px_-22px_rgba(0,0,0,0.6)]",
    imageClassName: "",
  },
};

interface BrandMarkProps {
  theme?: BrandMarkTheme;
  size?: number;
  alt?: string;
  className?: string;
  priority?: boolean;
}

export function BrandMark({
  theme = "light",
  size = 32,
  alt = "",
  className = "",
  priority = false,
}: BrandMarkProps) {
  const visualStyle = brandMarkStyles[theme];
  const imageSrc = brandMarkSrc[theme];
  const imageRadius = Math.max(8, Math.round(size * 0.25));
  const frameRadius = imageRadius + 3;

  return (
    <span
      className={`inline-flex items-center justify-center p-[2px] ${visualStyle.frameClassName} ${className}`}
      style={{ borderRadius: frameRadius }}
    >
      <Image
        src={imageSrc}
        alt={alt}
        width={size}
        height={size}
        className={`object-contain ${visualStyle.imageClassName}`}
        style={{ borderRadius: imageRadius }}
        priority={priority}
      />
    </span>
  );
}

export default function Logo({
  className = "",
  size = "md",
  variant = "horizontal",
  theme = "light",
}: LogoProps) {
  const iconSize = iconSizes[size];
  const textColor = theme === "dark" ? "text-white" : "text-brand-primary";
  const subtitleColor = theme === "dark" ? "text-white/75" : "text-text-secondary";
  const markTheme: BrandMarkTheme = theme === "dark" ? "dark" : "light";

  if (variant === "icon") {
    return (
      <BrandMark
        theme={markTheme}
        size={iconSize}
        alt="KingGen Ministries"
        className={className}
        priority
      />
    );
  }

  if (variant === "stacked") {
    return (
      <div className={`inline-flex flex-col items-center text-center ${className}`}>
        <BrandMark theme={markTheme} size={iconSize} priority />
        <span className={`mt-2 ${textColor} leading-none ${textSizes[size]}`}>
          <span className="font-extrabold">KingGen</span>{" "}
          <span className="font-light">Ministries</span>
        </span>
        <span className={`mt-1 ${subtitleColor} tracking-[0.08em] uppercase ${subtitleSizes[size]}`}>
          Christian Counseling for Women
        </span>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <BrandMark theme={markTheme} size={iconSize} priority />
      <div className="leading-none">
        <span className={`block ${textColor} ${textSizes[size]}`}>
          <span className="font-extrabold">KingGen</span>{" "}
          <span className="font-light">Ministries</span>
        </span>
        <span className={`block mt-1 ${subtitleColor} tracking-[0.08em] uppercase ${subtitleSizes[size]}`}>
          Christian Counseling for Women
        </span>
      </div>
    </div>
  );
}

export function LogoIcon({
  className = "",
  size = 48,
  theme = "light",
}: {
  className?: string;
  size?: number;
  theme?: "light" | "dark";
}) {
  return (
    <BrandMark
      theme={theme}
      size={size}
      alt="KingGen Ministries"
      className={className}
    />
  );
}
