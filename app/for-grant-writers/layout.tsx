import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Grant Writers | KingGen Ministries",
  description: "Organization facts, financials, and impact data for grant applications and funding proposals for KingGen Ministries.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
