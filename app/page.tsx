"use client";

import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Car,
  Clock,
  Users,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const translations = {
  ca: {
    heroTitle: "El teu futur comença a Autoescola Fran.",
    heroButton: "VEURE PERMISOS",
    quickAccessButton: "CONSULTA LES TEVES NOTES D'EXAMEN",
    intensiveBanner: {
      title: "Curs intensiu del 3 al 7 de novembre.",
      schedule: "De 16:00h. a 20:00h.",
      cta: "Reserva la teva plaça.",
    },
    valueProps: {
      modern: "Vehicles Moderns",
      flexible: "Horaris Flexibles",
      expert: "Instructors Experts",
    },
    featuredLicenses: "Permisos Destacats",
    testimonials: "Testimonis",
    locationTitle: "Troba'ns a Salou",
    locationDescription:
      "Visita'ns a la nostra autoescola al cor de Salou. Estem aquí per ajudar-te a aconseguir el teu carnet de conduir.",
    getDirectionsButton: "Com arribar",
    finalCta: "A punt per començar a conduir?",
    finalCtaButton: "CONTACTA'NS",
  },
  es: {
    heroTitle: "Tu futuro empieza en Autoescola Fran.",
    heroButton: "VER PERMISOS",
    quickAccessButton: "CONSULTA TUS NOTAS DE EXAMEN",
    intensiveBanner: {
      title: "Curso intensivo del 3 al 7 de noviembre.",
      schedule: "De 16:00h. a 20:00h.",
      cta: "Reserva tu plaza.",
    },
    valueProps: {
      modern: "Vehículos Modernos",
      flexible: "Horarios Flexibles",
      expert: "Instructores Expertos",
    },
    featuredLicenses: "Permisos Destacados",
    testimonials: "Testimonios",
    locationTitle: "Encuéntranos en Salou",
    locationDescription:
      "Visítanos en nuestra autoescuela en el corazón de Salou. Estamos aquí para ayudarte a conseguir tu carnet de conducir.",
    getDirectionsButton: "Cómo llegar",
    finalCta: "¿Listo para empezar a conducir?",
    finalCtaButton: "CONTÁCTANOS",
  },
  en: {
    heroTitle: "Your future starts at Autoescola Fran.",
    heroButton: "VIEW LICENSES",
    quickAccessButton: "CHECK YOUR EXAM RESULTS",
    intensiveBanner: {
      title: "Intensive course from November 3rd to 7th.",
      schedule: "From 4:00 PM to 8:00 PM.",
      cta: "Reserve your spot.",
    },
    valueProps: {
      modern: "Modern Vehicles",
      flexible: "Flexible Schedules",
      expert: "Expert Instructors",
    },
    featuredLicenses: "Featured Licenses",
    testimonials: "Testimonials",
    locationTitle: "Find us in Salou",
    locationDescription:
      "Visit us at our driving school in the heart of Salou. We're here to help you get your driver's license.",
    getDirectionsButton: "Get directions",
    finalCta: "Ready to start driving?",
    finalCtaButton: "CONTACT US",
  },
};

const testimonials = {
  ca: [
    {
      name: "Yani 48",
      text: "En la autoescuela Fran hemos recibido una gran atención muy explícita y detallada quiero recalcar la amabilidad, el respeto y la dedicación que nos han brindado tanto el chico como la chica que nos han atendido muchas felicidades",
      rating: 5,
    },
    {
      name: "Nabi Tzt",
      text: "Autoescuela 10/10. En especial Ana, muy profesional y cercana a la vez, no pretende aprovecharse de los alumnos ya que en cuanto me vió preparada ella misma me lo dijo.",
      rating: 5,
    },
    {
      name: "Villy Arias Chavez",
      text: "Excelente autoescuela, muy profesionales y atentos. Recomiendo totalmente para obtener el carnet de conducir.",
      rating: 5,
    },
  ],
  es: [
    {
      name: "Yani 48",
      text: "En la autoescuela Fran hemos recibido una gran atención muy explícita y detallada quiero recalcar la amabilidad, el respeto y la dedicación que nos han brindado tanto el chico como la chica que nos han atendido muchas felicidades",
      rating: 5,
    },
    {
      name: "Nabi Tzt",
      text: "Autoescuela 10/10. En especial Ana, muy profesional y cercana a la vez, no pretende aprovecharse de los alumnos ya que en cuanto me vió preparada ella misma me lo dijo.",
      rating: 5,
    },
    {
      name: "Villy Arias Chavez",
      text: "Excelente autoescuela, muy profesionales y atentos. Recomiendo totalmente para obtener el carnet de conducir.",
      rating: 5,
    },
  ],
  en: [
    {
      name: "Yani 48",
      text: "At Autoescuela Fran we received great, very explicit and detailed attention. I want to emphasize the kindness, respect and dedication that both the boy and the girl who attended us have given us. Congratulations!",
      rating: 5,
    },
    {
      name: "Nabi Tzt",
      text: "Driving school 10/10. Especially Ana, very professional and friendly at the same time, she doesn't try to take advantage of students as soon as she saw me ready she told me herself.",
      rating: 5,
    },
    {
      name: "Villy Arias Chavez",
      text: "Excellent driving school, very professional and attentive. I totally recommend it to get your driver's license.",
      rating: 5,
    },
  ],
};

export default function HomePage() {
  const { language } = useLanguage();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const t = translations[language];
  const currentTestimonials = testimonials[language];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % currentTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) =>
        (prev - 1 + currentTestimonials.length) % currentTestimonials.length
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Banner */}
      {/* <section className="relative h-[600px] bg-gradient-to-r from-yellow-400 to-yellow-500 flex items-center justify-center overflow-hidden">
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
      </section> */}

      {/* Intensive Course Banner */}
      <section className="py-0 bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-400 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-4 leading-tight drop-shadow-md">
              {t.intensiveBanner.title}
            </h2>
            <p className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 drop-shadow-md">
              {t.intensiveBanner.schedule}
            </p>
            <p className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 drop-shadow-md">
              {t.intensiveBanner.cta}
            </p>
            <Link href="/contacte">
              <Button className="bg-gray-900 hover:bg-black text-white px-10 py-6 text-xl font-bold rounded-full shadow-2xl transform transition hover:scale-105 animate-pulse">
                {t.intensiveBanner.cta}
              </Button>
            </Link>
          </div>
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
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {t.valueProps.modern}
              </h3>
              <p className="text-gray-600">
                Flota renovada amb els últims models i tecnologia de seguretat.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {t.valueProps.flexible}
              </h3>
              <p className="text-gray-600">
                Adaptem els horaris a les teves necessitats i disponibilitat.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {t.valueProps.expert}
              </h3>
              <p className="text-gray-600">
                Professionals amb anys d'experiència i mètodes d'ensenyament
                eficaços.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Licenses */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            {t.featuredLicenses}
          </h2>
          <div className="flex justify-center">
            <Card className="hover:shadow-lg transition-shadow max-w-md w-full">
              <CardContent className="p-6">
                <Image
                  src="/car-license-b-permit.png"
                  alt="Permís B"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-semibold mb-2">Permís B</h3>
                <p className="text-gray-600 mb-4">
                  Carnet de cotxe. El més sol·licitat per a vehicles fins a
                  3.500kg.
                </p>
                <Link href="/permisos">
                  <Button className="bg-red-600 hover:bg-red-700 text-white w-full">
                    Més Informació
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            {t.testimonials}
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <Card className="p-8">
                <CardContent className="text-center">
                  <div className="flex justify-center mb-4">
                    {[
                      ...Array(currentTestimonials[currentTestimonial].rating),
                    ].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-500 fill-current"
                      />
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

      {/* Location Map */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              {t.locationTitle}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.locationDescription}
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.8!2d1.1310763!3d41.0784008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a15baea7a6e4c5%3A0xee1cd0fb3d0d334f!2sAUTOESCOLA%20FRAN.%20En%20Salou.!5e0!3m2!1ses!2ses!4v1640995200000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Autoescola Fran - Salou - Calle Barcelona 35, local 3"
                ></iframe>
              </div>
              <div className="p-6 text-center">
                <Button
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg"
                  onClick={() =>
                    window.open(
                      "https://www.google.com/maps/place/AUTOESCOLA+FRAN.+En+Salou./@41.0784008,1.1285014,17z/data=!3m1!4b1!4m6!3m5!1s0x12a15baea7a6e4c5:0xee1cd0fb3d0d334f!8m2!3d41.0784008!4d1.1310763!16s%2Fg%2F11xtmpmbx8",
                      "_blank"
                    )
                  }
                >
                  {t.getDirectionsButton}
                </Button>
              </div>
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

      <Footer />
    </div>
  );
}
