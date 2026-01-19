import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { GraduationCap, Award, Users, TrendingUp, CheckCircle, ArrowRight, Star, MapPin, Plane, DollarSign } from 'lucide-react'

const Home = () => {
  const [testimonials, setTestimonials] = useState([])

  useEffect(() => {
    const savedTestimonials = JSON.parse(localStorage.getItem('testimonials') || '[]')
    setTestimonials(savedTestimonials)
  }, [])

  const stats = [
    { value: "87+", label: "Programs Available", icon: GraduationCap },
    { value: "50%", label: "Scholarship Discount", icon: Award },
    { value: "1800+", label: "Hiring Companies", icon: Users },
    { value: "100%", label: "Admission Success", icon: TrendingUp }
  ]

  const benefits = [
    {
      icon: Award,
      title: "50% Tuition Scholarship",
      description: "Automatic scholarship on all programs for Zambian students",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: Plane,
      title: "Free Airport Pickup",
      description: "Complimentary pickup from Delhi/Chandigarh Airport",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: MapPin,
      title: "Free 3-Day India Tour",
      description: "Choose from Taj Mahal, Manali, Delhi, or Shimla tours",
      color: "from-green-500 to-green-600"
    },
    {
      icon: DollarSign,
      title: "Flexible Accommodation",
      description: "University hostel or monthly payment options from $150/month",
      color: "from-purple-500 to-purple-600"
    }
  ]

  const process = [
    { step: "1", title: "Submit Application", description: "Fill out the online form with your documents" },
    { step: "2", title: "Receive Offer Letter", description: "Get your offer letter within 30 minutes" },
    { step: "3", title: "Apply for Visa", description: "We guide you through the visa process" },
    { step: "4", title: "Fly to India", description: "Free airport pickup and 3-day welcome tour" },
    { step: "5", title: "Start Studying", description: "Begin your journey at CT University" }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-block mb-4 px-4 py-2 bg-accent-500 rounded-full text-sm font-semibold">
                ⚡ July 2026 Intake Now Open!
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Study at CT University India with 50% Scholarship
              </h1>
              <p className="text-xl text-gray-100 mb-8">
                Exclusive admission support for Zambian students. Get your offer letter in 30 minutes, free airport pickup, and a 3-day India welcome tour!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/apply" className="inline-flex items-center justify-center bg-accent-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent-600 transition-all shadow-lg hover:shadow-xl space-x-2">
                  <span>Apply Now</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/programs" className="inline-flex items-center justify-center bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all">
                  <span>View Programs</span>
                </Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="hidden lg:block">
              <div className="relative">
                <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800" alt="CT University Campus" className="rounded-2xl shadow-2xl" />
                <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-6 rounded-xl shadow-xl">
                  <div className="flex items-center space-x-3">
                    <Star className="w-8 h-8 text-yellow-500" />
                    <div>
                      <div className="text-2xl font-bold">Ranked Top 20</div>
                      <div className="text-sm text-gray-600">Private Universities</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }} className="text-center">
                <stat.icon className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose ZeroAI Technologies?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The most comprehensive study abroad package for Zambian students
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }} className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple Application Process</h2>
            <p className="text-xl text-gray-600">From application to arrival in just 5 easy steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gray-300" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories from Zambian Students</h2>
              <p className="text-xl text-gray-600">Hear from students who made it through ZeroAI Technologies</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.slice(0, 3).map((testimonial, index) => (
                <motion.div key={testimonial.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }} className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-6">
                    {testimonial.image ? (
                      <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover mr-4" />
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-xl mr-4">
                        {testimonial.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                      </div>
                    )}
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.program}</p>
                      <p className="text-xs text-gray-500">Class of {testimonial.year}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.text}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of Zambian students already studying at CT University India
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/apply" className="inline-flex items-center justify-center bg-accent-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent-600 transition-all shadow-lg hover:shadow-xl space-x-2">
                <span>Apply Now - Get Offer in 30 Minutes</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all">
                <span>Contact Us</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home