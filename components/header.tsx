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
    intensiveCourse: 'Curs Intensiu',
    contact: 'Contacte',
    blog: 'Blog',
    cta: "MATRICULA'T ARA"
  },
  es: {
    home: 'Inicio',
    about: 'Sobre Nosotros',
    licenses: 'Permisos',
    intensiveCourse: 'Curso Intensivo',
    contact: 'Contacto',
    blog: 'Blog',
    cta: 'MATRICÚLATE AHORA'
  },
  en: {
    home: 'Home',
    about: 'About Us',
    licenses: 'Licenses',
    intensiveCourse: 'Intensive Course',
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
    <header className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 shadow-[0_4px_20px_rgba(0,0,0,0.5)] sticky top-0 z-50 border-b-2 border-yellow-400/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-32">
          {/* Logo with glow effect */}
          <Link href="/" className="flex items-center group">
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-400/20 blur-2xl rounded-full group-hover:bg-yellow-400/40 transition-all duration-300"></div>
              <Image
                src="/images/logo.png"
                alt="Autoescola Fran en Salou"
                width={320}
                height={160}
                priority
                sizes="(max-width: 768px) 200px, 320px"
                className="h-32 w-auto brightness-110 relative z-10 drop-shadow-[0_0_20px_rgba(250,204,21,0.4)] group-hover:drop-shadow-[0_0_30px_rgba(250,204,21,0.7)] transition-all duration-300"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="relative text-gray-300 hover:text-yellow-400 font-semibold transition-all duration-300 group px-2 py-1">
              <span className="relative z-10">{nav.home}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/sobre-nosaltres" className="relative text-gray-300 hover:text-yellow-400 font-semibold transition-all duration-300 group px-2 py-1">
              <span className="relative z-10">{nav.about}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/permisos" className="relative text-gray-300 hover:text-yellow-400 font-semibold transition-all duration-300 group px-2 py-1">
              <span className="relative z-10">{nav.licenses}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/curso-intensivo" className="relative text-gray-300 hover:text-yellow-400 font-semibold transition-all duration-300 group px-2 py-1">
              <span className="relative z-10">{nav.intensiveCourse}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/contacte" className="relative text-gray-300 hover:text-yellow-400 font-semibold transition-all duration-300 group px-2 py-1">
              <span className="relative z-10">{nav.contact}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/blog" className="relative text-gray-300 hover:text-yellow-400 font-semibold transition-all duration-300 group px-2 py-1">
              <span className="relative z-10">{nav.blog}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          {/* Language Selector & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-gray-800/50 rounded-full px-3 py-2 border border-gray-700">
              <button
                onClick={() => setLanguage('ca')}
                className={`rounded-full transition-all duration-300 ${language === 'ca' ? 'ring-2 ring-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.5)]' : 'opacity-60 hover:opacity-100 hover:scale-110'}`}
              >
                <Image
                  src="/catalonia-flag.svg"
                  alt="Bandera de Catalunya"
                  width={24}
                  height={18}
                  className="rounded-sm"
                />
              </button>
              <button
                onClick={() => setLanguage('es')}
                className={`w-8 h-6 rounded-full transition-all duration-300 ${language === 'es' ? 'ring-2 ring-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.5)]' : 'opacity-60 hover:opacity-100 hover:scale-110'}`}
              >
                🇪🇸
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`w-8 h-6 rounded-full transition-all duration-300 ${language === 'en' ? 'ring-2 ring-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.5)]' : 'opacity-60 hover:opacity-100 hover:scale-110'}`}
              >
                🇬🇧
              </button>
            </div>
            <Button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold px-8 py-2.5 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(250,204,21,0.6)] hover:shadow-[0_0_30px_rgba(250,204,21,1)] hover:scale-105 border-2 border-yellow-300">
              {nav.cta}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-300 hover:text-yellow-400 font-medium transition-colors">
                {nav.home}
              </Link>
              <Link href="/sobre-nosaltres" className="text-gray-300 hover:text-yellow-400 font-medium transition-colors">
                {nav.about}
              </Link>
              <Link href="/permisos" className="text-gray-300 hover:text-yellow-400 font-medium transition-colors">
                {nav.licenses}
              </Link>
              <Link href="/curso-intensivo" className="text-gray-300 hover:text-yellow-400 font-medium transition-colors">
                {nav.intensiveCourse}
              </Link>
              <Link href="/contacte" className="text-gray-300 hover:text-yellow-400 font-medium transition-colors">
                {nav.contact}
              </Link>
              <Link href="/blog" className="text-gray-300 hover:text-yellow-400 font-medium transition-colors">
                {nav.blog}
              </Link>
              <div className="flex items-center space-x-2 pt-4">
                <button
                  onClick={() => setLanguage('ca')}
                  className={`w-8 h-6 rounded overflow-hidden transition-all ${language === 'ca' ? 'ring-2 ring-yellow-400' : 'opacity-70'}`}
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
                  className={`w-8 h-6 rounded transition-all ${language === 'es' ? 'ring-2 ring-yellow-400' : 'opacity-70'}`}
                >
                  🇪🇸
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`w-8 h-6 rounded transition-all ${language === 'en' ? 'ring-2 ring-yellow-400' : 'opacity-70'}`}
                >
                  🇬🇧
                </button>
              </div>
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold w-full mt-4 shadow-[0_0_15px_rgba(250,204,21,0.5)] hover:shadow-[0_0_25px_rgba(250,204,21,0.8)] transition-all duration-300">
                {nav.cta}
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
