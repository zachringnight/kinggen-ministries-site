import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "horizontal" | "stacked" | "icon";
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

export default function Logo({
  className = "",
  size = "md",
  variant = "horizontal",
}: LogoProps) {
  const iconSize = iconSizes[size];

  if (variant === "icon") {
    return (
      <Image
        src="/brand/logo/icon-dark-green.webp"
        alt="KingGen Ministries"
        width={iconSize}
        height={iconSize}
        className={`object-contain ${className}`}
        priority
      />
    );
  }

  if (variant === "stacked") {
    return (
      <div className={`inline-flex flex-col items-center text-center ${className}`}>
        <Image
          src="/brand/logo/icon-dark-green.webp"
          alt="KingGen Ministries"
          width={iconSize}
          height={iconSize}
          className="object-contain"
          priority
        />
        <span className={`mt-2 text-brand-primary font-heading font-bold leading-none ${textSizes[size]}`}>
          KingGen Ministries
        </span>
        <span className={`mt-1 text-text-secondary tracking-[0.08em] uppercase ${subtitleSizes[size]}`}>
          Christian Counseling for Women
        </span>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <Image
        src="/brand/logo/icon-dark-green.webp"
        alt="KingGen Ministries"
        width={iconSize}
        height={iconSize}
        className="object-contain"
        priority
      />
      <div className="leading-none">
        <span className={`block text-brand-primary font-heading font-bold ${textSizes[size]}`}>
          KingGen Ministries
        </span>
        <span className={`block mt-1 text-text-secondary tracking-[0.08em] uppercase ${subtitleSizes[size]}`}>
          Christian Counseling for Women
        </span>
      </div>
    </div>
  );
}

export function LogoIcon({ className = "", size = 48 }: { className?: string; size?: number }) {
  return (
    <Image
      src="/brand/logo/icon-dark-green.webp"
      alt="KingGen Ministries"
      width={size}
      height={size}
      className={`object-contain ${className}`}
    />
  );
}
