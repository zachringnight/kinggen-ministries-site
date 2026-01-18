import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support KingGen Ministries with a tax-deductible donation. Your generosity helps us provide free counseling services to women in need.",
};

export default function DonateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
