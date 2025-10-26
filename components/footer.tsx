'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Instagram, MessageCircle } from 'lucide-react'
import { useLanguage } from '@/hooks/use-language'

const footerTranslations = {
  ca: {
    quickLinks: 'Enllaços Ràpids',
    contact: 'Contacte',
    address: 'Calle Barcelona 35, local 3, 43840 Salou, Tarragona',
    schedule: 'Horari: 10:00-14:00 i 16:00-20:00',
    examNotes: 'Consulta Notes D\'Examen',
    followUs: 'Segueix-nos',
    intensiveCourse: 'Curs Intensiu'
  },
  es: {
    quickLinks: 'Enlaces Rápidos',
    contact: 'Contacto',
    address: 'Calle Barcelona 35, local 3, 43840 Salou, Tarragona',
    schedule: 'Horario: 10:00-14:00 y 16:00-20:00',
    examNotes: 'Consulta Notas de Examen',
    followUs: 'Síguenos',
    intensiveCourse: 'Curso Intensivo'
  },
  en: {
    quickLinks: 'Quick Links',
    contact: 'Contact',
    address: 'Calle Barcelona 35, local 3, 43840 Salou, Tarragona',
    schedule: 'Schedule: 10:00-14:00 and 16:00-20:00',
    examNotes: 'Check Exam Results',
    followUs: 'Follow Us',
    intensiveCourse: 'Intensive Course'
  }
}

export default function Footer() {
  const { language } = useLanguage()
  const t = footerTranslations[language]

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Info */}
          <div className="col-span-1">
            <Image
              src="/logo.png"
              alt="Autoescola Fran en Salou"
              width={180}
              height={90}
              className="h-16 w-auto mb-4 brightness-110"
            />
            <p className="text-gray-300 text-sm">
              La teva autoescola de confiança a Salou
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.quickLinks}</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-yellow-400 transition-colors">Inici</Link></li>
              <li><Link href="/sobre-nosaltres" className="text-gray-300 hover:text-yellow-400 transition-colors">Sobre Nosaltres</Link></li>
              <li><Link href="/permisos" className="text-gray-300 hover:text-yellow-400 transition-colors">Permisos</Link></li>
              <li><Link href="/curso-intensivo" className="text-gray-300 hover:text-yellow-400 transition-colors">{t.intensiveCourse}</Link></li>
              <li><Link href="/contacte" className="text-gray-300 hover:text-yellow-400 transition-colors">Contacte</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-yellow-400 transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.contact}</h3>
            <div className="space-y-2 text-gray-300 text-sm">
              <p>{t.address}</p>
              <p>{t.schedule}</p>
              <p>
                <a href="mailto:autoescolafransalou@gmail.com" className="hover:text-yellow-400 transition-colors">
                  autoescolafransalou@gmail.com
                </a>
              </p>
              <div className="space-y-2">
                <p>Teléfono: 977 017 165</p>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4" />
                  <a href="https://wa.me/34610777027" className="hover:text-yellow-400 transition-colors">
                    WhatsApp: 610 777 027
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Social & Exam Link */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.followUs}</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
            <a
              href="https://share.google/FiSu0qypsKD8coE2w"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded font-bold transition-all duration-300 shadow-[0_0_15px_rgba(250,204,21,0.5)] hover:shadow-[0_0_25px_rgba(250,204,21,0.8)] hover:scale-105"
            >
              {t.examNotes}
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Autoescola Fran en Salou. Tots els drets reservats.</p>
        </div>
      </div>
    </footer>
  )
}
