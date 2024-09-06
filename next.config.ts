import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nextjs.org',
      },
      {
        protocol: 'https',
        hostname: 'reactjs.org',
      },
      {
        protocol: 'https',
        hostname: 'ui.aceternity.com',
      },
      {
        protocol: 'https',
        hostname: 'www.dr-chuck.com',
      },
      {
        protocol: 'https',
        hostname: 'www.umich.edu',
      },
    ],
  },
  experimental: {
    ppr: 'incremental',
    },
};

export default nextConfig;