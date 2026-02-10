import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials | KingGen Ministries",
  description: "Read stories of hope and transformation from women who received free gospel-centered counseling through KingGen Ministries.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
