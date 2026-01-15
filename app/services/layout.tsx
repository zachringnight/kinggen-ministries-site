import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Free clinical pastoral counseling services including crisis support, grief counseling, spiritual direction, and more. All services provided at no cost.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
