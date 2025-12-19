import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'zenis-php.softboffin.com',
        port: '',
        pathname: '/assets/images/**',
      }
    ]
  }
};

export default nextConfig;
