import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  productionBrowserSourceMaps: true,

  // ✅ Add this to allow external image domains
  images: {
    domains: ["www.canaraengineering.in"],
  },
};

export default nextConfig;
