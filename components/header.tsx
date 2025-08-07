'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '@/hooks/use-language'

const navigation = {
  ca: {
    home: 'Inici',
    about: 'Sobre Nosaltres', 
    licenses: 'Permisos',
    contact: 'Contacte',
    blog: 'Blog',
    cta: "MATRICULA'T ARA"
  },
  es: {
    home: 'Inicio',
    about: 'Sobre Nosotros',
    licenses: 'Permisos', 
    contact: 'Contacto',
    blog: 'Blog',
    cta: 'MATRICÚLATE AHORA'
  },
  en: {
    home: 'Home',
    about: 'About Us',
    licenses: 'Licenses',
    contact: 'Contact', 
    blog: 'Blog',
    cta: 'ENROLL NOW'
  }
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const nav = navigation[language]

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Autoescola Fran en Salou"
              width={160}
              height={80}
              className="h-32 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              {nav.home}
            </Link>
            <Link href="/sobre-nosaltres" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              {nav.about}
            </Link>
            <Link href="/permisos" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              {nav.licenses}
            </Link>
            <Link href="/contacte" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              {nav.contact}
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              {nav.blog}
            </Link>
          </nav>

          {/* Language Selector & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setLanguage('ca')}
                className={`rounded `}
              >
                <Image
                  src="/catalonia-flag.svg"
                  alt="Bandera de Catalunya"
                  width={20}
                  height={14}
                />
              </button>
              <button
                onClick={() => setLanguage('es')}
                className={`w-8 h-6 rounded ${language === 'es' ? 'ring-2 ring-red-600' : ''}`}
              >
                🇪🇸
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`w-8 h-6 rounded ${language === 'en' ? 'ring-2 ring-red-600' : ''}`}
              >
                🇬🇧
              </button>
            </div>
            <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6">
              {nav.cta}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-red-600 font-medium">
                {nav.home}
              </Link>
              <Link href="/sobre-nosaltres" className="text-gray-700 hover:text-red-600 font-medium">
                {nav.about}
              </Link>
              <Link href="/permisos" className="text-gray-700 hover:text-red-600 font-medium">
                {nav.licenses}
              </Link>
              <Link href="/contacte" className="text-gray-700 hover:text-red-600 font-medium">
                {nav.contact}
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-red-600 font-medium">
                {nav.blog}
              </Link>
              <div className="flex items-center space-x-2 pt-4">
                <button
                  onClick={() => setLanguage('ca')}
                  className={`w-8 h-6 rounded overflow-hidden ${language === 'ca' ? 'ring-2 ring-red-600' : ''}`}
                >
                  <Image
                    src="/catalonia-flag.svg"
                    alt="Bandera de Catalunya"
                    width={32}
                    height={24}
                    className="w-full h-full object-cover"
                  />
                </button>
                <button
                  onClick={() => setLanguage('es')}
                  className={`w-8 h-6 rounded ${language === 'es' ? 'ring-2 ring-red-600' : ''}`}
                >
                  🇪🇸
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`w-8 h-6 rounded ${language === 'en' ? 'ring-2 ring-red-600' : ''}`}
                >
                  🇬🇧
                </button>
              </div>
              <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold w-full mt-4">
                {nav.cta}
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
