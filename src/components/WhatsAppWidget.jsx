import { MessageCircle, X } from 'lucide-react'
import { useState } from 'react'

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const phoneNumber = '917717347050' // Your WhatsApp number
  const message = encodeURIComponent('Hello! I am interested in studying at CT University through ZeroAI Technologies. Can you help me with the application process?')

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  return (
    <>
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {isOpen && (
          <div className="mb-4 bg-white rounded-2xl shadow-2xl p-6 w-80 animate-fadeIn">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <img 
                  src="https://zeroaitech.tech/logo.png" 
                  alt="ZeroAI" 
                  className="h-8 w-auto"
                  onError={(e) => {
                    e.target.style.display = 'none'
                  }}
                />
                <div>
                  <h3 className="font-bold text-gray-900">ZeroAI Technologies</h3>
                  <p className="text-xs text-green-600">● Online</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <p className="text-sm text-gray-700 mb-2">
                👋 Hi there! Have questions about studying at CT University?
              </p>
              <p className="text-sm text-gray-600">
                Chat with us on WhatsApp for instant answers!
              </p>
            </div>
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg flex items-center justify-center space-x-2 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Start Chat on WhatsApp</span>
            </button>
            <p className="text-xs text-gray-500 text-center mt-3">
              We typically reply within minutes
            </p>
          </div>
        )}
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all transform hover:scale-110"
          aria-label="Open WhatsApp Chat"
        >
          {isOpen ? (
            <X className="w-7 h-7" />
          ) : (
            <MessageCircle className="w-7 h-7" />
          )}
        </button>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  )
}

export default WhatsAppWidget