"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MenuIcon, XIcon, HeartIcon, ArrowRightIcon } from "./Icons";
import { LogoIcon } from "./Logo";
import Button from "./Button";
import { navLinks as configNavLinks, footerLinks } from "../config/site";

// Filter out Donate from main nav (rendered as separate CTA button)
const navLinks = configNavLinks.filter(link => link.href !== "/donate");

// Resource links from footer config
const resourceLinks = footerLinks.filter(
  link => link.href === "/get-support" || link.href === "/forms"
);

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-brand-soft/95 backdrop-blur-md shadow-[0_1px_3px_rgba(61,90,61,0.08),0_1px_2px_rgba(61,90,61,0.04)]"
            : "bg-brand-soft"
        }`}
      >
        {/* Subtle bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-accent/20 to-transparent" />

        <nav className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center h-16 md:h-[4.5rem] gap-8">
            {/* Logo + Title */}
            <Link
              href="/"
              className="flex items-center gap-2.5 text-brand-primary hover:text-brand-secondary transition-colors flex-shrink-0 group"
            >
              <div className="transition-transform duration-300 group-hover:scale-105">
                <LogoIcon size={34} />
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="font-heading font-bold text-lg leading-tight tracking-tight">
                  KingGen
                </span>
                <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-text-muted leading-none">
                  Ministries
                </span>
              </div>
            </Link>

            {/* Desktop Navigation - centered */}
            <div className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-3.5 py-2 text-text-secondary hover:text-brand-primary font-medium transition-colors text-sm whitespace-nowrap group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-accent rounded-full transition-all duration-300 group-hover:w-3/4" />
                </Link>
              ))}
            </div>

            {/* CTA Button - right */}
            <div className="hidden lg:block flex-shrink-0">
              <Button
                href="/donate"
                variant="primary"
                size="sm"
                icon={<HeartIcon className="w-4 h-4" />}
                className="!rounded-full !px-5"
              >
                Donate
              </Button>
            </div>

            {/* Mobile: Donate button + Menu */}
            <div className="flex items-center gap-2.5 lg:hidden ml-auto">
              <Button
                href="/donate"
                variant="primary"
                size="sm"
                className="text-xs !px-3.5 !py-1.5 !rounded-full"
              >
                Donate
              </Button>
              <button
                type="button"
                className="p-2 rounded-xl bg-brand-light hover:bg-brand-primary hover:text-white text-brand-primary transition-all duration-300"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? (
                  <XIcon className="w-5 h-5" />
                ) : (
                  <MenuIcon className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation - Full screen overlay with animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed inset-0 z-[9998] bg-black/20 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-brand-soft shadow-2xl overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Mobile menu header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-brand-light">
                <Link
                  href="/"
                  className="flex items-center gap-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <LogoIcon size={28} />
                  <span className="font-heading font-bold text-base text-brand-primary">
                    KingGen
                  </span>
                </Link>
                <button
                  type="button"
                  className="p-2 rounded-xl hover:bg-brand-light text-text-muted transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <XIcon className="w-5 h-5" />
                </button>
              </div>

              <div className="px-4 py-6">
                {/* Main Links */}
                <div className="space-y-0.5 mb-6">
                  {navLinks.map((item, i) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i, duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        className="flex items-center justify-between py-3.5 px-4 text-text-primary hover:bg-brand-light rounded-xl font-medium text-[15px] transition-colors group"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span>{item.label}</span>
                        <ArrowRightIcon className="w-4 h-4 text-text-muted opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Resources Section */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.35 }}
                  className="border-t border-brand-light pt-6"
                >
                  <p className="px-4 text-[10px] font-semibold text-text-muted uppercase tracking-[0.15em] mb-3">
                    Resources
                  </p>
                  <div className="space-y-0.5">
                    {resourceLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block py-3 px-4 hover:bg-brand-light rounded-xl transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span className="block font-medium text-text-primary text-sm">
                          {item.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                </motion.div>

                {/* Large Donate CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                  className="mt-8 px-2"
                >
                  <Button
                    href="/donate"
                    variant="primary"
                    size="lg"
                    fullWidth
                    icon={<HeartIcon className="w-5 h-5" />}
                    onClick={() => setMobileMenuOpen(false)}
                    className="!rounded-2xl"
                  >
                    Donate Now
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
