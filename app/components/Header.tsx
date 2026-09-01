"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { MenuIcon, XIcon, HeartIcon, ChevronDownIcon, ExternalLinkIcon } from "./Icons";
import Button from "./Button";
import { BrandMark } from "./Logo";
import { primaryNavLinks, secondaryNavLinks } from "../config/site";

interface HeaderLink {
  href: string;
  label: string;
  description?: string;
  external?: boolean;
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
  const headerRef = useRef<HTMLElement>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
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
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const menuButton = mobileMenuButtonRef.current;
    const backgroundElements = [
      headerRef.current,
      ...Array.from(document.querySelectorAll<HTMLElement>("#main-content, footer, [aria-label='Back to top']")),
    ].filter((element): element is HTMLElement => Boolean(element));

    const getFocusableElements = () => {
      return Array.from(
        mobileMenuRef.current?.querySelectorAll<HTMLElement>(
          "a[href], button:not([disabled]), [tabindex]:not([tabindex='-1'])",
        ) ?? [],
      );
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
        return;
      }

      if (event.key !== "Tab") return;

      const focusableElements = getFocusableElements();
      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    backgroundElements.forEach((element) => {
      element.inert = true;
    });
    document.addEventListener("keydown", handleKeyDown);

    getFocusableElements()[0]?.focus();

    return () => {
      document.body.style.overflow = originalOverflow;
      backgroundElements.forEach((element) => {
        element.inert = false;
      });
      document.removeEventListener("keydown", handleKeyDown);
      menuButton?.focus();
    };
  }, [mobileMenuOpen]);

  const secondaryActive = secondaryLinks.some((item) => !item.external && isActiveLink(item.href));

  return (
    <>
      <header
        ref={headerRef}
        className={`sticky top-0 z-50 brand-nav-shell transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-brand-light/70"
            : "bg-white/92 backdrop-blur-sm border-b border-brand-light/55"
        }`}
      >
        <nav className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="flex items-center h-12 md:h-14 gap-4">
            <Link
              href="/"
              className="flex items-center gap-2.5 flex-shrink-0 pr-1"
              aria-label="KingGen Ministries Home"
              onClick={closeResourcesMenu}
            >
              <BrandMark theme="light" size={30} className="shrink-0" />
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
                    className={`px-3 py-2 font-medium transition-colors text-sm whitespace-nowrap rounded-lg border border-transparent ${
                      active
                        ? "text-brand-primary bg-white/88 border-brand-light/85"
                        : "text-brand-primary/85 hover:text-brand-primary hover:bg-white/70 hover:border-brand-light/60"
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
                  className={`list-none px-3 py-2 font-medium transition-colors text-sm whitespace-nowrap rounded-lg border border-transparent cursor-pointer flex items-center gap-1 ${
                    secondaryActive
                      ? "text-brand-primary bg-white/88 border-brand-light/85"
                      : "text-brand-primary/85 hover:text-brand-primary hover:bg-white/70 hover:border-brand-light/60"
                  }`}
                  aria-expanded={resourcesOpen}
                >
                  Resources
                  <ChevronDownIcon className={`w-4 h-4 transition-transform ${resourcesOpen ? "rotate-180" : ""}`} />
                </summary>
                <div
                  className="absolute left-0 top-full mt-2 w-72 rounded-2xl border border-brand-light/85 bg-white shadow-lg p-2 z-[9999]"
                  style={{
                    backgroundImage: "url('/brand/curated/bg/light-watermark-wide.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center right",
                  }}
                >
                  <div className="rounded-xl bg-white/90 backdrop-blur-sm p-1">
                    {secondaryLinks.map((item) => {
                      const active = !item.external && isActiveLink(item.href);
                      const className = `block rounded-xl px-3 py-2 transition-colors ${
                        active
                          ? "bg-brand-soft text-brand-primary"
                          : "text-brand-primary/85 hover:bg-brand-soft/70 hover:text-brand-primary"
                      }`;
                      const content = (
                        <>
                          <span className="flex items-center gap-1.5 text-sm font-medium">
                            {item.label}
                            {item.external && <ExternalLinkIcon className="w-3.5 h-3.5" />}
                          </span>
                          {item.description && (
                            <span className="block text-xs text-text-muted mt-0.5">{item.description}</span>
                          )}
                        </>
                      );

                      return item.external ? (
                        <a
                          key={item.href}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={className}
                          onClick={closeResourcesMenu}
                        >
                          {content}
                        </a>
                      ) : (
                        <Link
                          key={item.href}
                          href={item.href}
                          aria-current={active ? "page" : undefined}
                          className={className}
                          onClick={closeResourcesMenu}
                        >
                          {content}
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
                ref={mobileMenuButtonRef}
                type="button"
                className={`p-2 rounded-lg bg-brand-light hover:bg-brand-primary hover:text-white text-brand-primary transition-colors ${
                  mobileMenuOpen ? "invisible pointer-events-none" : ""
                }`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation-drawer"
              >
                {mobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {mobileMenuOpen && (
        <>
          <button
            type="button"
            className="lg:hidden fixed inset-0 top-12 md:top-14 z-[9998] bg-black/25 backdrop-blur-[2px]"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close mobile menu"
            tabIndex={-1}
          />
          <div
            ref={mobileMenuRef}
            id="mobile-navigation-drawer"
            className="lg:hidden fixed top-12 md:top-14 left-0 right-0 z-[9999] max-h-[calc(100dvh-3rem)] md:max-h-[calc(100dvh-3.5rem)] overflow-y-auto overscroll-contain rounded-b-3xl border-b border-brand-light shadow-2xl"
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
              <div className="flex justify-end mb-2">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-lg p-2 text-brand-primary transition-colors hover:bg-brand-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close navigation menu"
                >
                  <XIcon className="w-5 h-5" />
                </button>
              </div>

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
                  {secondaryLinks.map((item) => {
                    const content = (
                      <>
                        <span className="flex items-center gap-2 font-medium text-brand-primary">
                          {item.label}
                          {item.external && <ExternalLinkIcon className="w-4 h-4" />}
                        </span>
                        {item.description && (
                          <span className="block text-sm text-brand-primary/70">{item.description}</span>
                        )}
                      </>
                    );

                    return item.external ? (
                      <a
                        key={item.href}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block py-3 px-4 hover:bg-brand-soft/70 rounded-xl"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {content}
                      </a>
                    ) : (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block py-3 px-4 hover:bg-brand-soft/70 rounded-xl"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {content}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
