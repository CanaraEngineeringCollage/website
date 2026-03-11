import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://cec.edu.in";

  return {
    rules: [
      {
        // Default rule for standard search engines (Googlebot, Bingbot, etc.)
        userAgent: "*",
        allow: "/",
      },
      {
        // Explicitly welcome major AI crawlers and allow them to read your site
        userAgent: ["GPTBot", "Claude-Bot", "Google-Extended", "PerplexityBot"],
        allow: ["/", "/llms.txt"],
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}