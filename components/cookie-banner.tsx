'use client'

import Link from 'next/link'
import { Cookie } from 'lucide-react'
import { useLanguage } from '@/hooks/use-language'
import { useCookieConsent } from '@/hooks/use-cookie-consent'
import { cookieBanner, LEGAL_ROUTES } from '@/lib/legal-content'

export default function CookieBanner() {
  const { language } = useLanguage()
  const { consent, isLoaded, accept, reject } = useCookieConsent()
  const t = cookieBanner[language]

  // No mostramos nada hasta leer localStorage, ni si ya hay una decisión tomada.
  if (!isLoaded || consent !== 'unset') return null

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label={t.title}
      className="fixed bottom-0 left-0 right-0 z-[100] border-t-2 border-yellow-400/40 bg-gray-900/98 backdrop-blur-sm shadow-[0_-4px_20px_rgba(0,0,0,0.6)]"
    >
      <div className="container mx-auto px-4 py-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-8">
          <div className="flex-1">
            <h2 className="flex items-center gap-2 text-lg font-bold text-yellow-400 mb-2">
              <Cookie className="w-5 h-5" />
              {t.title}
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed">{t.text}</p>
            <p className="text-sm text-gray-400 mt-2">
              {t.moreInfo}{' '}
              <Link
                href={LEGAL_ROUTES.cookies}
                className="text-yellow-400 underline hover:text-yellow-300 transition-colors"
              >
                {t.policyLink}
              </Link>
              .
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 lg:flex-col xl:flex-row shrink-0">
            <button
              type="button"
              onClick={accept}
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded font-bold transition-all duration-300 shadow-[0_0_15px_rgba(250,204,21,0.4)] hover:shadow-[0_0_25px_rgba(250,204,21,0.7)]"
            >
              {t.accept}
            </button>
            <button
              type="button"
              onClick={reject}
              className="border-2 border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white px-6 py-3 rounded font-bold transition-colors"
            >
              {t.reject}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
