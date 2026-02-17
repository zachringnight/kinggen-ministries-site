import { ReactNode } from "react";
import Button from "./Button";

interface HeroProps {
  title: string | ReactNode;
  subtitle?: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  centered?: boolean;
  size?: "default" | "large" | "small";
  variant?: "gradient" | "image" | "simple";
  children?: ReactNode;
}

export default function Hero({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  centered = true,
  size = "default",
  variant = "gradient",
  children,
}: HeroProps) {
  const sizeStyles = {
    small: "py-16 md:py-24",
    default: "py-24 md:py-32 lg:py-40",
    large: "py-32 md:py-40 lg:py-52",
  };

  const variantStyles = {
    gradient: "hero-gradient text-white",
    image: "bg-brand-primary text-white relative",
    simple: "bg-brand-light",
  };

  return (
    <section
      className={`${variantStyles[variant]} ${sizeStyles[size]} relative overflow-hidden`}
    >
      {/* Decorative elements */}
      {variant === "gradient" && (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-accent/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
      )}

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div
          className={`${centered ? "text-center max-w-4xl mx-auto" : "max-w-3xl"}`}
        >
          {/* Subtitle/Eyebrow */}
          {subtitle && (
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
                variant === "simple"
                  ? "bg-brand-primary/10 text-brand-primary"
                  : "bg-white/10 text-white/90"
              } text-sm font-medium mb-6 animate-fade-in-up`}
            >
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse-soft" />
              {subtitle}
            </div>
          )}

          {/* Title */}
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading mb-6 leading-tight animate-fade-in-up stagger-1 ${
              variant === "simple" ? "text-text-primary" : ""
            }`}
          >
            {title}
          </h1>

          {/* Description */}
          {description && (
            <p
              className={`text-lg md:text-xl lg:text-2xl mb-10 leading-relaxed animate-fade-in-up stagger-2 ${
                variant === "simple" ? "text-text-secondary" : "text-white/90"
              }`}
            >
              {description}
            </p>
          )}

          {/* CTA Buttons */}
          {(primaryCTA || secondaryCTA) && (
            <div
              className={`flex flex-col sm:flex-row gap-4 animate-fade-in-up stagger-3 ${
                centered ? "justify-center" : ""
              }`}
            >
              {primaryCTA && (
                <Button
                  href={primaryCTA.href}
                  variant={variant === "simple" ? "primary" : "white"}
                  size="lg"
                >
                  {primaryCTA.text}
                </Button>
              )}
              {secondaryCTA && (
                <Button
                  href={secondaryCTA.href}
                  variant={variant === "simple" ? "outline" : "accent"}
                  size="lg"
                >
                  {secondaryCTA.text}
                </Button>
              )}
            </div>
          )}

          {/* Additional content */}
          {children && (
            <div className="mt-12 animate-fade-in-up stagger-4">{children}</div>
          )}
        </div>
      </div>
    </section>
  );
}
