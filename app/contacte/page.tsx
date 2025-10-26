'use client'

import { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { useLanguage } from '@/hooks/use-language'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { MapPin, Mail, MessageCircle, Clock, Phone } from 'lucide-react'

const translations = {
  ca: {
    title: "Contacta amb Autoescola Fran",
    subtitle: "Estem aquí per ajudar-te amb qualsevol dubte",
    contactInfo: "Informació de Contacte",
    address: "Adreça",
    addressText: "Calle Barcelona 35, local 3\n43840 Salou, Tarragona",
    email: "Correu Electrònic",
    landline: "Telèfon Fix",
    landlineText: "977 017 165",
    whatsapp: "WhatsApp",
    whatsappText: "610 777 027",
    schedule: "Horari d'Oficina",
    scheduleText: "Horari d'oficina: 10:00 - 14:00 i 16:00 - 20:00\nClasses teòriques: 10:00 i 18:00 de dilluns a divendres\nCursos intensius de teòrica cada mes",
    contactForm: "Formulari de Contacte",
    name: "Nom complet",
    phone: "Telèfon",
    subject: "Assumpte",
    message: "Missatge",
    send: "Enviar Missatge",
    location: "La nostra ubicació"
  },
  es: {
    title: "Contacta con Autoescola Fran",
    subtitle: "Estamos aquí para ayudarte con cualquier duda",
    contactInfo: "Información de Contacto",
    address: "Dirección",
    addressText: "Calle Barcelona 35, local 3\n43840 Salou, Tarragona",
    email: "Correo Electrónico",
    landline: "Teléfono Fijo",
    landlineText: "977 017 165",
    whatsapp: "WhatsApp", 
    whatsappText: "610 777 027",
    schedule: "Horario de Oficina",
    scheduleText: "Horario de oficina: 10:00 - 14:00 y 16:00 - 20:00\nClases teóricas: 10:00 y 18:00 de lunes a viernes\nCursos intensivos de teórica cada mes",
    contactForm: "Formulario de Contacto",
    name: "Nombre completo",
    phone: "Teléfono",
    subject: "Asunto",
    message: "Mensaje",
    send: "Enviar Mensaje",
    location: "Nuestra ubicación"
  },
  en: {
    title: "Contact Autoescola Fran",
    subtitle: "We're here to help you with any questions",
    contactInfo: "Contact Information",
    address: "Address",
    addressText: "Calle Barcelona 35, local 3\n43840 Salou, Tarragona",
    email: "Email",
    landline: "Landline",
    landlineText: "977 017 165",
    whatsapp: "WhatsApp",
    whatsappText: "610 777 027",
    schedule: "Office Hours",
    scheduleText: "Office hours: 10:00 - 14:00 and 16:00 - 20:00\nTheory classes: 10:00 and 18:00 Monday to Friday\nIntensive theory courses every month",
    contactForm: "Contact Form",
    name: "Full name",
    phone: "Phone",
    subject: "Subject",
    message: "Message",
    send: "Send Message",
    location: "Our location"
  }
}

export default function ContactPage() {
  const { language } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  
  const t = translations[language]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

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

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">{t.contactInfo}</h2>
              
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-red-600 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">{t.address}</h3>
                        <p className="text-gray-600 whitespace-pre-line">{t.addressText}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Mail className="w-6 h-6 text-red-600 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">{t.email}</h3>
                        <a 
                          href="mailto:autoescolafransalou@gmail.com"
                          className="text-red-600 hover:text-red-700 transition-colors"
                        >
                          autoescolafransalou@gmail.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Phone className="w-6 h-6 text-red-600 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">{t.landline}</h3>
                        <p className="text-gray-600">{t.landlineText}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <MessageCircle className="w-6 h-6 text-red-600 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">{t.whatsapp}</h3>
                        <a 
                          href="https://wa.me/34610777027"
                          className="text-red-600 hover:text-red-700 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {t.whatsappText}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Clock className="w-6 h-6 text-red-600 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">{t.schedule}</h3>
                        <p className="text-gray-600 whitespace-pre-line">{t.scheduleText}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">{t.contactForm}</h2>
              
              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        {t.name}
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        {t.email}
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        {t.phone}
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        {t.subject}
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        {t.message}
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full"
                      />
                    </div>

                    <Button 
                      type="submit"
                      className="bg-red-600 hover:bg-red-700 text-white w-full py-3"
                    >
                      {t.send}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">{t.location}</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.8!2d1.1310763!3d41.0784008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a15baea7a6e4c5%3A0xee1cd0fb3d0d334f!2sAUTOESCOLA%20FRAN.%20En%20Salou.!5e0!3m2!1ses!2ses!4v1640995200000"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Autoescola Fran - Calle Barcelona 35, local 3, Salou"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
