import { motion } from 'framer-motion'
import { Target, Users, Award, Heart, CheckCircle, TrendingUp, Globe, Linkedin } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Committed to making world-class education accessible to Zambian students through strategic partnerships and scholarships."
    },
    {
      icon: Users,
      title: "Student-Centric",
      description: "Every decision we make prioritizes student success, from application to graduation and beyond."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in student recruitment, support services, and educational partnerships."
    },
    {
      icon: Heart,
      title: "Community Impact",
      description: "This is our CSR initiative - giving back to Zambia by empowering the next generation of leaders."
    }
  ]

  const milestones = [
    { year: "2020", title: "Company Founded", description: "ZeroAI Technologies Inc established in Zambia" },
    { year: "2023", title: "Partnership with CT University", description: "Secured exclusive 50% scholarship program for Zambian students" },
    { year: "2024", title: "First Student Cohort", description: "Successfully placed 50+ students at CT University" },
    { year: "2026", title: "Expansion", description: "Launched comprehensive recruitment portal with enhanced support services" }
  ]

  const stats = [
    { value: "50%", label: "Tuition Discount", icon: Award },
    { value: "100+", label: "Students Supported", icon: Users },
    { value: "87", label: "Available Courses", icon: Target },
    { value: "24hrs", label: "Acceptance Time", icon: TrendingUp }
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
            <h1 className="text-5xl font-bold mb-6">About ZeroAI Technologies Inc</h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8">
              A Zambian technology company committed to empowering students through education
            </p>
            <div className="inline-block px-6 py-3 bg-accent-500 rounded-full font-semibold">
              🇿🇲 Made in Zambia • For Zambian Students • Study in India 🇮🇳
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                ZeroAI Technologies Inc is more than a tech company - we're a catalyst for educational transformation in Zambia. While technology is our core business, this recruitment program represents our commitment to giving back to our community.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Through our partnership with CT University, we've secured exclusive 50% scholarships for Zambian students, making world-class Indian education accessible and affordable. This isn't just about recruitment - it's about building futures.
              </p>
              <div className="flex items-start space-x-3 bg-primary-50 p-6 rounded-lg">
                <Heart className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">A CSR Initiative</h3>
                  <p className="text-gray-600">
                    This program is our Corporate Social Responsibility initiative - not a profit center, but our way of investing in Zambia's future leaders.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <div key={index} className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl text-center">
                  <stat.icon className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-primary-600 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership</h2>
            <p className="text-xl text-gray-600">Meet the founder driving this vision</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                <div className="w-48 h-48 bg-gradient-to-br from-primary-600 to-primary-800 rounded-full flex items-center justify-center text-white text-6xl font-bold flex-shrink-0">
                  LM
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Lottie Mukuka</h3>
                  <p className="text-xl text-primary-600 mb-4">Founder & CEO</p>
                  <p className="text-gray-700 mb-4">
                    Lottie Mukuka is a Zambian entrepreneur and technology innovator who founded ZeroAI Technologies Inc with a vision to bridge the gap between Zambian talent and global opportunities.
                  </p>
                  <p className="text-gray-700 mb-6">
                    With extensive experience in full-stack development, AI integration, and educational technology, Lottie recognized the potential to leverage technology partnerships to create meaningful educational opportunities for Zambian students.
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                    <a
                      href="https://www.linkedin.com/in/lottie-mukuka-8b984110a"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                      <span>Connect on LinkedIn</span>
                    </a>
                    <a
                      href="https://zeroaitech.tech"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors"
                    >
                      <Globe className="w-5 h-5" />
                      <span>Visit ZeroAI Tech</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-primary-200">
                <h4 className="font-semibold text-gray-900 mb-4">Key Achievements:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Founded ZeroAI Technologies Inc",
                    "Secured 50% scholarship program with CT University",
                    "IBM Partner Plus Certified",
                    "STEM.org Certified Educator",
                    "Built multiple EdTech platforms",
                    "Delivered workshops to 200+ attendees"
                  ].map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Building a bridge between Zambia and India</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-start mb-8 last:mb-0"
              >
                <div className="flex-shrink-0 w-24 text-right pr-6">
                  <div className="text-2xl font-bold text-primary-600">{milestone.year}</div>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-primary-600 rounded-full mt-2 relative">
                  {index !== milestones.length - 1 && (
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-primary-300" />
                  )}
                </div>
                <div className="flex-1 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 text-gray-100">
            Join 100+ Zambian students already studying at CT University with our exclusive 50% scholarship
          </p>
          <a
            href="/apply"
            className="inline-block bg-accent-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent-600 transition-colors shadow-lg hover:shadow-xl"
          >
            Apply Now - July 2026 Intake
          </a>
        </div>
      </section>
    </div>
  )
}

export default About