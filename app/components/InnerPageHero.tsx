import type { ReactNode } from "react";

type HeroBackground = "inner" | "about";

interface InnerPageHeroProps {
  title: string;
  subtitle?: string;
  background?: HeroBackground;
  ariaLabel?: string;
  children?: ReactNode;
  minHeightClassName?: string;
}

const backgroundMap: Record<HeroBackground, string> = {
  inner: "/brand/headers/inner-header.webp",
  about: "/brand/headers/about-header.webp",
};

export default function InnerPageHero({
  title,
  subtitle,
  background = "inner",
  ariaLabel,
  children,
  minHeightClassName = "min-h-[40vh] md:min-h-[50vh]",
}: InnerPageHeroProps) {
  return (
    <section
      className={`relative brand-hero-banner w-full ${minHeightClassName} bg-cover bg-center animate-fade-in-up flex items-end`}
      style={{ backgroundImage: `url('${backgroundMap[background]}')` }}
      role="banner"
      aria-label={ariaLabel ?? title}
    >
      <h1 className="sr-only">{title}</h1>
      <div className="relative z-10 w-full pb-8 pt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="inline-flex items-center rounded-full border border-white/35 bg-white/12 px-4 py-2 text-sm font-semibold tracking-wide text-white backdrop-blur-sm shadow-lg shadow-black/20">
              {title}
            </p>
            {subtitle && (
              <p className="mt-3 text-sm md:text-base text-white max-w-2xl mx-auto drop-shadow-md">
                {subtitle}
              </p>
            )}
            {children && <div className="mt-6">{children}</div>}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/22 to-black/10" />
    </section>
  );
}
