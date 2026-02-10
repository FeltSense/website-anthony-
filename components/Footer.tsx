import Link from 'next/link';
import { Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold text-xl mb-4">
              Anthony L Law Offices
            </h3>
            <p className="text-gray-400 leading-relaxed max-w-md mb-6">
              Trusted legal representation in Miami Beach with personalized attention and proven results for your case.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-medium text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <nav className="space-y-3">
              <Link
                href="#services"
                className="block text-gray-400 hover:text-primary-400 transition-colors duration-200"
              >
                Services
              </Link>
              <Link
                href="#about"
                className="block text-gray-400 hover:text-primary-400 transition-colors duration-200"
              >
                About
              </Link>
              <Link
                href="#contact"
                className="block text-gray-400 hover:text-primary-400 transition-colors duration-200"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-medium text-sm uppercase tracking-wider mb-4">
              Contact
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+13058683363"
                className="flex items-start gap-3 text-gray-400 hover:text-primary-400 transition-colors duration-200 group"
              >
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>+1 305-868-3363</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <address className="not-italic">
                  800 71st St, Miami Beach,
                  <br />
                  FL 33141, USA
                </address>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} Anthony L Law Offices. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-gray-500 hover:text-primary-400 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-500 hover:text-primary-400 transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}