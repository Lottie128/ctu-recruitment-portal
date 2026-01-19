import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { Lock, Mail, Key, Send } from 'lucide-react'
import toast from 'react-hot-toast'

const AdminLogin = () => {
  const [step, setStep] = useState('email') // 'email' or 'password'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [generatedPassword, setGeneratedPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  const generatePassword = () => {
    // Generate 6-digit random password
    return Math.floor(100000 + Math.random() * 900000).toString()
  }

  const handleEmailSubmit = async (e) => {
    e.preventDefault()
    
    if (email !== 'lottiemukuka@zeroaitech.tech') {
      toast.error('Unauthorized email address')
      return
    }

    setLoading(true)
    const tempPassword = generatePassword()
    setGeneratedPassword(tempPassword)

    try {
      // Send password via API
      const response = await fetch('/api/send-login-password.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: tempPassword
        })
      })

      const data = await response.json()

      if (data.success) {
        toast.success('Password sent to your email! Check your inbox.')
        setStep('password')
      } else {
        throw new Error(data.message || 'Failed to send email')
      }
    } catch (error) {
      // Fallback for local development - show password in toast
      console.log('Email API not available, showing password:', tempPassword)
      toast.success(`Development Mode: Your password is ${tempPassword}`, { duration: 10000 })
      setStep('password')
    } finally {
      setLoading(false)
    }
  }

  const handlePasswordSubmit = (e) => {
    e.preventDefault()
    
    if (password === generatedPassword) {
      if (login(email)) {
        toast.success('Welcome back, Lottie!')
        navigate('/admin/dashboard')
      }
    } else {
      toast.error('Incorrect password. Check your email.')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-600 to-primary-900 flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
      </div>

      <div className="relative z-10 w-full max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Hero Image Section */}
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800" 
                alt="Admin Dashboard" 
                className="rounded-xl shadow-2xl w-full"
              />
              <div className="mt-6 text-white">
                <h2 className="text-3xl font-bold mb-3">Manage Your Portal</h2>
                <p className="text-gray-200 text-lg">
                  Control blogs, testimonials, and content from one powerful dashboard.
                </p>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <span className="text-gray-100">Create & edit blog posts</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <span className="text-gray-100">Manage student testimonials</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <span className="text-gray-100">Secure email authentication</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Login Form Section */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900">Admin Login</h1>
              <p className="text-gray-600 mt-2">CT University Recruitment Portal</p>
            </div>

            {step === 'email' ? (
              <form onSubmit={handleEmailSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="email@example.com"
                      required
                      disabled={loading}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary-600 text-white py-3 rounded-lg font-bold hover:bg-primary-700 transition-all flex items-center justify-center space-x-2 disabled:bg-gray-400"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending password...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Password to Email</span>
                    </>
                  )}
                </button>

                <p className="text-sm text-gray-600 text-center">
                  A one-time password will be sent to your email address
                </p>
              </form>
            ) : (
              <form onSubmit={handlePasswordSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Enter Password from Email
                  </label>
                  <div className="relative">
                    <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-center text-2xl font-mono tracking-widest"
                      placeholder="000000"
                      maxLength="6"
                      required
                    />
                  </div>
                  <p className="text-sm text-gray-600 mt-2 text-center">
                    Check your email: <span className="font-semibold">{email}</span>
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white py-3 rounded-lg font-bold hover:bg-primary-700 transition-all"
                >
                  Login to Dashboard
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setStep('email')
                    setPassword('')
                    setGeneratedPassword('')
                  }}
                  className="w-full text-primary-600 py-2 text-sm hover:underline"
                >
                  ← Use different email
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin