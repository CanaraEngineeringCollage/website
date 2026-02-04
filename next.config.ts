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
    domains: [
      "testapi.megamind.studio",
      "www.canaraengineering.in",
      "assets.unlayer.com",
      "cec.edu.in",
      "apiserver.cec.edu.in",
      "img.youtube.com",
      "i.ytimg.com",
    ],
  },
};

export default nextConfig;
