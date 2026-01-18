import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, Lock, Send, CheckCircle } from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'
import toast from 'react-hot-toast'

const AdminLogin = () => {
  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')
  const [step, setStep] = useState('email') // 'email' or 'verify'
  const [sentCode, setSentCode] = useState('')
  const navigate = useNavigate()
  const { login } = useAuth()

  const ADMIN_EMAIL = 'lottiemukuka@zeroaitech.tech'

  const generateCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString()
  }

  const handleSendCode = (e) => {
    e.preventDefault()
    
    if (email.toLowerCase() !== ADMIN_EMAIL.toLowerCase()) {
      toast.error('Unauthorized email address')
      return
    }

    // Generate random 6-digit code
    const randomCode = generateCode()
    setSentCode(randomCode)
    
    // Simulate sending email
    console.log(`Verification code for ${email}: ${randomCode}`)
    
    toast.success(
      `Verification code sent to ${email}!\n\nFor demo: ${randomCode}`,
      { duration: 10000 }
    )
    
    setStep('verify')
  }

  const handleVerifyCode = (e) => {
    e.preventDefault()
    
    if (code === sentCode) {
      login(email)
      toast.success('Login successful!')
      navigate('/admin/dashboard')
    } else {
      toast.error('Invalid verification code')
    }
  }

  const handleResendCode = () => {
    const newCode = generateCode()
    setSentCode(newCode)
    toast.success(
      `New verification code sent!\n\nFor demo: ${newCode}`,
      { duration: 10000 }
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full"
      >
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Admin Login</h2>
            <p className="text-gray-600 mt-2">
              {step === 'email' 
                ? 'Enter your email to receive a verification code'
                : 'Enter the 6-digit code sent to your email'
              }
            </p>
          </div>

          {step === 'email' ? (
            <form onSubmit={handleSendCode} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="lottiemukuka@zeroaitech.tech"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-all flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Verification Code</span>
              </button>
            </form>
          ) : (
            <form onSubmit={handleVerifyCode} className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Verification Code
                  </label>
                  <button
                    type="button"
                    onClick={handleResendCode}
                    className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Resend Code
                  </button>
                </div>
                <input
                  type="text"
                  required
                  maxLength={6}
                  value={code}
                  onChange={(e) => setCode(e.target.value.replace(/\D/g, ''))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-center text-2xl tracking-widest font-mono"
                  placeholder="000000"
                />
                <p className="text-sm text-gray-500 mt-2 text-center">
                  Code sent to {email}
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-all flex items-center justify-center space-x-2"
              >
                <CheckCircle className="w-5 h-5" />
                <span>Verify & Login</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setStep('email')
                  setCode('')
                  setSentCode('')
                }}
                className="w-full text-gray-600 hover:text-gray-800 text-sm"
              >
                Use different email
              </button>
            </form>
          )}

          <div className="mt-6 text-center text-sm text-gray-500">
            <p>Protected Admin Area</p>
            <p className="mt-1">Only authorized personnel can access</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default AdminLogin