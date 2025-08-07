'use client'

import { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { MapPin, Mail, MessageCircle, Clock } from 'lucide-react'

const translations = {
  ca: {
    title: "Contacta amb Autoescola Fran",
    subtitle: "Estem aquí per ajudar-te amb qualsevol dubte",
    contactInfo: "Informació de Contacte",
    address: "Adreça",
    addressText: "Carrer Principal, 123\n43840 Salou, Tarragona",
    email: "Correu Electrònic",
    whatsapp: "WhatsApp",
    whatsappText: "(Número per definir)",
    schedule: "Horari d'Oficina",
    scheduleText: "Dilluns a Divendres: 9:00 - 19:00\nDissabtes: 9:00 - 14:00",
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
    addressText: "Calle Principal, 123\n43840 Salou, Tarragona",
    email: "Correo Electrónico",
    whatsapp: "WhatsApp", 
    whatsappText: "(Número por definir)",
    schedule: "Horario de Oficina",
    scheduleText: "Lunes a Viernes: 9:00 - 19:00\nSábados: 9:00 - 14:00",
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
    addressText: "Main Street, 123\n43840 Salou, Tarragona",
    email: "Email",
    whatsapp: "WhatsApp",
    whatsappText: "(Number to be defined)",
    schedule: "Office Hours",
    scheduleText: "Monday to Friday: 9:00 - 19:00\nSaturdays: 9:00 - 14:00",
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
  const [language, setLanguage] = useState<'ca' | 'es' | 'en'>('ca')
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
      <Header language={language} setLanguage={setLanguage} />
      
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
                      <MessageCircle className="w-6 h-6 text-red-600 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">{t.whatsapp}</h3>
                        <p className="text-gray-600">{t.whatsappText}</p>
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
            <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
              <p className="text-gray-600 text-lg">
                {/* Placeholder for Google Maps integration */}
                Mapa de Google Maps - Ubicació a Salou
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer language={language} />
    </div>
  )
}
