'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { useLanguage } from '@/hooks/use-language'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import { CheckCircle2, Clock } from 'lucide-react'

const translations = {
  ca: {
    title: 'Els nostres permisos',
    subtitle: 'Aprèn a conduir amb els millors professionals de Salou',
    moreInfo: "Contacta'ns",
    age: 'Edat mínima:',
    duration: 'Durada:',
    theory: 'Teòric',
    practical: 'Pràctic',
    availableHeading: 'Permisos disponibles',
    comingSoonHeading: 'Pròximament',
    available: 'Ja disponible',
    newBadge: 'Novetat!',
    popularBadge: 'Popular',
    whatIncludes: 'Què inclou el curs?',
    theoreticalClasses: 'Classes teòriques',
    practicalClasses: 'Classes pràctiques',
    examPreparation: 'Preparació per als exàmens',
    modernVehicles: 'Vehicles moderns i segurs',
    flexibleSchedules: 'Horaris flexibles',
    experiencedInstructors: 'Instructors amb experiència',
    theoreticalClassesDesc: 'Classes diàries adaptades al teu horari',
    practicalClassesDesc: 'Pràctiques amb vehicles moderns',
    examPreparationDesc: "Simulacres d'examen i seguiment personalitzat",
    modernVehiclesDesc: 'Flota renovada amb última tecnologia',
    flexibleSchedulesDesc: 'Adaptem les classes a la teva disponibilitat',
    experiencedInstructorsDesc:
      "Professionals certificats i amb anys d'experiència",
  },
  es: {
    title: 'Nuestros permisos',
    subtitle: 'Aprende a conducir con los mejores profesionales de Salou',
    moreInfo: 'Contáctanos',
    age: 'Edad mínima:',
    duration: 'Duración:',
    theory: 'Teórico',
    practical: 'Práctico',
    availableHeading: 'Permisos disponibles',
    comingSoonHeading: 'Próximamente',
    available: 'Ya disponible',
    newBadge: '¡Novedad!',
    popularBadge: 'Popular',
    whatIncludes: '¿Qué incluye el curso?',
    theoreticalClasses: 'Clases teóricas',
    practicalClasses: 'Clases prácticas',
    examPreparation: 'Preparación para los exámenes',
    modernVehicles: 'Vehículos modernos y seguros',
    flexibleSchedules: 'Horarios flexibles',
    experiencedInstructors: 'Instructores con experiencia',
    theoreticalClassesDesc: 'Clases diarias adaptadas a tu horario',
    practicalClassesDesc: 'Prácticas con vehículos modernos',
    examPreparationDesc: 'Simulacros de examen y seguimiento personalizado',
    modernVehiclesDesc: 'Flota renovada con última tecnología',
    flexibleSchedulesDesc: 'Adaptamos las clases a tu disponibilidad',
    experiencedInstructorsDesc:
      'Profesionales certificados y con años de experiencia',
  },
  en: {
    title: 'Our licenses',
    subtitle: 'Learn to drive with the best professionals in Salou',
    moreInfo: 'Contact Us',
    age: 'Minimum age:',
    duration: 'Duration:',
    theory: 'Theory',
    practical: 'Practical',
    availableHeading: 'Available licenses',
    comingSoonHeading: 'Coming soon',
    available: 'Now available',
    newBadge: 'New!',
    popularBadge: 'Popular',
    whatIncludes: 'What does the course include?',
    theoreticalClasses: 'Theoretical classes',
    practicalClasses: 'Practical classes',
    examPreparation: 'Exam preparation',
    modernVehicles: 'Modern and safe vehicles',
    flexibleSchedules: 'Flexible schedules',
    experiencedInstructors: 'Experienced instructors',
    theoreticalClassesDesc: 'Daily classes adapted to your schedule',
    practicalClassesDesc: 'Practice with modern vehicles',
    examPreparationDesc: 'Mock exams and personalised follow-up',
    modernVehiclesDesc: 'Renewed fleet with the latest technology',
    flexibleSchedulesDesc: 'We adapt classes to your availability',
    experiencedInstructorsDesc:
      'Certified professionals with years of experience',
  },
}

type LicenseStatus = 'available' | 'soon'

type License = {
  key: string
  status: LicenseStatus
  name: string
  description: string
  age: string
  duration: string
  image: string
  details: string
  badge?: 'popular' | 'new'
}

const licensesByLanguage: Record<'ca' | 'es' | 'en', License[]> = {
  ca: [
    {
      key: 'B',
      status: 'available',
      name: 'Permís B',
      description: 'Automòbils fins a 3.500kg i fins a 9 places',
      age: '18 anys',
      duration: '3-6 mesos',
      image: '/permis-b-vw-polo.jpg',
      details:
        'El permís B és el carnet de conduir més sol·licitat i permet conduir turismes, furgonetes i vehicles de fins a 3.500kg de massa màxima autoritzada i fins a 9 places (inclòs el conductor).',
      badge: 'popular',
    },
    {
      key: 'A2',
      status: 'available',
      name: 'Permís A2',
      description: 'Motos de fins a 35kW (47CV) de potència màxima',
      age: '18 anys',
      duration: '2-4 mesos',
      image: '/permis-a2-kawasaki.jpg',
      details:
        "Permet conduir motocicletes de fins a 35kW (47CV) de potència màxima i amb una relació potència/pes inferior a 0,2kW/kg. Ja disposem de l'autorització i les motos preparades.",
      badge: 'new',
    },
    {
      key: 'AM',
      status: 'soon',
      name: 'Permís AM',
      description: 'Ciclomotors de fins a 50cc i 45 km/h',
      age: '15 anys',
      duration: '-',
      image: '/permis-am-yamaha-neos.jpg',
      details:
        'Permet conduir ciclomotors de fins a 50cc i una velocitat màxima de 45 km/h. Aviat estarà disponible a la nostra autoescola.',
    },
    {
      key: 'A1',
      status: 'soon',
      name: 'Permís A1',
      description: 'Motos de fins a 125cc i 11kW de potència',
      age: '16 anys',
      duration: '-',
      image: '/permis-a1-honda.jpg',
      details:
        'Permet conduir motocicletes de fins a 125cc i fins a 11kW de potència. Aviat estarà disponible a la nostra autoescola.',
    },
    {
      key: 'A',
      status: 'soon',
      name: 'Permís A',
      description: 'Motos sense límit de cilindrada ni potència',
      age: '20 anys',
      duration: '-',
      image: '/permis-a-yamaha-mt07.jpg',
      details:
        "Sense límit de cilindrada ni de potència. Cal tenir 2 anys d'experiència amb el permís A2. No té examen, és una ampliació directa.",
    },
  ],
  es: [
    {
      key: 'B',
      status: 'available',
      name: 'Permiso B',
      description: 'Automóviles hasta 3.500kg y hasta 9 plazas',
      age: '18 años',
      duration: '3-6 meses',
      image: '/permis-b-vw-polo.jpg',
      details:
        'El permiso B es el carnet de conducir más solicitado y permite conducir turismos, furgonetas y vehículos de hasta 3.500kg de masa máxima autorizada y hasta 9 plazas (incluido el conductor).',
      badge: 'popular',
    },
    {
      key: 'A2',
      status: 'available',
      name: 'Permiso A2',
      description: 'Motos de hasta 35kW (47CV) de potencia máxima',
      age: '18 años',
      duration: '2-4 meses',
      image: '/permis-a2-kawasaki.jpg',
      details:
        'Permite conducir motocicletas de hasta 35kW (47CV) de potencia máxima y con una relación potencia/peso inferior a 0,2kW/kg. Ya disponemos de la autorización y las motos preparadas.',
      badge: 'new',
    },
    {
      key: 'AM',
      status: 'soon',
      name: 'Permiso AM',
      description: 'Ciclomotores de hasta 50cc y 45 km/h',
      age: '15 años',
      duration: '-',
      image: '/permis-am-yamaha-neos.jpg',
      details:
        'Permite conducir ciclomotores de hasta 50cc y una velocidad máxima de 45 km/h. Pronto estará disponible en nuestra autoescuela.',
    },
    {
      key: 'A1',
      status: 'soon',
      name: 'Permiso A1',
      description: 'Motos de hasta 125cc y 11kW de potencia',
      age: '16 años',
      duration: '-',
      image: '/permis-a1-honda.jpg',
      details:
        'Permite conducir motocicletas de hasta 125cc y hasta 11kW de potencia. Pronto estará disponible en nuestra autoescuela.',
    },
    {
      key: 'A',
      status: 'soon',
      name: 'Permiso A',
      description: 'Motos sin límite de cilindrada ni potencia',
      age: '20 años',
      duration: '-',
      image: '/permis-a-yamaha-mt07.jpg',
      details:
        'Sin límite de cilindrada ni de potencia. Es necesario tener 2 años de experiencia con el permiso A2. No tiene examen, es una ampliación directa.',
    },
  ],
  en: [
    {
      key: 'B',
      status: 'available',
      name: 'Class B',
      description: 'Cars up to 3,500kg and up to 9 seats',
      age: '18 years',
      duration: '3-6 months',
      image: '/permis-b-vw-polo.jpg',
      details:
        'The B license is the most requested driving license and allows you to drive passenger cars, vans and vehicles up to 3,500kg maximum authorized mass and up to 9 seats (including the driver).',
      badge: 'popular',
    },
    {
      key: 'A2',
      status: 'available',
      name: 'Class A2',
      description: 'Motorcycles up to 35kW (47hp) maximum power',
      age: '18 years',
      duration: '2-4 months',
      image: '/permis-a2-kawasaki.jpg',
      details:
        'Lets you ride motorcycles up to 35kW (47hp) of maximum power with a power-to-weight ratio below 0.2kW/kg. We already have the authorisation and the bikes ready.',
      badge: 'new',
    },
    {
      key: 'AM',
      status: 'soon',
      name: 'Class AM',
      description: 'Mopeds up to 50cc and 45 km/h',
      age: '15 years',
      duration: '-',
      image: '/permis-am-yamaha-neos.jpg',
      details:
        'Lets you ride mopeds up to 50cc with a top speed of 45 km/h. Coming soon to our driving school.',
    },
    {
      key: 'A1',
      status: 'soon',
      name: 'Class A1',
      description: 'Motorcycles up to 125cc and 11kW',
      age: '16 years',
      duration: '-',
      image: '/permis-a1-honda.jpg',
      details:
        'Lets you ride motorcycles up to 125cc and up to 11kW. Coming soon to our driving school.',
    },
    {
      key: 'A',
      status: 'soon',
      name: 'Class A',
      description: 'Motorcycles with no displacement or power limit',
      age: '20 years',
      duration: '-',
      image: '/permis-a-yamaha-mt07.jpg',
      details:
        'No displacement or power limit. Requires 2 years of experience with the A2 licence. No exam — it is a direct upgrade.',
    },
  ],
}

export default function LicensesPage() {
  const { language } = useLanguage()
  const t = translations[language]
  const licenses = licensesByLanguage[language]
  const available = licenses.filter((l) => l.status === 'available')
  const soon = licenses.filter((l) => l.status === 'soon')

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

      {/* Available licenses */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-white uppercase tracking-wider">
            {t.availableHeading}
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {available.map((license) => {
              const isCar = license.key === 'B'
              return (
                <Card
                  key={license.key}
                  className={`shadow-2xl ${
                    license.badge === 'new'
                      ? 'border-2 border-yellow-400 shadow-yellow-400/20'
                      : 'border-2 border-yellow-400/40 shadow-yellow-400/10'
                  } bg-gray-800 hover:shadow-yellow-400/30 transition-all duration-300`}
                >
                  <CardContent className="p-6 md:p-8">
                    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                      <div className="relative">
                        <div
                          className={`overflow-hidden rounded-lg border-2 border-gray-700 ${
                            isCar ? '' : 'bg-gradient-to-br from-gray-50 to-gray-200'
                          }`}
                        >
                          <Image
                            src={license.image}
                            alt={license.name}
                            width={1200}
                            height={900}
                            className={`w-full h-64 ${
                              isCar ? 'object-cover' : 'object-contain p-3'
                            }`}
                          />
                        </div>
                        {license.badge === 'new' && (
                          <span className="absolute top-3 right-3 inline-flex items-center bg-yellow-400 text-black text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-lg animate-pulse">
                            {t.newBadge}
                          </span>
                        )}
                        <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                          <CheckCircle2 className="h-3.5 w-3.5" />
                          {t.available}
                        </span>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-4 gap-3">
                          <h3 className="text-2xl md:text-3xl font-bold text-white">
                            {license.name}
                          </h3>
                          {license.badge === 'popular' && (
                            <Badge
                              variant="outline"
                              className="border-yellow-400 text-yellow-400 px-3 py-1 bg-yellow-400/10 whitespace-nowrap"
                            >
                              {t.popularBadge}
                            </Badge>
                          )}
                        </div>
                        <p className="text-base text-gray-300 mb-4">
                          {license.description}
                        </p>
                        <p className="text-sm text-gray-400 mb-5 leading-relaxed">
                          {license.details}
                        </p>

                        <div className="space-y-2 mb-5">
                          <div className="flex justify-between border-b border-gray-700 pb-2">
                            <span className="text-gray-400 text-sm font-medium">
                              {t.age}
                            </span>
                            <span className="font-bold text-yellow-400">
                              {license.age}
                            </span>
                          </div>
                          <div className="flex justify-between border-b border-gray-700 pb-2">
                            <span className="text-gray-400 text-sm font-medium">
                              {t.duration}
                            </span>
                            <span className="font-bold text-yellow-400">
                              {license.duration}
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          <Badge className="text-sm px-3 py-1 bg-gray-700 text-yellow-400 border border-gray-600 hover:bg-gray-700">
                            {t.theory}
                          </Badge>
                          <Badge className="text-sm px-3 py-1 bg-gray-700 text-yellow-400 border border-gray-600 hover:bg-gray-700">
                            {t.practical}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Coming soon licenses */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 text-yellow-400 uppercase tracking-[0.2em]">
              {t.comingSoonHeading}
            </h2>
            <div className="w-16 h-1 bg-yellow-400 mx-auto mb-10 rounded-full" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {soon.map((license) => (
                <Card
                  key={license.key}
                  className="group bg-gray-900 border border-gray-800 hover:border-yellow-400/60 transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-5">
                    <div className="relative overflow-hidden rounded-lg mb-4 bg-gradient-to-br from-gray-50 to-gray-200">
                      <Image
                        src={license.image}
                        alt={license.name}
                        width={1200}
                        height={900}
                        className="w-full h-44 object-contain p-2 grayscale-[0.2] transition-all duration-300 group-hover:grayscale-0 group-hover:scale-105"
                      />
                      <span className="absolute top-2 left-2 inline-flex items-center gap-1.5 bg-yellow-400 text-black text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
                        <Clock className="h-3 w-3" />
                        {t.comingSoonHeading}
                      </span>
                    </div>
                    <div className="flex items-baseline justify-between gap-2 mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                        {license.name}
                      </h3>
                      <span className="text-sm font-bold text-yellow-400 whitespace-nowrap">
                        {license.age}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 mb-3">
                      {license.description}
                    </p>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {license.details}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              {t.whatIncludes}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gray-800 border border-gray-700 hover:border-yellow-400 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-yellow-400">
                    {t.theoreticalClasses}
                  </h3>
                  <p className="text-gray-300">{t.theoreticalClassesDesc}</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border border-gray-700 hover:border-yellow-400 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-yellow-400">
                    {t.practicalClasses}
                  </h3>
                  <p className="text-gray-300">{t.practicalClassesDesc}</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border border-gray-700 hover:border-yellow-400 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-yellow-400">
                    {t.examPreparation}
                  </h3>
                  <p className="text-gray-300">{t.examPreparationDesc}</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border border-gray-700 hover:border-yellow-400 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-yellow-400">
                    {t.modernVehicles}
                  </h3>
                  <p className="text-gray-300">{t.modernVehiclesDesc}</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border border-gray-700 hover:border-yellow-400 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-yellow-400">
                    {t.flexibleSchedules}
                  </h3>
                  <p className="text-gray-300">{t.flexibleSchedulesDesc}</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border border-gray-700 hover:border-yellow-400 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-yellow-400">
                    {t.experiencedInstructors}
                  </h3>
                  <p className="text-gray-300">
                    {t.experiencedInstructorsDesc}
                  </p>
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
