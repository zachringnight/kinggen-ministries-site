"use client";

import Link from "next/link";
import { useState } from "react";
import { MenuIcon, XIcon, HeartIcon } from "./Icons";
import { LogoIcon } from "./Logo";
import Button from "./Button";

// Main nav links
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/for-referrers", label: "For Referrers" },
  { href: "/for-grant-writers", label: "For Grant Writers" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#faf8f2] shadow-sm">
      {/* Main Header Bar */}
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center h-14 md:h-16 gap-6">
          {/* Logo + Title */}
          <Link
            href="/"
            className="flex items-center gap-2 text-brand-primary hover:text-brand-secondary transition-colors flex-shrink-0"
          >
            <LogoIcon size={32} />
            <span className="font-heading font-bold text-lg hidden sm:block">KingGen Ministries</span>
          </Link>

          {/* Desktop Navigation - centered */}
          <div className="hidden lg:flex items-center gap-1 flex-1">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-text-secondary hover:text-brand-primary font-medium transition-colors text-sm whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block flex-shrink-0">
            <Button href="/donate" variant="primary" size="sm" icon={<HeartIcon className="w-4 h-4" />}>
              Donate
            </Button>
          </div>

          {/* Mobile: Donate button + Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden ml-auto">
            <Button href="/donate" variant="primary" size="sm" className="text-xs px-3 py-1.5">
              Donate
            </Button>
            <button
              type="button"
              className="p-2 rounded-lg bg-[#3D5A3D] text-white hover:bg-[#4a6b4a] transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
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

      {/* Mobile Navigation Menu - Dropdown below header */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ backgroundColor: '#faf8f2' }}
      >
        <div className="container mx-auto px-4 py-4 border-t border-gray-200">
          {/* Main Links */}
          <div className="space-y-1 mb-4">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-3 px-4 text-gray-900 hover:bg-gray-100 rounded-xl font-medium text-lg active:bg-gray-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Resources Section */}
          <div className="border-t border-gray-200 pt-4">
            <p className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Resources
            </p>
            <div className="space-y-1">
              <Link
                href="/get-support"
                className="block py-3 px-4 hover:bg-gray-100 rounded-xl active:bg-gray-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="block font-medium text-gray-900">Client Information</span>
                <span className="block text-sm text-gray-500">For referred clients</span>
              </Link>
              <Link
                href="/forms"
                className="block py-3 px-4 hover:bg-gray-100 rounded-xl active:bg-gray-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="block font-medium text-gray-900">Forms</span>
                <span className="block text-sm text-gray-500">Intake & resources</span>
              </Link>
            </div>
          </div>

          {/* Large Donate CTA */}
          <div className="mt-6 px-4 pb-2">
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
    </header>
  );
}
