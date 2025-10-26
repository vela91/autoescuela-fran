'use client'

import { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { useLanguage } from '@/hooks/use-language'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'

const translations = {
  ca: {
    title: "Permís B - Carnet de Cotxe",
    subtitle: "Aprèn a conduir amb els millors professionals de Salou",
    moreInfo: "Contacta'ns",
    age: "Edat mínima:",
    duration: "Durada:",
    theory: "Teòric",
    practical: "Pràctic",
    whatIncludes: "Què inclou el curs?",
    theoreticalClasses: "Classes teòriques",
    practicalClasses: "Classes pràctiques",
    examPreparation: "Preparació per als exàmens",
    modernVehicles: "Vehicles moderns i segurs",
    flexibleSchedules: "Horaris flexibles",
    experiencedInstructors: "Instructors amb experiència"
  },
  es: {
    title: "Permiso B - Carnet de Coche",
    subtitle: "Aprende a conducir con los mejores profesionales de Salou",
    moreInfo: "Contáctanos",
    age: "Edad mínima:",
    duration: "Duración:",
    theory: "Teórico",
    practical: "Práctico",
    whatIncludes: "¿Qué incluye el curso?",
    theoreticalClasses: "Clases teóricas",
    practicalClasses: "Clases prácticas",
    examPreparation: "Preparación para los exámenes",
    modernVehicles: "Vehículos modernos y seguros",
    flexibleSchedules: "Horarios flexibles",
    experiencedInstructors: "Instructores con experiencia"
  },
  en: {
    title: "B License - Car Driving License",
    subtitle: "Learn to drive with the best professionals in Salou",
    moreInfo: "Contact Us",
    age: "Minimum age:",
    duration: "Duration:",
    theory: "Theory",
    practical: "Practical",
    whatIncludes: "What does the course include?",
    theoreticalClasses: "Theoretical classes",
    practicalClasses: "Practical classes",
    examPreparation: "Exam preparation",
    modernVehicles: "Modern and safe vehicles",
    flexibleSchedules: "Flexible schedules",
    experiencedInstructors: "Experienced instructors"
  }
}

const licenseInfo = {
  ca: {
    name: 'Permís B',
    description: 'Automòbils fins a 3.500kg i fins a 9 places',
    age: '18 anys',
    duration: '3-6 mesos',
    image: '/car-license-b.png',
    details: 'El permís B és el carnet de conduir més sol·licitat i permet conduir turismes, furgonetes i vehicles de fins a 3.500kg de massa màxima autoritzada i fins a 9 places (inclòs el conductor).'
  },
  es: {
    name: 'Permiso B',
    description: 'Automóviles hasta 3.500kg y hasta 9 plazas',
    age: '18 años',
    duration: '3-6 meses',
    image: '/car-license-b.png',
    details: 'El permiso B es el carnet de conducir más solicitado y permite conducir turismos, furgonetas y vehículos de hasta 3.500kg de masa máxima autorizada y hasta 9 plazas (incluido el conductor).'
  },
  en: {
    name: 'B License',
    description: 'Cars up to 3,500kg and up to 9 seats',
    age: '18 years',
    duration: '3-6 months',
    image: '/car-license-b.png',
    details: 'The B license is the most requested driving license and allows you to drive passenger cars, vans and vehicles up to 3,500kg maximum authorized mass and up to 9 seats (including the driver).'
  }
}

export default function LicensesPage() {
  const { language } = useLanguage()
  const t = translations[language]
  const license = licenseInfo[language]

  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-black border-b border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
            {t.title}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* License Details */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-2xl shadow-yellow-400/10 border-2 border-yellow-400 bg-gray-800 hover:shadow-yellow-400/20 transition-all duration-300">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <Image
                      src={license.image}
                      alt={license.name}
                      width={500}
                      height={400}
                      className="w-full h-auto object-cover rounded-lg border-2 border-gray-700"
                    />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-3xl font-bold text-white">{license.name}</h2>
                      <Badge variant="outline" className="border-yellow-400 text-yellow-400 text-lg px-4 py-1 bg-yellow-400/10">
                        Popular
                      </Badge>
                    </div>
                    <p className="text-lg text-gray-300 mb-6">{license.description}</p>
                    <p className="text-gray-300 mb-6">{license.details}</p>

                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between text-lg border-b border-gray-700 pb-2">
                        <span className="text-gray-400 font-medium">{t.age}</span>
                        <span className="font-bold text-yellow-400">{license.age}</span>
                      </div>
                      <div className="flex justify-between text-lg border-b border-gray-700 pb-2">
                        <span className="text-gray-400 font-medium">{t.duration}</span>
                        <span className="font-bold text-yellow-400">{license.duration}</span>
                      </div>
                    </div>

                    <div className="flex space-x-2 mb-6">
                      <Badge variant="secondary" className="text-base px-4 py-1 bg-gray-700 text-yellow-400 border-gray-600">{t.theory}</Badge>
                      <Badge variant="secondary" className="text-base px-4 py-1 bg-gray-700 text-yellow-400 border-gray-600">{t.practical}</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">{t.whatIncludes}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gray-900 border border-gray-800 hover:border-yellow-400 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-yellow-400">{t.theoreticalClasses}</h3>
                  <p className="text-gray-300">Classes diàries adaptades al teu horari</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border border-gray-800 hover:border-yellow-400 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-yellow-400">{t.practicalClasses}</h3>
                  <p className="text-gray-300">Pràctiques amb vehicles moderns</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border border-gray-800 hover:border-yellow-400 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-yellow-400">{t.examPreparation}</h3>
                  <p className="text-gray-300">Simulacres d'examen i seguiment personalitzat</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border border-gray-800 hover:border-yellow-400 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-yellow-400">{t.modernVehicles}</h3>
                  <p className="text-gray-300">Flota renovada amb última tecnologia</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border border-gray-800 hover:border-yellow-400 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-yellow-400">{t.flexibleSchedules}</h3>
                  <p className="text-gray-300">Adaptem les classes a la teva disponibilitat</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border border-gray-800 hover:border-yellow-400 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-yellow-400">{t.experiencedInstructors}</h3>
                  <p className="text-gray-300">Professionals certificats i amb anys d'experiència</p>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-12">
              <a href="/contacte">
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 text-lg font-bold rounded-lg shadow-lg hover:shadow-yellow-400/50 transition-all duration-200">
                  {t.moreInfo}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
