import Link from "next/link";
import { siteConfig, footerLinks } from "../config/site";
import { PhoneIcon, MailIcon, MapPinIcon, InstagramIcon, FacebookIcon } from "./Icons";
import Logo from "./Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-primary text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand Column */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <Logo size="md" variant="horizontal" />
            </Link>
            <p className="text-white/80 mb-4 leading-relaxed">
              {siteConfig.tagline}
            </p>
            <p className="text-white/60 text-sm mb-6">
              KingGen Ministries is a <strong className="text-white/80">501(c)(3)</strong>.
              Donations are tax deductible as allowed by law.
            </p>
            <p className="text-white/60 text-sm mb-6">
              <strong className="text-white/80">EIN:</strong> {siteConfig.ein}
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-brand-accent transition-colors"
                aria-label="Follow us on Instagram"
              >
                <InstagramIcon className="w-6 h-6" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-brand-accent transition-colors"
                aria-label="Follow us on Facebook"
              >
                <FacebookIcon className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold font-heading mb-6">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-3 text-white/80 hover:text-brand-accent transition-colors"
                >
                  <MailIcon className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>{siteConfig.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-start gap-3 text-white/80 hover:text-brand-accent transition-colors"
                >
                  <PhoneIcon className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>{siteConfig.phone}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <MapPinIcon className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <address className="not-italic">
                  {siteConfig.address.line1}<br />
                  {siteConfig.address.line2}<br />
                  {siteConfig.address.line3}<br />
                  {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                </address>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold font-heading mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/80 hover:text-brand-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
            <p>&copy; {currentYear} {siteConfig.name}. All rights reserved.</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {footerLinks.map((item, index) => (
                <span key={item.href} className="flex items-center gap-4">
                  <Link
                    href={item.href}
                    className="hover:text-brand-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                  {index < footerLinks.length - 1 && (
                    <span className="text-white/30">|</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
