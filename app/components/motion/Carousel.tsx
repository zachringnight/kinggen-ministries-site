"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
              index === current ? "bg-white w-8" : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
