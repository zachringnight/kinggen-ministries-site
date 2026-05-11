"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";

// ============================================
// 3D TILT CARD
// ============================================

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltAmount?: number;
  glareEnable?: boolean;
}

export function TiltCard({ children, className = "", tiltAmount = 10, glareEnable = true }: TiltCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const interactiveTilt = !shouldReduceMotion && tiltAmount > 0;

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [tiltAmount, -tiltAmount]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-tiltAmount, tiltAmount]);

  // Glare gradient - called unconditionally to satisfy hooks rules
  const glareBackground = useTransform(
    mouseXSpring,
    [-0.5, 0, 0.5],
    [
      "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)",
      "linear-gradient(135deg, transparent 0%, transparent 100%)",
      "linear-gradient(315deg, rgba(255,255,255,0.1) 0%, transparent 50%)",
    ],
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactiveTilt) return;
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    if (!interactiveTilt) return;
    x.set(0);
    y.set(0);
  };

  if (!interactiveTilt) {
    return <div className={`relative ${className}`}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative ${className}`}
    >
      {children}
      {glareEnable && !shouldReduceMotion && (
        <motion.div
          className="absolute inset-0 rounded-inherit pointer-events-none"
          style={{
            background: glareBackground,
            borderRadius: "inherit",
          }}
        />
      )}
    </motion.div>
  );
}

// ============================================
// GLASS CARD - Glassmorphism effect
// ============================================

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  blur?: "sm" | "md" | "lg";
}

export function GlassCard({ children, className = "", blur = "md" }: GlassCardProps) {
  const blurMap = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`
        relative overflow-hidden rounded-2xl
        bg-white/10 ${blurMap[blur]}
        border border-white/20
        shadow-xl shadow-black/5
        ${className}
      `}
    >
      {/* Gradient shine effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

// ============================================
// ANIMATED BORDER CARD
// ============================================

interface AnimatedBorderCardProps {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedBorderCard({ children, className = "" }: AnimatedBorderCardProps) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <div className={`relative p-[2px] rounded-2xl overflow-hidden ${className}`}>
      {/* Animated gradient border */}
      <motion.div
        className="absolute inset-0"
        animate={
          shouldReduceMotion
            ? {
                background: "linear-gradient(90deg, #3D5A3D, #7BA390, #3D5A3D)",
              }
            : {
                background: [
                  "linear-gradient(0deg, #3D5A3D, #7BA390, #3D5A3D)",
                  "linear-gradient(90deg, #3D5A3D, #7BA390, #3D5A3D)",
                  "linear-gradient(180deg, #3D5A3D, #7BA390, #3D5A3D)",
                  "linear-gradient(270deg, #3D5A3D, #7BA390, #3D5A3D)",
                  "linear-gradient(360deg, #3D5A3D, #7BA390, #3D5A3D)",
                ],
              }
        }
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : {
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }
        }
      />
      <div className="relative bg-brand-cream rounded-[14px] p-6 h-full">{children}</div>
    </div>
  );
}

// ============================================
// HOVER SCALE IMAGE
// ============================================

interface HoverScaleImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function HoverScaleImage({ src, alt, className = "" }: HoverScaleImageProps) {
  return (
    <div className={`overflow-hidden rounded-2xl ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
    </div>
  );
}
