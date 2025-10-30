import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import BlogPostClientPage from './post-client'
import { getAllBlogSlugs, getBlogPostBySlug } from '@/lib/blog-posts'
import { SITE_NAME, SITE_URL } from '@/lib/site-metadata'

type BlogPostPageProps = {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    return {
      title: `${SITE_NAME} | Blog`,
      description: 'Artículos, consejos y recursos para tu formación vial.',
    }
  }

  const translation = post.translations.es ?? post.translations.ca ?? post.translations.en
  const url = `${SITE_URL}/blog/${post.slug}`
  const imageUrl = `${SITE_URL}${post.image}`

  return {
    title: `${translation.title} | ${SITE_NAME}`,
    description: translation.excerpt,
    alternates: {
      canonical: url,
    },
    keywords: post.keywords,
    openGraph: {
      title: `${translation.title} | ${SITE_NAME}`,
      description: translation.excerpt,
      url,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      authors: [post.author],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: translation.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${translation.title} | ${SITE_NAME}`,
      description: translation.excerpt,
      images: [imageUrl],
    },
  }
}

const baseOrganization = {
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const translation = post.translations.es ?? post.translations.ca ?? post.translations.en
  const authorIsTeam = post.author.toLowerCase().includes('equipo')
  const author = authorIsTeam
    ? {
        '@type': 'Organization',
        name: post.author,
      }
    : {
        '@type': 'Person',
        name: post.author,
      }
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: translation.title,
    description: translation.excerpt,
    image: `${SITE_URL}${post.image}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author,
    publisher: baseOrganization,
    articleSection: post.category,
    keywords: post.keywords.join(', '),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${post.slug}`,
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BlogPostClientPage slug={post.slug} />
    </>
  )
}
