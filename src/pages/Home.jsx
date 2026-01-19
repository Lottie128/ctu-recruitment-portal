import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { GraduationCap, Plane, MapPin, FileText, CreditCard, Calendar, Car, CheckCircle, ArrowRight, Users, Award, Globe, Heart } from 'lucide-react'
import { processSteps } from '../data/coursesData'

const Home = () => {
  const [testimonials, setTestimonials] = useState([])

  useEffect(() => {
    const savedTestimonials = JSON.parse(localStorage.getItem('testimonials') || '[]')
    setTestimonials(savedTestimonials)
  }, [])

  const iconMap = {
    FileText, Mail: FileText, CreditCard, Plane, Calendar, Car, MapPin, GraduationCap
  }

  const features = [
    {
      icon: Award,
      title: "50% Tuition Scholarship",
      description: "Automatic 50% discount on all courses for Zambian students. Study at world-class universities at half the cost.",
      highlight: true
    },
    {
      icon: Plane,
      title: "Free Airport Pickup",
      description: "Complimentary airport pickup and drop-off service when you arrive in India. We'll be there to welcome you."
    },
    {
      icon: MapPin,
      title: "Free 3-Day India Tour",
      description: "Experience India with our guided tour: Manali, Taj Mahal, Red Fort, and Himachal Pradesh's natural beauty."
    },
    {
      icon: FileText,
      title: "Fast Processing",
      description: "Receive your offer letter within 30 minutes and acceptance letter within 24 hours of application."
    },
    {
      icon: CheckCircle,
      title: "End-to-End Support",
      description: "Complete assistance with visa applications, flight bookings, accommodation, and settling in India."
    },
    {
      icon: Users,
      title: "Student Community",
      description: "Join 100+ Zambian students already thriving at CT University with our comprehensive support network."
    }
  ]

  const stats = [
    { value: "87+", label: "Courses Available", icon: GraduationCap },
    { value: "50%", label: "Tuition Discount", icon: Award },
    { value: "100+", label: "Students Placed", icon: Users },
    { value: "30min", label: "Offer Letter Time", icon: CheckCircle }
  ]

  const defaultTestimonials = [
    {
      name: "Sarah M.",
      course: "B.Tech Computer Science",
      quote: "The 50% scholarship made my dream of studying abroad affordable. The support from ZeroAI Technologies throughout the process was exceptional!",
      year: "2024 Intake"
    },
    {
      name: "James K.",
      course: "MBA",
      quote: "From application to arrival, everything was smooth. The 3-day India tour was an amazing way to start my journey. Highly recommend!",
      year: "2025 Intake"
    },
    {
      name: "Mary C.",
      course: "B.Pharmacy",
      quote: "Getting my offer letter in 30 minutes was incredible. CT University has world-class facilities and the scholarship made it possible for me.",
      year: "2025 Intake"
    }
  ]

  const displayTestimonials = testimonials.length > 0 ? testimonials : defaultTestimonials

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-block mb-6 px-6 py-2 bg-accent-500 rounded-full text-sm font-semibold">
              🎓 July 2026 Intake Now Open!
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Study in India with<br />
              <span className="text-accent-400">50% Scholarship</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto">
              Get your degree from CT University, India with exclusive benefits for Zambian students
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                to="/apply"
                className="bg-accent-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent-600 transition-all shadow-lg hover:shadow-xl flex items-center space-x-2"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all"
              >
                Contact Us
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-accent-400" />
                <span>50% Tuition Discount</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-accent-400" />
                <span>Free Airport Pickup</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-accent-400" />
                <span>Free 3-Day Tour</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-accent-400" />
                <span>Visa Assistance</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl"
              >
                <stat.icon className="w-10 h-10 text-primary-600 mx-auto mb-3" />
                <div className="text-4xl font-bold text-primary-600 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive support from application to graduation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all ${
                  feature.highlight
                    ? 'bg-gradient-to-br from-accent-500 to-accent-600 text-white transform hover:scale-105'
                    : 'bg-white hover:bg-gray-50'
                }`}
              >
                <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-6 ${
                  feature.highlight ? 'bg-white/20' : 'bg-primary-100'
                }`}>
                  <feature.icon className={`w-7 h-7 ${
                    feature.highlight ? 'text-white' : 'text-primary-600'
                  }`} />
                </div>
                <h3 className={`text-xl font-bold mb-3 ${
                  feature.highlight ? 'text-white' : 'text-gray-900'
                }`}>
                  {feature.title}
                </h3>
                <p className={feature.highlight ? 'text-white/90' : 'text-gray-600'}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Application Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your journey from application to campus in 8 simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const IconComponent = iconMap[step.icon] || FileText
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-white border-2 border-primary-200 rounded-xl p-6 hover:border-primary-400 transition-all">
                    <div className="absolute -top-4 left-6 bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                      {step.id}
                    </div>
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 mt-2">
                      <IconComponent className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="text-xs text-accent-600 font-semibold mb-2">{step.timeline}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Student Success Stories</h2>
            <p className="text-xl text-gray-600">Hear from Zambian students already studying at CT University</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {displayTestimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-6">
                  {testimonial.image ? (
                    <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover mr-4" />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-xl mr-4">
                      {testimonial.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                    </div>
                  )}
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.program || testimonial.course}</div>
                    {testimonial.year && <div className="text-xs text-gray-500">{testimonial.year}</div>}
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.text || testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Begin Your Journey?</h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Apply now for July 2026 intake and get your offer letter within 30 minutes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/apply"
                className="bg-accent-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent-600 transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center space-x-2"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all inline-flex items-center justify-center space-x-2"
              >
                <span>Learn More</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home