import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { LanguageProvider } from '@/hooks/use-language'
import {
  SITE_ADDRESS,
  SITE_ALTERNATE_NAMES,
  SITE_CONTACT,
  SITE_DEFAULT_OG_IMAGE,
  SITE_DEFAULT_OG_IMAGE_PATH,
  SITE_DESCRIPTION,
  SITE_GEO,
  SITE_KEYWORDS,
  SITE_LOCALE,
  SITE_LOGO,
  SITE_LOGO_PATH,
  SITE_NAME,
  SITE_URL,
} from '@/lib/site-metadata'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} - Salou`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  alternates: {
    canonical: '/',
    languages: {
      'es-ES': '/',
      'ca-ES': '/?lang=ca',
      'en-GB': '/?lang=en',
    },
  },
  openGraph: {
    title: `${SITE_NAME} - Salou`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: SITE_LOCALE,
    alternateLocale: ['ca_ES', 'en_GB'],
    countryName: 'Spain',
    type: 'website',
    images: [
      {
        url: SITE_DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} en Salou`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} - Salou`,
    description: SITE_DESCRIPTION,
    images: [SITE_DEFAULT_OG_IMAGE],
    site: '@autoescolafran',
  },
  category: 'education',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: 'large',
      maxVideoPreview: -1,
    },
  },
  other: {
    'geo.region': 'ES-T',
    'geo.placename': 'Salou',
    'geo.position': `${SITE_GEO.latitude};${SITE_GEO.longitude}`,
    ICBM: `${SITE_GEO.latitude}, ${SITE_GEO.longitude}`,
    'og:locale:alternate': 'ca_ES,en_GB',
  },
  icons: {
    icon: SITE_LOGO_PATH,
    shortcut: SITE_LOGO_PATH,
    apple: SITE_LOGO_PATH,
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: SITE_LOGO,
  image: SITE_DEFAULT_OG_IMAGE,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Calle Barcelona 35, local 3',
    addressLocality: 'Salou',
    addressRegion: 'Tarragona',
    postalCode: '43840',
    addressCountry: 'ES',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+34 977 017 165',
      contactType: 'customer service',
      areaServed: 'ES',
      availableLanguage: ['es'],
    },
    {
      '@type': 'ContactPoint',
      telephone: '+34 610 777 027',
      contactType: 'customer service',
      contactOption: 'TollFree',
      areaServed: 'ES',
      availableLanguage: ['es'],
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'DrivingSchool',
    name: SITE_NAME,
    alternateName: SITE_ALTERNATE_NAMES,
    url: SITE_URL,
    image: `${SITE_URL}${SITE_DEFAULT_OG_IMAGE}`,
    description: SITE_DESCRIPTION,
    telephone: SITE_CONTACT.telephone,
    email: SITE_CONTACT.email,
    address: {
      '@type': 'PostalAddress',
      ...SITE_ADDRESS,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE_GEO.latitude,
      longitude: SITE_GEO.longitude,
    },
    areaServed: [
      { '@type': 'City', name: 'Salou' },
      { '@type': 'AdministrativeArea', name: 'Tarragona' },
      { '@type': 'TouristDestination', name: 'Costa Daurada' },
    ],
    availableLanguage: [
      { '@type': 'Language', name: 'Spanish', alternateName: 'es' },
    ],
    sameAs: [
      'https://autoescuelafran.com',
      'https://www.google.com/maps/place/AUTOESCOLA+FRAN.+En+Salou./@41.0784008,1.1285014,17z/data=!3m1!4b1!4m6!3m5!1s0x12a15baea7a6e4c5:0xee1cd0fb3d0d334f!8m2!3d41.0784008!4d1.1310763!16s%2Fg%2F11xtmpmbx8',
    ],
    makesOffer: [
      {
        '@type': 'Offer',
        name: 'Permiso B en Salou',
        itemOffered: {
          '@type': 'Service',
          name: 'Curso intensivo y clases prácticas para el permiso B en Salou',
          availableLanguage: ['es'],
        },
        areaServed: 'Salou',
      },
    ],
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: SITE_GEO.latitude,
        longitude: SITE_GEO.longitude,
      },
      geoRadius: 15000,
    },
    potentialAction: {
      '@type': 'ContactAction',
      target: `${SITE_URL}/contacte`,
      name: 'Contactar con Autoescola Fran en Salou',
    },
  } as const
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <meta itemProp="image" content={SITE_DEFAULT_OG_IMAGE} />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
        <meta name="format-detection" content="telephone=yes,address=yes,email=yes" />
        <meta name="language" content="es-ES,ca-ES,en-GB" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </head>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
