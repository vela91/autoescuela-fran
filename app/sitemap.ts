import type { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blog-posts'
import { SITE_URL } from '@/lib/site-metadata'

const staticRoutes = ['', '/sobre-nosaltres', '/permisos', '/curso-intensivo', '/contacte', '/blog']

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const staticEntries = staticRoutes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
  }))

  const blogEntries = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt ?? post.publishedAt),
  }))

  return [...staticEntries, ...blogEntries]
}
