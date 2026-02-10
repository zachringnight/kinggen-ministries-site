import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | KingGen Ministries",
  description: "Our commitment to confidentiality and privacy. Learn how KingGen Ministries protects your personal information.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
