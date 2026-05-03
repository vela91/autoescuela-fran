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
  Bike,
  Calendar,
  Car,
  CheckCircle2,
  Clock,
  Users,
  Star,
  ChevronLeft,
  ChevronRight,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const translations = {
  ca: {
    heroBadge: "Autoescola a Salou",
    heroTitle: "Autoescola Fran: la teva autoescola a Salou",
    heroSubtitle:
      "Cursos intensius i classes pràctiques per obtenir el carnet de conduir a la Costa Daurada.",
    heroHighlights: [
      "Curs intensiu, classes teòriques i pràctiques al cor de Salou.",
      "Resultats excel·lents als exàmens oficials de la DGT.",
      "Autoescola recomanada per antics alumnes.",
    ],
    heroImageAlt: "Flota de cotxes d'Autoescola Fran a Salou",
    heroButton: "VEURE PERMISOS",
    heroSecondaryButton: "Parla amb nosaltres",
    quickAccessButton: "TEVES NOTES D'EXAMEN",
    intensiveBanner: {
      title: "Curs intensiu maig - 16h a 20h",
      cta: "Reserva la teva plaça",
    },
    intensiveCourse: {
      label: "Oferta activa",
      title: "Curs intensiu",
      monthLabel: "Mes",
      monthValue: "Maig",
      scheduleLabel: "Horari",
      scheduleValue: "16h - 20h",
      placesLabel: "Places",
      placesValue: "Limitades",
      cta: "Reserva la teva plaça",
    },
    automaticCarBanner: {
      title: "Automàtic",
      description: "",
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
    licenseCards: {
      comingSoonHeading: "Pròximament",
      newBadge: "Novetat!",
      available: "Ja disponible",
      cta: "Més Informació",
      bTitle: "Permís B",
      bDescription: "Carnet de cotxe. Per a vehicles fins a 3.500kg.",
      bAge: "18 anys",
      a2Title: "Permís A2",
      a2Description: "Motos fins 35kW. Ja autoritzat.",
      a2Age: "18 anys",
      amTitle: "Permís AM",
      amDescription: "Ciclomotor 50cc.",
      amAge: "15 anys",
      a1Title: "Permís A1",
      a1Description: "Motos fins 125cc.",
      a1Age: "16 anys",
      aTitle: "Permís A",
      aDescription: "Sense límit de cilindrada. +2 anys del A2.",
      aAge: "20 anys",
    },
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
    heroHighlights: [
      "Curso intensivo, clases teóricas y prácticas en Salou.",
      "Alto índice de aprobados en los exámenes oficiales de la DGT.",
      "Autoescuela recomendada por antiguos alumnos.",
    ],
    heroImageAlt: "Flota de coches de Autoescola Fran en Salou",
    heroButton: "VER PERMISOS",
    heroSecondaryButton: "Habla con nosotros",
    quickAccessButton: "TUS NOTAS DE EXAMEN",
    intensiveBanner: {
      title: "Curso intensivo mayo - 16h a 20h",
      cta: "Reserva tu plaza",
    },
    intensiveCourse: {
      label: "Oferta activa",
      title: "Curso intensivo",
      monthLabel: "Mes",
      monthValue: "Mayo",
      scheduleLabel: "Horario",
      scheduleValue: "16h - 20h",
      placesLabel: "Plazas",
      placesValue: "Limitadas",
      cta: "Reserva tu plaza",
    },
    automaticCarBanner: {
      title: "Automático",
      description: "",
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
    licenseCards: {
      comingSoonHeading: "Próximamente",
      newBadge: "¡Novedad!",
      available: "Ya disponible",
      cta: "Más Información",
      bTitle: "Permiso B",
      bDescription: "Carnet de coche. Para vehículos hasta 3.500kg.",
      bAge: "18 años",
      a2Title: "Permiso A2",
      a2Description: "Motos hasta 35kW. Ya autorizado.",
      a2Age: "18 años",
      amTitle: "Permiso AM",
      amDescription: "Ciclomotor 50cc.",
      amAge: "15 años",
      a1Title: "Permiso A1",
      a1Description: "Motos hasta 125cc.",
      a1Age: "16 años",
      aTitle: "Permiso A",
      aDescription: "Sin límite de cilindrada. +2 años del A2.",
      aAge: "20 años",
    },
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
    heroHighlights: [
      "Fast-track theory and driving lessons in Salou.",
      "Outstanding pass rates for official DGT exams.",
      "Recommended by former students.",
    ],
    heroImageAlt: "Autoescola Fran driving school fleet in Salou",
    heroButton: "VIEW LICENSES",
    heroSecondaryButton: "Talk to us",
    quickAccessButton: "YOUR EXAM RESULTS",
    intensiveBanner: {
      title: "May intensive course - 4pm to 8pm",
      cta: "Reserve your spot",
    },
    intensiveCourse: {
      label: "Active offer",
      title: "Intensive course",
      monthLabel: "Month",
      monthValue: "May",
      scheduleLabel: "Schedule",
      scheduleValue: "4pm - 8pm",
      placesLabel: "Spots",
      placesValue: "Limited",
      cta: "Reserve your spot",
    },
    automaticCarBanner: {
      title: "Automatic",
      description: "",
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
    licenseCards: {
      comingSoonHeading: "Coming soon",
      newBadge: "New!",
      available: "Now available",
      cta: "More Info",
      bTitle: "Class B",
      bDescription: "Car license. Vehicles up to 3,500kg.",
      bAge: "18 years",
      a2Title: "Class A2",
      a2Description: "Motorcycles up to 35kW. Now licensed.",
      a2Age: "18 years",
      amTitle: "Class AM",
      amDescription: "50cc moped.",
      amAge: "15 years",
      a1Title: "Class A1",
      a1Description: "Motorcycles up to 125cc.",
      a1Age: "16 years",
      aTitle: "Class A",
      aDescription: "No engine displacement limit. +2 years from A2.",
      aAge: "20 years",
    },
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

      {/* Hero Section - Full screen cinematic */}
      <section className="relative min-h-[90dvh] w-full overflow-hidden">
        <Image
          src="/hero-flota-autoescola-fran.webp"
          alt={t.heroImageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Top-only darkening so title + buttons stay readable; rest of photo untouched */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/15 to-transparent" />
        {/* Vertical fade at the bottom to integrate with next section */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-black/80" />

        <div className="relative z-10 container mx-auto px-4 min-h-[90dvh] flex flex-col items-center text-center justify-start pt-20 md:pt-28 pb-16">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] mb-8 drop-shadow-[0_6px_30px_rgba(0,0,0,0.95)] [text-shadow:_0_2px_20px_rgba(0,0,0,0.85)]">
            Autoescola <span className="text-yellow-400">Fran</span>
          </h1>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Link href="/permisos">
              <Button className="bg-yellow-400 text-black hover:bg-yellow-500 px-6 py-3 text-sm font-bold rounded-lg transition-all uppercase tracking-wider shadow-md">
                {t.heroButton}
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
            <Link href="/contacte" className="sm:ml-12">
              <Button
                variant="ghost"
                className="text-white hover:text-yellow-400 hover:bg-white/5 px-6 py-3 text-sm font-bold rounded-lg uppercase tracking-wider border border-white/30 hover:border-yellow-400/60"
              >
                {t.heroSecondaryButton}
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-yellow-400/70 animate-bounce">
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold">
            Scroll
          </span>
          <ChevronRight className="h-5 w-5 rotate-90" />
        </div>
      </section>

      {/* Intensive Course — floating data card */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-gradient-to-br from-gray-900 to-gray-950 border-2 border-yellow-400 shadow-[0_0_60px_rgba(250,204,21,0.15)] hover:shadow-[0_0_80px_rgba(250,204,21,0.25)] transition-all duration-500">
              <CardContent className="p-8 md:p-12">
                {/* Top label row */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="inline-flex items-center bg-yellow-400 text-black text-[11px] font-black uppercase tracking-[0.3em] px-3 py-1.5 rounded-full">
                    {t.intensiveCourse.label}
                  </span>
                  <div className="h-px flex-1 bg-yellow-400/30" />
                </div>

                {/* Title */}
                <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">
                  {t.intensiveCourse.title}
                </h2>

                {/* Data grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-black/50 rounded-xl p-4 border border-gray-800">
                    <Calendar className="w-5 h-5 text-yellow-400 mb-2" />
                    <div className="text-[11px] text-gray-400 uppercase tracking-wider mb-1">
                      {t.intensiveCourse.monthLabel}
                    </div>
                    <div className="text-lg font-bold text-white">
                      {t.intensiveCourse.monthValue}
                    </div>
                  </div>
                  <div className="bg-black/50 rounded-xl p-4 border border-gray-800">
                    <Clock className="w-5 h-5 text-yellow-400 mb-2" />
                    <div className="text-[11px] text-gray-400 uppercase tracking-wider mb-1">
                      {t.intensiveCourse.scheduleLabel}
                    </div>
                    <div className="text-lg font-bold text-white">
                      {t.intensiveCourse.scheduleValue}
                    </div>
                  </div>
                  <div className="bg-black/50 rounded-xl p-4 border border-gray-800 col-span-2 md:col-span-1">
                    <Users className="w-5 h-5 text-yellow-400 mb-2" />
                    <div className="text-[11px] text-gray-400 uppercase tracking-wider mb-1">
                      {t.intensiveCourse.placesLabel}
                    </div>
                    <div className="text-lg font-bold text-white">
                      {t.intensiveCourse.placesValue}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <Link href="/contacte">
                  <Button className="bg-yellow-400 hover:bg-yellow-500 text-black w-full md:w-auto px-10 py-6 text-base font-black rounded-xl shadow-md uppercase tracking-wider transition-all hover:scale-[1.02]">
                    {t.intensiveCourse.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Automatic Car Banner — tall, photo-first, pill anchored to the road on the right */}
      <section className="relative min-h-[70vh] md:min-h-[85vh] overflow-hidden border-y-4 border-yellow-400">
        <Image
          src="/banner-cotxe-automatic.webp"
          alt={t.automaticCarBanner.title}
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Subtle bottom shade so the pill reads against the road */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />

        {/* Pill anchored to the bottom-right — sits on the road */}
        <div className="absolute right-6 md:right-12 lg:right-20 bottom-10 md:bottom-14 z-10">
          <div className="inline-flex items-center gap-3 bg-yellow-400 text-black rounded-full px-7 py-3.5 shadow-[0_15px_45px_rgba(0,0,0,0.55),0_0_50px_rgba(250,204,21,0.5)]">
            <Car className="w-5 h-5" strokeWidth={2.5} />
            <span className="text-sm md:text-base font-black uppercase tracking-[0.35em]">
              {t.automaticCarBanner.title}
            </span>
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

          {/* Available licenses */}
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-14">
            <Card className="group transition-all duration-300 bg-gray-800 border border-gray-700 hover:border-yellow-400 hover:-translate-y-2 shadow-lg hover:shadow-2xl">
              <CardContent className="p-6">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <Image
                    src="/permis-b-vw-polo.webp"
                    alt={t.licenseCards.bTitle}
                    width={1400}
                    height={933}
                    className="w-full h-56 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    {t.licenseCards.available}
                  </span>
                </div>
                <div className="flex items-baseline justify-between mb-2 gap-3">
                  <h3 className="text-2xl font-semibold text-white group-hover:text-yellow-400 transition-colors">
                    {t.licenseCards.bTitle}
                  </h3>
                  <span className="text-sm font-bold text-yellow-400 whitespace-nowrap">
                    {t.licenseCards.bAge}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">
                  {t.licenseCards.bDescription}
                </p>
                <Link href="/permisos">
                  <Button className="bg-yellow-400 hover:bg-yellow-500 text-black w-full font-bold transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105">
                    {t.licenseCards.cta}
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group transition-all duration-300 bg-gray-800 border-2 border-yellow-400/50 hover:border-yellow-400 hover:-translate-y-2 shadow-lg shadow-yellow-400/10 hover:shadow-2xl hover:shadow-yellow-400/20">
              <CardContent className="p-6">
                <div className="relative overflow-hidden rounded-lg mb-4 bg-gradient-to-br from-gray-50 to-gray-200">
                  <Image
                    src="/permis-a2-kawasaki.webp"
                    alt={t.licenseCards.a2Title}
                    width={1200}
                    height={900}
                    className="w-full h-56 object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    {t.licenseCards.available}
                  </span>
                  <span className="absolute top-3 right-3 inline-flex items-center bg-yellow-400 text-black text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-lg animate-pulse">
                    {t.licenseCards.newBadge}
                  </span>
                </div>
                <div className="flex items-baseline justify-between mb-2 gap-3">
                  <h3 className="text-2xl font-semibold text-white group-hover:text-yellow-400 transition-colors">
                    {t.licenseCards.a2Title}
                  </h3>
                  <span className="text-sm font-bold text-yellow-400 whitespace-nowrap">
                    {t.licenseCards.a2Age}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">
                  {t.licenseCards.a2Description}
                </p>
                <Link href="/permisos">
                  <Button className="bg-yellow-400 hover:bg-yellow-500 text-black w-full font-bold transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105">
                    {t.licenseCards.cta}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Coming soon licenses */}
          <div className="max-w-5xl mx-auto">
            <h3 className="text-base md:text-lg text-yellow-400 text-center mb-6 uppercase tracking-[0.25em] font-bold">
              {t.licenseCards.comingSoonHeading}
            </h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  src: "/permis-am-yamaha-neos.webp",
                  title: t.licenseCards.amTitle,
                  description: t.licenseCards.amDescription,
                  age: t.licenseCards.amAge,
                },
                {
                  src: "/permis-a1-honda.webp",
                  title: t.licenseCards.a1Title,
                  description: t.licenseCards.a1Description,
                  age: t.licenseCards.a1Age,
                },
                {
                  src: "/permis-a-yamaha-mt07.webp",
                  title: t.licenseCards.aTitle,
                  description: t.licenseCards.aDescription,
                  age: t.licenseCards.aAge,
                },
              ].map((item) => (
                <Card
                  key={item.title}
                  className="group transition-all duration-300 bg-gray-800/60 border border-gray-700 hover:border-yellow-400/60 hover:-translate-y-1 shadow-md"
                >
                  <CardContent className="p-4">
                    <div className="relative overflow-hidden rounded-lg mb-3 bg-gradient-to-br from-gray-50 to-gray-200">
                      <Image
                        src={item.src}
                        alt={item.title}
                        width={1200}
                        height={900}
                        className="w-full h-40 object-contain p-2 grayscale-[0.2] transition-all duration-300 group-hover:grayscale-0 group-hover:scale-105"
                      />
                      <span className="absolute top-2 left-2 inline-flex items-center bg-yellow-400 text-black text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-md">
                        {t.licenseCards.comingSoonHeading}
                      </span>
                    </div>
                    <div className="flex items-baseline justify-between gap-2 mb-1">
                      <h4 className="text-lg font-semibold text-white group-hover:text-yellow-400 transition-colors">
                        {item.title}
                      </h4>
                      <span className="text-xs font-bold text-yellow-400 whitespace-nowrap">
                        {item.age}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
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
