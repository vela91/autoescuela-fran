'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { useLanguage } from '@/hooks/use-language'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, CheckCircle, Users, Award, BookOpen } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const translations = {
  ca: {
    title: "Cursos Intensius de Teòrica",
    subtitle: "Aprova l'examen teòric en temps rècord",
    description: "Els nostres cursos intensius estan dissenyats per a persones que necessiten obtenir el carnet de conduir ràpidament. Amb classes diàries i professors experts, maximitzem el teu aprenentatge en el mínim temps possible.",
    nextCourse: "Pròxim Curs",
    duration: "Durada del Curs",
    durationValue: "2-3 setmanes",
    schedule: "Horari de Classes",
    scheduleValue: "10:00 i 18:00 de dilluns a divendres",
    frequency: "Freqüència",
    frequencyValue: "Cursos cada mes",
    whatIncludes: "Què inclou el curs?",
    includes: [
      "Classes teòriques diàries",
      "Material didàctic actualitzat",
      "Tests i simulacres d'examen",
      "Seguiment personalitzat",
      "Accés a plataforma online",
      "Suport dels instructors"
    ],
    benefits: "Avantatges del Curs Intensiu",
    benefitsList: [
      {
        title: "Aprenentatge Accelerat",
        description: "Concentració total en el temari en menys temps"
      },
      {
        title: "Grups Reduïts",
        description: "Atenció personalitzada per a cada alumne"
      },
      {
        title: "Professors Experts",
        description: "Equip amb anys d'experiència i alt índex d'aprovats"
      },
      {
        title: "Horaris Flexibles",
        description: "Classes al matí i tarda per adaptar-nos a tu"
      }
    ],
    howWorks: "Com Funciona?",
    steps: [
      {
        title: "1. Matriculació",
        description: "Inscriu-te al proper curs intensiu disponible"
      },
      {
        title: "2. Classes Diàries",
        description: "Assisteix a les classes de dilluns a divendres"
      },
      {
        title: "3. Pràctica i Tests",
        description: "Realitza tests i simulacres per consolidar el teu aprenentatge"
      },
      {
        title: "4. Examen DGT",
        description: "Presenta't a l'examen oficial quan estiguis preparat"
      }
    ],
    cta: "Vols matricular-te al pròxim curs?",
    ctaButton: "CONTACTA'NS ARA",
    testimonialTitle: "Testimonis dels Nostres Alumnes"
  },
  es: {
    title: "Cursos Intensivos de Teórica",
    subtitle: "Aprueba el examen teórico en tiempo récord",
    description: "Nuestros cursos intensivos están diseñados para personas que necesitan obtener el carnet de conducir rápidamente. Con clases diarias y profesores expertos, maximizamos tu aprendizaje en el mínimo tiempo posible.",
    nextCourse: "Próximo Curso",
    duration: "Duración del Curso",
    durationValue: "2-3 semanas",
    schedule: "Horario de Clases",
    scheduleValue: "10:00 y 18:00 de lunes a viernes",
    frequency: "Frecuencia",
    frequencyValue: "Cursos cada mes",
    whatIncludes: "¿Qué incluye el curso?",
    includes: [
      "Clases teóricas diarias",
      "Material didáctico actualizado",
      "Tests y simulacros de examen",
      "Seguimiento personalizado",
      "Acceso a plataforma online",
      "Soporte de los instructores"
    ],
    benefits: "Ventajas del Curso Intensivo",
    benefitsList: [
      {
        title: "Aprendizaje Acelerado",
        description: "Concentración total en el temario en menos tiempo"
      },
      {
        title: "Grupos Reducidos",
        description: "Atención personalizada para cada alumno"
      },
      {
        title: "Profesores Expertos",
        description: "Equipo con años de experiencia y alto índice de aprobados"
      },
      {
        title: "Horarios Flexibles",
        description: "Clases por la mañana y tarde para adaptarnos a ti"
      }
    ],
    howWorks: "¿Cómo Funciona?",
    steps: [
      {
        title: "1. Matriculación",
        description: "Inscríbete en el próximo curso intensivo disponible"
      },
      {
        title: "2. Clases Diarias",
        description: "Asiste a las clases de lunes a viernes"
      },
      {
        title: "3. Práctica y Tests",
        description: "Realiza tests y simulacros para consolidar tu aprendizaje"
      },
      {
        title: "4. Examen DGT",
        description: "Preséntate al examen oficial cuando estés preparado"
      }
    ],
    cta: "¿Quieres matricularte en el próximo curso?",
    ctaButton: "CONTÁCTANOS AHORA",
    testimonialTitle: "Testimonios de Nuestros Alumnos"
  },
  en: {
    title: "Intensive Theory Courses",
    subtitle: "Pass the theory exam in record time",
    description: "Our intensive courses are designed for people who need to get their driver's license quickly. With daily classes and expert teachers, we maximize your learning in the minimum time possible.",
    nextCourse: "Next Course",
    duration: "Course Duration",
    durationValue: "2-3 weeks",
    schedule: "Class Schedule",
    scheduleValue: "10:00 and 18:00 Monday to Friday",
    frequency: "Frequency",
    frequencyValue: "Courses every month",
    whatIncludes: "What does the course include?",
    includes: [
      "Daily theory classes",
      "Updated teaching materials",
      "Tests and exam simulations",
      "Personalized follow-up",
      "Access to online platform",
      "Instructor support"
    ],
    benefits: "Benefits of the Intensive Course",
    benefitsList: [
      {
        title: "Accelerated Learning",
        description: "Total concentration on the syllabus in less time"
      },
      {
        title: "Small Groups",
        description: "Personalized attention for each student"
      },
      {
        title: "Expert Teachers",
        description: "Team with years of experience and high pass rate"
      },
      {
        title: "Flexible Schedules",
        description: "Morning and afternoon classes to adapt to you"
      }
    ],
    howWorks: "How Does It Work?",
    steps: [
      {
        title: "1. Enrollment",
        description: "Sign up for the next available intensive course"
      },
      {
        title: "2. Daily Classes",
        description: "Attend classes from Monday to Friday"
      },
      {
        title: "3. Practice and Tests",
        description: "Take tests and simulations to consolidate your learning"
      },
      {
        title: "4. DGT Exam",
        description: "Take the official exam when you're ready"
      }
    ],
    cta: "Want to enroll in the next course?",
    ctaButton: "CONTACT US NOW",
    testimonialTitle: "Testimonials from Our Students"
  }
}

export default function CursoIntensivoPage() {
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

      {/* Description Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg text-gray-600 leading-relaxed">
              {t.description}
            </p>
          </div>

          {/* Course Info Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center shadow-lg border-2 border-yellow-400">
              <CardContent className="p-6">
                <Clock className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">{t.duration}</h3>
                <p className="text-gray-600">{t.durationValue}</p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg border-2 border-yellow-400">
              <CardContent className="p-6">
                <Calendar className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">{t.schedule}</h3>
                <p className="text-gray-600">{t.scheduleValue}</p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg border-2 border-yellow-400">
              <CardContent className="p-6">
                <Award className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">{t.frequency}</h3>
                <p className="text-gray-600">{t.frequencyValue}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">{t.whatIncludes}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {t.includes.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">{t.benefits}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {t.benefitsList.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">{t.howWorks}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {t.steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-black">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">{t.cta}</h2>
          <Link href="/contacte">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg">
              {t.ctaButton}
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
