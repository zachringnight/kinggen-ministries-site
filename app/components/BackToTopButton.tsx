"use client";

import { useEffect, useState } from "react";
import { ChevronUpIcon } from "./Icons";

const SHOW_AFTER_PX = 500;

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > SHOW_AFTER_PX);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-50 hidden h-11 w-11 items-center justify-center rounded-full bg-brand-primary text-white shadow-[0_8px_24px_rgba(0,0,0,0.16)] transition-opacity duration-200 md:inline-flex ${
        isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <ChevronUpIcon className="w-5 h-5" />
    </button>
  );
}
