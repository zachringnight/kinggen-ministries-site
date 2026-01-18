"use client";

import Link from "next/link";
import { useState } from "react";
import { MenuIcon, XIcon } from "./Icons";
import Logo, { LogoIcon } from "./Logo";
import { navLinks } from "../config/site";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <nav className="container mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          {/* Logo - responsive: icon on tiny screens, horizontal on larger */}
          <Link
            href="/"
            className="text-brand-primary hover:text-brand-secondary transition-colors flex-shrink-0"
          >
            {/* Icon logo for very small screens */}
            <span className="sm:hidden">
              <LogoIcon size={32} />
            </span>
            {/* Horizontal logo for larger screens */}
            <span className="hidden sm:block">
              <Logo size="sm" variant="horizontal" />
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <ul className="flex items-center gap-4 xl:gap-5">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-text-secondary hover:text-brand-primary font-medium transition-colors relative group py-2 text-sm whitespace-nowrap"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-accent group-hover:w-full transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 -mr-2 text-text-secondary hover:text-brand-primary transition-colors"
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

        {/* Mobile Navigation - full screen overlay */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-14 sm:top-16 md:top-20 bottom-0 bg-white z-50 overflow-y-auto">
            <div className="container mx-auto px-4 py-4">
              <ul className="flex flex-col gap-1">
                {navLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block py-4 px-4 text-text-primary hover:text-brand-primary hover:bg-brand-light rounded-xl font-medium transition-all text-lg"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
