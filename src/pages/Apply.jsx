import { motion } from 'framer-motion'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { Send, Building2, CheckCircle, Upload, Image, FileText, Award, Plane, MapPin, Home, Calendar, Users, Star } from 'lucide-react'
import { ctUniversityCourses, ctGroupCourses, accommodationOptions } from '../data/coursesData'

const Apply = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm()
  const [selectedInstitution, setSelectedInstitution] = useState('ctu')
  const [selectedCategory, setSelectedCategory] = useState('')

  const onSubmit = (data) => {
    console.log('Application Data:', data)
    toast.success('🎉 Application submitted successfully! You will receive your offer letter within 30 minutes.')
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
      day: "Day 2-4",
      title: "3-Day Welcome India Tour",
      description: "Experience the beauty and culture of India with our exclusive guided tour. All transportation, accommodation, and meals included!",
      icon: MapPin,
      activities: [
        "🏔️ Manali - Snow-capped mountains & adventure sports",
        "🕌 Taj Mahal - UNESCO World Heritage Site visit",
        "🏛️ Red Fort & India Gate - Delhi's historic landmarks",
        "🌄 Himachal Pradesh - Scenic mountain valleys",
        "🍛 Traditional Indian cuisine experiences",
        "📸 Professional photos at iconic locations"
      ],
      color: "from-orange-500 to-red-500"
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

  const tourGallery = [
    { title: "Taj Mahal Visit", location: "Agra, India", emoji: "🕌" },
    { title: "Manali Mountains", location: "Himachal Pradesh", emoji: "🏔️" },
    { title: "Red Fort", location: "Delhi, India", emoji: "🏛️" },
    { title: "India Gate", location: "Delhi, India", emoji: "🌟" },
    { title: "Local Cuisine", location: "Various Locations", emoji: "🍛" },
    { title: "Group Adventures", location: "Himachal", emoji: "🎿" }
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
                <span>Free 3-Day India Tour</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <Home className="w-5 h-5 text-accent-400" />
                <span>Settlement Support</span>
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
                ✨ EXCLUSIVE OFFER
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Your Complete Welcome Experience</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We don't just admit you - we welcome you with an unforgettable 5-day experience worth over $1,500, absolutely FREE!
              </p>
            </motion.div>
          </div>

          <div className="space-y-8">
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

      {/* Tour Gallery Preview */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Your 3-Day Welcome Tour Destinations</h2>
            <p className="text-xl text-gray-100">Experience India's most iconic landmarks - all included in your welcome package!</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tourGallery.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all group"
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{item.emoji}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-200 text-sm">{item.location}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Your Application</h2>
            <p className="text-xl text-gray-600">Fill in all details carefully • Offer letter within 30 minutes</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            
            {/* Personal Details */}
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

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Passport Expiry Date *</label>
                  <input type="date" {...register("passportExpiry", { required: true })} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Place of Birth *</label>
                  <input {...register("placeOfBirth", { required: true })} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" placeholder="Lusaka, Zambia" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Marital Status *</label>
                  <select {...register("maritalStatus", { required: true })} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500">
                    <option value="">Select Status</option>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Religion</label>
                  <input {...register("religion")} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" placeholder="Christianity" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Blood Group</label>
                  <select {...register("bloodGroup")} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500">
                    <option value="">Select Blood Group</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Family Details */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-full flex items-center justify-center mr-3 shadow-lg">2</span>
                Family Details
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Father's Full Name *</label>
                  <input {...register("fatherName", { required: true })} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Father's Occupation *</label>
                  <input {...register("fatherOccupation", { required: true })} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Mother's Full Name *</label>
                  <input {...register("motherName", { required: true })} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Mother's Occupation *</label>
                  <input {...register("motherOccupation", { required: true })} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Guardian Name (if applicable)</label>
                  <input {...register("guardianName")} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Guardian Relationship</label>
                  <input {...register("guardianRelation")} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" placeholder="Uncle, Aunt, etc." />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Annual Family Income (USD)</label>
                  <input type="number" {...register("familyIncome")} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" placeholder="15000" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Emergency Contact Phone *</label>
                  <input type="tel" {...register("emergencyPhone", { required: true })} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" placeholder="+260 XXX XXX XXX" />
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-full flex items-center justify-center mr-3 shadow-lg">3</span>
                Contact Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Permanent Address *</label>
                  <textarea {...register("permanentAddress", { required: true })} rows={3} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" placeholder="House Number, Street, Area" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">City *</label>
                  <input {...register("city", { required: true })} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" placeholder="Lusaka" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Province/State *</label>
                  <input {...register("state", { required: true })} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" placeholder="Lusaka Province" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Postal Code</label>
                  <input {...register("postalCode")} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" placeholder="10101" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Country *</label>
                  <input {...register("country", { required: true })} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" value="Zambia" readOnly />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Mobile Number *</label>
                  <input type="tel" {...register("mobile", { required: true })} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" placeholder="+260 XXX XXX XXX" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">WhatsApp Number *</label>
                  <input type="tel" {...register("whatsapp", { required: true })} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" placeholder="+260 XXX XXX XXX" />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                  <input type="email" {...register("email", { required: true })} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" placeholder="john.doe@example.com" />
                </div>
              </div>
            </div>

            {/* Educational Background */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-full flex items-center justify-center mr-3 shadow-lg">4</span>
                Educational Background
              </h2>
              
              <div className="space-y-8">
                {/* Grade 12 / O-Level */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-bold text-lg text-gray-900 mb-4">Latest Qualification</h3>
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
                        <option value="Master">Master's Degree</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">School/Institution Name *</label>
                      <input {...register("schoolName", { required: true })} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Year of Completion *</label>
                      <input type="number" {...register("yearOfCompletion", { required: true })} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" placeholder="2024" min="1990" max="2026" />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Percentage/Grade *</label>
                      <input {...register("percentage", { required: true })} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" placeholder="85%" />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Subjects Studied</label>
                      <input {...register("subjectsStudied")} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" placeholder="Mathematics, English, Science, etc." />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Have you studied before in India?</label>
                  <select {...register("studiedInIndia")} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500">
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Programme Selection */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-full flex items-center justify-center mr-3 shadow-lg">5</span>
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
                        {course.name} - ${course.feeAfterScholarship}/year (50% OFF from ${course.feeUSD})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Start Date *</label>
                  <select {...register("startDate", { required: true })} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500">
                    <option value="">Select Intake</option>
                    <option value="July 2026">July 2026</option>
                    <option value="January 2027">January 2027</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">How did you hear about us? *</label>
                  <select {...register("referralSource", { required: true })} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500">
                    <option value="">Select Source</option>
                    <option value="Friend/Family">Friend/Family</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Website">Website</option>
                    <option value="Education Fair">Education Fair</option>
                    <option value="Agent">Education Agent</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Accommodation */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-full flex items-center justify-center mr-3 shadow-lg">6</span>
                Accommodation Preference
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {accommodationOptions.map(option => (
                  <label key={option.id} className="relative group">
                    <input type="radio" {...register("accommodation", { required: true })} value={option.id} className="peer sr-only" />
                    <div className="p-6 border-3 border-gray-300 rounded-xl cursor-pointer peer-checked:border-primary-600 peer-checked:bg-gradient-to-br peer-checked:from-primary-50 peer-checked:to-primary-100 hover:border-primary-400 transition-all group-hover:shadow-lg">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-xl">{option.name}</h3>
                        <div className="w-6 h-6 rounded-full border-2 border-gray-400 peer-checked:border-primary-600 peer-checked:bg-primary-600 flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100" />
                        </div>
                      </div>
                      <p className="text-3xl font-bold text-primary-600 mb-4">${option.price}<span className="text-lg text-gray-600">/month</span></p>
                      <div className="space-y-2 text-sm">
                        <p className="font-semibold text-gray-700 mb-2">Includes:</p>
                        {option.includes.map((item, idx) => (
                          <div key={idx} className="flex items-center text-green-600">
                            <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Document Upload */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-full flex items-center justify-center mr-3 shadow-lg">7</span>
                Document Upload
              </h2>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 hover:border-primary-500 transition-all">
                    <div className="text-center">
                      <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Passport Photo *</label>
                      <input type="file" {...register("passportPhoto", { required: true })} accept="image/*" className="w-full text-sm" />
                      <p className="text-xs text-gray-500 mt-2">White background, recent photo</p>
                    </div>
                  </div>

                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 hover:border-primary-500 transition-all">
                    <div className="text-center">
                      <FileText className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Passport Copy *</label>
                      <input type="file" {...register("passportCopy", { required: true })} accept=".pdf,image/*" className="w-full text-sm" />
                      <p className="text-xs text-gray-500 mt-2">Clear, colored scan</p>
                    </div>
                  </div>

                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 hover:border-primary-500 transition-all">
                    <div className="text-center">
                      <FileText className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Academic Certificates *</label>
                      <input type="file" {...register("certificates", { required: true })} accept=".pdf,image/*" multiple className="w-full text-sm" />
                      <p className="text-xs text-gray-500 mt-2">Grade 12/O-Level/Diploma</p>
                    </div>
                  </div>

                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 hover:border-primary-500 transition-all">
                    <div className="text-center">
                      <FileText className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Transcripts *</label>
                      <input type="file" {...register("transcripts", { required: true })} accept=".pdf,image/*" multiple className="w-full text-sm" />
                      <p className="text-xs text-gray-500 mt-2">Academic records</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Declaration */}
            <div className="mb-8 bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border-2 border-gray-200">
              <label className="flex items-start space-x-3 cursor-pointer">
                <input type="checkbox" {...register("declaration", { required: true })} className="mt-1 w-5 h-5 text-primary-600 border-gray-300 rounded focus:ring-primary-500" />
                <div className="text-sm text-gray-700">
                  <span className="font-semibold">Declaration: </span>
                  I hereby declare that all the information provided above is true and correct to the best of my knowledge. I understand that providing false information may result in the rejection of my application or cancellation of admission.
                </div>
              </label>
              {errors.declaration && <span className="text-red-500 text-sm ml-8 mt-2 block">⚠️ You must accept the declaration</span>}
            </div>

            {/* Submit */}
            <button type="submit" className="w-full bg-gradient-to-r from-accent-500 via-accent-600 to-accent-700 text-white py-6 rounded-xl font-bold text-xl hover:shadow-2xl transition-all transform hover:scale-[1.02] flex items-center justify-center space-x-3 group">
              <span>Submit Application Now</span>
              <Send className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>

            <div className="mt-6 text-center space-y-2">
              <p className="text-sm text-gray-600 flex items-center justify-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Offer letter within 30 minutes</span>
              </p>
              <p className="text-sm text-gray-600 flex items-center justify-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Acceptance letter within 24 hours</span>
              </p>
              <p className="text-xs text-gray-500 mt-4">By submitting, you agree to our Terms & Conditions and Privacy Policy</p>
            </div>
          </form>
        </div>
      </section>

      {/* Why Choose Us Bottom CTA */}
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
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-gray-200">Round-the-clock assistance from application to graduation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">CSR Initiative</h3>
              <p className="text-gray-200">Non-profit program focused on empowering Zambian students</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Apply