import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
      },
      {
        userAgent: 'Slurp', // Yahoo
        allow: '/',
      },
      {
        userAgent: 'DuckDuckBot',
        allow: '/',
      },
      {
        userAgent: 'Baiduspider',
        allow: '/',
      },
      {
        userAgent: 'Yandex',
        allow: '/',
      },
      {
        userAgent: 'Bravebot', // Brave Search
        allow: '/',
      },
      {
        userAgent: 'EcosiaBot', // Ecosia
        allow: '/',
      },
      {
        userAgent: 'Ask Jeeves/Teoma', // Ask.com
        allow: '/',
      },
      {
        userAgent: 'Naverbot', // Naver
        allow: '/',
      },
      {
        userAgent: 'AOLbot', // AOL
        allow: '/',
      },
      {
        userAgent: 'ia_archiver', // Internet Archive
        allow: '/',
      },
      {
        userAgent: 'yepbot', // Yep
        allow: '/',
      },
      {
        userAgent: 'Andibot', // Andi
        allow: '/',
      },
      {
        userAgent: 'Phindbot', // Phind.com
        allow: '/',
      },
      {
        userAgent: 'YouBot', // You.com
        allow: '/',
      },
      {
        userAgent: 'Komobot', // Komo
        allow: '/',
      },
      {
        userAgent: 'facebookexternalhit', // Facebook
        allow: '/',
      },
      {
        userAgent: 'Twitterbot', // Twitter/X
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: '/',
      },
    ],
    sitemap: 'https://mtag.me/sitemap.xml',
  }
}