'use client'

import { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { useLanguage } from '@/hooks/use-language'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, ArrowRight, Clock } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import type { BlogCategory } from '@/lib/blog-types'
import { getBlogPostSummaries } from '@/lib/blog-post-summaries'

const translations = {
  ca: {
    title: 'Blog i Consells de Conducció',
    subtitle: "Articles útils per aprovar els exàmens i conduir amb seguretat",
    readMore: 'Llegir més',
    all: 'Tots',
    categories: {
      tips: 'Consells',
      theory: 'Teòric',
      practical: 'Pràctic',
      news: 'Notícies',
    },
  },
  es: {
    title: 'Blog y Consejos de Conducción',
    subtitle: 'Artículos útiles para aprobar los exámenes y conducir con seguridad',
    readMore: 'Leer más',
    all: 'Todos',
    categories: {
      tips: 'Consejos',
      theory: 'Teórico',
      practical: 'Práctico',
      news: 'Noticias',
    },
  },
  en: {
    title: 'Blog and Driving Tips',
    subtitle: 'Useful articles to pass exams and drive safely',
    readMore: 'Read more',
    all: 'All',
    categories: {
      tips: 'Tips',
      theory: 'Theory',
      practical: 'Practical',
      news: 'News',
    },
  },
}

export default function BlogPageClient() {
  const { language } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory | null>(null)

  const t = translations[language]
  const posts = getBlogPostSummaries(language)

  const filteredPosts = selectedCategory
    ? posts.filter((post) => post.category === selectedCategory)
    : posts

  const getCategoryColor = (category: BlogCategory) => {
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

  return (
    <div className="min-h-screen bg-slate-950 text-gray-100">
      <Header />

      <section className="py-16 bg-gradient-to-r from-slate-900 via-slate-950 to-black border-b border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.title}</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>
      </section>

      <section className="py-8 bg-slate-950 border-b border-slate-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full transition-colors border ${
                selectedCategory === null
                  ? 'bg-red-600 text-white border-red-500 shadow-lg shadow-red-600/30'
                  : 'bg-slate-900 text-slate-300 border-slate-700 hover:bg-slate-800'
              }`}
            >
              {t.all}
            </button>
            {(Object.entries(t.categories) as [BlogCategory, string][]).map(([key, value]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`px-4 py-2 rounded-full transition-colors border ${
                  selectedCategory === key
                    ? 'bg-red-600 text-white border-red-500 shadow-lg shadow-red-600/30'
                    : 'bg-slate-900 text-slate-300 border-slate-700 hover:bg-slate-800'
                }`}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card
                key={post.slug}
                className="bg-slate-900 border border-slate-800 hover:border-red-500/50 transition-all duration-300 shadow-lg shadow-black/20"
              >
                <CardContent className="p-0">
                  <Image
                    src={post.image || '/placeholder.svg'}
                    alt={post.title}
                    width={400}
                    height={200}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="w-full h-48 object-cover rounded-t-lg border-b border-slate-800"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge className={getCategoryColor(post.category)}>
                        {t.categories[post.category]}
                      </Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-red-600 mb-3 hover:text-red-700 transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>

                    <p className="text-slate-300 mb-4 line-clamp-3">{post.excerpt}</p>

                    <div className="flex items-center justify-between text-sm text-slate-400 mb-4">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readingTime}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-red-400 hover:text-red-300 font-medium transition-colors"
                      >
                        {t.readMore}
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
