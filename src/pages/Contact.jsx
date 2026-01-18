import { motion } from 'framer-motion'
import { Mail, Phone, MessageCircle, MapPin, Clock, Send } from 'lucide-react'
import { useState } from 'react'
import toast from 'react-hot-toast'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    toast.success('Message sent! We\'ll respond within 24 hours.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'applications@zeroaitech.tech',
      link: 'mailto:applications@zeroaitech.tech',
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+91 77173 47050',
      link: 'tel:+917717347050',
      description: 'Mon-Sat, 9 AM - 6 PM IST'
    },
    {
      icon: Phone,
      title: 'Alternative Number',
      content: '+91 97799 73945',
      link: 'tel:+919779973945',
      description: 'Mon-Sat, 9 AM - 6 PM IST'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      content: '+91 77173 47050',
      link: 'https://wa.me/917717347050',
      description: 'Quick replies, available 24/7'
    }
  ]

  const faqs = [
    {
      question: 'What is the consultation fee?',
      answer: 'Our consultation fee is just $20 USD. This covers initial application processing and guidance.'
    },
    {
      question: 'What is the registration fee and when do I pay it?',
      answer: 'The registration fee is $500 USD, payable only after you receive your offer letter directly from CT University email. This amount is fully deductible from your first year tuition fee.'
    },
    {
      question: 'Are visa fees and flight costs included?',
      answer: 'No. Visa fees must be paid directly to the Indian Embassy/High Commission. Flight costs are your responsibility. We only handle consultation ($20) and registration ($500) fees.'
    },
    {
      question: 'Who is eligible for the free tour?',
      answer: 'Only students who apply through ZeroAI Technologies are entitled to the free 3-day India tour. Students who apply directly to the university are not eligible for this benefit.'
    },
    {
      question: 'How quickly will I get my offer letter?',
      answer: 'After submitting your complete application and paying the $20 consultation fee, you will receive your offer letter from CT University within 30 minutes.'
    },
    {
      question: 'What documents do I need?',
      answer: 'You need: passport copy, Grade 12 certificate and transcript, passport-size photo, and proof of address. All documents in other languages must have certified English translations.'
    },
    {
      question: 'Is accommodation compulsory?',
      answer: 'Yes, first-year international students must stay in university accommodation. Prices range from $1,700 to $2,600 per year depending on room type.'
    },
    {
      question: 'Do you collect visa fees?',
      answer: 'No. We never collect visa fees. Visa fees must be paid directly to the Indian Embassy/High Commission. Beware of any agent asking for visa fees - that is fraudulent.'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6">Contact ZeroAI Technologies</h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Your trusted partner for CT University admissions. Have questions? We're here to help!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-8 bg-yellow-50 border-y border-yellow-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">!</div>
            </div>
            <div>
              <h3 className="font-bold text-yellow-900 mb-2">Important: Apply Through ZeroAI Technologies</h3>
              <p className="text-yellow-800">
                <strong>Only students who apply through ZeroAI Technologies are entitled to:</strong> Free 3-day India tour, $500 registration fee (deductible from tuition), personalized application support, and dedicated assistance throughout your journey. 
                If you apply directly to CT University, we cannot assist with your process, visa, or flight arrangements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.link}
                target={method.link.startsWith('http') ? '_blank' : undefined}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all group"
              >
                <method.icon className="w-12 h-12 text-primary-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-primary-600 font-semibold mb-2">{method.content}</p>
                <p className="text-sm text-gray-600">{method.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Send Us a Message</h2>
            <p className="text-gray-600 text-center mb-8">Fill out the form and we'll respond within 24 hours</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number (with country code)
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+260..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message *
                </label>
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Tell us about your questions or how we can help you..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-4 rounded-lg font-semibold hover:bg-primary-700 transition-all flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Clock className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Office Hours</h2>
          <p className="text-xl text-gray-100 mb-2">Monday - Saturday: 9:00 AM - 6:00 PM (IST)</p>
          <p className="text-gray-200">WhatsApp available 24/7 for quick queries</p>
        </div>
      </section>
    </div>
  )
}

export default Contact