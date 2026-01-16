"use client";

import Link from "next/link";
import { useState } from "react";
import { MenuIcon, XIcon } from "./Icons";
import Logo from "./Logo";
import { navLinks } from "../config/site";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Emergency Banner */}
      <div className="bg-brand-primary text-white text-center py-2 px-4 text-sm">
        <p>
          If you are in immediate danger, call <strong>911</strong>.
          If you are experiencing thoughts of self-harm, call or text <strong>988</strong> (United States).
          KingGen Ministries is not an emergency service.
        </p>
      </div>

      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <nav className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="text-brand-primary hover:text-brand-secondary transition-colors"
            >
              <Logo size="md" variant="horizontal" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              <ul className="flex items-center gap-5">
                {navLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-text-secondary hover:text-brand-primary font-medium transition-colors relative group py-2 text-sm"
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
              className="lg:hidden p-2 text-text-secondary hover:text-brand-primary transition-colors"
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

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-100">
              <ul className="flex flex-col gap-2">
                {navLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block py-3 px-4 text-text-secondary hover:text-brand-primary hover:bg-brand-light rounded-lg font-medium transition-all"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
