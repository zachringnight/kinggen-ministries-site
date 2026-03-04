import type { MetadataRoute } from "next";
import { siteConfig } from "./config/site";

const siteUrl = siteConfig.url;
export const dynamic = "force-static";

const routes = [
  "",
  "/about",
  "/services",
  "/for-referrers",
  "/for-grant-writers",
  "/testimonials",
  "/get-support",
  "/contact",
  "/donate",
  "/privacy",
  "/disclaimer",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
