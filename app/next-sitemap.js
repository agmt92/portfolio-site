// next-sitemap.js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://portfolio-one-delta-49.vercel.app', // Replace with your site's URL
    generateRobotsTxt: true,             // (Optional) Generate a robots.txt file
    sitemapSize: 7000,                   // Limit number of URLs per sitemap
    changefreq: 'daily',                 // Change frequency for each page
    priority: 0.7,                       // Default priority for pages
    exclude: ['/private-page'],          // (Optional) Exclude specific paths
    robotsTxtOptions: {
      additionalSitemaps: [
        'https://portfolio-one-delta-49.vercel.app/sitemap.xml',  // Add additional sitemaps if needed
      ],
    },
  };``