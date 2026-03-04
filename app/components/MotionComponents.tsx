"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import {
  motion,
  useInView,
  useAnimation,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";

// ============================================
// SCROLL-TRIGGERED FADE IN
// ============================================

interface FadeInProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

export function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.3,
  className = "",
  once = true,
}: FadeInProps) {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const isInView = useInView(ref, { once, margin: "0px 0px 100px 0px", amount: 0.05 });
  const controls = useAnimation();

  const directions = {
    up: { y: 20, x: 0 },
    down: { y: -20, x: 0 },
    left: { x: 20, y: 0 },
    right: { x: -20, y: 0 },
    none: { x: 0, y: 0 },
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      data-scroll-animate="true"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {
          opacity: 0.7,
          ...directions[direction],
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transform: "none",
          transition: {
            duration: Math.min(duration, 0.3),
            delay: Math.min(delay, 0.15),
            ease: [0.25, 0.4, 0.25, 1],
          },
        },
      }}
      className={`scroll-animated ${className}`}
    >
      {children}
    </motion.div>
  );
}

// ============================================
// STAGGERED CONTAINER - For grid animations
// ============================================

interface StaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}

export function StaggerContainer({
  children,
  staggerDelay = 0.05,
  className = "",
}: StaggerContainerProps) {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const isInView = useInView(ref, { once: true, margin: "0px 0px 100px 0px", amount: 0.05 });
  const effectiveStaggerDelay = Math.min(staggerDelay, 0.05);

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      data-scroll-animate="true"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: effectiveStaggerDelay,
          },
        },
      }}
      className={`scroll-animated ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      data-scroll-animate="true"
      variants={{
        hidden: { opacity: 0.7, y: 12, scale: 0.99 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transform: "none",
          transition: {
            duration: 0.3,
            ease: [0.25, 0.4, 0.25, 1],
          },
        },
      }}
      className={`scroll-animated ${className}`}
    >
      {children}
    </motion.div>
  );
}

// ============================================
// ANIMATED COUNTER
// ============================================

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
  className = "",
}: AnimatedCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px", amount: 0.2 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;
      const fallbackTimeout = setTimeout(() => {
        setDisplayValue(value);
      }, 2000);

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

        // Ease out cubic
        const easeOut = 1 - Math.pow(1 - progress, 3);
        setDisplayValue(Math.floor(easeOut * value));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
          return;
        }

        setDisplayValue(value);
      };

      animationFrame = requestAnimationFrame(animate);
      return () => {
        clearTimeout(fallbackTimeout);
        cancelAnimationFrame(animationFrame);
      };
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
}

// ============================================
// 3D TILT CARD
// ============================================

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  tiltAmount?: number;
  glareEnable?: boolean;
}

export function TiltCard({
  children,
  className = "",
  tiltAmount = 10,
  glareEnable = true,
}: TiltCardProps) {
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
    ]
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
// SCROLL PROGRESS INDICATOR
// ============================================

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = docHeight > 0 ? scrollTop / docHeight : 0;
      setProgress(scrollProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-brand-accent z-[9999] origin-left"
      style={{ scaleX: progress }}
    />
  );
}

// ============================================
// GLASS CARD - Glassmorphism effect
// ============================================

interface GlassCardProps {
  children: ReactNode;
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
  children: ReactNode;
  className?: string;
}

export function AnimatedBorderCard({ children, className = "" }: AnimatedBorderCardProps) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <div className={`relative p-[2px] rounded-2xl overflow-hidden ${className}`}>
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
      <div className="relative bg-brand-cream rounded-[14px] h-full">
        {children}
      </div>
    </div>
  );
}

// ============================================
// IMPACT COUNTER SECTION
// ============================================

interface ImpactStat {
  value: number;
  suffix?: string;
  prefix?: string;
  staticValue?: string;
  animate?: boolean;
  label: string;
  description?: string;
}

interface ImpactCounterSectionProps {
  stats: ImpactStat[];
  className?: string;
}

export function ImpactCounterSection({ stats, className = "" }: ImpactCounterSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px 100px 0px", amount: 0.05 });
  const shouldReduceMotion = useReducedMotion();

  return (
    <div ref={ref} className={`grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 ${className}`}>
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          data-scroll-animate="true"
          initial={shouldReduceMotion ? false : { opacity: 0.7, y: 12 }}
          animate={
            shouldReduceMotion
              ? { opacity: 1, y: 0 }
              : isInView
                ? { opacity: 1, y: 0, transform: "none" }
                : { opacity: 0.7, y: 12 }
          }
          transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.15) }}
          className="scroll-animated text-center"
        >
          <div className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white mb-2">
            {stat.animate === false ? (
              <span>{stat.staticValue ?? `${stat.prefix ?? ""}${stat.value}${stat.suffix ?? ""}`}</span>
            ) : (
              <AnimatedCounter
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                duration={1.8}
              />
            )}
          </div>
          <div className="text-lg md:text-xl font-medium text-white mb-1">{stat.label}</div>
          {stat.description && (
            <div className="text-sm text-white/95">{stat.description}</div>
          )}
        </motion.div>
      ))}
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
