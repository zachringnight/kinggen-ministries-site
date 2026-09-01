import Link from "next/link";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "accent" | "gold" | "outline" | "outline-white" | "ghost" | "white";
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
    "bg-gradient-to-br from-brand-primary to-brand-secondary text-white hover:from-brand-primary-dark hover:to-brand-primary shadow-lg shadow-brand-primary/30 border border-brand-primary/30",
  secondary:
    "bg-brand-secondary text-white hover:bg-brand-primary shadow-lg shadow-brand-secondary/25 border border-brand-secondary/30",
  accent:
    "bg-brand-accent text-brand-primary hover:bg-brand-accent/85 shadow-lg shadow-brand-accent/25 border border-brand-accent/30",
  gold: "bg-gradient-to-br from-brand-gold to-brand-gold-dark text-brand-on-gold hover:from-brand-gold-dark hover:to-brand-gold-dark shadow-lg shadow-brand-gold/30 border border-brand-gold/30",
  outline: "border border-brand-primary/65 text-brand-primary hover:bg-brand-primary hover:text-white",
  "outline-white": "border-2 border-white/70 text-white hover:bg-white/15",
  ghost: "text-brand-primary hover:bg-brand-light",
  white: "bg-white text-brand-primary hover:bg-brand-soft shadow-lg border border-white/60",
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
    font-semibold rounded-xl tracking-[0.01em]
    transition-all duration-300 ease-out
    btn-hover-lift
    focus:outline-none focus:ring-2 focus:ring-brand-primary-dark focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
  `;

  const combinedStyles = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${fullWidth ? "w-full" : ""}
    ${className}
  `
    .trim()
    .replace(/\s+/g, " ");

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="flex-shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    if (
      external ||
      href.startsWith("http") ||
      href.startsWith("tel:") ||
      href.startsWith("sms:") ||
      href.startsWith("mailto:")
    ) {
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
    <button type={type} onClick={onClick} disabled={disabled} className={combinedStyles}>
      {content}
    </button>
  );
}
