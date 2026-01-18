import { ReactNode } from "react";
import Link from "next/link";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  href?: string;
  padding?: "sm" | "md" | "lg";
}

const paddingSizes: Record<string, string> = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export default function Card({
  children,
  className = "",
  hover = true,
  href,
  padding = "lg",
}: CardProps) {
  const baseStyles = `
    bg-white rounded-2xl shadow-md border border-brand-light
    ${hover ? "card-hover" : ""}
    ${paddingSizes[padding]}
    ${className}
  `.trim();

  if (href) {
    return (
      <Link href={href} className={`block ${baseStyles}`}>
        {children}
      </Link>
    );
  }

  return <div className={baseStyles}>{children}</div>;
}

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({ icon, title, description, className = "" }: FeatureCardProps) {
  return (
    <Card className={className}>
      <div className="text-center">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-primary to-brand-secondary text-white flex items-center justify-center mx-auto mb-6 shadow-lg shadow-brand-primary/20">
          {icon}
        </div>
        <h3 className="text-xl font-bold font-heading text-text-primary mb-3">
          {title}
        </h3>
        <p className="text-text-secondary leading-relaxed">{description}</p>
      </div>
    </Card>
  );
}

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features?: string[];
  className?: string;
}

export function ServiceCard({
  icon,
  title,
  description,
  features,
  className = "",
}: ServiceCardProps) {
  return (
    <Card className={`relative overflow-hidden ${className}`}>
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-accent via-brand-primary to-brand-secondary" />

      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-brand-light text-brand-primary flex items-center justify-center flex-shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold font-heading text-text-primary mb-2">
            {title}
          </h3>
          <p className="text-text-secondary">{description}</p>
        </div>
      </div>

      {features && features.length > 0 && (
        <ul className="mt-6 space-y-2 border-t border-brand-light pt-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3 text-text-secondary">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}

interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
  className?: string;
}

export function TestimonialCard({
  quote,
  author,
  role,
  className = "",
}: TestimonialCardProps) {
  return (
    <Card className={`relative ${className}`}>
      {/* Quote mark */}
      <div className="absolute top-6 right-6 text-brand-accent/20">
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      <blockquote className="text-lg text-text-secondary italic mb-6 border-l-0 pl-0">
        &ldquo;{quote}&rdquo;
      </blockquote>

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center text-white font-bold">
          {author.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-text-primary">{author}</p>
          {role && <p className="text-sm text-text-muted">{role}</p>}
        </div>
      </div>
    </Card>
  );
}

interface StatCardProps {
  value: string;
  label: string;
  icon?: ReactNode;
  className?: string;
}

export function StatCard({ value, label, icon, className = "" }: StatCardProps) {
  return (
    <Card className={`text-center ${className}`} padding="md">
      {icon && (
        <div className="w-12 h-12 rounded-full bg-brand-accent/10 text-brand-accent flex items-center justify-center mx-auto mb-4">
          {icon}
        </div>
      )}
      <p className="text-4xl md:text-5xl font-bold font-heading gradient-text mb-2">
        {value}
      </p>
      <p className="text-text-secondary">{label}</p>
    </Card>
  );
}
