import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { siteConfig } from "./config/site";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/yqt0fpz.css" />
      </head>
      <body className="antialiased">
        <header className="bg-brand-primary text-white shadow-md">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center justify-between">
              <Link href="/" className="text-2xl font-bold font-heading">
                {siteConfig.name}
              </Link>
              <ul className="flex gap-6">
                <li>
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/donate" className="hover:underline font-semibold">
                    Donate
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-800 text-white py-8 mt-12">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2025 {siteConfig.name}. All rights reserved.</p>
            <p className="mt-2">
              <a href={`tel:${siteConfig.phone}`} className="hover:underline">
                {siteConfig.phone}
              </a>
              {" | "}
              <a href={`mailto:${siteConfig.email}`} className="hover:underline">
                {siteConfig.email}
              </a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
