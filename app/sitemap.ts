import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: 'https://mtag.me',
      lastModified,
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://mtag.me/about',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://mtag.me/projects',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://mtag.me/contact',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://mtag.me/experience',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://mtag.me/attr',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://mtag.me/license',
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://mtag.me/privacy',
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://mtag.me/terms',
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];
}