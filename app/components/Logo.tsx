import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "horizontal" | "stacked" | "icon";
}

export default function Logo({
  className = "",
  size = "md",
  variant = "horizontal",
}: LogoProps) {
  // Size configurations for different variants
  const horizontalSizes = {
    sm: { width: 180, height: 50 },
    md: { width: 240, height: 65 },
    lg: { width: 320, height: 85 },
  };

  const stackedSizes = {
    sm: { width: 120, height: 150 },
    md: { width: 160, height: 200 },
    lg: { width: 200, height: 250 },
  };

  const iconSizes = {
    sm: { width: 36, height: 50 },
    md: { width: 48, height: 65 },
    lg: { width: 64, height: 85 },
  };

  // Select the right size and source based on variant
  let sizes, logoSrc;

  switch (variant) {
    case "horizontal":
      sizes = horizontalSizes[size];
      logoSrc = "/logo-horizontal.png";
      break;
    case "stacked":
      sizes = stackedSizes[size];
      logoSrc = "/logo-stacked.png";
      break;
    case "icon":
    default:
      sizes = iconSizes[size];
      logoSrc = "/logo-icon.png";
      break;
  }

  return (
    <Image
      src={logoSrc}
      alt="KingGen Ministries - Christian Counseling for Women"
      width={sizes.width}
      height={sizes.height}
      className={`object-contain ${className}`}
      priority
    />
  );
}

export function LogoIcon({ className = "", size = 48 }: { className?: string; size?: number }) {
  return (
    <Image
      src="/logo-icon.png"
      alt="KingGen Ministries"
      width={size}
      height={size * 1.35}
      className={`object-contain ${className}`}
    />
  );
}
