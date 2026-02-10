import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forms & Resources | KingGen Ministries",
  description: "Free downloadable resources including Scripture guides, prayer guides, and journaling prompts for encouragement and healing.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
