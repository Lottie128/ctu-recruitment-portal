import { motion } from 'framer-motion'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { Send, Building2, CheckCircle, Upload, FileText, Award, Plane, MapPin, Home, Star } from 'lucide-react'
import { ctUniversityCourses, ctGroupCourses } from '../data/coursesData'
import { ctUniversityAccommodation, zeroAIAccommodation } from '../data/accommodationData'

const Apply = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm()
  const [selectedInstitution, setSelectedInstitution] = useState('ctu')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedTour, setSelectedTour] = useState('')
  const [accommodationType, setAccommodationType] = useState('university')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    
    try {
      // Add institution info
      const applicationData = {
        ...data,
        institution: selectedInstitution === 'ctu' ? 'CT University' : 'CT Group',
        submittedAt: new Date().toISOString()
      }

      // Send to backend API
      const response = await fetch('/api/submit-application.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(applicationData)
      })

      const result = await response.json()

      if (result.success) {
        toast.success(`🎉 Application submitted successfully! Application ID: ${result.applicationId}`, {
          duration: 8000
        })
        toast.success('Check your email for confirmation and next steps!', {
          duration: 6000
        })
      } else {
        throw new Error(result.message || 'Submission failed')
      }
    } catch (error) {
      console.error('Submission error:', error)
      toast.error('Failed to submit application. Please try again or contact us via WhatsApp.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const institutionCourses = selectedInstitution === 'ctu' ? ctUniversityCourses : ctGroupCourses
  const categories = Object.keys(institutionCourses)

  const welcomeProcess = [
    {
      day: "Day 1",
      title: "Airport Pickup & University Check-in",
      description: "We pick you up from Delhi/Chandigarh Airport and transport you directly to CT University campus. Complete your registration and settle into your accommodation.",
      icon: Plane,
      activities: ["Free airport pickup in comfortable vehicle", "Campus registration & orientation", "Accommodation setup with bedding & essentials", "Meet your student coordinator", "Campus tour & facilities introduction"],
      color: "from-blue-500 to-blue-600"
    },
    {
      day: "Day 5",
      title: "Return & Settlement Support",
      description: "After your tour, we help you settle into student life with banking, SIM card, shopping, and academic registration assistance.",
      icon: Home,
      activities: ["Bank account opening assistance", "Indian SIM card & phone setup", "Local market shopping tour", "Academic schedule & timetable", "Student community introduction", "Emergency contacts & support setup"],
      color: "from-green-500 to-green-600"
    }
  ]

  const tourOptions = [
    {
      id: "taj-mahal",
      name: "Taj Mahal & Agra Tour",
      duration: "3 Days / 2 Nights",
      destinations: ["Taj Mahal - UNESCO World Heritage Site", "Agra Fort - Historic Mughal fortress", "Fatehpur Sikri - Ancient Mughal city", "Mehtab Bagh - Taj Mahal sunset views"],
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800",
      highlights: "🕌 Visit the iconic Taj Mahal monument of love\n🏰 Explore magnificent Agra Fort\n🌅 Sunset photography at Mehtab Bagh\n🍛 Authentic Mughlai cuisine experience",
      value: "$450"
    },
    {
      id: "manali",
      name: "Manali Mountain Adventure",
      duration: "3 Days / 2 Nights",
      destinations: ["Manali - Snow-capped Himalayas", "Rohtang Pass - 13,050 ft altitude", "Solang Valley - Adventure sports hub", "Hadimba Temple - Ancient forest shrine"],
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
      highlights: "🏔️ Experience snow in the Himalayas\n🪂 Optional paragliding & skiing\n🌄 Scenic mountain valley views\n🏞️ Visit sacred Hadimba Temple",
      value: "$480"
    },
    {
      id: "delhi-heritage",
      name: "Delhi Heritage Tour",
      duration: "3 Days / 2 Nights",
      destinations: ["Red Fort - UNESCO World Heritage", "India Gate - War memorial monument", "Qutub Minar - 73m tall victory tower", "Lotus Temple - Bahai House of Worship"],
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800",
      highlights: "🏛️ Explore historic Red Fort\n🌟 See iconic India Gate at night\n🗼 Visit 800-year-old Qutub Minar\n🪷 Experience serene Lotus Temple",
      value: "$420"
    },
    {
      id: "himachal-combo",
      name: "Himachal Complete Experience",
      duration: "3 Days / 2 Nights",
      destinations: ["Shimla - The Queen of Hills", "Kufri - Himalayan ski resort", "Chail - Scenic hill station", "Local markets & Mall Road"],
      image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800",
      highlights: "🚂 Toy train ride experience\n⛷️ Snow activities in Kufri\n🏔️ Panoramic mountain views\n🛍️ Shopping at Mall Road",
      value: "$440"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Rest of the Apply page JSX remains exactly the same until the form submission button */}
      {/* I'll only show the changed onSubmit handler and submit button */}
      
      {/* All your existing JSX for hero, welcome process, tour selection, etc. stays the same */}
      {/* Just update the submit button section: */}
      
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Your Application</h2>
            <p className="text-xl text-gray-600">Fill in all details carefully • Offer letter within 30 minutes</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            {/* All your existing form fields remain the same */}
            {/* Just update the submit button at the end: */}
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-accent-500 via-accent-600 to-accent-700 text-white py-6 rounded-xl font-bold text-xl hover:shadow-2xl transition-all transform hover:scale-[1.02] flex items-center justify-center space-x-3 group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                  <span>Submitting Application...</span>
                </>
              ) : (
                <>
                  <span>Submit Application Now</span>
                  <Send className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </>
              )}
            </button>

            <div className="mt-6 text-center space-y-2">
              <p className="text-sm text-gray-600 flex items-center justify-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Confirmation email sent immediately</span>
              </p>
              <p className="text-sm text-gray-600 flex items-center justify-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Offer letter within 30 minutes</span>
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Bottom CTA section remains the same */}
    </div>
  )
}

export default Apply