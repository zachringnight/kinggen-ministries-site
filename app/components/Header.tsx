"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { MenuIcon, XIcon, HeartIcon, ChevronDownIcon } from "./Icons";
import Button from "./Button";
import { primaryNavLinks, secondaryNavLinks } from "../config/site";

interface HeaderLink {
  href: string;
  label: string;
  description?: string;
}

interface HeaderProps {
  primaryLinks?: HeaderLink[];
  secondaryLinks?: HeaderLink[];
}

const defaultPrimaryLinks: HeaderLink[] = primaryNavLinks;
const defaultSecondaryLinks: HeaderLink[] = secondaryNavLinks;

export default function Header({
  primaryLinks = defaultPrimaryLinks,
  secondaryLinks = defaultSecondaryLinks,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isActiveLink = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const closeResourcesMenu = () => {
    const resourcesDetails = document.getElementById("desktop-resources-menu") as HTMLDetailsElement | null;
    if (resourcesDetails) {
      resourcesDetails.open = false;
    }
    setResourcesOpen(false);
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

  const secondaryActive = secondaryLinks.some((item) => isActiveLink(item.href));

  return (
    <>
      <header
        className={`sticky top-0 z-50 brand-nav-shell transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? "bg-white/94 backdrop-blur-md shadow-sm border-b border-brand-light/70"
            : "bg-white/86 backdrop-blur-sm border-b border-brand-light/55"
        }`}
        style={{
          backgroundImage: "url('/brand/curated/bg/light-watermark-right.png')",
          backgroundSize: "cover",
          backgroundPosition: "center right",
        }}
      >
        <nav className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="flex items-center h-14 md:h-16 gap-4">
            <Link
              href="/"
              className="flex items-center flex-shrink-0 pr-1"
              aria-label="KingGen Ministries Home"
              onClick={closeResourcesMenu}
            >
              <span className="text-brand-primary font-extrabold tracking-tight text-sm md:text-base whitespace-nowrap">
                KingGen Ministries
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-1 flex-1 min-w-0">
              {primaryLinks.map((item) => {
                const active = isActiveLink(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`px-3 py-2 font-medium transition-colors text-sm whitespace-nowrap rounded-lg ${
                      active
                        ? "text-brand-primary bg-white/92 border border-brand-light/85"
                        : "text-brand-primary/85 hover:text-brand-primary hover:bg-white/70"
                    }`}
                    onClick={closeResourcesMenu}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <details
                id="desktop-resources-menu"
                className="relative"
                onToggle={(event) => {
                  setResourcesOpen((event.currentTarget as HTMLDetailsElement).open);
                }}
              >
                <summary
                  className={`list-none px-3 py-2 font-medium transition-colors text-sm whitespace-nowrap rounded-lg cursor-pointer flex items-center gap-1 ${
                    secondaryActive
                      ? "text-brand-primary bg-white/92 border border-brand-light/85"
                      : "text-brand-primary/85 hover:text-brand-primary hover:bg-white/70"
                  }`}
                  aria-expanded={resourcesOpen}
                >
                  Resources
                  <ChevronDownIcon className={`w-4 h-4 transition-transform ${resourcesOpen ? "rotate-180" : ""}`} />
                </summary>
                <div
                  className="absolute left-0 top-full mt-2 w-72 rounded-2xl border border-brand-light/85 bg-white shadow-lg p-2 z-[60]"
                  style={{
                    backgroundImage: "url('/brand/curated/bg/light-watermark-wide.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center right",
                  }}
                >
                  <div className="rounded-xl bg-white/90 backdrop-blur-sm p-1">
                    {secondaryLinks.map((item) => {
                      const active = isActiveLink(item.href);
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          aria-current={active ? "page" : undefined}
                          className={`block rounded-xl px-3 py-2 transition-colors ${
                            active
                              ? "bg-brand-soft text-brand-primary"
                              : "text-brand-primary/85 hover:bg-brand-soft/70 hover:text-brand-primary"
                          }`}
                          onClick={closeResourcesMenu}
                        >
                          <span className="block text-sm font-medium">{item.label}</span>
                          {item.description && (
                            <span className="block text-xs text-text-muted mt-0.5">{item.description}</span>
                          )}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </details>
            </div>

            <div className="hidden lg:block flex-shrink-0">
              <Button href="/donate" variant="primary" size="sm" icon={<HeartIcon className="w-4 h-4" />}>
                Donate
              </Button>
            </div>

            <div className="flex items-center gap-2 lg:hidden ml-auto">
              <Button href="/donate" variant="primary" size="sm" className="text-xs px-3 py-1.5">
                Donate
              </Button>
              <button
                type="button"
                className="p-2 rounded-lg bg-brand-light hover:bg-brand-primary hover:text-white text-brand-primary transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation-drawer"
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

      {mobileMenuOpen && (
        <>
          <button
            type="button"
            className="lg:hidden fixed inset-0 top-14 md:top-16 z-[9998] bg-black/25 backdrop-blur-[2px]"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close mobile menu"
          />
          <div
            id="mobile-navigation-drawer"
            className="lg:hidden fixed top-14 md:top-16 left-0 right-0 bottom-0 z-[9999] overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
            style={{
              backgroundImage: "url('/brand/curated/bg/light-watermark-portrait.png')",
              backgroundSize: "cover",
              backgroundPosition: "center right",
            }}
          >
            <div className="absolute inset-0 bg-white/90" />

            <div className="relative z-10 container mx-auto px-4 py-6">
              <div className="space-y-1 mb-6">
                {primaryLinks.map((item) => {
                  const active = isActiveLink(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`block py-3 px-4 rounded-xl font-medium text-lg transition-colors ${
                        active
                          ? "bg-brand-soft text-brand-primary border border-brand-light"
                          : "text-brand-primary hover:bg-brand-soft/70"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>

              <div className="border-t border-brand-light pt-6">
                <p className="px-4 text-xs font-semibold text-brand-primary/65 uppercase tracking-wider mb-3">
                  Resources
                </p>
                <div className="space-y-1">
                  {secondaryLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block py-3 px-4 hover:bg-brand-soft/70 rounded-xl"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="block font-medium text-brand-primary">{item.label}</span>
                      {item.description && (
                        <span className="block text-sm text-brand-primary/70">{item.description}</span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>

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
