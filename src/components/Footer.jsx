import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, GraduationCap, Facebook, Twitter, Linkedin, Globe } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="w-8 h-8 text-primary-400" />
              <div>
                <h3 className="text-white font-bold text-lg">ZeroAI Technologies</h3>
                <p className="text-xs text-gray-400">Inc.</p>
              </div>
            </div>
            <p className="text-sm mb-4">
              Empowering Zambian students with world-class education opportunities in India through our CSR initiative.
            </p>
            <div className="flex space-x-3">
              <a href="https://zeroaitech.tech" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/lottie-mukuka-8b984110a" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-primary-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link to="/apply" className="hover:text-primary-400 transition-colors">Apply Now</Link></li>
              <li><Link to="/blog" className="hover:text-primary-400 transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-primary-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* CT University Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">CT University</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-primary-400" />
                <span>Ferozepur Road, Ludhiana, Punjab, India</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0 text-primary-400" />
                <div>
                  <div>+91-90413-30007</div>
                  <div>+91-99145-04901</div>
                  <div>+91-98148-80482</div>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0 text-primary-400" />
                <a href="mailto:international.admissions@ctgroup.in" className="hover:text-primary-400 transition-colors">
                  international.admissions@ctgroup.in
                </a>
              </li>
            </ul>
          </div>

          {/* Highlights */}
          <div>
            <h4 className="text-white font-semibold mb-4">Highlights</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start space-x-2">
                <span className="text-accent-400 font-bold">✓</span>
                <span>50% Tuition Scholarship</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-accent-400 font-bold">✓</span>
                <span>Free Airport Pickup</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-accent-400 font-bold">✓</span>
                <span>Free 3-Day India Tour</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-accent-400 font-bold">✓</span>
                <span>Visa & Flight Assistance</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-accent-400 font-bold">✓</span>
                <span>July 2026 Intake Open</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p className="mb-2">
            © {currentYear} ZeroAI Technologies Inc. All rights reserved. | Founded by <span className="text-primary-400 font-semibold">Lottie Mukuka</span>
          </p>
          <p className="text-gray-500 text-xs">
            A CSR Initiative to Empower Zambian Students | Study in India 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer