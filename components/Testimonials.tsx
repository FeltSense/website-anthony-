'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  image: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Anthony and his team handled my personal injury case with exceptional professionalism. They kept me informed every step of the way and secured a settlement that exceeded my expectations. I couldn't have asked for better representation.",
    name: "Maria Rodriguez",
    role: "Personal Injury Client",
    image: "/images/testimonial-testimonials-0-1770749942305.jpg",
    rating: 5
  },
  {
    id: 2,
    quote: "When I needed legal guidance for my business, Anthony provided clear, practical advice that protected my interests. His expertise and attention to detail gave me confidence during a stressful time. Highly recommend his services.",
    name: "James Mitchell",
    role: "Business Law Client",
    image: "/images/testimonial-testimonials-0-1770749956856.jpg",
    rating: 5
  },
  {
    id: 3,
    quote: "After my accident, I was overwhelmed with medical bills and insurance claims. Anthony took the burden off my shoulders and fought for every dollar I deserved. His dedication to my case was remarkable.",
    name: "Sarah Chen",
    role: "Auto Accident Client",
    image: "/images/testimonial-testimonials-0-1770749957907.jpg",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 font-light">
            Real results from real clients who trusted us with their cases
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 rounded-lg p-8 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-accent-500 text-accent-500"
                  />
                ))}
              </div>

              <blockquote className="mb-8">
                <p className="text-gray-700 leading-relaxed font-light">
                  "{testimonial.quote}"
                </p>
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600 font-light">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 font-light mb-6">
            Join hundreds of satisfied clients who achieved successful outcomes
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 transition-colors duration-200"
          >
            Schedule Your Consultation
          </a>
        </div>
      </div>
    </section>
  );
}