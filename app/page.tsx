"use client";

import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Car,
  CheckCircle2,
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
    heroBadge: "Autoescola a Salou",
    heroTitle: "Autoescola Fran: la teva autoescola a Salou",
    heroSubtitle:
      "Cursos intensius i classes pràctiques per obtenir el carnet de conduir a la Costa Daurada.",
    heroDescription:
      "Aprèn amb instructors acreditats que t'atendran en català, castellà i anglès.",
    heroHighlights: [
      "Curs intensiu, classes teòriques i pràctiques al cor de Salou.",
      "Resultats excel·lents als exàmens oficials de la DGT.",
      "Autoescola de referència per a alumnes locals i internacionals.",
    ],
    heroImageAlt: "Equip d'Autoescola Fran amb alumnes a Salou",
    heroButton: "VEURE PERMISOS",
    heroSecondaryButton: "Parla amb nosaltres",
    quickAccessButton: "TEVES NOTES D'EXAMEN",
    intensiveBanner: {
      title: "Curs intensiu del 3 al 7 de novembre.",
      schedule: "De 16:00h. a 20:00h.",
      cta: "Reserva la teva plaça.",
    },
    whyChooseUs: {
      title: "Per què escollir Autoescola Fran?",
      subtitle:
        "Instructors amb una experiència immensa a Salou, els millors preus del mercat i ofertes exclusives per als nostres alumnes",
    },
    valueProps: {
      modern: "Vehicles Moderns",
      modernDesc:
        "Flota renovada amb els últims models i tecnologia de seguretat.",
      flexible: "Horaris Flexibles",
      flexibleDesc:
        "Adaptem els horaris a les teves necessitats i disponibilitat.",
      expert: "Instructors Experts",
      expertDesc:
        "Professionals amb anys d'experiència i mètodes d'ensenyament eficaços.",
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
    heroBadge: "Autoescuela en Salou",
    heroTitle: "Autoescola Fran: tu autoescuela en Salou",
    heroSubtitle:
      "Cursos intensivos y clases prácticas para sacar el carnet en la Costa Dorada.",
    heroDescription:
      "Profesorado experto que te atiende en castellano, catalán e inglés.",
    heroHighlights: [
      "Curso intensivo, clases teóricas y prácticas en Salou.",
      "Alto índice de aprobados en los exámenes oficiales de la DGT.",
      "Autoescuela recomendada por alumnos locales e internacionales.",
    ],
    heroImageAlt: "Equipo de Autoescola Fran con alumnos en Salou",
    heroButton: "VER PERMISOS",
    heroSecondaryButton: "Habla con nosotros",
    quickAccessButton: "TUS NOTAS DE EXAMEN",
    intensiveBanner: {
      title: "Curso intensivo del 3 al 7 de noviembre.",
      schedule: "De 16:00h. a 20:00h.",
      cta: "Reserva tu plaza.",
    },
    whyChooseUs: {
      title: "¿Por qué elegir Autoescola Fran?",
      subtitle:
        "Instructores con una experiencia inmensa en Salou, los mejores precios del mercado y ofertas exclusivas para nuestros alumnos",
    },
    valueProps: {
      modern: "Vehículos Modernos",
      modernDesc:
        "Flota renovada con los últimos modelos y tecnología de seguridad.",
      flexible: "Horarios Flexibles",
      flexibleDesc:
        "Adaptamos los horarios a tus necesidades y disponibilidad.",
      expert: "Instructores Expertos",
      expertDesc:
        "Profesionales con años de experiencia y métodos de enseñanza eficaces.",
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
    heroBadge: "Driving school in Salou",
    heroTitle: "Autoescola Fran: your driving school in Salou",
    heroSubtitle:
      "Intensive courses and practical lessons to earn your license on the Costa Daurada.",
    heroDescription:
      "Experienced instructors who teach in English, Spanish and Catalan.",
    heroHighlights: [
      "Fast-track theory and driving lessons in Salou.",
      "Outstanding pass rates for official DGT exams.",
      "Trusted by local residents and international students.",
    ],
    heroImageAlt: "Autoescola Fran instructors with students in Salou",
    heroButton: "VIEW LICENSES",
    heroSecondaryButton: "Talk to us",
    quickAccessButton: "YOUR EXAM RESULTS",
    intensiveBanner: {
      title: "Intensive course from November 3rd to 7th.",
      schedule: "From 4:00 PM to 8:00 PM.",
      cta: "Reserve your spot.",
    },
    whyChooseUs: {
      title: "Why choose Autoescola Fran?",
      subtitle:
        "Instructors with extensive experience in Salou, the best market prices and exclusive offers for our students",
    },
    valueProps: {
      modern: "Modern Vehicles",
      modernDesc: "Renewed fleet with the latest models and safety technology.",
      flexible: "Flexible Schedules",
      flexibleDesc: "We adapt schedules to your needs and availability.",
      expert: "Expert Instructors",
      expertDesc:
        "Professionals with years of experience and effective teaching methods.",
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
    <div className="min-h-screen bg-black">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-black via-gray-950 to-black py-16">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <Badge className="w-fit bg-yellow-500/10 text-yellow-400 border border-yellow-400/40 uppercase tracking-[0.2em] px-4 py-1">
                {t.heroBadge}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
                {t.heroTitle}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-2xl">
                {t.heroSubtitle}
              </p>
              <p className="text-lg text-gray-300 max-w-2xl">
                {t.heroDescription}
              </p>
              <ul className="space-y-3 text-left">
                {t.heroHighlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3 text-gray-200"
                  >
                    <CheckCircle2 className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                <Link href="/permisos">
                  <Button className="bg-yellow-400 text-black hover:bg-yellow-500 shadow-[0_0_25px_rgba(250,204,21,0.35)] px-8 py-6 text-lg font-bold rounded-xl transition-transform hover:scale-[1.02]">
                    {t.heroButton}
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/contacte">
                  <Button
                    variant="outline"
                    className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 px-8 py-6 text-lg font-bold rounded-xl"
                  >
                    {t.heroSecondaryButton}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-tr from-yellow-500/25 via-yellow-500/10 to-transparent blur-3xl" />
              <Image
                src="/driving-school-team.png"
                alt={t.heroImageAlt}
                width={640}
                height={480}
                priority
                className="w-full rounded-[2.5rem] border border-yellow-500/20 object-cover shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Intensive Course Banner */}
      <section className="py-16 bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-400 relative overflow-hidden">
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
              <Button className="bg-gray-900 hover:bg-black text-white px-10 py-6 text-xl font-bold rounded-full shadow-[0_0_30px_rgba(0,0,0,0.8)] hover:shadow-[0_0_50px_rgba(0,0,0,0.9)] transform transition-all duration-300 hover:scale-110">
                {t.intensiveBanner.cta}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-12 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <a
            href="https://share.google/FiSu0qypsKD8coE2w"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block group"
          >
            <Button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black px-10 py-5 text-xl font-black rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-yellow-300">
              {t.quickAccessButton}
            </Button>
          </a>
        </div>
      </section>

      {/* Value Props Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          {/* Header and Subheader */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 md:whitespace-nowrap">
              {t.whyChooseUs.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              {t.whyChooseUs.subtitle}
            </p>
          </div>

          {/* Value Props Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group text-center p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl transition-all duration-300 border border-gray-700 hover:border-yellow-400 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <Car className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-yellow-400 transition-colors duration-300">
                {t.valueProps.modern}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {t.valueProps.modernDesc}
              </p>
            </div>
            <div className="group text-center p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl transition-all duration-300 border border-gray-700 hover:border-yellow-400 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <Clock className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-yellow-400 transition-colors duration-300">
                {t.valueProps.flexible}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {t.valueProps.flexibleDesc}
              </p>
            </div>
            <div className="group text-center p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl transition-all duration-300 border border-gray-700 hover:border-yellow-400 hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <Users className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-yellow-400 transition-colors duration-300">
                {t.valueProps.expert}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {t.valueProps.expertDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Licenses */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            {t.featuredLicenses}
          </h2>
          <div className="flex justify-center">
            <Card className="group transition-all duration-300 max-w-md w-full bg-gray-800 border border-gray-700 hover:border-yellow-400 hover:-translate-y-2 shadow-lg hover:shadow-2xl">
              <CardContent className="p-6">
                <div className="overflow-hidden rounded-lg mb-4">
                  <Image
                    src="/car-license-b-permit.png"
                    alt="Permís B"
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-white group-hover:text-yellow-400 transition-colors">
                  Permís B
                </h3>
                <p className="text-gray-300 mb-4">
                  Carnet de cotxe. El més sol·licitat per a vehicles fins a
                  3.500kg.
                </p>
                <Link href="/permisos">
                  <Button className="bg-yellow-400 hover:bg-yellow-500 text-black w-full font-bold transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105">
                    Més Informació
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            {t.testimonials}
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <Card className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 shadow-xl">
                <CardContent className="text-center">
                  <div className="flex justify-center mb-4 gap-1">
                    {[
                      ...Array(currentTestimonials[currentTestimonial].rating),
                    ].map((_, i) => (
                      <Star
                        key={i}
                        className="w-6 h-6 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-lg text-gray-200 mb-6 italic leading-relaxed">
                    "{currentTestimonials[currentTestimonial].text}"
                  </p>
                  <p className="font-semibold text-yellow-400">
                    - {currentTestimonials[currentTestimonial].name}
                  </p>
                </CardContent>
              </Card>
              <Button
                variant="outline"
                size="icon"
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 border-gray-700 text-yellow-400 hover:bg-gray-700 hover:border-yellow-400 transition-all duration-300"
                onClick={prevTestimonial}
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 border-gray-700 text-yellow-400 hover:bg-gray-700 hover:border-yellow-400 transition-all duration-300"
                onClick={nextTestimonial}
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">
              {t.locationTitle}
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              {t.locationDescription}
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden border border-gray-700">
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
              <div className="p-6 text-center bg-gray-800">
                <Button
                  className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 text-lg font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
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
      <section className="py-16 bg-black text-white border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">{t.finalCta}</h2>
          <Link href="/contacte">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 text-lg font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              {t.finalCtaButton}
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
