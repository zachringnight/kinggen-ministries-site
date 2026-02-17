import type { ReactNode } from "react";

interface InnerPageHeroProps {
  title: string;
  subtitle?: string;
  headerImage?: "inner" | "about";
  ariaLabel?: string;
  children?: ReactNode;
}

const headerImages: Record<string, string> = {
  inner: "/brand/headers/inner-header.webp",
  about: "/brand/headers/about-header.webp",
};

export default function InnerPageHero({
  title,
  subtitle,
  headerImage = "inner",
  ariaLabel,
  children,
}: InnerPageHeroProps) {
  return (
    <>
      {/* Branded header image — displayed at full visibility */}
      <section
        className="relative w-full bg-cover bg-center"
        style={{
          backgroundImage: `url('${headerImages[headerImage]}')`,
          aspectRatio: "2460 / 1080",
        }}
        role="banner"
        aria-label={ariaLabel ?? title}
      >
        <h1 className="sr-only">{title}</h1>
      </section>

      {/* Title strip */}
      <div className="bg-brand-primary">
        <div className="container mx-auto px-4 sm:px-6 py-5 md:py-6">
          <div className="max-w-4xl">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-white leading-tight">
              {title}
            </p>
            {subtitle && (
              <p className="mt-2 text-sm md:text-base text-white/80 leading-relaxed max-w-2xl">
                {subtitle}
              </p>
            )}
            {children && <div className="mt-4">{children}</div>}
          </div>
        </div>
      </div>
    </>
  );
}
