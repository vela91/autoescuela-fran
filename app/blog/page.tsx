'use client'

import { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { useLanguage } from '@/hooks/use-language'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, User, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const translations = {
  ca: {
    title: "Blog i Consells de Conducció",
    subtitle: "Articles útils per aprovar els exàmens i conduir amb seguretat",
    readMore: "Llegir més",
    by: "per",
    categories: {
      tips: "Consells",
      theory: "Teòric", 
      practical: "Pràctic",
      news: "Notícies"
    }
  },
  es: {
    title: "Blog y Consejos de Conducción",
    subtitle: "Artículos útiles para aprobar los exámenes y conducir con seguridad",
    readMore: "Leer más",
    by: "por",
    categories: {
      tips: "Consejos",
      theory: "Teórico",
      practical: "Práctico", 
      news: "Noticias"
    }
  },
  en: {
    title: "Blog and Driving Tips",
    subtitle: "Useful articles to pass exams and drive safely",
    readMore: "Read more",
    by: "by",
    categories: {
      tips: "Tips",
      theory: "Theory",
      practical: "Practical",
      news: "News"
    }
  }
}

const blogPosts = {
  ca: [
    {
      id: 1,
      title: "Consells per aprovar el teòric a la primera",
      excerpt: "Descobreix les millors estratègies per estudiar i aprovar l'examen teòric de conduir sense complicacions.",
      category: "tips",
      author: "Equip Autoescola Fran",
      date: "15 de Gener, 2024",
      image: "/placeholder.svg?height=200&width=400"
    },
    {
      id: 2,
      title: "Rutes pràctiques per Salou i voltants",
      excerpt: "Les millors rutes per practicar la conducció a Salou, Cambrils i la zona de la Costa Daurada.",
      category: "practical",
      author: "Instructor Fran",
      date: "10 de Gener, 2024", 
      image: "/placeholder.svg?height=200&width=400"
    },
    {
      id: 3,
      title: "Novetats en el codi de circulació 2024",
      excerpt: "Tots els canvis importants en la normativa de trànsit que has de conèixer aquest any.",
      category: "news",
      author: "Equip Autoescola Fran",
      date: "5 de Gener, 2024",
      image: "/placeholder.svg?height=200&width=400"
    },
    {
      id: 4,
      title: "Com superar els nervis de l'examen pràctic",
      excerpt: "Tècniques i consells per mantenir la calma durant l'examen pràctic de conduir.",
      category: "tips",
      author: "Psicòloga Maria López",
      date: "28 de Desembre, 2023",
      image: "/placeholder.svg?height=200&width=400"
    },
    {
      id: 5,
      title: "Manteniment bàsic del vehicle",
      excerpt: "Tot el que necessites saber sobre el manteniment preventiu del teu cotxe.",
      category: "practical",
      author: "Mecànic Joan Martí",
      date: "20 de Desembre, 2023",
      image: "/placeholder.svg?height=200&width=400"
    },
    {
      id: 6,
      title: "Conducció segura en condicions adverses",
      excerpt: "Consells per conduir amb seguretat quan plou, hi ha boira o condicions meteorològiques difícils.",
      category: "tips",
      author: "Instructor Carles",
      date: "15 de Desembre, 2023",
      image: "/placeholder.svg?height=200&width=400"
    }
  ],
  es: [
    {
      id: 1,
      title: "Consejos para aprobar el teórico a la primera",
      excerpt: "Descubre las mejores estrategias para estudiar y aprobar el examen teórico de conducir sin complicaciones.",
      category: "tips",
      author: "Equipo Autoescola Fran",
      date: "15 de Enero, 2024",
      image: "/placeholder.svg?height=200&width=400"
    },
    {
      id: 2,
      title: "Rutas prácticas por Salou y alrededores",
      excerpt: "Las mejores rutas para practicar la conducción en Salou, Cambrils y la zona de la Costa Dorada.",
      category: "practical",
      author: "Instructor Fran",
      date: "10 de Enero, 2024",
      image: "/placeholder.svg?height=200&width=400"
    },
    {
      id: 3,
      title: "Novedades en el código de circulación 2024",
      excerpt: "Todos los cambios importantes en la normativa de tráfico que debes conocer este año.",
      category: "news",
      author: "Equipo Autoescola Fran",
      date: "5 de Enero, 2024",
      image: "/placeholder.svg?height=200&width=400"
    },
    {
      id: 4,
      title: "Cómo superar los nervios del examen práctico",
      excerpt: "Técnicas y consejos para mantener la calma durante el examen práctico de conducir.",
      category: "tips",
      author: "Psicóloga Maria López",
      date: "28 de Diciembre, 2023",
      image: "/placeholder.svg?height=200&width=400"
    },
    {
      id: 5,
      title: "Mantenimiento básico del vehículo",
      excerpt: "Todo lo que necesitas saber sobre el mantenimiento preventivo de tu coche.",
      category: "practical",
      author: "Mecánico Joan Martí",
      date: "20 de Diciembre, 2023",
      image: "/placeholder.svg?height=200&width=400"
    },
    {
      id: 6,
      title: "Conducción segura en condiciones adversas",
      excerpt: "Consejos para conducir con seguridad cuando llueve, hay niebla o condiciones meteorológicas difíciles.",
      category: "tips",
      author: "Instructor Carles",
      date: "15 de Diciembre, 2023",
      image: "/placeholder.svg?height=200&width=400"
    }
  ],
  en: [
    {
      id: 1,
      title: "Tips to pass the theory test on the first try",
      excerpt: "Discover the best strategies to study and pass the driving theory exam without complications.",
      category: "tips",
      author: "Autoescola Fran Team",
      date: "January 15, 2024",
      image: "/placeholder.svg?height=200&width=400"
    },
    {
      id: 2,
      title: "Practice routes around Salou and surroundings",
      excerpt: "The best routes to practice driving in Salou, Cambrils and the Costa Dorada area.",
      category: "practical",
      author: "Instructor Fran",
      date: "January 10, 2024",
      image: "/placeholder.svg?height=200&width=400"
    },
    {
      id: 3,
      title: "New traffic code regulations 2024",
      excerpt: "All the important changes in traffic regulations you need to know this year.",
      category: "news",
      author: "Autoescola Fran Team",
      date: "January 5, 2024",
      image: "/placeholder.svg?height=200&width=400"
    },
    {
      id: 4,
      title: "How to overcome practical exam nerves",
      excerpt: "Techniques and tips to stay calm during the practical driving exam.",
      category: "tips",
      author: "Psychologist Maria López",
      date: "December 28, 2023",
      image: "/placeholder.svg?height=200&width=400"
    },
    {
      id: 5,
      title: "Basic vehicle maintenance",
      excerpt: "Everything you need to know about preventive maintenance of your car.",
      category: "practical",
      author: "Mechanic Joan Martí",
      date: "December 20, 2023",
      image: "/placeholder.svg?height=200&width=400"
    },
    {
      id: 6,
      title: "Safe driving in adverse conditions",
      excerpt: "Tips for safe driving when it rains, there's fog or difficult weather conditions.",
      category: "tips",
      author: "Instructor Carles",
      date: "December 15, 2023",
      image: "/placeholder.svg?height=200&width=400"
    }
  ]
}

export default function BlogPage() {
  const { language } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  
  const t = translations[language]
  const posts = blogPosts[language]
  
  const filteredPosts = selectedCategory 
    ? posts.filter(post => post.category === selectedCategory)
    : posts

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'tips': return 'bg-red-100 text-red-800'
      case 'theory': return 'bg-blue-100 text-blue-800'
      case 'practical': return 'bg-green-100 text-green-800'
      case 'news': return 'bg-yellow-100 text-yellow-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            {t.title}
          </h1>
          <p className="text-xl text-black/80 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === null 
                  ? 'bg-red-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Tots
            </button>
            {Object.entries(t.categories).map(([key, value]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === key 
                    ? 'bg-red-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge className={getCategoryColor(post.category)}>
                        {t.categories[post.category as keyof typeof t.categories]}
                      </Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-red-600 mb-3 hover:text-red-700 transition-colors">
                      <Link href={`/blog/${post.id}`}>
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="w-4 h-4 mr-1" />
                        {t.by} {post.author}
                      </div>
                      
                      <Link 
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center text-red-600 hover:text-red-700 font-medium transition-colors"
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
