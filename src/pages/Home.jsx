import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  GraduationCap,
  Award,
  Plane,
  Clock,
  MapPin,
  Heart,
  CheckCircle2,
  FileText,
  Home as HomeIcon,
  Sparkles,
  Users,
  Building2,
} from 'lucide-react'

const Home = () => {
  const benefits = [
    {
      icon: Award,
      title: '50% Tuition Scholarship',
      description: 'Exclusive scholarship for all students applying through ZeroAI Technologies',
      color: 'text-yellow-500',
    },
    {
      icon: Clock,
      title: 'Offer Letter in 30 Minutes',
      description: 'Fast-track admission process with quick turnaround time',
      color: 'text-blue-500',
    },
    {
      icon: FileText,
      title: 'Acceptance Letter in 24 Hours',
      description: 'Get your acceptance letter within 24 hours of payment',
      color: 'text-green-500',
    },
    {
      icon: Plane,
      title: 'Free Airport Pickup',
      description: 'Complimentary pickup from airport to university or residence',
      color: 'text-purple-500',
    },
    {
      icon: MapPin,
      title: 'Free 3-Day India Tour',
      description: 'Visit Manali, Himachal, Taj Mahal, and Red Fort - completely free!',
      color: 'text-pink-500',
    },
    {
      icon: Heart,
      title: 'End-to-End Support',
      description: 'Visa assistance, flight booking, and accommodation guidance',
      color: 'text-red-500',
    },
  ]

  const processSteps = [
    { step: 1, title: 'Apply Online', description: 'Fill out the application form on our portal' },
    { step: 2, title: 'Offer Letter', description: 'Receive your offer letter within 30 minutes' },
    { step: 3, title: 'Make Payment', description: 'Pay registration fee and tuition' },
    { step: 4, title: 'Acceptance Letter', description: 'Get acceptance letter in 24 hours with 50% scholarship' },
    { step: 5, title: 'Visa & Flight', description: 'We assist with visa application and flight booking' },
    { step: 6, title: 'Arrival & Tour', description: 'Free pickup, 3-day tour, then to university/residence' },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-block mb-4 px-4 py-2 bg-yellow-500 text-blue-900 rounded-full font-semibold text-sm">
              <Sparkles className="inline h-4 w-4 mr-2" />
              Intake: July 2026 - Registrations Open!
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Study at CT University, India
              <br />
              <span className="text-yellow-400">with 50% Scholarship</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-4 text-blue-100">
              A CSR Initiative by ZeroAI Technologies Inc
            </p>
            
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-blue-100">
              Join hundreds of Zambian students pursuing world-class education in India. 
              Get exclusive benefits including free airport pickup, complimentary 3-day tour, 
              and comprehensive support throughout your journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/apply" className="btn-secondary text-lg">
                Apply Now - Get 50% Off
              </Link>
              <Link to="/about" className="bg-white text-blue-900 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                Learn More
              </Link>
            </div>
            
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400">50%</div>
                <div className="text-sm text-blue-200">Tuition Discount</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400">30min</div>
                <div className="text-sm text-blue-200">Offer Letter</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400">FREE</div>
                <div className="text-sm text-blue-200">3-Day Tour</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400">100%</div>
                <div className="text-sm text-blue-200">Support</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Why Choose ZeroAI Technologies?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We're not just a recruitment agency - we're your partner in education, 
              committed to making your dreams affordable and achievable.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card hover:scale-105 transition-transform duration-300"
                >
                  <div className={`${benefit.color} mb-4`}>
                    <Icon className="h-12 w-12" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Your Journey to CT University</h2>
            <p className="text-gray-600 text-lg">
              Simple, transparent, and supported every step of the way
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-blue-200 -z-10"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {processSteps.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-shadow">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      {item.step}
                    </div>
                    <h3 className="font-bold mb-2 text-sm">{item.title}</h3>
                    <p className="text-xs text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Accommodation Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Affordable Accommodation Options</h2>
            <p className="text-gray-600 text-lg">
              Choose what works best for you - we've got you covered
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card border-2 border-blue-200"
            >
              <HomeIcon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Near University</h3>
              <div className="text-4xl font-bold text-blue-600 mb-4">$150<span className="text-lg text-gray-600">/month</span></div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Includes food</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Close to university campus</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Free airport drop-off at residence</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Guidance to university</span>
                </li>
                <li className="text-sm text-gray-600 italic">
                  * Electricity at government rates (extra)
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card border-2 border-purple-200"
            >
              <Building2 className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-2xl font-bold mb-2">In City</h3>
              <div className="text-4xl font-bold text-purple-600 mb-4">$250<span className="text-lg text-gray-600">/month</span></div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Includes food & rent</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Transport included</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Free airport drop-off at residence</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Guidance to university</span>
                </li>
                <li className="text-sm text-gray-600 italic">
                  * Electricity at government rates (extra)
                </li>
              </ul>
            </motion.div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              On-campus accommodation also available with various room configurations
            </p>
            <Link to="/apply" className="btn-primary">
              View All Accommodation Options
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Educational Journey?
            </h2>
            <p className="text-xl mb-8">
              Join ZeroAI Technologies' student recruitment program today and unlock 
              a world of opportunities at CT University, India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/apply" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-lg">
                Apply Now - July 2026 Intake
              </Link>
              <Link to="/contact" className="border-2 border-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-lg">
                Contact Us
              </Link>
            </div>
            <p className="mt-8 text-sm text-blue-100">
              Under the supervision of <strong>Lottie Mukuka</strong>, Founder & CEO, ZeroAI Technologies Inc
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
