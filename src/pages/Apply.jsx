import { motion } from 'framer-motion'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { Send, Building2, CheckCircle, Upload, FileText, Award, Plane, MapPin, Home, Star } from 'lucide-react'
import { ctUniversityCourses, ctGroupCourses } from '../data/coursesData'
import { ctUniversityAccommodation, zeroAIAccommodation, accommodationNotes } from '../data/accommodationData'

const Apply = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm()
  const [selectedInstitution, setSelectedInstitution] = useState('ctu')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedTour, setSelectedTour] = useState('')
  const [accommodationType, setAccommodationType] = useState('university')
  const [submitting, setSubmitting] = useState(false)

  const onSubmit = async (data) => {
    setSubmitting(true)
    
    try {
      const response = await fetch('/api/submit-application.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })

      const result = await response.json()

      if (result.success) {
        toast.success('🎉 Application submitted successfully! You will receive your offer letter within 30 minutes.')
      } else {
        throw new Error(result.message || 'Failed to submit application')
      }
    } catch (error) {
      console.error('Application submission error:', error)
      toast.error('Failed to submit application. Please try again or contact us directly.')
    } finally {
      setSubmitting(false)
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
      highlights: "🏔️ Experience snow in the Himalayas\n⛷️ Optional paragliding & skiing\n🌄 Scenic mountain valley views\n🏞️ Visit sacred Hadimba Temple",
      value: "$480"
    },
    {
      id: "delhi-heritage",
      name: "Delhi Heritage Tour",
      duration: "3 Days / 2 Nights",
      destinations: ["Red Fort - UNESCO World Heritage", "India Gate - War memorial monument", "Qutub Minar - 73m tall victory tower", "Lotus Temple - Bahai House of Worship"],
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800",
      highlights: "🏛️ Explore historic Red Fort\n🌟 See iconic India Gate at night\n🗼 Visit 800-year-old Qutub Minar\n🪧 Experience serene Lotus Temple",
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
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-block mb-6 px-6 py-2 bg-accent-500 rounded-full text-sm font-semibold shadow-lg">
              ⚡ LIMITED SLOTS • July 2026 Intake Now Open!
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Apply Now</h1>
            <p className="text-2xl text-gray-100 mb-8">Start Your Journey to CT University</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm max-w-4xl mx-auto">
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <Award className="w-5 h-5 text-accent-400" />
                <span>50% Tuition Discount</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <Plane className="w-5 h-5 text-accent-400" />
                <span>Free Airport Pickup</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <MapPin className="w-5 h-5 text-accent-400" />
                <span>Choose Your Free 3-Day Tour</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <Home className="w-5 h-5 text-accent-400" />
                <span>Flexible Accommodation Options</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Welcome Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="inline-block px-6 py-2 bg-accent-100 text-accent-700 rounded-full font-semibold mb-4">
                ✨ EXCLUSIVE WELCOME PACKAGE
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Your Complete Arrival Experience</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We welcome you with a 5-day experience: Day 1 arrival & check-in, Day 2-4 your choice of India tour (valued at $420-480), Day 5 settlement support - all FREE!
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {welcomeProcess.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${process.color} p-6 text-white`}>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <process.icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold opacity-90">{process.day}</div>
                      <h3 className="text-2xl font-bold">{process.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-lg text-gray-700 mb-6">{process.description}</p>
                  <div className="space-y-3">
                    {process.activities.map((activity, idx) => (
                      <div key={idx} className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Selection Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your FREE 3-Day Welcome Tour</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select one amazing destination to explore during Days 2-4 of your welcome experience. All tours include accommodation, meals, transport, and guide!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tourOptions.map((tour) => (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all cursor-pointer group ${selectedTour === tour.id ? 'ring-4 ring-primary-500' : ''}`}
                onClick={() => setSelectedTour(tour.id)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img src={tour.image} alt={tour.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute top-4 right-4 bg-accent-500 text-white px-4 py-2 rounded-full font-bold text-sm">
                    Value: {tour.value}
                  </div>
                  {selectedTour === tour.id && (
                    <div className="absolute top-4 left-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5" />
                      <span>Selected</span>
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-2xl font-bold mb-1">{tour.name}</h3>
                    <p className="text-sm opacity-90">{tour.duration}</p>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <div className="mb-4">
                    <h4 className="font-bold text-gray-900 mb-3">Tour Highlights:</h4>
                    <div className="space-y-2 text-sm text-gray-700 whitespace-pre-line">
                      {tour.highlights}
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <h4 className="font-bold text-gray-900 mb-3">Destinations:</h4>
                    <div className="space-y-2">
                      {tour.destinations.map((dest, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm">
                          <MapPin className="w-4 h-4 text-primary-600 flex-shrink-0" />
                          <span className="text-gray-700">{dest}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">🎁 All Tours Include:</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mb-3">
                  <Home className="w-6 h-6 text-white" />
                </div>
                <p className="font-semibold text-gray-900">2 Nights Hotel</p>
                <p className="text-sm text-gray-600">3-star accommodation</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mb-3">
                  <span className="text-2xl">🍽️</span>
                </div>
                <p className="font-semibold text-gray-900">All Meals</p>
                <p className="text-sm text-gray-600">Breakfast, lunch & dinner</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mb-3">
                  <span className="text-2xl">🚌</span>
                </div>
                <p className="font-semibold text-gray-900">Transport</p>
                <p className="text-sm text-gray-600">AC vehicle throughout</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mb-3">
                  <span className="text-2xl">👨‍🏫</span>
                </div>
                <p className="font-semibold text-gray-900">Tour Guide</p>
                <p className="text-sm text-gray-600">Professional guidance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form - CONTINUES BELOW WITH ORIGINAL DESIGN */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Your Application</h2>
            <p className="text-xl text-gray-600">Fill in all details carefully • Offer letter within 30 minutes</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            
            {/* STEP 1: Personal Details */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-full flex items-center justify-center mr-3 shadow-lg">1</span>
                Personal Details
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name (As Per Passport/ID) *</label>
                  <input {...register("fullName", { required: true })} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all" placeholder="JOHN MUKUKA DOE" />
                  {errors.fullName && <span className="text-red-500 text-sm flex items-center mt-1"><span className="mr-1">⚠️</span> This field is required</span>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Date of Birth *</label>
                  <input type="date" {...register("dob", { required: true })} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
                  {errors.dob && <span className="text-red-500 text-sm">Required</span>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Gender *</label>
                  <select {...register("gender", { required: true })} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500">
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Nationality *</label>
                  <input {...register("nationality", { required: true })} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" placeholder="Zambian" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Passport Number *</label>
                  <input {...register("passportNo", { required: true })} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" placeholder="ZM123456789" />
                </div>
              </div>
            </div>

            {/* STEP 2: Contact Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-full flex items-center justify-center mr-3 shadow-lg">2</span>
                Contact Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                  <input type="email" {...register("email", { required: true })} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" placeholder="john.doe@example.com" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Mobile Number *</label>
                  <input type="tel" {...register("mobile", { required: true })} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" placeholder="+260 XXX XXX XXX" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">WhatsApp Number *</label>
                  <input type="tel" {...register("whatsapp", { required: true })} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" placeholder="+260 XXX XXX XXX" />
                </div>
              </div>
            </div>

            {/* STEP 3: Educational Background */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-full flex items-center justify-center mr-3 shadow-lg">3</span>
                Educational Background
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Qualification Level *</label>
                  <select {...register("qualificationLevel", { required: true })} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500">
                    <option value="">Select Level</option>
                    <option value="Grade 12">Grade 12</option>
                    <option value="O-Level">O-Level</option>
                    <option value="A-Level">A-Level</option>
                    <option value="Diploma">Diploma</option>
                    <option value="Bachelor">Bachelor's Degree</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Year of Completion *</label>
                  <input type="number" {...register("yearOfCompletion", { required: true })} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" placeholder="2024" min="1990" max="2026" />
                </div>
              </div>
            </div>

            {/* STEP 4: Programme Selection */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-full flex items-center justify-center mr-3 shadow-lg">4</span>
                Programme Selection
              </h2>

              <div className="mb-8 grid grid-cols-2 gap-4">
                <button type="button" onClick={() => setSelectedInstitution('ctu')} className={`py-6 rounded-xl font-bold text-lg transition-all shadow-lg ${selectedInstitution === 'ctu' ? 'bg-gradient-to-br from-primary-600 to-primary-700 text-white scale-105' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                  <Building2 className="w-8 h-8 mx-auto mb-2" />
                  CT University
                </button>
                <button type="button" onClick={() => setSelectedInstitution('ctg')} className={`py-6 rounded-xl font-bold text-lg transition-all shadow-lg ${selectedInstitution === 'ctg' ? 'bg-gradient-to-br from-primary-600 to-primary-700 text-white scale-105' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                  <Building2 className="w-8 h-8 mx-auto mb-2" />
                  CT Group
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Programme Category *</label>
                  <select {...register("category", { required: true })} onChange={(e) => setSelectedCategory(e.target.value)} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500">
                    <option value="">Select Category</option>
                    {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Programme Name *</label>
                  <select {...register("programme", { required: true })} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500">
                    <option value="">Select Programme</option>
                    {selectedCategory && institutionCourses[selectedCategory]?.map(course => (
                      <option key={course.id} value={course.name}>
                        {course.name} - ${course.feeAfterScholarship}/year (50% OFF)
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* STEP 5: Tour Selection */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-full flex items-center justify-center mr-3 shadow-lg">5</span>
                Welcome Tour Selection
              </h2>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Select Your FREE 3-Day Tour *</label>
                <select {...register("welcomeTour", { required: true })} value={selectedTour} onChange={(e) => setSelectedTour(e.target.value)} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500">
                  <option value="">Choose your tour destination</option>
                  {tourOptions.map(tour => (
                    <option key={tour.id} value={tour.id}>{tour.name} - {tour.duration} (Value: {tour.value})</option>
                  ))}
                </select>
                {errors.welcomeTour && <span className="text-red-500 text-sm">Please select your welcome tour</span>}
              </div>
            </div>

            {/* STEP 6: Accommodation */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-full flex items-center justify-center mr-3 shadow-lg">6</span>
                Accommodation Preference
              </h2>

              {/* Accommodation Type Toggle */}
              <div className="mb-8 grid grid-cols-2 gap-4">
                <button 
                  type="button" 
                  onClick={() => setAccommodationType('university')} 
                  className={`py-6 rounded-xl font-bold text-lg transition-all shadow-lg ${accommodationType === 'university' ? 'bg-gradient-to-br from-primary-600 to-primary-700 text-white scale-105' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  <Home className="w-8 h-8 mx-auto mb-2" />
                  CT University Hostel
                  <p className="text-xs font-normal mt-2 opacity-90">Annual Payment</p>
                </button>
                <button 
                  type="button" 
                  onClick={() => setAccommodationType('zeroai')} 
                  className={`py-6 rounded-xl font-bold text-lg transition-all shadow-lg ${accommodationType === 'zeroai' ? 'bg-gradient-to-br from-accent-500 to-accent-600 text-white scale-105' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  <Star className="w-8 h-8 mx-auto mb-2" />
                  ZeroAI Alternatives
                  <p className="text-xs font-normal mt-2 opacity-90">Flexible Monthly</p>
                </button>
              </div>

              {/* CT University Hostel Options */}
              {accommodationType === 'university' && (
                <div>
                  <div className="mb-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm text-blue-800">
                      🏛️ <strong>CT University Official Hostel:</strong> Annual payment required. First-year international students must stay in university accommodation.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {ctUniversityAccommodation.map(option => (
                      <label key={option.id} className="relative group">
                        <input type="radio" {...register("accommodation", { required: true })} value={option.id} className="peer sr-only" />
                        <div className="p-6 border-3 border-gray-300 rounded-xl cursor-pointer peer-checked:border-primary-600 peer-checked:bg-gradient-to-br peer-checked:from-primary-50 peer-checked:to-primary-100 hover:border-primary-400 transition-all group-hover:shadow-lg">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <h3 className="font-bold text-lg mb-1">{option.name}</h3>
                              <p className="text-xs text-gray-600">{option.type}</p>
                            </div>
                            <div className="w-6 h-6 rounded-full border-2 border-gray-400 peer-checked:border-primary-600 peer-checked:bg-primary-600 flex items-center justify-center flex-shrink-0">
                              <div className="w-3 h-3 bg-white rounded-full opacity-0 peer-checked:opacity-100"></div>
                            </div>
                          </div>
                          <div className="mb-4">
                            <div className="flex items-baseline space-x-2">
                              <span className="text-3xl font-bold text-primary-600">${option.price}</span>
                              <span className="text-sm text-gray-600">{option.period}</span>
                            </div>
                          </div>
                          <div className="space-y-2">
                            {option.includes.map((item, idx) => (
                              <div key={idx} className="flex items-start text-xs text-gray-700">
                                <CheckCircle className="w-3 h-3 mr-2 flex-shrink-0 text-green-600 mt-0.5" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>

                  <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="text-sm text-yellow-800">
                      ⚠️ <strong>Note:</strong> One-time administrative charges of $350 USD. Electricity charges as per actual consumption.
                    </p>
                  </div>
                </div>
              )}

              {/* ZeroAI Alternative Accommodation */}
              {accommodationType === 'zeroai' && (
                <div>
                  <div className="mb-6 bg-accent-50 border border-accent-200 rounded-lg p-4">
                    <p className="text-sm text-accent-800">
                      ✨ <strong>ZeroAI Partner Accommodations:</strong> Flexible monthly payments! We help students find affordable housing near campus or in the city with our trusted property partners.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {zeroAIAccommodation.map(option => (
                      <label key={option.id} className="relative group">
                        <input type="radio" {...register("accommodation", { required: true })} value={option.id} className="peer sr-only" />
                        <div className="p-6 border-3 border-gray-300 rounded-xl cursor-pointer peer-checked:border-accent-500 peer-checked:bg-gradient-to-br peer-checked:from-accent-50 peer-checked:to-accent-100 hover:border-accent-400 transition-all group-hover:shadow-lg">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <h3 className="font-bold text-lg mb-1">{option.name}</h3>
                              <p className="text-xs text-gray-600">{option.type}</p>
                            </div>
                            <div className="w-6 h-6 rounded-full border-2 border-gray-400 peer-checked:border-accent-500 peer-checked:bg-accent-500 flex items-center justify-center flex-shrink-0">
                              <div className="w-3 h-3 bg-white rounded-full opacity-0 peer-checked:opacity-100"></div>
                            </div>
                          </div>
                          <div className="mb-4">
                            <div className="flex items-baseline space-x-2">
                              <span className="text-3xl font-bold text-accent-600">${option.price}</span>
                              <span className="text-sm text-gray-600">{option.period}</span>
                            </div>
                          </div>
                          <div className="space-y-2 mb-4">
                            {option.includes.map((item, idx) => (
                              <div key={idx} className="flex items-start text-xs text-gray-700">
                                <CheckCircle className="w-3 h-3 mr-2 flex-shrink-0 text-green-600 mt-0.5" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                          {option.note && (
                            <div className="pt-3 border-t border-gray-200">
                              <p className="text-xs text-gray-600 italic">{option.note}</p>
                            </div>
                          )}
                        </div>
                      </label>
                    ))}
                  </div>

                  <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm text-blue-800">
                      💡 <strong>Why Choose ZeroAI Accommodation?</strong> No large upfront payment, flexible monthly terms, more independence, and our team helps you settle in!
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* STEP 7: Document Upload */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-full flex items-center justify-center mr-3 shadow-lg">7</span>
                Document Upload
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 hover:border-primary-500 transition-all">
                  <div className="text-center">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Passport Photo *</label>
                    <input type="file" {...register("passportPhoto", { required: true })} accept="image/*" className="w-full text-sm" />
                  </div>
                </div>

                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 hover:border-primary-500 transition-all">
                  <div className="text-center">
                    <FileText className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Academic Certificates *</label>
                    <input type="file" {...register("certificates", { required: true })} accept=".pdf,image/*" multiple className="w-full text-sm" />
                  </div>
                </div>
              </div>
            </div>

            {/* STEP 8: Declaration */}
            <div className="mb-8 bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border-2 border-gray-200">
              <label className="flex items-start space-x-3 cursor-pointer">
                <input type="checkbox" {...register("declaration", { required: true })} className="mt-1 w-5 h-5 text-primary-600 border-gray-300 rounded focus:ring-primary-500" />
                <div className="text-sm text-gray-700">
                  <span className="font-semibold">Declaration: </span>
                  I hereby declare that all the information provided above is true and correct to the best of my knowledge.
                </div>
              </label>
              {errors.declaration && <span className="text-red-500 text-sm ml-8 mt-2 block">⚠️ You must accept the declaration</span>}
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={submitting}
              className="w-full bg-gradient-to-r from-accent-500 via-accent-600 to-accent-700 text-white py-6 rounded-xl font-bold text-xl hover:shadow-2xl transition-all transform hover:scale-[1.02] flex items-center justify-center space-x-3 group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? (
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
                <span>Offer letter within 30 minutes</span>
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why ZeroAI Technologies?</h2>
            <p className="text-xl text-gray-100">The most comprehensive study abroad support in Zambia</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">100% Success Rate</h3>
              <p className="text-gray-200">Every student we've supported has been successfully admitted</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-gray-200">Round-the-clock assistance from application to graduation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Flexible Options</h3>
              <p className="text-gray-200">Choose between university hostel or our affordable partner accommodations</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Apply