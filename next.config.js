/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.microlink.io', // Microlink
      },
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

module.exports = nextConfig;

module.exports.env = {
  FORMSPREE_URL: process.env.FORMSPREE_URL,
};