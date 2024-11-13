import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.worldometers.info',
        pathname: '/img/flags/**',
      },
      {
        protocol: 'https',
        hostname: 'img2.pic.in.th',
        pathname: '/pic/**',
      },
    ],
  },
};

export default nextConfig;
