"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import { motion, useInView, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

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
  const shouldReduceMotion = useReducedMotion();
  // Initialize at the final value so SSR (and any client where JS hydration
  // fails or framer-motion's IntersectionObserver never fires) renders the
  // real number instead of 0. The count-up below is a progressive enhancement.
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    if (shouldReduceMotion || !isInView) return;
    let startTime: number;
    let animationFrame: number;
    const fallbackTimeout = setTimeout(() => {
      setDisplayValue(value);
    }, 2000);

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      // Ease out cubic. The first frame (progress=0) implicitly resets the
      // display to 0 so the count-up still starts from zero even though the
      // initial state is the final value.
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
  }, [isInView, value, duration, shouldReduceMotion]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
}

// ============================================
// SCROLL-TRIGGERED NUMBER
// ============================================

interface ScrollNumberProps {
  value: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export function ScrollNumber({ value, suffix = "", prefix = "", className = "" }: ScrollNumberProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(value);
  const springValue = useSpring(motionValue, { stiffness: 50, damping: 20 });
  // Same SSR-safe default as AnimatedCounter: render the real number even if
  // hydration or the spring animation never runs.
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    if (isInView) {
      motionValue.set(0);
      requestAnimationFrame(() => motionValue.set(value));
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });
    return unsubscribe;
  }, [springValue]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayValue.toLocaleString()}
      {suffix}
    </span>
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
  const isInView = useInView(ref, { once: true, margin: "-100px", amount: 0.2 });
  const shouldReduceMotion = useReducedMotion();

  return (
    <div ref={ref} className={`grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 ${className}`}>
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          data-scroll-animate="true"
          initial={shouldReduceMotion ? false : { opacity: 0.3, y: 20 }}
          animate={
            shouldReduceMotion ? { opacity: 1, y: 0 } : isInView ? { opacity: 1, y: 0 } : { opacity: 0.3, y: 20 }
          }
          transition={{ duration: 0.45, delay: Math.min(index * 0.1, 0.3) }}
          className="scroll-animated text-center"
        >
          <div className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white mb-2">
            {stat.animate === false ? (
              <span>{stat.staticValue ?? `${stat.prefix ?? ""}${stat.value}${stat.suffix ?? ""}`}</span>
            ) : (
              <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} duration={1.8} />
            )}
          </div>
          <div className="text-lg md:text-xl font-medium text-white mb-1">{stat.label}</div>
          {stat.description && <div className="text-sm text-white/95">{stat.description}</div>}
        </motion.div>
      ))}
    </div>
  );
}
