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
    title: "Tots els permisos de conduir",
    subtitle: "Troba el permís que necessites per començar a conduir",
    moreInfo: "Més Informació",
    age: "Edat mínima:",
    duration: "Durada:",
    theory: "Teòric",
    practical: "Pràctic"
  },
  es: {
    title: "Todos los permisos de conducir", 
    subtitle: "Encuentra el permiso que necesitas para empezar a conducir",
    moreInfo: "Más Información",
    age: "Edad mínima:",
    duration: "Duración:",
    theory: "Teórico",
    practical: "Práctico"
  },
  en: {
    title: "All driving licenses",
    subtitle: "Find the license you need to start driving",
    moreInfo: "More Information", 
    age: "Minimum age:",
    duration: "Duration:",
    theory: "Theory",
    practical: "Practical"
  }
}

const licenses = {
  ca: [
    {
      id: 'am',
      name: 'Permís AM',
      description: 'Ciclomotors de fins a 50cc i quadricicles lleugers',
      age: '15 anys',
      duration: '1-2 mesos',
      image: '/moped-scooter-50cc.png'
    },
    {
      id: 'a1', 
      name: 'Permís A1',
      description: 'Motocicletes fins a 125cc i 11kW de potència',
      age: '16 anys',
      duration: '2-3 mesos',
      image: '/125cc-motorcycle.png'
    },
    {
      id: 'a2',
      name: 'Permís A2', 
      description: 'Motocicletes fins a 35kW de potència',
      age: '18 anys',
      duration: '2-4 mesos',
      image: '/motorcycle-a2-license.png'
    },
    {
      id: 'a',
      name: 'Permís A',
      description: 'Totes les motocicletes sense limitació de potència',
      age: '20/24 anys',
      duration: '1-2 mesos',
      image: '/powerful-motorcycle.png'
    },
    {
      id: 'b',
      name: 'Permís B',
      description: 'Automòbils fins a 3.500kg i fins a 9 places',
      age: '18 anys', 
      duration: '3-6 mesos',
      image: '/car-license-b.png'
    },
    {
      id: 'be',
      name: 'Permís B+E',
      description: 'Automòbils amb remolc de més de 750kg',
      age: '18 anys',
      duration: '1-2 mesos',
      image: '/placeholder.svg?height=200&width=300'
    }
  ],
  es: [
    {
      id: 'am',
      name: 'Permiso AM',
      description: 'Ciclomotores de hasta 50cc y cuadriciclos ligeros',
      age: '15 años',
      duration: '1-2 meses',
      image: '/moped-scooter-50cc.png'
    },
    {
      id: 'a1',
      name: 'Permiso A1', 
      description: 'Motocicletas hasta 125cc y 11kW de potencia',
      age: '16 años',
      duration: '2-3 meses',
      image: '/125cc-motorcycle.png'
    },
    {
      id: 'a2',
      name: 'Permiso A2',
      description: 'Motocicletas hasta 35kW de potencia',
      age: '18 años',
      duration: '2-4 meses', 
      image: '/motorcycle-a2-license.png'
    },
    {
      id: 'a',
      name: 'Permiso A',
      description: 'Todas las motocicletas sin limitación de potencia',
      age: '20/24 años',
      duration: '1-2 meses',
      image: '/powerful-motorcycle.png'
    },
    {
      id: 'b',
      name: 'Permiso B',
      description: 'Automóviles hasta 3.500kg y hasta 9 plazas',
      age: '18 años',
      duration: '3-6 meses',
      image: '/car-license-b.png'
    },
    {
      id: 'be',
      name: 'Permiso B+E',
      description: 'Automóviles con remolque de más de 750kg',
      age: '18 años',
      duration: '1-2 meses',
      image: '/placeholder.svg?height=200&width=300'
    }
  ],
  en: [
    {
      id: 'am',
      name: 'AM License',
      description: 'Mopeds up to 50cc and light quadricycles',
      age: '15 years',
      duration: '1-2 months',
      image: '/moped-scooter-50cc.png'
    },
    {
      id: 'a1',
      name: 'A1 License',
      description: 'Motorcycles up to 125cc and 11kW power',
      age: '16 years',
      duration: '2-3 months',
      image: '/125cc-motorcycle.png'
    },
    {
      id: 'a2',
      name: 'A2 License',
      description: 'Motorcycles up to 35kW power',
      age: '18 years',
      duration: '2-4 months',
      image: '/motorcycle-a2-license.png'
    },
    {
      id: 'a',
      name: 'A License',
      description: 'All motorcycles without power limitation',
      age: '20/24 years',
      duration: '1-2 months',
      image: '/powerful-motorcycle.png'
    },
    {
      id: 'b',
      name: 'B License',
      description: 'Cars up to 3,500kg and up to 9 seats',
      age: '18 years',
      duration: '3-6 months',
      image: '/car-license-b.png'
    },
    {
      id: 'be',
      name: 'B+E License',
      description: 'Cars with trailer over 750kg',
      age: '18 years',
      duration: '1-2 months',
      image: '/placeholder.svg?height=200&width=300'
    }
  ]
}

export default function LicensesPage() {
  const { language } = useLanguage()
  const t = translations[language]
  const currentLicenses = licenses[language]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            {t.title}
          </h1>
          <p className="text-xl text-black/80 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* Licenses Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentLicenses.map((license) => (
              <Card key={license.id} className="hover:shadow-lg transition-shadow border-2 hover:border-yellow-400">
                <CardContent className="p-6">
                  <Image
                    src={license.image || "/placeholder.svg"}
                    alt={license.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{license.name}</h3>
                    <Badge variant="outline" className="border-red-600 text-red-600">
                      Popular
                    </Badge>
                  </div>
                  <p className="text-gray-600 mb-4">{license.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">{t.age}</span>
                      <span className="font-medium">{license.age}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">{t.duration}</span>
                      <span className="font-medium">{license.duration}</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2 mb-4">
                    <Badge variant="secondary">{t.theory}</Badge>
                    <Badge variant="secondary">{t.practical}</Badge>
                  </div>
                  
                  <Button className="bg-red-600 hover:bg-red-700 text-white w-full">
                    {t.moreInfo}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
