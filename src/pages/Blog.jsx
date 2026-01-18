import { motion } from 'framer-motion'
import { Calendar, Clock, User, ArrowRight, BookOpen, Plane, Heart, FileText } from 'lucide-react'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Complete Guide to Student Visa for India 2026",
      excerpt: "Everything you need to know about applying for an Indian student visa from Zambia. Step-by-step process, required documents, and timeline.",
      author: "Lottie Mukuka",
      date: "January 15, 2026",
      readTime: "8 min read",
      category: "Visa Guide",
      icon: FileText,
      image: "visa"
    },
    {
      id: 2,
      title: "Why Study in India? 10 Reasons for Zambian Students",
      excerpt: "Discover why India has become the destination of choice for thousands of international students, including affordable education and cultural diversity.",
      author: "Lottie Mukuka",
      date: "January 10, 2026",
      readTime: "6 min read",
      category: "Study Abroad",
      icon: BookOpen,
      image: "study"
    },
    {
      id: 3,
      title: "Life at CT University: A Student's Perspective",
      excerpt: "Hear from current Zambian students about their experiences at CT University - from campus facilities to social life and academics.",
      author: "Sarah M.",
      date: "January 5, 2026",
      readTime: "10 min read",
      category: "Student Life",
      icon: Heart,
      image: "campus"
    },
    {
      id: 4,
      title: "How to Prepare for Your Journey to India",
      excerpt: "Essential tips on what to pack, cultural norms to know, and how to make your transition to India smooth and stress-free.",
      author: "Lottie Mukuka",
      date: "December 28, 2025",
      readTime: "7 min read",
      category: "Travel Tips",
      icon: Plane,
      image: "travel"
    },
    {
      id: 5,
      title: "Understanding the 50% Scholarship Program",
      excerpt: "A detailed breakdown of our exclusive scholarship program for Zambian students and how it makes studying in India affordable.",
      author: "Lottie Mukuka",
      date: "December 20, 2025",
      readTime: "5 min read",
      category: "Scholarship",
      icon: BookOpen,
      image: "scholarship"
    },
    {
      id: 6,
      title: "Top Engineering Programs at CT University",
      excerpt: "Explore the engineering programs available at CT University, including B.Tech CSE, AI & Machine Learning, and more with industry partnerships.",
      author: "Lottie Mukuka",
      date: "December 15, 2025",
      readTime: "9 min read",
      category: "Programs",
      icon: BookOpen,
      image: "engineering"
    }
  ]

  const categories = ['All', 'Visa Guide', 'Study Abroad', 'Student Life', 'Travel Tips', 'Scholarship', 'Programs']

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6">Blog & Resources</h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Your guide to studying in India - visa tips, student life, and everything in between
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all bg-gray-100 text-gray-700 hover:bg-primary-100 hover:text-primary-700"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="h-48 bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                  <post.icon className="w-20 h-20 text-white opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <button className="text-primary-600 hover:text-primary-700 font-semibold text-sm flex items-center space-x-1 group">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  <div className="flex items-center text-xs text-gray-400 mt-3">
                    <Calendar className="w-3 h-3 mr-1" />
                    {post.date}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl text-gray-100 mb-8">
              Subscribe to our newsletter for the latest updates on studying in India
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-3 rounded-lg text-gray-900"
              />
              <button className="bg-accent-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent-600 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Blog