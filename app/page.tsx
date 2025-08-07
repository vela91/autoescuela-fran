'use client'

import { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Car, Clock, Users, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const translations = {
  ca: {
    heroTitle: "El teu futur comença a Autoescola Fran.",
    heroButton: "VEURE PERMISOS",
    quickAccessButton: "CONSULTA LES TEVES NOTES D'EXAMEN",
    valueProps: {
      modern: "Vehicles Moderns",
      flexible: "Horaris Flexibles", 
      expert: "Instructors Experts"
    },
    featuredLicenses: "Permisos Destacats",
    testimonials: "Testimonis",
    finalCta: "A punt per començar a conduir?",
    finalCtaButton: "CONTACTA'NS"
  },
  es: {
    heroTitle: "Tu futuro empieza en Autoescola Fran.",
    heroButton: "VER PERMISOS",
    quickAccessButton: "CONSULTA TUS NOTAS DE EXAMEN",
    valueProps: {
      modern: "Vehículos Modernos",
      flexible: "Horarios Flexibles",
      expert: "Instructores Expertos"
    },
    featuredLicenses: "Permisos Destacados",
    testimonials: "Testimonios",
    finalCta: "¿Listo para empezar a conducir?",
    finalCtaButton: "CONTÁCTANOS"
  },
  en: {
    heroTitle: "Your future starts at Autoescola Fran.",
    heroButton: "VIEW LICENSES",
    quickAccessButton: "CHECK YOUR EXAM RESULTS",
    valueProps: {
      modern: "Modern Vehicles",
      flexible: "Flexible Schedules",
      expert: "Expert Instructors"
    },
    featuredLicenses: "Featured Licenses",
    testimonials: "Testimonials",
    finalCta: "Ready to start driving?",
    finalCtaButton: "CONTACT US"
  }
}

const testimonials = {
  ca: [
    {
      name: "Maria García",
      text: "Vaig aprovar a la primera gràcies als excel·lents instructors d'Autoescola Fran. Molt recomanable!",
      rating: 5
    },
    {
      name: "Jordi Martínez", 
      text: "Horaris flexibles i vehicles moderns. Una experiència fantàstica per aprendre a conduir.",
      rating: 5
    },
    {
      name: "Anna López",
      text: "El millor tracte i professionalitat. Em van ajudar molt amb els nervis de l'examen.",
      rating: 5
    }
  ],
  es: [
    {
      name: "Maria García",
      text: "Aprobé a la primera gracias a los excelentes instructores de Autoescola Fran. ¡Muy recomendable!",
      rating: 5
    },
    {
      name: "Jordi Martínez",
      text: "Horarios flexibles y vehículos modernos. Una experiencia fantástica para aprender a conducir.",
      rating: 5
    },
    {
      name: "Anna López", 
      text: "El mejor trato y profesionalidad. Me ayudaron mucho con los nervios del examen.",
      rating: 5
    }
  ],
  en: [
    {
      name: "Maria García",
      text: "I passed on the first try thanks to the excellent instructors at Autoescola Fran. Highly recommended!",
      rating: 5
    },
    {
      name: "Jordi Martínez",
      text: "Flexible schedules and modern vehicles. A fantastic experience to learn how to drive.",
      rating: 5
    },
    {
      name: "Anna López",
      text: "The best treatment and professionalism. They helped me a lot with exam nerves.",
      rating: 5
    }
  ]
}

export default function HomePage() {
  const [language, setLanguage] = useState<'ca' | 'es' | 'en'>('ca')
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const t = translations[language]
  const currentTestimonials = testimonials[language]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % currentTestimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + currentTestimonials.length) % currentTestimonials.length)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header language={language} setLanguage={setLanguage} />
      
      {/* Hero Banner */}
      <section className="relative h-[600px] bg-gradient-to-r from-yellow-400 to-yellow-500 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <Image
          src="/placeholder-9kcry.png"
          alt="Hero image"
          fill
          className="object-cover mix-blend-overlay"
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black drop-shadow-lg">
            {t.heroTitle}
          </h1>
          <Link href="/permisos">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg">
              {t.heroButton}
            </Button>
          </Link>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <a 
            href="https://share.google/FiSu0qypsKD8coE2w" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 text-lg font-semibold rounded-lg shadow-lg">
              {t.quickAccessButton}
            </Button>
          </a>
        </div>
      </section>

      {/* Value Props Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{t.valueProps.modern}</h3>
              <p className="text-gray-600">Flota renovada amb els últims models i tecnologia de seguretat.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{t.valueProps.flexible}</h3>
              <p className="text-gray-600">Adaptem els horaris a les teves necessitats i disponibilitat.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{t.valueProps.expert}</h3>
              <p className="text-gray-600">Professionals amb anys d'experiència i mètodes d'ensenyament eficaços.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Licenses */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">{t.featuredLicenses}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Image
                  src="/car-license-b-permit.png"
                  alt="Permís B"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Permís B</h3>
                <p className="text-gray-600 mb-4">Carnet de cotxe. El més sol·licitat per a vehicles fins a 3.500kg.</p>
                <Button className="bg-red-600 hover:bg-red-700 text-white w-full">
                  Més Informació
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Image
                  src="/motorcycle-license-a2-permit.png"
                  alt="Permís A2"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Permís A2</h3>
                <p className="text-gray-600 mb-4">Carnet de moto. Per a motocicletes fins a 35kW de potència.</p>
                <Button className="bg-red-600 hover:bg-red-700 text-white w-full">
                  Més Informació
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Image
                  src="/am-moped-license-permit.png"
                  alt="Permís AM"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Permís AM</h3>
                <p className="text-gray-600 mb-4">Carnet de ciclomotor. Per a vehicles de fins a 50cc.</p>
                <Button className="bg-red-600 hover:bg-red-700 text-white w-full">
                  Més Informació
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">{t.testimonials}</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <Card className="p-8">
                <CardContent className="text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(currentTestimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-lg text-gray-600 mb-6 italic">
                    "{currentTestimonials[currentTestimonial].text}"
                  </p>
                  <p className="font-semibold text-gray-800">
                    - {currentTestimonials[currentTestimonial].name}
                  </p>
                </CardContent>
              </Card>
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2"
                onClick={prevTestimonial}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2"
                onClick={nextTestimonial}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">{t.finalCta}</h2>
          <Link href="/contacte">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg">
              {t.finalCtaButton}
            </Button>
          </Link>
        </div>
      </section>

      <Footer language={language} />
    </div>
  )
}
