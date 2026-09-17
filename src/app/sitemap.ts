import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://netpositive-solutions.com";
  return ["", "/thesis", "/work", "/work/prior-art", "/atlas", "/community", "/writing", "/about", "/contact"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date("2026-09-17"),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}