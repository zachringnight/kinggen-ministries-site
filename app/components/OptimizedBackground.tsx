import type { CSSProperties } from "react";

interface OptimizedBackgroundProps {
  src: string;
  className?: string;
  style?: CSSProperties;
  priority?: boolean;
}

const optimizedImageMap: Record<string, { webp: string; png: string }> = {};

export function getOptimizedImage(src: string): string {
  const optimized = optimizedImageMap[src];
  return optimized ? optimized.webp : src;
}

export function getOptimizedImageWithFallback(src: string): { webp: string; fallback: string } {
  const optimized = optimizedImageMap[src];
  if (optimized) {
    return { webp: optimized.webp, fallback: optimized.png };
  }
  return { webp: src, fallback: src };
}

/**
 * Lightweight decorative background layer.
 * We intentionally avoid JS observers/state here to keep page rendering stable and fast.
 */
export default function OptimizedBackground({
  src,
  className = "",
  style = {},
  priority: _priority = false,
}: OptimizedBackgroundProps) {
  void _priority;
  const { webp, fallback } = getOptimizedImageWithFallback(src);
  const backgroundImage =
    webp === fallback
      ? `url('${webp}')`
      : `image-set(url('${webp}') type('image/webp'), url('${fallback}') type('image/png'))`;

  return (
    <div
      className={className}
      style={{
        backgroundRepeat: "no-repeat",
        ...style,
        backgroundImage,
      }}
      aria-hidden="true"
    />
  );
}
