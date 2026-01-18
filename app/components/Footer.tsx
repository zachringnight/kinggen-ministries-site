import Link from "next/link";
import { siteConfig, footerLinks } from "../config/site";
import { PhoneIcon, MailIcon, MapPinIcon, InstagramIcon, FacebookIcon, HeartIcon } from "./Icons";
import Logo from "./Logo";
import Button from "./Button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Main site navigation for footer
  const mainLinks = [
    { href: "/about", label: "About" },
    { href: "/for-referrers", label: "For Referrers" },
    { href: "/for-grant-writers", label: "For Grant Writers" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Main Footer with Green Texture Background */}
      <div className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/bg_green_texture_1920x1080.png')" }}
        />
        <div className="absolute inset-0 bg-brand-primary/90" />

        <div className="relative z-10 container mx-auto px-4 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-block mb-4">
                <Logo size="sm" variant="horizontal" />
              </Link>
              <p className="text-white/90 text-sm leading-relaxed mb-4">
                {siteConfig.tagline}
              </p>
              <p className="text-white/70 text-xs mb-4">
                501(c)(3) nonprofit. EIN: {siteConfig.ein}
              </p>
              {/* Social Links */}
              <div className="flex gap-3">
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  <FacebookIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h3 className="text-white font-semibold font-heading mb-4 text-sm uppercase tracking-wider">
                Navigate
              </h3>
              <ul className="space-y-2">
                {mainLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-white/80 hover:text-white transition-colors text-sm"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className="text-white font-semibold font-heading mb-4 text-sm uppercase tracking-wider">
                Resources
              </h3>
              <ul className="space-y-2">
                {footerLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-white/80 hover:text-white transition-colors text-sm"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-semibold font-heading mb-4 text-sm uppercase tracking-wider">
                Contact
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
                  >
                    <MailIcon className="w-4 h-4 flex-shrink-0" />
                    <span className="break-all">{siteConfig.email}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
                  >
                    <PhoneIcon className="w-4 h-4 flex-shrink-0" />
                    <span>{siteConfig.phone}</span>
                  </a>
                </li>
                <li className="flex items-start gap-2 text-white/80 text-sm">
                  <MapPinIcon className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <address className="not-italic">
                    {siteConfig.address.city}, {siteConfig.address.state}
                  </address>
                </li>
              </ul>

              {/* Donate CTA */}
              <div className="mt-6">
                <Button
                  href="/donate"
                  variant="white"
                  size="sm"
                  icon={<HeartIcon className="w-4 h-4" />}
                  className="w-full sm:w-auto"
                >
                  Donate
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-brand-primary border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
            <p>&copy; {currentYear} {siteConfig.name}. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy
              </Link>
              <span className="text-white/30">|</span>
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
