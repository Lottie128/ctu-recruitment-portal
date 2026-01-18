import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, Facebook, Twitter, Linkedin, Globe } from 'lucide-react'
import { useState } from 'react'
import toast from 'react-hot-toast'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    toast.success('Message sent successfully! We\'ll respond within 24 hours.')
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91-90413-30007", "+91-99145-04901", "+91-98148-80482"],
      color: "text-green-500"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["international.admissions@ctgroup.in"],
      color: "text-blue-500"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["CT University, Ferozepur Road", "Ludhiana, Punjab, India"],
      color: "text-red-500"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM IST", "Saturday: 10:00 AM - 4:00 PM IST"],
      color: "text-purple-500"
    }
  ]

  const socialLinks = [
    { icon: Globe, label: "Website", url: "https://zeroaitech.tech", color: "hover:text-primary-600" },
    { icon: Facebook, label: "Facebook", url: "#", color: "hover:text-blue-600" },
    { icon: Twitter, label: "Twitter", url: "#", color: "hover:text-sky-500" },
    { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/lottie-mukuka-8b984110a", color: "hover:text-blue-700" }
  ]

  const faqs = [
    {
      question: "How long does the application process take?",
      answer: "You'll receive your offer letter within 30 minutes of submitting your application, and the acceptance letter within 24 hours after payment."
    },
    {
      question: "Is the 50% scholarship guaranteed?",
      answer: "Yes! Every student who applies through our portal automatically receives a 50% tuition fee discount on all programs."
    },
    {
      question: "Do you help with visa applications?",
      answer: "Absolutely. We provide complete support throughout the entire visa application process, including document preparation and submission guidance."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Have questions? We're here to help you start your journey to CT University
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <div className={`inline-block p-4 rounded-full bg-gray-100 mb-4`}>
                  <info.icon className={`w-8 h-8 ${info.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="+260 XXX XXX XXX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="General Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-4 rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Contact Us?</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <MessageSquare className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Quick Response</h3>
                      <p className="text-gray-600">We respond to all inquiries within 24 hours, usually much faster</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MessageSquare className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Expert Guidance</h3>
                      <p className="text-gray-600">Our team has years of experience helping students study abroad</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MessageSquare className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Personalized Support</h3>
                      <p className="text-gray-600">We tailor our assistance to your specific needs and circumstances</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Answers</h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-200 last:border-0 pb-4 last:pb-0">
                      <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
                      <p className="text-gray-600 text-sm">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center ${social.color} transition-colors`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Find CT University</h2>
          <div className="bg-gray-300 rounded-xl overflow-hidden h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <p className="text-gray-600 font-semibold">CT University, Ferozepur Road</p>
              <p className="text-gray-600">Ludhiana, Punjab, India</p>
              <p className="text-sm text-gray-500 mt-2">Interactive map integration available</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact