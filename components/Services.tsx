'use client';

import { Scale, FileText, Users, Home, Briefcase, Shield } from 'lucide-react';
import { useState } from 'react';

const services = [
  {
    icon: Scale,
    title: 'Personal Injury',
    description: 'Expert representation for accident victims seeking fair compensation for medical expenses, lost wages, and pain and suffering.',
    features: ['Car Accidents', 'Slip & Fall', 'Medical Malpractice', 'Wrongful Death']
  },
  {
    icon: Briefcase,
    title: 'Business Law',
    description: 'Comprehensive legal support for businesses of all sizes, from formation to contract disputes and litigation.',
    features: ['Contract Drafting', 'Business Formation', 'Dispute Resolution', 'Compliance']
  },
  {
    icon: Home,
    title: 'Real Estate Law',
    description: 'Protecting your interests in residential and commercial property transactions, disputes, and closings.',
    features: ['Property Transactions', 'Title Issues', 'Landlord/Tenant', 'Foreclosure Defense']
  },
  {
    icon: Users,
    title: 'Family Law',
    description: 'Compassionate guidance through divorce, custody, and family matters with focus on your family\'s best interests.',
    features: ['Divorce', 'Child Custody', 'Alimony', 'Mediation']
  },
  {
    icon: Shield,
    title: 'Criminal Defense',
    description: 'Aggressive defense of your rights with strategic representation for misdemeanor and felony charges.',
    features: ['DUI Defense', 'Drug Charges', 'Assault', 'Record Expungement']
  },
  {
    icon: FileText,
    title: 'Estate Planning',
    description: 'Secure your legacy and protect your loved ones with comprehensive wills, trusts, and estate administration.',
    features: ['Wills & Trusts', 'Probate', 'Power of Attorney', 'Asset Protection']
  }
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-light text-gray-900 mb-4">
            Comprehensive Legal Services
          </h2>
          <p className="text-lg text-gray-600 font-light">
            Dedicated representation across a full spectrum of legal matters. We bring decades of experience and a commitment to achieving the best possible outcome for every client.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isActive = activeIndex === index;
            
            return (
              <div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                className="group relative bg-gray-50 p-8 transition-all duration-300 hover:bg-primary-50"
              >
                <div className={`absolute inset-x-0 top-0 h-1 bg-primary-500 transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0'}`} />
                
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center transition-colors duration-300 group-hover:bg-primary-500">
                    <Icon className="w-6 h-6 text-primary-600 transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-600 font-light leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-500 mr-3 flex-shrink-0" />
                      <span className="font-light">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className={`mt-8 pt-6 border-t border-gray-200 opacity-0 transform translate-y-2 transition-all duration-300 ${isActive ? 'opacity-100 translate-y-0' : ''}`}>
                  <button className="text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors duration-200">
                    Learn More →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 bg-primary-500 p-12 lg:p-16">
          <div className="max-w-3xl">
            <h3 className="text-2xl font-light text-white mb-4">
              Need Legal Guidance?
            </h3>
            <p className="text-lg text-primary-50 font-light mb-8 leading-relaxed">
              Every case is unique, and we're here to listen. Schedule a consultation to discuss your situation and explore how we can help you navigate your legal challenges with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-medium hover:bg-primary-50 transition-colors duration-200"
              >
                Schedule Consultation
              </a>
              <a
                href="tel:+1-305-555-0100"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-medium hover:bg-white hover:text-primary-600 transition-colors duration-200"
              >
                Call (305) 555-0100
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}