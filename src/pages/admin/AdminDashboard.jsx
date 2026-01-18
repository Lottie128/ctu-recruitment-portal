import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BookOpen, Edit, Trash2, Plus, LogOut, Image, Save } from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'
import toast from 'react-hot-toast'

const AdminDashboard = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [blogs, setBlogs] = useState([])
  const [editingBlog, setEditingBlog] = useState(null)
  const [showEditor, setShowEditor] = useState(false)

  useEffect(() => {
    // Load blogs from localStorage
    const savedBlogs = localStorage.getItem('admin_blogs')
    if (savedBlogs) {
      setBlogs(JSON.parse(savedBlogs))
    } else {
      // Initialize with default blogs
      const defaultBlogs = [
        {
          id: 'visa-guide-2026',
          title: 'Complete Guide to Student Visa for India 2026',
          excerpt: 'Everything you need to know about applying for an Indian student visa from Zambia.',
          category: 'Visa Guide',
          author: 'Lottie Mukuka',
          date: 'January 15, 2026',
          readTime: '8 min read',
          coverImage: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800',
          content: '<h2>Introduction</h2><p>Applying for an Indian student visa from Zambia is straightforward when you have the right guidance...</p>'
        },
        {
          id: 'why-study-india',
          title: 'Why Study in India? 10 Reasons for Zambian Students',
          excerpt: 'Discover why India has become the destination of choice for thousands of international students.',
          category: 'Study Abroad',
          author: 'Lottie Mukuka',
          date: 'January 10, 2026',
          readTime: '6 min read',
          coverImage: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800',
          content: '<h2>Why India is Perfect for Zambian Students</h2><p>India has emerged as a leading destination...</p>'
        }
      ]
      setBlogs(defaultBlogs)
      localStorage.setItem('admin_blogs', JSON.stringify(defaultBlogs))
    }
  }, [])

  const saveBlogs = (updatedBlogs) => {
    setBlogs(updatedBlogs)
    localStorage.setItem('admin_blogs', JSON.stringify(updatedBlogs))
  }

  const handleLogout = () => {
    logout()
    navigate('/admin/login')
    toast.success('Logged out successfully')
  }

  const handleCreateBlog = () => {
    const newBlog = {
      id: `blog-${Date.now()}`,
      title: 'New Blog Post',
      excerpt: 'Click edit to add content',
      category: 'General',
      author: user.email.split('@')[0],
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      readTime: '5 min read',
      coverImage: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800',
      content: '<p>Start writing your blog content here...</p>'
    }
    setEditingBlog(newBlog)
    setShowEditor(true)
  }

  const handleEditBlog = (blog) => {
    setEditingBlog({ ...blog })
    setShowEditor(true)
  }

  const handleSaveBlog = () => {
    const existingIndex = blogs.findIndex(b => b.id === editingBlog.id)
    let updatedBlogs
    
    if (existingIndex >= 0) {
      updatedBlogs = [...blogs]
      updatedBlogs[existingIndex] = editingBlog
    } else {
      updatedBlogs = [...blogs, editingBlog]
    }
    
    saveBlogs(updatedBlogs)
    setShowEditor(false)
    setEditingBlog(null)
    toast.success('Blog saved successfully!')
  }

  const handleDeleteBlog = (blogId) => {
    if (confirm('Are you sure you want to delete this blog post?')) {
      const updatedBlogs = blogs.filter(b => b.id !== blogId)
      saveBlogs(updatedBlogs)
      toast.success('Blog deleted successfully')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-sm text-gray-600">Logged in as {user?.email}</p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!showEditor ? (
          <>
            {/* Create Button */}
            <div className="mb-6">
              <button
                onClick={handleCreateBlog}
                className="flex items-center space-x-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                <Plus className="w-5 h-5" />
                <span>Create New Blog Post</span>
              </button>
            </div>

            {/* Blogs List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs.map((blog) => (
                <motion.div
                  key={blog.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <img
                    src={blog.coverImage}
                    alt={blog.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold">
                        {blog.category}
                      </span>
                      <span className="text-xs text-gray-500">{blog.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{blog.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{blog.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => handleEditBlog(blog)}
                        className="flex items-center space-x-1 text-primary-600 hover:text-primary-700 font-medium text-sm"
                      >
                        <Edit className="w-4 h-4" />
                        <span>Edit</span>
                      </button>
                      <button
                        onClick={() => handleDeleteBlog(blog.id)}
                        className="flex items-center space-x-1 text-red-600 hover:text-red-700 font-medium text-sm"
                      >
                        <Trash2 className="w-4 h-4" />
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        ) : (
          /* Blog Editor */
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Edit Blog Post</h2>
              <div className="flex space-x-3">
                <button
                  onClick={() => {
                    setShowEditor(false)
                    setEditingBlog(null)
                  }}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveBlog}
                  className="flex items-center space-x-2 px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Changes</span>
                </button>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  value={editingBlog.title}
                  onChange={(e) => setEditingBlog({ ...editingBlog, title: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Excerpt</label>
                <textarea
                  value={editingBlog.excerpt}
                  onChange={(e) => setEditingBlog({ ...editingBlog, excerpt: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <input
                    type="text"
                    value={editingBlog.category}
                    onChange={(e) => setEditingBlog({ ...editingBlog, category: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Read Time</label>
                  <input
                    type="text"
                    value={editingBlog.readTime}
                    onChange={(e) => setEditingBlog({ ...editingBlog, readTime: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Cover Image URL</label>
                <div className="flex space-x-3">
                  <input
                    type="text"
                    value={editingBlog.coverImage}
                    onChange={(e) => setEditingBlog({ ...editingBlog, coverImage: e.target.value })}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                    placeholder="https://images.unsplash.com/..."
                  />
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
                    <Image className="w-5 h-5" />
                  </button>
                </div>
                {editingBlog.coverImage && (
                  <img src={editingBlog.coverImage} alt="Cover preview" className="mt-3 w-full h-48 object-cover rounded-lg" />
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Content (HTML)</label>
                <textarea
                  value={editingBlog.content}
                  onChange={(e) => setEditingBlog({ ...editingBlog, content: e.target.value })}
                  rows={15}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 font-mono text-sm"
                  placeholder="<h2>Heading</h2><p>Content...</p>"
                />
              </div>

              <div className="border-t pt-6">
                <h3 className="font-medium text-gray-900 mb-3">Preview</h3>
                <div 
                  className="prose max-w-none bg-gray-50 p-6 rounded-lg"
                  dangerouslySetInnerHTML={{ __html: editingBlog.content }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminDashboard