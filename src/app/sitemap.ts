import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://netpositive-solutions.com";
  return ["", "/network", "/thesis", "/work", "/work/prior-art", "/atlas", "/community", "/writing", "/about", "/contact"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(path === "" || path === "/network" || path === "/about" || path === "/contact" || path === "/thesis" || path === "/community" ? "2026-11-26" : "2026-09-17"),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}