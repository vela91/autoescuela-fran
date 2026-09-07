'use client'

import { MapPin } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/hooks/use-language'
import { useCookieConsent } from '@/hooks/use-cookie-consent'
import { LEGAL_ROUTES } from '@/lib/legal-content'

const MAP_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.8!2d1.1310763!3d41.0784008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a15baea7a6e4c5%3A0xee1cd0fb3d0d334f!2sAUTOESCOLA%20FRAN.%20En%20Salou.!5e0!3m2!1ses!2ses!4v1640995200000'

const MAP_LINK =
  'https://www.google.com/maps/place/AUTOESCOLA+FRAN.+En+Salou./@41.0784008,1.1285014,17z'

const translations = {
  ca: {
    blocked: 'El mapa de Google Maps està bloquejat',
    explain:
      'Aquest mapa el carrega Google i instal·la cookies de tercers al teu navegador. Accepta-les per veure’l aquí mateix.',
    accept: 'Acceptar cookies i veure el mapa',
    external: 'Obrir la ubicació a Google Maps',
    policy: 'Política de cookies',
  },
  es: {
    blocked: 'El mapa de Google Maps está bloqueado',
    explain:
      'Este mapa lo carga Google e instala cookies de terceros en tu navegador. Acéptalas para verlo aquí mismo.',
    accept: 'Aceptar cookies y ver el mapa',
    external: 'Abrir la ubicación en Google Maps',
    policy: 'Política de cookies',
  },
  en: {
    blocked: 'The Google Maps map is blocked',
    explain:
      'This map is loaded by Google and sets third-party cookies in your browser. Accept them to see it right here.',
    accept: 'Accept cookies and show the map',
    external: 'Open the location in Google Maps',
    policy: 'Cookie policy',
  },
}

interface GoogleMapEmbedProps {
  /** Alto del mapa en píxeles. Se ignora si `fill` es true. */
  height?: number
  /** Ocupa todo el alto del contenedor padre (p. ej. un `aspect-video`). */
  fill?: boolean
  /** Título accesible del iframe. */
  title?: string
}

export default function GoogleMapEmbed({
  height = 450,
  fill = false,
  title = 'Autoescola Fran - Calle Barcelona 35, local 3, Salou',
}: GoogleMapEmbedProps) {
  const { language } = useLanguage()
  const { consent, accept } = useCookieConsent()
  const t = translations[language]

  if (consent === 'accepted') {
    return (
      <iframe
        src={MAP_SRC}
        width="100%"
        height={fill ? '100%' : height}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={title}
      />
    )
  }

  return (
    <div
      className={`flex flex-col items-center justify-center gap-4 bg-gray-900 px-6 py-10 text-center ${
        fill ? 'h-full' : ''
      }`}
      style={fill ? undefined : { minHeight: height }}
    >
      <MapPin className="w-10 h-10 text-yellow-400" aria-hidden="true" />
      <div>
        <p className="text-white font-semibold mb-2">{t.blocked}</p>
        <p className="text-gray-400 text-sm max-w-md mx-auto">{t.explain}</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          type="button"
          onClick={accept}
          className="bg-yellow-400 hover:bg-yellow-500 text-black px-5 py-2.5 rounded font-bold transition-colors"
        >
          {t.accept}
        </button>
        <a
          href={MAP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white px-5 py-2.5 rounded font-bold transition-colors"
        >
          {t.external}
        </a>
      </div>
      <Link
        href={LEGAL_ROUTES.cookies}
        className="text-xs text-gray-500 underline hover:text-yellow-400 transition-colors"
      >
        {t.policy}
      </Link>
    </div>
  )
}
