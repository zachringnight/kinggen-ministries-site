import type { CSSProperties } from "react";

interface OptimizedBackgroundProps {
  src: string;
  className?: string;
  style?: CSSProperties;
  priority?: boolean;
}

/**
 * Maps original image paths to optimized versions.
 * Keeps existing source references stable across the codebase.
 */
const optimizedImageMap: Record<string, { webp: string; png: string }> = {
  "/KingGen Background (1).png": {
    webp: "/optimized/KingGen Background (1).webp",
    png: "/optimized/KingGen Background (1).png",
  },
  "/bg_green_texture_1920x1080.png": {
    webp: "/optimized/bg_green_texture_1920x1080.webp",
    png: "/optimized/bg_green_texture_1920x1080.png",
  },
  "/bg-green-alternate.png": {
    webp: "/optimized/bg-green-alternate.webp",
    png: "/optimized/bg-green-alternate.png",
  },
  "/logo_stack_cropped.png": {
    webp: "/optimized/logo_stack_cropped.webp",
    png: "/optimized/logo_stack_cropped.png",
  },
  "/Untitled design.png": {
    webp: "/optimized/Untitled design.webp",
    png: "/optimized/Untitled design.png",
  },
  "/Untitled-1.png": {
    webp: "/optimized/Untitled-1.webp",
    png: "/optimized/Untitled-1.png",
  },
  "/Untitled-2.png": {
    webp: "/optimized/Untitled-2.webp",
    png: "/optimized/Untitled-2.png",
  },
  "/Untitled-3.png": {
    webp: "/optimized/Untitled-3.webp",
    png: "/optimized/Untitled-3.png",
  },
  "/Untitled-4.png": {
    webp: "/optimized/Untitled-4.webp",
    png: "/optimized/Untitled-4.png",
  },
  "/Untitled-5.png": {
    webp: "/optimized/Untitled-5.webp",
    png: "/optimized/Untitled-5.png",
  },
  "/Untitled-6.png": {
    webp: "/optimized/Untitled-6.webp",
    png: "/optimized/Untitled-6.png",
  },
  "/Untitled-7.png": {
    webp: "/optimized/Untitled-7.webp",
    png: "/optimized/Untitled-7.png",
  },
  "/bg-light-stones.png": {
    webp: "/optimized/bg-light-stones.webp",
    png: "/optimized/bg-light-stones.png",
  },
};

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
        ...style,
        backgroundImage,
      }}
      aria-hidden="true"
    />
  );
}
