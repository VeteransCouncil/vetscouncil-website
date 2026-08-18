import type { MetadataRoute } from "next";

const SITE_URL = "https://www.vetscouncil.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/programs",
    "/events",
    "/resources",
    "/get-involved",
    "/donate",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/events" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
