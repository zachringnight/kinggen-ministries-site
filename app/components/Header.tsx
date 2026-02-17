"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { MenuIcon, XIcon, HeartIcon } from "./Icons";
import Button from "./Button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/for-referrers", label: "For Referrers" },
  { href: "/for-grant-writers", label: "For Grant Writers" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isActiveLink = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-brand-light/70"
            : "bg-white/70 backdrop-blur-sm"
        }`}
      >
        <nav className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center h-14 md:h-16 gap-6">
            {/* Icon-only logo */}
            <Link
              href="/"
              className="flex items-center flex-shrink-0"
              aria-label="KingGen Ministries Home"
            >
              <Image
                src="/brand/logo/icon-dark-green.webp"
                alt="KingGen Ministries"
                width={44}
                height={44}
                className="rounded-lg"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1 flex-1">
              {navLinks.map((item) => {
                const active = isActiveLink(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`px-3 py-2 font-medium transition-colors text-sm whitespace-nowrap rounded-lg ${
                      active
                        ? "text-brand-primary bg-brand-soft shadow-inner"
                        : "text-text-secondary hover:text-brand-primary hover:bg-brand-soft/70"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* CTA Button - right */}
            <div className="hidden lg:block flex-shrink-0">
              <Button href="/donate" variant="primary" size="sm" icon={<HeartIcon className="w-4 h-4" />}>
                Donate
              </Button>
            </div>

            {/* Mobile: Donate button + Menu */}
            <div className="flex items-center gap-2 lg:hidden ml-auto">
              <Button href="/donate" variant="primary" size="sm" className="text-xs px-3 py-1.5">
                Donate
              </Button>
              <button
                type="button"
                className="p-2 rounded-lg bg-brand-light hover:bg-brand-primary hover:text-white text-brand-primary transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? (
                  <XIcon className="w-6 h-6" />
                ) : (
                  <MenuIcon className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <>
          <button
            type="button"
            className="lg:hidden fixed inset-0 top-14 md:top-16 z-[9998] bg-black/30 backdrop-blur-[2px]"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close mobile menu"
          />
          <div
            className="lg:hidden fixed top-14 md:top-16 left-0 right-0 bottom-0 z-[9999] overflow-y-auto bg-white"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="space-y-1 mb-6">
                {navLinks.map((item) => {
                  const active = isActiveLink(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`block py-3 px-4 rounded-xl font-medium text-lg transition-colors ${
                        active
                          ? "bg-brand-soft text-brand-primary border border-brand-light"
                          : "text-gray-900 hover:bg-gray-100"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>

              {/* Resources Section */}
              <div className="border-t border-gray-200 pt-6">
                <p className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Resources
                </p>
                <div className="space-y-1">
                  <Link
                    href="/get-support"
                    className="block py-3 px-4 hover:bg-gray-100 rounded-xl"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="block font-medium text-gray-900">Client Information</span>
                    <span className="block text-sm text-gray-500">Guidance for referred clients</span>
                  </Link>
                  <Link
                    href="/forms"
                    className="block py-3 px-4 hover:bg-gray-100 rounded-xl"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="block font-medium text-gray-900">Forms</span>
                    <span className="block text-sm text-gray-500">Intake & resources</span>
                  </Link>
                </div>
              </div>

              {/* Large Donate CTA */}
              <div className="mt-8 px-4">
                <Button
                  href="/donate"
                  variant="primary"
                  size="lg"
                  fullWidth
                  icon={<HeartIcon className="w-5 h-5" />}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Donate Now
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
