import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "full" | "icon";
}

export default function Logo({
  className = "",
  size = "md",
  variant = "icon",
}: LogoProps) {
  // Size configurations - logo images include text, so we size the whole image
  const sizes = {
    sm: { width: 120, height: 40 },
    md: { width: 160, height: 52 },
    lg: { width: 200, height: 65 },
  };

  const iconSizes = {
    sm: { width: 32, height: 40 },
    md: { width: 40, height: 50 },
    lg: { width: 56, height: 70 },
  };

  const { width, height } = variant === "full" ? sizes[size] : iconSizes[size];

  // Use the appropriate logo file
  const logoSrc = variant === "full" ? "/logo-full.png" : "/logo-icon.png";

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Image
        src={logoSrc}
        alt="KingGen Ministries"
        width={width}
        height={height}
        className="object-contain"
        priority
      />
      {variant === "icon" && (
        <div className="flex flex-col leading-tight">
          <span className="font-heading font-semibold text-lg">KingGen</span>
          <span className="text-[10px] tracking-wider uppercase opacity-70">Ministries</span>
        </div>
      )}
    </div>
  );
}

export function LogoIcon({ className = "", size = 40 }: { className?: string; size?: number }) {
  return (
    <Image
      src="/logo-icon.png"
      alt="KingGen Ministries"
      width={size}
      height={size * 1.25}
      className={`object-contain ${className}`}
    />
  );
}
