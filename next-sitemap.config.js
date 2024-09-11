/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || 'https://portfolio-one-delta-49.vercel.app/',
  generateRobotsTxt: true,
};

module.exports = config;