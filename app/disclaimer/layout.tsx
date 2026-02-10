import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | KingGen Ministries",
  description: "Legal disclaimer and crisis resources. KingGen Ministries provides pastoral counseling, not licensed therapy.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
