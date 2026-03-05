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

const brandMarkSrc: Record<BrandMarkTheme, string> = {
  light: "/brand/curated/logo/mark-light-bg.png",
  dark: "/brand/curated/logo/mark-dark-bg.png",
  soft: "/brand/curated/logo/mark-white-bg.png",
};

const lockupSrc: Record<LogoTheme, string> = {
  light: "/brand/curated/logo/lockup-light-horizontal.png",
  dark: "/brand/curated/logo/lockup-transparent-white.png",
};

const lockupWidths: Record<NonNullable<LogoProps["size"]>, number> = {
  sm: 150,
  md: 210,
  lg: 270,
};

const markShadowByTheme: Record<BrandMarkTheme, string> = {
  light: "drop-shadow(0 8px 18px rgba(45,74,44,0.22))",
  dark: "drop-shadow(0 10px 22px rgba(0,0,0,0.35))",
  soft: "drop-shadow(0 8px 18px rgba(45,74,44,0.16))",
};

const lockupShadowByTheme: Record<LogoTheme, string> = {
  light: "drop-shadow(0 10px 22px rgba(45,74,44,0.2))",
  dark: "none",
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
  alt = "KingGen Ministries logo mark",
  className = "",
  priority = false,
}: BrandMarkProps) {
  const imageSrc = brandMarkSrc[theme];
  const imageRadius = Math.max(8, Math.round(size * 0.16));

  return (
    <span className={`inline-flex items-center justify-center ${className}`}>
      <Image
        src={imageSrc}
        alt={alt}
        width={size}
        height={size}
        className="object-contain"
        style={{
          borderRadius: imageRadius,
          filter: markShadowByTheme[theme],
        }}
        priority={priority}
      />
    </span>
  );
}

interface BrandLockupProps {
  theme?: LogoTheme;
  size?: NonNullable<LogoProps["size"]>;
  alt?: string;
  className?: string;
  priority?: boolean;
}

export function BrandLockup({
  theme = "light",
  size = "md",
  alt = "KingGen Ministries",
  className = "",
  priority = false,
}: BrandLockupProps) {
  const width = lockupWidths[size];
  const imageSrc = lockupSrc[theme];

  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={width}
      height={Math.round(width * 0.44)}
      className={`w-auto h-auto object-contain max-w-full ${className}`}
      style={{ filter: lockupShadowByTheme[theme] }}
      priority={priority}
    />
  );
}

export default function Logo({
  className = "",
  size = "md",
  variant = "horizontal",
  theme = "light",
}: LogoProps) {
  const iconSize = iconSizes[size];
  const markTheme: BrandMarkTheme = theme === "dark" ? "dark" : "light";

  if (variant === "icon") {
    return <BrandMark theme={markTheme} size={iconSize} className={className} priority />;
  }

  return <BrandLockup theme={theme} size={size} className={className} priority />;
}

export function LogoIcon({
  className = "",
  size = 48,
}: {
  className?: string;
  size?: number;
  theme?: "light" | "dark";
}) {
  return (
    <Image
      src="/icon.png"
      alt="KingGen Ministries logo icon"
      width={size}
      height={size}
      className={`object-contain rounded-[22%] ${className}`}
      style={{ filter: "drop-shadow(0 8px 18px rgba(45,74,44,0.18))" }}
    />
  );
}
