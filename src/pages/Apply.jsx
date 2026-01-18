import { motion } from 'framer-motion'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { Send, Building2, CheckCircle } from 'lucide-react'
import { ctUniversityCourses, ctGroupCourses, accommodationOptions } from '../data/coursesData'

const Apply = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm()
  const [selectedInstitution, setSelectedInstitution] = useState('ctu')
  const [selectedCategory, setSelectedCategory] = useState('')

  const onSubmit = (data) => {
    console.log('Application Data:', data)
    toast.success('Application submitted successfully! You will receive your offer letter within 30 minutes.')
  }

  const institutionCourses = selectedInstitution === 'ctu' ? ctUniversityCourses : ctGroupCourses
  const categories = Object.keys(institutionCourses)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Apply Now</h1>
          <p className="text-xl text-gray-100 mb-6">Start your journey to CT University • July 2026 Intake</p>
          <div className="inline-block px-6 py-3 bg-accent-500 rounded-full font-semibold">
            🎓 Get 50% Tuition Scholarship + Free Airport Pickup + Free 3-Day India Tour
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl shadow-xl p-8">
            
            {/* Personal Details */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">1</span>
                Personal Details
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name (In Capital Letters) *</label>
                  <input {...register("name", { required: true })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" placeholder="JOHN DOE" />
                  {errors.name && <span className="text-red-500 text-sm">This field is required</span>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth *</label>
                  <input type="date" {...register("dob", { required: true })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" />
                  {errors.dob && <span className="text-red-500 text-sm">This field is required</span>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Sex *</label>
                  <select {...register("sex", { required: true })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500">
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nationality (on Passport) *</label>
                  <input {...register("nationality", { required: true })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" placeholder="Zambian" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Passport Number</label>
                  <input {...register("passportNo")} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" placeholder="ZM123456" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Father/Guardian Name *</label>
                  <input {...register("fatherName", { required: true })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mother Name *</label>
                  <input {...register("motherName", { required: true })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" />
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">2</span>
                Contact Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Address *</label>
                  <input {...register("address", { required: true })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                  <input type="tel" {...register("phone", { required: true })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" placeholder="+260 XXX XXX XXX" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input type="email" {...register("email", { required: true })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500" />
                </div>
              </div>
            </div>

            {/* Programme Selection */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">3</span>
                Programme Selection
              </h2>

              <div className="mb-6 flex space-x-4">
                <button type="button" onClick={() => setSelectedInstitution('ctu')} className={`flex-1 py-4 rounded-lg font-semibold transition-all ${selectedInstitution === 'ctu' ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700'}`}>
                  <Building2 className="w-6 h-6 mx-auto mb-2" />
                  CT University
                </button>
                <button type="button" onClick={() => setSelectedInstitution('ctg')} className={`flex-1 py-4 rounded-lg font-semibold transition-all ${selectedInstitution === 'ctg' ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700'}`}>
                  <Building2 className="w-6 h-6 mx-auto mb-2" />
                  CT Group
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Programme Category *</label>
                  <select {...register("category", { required: true })} onChange={(e) => setSelectedCategory(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500">
                    <option value="">Select Category</option>
                    {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Programme Name *</label>
                  <select {...register("programme", { required: true })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500">
                    <option value="">Select Programme</option>
                    {selectedCategory && institutionCourses[selectedCategory]?.map(course => (
                      <option key={course.id} value={course.name}>{course.name} - ${course.feeAfterScholarship}/year (50% OFF)</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Accommodation */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">4</span>
                Accommodation Preference
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {accommodationOptions.map(option => (
                  <label key={option.id} className="relative">
                    <input type="radio" {...register("accommodation", { required: true })} value={option.id} className="peer sr-only" />
                    <div className="p-6 border-2 border-gray-300 rounded-lg cursor-pointer peer-checked:border-primary-600 peer-checked:bg-primary-50">
                      <h3 className="font-bold text-lg mb-2">{option.name}</h3>
                      <p className="text-2xl font-bold text-primary-600 mb-3">${option.price}/month</p>
                      <div className="space-y-1 text-sm">
                        {option.includes.map((item, idx) => <div key={idx} className="flex items-center text-green-600"><CheckCircle className="w-4 h-4 mr-2" />{item}</div>)}
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit */}
            <button type="submit" className="w-full bg-gradient-to-r from-accent-500 to-accent-600 text-white py-5 rounded-lg font-bold text-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2">
              <span>Submit Application</span>
              <Send className="w-5 h-5" />
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">
              By submitting, you agree to receive your offer letter within 30 minutes
            </p>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Apply