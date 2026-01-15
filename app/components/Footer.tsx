import Link from "next/link";
import { siteConfig } from "../config/site";
import { PhoneIcon, MailIcon, HeartIcon } from "./Icons";
import Logo from "./Logo";

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Donate", href: "/donate" },
  ],
  services: [
    { name: "Clinical Pastoral Counseling", href: "/services#counseling" },
    { name: "Crisis Support", href: "/services#crisis" },
    { name: "Spiritual Direction", href: "/services#spiritual" },
    { name: "Grief Counseling", href: "/services#grief" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-primary text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6 text-white">
              <Logo size="md" />
            </Link>
            <p className="text-white/80 mb-6 leading-relaxed">
              Gospel-centered clinical pastoral counseling for women in need. All services are provided free of charge.
            </p>
            <div className="flex items-center gap-2 text-brand-accent">
              <HeartIcon className="w-5 h-5" />
              <span className="text-sm font-medium">501(c)(3) Nonprofit</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold font-heading mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/80 hover:text-brand-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold font-heading mb-6">Our Services</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/80 hover:text-brand-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold font-heading mb-6">Get in Touch</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-3 text-white/80 hover:text-brand-accent transition-colors"
                >
                  <PhoneIcon className="w-5 h-5 flex-shrink-0" />
                  <span>{siteConfig.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-white/80 hover:text-brand-accent transition-colors"
                >
                  <MailIcon className="w-5 h-5 flex-shrink-0" />
                  <span>{siteConfig.email}</span>
                </a>
              </li>
            </ul>
            <div className="mt-8">
              <Link
                href="/donate"
                className="inline-flex items-center gap-2 bg-brand-accent text-white px-6 py-3 rounded-xl font-semibold hover:bg-brand-accent/90 transition-all btn-hover-lift"
              >
                <HeartIcon className="w-5 h-5" />
                Support Our Mission
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
            <p>&copy; {currentYear} {siteConfig.name}. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Made with <HeartIcon className="w-4 h-4 text-brand-accent" /> for those in need
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
