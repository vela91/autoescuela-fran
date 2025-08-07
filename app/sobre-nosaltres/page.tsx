'use client'

import { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { useLanguage } from '@/hooks/use-language'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, Users, Car, Award, Clock } from 'lucide-react'
import Image from 'next/image'

const translations = {
  ca: {
    title: "La teva autoescola de confiança a Salou",
    subtitle: "Més de 20 anys formant conductors responsables",
    description: "A Autoescola Fran en Salou, ens dediquem a formar conductors segurs i responsables. La nostra filosofia es basa en l'atenció personalitzada, la qualitat de l'ensenyament i l'ús de vehicles moderns amb les últimes tecnologies de seguretat.",
    whyUs: "Per què nosaltres?",
    advantages: [
      "Instructors qualificats amb anys d'experiència",
      "Vehicles moderns i ben mantinguts",
      "Horaris flexibles adaptats a les teves necessitats",
      "Mètodes d'ensenyament innovadors",
      "Alt percentatge d'aprovats",
      "Atenció personalitzada per a cada alumne"
    ],
    stats: {
      students: "Alumnes formats",
      experience: "Anys d'experiència", 
      success: "Taxa d'èxit",
      vehicles: "Vehicles disponibles"
    }
  },
  es: {
    title: "Tu autoescuela de confianza en Salou",
    subtitle: "Más de 20 años formando conductores responsables",
    description: "En Autoescola Fran en Salou, nos dedicamos a formar conductores seguros y responsables. Nuestra filosofía se basa en la atención personalizada, la calidad de la enseñanza y el uso de vehículos modernos con las últimas tecnologías de seguridad.",
    whyUs: "¿Por qué nosotros?",
    advantages: [
      "Instructores cualificados con años de experiencia",
      "Vehículos modernos y bien mantenidos",
      "Horarios flexibles adaptados a tus necesidades",
      "Métodos de enseñanza innovadores",
      "Alto porcentaje de aprobados",
      "Atención personalizada para cada alumno"
    ],
    stats: {
      students: "Alumnos formados",
      experience: "Años de experiencia",
      success: "Tasa de éxito", 
      vehicles: "Vehículos disponibles"
    }
  },
  en: {
    title: "Your trusted driving school in Salou",
    subtitle: "Over 20 years training responsible drivers",
    description: "At Autoescola Fran in Salou, we are dedicated to training safe and responsible drivers. Our philosophy is based on personalized attention, quality teaching and the use of modern vehicles with the latest safety technologies.",
    whyUs: "Why choose us?",
    advantages: [
      "Qualified instructors with years of experience",
      "Modern and well-maintained vehicles",
      "Flexible schedules adapted to your needs",
      "Innovative teaching methods",
      "High pass rate",
      "Personalized attention for each student"
    ],
    stats: {
      students: "Students trained",
      experience: "Years of experience",
      success: "Success rate",
      vehicles: "Available vehicles"
    }
  }
}

export default function AboutPage() {
  const { language } = useLanguage()
  const t = translations[language]

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

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {t.description}
              </p>
              
              <h2 className="text-3xl font-bold text-gray-800 mb-6">{t.whyUs}</h2>
              
              <div className="space-y-4">
                {t.advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-red-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">{advantage}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <Image
                src="/driving-school-team.png"
                alt="Equip Autoescola Fran"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-800 mb-2">2000+</div>
                <p className="text-gray-600">{t.stats.students}</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Award className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-800 mb-2">20+</div>
                <p className="text-gray-600">{t.stats.experience}</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <CheckCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-800 mb-2">95%</div>
                <p className="text-gray-600">{t.stats.success}</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Car className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-800 mb-2">8</div>
                <p className="text-gray-600">{t.stats.vehicles}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
