import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'site-assets.plasmic.app',
      },
    ],
  },
};

export default nextConfig;
