import type { MetadataRoute } from "next";
import { allDepartmentsData } from "@/lib/allDepartments";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://cec.edu.in";

  // Use a fixed date for static pages that change rarely (e.g., the last major site update)
  // This prevents Google from thinking every page changes every day.
  const staticLastModified = new Date("2024-01-01T00:00:00Z");
  
  // For dynamic pages, use the current date or a date from DB when available
  const dynamicLastModified = new Date();

  // Define static routes with specific priorities based on SEO importance
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: "", priority: 1.0 }, // Homepage is most important
    { url: "/admission", priority: 0.9 }, // High intent
    { url: "/academics/programs", priority: 0.9 }, // High intent for students
    { url: "/training-placements", priority: 0.9 }, // High importance for parents/students
    { url: "/department-overview", priority: 0.9 }, // Central hub for departments
    { url: "/campus-buzz", priority: 0.8 },
    { url: "/careers", priority: 0.8 },
    { url: "/about/about-cec", priority: 0.8 },
    { url: "/student-achievements", priority: 0.8 },
    { url: "/alumni", priority: 0.8 },
    { url: "/academics/academic-overview", priority: 0.8 },
    { url: "/cif", priority: 0.8 },
    { url: "/entrepreneurship-cell", priority: 0.8 },
    { url: "/explore/infrastructure", priority: 0.8 },
    { url: "/explore/hostel-life", priority: 0.7 },
    { url: "/studentlife-engagement", priority: 0.7 },
    { url: "/research-development-consultancy", priority: 0.7 },
    { url: "/explore/central-library", priority: 0.7 },
    { url: "/explore/physical-education", priority: 0.7 },
    { url: "/academics/research", priority: 0.7 },
    { url: "/academics/learning-hub", priority: 0.7 },
    { url: "/academics/examination-records", priority: 0.7 },
    // Lower priority utility/about pages
    { url: "/about/mandatory-disclosure", priority: 0.6 },
    { url: "/about/distinctive-practices", priority: 0.6 },
    { url: "/about/educators-administrators", priority: 0.6 },
    { url: "/about/governing-council", priority: 0.6 },
    { url: "/about/our-management", priority: 0.6 },
    { url: "/about/our-founder", priority: 0.6 },
    { url: "/about/key-functionaries-and-hods", priority: 0.6 },
    { url: "/about/student-welfare-department", priority: 0.6 },
    { url: "/explore/central-library/about-library", priority: 0.6 },
    { url: "/alumni/about-alumni", priority: 0.6 },
    { url: "/about/history-of-cec", priority: 0.5 },
    { url: "/about/grievance-redressal-cell", priority: 0.5 },
    { url: "/about/mandatory-disclosure/sc-st-grievance", priority: 0.5 },
    { url: "/privacy-policy", priority: 0.3 }, // Lowest priority for SEO
  ].map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: staticLastModified,
  }));

  const departmentRoutes: MetadataRoute.Sitemap = allDepartmentsData.flatMap((dept: any) => [
    {
      url: `${baseUrl}/department/${dept.slug}`,
      lastModified: staticLastModified,
    },
    {
      url: `${baseUrl}/department/${dept.slug}/details`,
      lastModified: staticLastModified,
    },
  ]);

  return [...staticRoutes, ...departmentRoutes];
}
