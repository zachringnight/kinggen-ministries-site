"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { MenuIcon, XIcon, ChevronDownIcon } from "./Icons";
import Logo, { LogoIcon } from "./Logo";
import Button from "./Button";

// Simplified nav structure with dropdown
const mainNavLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    label: "Partner",
    dropdown: [
      { href: "/for-referrers", label: "For Referrers", description: "Refer women in need" },
      { href: "/for-grant-writers", label: "For Grant Writers", description: "Grant & foundation info" },
      { href: "/donate", label: "Donate", description: "Support our mission" },
    ],
  },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-brand-soft/95 backdrop-blur-md shadow-sm">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-brand-primary hover:text-brand-secondary transition-colors flex-shrink-0"
          >
            {/* Icon logo for mobile */}
            <span className="md:hidden">
              <LogoIcon size={36} />
            </span>
            {/* Horizontal logo for desktop */}
            <span className="hidden md:block">
              <Logo size="sm" variant="horizontal" />
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {mainNavLinks.map((item, index) => (
              item.dropdown ? (
                // Dropdown menu
                <div key={index} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center gap-1 px-3 py-2 text-text-secondary hover:text-brand-primary font-medium transition-colors text-sm"
                  >
                    {item.label}
                    <ChevronDownIcon className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-lg border border-brand-light overflow-hidden">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-4 py-3 hover:bg-brand-light transition-colors"
                          onClick={() => setDropdownOpen(false)}
                        >
                          <span className="block font-medium text-text-primary text-sm">{subItem.label}</span>
                          <span className="block text-xs text-text-muted">{subItem.description}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                // Regular link
                <Link
                  key={item.href}
                  href={item.href!}
                  className="px-3 py-2 text-text-secondary hover:text-brand-primary font-medium transition-colors text-sm"
                >
                  {item.label}
                </Link>
              )
            ))}

            {/* CTA Button */}
            <Button href="/donate" variant="primary" size="sm" className="ml-2">
              Donate
            </Button>
          </div>

          {/* Mobile: Donate button + Menu */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button href="/donate" variant="primary" size="sm" className="text-xs px-3 py-1.5">
              Donate
            </Button>
            <button
              type="button"
              className="p-2 text-text-secondary hover:text-brand-primary transition-colors"
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

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-16 bottom-0 bg-brand-soft z-50 overflow-y-auto">
            <div className="container mx-auto px-4 py-6">
              {/* Main Links */}
              <div className="space-y-1 mb-6">
                <Link
                  href="/"
                  className="block py-3 px-4 text-text-primary hover:bg-brand-light rounded-xl font-medium text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="block py-3 px-4 text-text-primary hover:bg-brand-light rounded-xl font-medium text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/testimonials"
                  className="block py-3 px-4 text-text-primary hover:bg-brand-light rounded-xl font-medium text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Testimonials
                </Link>
                <Link
                  href="/contact"
                  className="block py-3 px-4 text-text-primary hover:bg-brand-light rounded-xl font-medium text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>

              {/* Partner Section */}
              <div className="border-t border-brand-light pt-6">
                <p className="px-4 text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">
                  Partner With Us
                </p>
                <div className="space-y-1">
                  <Link
                    href="/for-referrers"
                    className="block py-3 px-4 hover:bg-brand-light rounded-xl"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="block font-medium text-text-primary">For Referrers</span>
                    <span className="block text-sm text-text-muted">Pastors, counselors & professionals</span>
                  </Link>
                  <Link
                    href="/for-grant-writers"
                    className="block py-3 px-4 hover:bg-brand-light rounded-xl"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="block font-medium text-text-primary">For Grant Writers</span>
                    <span className="block text-sm text-text-muted">Foundations & grant information</span>
                  </Link>
                  <Link
                    href="/donate"
                    className="block py-3 px-4 hover:bg-brand-light rounded-xl"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="block font-medium text-text-primary">Donate</span>
                    <span className="block text-sm text-text-muted">Support our mission</span>
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
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Donate Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
