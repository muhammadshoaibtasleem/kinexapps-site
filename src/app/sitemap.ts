import type { MetadataRoute } from "next";
import { apps } from "@/data/apps";
import { articles } from "@/data/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kinexapps.com";

  // Use meaningful dates instead of new Date() on every build
  const siteLastUpdated = new Date("2026-03-01");
  const legalLastUpdated = new Date("2026-02-26");

  const appPages = apps.map((app) => ({
    url: `${baseUrl}/apps/${app.id}`,
    lastModified: siteLastUpdated,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const articlePages = articles.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: new Date(article.updatedDate),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: siteLastUpdated,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...appPages,
    {
      url: `${baseUrl}/games`,
      lastModified: siteLastUpdated,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/education`,
      lastModified: siteLastUpdated,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/utilities`,
      lastModified: siteLastUpdated,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: siteLastUpdated,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...articlePages,
    {
      url: `${baseUrl}/about`,
      lastModified: siteLastUpdated,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: siteLastUpdated,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: legalLastUpdated,
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: legalLastUpdated,
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ];
}
