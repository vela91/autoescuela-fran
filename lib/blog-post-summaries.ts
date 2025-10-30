import type { BlogCategory, Language } from './blog-types'

export interface BlogPostSummaryTranslation {
  title: string
  excerpt: string
  date: string
  readingTime: string
}

export interface BlogPostSummary {
  slug: string
  category: BlogCategory
  author: string
  image: string
  publishedAt: string
  updatedAt?: string
  keywords: string[]
  translations: Record<Language, BlogPostSummaryTranslation>
}

export interface BlogPostListItem {
  slug: string
  category: BlogCategory
  author: string
  image: string
  title: string
  excerpt: string
  date: string
  readingTime: string
  publishedAt: string
  updatedAt: string
  keywords: string[]
}

export const blogPostSummaries: BlogPostSummary[] = [
  {
    slug: 'consejos-aprobar-teorico',
    category: 'tips',
    author: 'Equipo Autoescola Fran',
    image: '/blog/consejos-aprobar-teorico.svg',
    publishedAt: '2024-01-15',
    updatedAt: '2024-01-15',
    keywords: [
      'autoescuela salou',
      'aprobado examen teorico',
      'consejos carnet coche',
      'teoria permiso b',
    ],
    translations: {
      es: {
        title: 'Consejos para aprobar el teórico a la primera',
        excerpt:
          'Descubre las mejores estrategias para estudiar y aprobar el examen teórico de conducir sin complicaciones.',
        date: '15 de Enero, 2024',
        readingTime: '7 minutos de lectura',
      },
      ca: {
        title: "Consells per aprovar el teòric a la primera",
        excerpt:
          "Descobreix les millors estratègies per estudiar i aprovar l'examen teòric de conduir sense complicacions.",
        date: '15 de Gener, 2024',
        readingTime: '7 minuts de lectura',
      },
      en: {
        title: 'Tips to pass the theory test on the first try',
        excerpt:
          'Discover the best strategies to study and pass the driving theory exam without complications.',
        date: 'January 15, 2024',
        readingTime: '7 minute read',
      },
    },
  },
  {
    slug: 'rutas-practicas-salou',
    category: 'practical',
    author: 'Instructor Fran',
    image: '/blog/rutas-practicas-salou.svg',
    publishedAt: '2024-01-10',
    updatedAt: '2024-01-10',
    keywords: [
      'practicas salou',
      'rutas examen practico',
      'conducir costa dorada',
      'autoescuela fran practicas',
    ],
    translations: {
      es: {
        title: 'Rutas prácticas por Salou y alrededores',
        excerpt:
          'Las mejores rutas para practicar la conducción en Salou, Cambrils y la zona de la Costa Dorada.',
        date: '10 de Enero, 2024',
        readingTime: '6 minutos de lectura',
      },
      ca: {
        title: 'Rutes pràctiques per Salou i voltants',
        excerpt:
          'Les millors rutes per practicar la conducció a Salou, Cambrils i la zona de la Costa Daurada.',
        date: '10 de Gener, 2024',
        readingTime: '6 minuts de lectura',
      },
      en: {
        title: 'Practice routes around Salou and the Costa Daurada',
        excerpt:
          'The best routes to practice driving in Salou, Cambrils and the Costa Daurada area.',
        date: 'January 10, 2024',
        readingTime: '6 minute read',
      },
    },
  },
  {
    slug: 'novedades-codigo-2024',
    category: 'news',
    author: 'Equipo Autoescola Fran',
    image: '/blog/novedades-codigo-2024.svg',
    publishedAt: '2024-01-05',
    updatedAt: '2024-01-05',
    keywords: [
      'cambios codigo circulacion',
      'novedades dgt 2024',
      'normativa trafico 2024',
      'seguridad vial salou',
    ],
    translations: {
      es: {
        title: 'Novedades en el código de circulación 2024',
        excerpt:
          'Todos los cambios importantes en la normativa de tráfico que debes conocer este año.',
        date: '5 de Enero, 2024',
        readingTime: '8 minutos de lectura',
      },
      ca: {
        title: 'Novetats en el codi de circulació 2024',
        excerpt:
          'Tots els canvis importants en la normativa de trànsit que has de conèixer aquest any.',
        date: '5 de Gener, 2024',
        readingTime: '8 minuts de lectura',
      },
      en: {
        title: 'New traffic code regulations in 2024',
        excerpt:
          'All the important changes in traffic regulations you need to know this year.',
        date: 'January 5, 2024',
        readingTime: '8 minute read',
      },
    },
  },
  {
    slug: 'superar-nervios-examen',
    category: 'tips',
    author: 'Psicóloga Maria López',
    image: '/blog/superar-nervios-examen.svg',
    publishedAt: '2023-12-28',
    updatedAt: '2023-12-28',
    keywords: [
      'nervios examen practico',
      'control ansiedad conducir',
      'consejos examen autoescuela',
      'gestion emocional autoescuela',
    ],
    translations: {
      es: {
        title: 'Cómo superar los nervios del examen práctico',
        excerpt:
          'Técnicas y consejos para mantener la calma durante el examen práctico de conducir.',
        date: '28 de Diciembre, 2023',
        readingTime: '6 minutos de lectura',
      },
      ca: {
        title: "Com superar els nervis de l'examen pràctic",
        excerpt:
          "Tècniques i consells per mantenir la calma durant l'examen pràctic de conduir.",
        date: '28 de Desembre, 2023',
        readingTime: '6 minuts de lectura',
      },
      en: {
        title: 'How to overcome practical exam nerves',
        excerpt:
          'Techniques and tips to stay calm during the practical driving exam.',
        date: 'December 28, 2023',
        readingTime: '6 minute read',
      },
    },
  },
  {
    slug: 'mantenimiento-basico-vehiculo',
    category: 'practical',
    author: 'Mecánico Joan Martí',
    image: '/blog/mantenimiento-basico-vehiculo.svg',
    publishedAt: '2023-12-20',
    updatedAt: '2023-12-20',
    keywords: [
      'mantenimiento coche basico',
      'autoescuela consejos coche',
      'revisiones preventivas vehiculo',
      'seguridad mantenimiento auto',
    ],
    translations: {
      es: {
        title: 'Mantenimiento básico del vehículo',
        excerpt:
          'Todo lo que necesitas saber sobre el mantenimiento preventivo de tu coche.',
        date: '20 de Diciembre, 2023',
        readingTime: '7 minutos de lectura',
      },
      ca: {
        title: 'Manteniment bàsic del vehicle',
        excerpt:
          'Tot el que necessites saber sobre el manteniment preventiu del teu cotxe.',
        date: '20 de Desembre, 2023',
        readingTime: '7 minuts de lectura',
      },
      en: {
        title: 'Basic vehicle maintenance',
        excerpt:
          'Everything you need to know about preventive maintenance for your car.',
        date: 'December 20, 2023',
        readingTime: '7 minute read',
      },
    },
  },
  {
    slug: 'conduccion-condiciones-adversas',
    category: 'tips',
    author: 'Instructor Carles',
    image: '/blog/conduccion-condiciones-adversas.svg',
    publishedAt: '2023-12-15',
    updatedAt: '2023-12-15',
    keywords: [
      'conducir lluvia niebla',
      'seguridad vial condiciones adversas',
      'consejos conducir nieve',
      'prevencion accidentes clima',
    ],
    translations: {
      es: {
        title: 'Conducción segura en condiciones adversas',
        excerpt:
          'Consejos para conducir con seguridad cuando llueve, hay niebla o condiciones meteorológicas difíciles.',
        date: '15 de Diciembre, 2023',
        readingTime: '7 minutos de lectura',
      },
      ca: {
        title: 'Conducció segura en condicions adverses',
        excerpt:
          'Consells per conduir amb seguretat quan plou, hi ha boira o condicions meteorològiques difícils.',
        date: '15 de Desembre, 2023',
        readingTime: '7 minuts de lectura',
      },
      en: {
        title: 'Safe driving in adverse weather conditions',
        excerpt:
          'Tips for safe driving when it rains, there is fog or the weather turns difficult.',
        date: 'December 15, 2023',
        readingTime: '7 minute read',
      },
    },
  },
]

export function getBlogPostSummaries(language: Language): BlogPostListItem[] {
  return blogPostSummaries.map((post) => {
    const translation = post.translations[language] ?? post.translations.en
    return {
      slug: post.slug,
      category: post.category,
      author: post.author,
      image: post.image,
      title: translation.title,
      excerpt: translation.excerpt,
      date: translation.date,
      readingTime: translation.readingTime,
      publishedAt: post.publishedAt,
      updatedAt: post.updatedAt ?? post.publishedAt,
      keywords: post.keywords,
    }
  })
}

export function getBlogPostSummary(slug: string) {
  return blogPostSummaries.find((post) => post.slug === slug)
}
