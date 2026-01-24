"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutWrapperProps {
  children: ReactNode;
}

// Routes that should not show the main site header/footer
const STANDALONE_ROUTES = ["/admin"];

export function LayoutWrapper({ children }: LayoutWrapperProps) {
  const pathname = usePathname();

  const isStandalone = STANDALONE_ROUTES.some((route) =>
    pathname.startsWith(route)
  );

  if (isStandalone) {
    // Render children directly without header/footer
    return <>{children}</>;
  }

  // Normal pages get header and footer
  return (
    <>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </>
  );
}
