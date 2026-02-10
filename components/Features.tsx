'use client'

import { Scale, MessageCircle, Award, MapPin, FileText, Heart } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export default function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const features = [
    {
      icon: Scale,
      title: 'Experienced Legal Expertise',
      description: 'Deep knowledge of Florida law with years of practice serving Miami Beach clients with comprehensive legal solutions.'
    },
    {
      icon: MessageCircle,
      title: 'Personalized Attention',
      description: 'Direct communication with your attorney throughout your case. No case managers—just dedicated, one-on-one legal counsel.'
    },
    {
      icon: Award,
      title: 'Proven Track Record',
      description: 'Strong history of favorable outcomes and successful case resolutions that protect our clients\' interests and rights.'
    },
    {
      icon: MapPin,
      title: 'Convenient Location',
      description: 'Proudly serving the Miami Beach community with accessible legal services right in your neighborhood.'
    },
    {
      icon: FileText,
      title: 'Free Consultation',
      description: 'Complimentary initial consultation to discuss your legal needs and explore your options without obligation.'
    },
    {
      icon: Heart,
      title: 'Compassionate Advocacy',
      description: 'We combine empathetic understanding with aggressive representation to fight for the best possible outcome in your case.'
    }
  ]

  return (
    <section id="features" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-20">
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
            Why Choose Anthony L Law Offices
          </h2>
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            Trusted legal representation built on experience, integrity, and genuine commitment to your success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative bg-white border border-gray-200 rounded-lg p-8 transition-all duration-300 hover:border-primary-500 hover:shadow-md"
              >
                <div className="mb-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg transition-all duration-300 ${
                    hoveredIndex === index 
                      ? 'bg-primary-500 text-white' 
                      : 'bg-primary-50 text-primary-500'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-sm">
          <Image
            src="/images/services-feature-1770749960755.png"
            alt="Professional legal services at Anthony L Law Offices in Miami Beach"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
            <p className="text-white text-lg lg:text-xl font-light max-w-2xl">
              Every case deserves careful attention and strategic expertise. We're here to guide you through the legal process with clarity and confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}