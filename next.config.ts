import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.slidesharecdn.com',
      },
      {
        protocol: 'https',
        hostname: 'api.microlink.io',
      },
    ],
  },
};

export default nextConfig;
