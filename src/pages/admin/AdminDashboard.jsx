import { useState, useEffect } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { LogOut, Plus, Edit2, Trash2, Save, X, Database } from 'lucide-react'
import toast from 'react-hot-toast'
import { seedBlogs, seedTestimonials } from '../../utils/seedData'

const AdminDashboard = () => {
  const { logout } = useAuth()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('blogs')
  const [blogs, setBlogs] = useState([])
  const [testimonials, setTestimonials] = useState([])
  const [editingBlog, setEditingBlog] = useState(null)
  const [editingTestimonial, setEditingTestimonial] = useState(null)

  useEffect(() => {
    const savedBlogs = JSON.parse(localStorage.getItem('blogs') || '[]')
    const savedTestimonials = JSON.parse(localStorage.getItem('testimonials') || '[]')
    setBlogs(savedBlogs)
    setTestimonials(savedTestimonials)
  }, [])

  const handleLogout = () => {
    logout()
    navigate('/admin/login')
    toast.success('Logged out successfully')
  }

  const loadSeedData = () => {
    if (window.confirm('This will load 5 real blog posts and 4 testimonials. Continue?')) {
      localStorage.setItem('blogs', JSON.stringify(seedBlogs))
      localStorage.setItem('testimonials', JSON.stringify(seedTestimonials))
      setBlogs(seedBlogs)
      setTestimonials(seedTestimonials)
      toast.success('Seed data loaded successfully! 🎉')
    }
  }

  // Blog functions
  const saveBlog = () => {
    if (!editingBlog.title || !editingBlog.content) {
      toast.error('Please fill all fields')
      return
    }

    let updatedBlogs
    if (editingBlog.id) {
      updatedBlogs = blogs.map(b => b.id === editingBlog.id ? editingBlog : b)
      toast.success('Blog updated successfully!')
    } else {
      const newBlog = { ...editingBlog, id: Date.now(), date: new Date().toISOString() }
      updatedBlogs = [...blogs, newBlog]
      toast.success('Blog created successfully!')
    }

    setBlogs(updatedBlogs)
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs))
    setEditingBlog(null)
  }

  const deleteBlog = (id) => {
    if (window.confirm('Delete this blog?')) {
      const updatedBlogs = blogs.filter(b => b.id !== id)
      setBlogs(updatedBlogs)
      localStorage.setItem('blogs', JSON.stringify(updatedBlogs))
      toast.success('Blog deleted!')
    }
  }

  // Testimonial functions
  const saveTestimonial = () => {
    if (!editingTestimonial.name || !editingTestimonial.text) {
      toast.error('Please fill all fields')
      return
    }

    let updatedTestimonials
    if (editingTestimonial.id) {
      updatedTestimonials = testimonials.map(t => t.id === editingTestimonial.id ? editingTestimonial : t)
      toast.success('Testimonial updated!')
    } else {
      const newTestimonial = { ...editingTestimonial, id: Date.now() }
      updatedTestimonials = [...testimonials, newTestimonial]
      toast.success('Testimonial created!')
    }

    setTestimonials(updatedTestimonials)
    localStorage.setItem('testimonials', JSON.stringify(updatedTestimonials))
    setEditingTestimonial(null)
  }

  const deleteTestimonial = (id) => {
    if (window.confirm('Delete this testimonial?')) {
      const updatedTestimonials = testimonials.filter(t => t.id !== id)
      setTestimonials(updatedTestimonials)
      localStorage.setItem('testimonials', JSON.stringify(updatedTestimonials))
      toast.success('Testimonial deleted!')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <div className="flex items-center space-x-4">
              <button onClick={loadSeedData} className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                <Database className="w-4 h-4" />
                <span>Load Sample Data</span>
              </button>
              <button onClick={handleLogout} className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex space-x-4 mb-8">
          <button onClick={() => setActiveTab('blogs')} className={`px-6 py-3 rounded-lg font-semibold ${activeTab === 'blogs' ? 'bg-primary-600 text-white' : 'bg-white text-gray-700'}`}>
            Blogs ({blogs.length})
          </button>
          <button onClick={() => setActiveTab('testimonials')} className={`px-6 py-3 rounded-lg font-semibold ${activeTab === 'testimonials' ? 'bg-primary-600 text-white' : 'bg-white text-gray-700'}`}>
            Testimonials ({testimonials.length})
          </button>
        </div>

        {/* Blogs Tab */}
        {activeTab === 'blogs' && (
          <div>
            <div className="mb-6">
              <button onClick={() => setEditingBlog({ title: '', excerpt: '', content: '', coverImage: '', category: 'Student Life' })} className="flex items-center space-x-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
                <Plus className="w-5 h-5" />
                <span>New Blog Post</span>
              </button>
            </div>

            {editingBlog && (
              <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">{editingBlog.id ? 'Edit Blog' : 'New Blog'}</h2>
                  <button onClick={() => setEditingBlog(null)} className="text-gray-500 hover:text-gray-700">
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <div className="space-y-4">
                  <input type="text" placeholder="Title" value={editingBlog.title || ''} onChange={(e) => setEditingBlog({...editingBlog, title: e.target.value})} className="w-full px-4 py-3 border rounded-lg" />
                  <input type="text" placeholder="Cover Image URL" value={editingBlog.coverImage || ''} onChange={(e) => setEditingBlog({...editingBlog, coverImage: e.target.value})} className="w-full px-4 py-3 border rounded-lg" />
                  <select value={editingBlog.category || 'Student Life'} onChange={(e) => setEditingBlog({...editingBlog, category: e.target.value})} className="w-full px-4 py-3 border rounded-lg">
                    <option>Student Life</option>
                    <option>Admissions</option>
                    <option>Travel Tips</option>
                    <option>Visa Guide</option>
                    <option>Study Abroad</option>
                    <option>Scholarship</option>
                  </select>
                  <textarea placeholder="Excerpt (short summary)" value={editingBlog.excerpt || ''} onChange={(e) => setEditingBlog({...editingBlog, excerpt: e.target.value})} className="w-full px-4 py-3 border rounded-lg" rows="2" />
                  <textarea placeholder="Content (full blog post)" value={editingBlog.content || ''} onChange={(e) => setEditingBlog({...editingBlog, content: e.target.value})} className="w-full px-4 py-3 border rounded-lg" rows="10" />
                  <button onClick={saveBlog} className="flex items-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
                    <Save className="w-5 h-5" />
                    <span>Save Blog</span>
                  </button>
                </div>
              </div>
            )}

            <div className="grid gap-4">
              {blogs.map(blog => (
                <div key={blog.id} className="bg-white rounded-lg shadow p-6 flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{blog.title}</h3>
                    <p className="text-sm text-gray-600">{blog.category}</p>
                  </div>
                  <div className="flex space-x-2">
                    <button onClick={() => setEditingBlog(blog)} className="p-2 text-blue-600 hover:bg-blue-50 rounded">
                      <Edit2 className="w-5 h-5" />
                    </button>
                    <button onClick={() => deleteBlog(blog.id)} className="p-2 text-red-600 hover:bg-red-50 rounded">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Testimonials Tab */}
        {activeTab === 'testimonials' && (
          <div>
            <div className="mb-6">
              <button onClick={() => setEditingTestimonial({ name: '', program: '', year: '', image: '', text: '' })} className="flex items-center space-x-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
                <Plus className="w-5 h-5" />
                <span>New Testimonial</span>
              </button>
            </div>

            {editingTestimonial && (
              <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">{editingTestimonial.id ? 'Edit Testimonial' : 'New Testimonial'}</h2>
                  <button onClick={() => setEditingTestimonial(null)} className="text-gray-500 hover:text-gray-700">
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <div className="space-y-4">
                  <input type="text" placeholder="Student Name" value={editingTestimonial.name || ''} onChange={(e) => setEditingTestimonial({...editingTestimonial, name: e.target.value})} className="w-full px-4 py-3 border rounded-lg" />
                  <input type="text" placeholder="Program (e.g., B.Tech Computer Science)" value={editingTestimonial.program || ''} onChange={(e) => setEditingTestimonial({...editingTestimonial, program: e.target.value})} className="w-full px-4 py-3 border rounded-lg" />
                  <input type="text" placeholder="Year (e.g., 2024)" value={editingTestimonial.year || ''} onChange={(e) => setEditingTestimonial({...editingTestimonial, year: e.target.value})} className="w-full px-4 py-3 border rounded-lg" />
                  <input type="text" placeholder="Image URL (leave empty for initials avatar)" value={editingTestimonial.image || ''} onChange={(e) => setEditingTestimonial({...editingTestimonial, image: e.target.value})} className="w-full px-4 py-3 border rounded-lg" />
                  <textarea placeholder="Testimonial Text" value={editingTestimonial.text || ''} onChange={(e) => setEditingTestimonial({...editingTestimonial, text: e.target.value})} className="w-full px-4 py-3 border rounded-lg" rows="4" />
                  <button onClick={saveTestimonial} className="flex items-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
                    <Save className="w-5 h-5" />
                    <span>Save Testimonial</span>
                  </button>
                </div>
              </div>
            )}

            <div className="grid gap-4">
              {testimonials.map(testimonial => (
                <div key={testimonial.id} className="bg-white rounded-lg shadow p-6 flex items-center justify-between">
                  <div className="flex items-center space-x-4 flex-1">
                    {testimonial.image ? (
                      <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold">
                        {testimonial.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                      </div>
                    )}
                    <div>
                      <h3 className="font-bold text-lg">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.program} - Class of {testimonial.year}</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button onClick={() => setEditingTestimonial(testimonial)} className="p-2 text-blue-600 hover:bg-blue-50 rounded">
                      <Edit2 className="w-5 h-5" />
                    </button>
                    <button onClick={() => deleteTestimonial(testimonial.id)} className="p-2 text-red-600 hover:bg-red-50 rounded">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminDashboard