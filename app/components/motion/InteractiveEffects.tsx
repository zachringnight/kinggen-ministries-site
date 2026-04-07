"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";

// ============================================
// MAGNETIC BUTTON EFFECT
// ============================================

interface MagneticProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

export function Magnetic({ children, className = "", strength = 0.3 }: MagneticProps) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 15 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (shouldReduceMotion) return;
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    x.set(distanceX * strength);
    y.set(distanceY * strength);
  };

  const handleMouseLeave = () => {
    if (shouldReduceMotion) return;
    x.set(0);
    y.set(0);
  };

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: xSpring, y: ySpring }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ============================================
// SHIMMER EFFECT
// ============================================

export function Shimmer({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`absolute inset-0 ${className}`}
      style={{
        background:
          "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
      }}
      animate={{
        x: ["-100%", "100%"],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatDelay: 3,
        ease: "easeInOut",
      }}
    />
  );
}

// ============================================
// PULSE RINGS (for CTA sections)
// ============================================

export function PulseRings({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 flex items-center justify-center pointer-events-none ${className}`}>
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-brand-accent/30"
          initial={{ width: 100, height: 100, opacity: 0.6 }}
          animate={{
            width: [100, 400, 600],
            height: [100, 400, 600],
            opacity: [0.6, 0.3, 0],
          }}
          transition={{
            duration: 4,
            delay: i * 1.3,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}

// ============================================
// FLOATING ICONS ANIMATION
// ============================================

interface FloatingIconProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function FloatingIcon({ children, delay = 0, className = "" }: FloatingIconProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -10, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}

// ============================================
// FLOATING ACTION BUTTON
// ============================================

interface FloatingActionButtonProps {
  href: string;
  icon: React.ReactNode;
  label?: string;
  className?: string;
}

export function FloatingActionButton({
  href,
  icon,
  label,
  className = "",
}: FloatingActionButtonProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.a
      href={href}
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: isVisible ? 1 : 0,
        opacity: isVisible ? 1 : 0,
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => setIsExpanded(true)}
      onHoverEnd={() => setIsExpanded(false)}
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-brand-accent text-white
        shadow-lg shadow-brand-accent/30 hover:bg-brand-primary transition-colors
        ${isExpanded && label ? "px-5 py-3 rounded-full" : "p-4 rounded-full"} ${className}`}
    >
      <motion.span
        className="flex items-center justify-center"
        animate={{ rotate: isExpanded ? 360 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {icon}
      </motion.span>
      {label && (
        <motion.span
          initial={{ width: 0, opacity: 0 }}
          animate={{
            width: isExpanded ? "auto" : 0,
            opacity: isExpanded ? 1 : 0,
          }}
          className="overflow-hidden whitespace-nowrap font-medium"
        >
          {label}
        </motion.span>
      )}
    </motion.a>
  );
}

// ============================================
// WAVE DIVIDER
// ============================================

export function WaveDivider({
  flip = false,
  className = "",
  color = "var(--brand-primary)",
}: {
  flip?: boolean;
  className?: string;
  color?: string;
}) {
  return (
    <div className={`w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""} ${className}`}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="w-full h-[60px] md:h-[80px]"
      >
        <motion.path
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          fill={color}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}

// ============================================
// ANIMATED DIVIDER
// ============================================

interface AnimatedDividerProps {
  variant?: "wave" | "curve" | "zigzag";
  color?: string;
  flip?: boolean;
  className?: string;
}

export function AnimatedDivider({
  variant = "wave",
  color = "var(--brand-primary)",
  flip = false,
  className = "",
}: AnimatedDividerProps) {
  const paths = {
    wave: "M0,64 C320,128 640,0 960,64 C1280,128 1600,0 1920,64 L1920,128 L0,128 Z",
    curve: "M0,128 Q960,0 1920,128 L1920,128 L0,128 Z",
    zigzag: "M0,64 L240,96 L480,32 L720,96 L960,32 L1200,96 L1440,32 L1680,96 L1920,64 L1920,128 L0,128 Z",
  };

  return (
    <div className={`w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""} ${className}`}>
      <svg
        viewBox="0 0 1920 128"
        preserveAspectRatio="none"
        className="w-full h-[40px] md:h-[60px] lg:h-[80px]"
      >
        <motion.path
          d={paths[variant]}
          fill={color}
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}
