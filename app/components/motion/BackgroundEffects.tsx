"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
