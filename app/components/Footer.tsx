import Link from "next/link";
import { siteConfig } from "../config/site";
import { PhoneIcon, MailIcon, InstagramIcon, FacebookIcon, HeartIcon } from "./Icons";
import { LogoIcon } from "./Logo";
import Button from "./Button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const mainLinks = [
    { href: "/about", label: "About" },
    { href: "/for-referrers", label: "For Referrers" },
    { href: "/for-grant-writers", label: "For Grant Writers" },
    { href: "/donate", label: "Donate" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact" },
  ];

  const resourceLinks = [
    { href: "/get-support", label: "Client Information" },
    { href: "/forms", label: "Forms & Resources" },
    { href: "/privacy", label: "Privacy" },
    { href: "/disclaimer", label: "Disclaimer" },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Elegant top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-brand-accent/30 to-transparent" />

      {/* Main Footer */}
      <div className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/bg-green.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#3D5A3D]/95 to-[#2c4a2c]/98" />

        <div className="relative z-10 container mx-auto px-4 lg:px-8 py-14 md:py-16">
          {/* Top: Brand + CTA */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-12">
            <div className="max-w-xs">
              <Link href="/" className="flex items-center gap-3 mb-4 group">
                <div className="transition-transform duration-300 group-hover:scale-105">
                  <LogoIcon className="w-10 h-10" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-heading font-bold text-xl leading-tight">
                    KingGen
                  </span>
                  <span className="text-white/50 text-[10px] tracking-[0.15em] uppercase font-medium">
                    Ministries
                  </span>
                </div>
              </Link>
              <p className="text-white/60 text-sm leading-relaxed">
                Gospel-centered counseling for women in need. A 501(c)(3) nonprofit ministry.
              </p>
            </div>

            <div className="flex flex-col items-start md:items-end gap-3">
              <Button
                href="/donate"
                variant="white"
                size="md"
                icon={<HeartIcon className="w-4 h-4" />}
                className="!rounded-full"
              >
                Support Our Mission
              </Button>
              <div className="flex gap-3">
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/8 flex items-center justify-center text-white/70 hover:bg-white/15 hover:text-white transition-all duration-300"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/8 flex items-center justify-center text-white/70 hover:bg-white/15 hover:text-white transition-all duration-300"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Links grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-10 border-b border-white/8">
            <div>
              <h4 className="text-[10px] font-semibold text-white/40 uppercase tracking-[0.2em] mb-4">
                Navigate
              </h4>
              <nav className="grid grid-cols-2 gap-x-6 gap-y-2">
                {mainLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-white/65 hover:text-white transition-colors text-sm py-0.5"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <h4 className="text-[10px] font-semibold text-white/40 uppercase tracking-[0.2em] mb-4">
                Resources
              </h4>
              <nav className="flex flex-col gap-2">
                {resourceLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-white/65 hover:text-white transition-colors text-sm py-0.5"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <h4 className="text-[10px] font-semibold text-white/40 uppercase tracking-[0.2em] mb-4">
                Contact
              </h4>
              <div className="space-y-3">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2.5 text-white/65 hover:text-white transition-colors text-sm"
                >
                  <MailIcon className="w-4 h-4 flex-shrink-0" />
                  <span>{siteConfig.email}</span>
                </a>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-2.5 text-white/65 hover:text-white transition-colors text-sm"
                >
                  <PhoneIcon className="w-4 h-4 flex-shrink-0" />
                  <span>{siteConfig.phone}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-6 text-xs text-white/40">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              <p>&copy; {currentYear} {siteConfig.name}</p>
              <span className="hidden sm:inline text-white/20">&middot;</span>
              <p>501(c)(3) &middot; EIN: {siteConfig.ein}</p>
            </div>
            <p className="text-white/30">
              All services are free and confidential
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
