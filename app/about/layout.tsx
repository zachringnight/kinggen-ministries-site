import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about KingGen Ministries, our mission to provide free gospel-centered clinical pastoral counseling for women, and meet Pastor LeeAnn.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
