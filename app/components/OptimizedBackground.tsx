"use client";

import { useEffect, useRef, useState } from "react";

interface OptimizedBackgroundProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean;
}

/**
 * Maps original image paths to optimized versions
 * Supports WebP with PNG fallback
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
};

/**
 * Get optimized image path, preferring WebP
 */
export function getOptimizedImage(src: string): string {
  const optimized = optimizedImageMap[src];
  if (optimized) {
    // Check WebP support via CSS
    return optimized.webp;
  }
  return src;
}

/**
 * Get optimized image with fallback
 */
export function getOptimizedImageWithFallback(src: string): { webp: string; fallback: string } {
  const optimized = optimizedImageMap[src];
  if (optimized) {
    return { webp: optimized.webp, fallback: optimized.png };
  }
  return { webp: src, fallback: src };
}

/**
 * Optimized background div with lazy loading and WebP support
 */
export default function OptimizedBackground({
  src,
  className = "",
  style = {},
  priority = false,
}: OptimizedBackgroundProps) {
  const [isLoaded, setIsLoaded] = useState(priority);
  const [isInView, setIsInView] = useState(priority);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority || !ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "100px" }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [priority]);

  useEffect(() => {
    if (!isInView) return;

    const { webp, fallback } = getOptimizedImageWithFallback(src);
    const img = new Image();

    // Try WebP first
    img.src = webp;
    img.onload = () => setIsLoaded(true);
    img.onerror = () => {
      // Fallback to PNG
      img.src = fallback;
    };
  }, [isInView, src]);

  const { webp } = getOptimizedImageWithFallback(src);

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"} ${className}`}
      style={{
        ...style,
        backgroundImage: isInView ? `url('${webp}')` : undefined,
      }}
      aria-hidden="true"
    />
  );
}
