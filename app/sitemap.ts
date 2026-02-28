import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { getBlogPosts, getCaseStudies, getGuides } from "@/lib/mdx";
import { servicePages } from "@/lib/service-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/team",
    "/services",
    "/work",
    "/resources",
    "/resources/blog",
    "/resources/guides",
    "/resources/templates",
    "/resources/tools",
    "/pricing",
    "/contact",
    "/privacy",
    "/terms",
    "/accessibility",
    "/testimonials"
  ];

  const staticEntries = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.7
  }));

  const serviceEntries = servicePages.map((service) => ({
    url: `${siteConfig.url}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8
  }));

  const blogEntries = getBlogPosts().map((post) => ({
    url: `${siteConfig.url}/resources/blog/${post.slug}`,
    lastModified: new Date(post.lastUpdated ?? post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  const caseEntries = getCaseStudies().map((study) => ({
    url: `${siteConfig.url}/work/${study.slug}`,
    lastModified: new Date(study.date),
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  const guideEntries = getGuides().map((guide) => ({
    url: `${siteConfig.url}/resources/guides/${String(guide.slug)}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.65
  }));

  return [...staticEntries, ...serviceEntries, ...blogEntries, ...caseEntries, ...guideEntries];
}
