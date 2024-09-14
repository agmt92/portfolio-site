import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: 'https://www.mtag.me',
      lastModified,
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://www.mtag.me/about',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.mtag.me/projects',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.mtag.me/contact',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.mtag.me/experience',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.mtag.me/attr',
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.mtag.me/license',
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://www.mtag.me/privacy',
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://www.mtag.me/terms',
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];
}