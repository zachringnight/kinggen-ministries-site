interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export default function Logo({ className = "", size = "md", showText = true }: LogoProps) {
  const sizes = {
    sm: { icon: 32, text: "text-lg" },
    md: { icon: 40, text: "text-xl" },
    lg: { icon: 56, text: "text-2xl" },
  };

  const { icon, text } = sizes[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Stacked Stones + Cross Logo */}
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="KingGen Ministries Logo"
      >
        {/* Bottom stone (largest) */}
        <ellipse
          cx="32"
          cy="52"
          rx="20"
          ry="8"
          fill="currentColor"
          opacity="0.3"
        />
        <ellipse
          cx="32"
          cy="50"
          rx="18"
          ry="7"
          fill="currentColor"
          opacity="0.5"
        />

        {/* Middle stone */}
        <ellipse
          cx="32"
          cy="42"
          rx="14"
          ry="6"
          fill="currentColor"
          opacity="0.6"
        />

        {/* Top stone (smallest) */}
        <ellipse
          cx="32"
          cy="34"
          rx="10"
          ry="5"
          fill="currentColor"
          opacity="0.8"
        />

        {/* Cross */}
        <rect
          x="30"
          y="8"
          width="4"
          height="22"
          rx="1"
          fill="currentColor"
        />
        <rect
          x="24"
          y="14"
          width="16"
          height="4"
          rx="1"
          fill="currentColor"
        />
      </svg>

      {showText && (
        <div className="flex flex-col leading-tight">
          <span className={`font-heading font-semibold ${text}`}>KingGen</span>
          <span className="text-xs tracking-wider uppercase opacity-80">Ministries</span>
        </div>
      )}
    </div>
  );
}

export function LogoIcon({ className = "", size = 40 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="KingGen Ministries Logo"
    >
      {/* Bottom stone (largest) */}
      <ellipse
        cx="32"
        cy="52"
        rx="20"
        ry="8"
        fill="currentColor"
        opacity="0.3"
      />
      <ellipse
        cx="32"
        cy="50"
        rx="18"
        ry="7"
        fill="currentColor"
        opacity="0.5"
      />

      {/* Middle stone */}
      <ellipse
        cx="32"
        cy="42"
        rx="14"
        ry="6"
        fill="currentColor"
        opacity="0.6"
      />

      {/* Top stone (smallest) */}
      <ellipse
        cx="32"
        cy="34"
        rx="10"
        ry="5"
        fill="currentColor"
        opacity="0.8"
      />

      {/* Cross */}
      <rect
        x="30"
        y="8"
        width="4"
        height="22"
        rx="1"
        fill="currentColor"
      />
      <rect
        x="24"
        y="14"
        width="16"
        height="4"
        rx="1"
        fill="currentColor"
      />
    </svg>
  );
}
