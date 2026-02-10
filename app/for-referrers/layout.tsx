import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Referrers | KingGen Ministries",
  description: "Refer women in need to free gospel-centered clinical pastoral counseling. Learn about our referral process and how we can partner together.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
