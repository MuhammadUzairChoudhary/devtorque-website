import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants";
import { projects } from "@/data/projects";
import { solutions } from "@/data/solutions";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/solutions", "/work", "/about", "/contact"];
  const solutionRoutes = solutions.map((solution) => solution.href);
  const projectRoutes = projects.map((project) => `/work/${project.slug}`);

  return [...staticRoutes, ...solutionRoutes, ...projectRoutes].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date()
  }));
}
