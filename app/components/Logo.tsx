import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "horizontal" | "stacked" | "icon";
  theme?: "light" | "dark";
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

const iconSrc: Record<NonNullable<LogoProps["theme"]>, string> = {
  light: "/brand/logo/icon-dark-green.webp",
  dark: "/brand/logo/icon-white.webp",
};

export default function Logo({
  className = "",
  size = "md",
  variant = "horizontal",
  theme = "light",
}: LogoProps) {
  const iconSize = iconSizes[size];
  const src = iconSrc[theme];
  const textColor = theme === "dark" ? "text-white" : "text-brand-primary";
  const subtitleColor = theme === "dark" ? "text-white/75" : "text-text-secondary";

  if (variant === "icon") {
    return (
      <Image
        src={src}
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
          src={src}
          alt="KingGen Ministries"
          width={iconSize}
          height={iconSize}
          className="object-contain"
          priority
        />
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
      <Image
        src={src}
        alt="KingGen Ministries"
        width={iconSize}
        height={iconSize}
        className="object-contain"
        priority
      />
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
    <Image
      src={iconSrc[theme]}
      alt="KingGen Ministries"
      width={size}
      height={size}
      className={`object-contain ${className}`}
    />
  );
}
