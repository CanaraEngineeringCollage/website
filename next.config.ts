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
    remotePatterns: [
      { protocol: "https", hostname: "testapi.megamind.studio" },
      { protocol: "https", hostname: "www.canaraengineering.in" },
      { protocol: "https", hostname: "assets.unlayer.com" },
      { protocol: "https", hostname: "cec.edu.in" },
      { protocol: "https", hostname: "apiserver.cec.edu.in" },
      { protocol: "https", hostname: "img.youtube.com" },
      { protocol: "https", hostname: "i.ytimg.com" },
    ],
  },
};

export default nextConfig;