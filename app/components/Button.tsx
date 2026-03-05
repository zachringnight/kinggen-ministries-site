import Link from "next/link";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "accent" | "outline" | "outline-white" | "ghost" | "white";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  external?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-br from-brand-primary to-brand-secondary text-white hover:from-brand-primary-dark hover:to-brand-primary shadow-[0_14px_28px_-16px_rgba(45,74,44,0.46)] hover:shadow-[0_18px_34px_-16px_rgba(45,74,44,0.54)] border border-brand-primary/30",
  secondary:
    "bg-brand-secondary text-white hover:bg-brand-primary shadow-[0_12px_24px_-16px_rgba(74,107,74,0.4)] hover:shadow-[0_16px_30px_-16px_rgba(45,74,44,0.46)] border border-brand-secondary/30",
  accent:
    "bg-brand-accent text-brand-primary hover:bg-brand-accent/90 shadow-[0_12px_24px_-16px_rgba(123,163,144,0.42)] hover:shadow-[0_16px_30px_-16px_rgba(91,132,113,0.48)] border border-brand-accent/35",
  outline:
    "border border-brand-primary/60 text-brand-primary bg-white/82 hover:bg-brand-primary hover:text-white shadow-[0_10px_22px_-18px_rgba(45,74,44,0.24)] hover:shadow-[0_14px_28px_-18px_rgba(45,74,44,0.32)]",
  "outline-white":
    "border border-white/68 text-white bg-white/6 hover:bg-white/14 shadow-[0_14px_28px_-18px_rgba(0,0,0,0.24)] hover:shadow-[0_18px_34px_-18px_rgba(0,0,0,0.34)]",
  ghost:
    "text-brand-primary hover:bg-brand-light",
  white:
    "bg-white text-brand-primary hover:bg-brand-soft shadow-[0_14px_30px_-18px_rgba(0,0,0,0.24)] hover:shadow-[0_18px_34px_-18px_rgba(0,0,0,0.32)] border border-white/70",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  icon,
  iconPosition = "left",
  fullWidth = false,
  external = false,
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center gap-2
    relative overflow-hidden isolate
    font-semibold rounded-xl tracking-[0.01em]
    transition-[background-color,color,border-color,box-shadow,filter] duration-300 ease-out
    btn-hover-lift
    focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
  `;

  const combinedStyles = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${fullWidth ? "w-full" : ""}
    ${className}
  `.trim().replace(/\s+/g, " ");

  const content = (
    <span className="relative z-[1] inline-flex items-center justify-center gap-2">
      {icon && iconPosition === "left" && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="flex-shrink-0">{icon}</span>}
    </span>
  );

  if (href) {
    if (external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
      return (
        <a
          href={href}
          className={combinedStyles}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          onClick={onClick}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedStyles} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedStyles}
    >
      {content}
    </button>
  );
}
