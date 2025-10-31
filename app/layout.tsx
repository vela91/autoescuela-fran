import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { LanguageProvider } from '@/hooks/use-language'
import {
  SITE_DEFAULT_OG_IMAGE,
  SITE_DEFAULT_OG_IMAGE_PATH,
  SITE_DESCRIPTION,
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
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${SITE_NAME} - Salou`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: SITE_LOCALE,
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
      availableLanguage: ['ca', 'es', 'en'],
    },
    {
      '@type': 'ContactPoint',
      telephone: '+34 610 777 027',
      contactType: 'customer service',
      contactOption: 'TollFree',
      areaServed: 'ES',
      availableLanguage: ['ca', 'es', 'en'],
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
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
      </head>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
