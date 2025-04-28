import type { NextConfig } from "next";
const path = require('path');
const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true, 
  },
  webpack(config) {
    config.resolve.modules.push(path.resolve('./src')); // Resolves alias '@' to './src'
    return config;
  }
};

export default nextConfig;
