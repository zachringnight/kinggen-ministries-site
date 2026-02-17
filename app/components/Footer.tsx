import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "../config/site";
import { PhoneIcon, MailIcon, InstagramIcon, FacebookIcon, HeartIcon } from "./Icons";
import Button from "./Button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const mainLinks = [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/for-referrers", label: "For Referrers" },
    { href: "/for-grant-writers", label: "For Grant Writers" },
    { href: "/donate", label: "Donate" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact" },
  ];

  const resourceLinks = [
    { href: "/get-support", label: "Client Info" },
    { href: "/forms", label: "Forms" },
  ];

  return (
    <footer className="relative overflow-hidden">
      <div
        className="relative brand-surface-dark"
        style={{
          backgroundImage: "url('/brand/social/cta-testimonial-section-bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent z-10" />
        <div className="relative z-10 container mx-auto px-4 lg:px-8 py-10 md:py-12">
          {/* Top Row: Brand + Nav Links */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
            {/* Brand — icon-only logo */}
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-3">
                <Image src="/brand/logo/icon-light-gray.webp" alt="KingGen Ministries" width={40} height={40} className="rounded-lg" />
                <span className="text-white font-heading font-bold text-xl">KingGen Ministries</span>
              </Link>
            </div>

            {/* Navigation */}
            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              {mainLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Middle Row: Contact + Social + Donate */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-8 border-b border-white/10">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/80">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <MailIcon className="w-4 h-4" />
                <span>{siteConfig.email}</span>
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <PhoneIcon className="w-4 h-4" />
                <span>{siteConfig.phone}</span>
              </a>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
              </div>
              <Button
                href="/donate"
                variant="white"
                size="sm"
                icon={<HeartIcon className="w-4 h-4" />}
              >
                Donate
              </Button>
            </div>
          </div>

          {/* Bottom Row: Legal + EIN */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6 text-xs text-white/60">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              <p>&copy; {currentYear} {siteConfig.name}</p>
              <span className="hidden sm:inline text-white/30">&middot;</span>
              <p>501(c)(3) EIN: {siteConfig.ein}</p>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              {resourceLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="/disclaimer" className="hover:text-white transition-colors">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
