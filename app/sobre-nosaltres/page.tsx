"use client";

import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useLanguage } from "@/hooks/use-language";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Car, Award, Clock } from "lucide-react";
import Image from "next/image";

const translations = {
  ca: {
    title: "La teva autoescola de confiança a Salou",
    subtitle: "Formació professional amb atenció personalitzada",
    description:
      "A Autoescola Fran en Salou, ens dediquem a formar conductors segurs i responsables. La nostra filosofia es basa en l'atenció personalitzada, la qualitat de l'ensenyament i l'ús de vehicles moderns amb les últimes tecnologies de seguretat.",
    whyUs: "Per què nosaltres?",
    advantages: [
      "Instructors qualificats i certificats",
      "Vehicles moderns i ben mantinguts",
      "Horaris flexibles adaptats a les teves necessitats",
      "Mètodes d'ensenyament efectius",
      "Atenció personalitzada per a cada alumne",
      "Classes teòriques diàries",
    ],
    ourTeam: "El nostre equip",
    franProfile: {
      name: "Fran",
      title: "Director i Instructor",
      certifications: [
        "Professor de formació vial",
        "Director d'escola de conductors",
        "Expert en primers auxilis - Creu Roja Espanyola",
        "Professor de conducció eficient (vehicles lleugers i pesats)",
        "Curs d'extinció d'incendis i lluita contra el foc"
      ],
      licenses: "Permisos: B, AM, A1, A2, A, C, E i C+E",
    },
    anaProfile: {
      name: "Ana",
      title: "Directora i Instructora",
      certifications: [
        "Certificat de formació Vial",
        "Certificat de director d'escoles de conductors",
        "Programa Modular d'educació vial",
        "Programa modular de mobilitat segura i sostenible"
      ],
      licenses: "Permisos: B, AM, A1, A2, A, C, D",
    },
  },
  es: {
    title: "Tu autoescuela de confianza en Salou",
    subtitle: "Formación profesional con atención personalizada",
    description:
      "En Autoescola Fran en Salou, nos dedicamos a formar conductores seguros y responsables. Nuestra filosofía se basa en la atención personalizada, la calidad de la enseñanza y el uso de vehículos modernos con las últimas tecnologías de seguridad.",
    whyUs: "¿Por qué nosotros?",
    advantages: [
      "Instructores cualificados y certificados",
      "Vehículos modernos y bien mantenidos",
      "Horarios flexibles adaptados a tus necesidades",
      "Métodos de enseñanza efectivos",
      "Atención personalizada para cada alumno",
      "Clases teóricas diarias",
    ],
    ourTeam: "Nuestro equipo",
    franProfile: {
      name: "Fran",
      title: "Director e Instructor",
      certifications: [
        "Profesor de formación vial",
        "Director de escuela de conductores",
        "Experto en primeros auxilios - Cruz Roja Española",
        "Profesor de conducción eficiente (vehículos ligeros y pesados)",
        "Curso de extinción de incendios y lucha contra el fuego"
      ],
      licenses: "Permisos: B, AM, A1, A2, A, C, E y C+E",
    },
    anaProfile: {
      name: "Ana",
      title: "Directora e Instructora",
      certifications: [
        "Certificado de formación Vial",
        "Certificado de director de escuelas de conductores",
        "Programa Modular de educación vial",
        "Programa modular de movilidad segura y sostenible"
      ],
      licenses: "Permisos: B, AM, A1, A2, A, C, D",
    },
  },
  en: {
    title: "Your trusted driving school in Salou",
    subtitle: "Professional training with personalized attention",
    description:
      "At Autoescola Fran in Salou, we are dedicated to training safe and responsible drivers. Our philosophy is based on personalized attention, quality teaching and the use of modern vehicles with the latest safety technologies.",
    whyUs: "Why choose us?",
    advantages: [
      "Qualified and certified instructors",
      "Modern and well-maintained vehicles",
      "Flexible schedules adapted to your needs",
      "Effective teaching methods",
      "Personalized attention for each student",
      "Daily theoretical classes",
    ],
    ourTeam: "Our team",
    franProfile: {
      name: "Fran",
      title: "Director and Instructor",
      certifications: [
        "Road Training Professor",
        "Driving School Director",
        "First Aid Expert - Spanish Red Cross",
        "Efficient Driving Professor (light and heavy vehicles)",
        "Fire Extinguishing and Firefighting Course"
      ],
      licenses: "Licenses: B, AM, A1, A2, A, C, E and C+E",
    },
    anaProfile: {
      name: "Ana",
      title: "Director and Instructor",
      certifications: [
        "Road Training Certificate",
        "Driving School Director Certificate",
        "Modular Road Safety Education Program",
        "Modular Safe and Sustainable Mobility Program"
      ],
      licenses: "Licenses: B, AM, A1, A2, A, C, D",
    },
  },
};

export default function AboutPage() {
  const { language } = useLanguage();
  const t = translations[language];

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

      {/* Main Content */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                {t.description}
              </p>

              <h2 className="text-3xl font-bold text-white mb-6">
                {t.whyUs}
              </h2>

              <div className="space-y-4">
                {t.advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-300">{advantage}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Image
                src="/images/about_us.png"
                alt="Autoescola Fran"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl border-2 border-gray-800"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            {t.ourTeam}
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Fran Profile */}
            <Card className="shadow-2xl hover:shadow-yellow-400/20 transition-all duration-300 bg-gray-900 border-2 border-gray-800 hover:border-yellow-400">
              <CardContent className="p-8">
                <div className="flex flex-col items-center mb-6">
                  <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-yellow-400 mb-4 shadow-lg shadow-yellow-400/30">
                    <Image
                      src="/images/fran.png"
                      alt="Fran - Director Autoescola"
                      width={160}
                      height={160}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {t.franProfile.name}
                  </h3>
                  <p className="text-lg text-yellow-400 font-semibold">
                    {t.franProfile.title}
                  </p>
                </div>

                <div className="space-y-2 mb-4">
                  {t.franProfile.certifications.map((cert, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <Award className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                      <p className="text-sm text-gray-300">{cert}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-800 p-3 rounded-lg mt-4 border border-yellow-400/30">
                  <p className="text-xs font-semibold text-yellow-400">
                    {t.franProfile.licenses}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Ana Profile */}
            <Card className="shadow-2xl hover:shadow-yellow-400/20 transition-all duration-300 bg-gray-900 border-2 border-gray-800 hover:border-yellow-400">
              <CardContent className="p-8">
                <div className="flex flex-col items-center mb-6">
                  <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-yellow-400 mb-4 shadow-lg shadow-yellow-400/30">
                    <Image
                      src="/images/ana.png"
                      alt="Ana - Directora Autoescola"
                      width={160}
                      height={160}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {t.anaProfile.name}
                  </h3>
                  <p className="text-lg text-yellow-400 font-semibold">
                    {t.anaProfile.title}
                  </p>
                </div>

                <div className="space-y-2 mb-4">
                  {t.anaProfile.certifications.map((cert, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <Award className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                      <p className="text-sm text-gray-300">{cert}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-800 p-3 rounded-lg mt-4 border border-yellow-400/30">
                  <p className="text-xs font-semibold text-yellow-400">
                    {t.anaProfile.licenses}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
