import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Megan Woodruff Portfolio',
    short_name: 'Megan Woodruff',
    description: 'Portfolio of design technologist Megan Woodruff.',
    start_url: '/',
    display: 'standalone',
    background_color: '#242331',
    theme_color: '#242331',
    icons: [
      {
        src: '/profile.jpg',
        sizes: '512x512',
        type: 'image/jpeg',
      },
    ],
  }
}
