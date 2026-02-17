import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support KingGen Ministries with a tax-deductible gift that helps provide counseling support for women in need.",
};

export default function DonateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
