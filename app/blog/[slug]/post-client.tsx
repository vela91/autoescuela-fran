'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import { useLanguage } from '@/hooks/use-language'
import type { BlogCategory, ContentBlock } from '@/lib/blog-types'
import { getBlogPost } from '@/lib/blog-posts'

const articleTranslations = {
  ca: {
    back: 'Torna al blog',
    publishedOn: 'Publicat el',
    readingTimeLabel: 'Temps de lectura',
  },
  es: {
    back: 'Volver al blog',
    publishedOn: 'Publicado el',
    readingTimeLabel: 'Tiempo de lectura',
  },
  en: {
    back: 'Back to blog',
    publishedOn: 'Published on',
    readingTimeLabel: 'Reading time',
  },
}

const categoryLabels: Record<
  keyof typeof articleTranslations,
  Record<BlogCategory, string>
> = {
  ca: {
    tips: 'Consells',
    theory: 'Teòric',
    practical: 'Pràctic',
    news: 'Notícies',
  },
  es: {
    tips: 'Consejos',
    theory: 'Teórico',
    practical: 'Práctico',
    news: 'Noticias',
  },
  en: {
    tips: 'Tips',
    theory: 'Theory',
    practical: 'Practical',
    news: 'News',
  },
}

const categoryStyle = (category: BlogCategory) => {
  switch (category) {
    case 'tips':
      return 'bg-red-500/15 text-red-200 border border-red-500/40'
    case 'theory':
      return 'bg-blue-500/15 text-blue-200 border border-blue-500/40'
    case 'practical':
      return 'bg-emerald-500/15 text-emerald-200 border border-emerald-500/40'
    case 'news':
      return 'bg-amber-500/15 text-amber-200 border border-amber-500/40'
    default:
      return 'bg-slate-700/40 text-slate-200 border border-slate-600/50'
  }
}

const renderContentBlock = (block: ContentBlock, index: number) => {
  if (block.type === 'heading') {
    return (
      <h2 key={`heading-${index}`} className="text-2xl font-semibold text-red-400">
        {block.text}
      </h2>
    )
  }

  if (block.type === 'list') {
    return (
      <ul key={`list-${index}`} className="list-disc list-inside space-y-2 text-slate-300 marker:text-red-400">
        {block.items.map((item, itemIndex) => (
          <li key={`list-item-${index}-${itemIndex}`}>{item}</li>
        ))}
      </ul>
    )
  }

  return (
    <p key={`paragraph-${index}`} className="text-slate-300 leading-relaxed">
      {block.text}
    </p>
  )
}

interface BlogPostClientPageProps {
  slug: string
}

export default function BlogPostClientPage({ slug }: BlogPostClientPageProps) {
  const { language } = useLanguage()
  const t = articleTranslations[language]

  const post = getBlogPost(language, slug)
  const fallback = language === 'en' ? null : getBlogPost('en', slug)

  const resolvedPost = post ?? fallback

  if (!resolvedPost) {
    return null
  }

  return (
    <div className="min-h-screen bg-slate-950 text-gray-100">
      <Header />

      <article className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center text-red-400 hover:text-red-300 font-medium transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t.back}
          </Link>

          <Badge className={`${categoryStyle(resolvedPost.category)} mb-4`}>
            {categoryLabels[language][resolvedPost.category]}
          </Badge>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {resolvedPost.title}
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-slate-400 mb-8 gap-3">
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {t.publishedOn} {resolvedPost.date}
              </span>
            </div>
            <span className="inline-flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {t.readingTimeLabel}: {resolvedPost.readingTime}
            </span>
          </div>

          <div className="w-full h-64 md:h-80 relative rounded-xl overflow-hidden shadow-lg shadow-black/30 border border-slate-800 mb-10">
            <Image
              src={resolvedPost.image || '/placeholder.svg'}
              alt={resolvedPost.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          <div className="space-y-6">
            {resolvedPost.content.map((block, idx) => renderContentBlock(block, idx))}
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
