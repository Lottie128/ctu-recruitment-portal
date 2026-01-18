import { motion } from 'framer-motion'
import { useState } from 'react'
import { Search, GraduationCap, TrendingUp, Award, CheckCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ctUniversityCourses, ctGroupCourses } from '../data/coursesData'

const Programs = () => {
  const [selectedInstitution, setSelectedInstitution] = useState('ctu')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const courses = selectedInstitution === 'ctu' ? ctUniversityCourses : ctGroupCourses
  const categories = ['All', ...Object.keys(courses)]

  // Flatten courses for search
  const allCourses = Object.entries(courses).flatMap(([category, courseList]) =>
    courseList.map(course => ({ ...course, category }))
  )

  // Filter courses
  const filteredCourses = allCourses.filter(course => {
    const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const stats = [
    { value: "87+", label: "Total Programs", icon: GraduationCap },
    { value: "50%", label: "Scholarship Discount", icon: Award },
    { value: "100%", label: "English Medium", icon: CheckCircle },
    { value: "1800+", label: "Companies Hiring", icon: TrendingUp }
  ]

  const highlights = [
    "Industry-driven curriculum designed with leading companies",
    "Distinguished doctorate faculty with international experience",
    "State-of-the-art labs and research facilities",
    "Internship and placement support from day one",
    "Student exchange programs with global universities",
    "Startup incubation hub for entrepreneurial students"
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Programs</h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto mb-8">
              Choose from 87+ internationally recognized programs across engineering, medicine, business, law, and more
            </p>
            <div className="inline-block px-6 py-3 bg-accent-500 rounded-full font-bold">
              🎓 All Programs with 50% Scholarship for Zambian Students
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white">
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
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Study at CT University?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3 bg-white p-6 rounded-xl shadow-lg"
              >
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">{highlight}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Browser */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Institution Toggle */}
          <div className="mb-8 flex justify-center">
            <div className="inline-flex rounded-lg bg-gray-100 p-1">
              <button
                onClick={() => setSelectedInstitution('ctu')}
                className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                  selectedInstitution === 'ctu'
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
              >
                CT University (Main)
              </button>
              <button
                onClick={() => setSelectedInstitution('ctg')}
                className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                  selectedInstitution === 'ctg'
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
              >
                CT Group Institutions
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search programs (e.g., Computer Science, MBA, Medicine)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-lg"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Programs Grid */}
          <div className="mb-8">
            <div className="text-center mb-6">
              <p className="text-gray-600">
                Showing <span className="font-bold text-primary-600">{filteredCourses.length}</span> programs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-xl transition-all group"
                >
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold">
                      {course.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {course.name}
                  </h3>

                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Duration:</span>
                      <span className="font-semibold text-gray-900">{course.duration} years</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Original Fee:</span>
                      <span className="text-gray-400 line-through">${course.feeUSD}/year</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">After 50% OFF:</span>
                      <span className="text-2xl font-bold text-green-600">${course.feeAfterScholarship}/year</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-green-600">
                        <CheckCircle className="w-4 h-4" />
                        <span>Scholarship Applied</span>
                      </div>
                      <Link
                        to="/apply"
                        className="text-primary-600 hover:text-primary-700 font-semibold text-sm flex items-center space-x-1 group"
                      >
                        <span>Apply</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredCourses.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No programs found matching your search.</p>
                <button
                  onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
                  className="mt-4 px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Found Your Perfect Program?</h2>
            <p className="text-xl text-gray-100 mb-8">
              Apply now and receive your offer letter within 30 minutes!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/apply"
                className="inline-flex items-center justify-center bg-accent-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent-600 transition-all shadow-lg hover:shadow-xl space-x-2"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Programs