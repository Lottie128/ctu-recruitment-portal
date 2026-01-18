import { useParams } from 'react-router-dom'
import VisaGuide from './blogPosts/VisaGuide'
import WhyStudyIndia from './blogPosts/WhyStudyIndia'
import HindiPhrases from './blogPosts/HindiPhrases'

// Placeholder component for blogs not yet written
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, BookOpen } from 'lucide-react'

const PlaceholderBlog = ({ title }) => (
  <article className="min-h-screen bg-gray-50 py-12">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Link
          to="/blog"
          className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        <div className="bg-white rounded-xl shadow-lg p-12 text-center">
          <BookOpen className="w-16 h-16 text-primary-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
          <p className="text-gray-600 mb-6">
            This article is currently being written. Check back soon for detailed information!
          </p>
          <Link
            to="/blog"
            className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700"
          >
            Browse Other Articles
          </Link>
        </div>
      </motion.div>
    </div>
  </article>
)

const BlogPost = () => {
  const { id } = useParams()

  const blogComponents = {
    'visa-guide-2026': <VisaGuide />,
    'why-study-india': <WhyStudyIndia />,
    'hindi-phrases': <HindiPhrases />,
    'cost-of-living': <PlaceholderBlog title="Cost of Living for Students in India 2026" />,
    'travel-prep': <PlaceholderBlog title="How to Prepare for Your Journey to India" />,
    'scholarship-info': <PlaceholderBlog title="Understanding the 50% Scholarship Program" />
  }

  return blogComponents[id] || (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
        <Link to="/blog" className="text-primary-600 hover:text-primary-700">
          Return to Blog
        </Link>
      </div>
    </div>
  )
}

export default BlogPost