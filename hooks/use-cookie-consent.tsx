'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

export type CookieConsent = 'accepted' | 'rejected' | 'unset'

const STORAGE_KEY = 'autoescola-cookie-consent'

interface CookieConsentContextType {
  /** 'unset' mientras no se ha decidido; también durante el primer render en cliente. */
  consent: CookieConsent
  /** false hasta que se ha leído localStorage, para no parpadear el banner. */
  isLoaded: boolean
  accept: () => void
  reject: () => void
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined)

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<CookieConsent>('unset')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved === 'accepted' || saved === 'rejected') {
        setConsent(saved)
      }
    } catch {
      // Navegación privada o almacenamiento bloqueado: se trata como 'unset'.
    }
    setIsLoaded(true)
  }, [])

  const persist = (value: Exclude<CookieConsent, 'unset'>) => {
    setConsent(value)
    try {
      localStorage.setItem(STORAGE_KEY, value)
    } catch {
      // Si no se puede guardar, la decisión vale solo para esta sesión.
    }
  }

  return (
    <CookieConsentContext.Provider
      value={{
        consent,
        isLoaded,
        accept: () => persist('accepted'),
        reject: () => persist('rejected'),
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  )
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext)
  if (context === undefined) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider')
  }
  return context
}
