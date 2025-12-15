import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: 'export',
	basePath: '/DaisyWidget',
	assetPrefix: '/DaisyWidget/',
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
