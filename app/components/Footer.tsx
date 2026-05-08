import Link from "next/link";
import { siteConfig } from "../config/site";
import { PhoneIcon, MailIcon, LocationIcon, InstagramIcon, FacebookIcon, HeartIcon } from "./Icons";
import Button from "./Button";
import OptimizedBackground from "./OptimizedBackground";
import { BrandLockup } from "./Logo";

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
    { href: "/get-support", label: "Client Info" },
    { href: "/forms", label: "Forms" },
  ];

  return (
    <footer className="relative overflow-hidden">
      <div className="relative text-white isolate">
        <OptimizedBackground
          src="/brand/curated/bg/green-watermark-tall.png"
          className="absolute inset-0 bg-cover bg-center pointer-events-none"
          style={{ opacity: 0.92 }}
        />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-brand-primary-dark/44 via-brand-primary/42 to-brand-primary-dark/56" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/55 to-transparent z-10" />

        <div className="relative z-10 container mx-auto px-4 lg:px-8 py-12 md:py-14">
          <div className="grid gap-10 mb-10 md:grid-cols-2 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.85fr)_minmax(0,1fr)]">
            <div>
              <Link href="/" className="inline-flex items-center gap-3" aria-label="KingGen Ministries Home">
                <BrandLockup theme="dark" size="md" />
              </Link>

              <p className="mt-4 text-sm text-white/95 max-w-xl leading-relaxed">
                Free Gospel-centered counseling for women in need. We partner with
                churches, referrers, and donors to remove cost barriers to care.
              </p>

              <div className="mt-6 flex flex-col gap-2 text-sm text-white/95">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 hover:text-white transition-colors w-fit"
                >
                  <MailIcon className="w-4 h-4 flex-shrink-0" />
                  <span>{siteConfig.email}</span>
                </a>
                <a
                  href={`tel:${siteConfig.phoneHref}`}
                  className="inline-flex items-center gap-2 hover:text-white transition-colors w-fit"
                >
                  <PhoneIcon className="w-4 h-4 flex-shrink-0" />
                  <span>{siteConfig.phone}</span>
                </a>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white mb-4">
                Mailing Address
              </p>
              <address className="not-italic flex gap-3 text-sm text-white/95 leading-relaxed">
                <LocationIcon className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>
                  {siteConfig.address.line1}
                  <br />
                  {siteConfig.address.line2}
                  <br />
                  {siteConfig.address.line3}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                </span>
              </address>
            </div>

            <div className="lg:justify-self-end">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white mb-4">
                Explore
              </p>
              <nav className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm">
                {mainLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-white/95 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-6 flex items-center gap-3">
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/12 flex items-center justify-center text-white hover:bg-white/22 transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/12 flex items-center justify-center text-white hover:bg-white/22 transition-colors"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <Button
                  href="/donate"
                  variant="white"
                  size="sm"
                  icon={<HeartIcon className="w-4 h-4" />}
                  className="ml-2"
                >
                  Donate
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6 border-t border-white/20 text-xs text-white/95">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              <p>&copy; {currentYear} {siteConfig.name}</p>
              <span className="hidden sm:inline text-white/95">&middot;</span>
              <p>501(c)(3) EIN: {siteConfig.ein}</p>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
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
