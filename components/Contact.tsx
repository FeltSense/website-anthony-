'use client'

import { useState } from 'react'
import { Phone, MapPin, Send, Loader2 } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    alert('Thank you for your message. We will contact you shortly.')
    setFormData({ name: '', phone: '', message: '' })
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 font-light">
            Schedule a consultation to discuss your legal needs. We're here to provide the experienced representation you deserve.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow text-gray-900"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow text-gray-900"
                  placeholder="(305) 555-0123"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow resize-none text-gray-900"
                  placeholder="Tell us about your legal matter..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent-500 hover:bg-accent-600 text-white font-medium py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="lg:pl-8">
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-10 space-y-8">
              <div>
                <h3 className="text-2xl font-light text-gray-900 mb-8">
                  Contact Information
                </h3>
              </div>

              <div className="space-y-6">
                <a 
                  href="tel:+13058683363"
                  className="flex items-start gap-4 group hover:opacity-70 transition-opacity"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500 mb-1">Phone</div>
                    <div className="text-lg text-gray-900 font-light">+1 305-868-3363</div>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500 mb-1">Office</div>
                    <div className="text-lg text-gray-900 font-light">
                      800 71st St, Miami Beach,<br />FL 33141, USA
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  Available for consultations Monday through Friday, 9:00 AM to 5:00 PM. Emergency cases accepted.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}