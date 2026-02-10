'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Scale, Phone, ArrowRight } from 'lucide-react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-50 to-primary-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,116,56,0.03),transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 lg:py-40">
        <div className="max-w-4xl">
          <div
            className={`transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="inline-flex items-center gap-2 mb-8 text-primary-600">
              <Scale className="w-5 h-5" />
              <span className="text-sm font-medium tracking-wide uppercase">Anthony L Law Offices</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light leading-[1.1] text-gray-900 mb-8">
              Trusted legal representation in{' '}
              <span className="font-semibold text-primary-700">Miami Beach</span>
            </h1>

            <p className="text-xl sm:text-2xl font-light text-gray-600 mb-12 max-w-3xl leading-relaxed">
              Personalized attention and proven results for your case. Experience legal excellence backed by years of dedication to client success.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <a
                href="tel:+13058683363"
                className="inline-flex items-center gap-3 bg-accent-500 text-white px-8 py-4 rounded-md font-medium shadow-sm hover:bg-accent-600 hover:shadow-md transition-all duration-200 hover:scale-[1.02]"
              >
                <Phone className="w-5 h-5" />
                Call Now: +1 305-868-3363
              </a>

              <Link
                href="#features"
                className="inline-flex items-center gap-2 text-primary-700 px-8 py-4 rounded-md font-medium hover:bg-primary-100/50 transition-all duration-200 group"
              >
                Learn More
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>

          <div
            className={`mt-20 pt-12 border-t border-primary-200/50 transition-all duration-1000 delay-300 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl">
              <div>
                <div className="text-3xl font-semibold text-primary-700 mb-2">20+</div>
                <div className="text-sm font-light text-gray-600">Years of Experience</div>
              </div>
              <div>
                <div className="text-3xl font-semibold text-primary-700 mb-2">1,000+</div>
                <div className="text-sm font-light text-gray-600">Cases Won</div>
              </div>
              <div>
                <div className="text-3xl font-semibold text-primary-700 mb-2">98%</div>
                <div className="text-sm font-light text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-300 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-primary-400 rounded-full" />
        </div>
      </div>
    </section>
  )
}