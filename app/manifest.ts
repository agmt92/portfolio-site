import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Mohamed Tarek AbdelGhani\'s Portfolio',
    short_name: 'AG\'s Portfolio',
    description: 'A personal website and a log of AG\s journey as a developer',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}