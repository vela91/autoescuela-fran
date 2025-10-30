import type { Metadata } from 'next'
import BlogPageClient from './blog-client'
import { blogPosts } from '@/lib/blog-posts'
import { SITE_NAME, SITE_URL } from '@/lib/site-metadata'

const keywords = Array.from(new Set(blogPosts.flatMap((post) => post.keywords)))

export const metadata: Metadata = {
  title: 'Blog y consejos de conducción',
  description:
    'Consejos prácticos, novedades de tráfico y recursos formativos para aprobar tus exámenes de conducir en Salou.',
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  keywords,
  openGraph: {
    title: `Blog | ${SITE_NAME}`,
    description:
      'Artículos y guías de Autoescola Fran para ayudarte a aprobar el carnet de conducir con confianza.',
    url: `${SITE_URL}/blog`,
    type: 'website',
  },
  twitter: {
    title: `Blog | ${SITE_NAME}`,
    description:
      'Artículos y guías de Autoescola Fran para ayudarte a aprobar el carnet de conducir con confianza.',
  },
}

export default function BlogPage() {
  return <BlogPageClient />
}
