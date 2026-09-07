'use client'

import LegalDocument from '@/components/legal-document'
import { useLanguage } from '@/hooks/use-language'
import { cookiePolicy } from '@/lib/legal-content'

export default function PoliticaCookiesPage() {
  const { language } = useLanguage()

  return <LegalDocument doc={cookiePolicy[language]} />
}
