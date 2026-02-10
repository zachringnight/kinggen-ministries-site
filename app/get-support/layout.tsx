import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Information | KingGen Ministries",
  description: "Learn what to expect from free clinical pastoral counseling at KingGen Ministries. Information for referred clients.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
