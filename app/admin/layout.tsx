import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Editor - KingGen Ministries",
  description: "Edit the KingGen Ministries website",
  robots: "noindex, nofollow", // Don't index admin pages
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // This layout removes the Header and Footer for a clean editor experience
  return <>{children}</>;
}
