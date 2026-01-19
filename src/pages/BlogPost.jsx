import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Clock, User, Share2 } from 'lucide-react'

const BlogPost = () => {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const savedBlogs = JSON.parse(localStorage.getItem('blogs') || '[]')
    const foundPost = savedBlogs.find(blog => blog.id === parseInt(id))
    setPost(foundPost)
    setLoading(false)
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
          <Link to="/blog" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link to="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-6">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Blog
            </Link>
            
            <div className="mb-6">
              <span className="px-4 py-2 bg-accent-500 rounded-full text-sm font-semibold">
                {post.category}
              </span>
            </div>

            <h1 className="text-5xl font-bold mb-6">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-6 text-white/80">
              {post.date && (
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cover Image */}
      {post.coverImage && (
        <section className="py-8 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
              <img src={post.coverImage} alt={post.title} className="w-full h-96 object-cover rounded-2xl shadow-xl" />
            </motion.div>
          </div>
        </section>
      )}

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="prose prose-lg max-w-none">
            <div className="whitespace-pre-line text-gray-700 leading-relaxed">
              {post.content}
            </div>
          </motion.article>

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900">Share this article</h3>
              <button className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
                <Share2 className="w-5 h-5" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Want to Read More?</h2>
          <p className="text-xl text-gray-600 mb-8">Explore more articles about studying in India</p>
          <Link to="/blog" className="inline-flex items-center justify-center bg-primary-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-700 transition-all">
            View All Articles
          </Link>
        </div>
      </section>
    </div>
  )
}

export default BlogPost