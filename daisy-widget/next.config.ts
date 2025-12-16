import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const base = isProd ? "/DaisyWidget" : "";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: base,
  assetPrefix: base ? `${base}/` : "",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'site-assets.plasmic.app',
      },
    ],
  },
};

export default nextConfig;
