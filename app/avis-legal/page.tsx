'use client'

import LegalDocument from '@/components/legal-document'
import { useLanguage } from '@/hooks/use-language'
import { privacyPolicy } from '@/lib/legal-content'

export default function AvisLegalPage() {
  const { language } = useLanguage()

  return <LegalDocument doc={privacyPolicy[language]} />
}
