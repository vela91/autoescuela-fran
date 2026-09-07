'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import GoogleMapEmbed from '@/components/google-map-embed'
import { useLanguage } from '@/hooks/use-language'
import { contactFormClause, LEGAL_ROUTES } from '@/lib/legal-content'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { MapPin, Mail, MessageCircle, Clock, Phone, Loader2, CheckCircle, AlertCircle } from 'lucide-react'

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
    contactForm: "Formulari de Contacte",
    name: "Nom complet",
    phone: "Telèfon",
    subject: "Assumpte",
    message: "Missatge",
    send: "Enviar Missatge",
    sending: "Enviant...",
    success: "Missatge enviat correctament! Et respondrem aviat.",
    error: "Error enviant el missatge. Si us plau, intenta-ho més tard.",
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
    contactForm: "Formulario de Contacto",
    name: "Nombre completo",
    phone: "Teléfono",
    subject: "Asunto",
    message: "Mensaje",
    send: "Enviar Mensaje",
    sending: "Enviando...",
    success: "¡Mensaje enviado correctamente! Te responderemos pronto.",
    error: "Error al enviar el mensaje. Por favor, inténtalo más tarde.",
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
    contactForm: "Contact Form",
    name: "Full name",
    phone: "Phone",
    subject: "Subject",
    message: "Message",
    send: "Send Message",
    sending: "Sending...",
    success: "Message sent successfully! We'll respond soon.",
    error: "Error sending message. Please try again later.",
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
  const [privacyAccepted, setPrivacyAccepted] = useState(false)
  const [marketingConsent, setMarketingConsent] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const t = translations[language]
  const legal = contactFormClause[language]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!privacyAccepted) return
    setIsLoading(true)
    setSubmitStatus('idle')

    try {
      // Enviar los datos a la API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, privacyAccepted, marketingConsent })
      })

      if (response.ok) {
        setSubmitStatus('success')
        // Limpiar el formulario
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        })
        setPrivacyAccepted(false)
        setMarketingConsent(false)
        // Ocultar el mensaje de éxito después de 5 segundos
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        setSubmitStatus('error')
        // Ocultar el mensaje de error después de 5 segundos
        setTimeout(() => setSubmitStatus('idle'), 5000)
      }
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
      // Ocultar el mensaje de error después de 5 segundos
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

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

      {/* Contact Content */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">{t.contactInfo}</h2>
              
              <div className="space-y-6">
                <Card className="bg-gray-800 border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-yellow-400 mt-1" />
                      <div>
                        <h3 className="font-semibold text-white mb-2">{t.address}</h3>
                        <p className="text-gray-300 whitespace-pre-line">{t.addressText}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800 border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Mail className="w-6 h-6 text-yellow-400 mt-1" />
                      <div>
                        <h3 className="font-semibold text-white mb-2">{t.email}</h3>
                        <a
                          href="mailto:autoescolafransalou@gmail.com"
                          className="text-yellow-400 hover:text-yellow-500 transition-colors"
                        >
                          autoescolafransalou@gmail.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800 border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Phone className="w-6 h-6 text-yellow-400 mt-1" />
                      <div>
                        <h3 className="font-semibold text-white mb-2">{t.landline}</h3>
                        <p className="text-gray-300">{t.landlineText}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800 border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <MessageCircle className="w-6 h-6 text-yellow-400 mt-1" />
                      <div>
                        <h3 className="font-semibold text-white mb-2">{t.whatsapp}</h3>
                        <a
                          href="https://wa.me/34610777027"
                          className="text-yellow-400 hover:text-yellow-500 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {t.whatsappText}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">{t.contactForm}</h2>

              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
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
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
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
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
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
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
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

                    {/* Información y consentimiento (LSSI / RGPD) */}
                    <div className="space-y-4 border-t border-gray-700 pt-6">
                      <p className="text-xs text-gray-400 leading-relaxed">{legal.info}</p>

                      <label
                        htmlFor="privacyAccepted"
                        className="flex items-start gap-3 text-sm text-gray-300 cursor-pointer"
                      >
                        <input
                          id="privacyAccepted"
                          name="privacyAccepted"
                          type="checkbox"
                          required
                          checked={privacyAccepted}
                          onChange={(e) => setPrivacyAccepted(e.target.checked)}
                          className="mt-1 h-4 w-4 shrink-0 accent-yellow-400"
                        />
                        <span>
                          {legal.privacyLabel}{' '}
                          <Link
                            href={LEGAL_ROUTES.privacy}
                            target="_blank"
                            className="text-yellow-400 underline hover:text-yellow-300 transition-colors"
                          >
                            {legal.privacyLink}
                          </Link>
                          <span className="text-red-400"> *</span>
                        </span>
                      </label>

                      <label
                        htmlFor="marketingConsent"
                        className="flex items-start gap-3 text-sm text-gray-300 cursor-pointer"
                      >
                        <input
                          id="marketingConsent"
                          name="marketingConsent"
                          type="checkbox"
                          checked={marketingConsent}
                          onChange={(e) => setMarketingConsent(e.target.checked)}
                          className="mt-1 h-4 w-4 shrink-0 accent-yellow-400"
                        />
                        <span>{legal.marketingLabel}</span>
                      </label>
                    </div>

                    {/* Mensajes de feedback */}
                    {submitStatus === 'success' && (
                      <div className="bg-green-900/20 border border-green-500 rounded-lg p-4 flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <p className="text-green-400 text-sm">{t.success}</p>
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="bg-red-900/20 border border-red-500 rounded-lg p-4 flex items-center gap-3">
                        <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                        <p className="text-red-400 text-sm">{t.error}</p>
                      </div>
                    )}

                    {!privacyAccepted && (
                      <p className="text-xs text-gray-500">{legal.privacyRequired}</p>
                    )}

                    <Button
                      type="submit"
                      disabled={isLoading || !privacyAccepted}
                      className="bg-yellow-400 hover:bg-yellow-500 text-black w-full py-3 font-bold shadow-lg hover:shadow-yellow-400/50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <span className="flex items-center justify-center gap-2">
                          <Loader2 className="w-4 h-4 animate-spin" />
                          {t.sending}
                        </span>
                      ) : (
                        t.send
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-8">{t.location}</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900 rounded-lg shadow-2xl overflow-hidden border-2 border-gray-800">
              <GoogleMapEmbed height={450} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
