import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  productionBrowserSourceMaps: true,

  images: {
    domains: ["testapi.megamind.studio", "www.canaraengineering.in","assets.unlayer.com"],
  },
};

export default nextConfig;
