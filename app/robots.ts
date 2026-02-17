import type { MetadataRoute } from "next";
import { siteConfig } from "./config/site";

const siteUrl = siteConfig.url;
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
