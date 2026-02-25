import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.thesocialcraze.com'

  const routes = ['', '/about', '/services', '/portfolio', '/contact']

  const lastModified = new Date()

  return routes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified,
  }))
}

