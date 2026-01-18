import { Link } from 'react-router-dom'
import { Mail, Phone, MessageCircle, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <img 
              src="https://zeroaitech.tech/logo.png" 
              alt="ZeroAI Technologies" 
              className="h-10 w-auto mb-4"
              onError={(e) => {
                e.target.style.display = 'none'
              }}
            />
            <h3 className="text-white font-bold text-lg mb-3">ZeroAI Technologies</h3>
            <p className="text-sm">
              Your trusted partner for CT University admissions. We help Zambian students achieve their dream of studying in India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-primary-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="hover:text-primary-400 transition-colors">Programs</Link></li>
              <li><Link to="/apply" className="hover:text-primary-400 transition-colors">Apply Now</Link></li>
              <li><Link to="/blog" className="hover:text-primary-400 transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-primary-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact ZeroAI</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <a href="mailto:applications@zeroaitech.tech" className="hover:text-primary-400">
                  applications@zeroaitech.tech
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:+917717347050" className="hover:text-primary-400 block">+91 77173 47050</a>
                  <a href="tel:+919779973945" className="hover:text-primary-400 block">+91 97799 73945</a>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <MessageCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                <a 
                  href="https://wa.me/917717347050" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary-400"
                >
                  WhatsApp: +91 77173 47050
                </a>
              </li>
            </ul>
          </div>

          {/* Important Notice */}
          <div>
            <h4 className="text-white font-semibold mb-4">Important Notice</h4>
            <div className="text-sm space-y-3">
              <p className="text-yellow-400">
                ⚠️ Only students applying through ZeroAI Technologies are eligible for the free tour.
              </p>
              <p>
                We never collect visa fees. Visa fees are paid directly to the Indian Embassy.
              </p>
              <p>
                Flight costs are your responsibility and subject to change.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>© {currentYear} ZeroAI Technologies. All rights reserved.</p>
          <p className="mt-2 text-gray-400">
            CT University Recruitment Portal | Empowering Zambian Students Since 2024
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer