'use client'

import Image from 'next/image'
import { Scale, Users, Award, Clock } from 'lucide-react'

export default function About() {
  const stats = [
    { icon: Scale, value: '25+', label: 'Years of Legal Excellence' },
    { icon: Users, value: '1000+', label: 'Cases Successfully Resolved' },
    { icon: Award, value: '98%', label: 'Client Satisfaction Rate' },
    { icon: Clock, value: '24/7', label: 'Available for Urgent Matters' }
  ]

  const values = [
    {
      title: 'Personalized Attention',
      description: 'Every case receives dedicated focus. We limit our caseload to ensure you get the time and attention your legal matter deserves.'
    },
    {
      title: 'Proven Track Record',
      description: 'Decades of successful outcomes across diverse legal areas. Our results speak to our commitment to excellence and client advocacy.'
    },
    {
      title: 'Clear Communication',
      description: 'Legal matters should never feel mysterious. We explain every step in plain language, keeping you informed and empowered throughout the process.'
    }
  ]

  return (
    <section id="about" className="relative bg-white">
      {/* Hero Image Section */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <Image
          src="/images/about-background-1770749962244.png"
          alt="Anthony L Law Offices - Professional legal representation in Miami Beach"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-white" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-16 md:px-12 md:pb-20 max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4">
            Our Story
          </h2>
          <p className="text-lg md:text-xl text-white/90 font-light max-w-2xl">
            Building trust through excellence in legal representation since 1998
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group transition-transform duration-300 hover:scale-105"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-50 text-primary-500 mb-4 group-hover:bg-primary-100 transition-colors">
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-3xl md:text-4xl font-light text-primary-500 mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-gray-600 font-light">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Story Content */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 mb-24">
          <div>
            <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              Trusted Legal Partner in Miami Beach
            </h3>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg font-light">
                For over two decades, Anthony L Law Offices has been a cornerstone of legal excellence in Miami Beach. Founded on the principle that every client deserves unwavering dedication and personalized representation, we've built our reputation one successful case at a time.
              </p>
              <p className="font-light">
                Our approach is different. We don't see you as just another case number. When you walk through our doors, you become part of our commitment to justice. We take the time to understand your unique situation, concerns, and goals, crafting legal strategies that align with your specific needs.
              </p>
              <p className="font-light">
                Led by founder Anthony L, our team brings together decades of courtroom experience with a genuine passion for advocacy. We've navigated complex litigation, negotiated favorable settlements, and stood beside clients during their most challenging moments. Our track record isn't just about wins—it's about the relationships we've built and the peace of mind we've provided.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              Our Commitment to You
            </h3>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg font-light">
                In an industry often perceived as impersonal and intimidating, we pride ourselves on being different. Our clients consistently describe us as approachable, responsive, and genuinely invested in their outcomes.
              </p>
              <p className="font-light">
                We believe that exceptional legal representation shouldn't come with confusion or uncertainty. From your first consultation to the resolution of your case, we maintain transparent communication. You'll always know where your case stands, what options are available, and what steps we're taking on your behalf.
              </p>
              <p className="font-light">
                Whether you're facing a complex legal dispute, planning for your family's future, or seeking guidance through unfamiliar legal terrain, Anthony L Law Offices stands ready to serve. We limit our caseload intentionally, ensuring every client receives the focused attention their matter deserves.
              </p>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div>
          <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center">
            What Sets Us Apart
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 transition-all duration-300 hover:shadow-md hover:bg-white"
              >
                <h4 className="text-xl font-normal text-primary-500 mb-4">
                  {value.title}
                </h4>
                <p className="text-gray-600 font-light leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-primary-50 py-16">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">
            Ready to discuss your legal needs?
          </h3>
          <p className="text-gray-600 font-light mb-8">
            Schedule a consultation and experience the difference personalized legal representation makes.
          </p>
          <a
            href="#contact"
            className="inline-block bg-accent-500 text-white px-8 py-4 font-normal hover:bg-accent-600 transition-colors"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  )
}