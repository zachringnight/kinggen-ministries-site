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
// FLOATING PARTICLES BACKGROUND
// Creates a magical, spiritual atmosphere
// ============================================

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  xOffset: number;
}

export function FloatingParticles({
  count = 50,
  className = "",
}: {
  count?: number;
  className?: string;
}) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 6 + 2,
        duration: Math.random() * 20 + 15,
        delay: Math.random() * 5,
        opacity: Math.random() * 0.5 + 0.1,
        xOffset: Math.random() * 20 - 10,
      });
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect -- Particles are initialized once on mount
    setParticles(newParticles);
  }, [count]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.size}px rgba(255,255,255,0.3)`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, particle.xOffset, 0],
            scale: [1, 1.2, 1],
            opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// ============================================
// GLOWING ORBS - Larger mystical orbs
// ============================================

export function GlowingOrbs({ className = "" }: { className?: string }) {
  const orbs = [
    { x: "10%", y: "20%", size: 200, color: "rgba(123, 163, 144, 0.15)", duration: 25 },
    { x: "80%", y: "30%", size: 300, color: "rgba(61, 90, 61, 0.1)", duration: 30 },
    { x: "50%", y: "70%", size: 250, color: "rgba(123, 163, 144, 0.12)", duration: 28 },
    { x: "20%", y: "80%", size: 180, color: "rgba(61, 90, 61, 0.08)", duration: 22 },
    { x: "70%", y: "60%", size: 220, color: "rgba(255, 255, 255, 0.1)", duration: 26 },
  ];

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            left: orb.x,
            top: orb.y,
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
          }}
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 30, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

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
  duration = 0.6,
  className = "",
  once = true,
}: FadeInProps) {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const isInView = useInView(ref, { once, margin: "100px", amount: 0.1 });
  const controls = useAnimation();

  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
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
          opacity: 0.3,
          ...directions[direction],
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration,
            delay,
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
  staggerDelay = 0.1,
  className = "",
}: StaggerContainerProps) {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const isInView = useInView(ref, { once: true, margin: "100px", amount: 0.1 });
  const effectiveStaggerDelay = Math.min(staggerDelay, 0.1);

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
        hidden: { opacity: 0.3, y: 20, scale: 0.98 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.5,
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
// TEXT REVEAL ANIMATION
// ============================================

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}

export function TextReveal({
  text,
  className = "",
  delay = 0,
  staggerDelay = 0.03,
}: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const words = text.split(" ");

  return (
    <motion.span ref={ref} className={`inline-block ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: "100%" }}
            animate={isInView ? { y: 0 } : { y: "100%" }}
            transition={{
              duration: 0.5,
              delay: delay + i * staggerDelay,
              ease: [0.25, 0.4, 0.25, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

// ============================================
// TYPEWRITER EFFECT
// ============================================

interface TypewriterProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}

export function Typewriter({
  text,
  className = "",
  speed = 50,
  delay = 0,
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [started, setStarted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && !started) {
      const timeout = setTimeout(() => {
        setStarted(true);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [isInView, delay, started]);

  useEffect(() => {
    if (started && displayText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [started, displayText, text, speed]);

  return (
    <span ref={ref} className={className}>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="inline-block w-[3px] h-[1em] bg-current ml-1 align-middle"
      />
    </span>
  );
}

// ============================================
// PARALLAX SECTION
// ============================================

interface ParallaxProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export function Parallax({ children, speed = 0.5, className = "" }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const scrollY = window.scrollY;
        const elementTop = rect.top + scrollY;
        const relativeScroll = scrollY - elementTop;
        setOffset(relativeScroll * speed);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div style={{ y: offset }}>{children}</motion.div>
    </div>
  );
}

// ============================================
// MAGNETIC BUTTON EFFECT
// ============================================

interface MagneticProps {
  children: ReactNode;
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
// MORPHING GRADIENT BACKGROUND
// ============================================

export function MorphingGradient({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, rgba(61,90,61,0.3) 0%, transparent 50%), radial-gradient(circle at 100% 100%, rgba(123,163,144,0.2) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 0%, rgba(61,90,61,0.3) 0%, transparent 50%), radial-gradient(circle at 0% 100%, rgba(123,163,144,0.2) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 100%, rgba(61,90,61,0.3) 0%, transparent 50%), radial-gradient(circle at 50% 0%, rgba(123,163,144,0.2) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 0%, rgba(61,90,61,0.3) 0%, transparent 50%), radial-gradient(circle at 100% 100%, rgba(123,163,144,0.2) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
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
  children: ReactNode;
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
// ANIMATED GRADIENT BACKGROUND
// ============================================

export function AnimatedGradientBg({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(123, 163, 144, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(61, 90, 61, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(92, 122, 92, 0.2) 0%, transparent 60%),
            linear-gradient(135deg, #3D5A3D 0%, #4a6b4a 50%, #5c7a5c 100%)
          `,
          backgroundSize: "200% 200%",
        }}
      />
      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}

// ============================================
// TEXT SPLIT REVEAL - Character animation
// ============================================

interface TextSplitRevealProps {
  text: string;
  className?: string;
  delay?: number;
  charDelay?: number;
}

export function TextSplitReveal({
  text,
  className = "",
  delay = 0,
  charDelay = 0.02,
}: TextSplitRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const chars = text.split("");

  return (
    <motion.span ref={ref} className={`inline-block ${className}`}>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 50, rotateX: -90 }}
          animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{
            duration: 0.5,
            delay: delay + i * charDelay,
            ease: [0.215, 0.61, 0.355, 1],
          }}
          style={{ transformOrigin: "bottom" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

// ============================================
// INFINITE MARQUEE - Auto-scrolling content
// ============================================

interface InfiniteMarqueeProps {
  children: ReactNode;
  speed?: number;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
}

export function InfiniteMarquee({
  children,
  speed = 30,
  direction = "left",
  pauseOnHover = true,
  className = "",
}: InfiniteMarqueeProps) {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div
      className={`overflow-hidden ${className}`}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <motion.div
        className="flex gap-8"
        animate={{
          x: direction === "left" ? [0, -1000] : [-1000, 0],
        }}
        transition={{
          x: {
            duration: speed,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          },
        }}
        style={{
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {/* Duplicate content for seamless loop */}
        {children}
        {children}
        {children}
      </motion.div>
    </div>
  );
}

// ============================================
// FLOATING ACTION BUTTON
// ============================================

interface FloatingActionButtonProps {
  href: string;
  icon: ReactNode;
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
      <div className="relative bg-brand-cream rounded-[14px] p-6 h-full">
        {children}
      </div>
    </div>
  );
}

// ============================================
// REVEAL ON SCROLL - Enhanced version
// ============================================

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  width?: "fit-content" | "100%";
}

export function RevealOnScroll({ children, className = "", width = "fit-content" }: RevealOnScrollProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`} style={{ width }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        initial={{ left: 0 }}
        animate={isInView ? { left: "100%" } : {}}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="absolute top-0 bottom-0 left-0 right-0 bg-brand-primary z-20"
      />
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
            shouldReduceMotion
              ? { opacity: 1, y: 0 }
              : isInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0.3, y: 20 }
          }
          transition={{ duration: 0.45, delay: Math.min(index * 0.1, 0.3) }}
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
// TESTIMONIAL CAROUSEL
// ============================================

interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  initial: string;
}

interface TestimonialCarouselProps {
  testimonials: TestimonialItem[];
  className?: string;
  autoPlayInterval?: number;
}

export function TestimonialCarousel({
  testimonials,
  className = "",
  autoPlayInterval = 5000,
}: TestimonialCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [testimonials.length, autoPlayInterval]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  return (
    <div className={`relative ${className}`}>
      <div className="overflow-hidden relative min-h-[280px] md:min-h-[240px]">
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 h-full flex flex-col justify-center">
            <p className="text-lg md:text-xl text-white/95 italic mb-6 leading-relaxed">
              &ldquo;{testimonials[current].quote}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-accent to-brand-primary flex items-center justify-center text-white font-bold text-lg">
                {testimonials[current].initial}
              </div>
              <div>
                <p className="font-bold text-white">{testimonials[current].author}</p>
                <p className="text-sm text-white/95">{testimonials[current].role}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Dots navigation */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === current
                ? "bg-white w-8"
                : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
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
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 50, damping: 20 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
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
      {prefix}{displayValue.toLocaleString()}{suffix}
    </span>
  );
}

// ============================================
// BLUR IN TEXT
// ============================================

interface BlurInTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function BlurInText({ text, className = "", delay = 0 }: BlurInTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      initial={{ filter: "blur(10px)", opacity: 0 }}
      animate={isInView ? { filter: "blur(0px)", opacity: 1 } : {}}
      transition={{ duration: 0.8, delay }}
      className={`inline-block ${className}`}
    >
      {text}
    </motion.span>
  );
}
