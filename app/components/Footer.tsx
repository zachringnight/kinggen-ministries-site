import Link from "next/link";
import { siteConfig } from "../config/site";
import { PhoneIcon, MailIcon, InstagramIcon, FacebookIcon, HeartIcon } from "./Icons";
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

        <div className="relative z-10 container mx-auto px-4 lg:px-8 py-7 md:py-9">
          <div className="flex flex-col gap-6 md:gap-7">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-lg">
                <Link href="/" className="inline-flex items-center" aria-label="KingGen Ministries Home">
                  <BrandLockup
                    theme="dark"
                    size="sm"
                    className="w-[160px] md:w-[182px] h-auto"
                  />
                </Link>

                <p className="mt-3 text-sm text-white/94 leading-relaxed">
                  Free Gospel-centered counseling for women in need.
                </p>

                <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/92">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="inline-flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <MailIcon className="w-4 h-4" />
                    <span>{siteConfig.email}</span>
                  </a>
                  <a
                    href={`tel:${siteConfig.phoneHref}`}
                    className="inline-flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <PhoneIcon className="w-4 h-4" />
                    <span>{siteConfig.phone}</span>
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-4 lg:items-end">
                <nav className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-2 text-sm">
                  {mainLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-white/92 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                <div className="flex items-center gap-3">
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white/12 flex items-center justify-center text-white hover:bg-white/22 transition-colors"
                    aria-label="Instagram"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white/12 flex items-center justify-center text-white hover:bg-white/22 transition-colors"
                    aria-label="Facebook"
                  >
                    <FacebookIcon className="w-4 h-4" />
                  </a>
                  <Button
                    href="/donate"
                    variant="white"
                    size="sm"
                    icon={<HeartIcon className="w-4 h-4" />}
                    className="ml-1"
                  >
                    Donate
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-4 border-t border-white/20 text-xs text-white/90">
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
