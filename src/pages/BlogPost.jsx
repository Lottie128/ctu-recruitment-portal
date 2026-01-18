import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Clock, User, Share2 } from 'lucide-react'

const BlogPost = () => {
  const { id } = useParams()

  const blogPosts = {
    'visa-guide-2026': {
      title: "Complete Guide to Student Visa for India 2026",
      author: "Lottie Mukuka",
      date: "January 15, 2026",
      readTime: "8 min read",
      category: "Visa Guide",
      content: `
        <h2>Introduction</h2>
        <p>Applying for an Indian student visa from Zambia is a straightforward process when you have the right guidance. This comprehensive guide will walk you through every step of obtaining your student visa for studying at CT University in India.</p>

        <h2>Required Documents</h2>
        <ul>
          <li>Valid passport (minimum 6 months validity)</li>
          <li>Acceptance letter from CT University</li>
          <li>Completed visa application form</li>
          <li>Recent passport-size photographs (white background)</li>
          <li>Academic certificates and transcripts</li>
          <li>Bank statements showing financial capability</li>
          <li>Proof of accommodation in India</li>
          <li>Medical fitness certificate</li>
        </ul>

        <h2>Step-by-Step Application Process</h2>
        <p><strong>Step 1: Receive Your Offer Letter</strong><br/>After submitting your application through our portal, you'll receive your offer letter within 30 minutes. This is a crucial document for your visa application.</p>

        <p><strong>Step 2: Complete the Online Visa Application</strong><br/>Visit the Indian Visa Application Centre website and fill out the online application form. Make sure all information matches your passport exactly.</p>

        <p><strong>Step 3: Gather Required Documents</strong><br/>Collect all necessary documents as listed above. Ensure all photocopies are clear and documents are properly attested.</p>

        <p><strong>Step 4: Book Visa Appointment</strong><br/>Schedule an appointment at the Indian High Commission in Lusaka. Book well in advance as slots fill up quickly.</p>

        <p><strong>Step 5: Attend Visa Interview</strong><br/>Arrive at your appointment on time with all original documents and copies. Be prepared to answer questions about your study plans.</p>

        <p><strong>Step 6: Track Your Application</strong><br/>After submission, you can track your visa status online using the reference number provided.</p>

        <h2>Processing Time</h2>
        <p>Student visa processing typically takes 2-3 weeks from the date of application. We recommend applying at least 6 weeks before your intended travel date to account for any delays.</p>

        <h2>Visa Fees</h2>
        <p>The student visa fee for Zambian nationals is approximately $120 USD. Additional service charges may apply at the visa application centre.</p>

        <h2>ZeroAI Technologies Support</h2>
        <p>Our team provides complete assistance throughout the visa application process, including document preparation, application review, and interview preparation. Contact us for personalized support.</p>

        <h2>Important Tips</h2>
        <ul>
          <li>Apply early - don't wait until the last minute</li>
          <li>Double-check all documents for accuracy</li>
          <li>Keep photocopies of everything you submit</li>
          <li>Be honest and clear in your visa interview</li>
          <li>Have your financial documents ready</li>
        </ul>

        <h2>Contact Us for Help</h2>
        <p>If you need assistance with your visa application, our team is here to help. Reach out to us at international.admissions@ctgroup.in or call +260 XXX XXX XXX.</p>
      `
    },
    'why-study-india': {
      title: "Why Study in India? 10 Reasons for Zambian Students",
      author: "Lottie Mukuka",
      date: "January 10, 2026",
      readTime: "6 min read",
      category: "Study Abroad",
      content: `
        <h2>Why India is the Perfect Destination for Zambian Students</h2>
        <p>India has emerged as a leading destination for international students, offering world-class education at affordable prices. Here are 10 compelling reasons why Zambian students should consider studying in India.</p>

        <h2>1. Affordable Education</h2>
        <p>With our 50% scholarship, studying in India costs significantly less than Western countries while maintaining high educational standards. Tuition fees range from $1,000-$2,500 per year after scholarship.</p>

        <h2>2. Internationally Recognized Degrees</h2>
        <p>Degrees from CT University are recognized globally by UNESCO, WHO, and various professional bodies, ensuring your qualification is valued worldwide.</p>

        <h2>3. Cultural Diversity</h2>
        <p>India's rich cultural heritage and diverse population create a unique learning environment. Students gain global perspectives while experiencing one of the world's oldest civilizations.</p>

        <h2>4. English-Medium Instruction</h2>
        <p>All programs at CT University are taught in English, making it easier for Zambian students to adapt and succeed academically.</p>

        <h2>5. Modern Infrastructure</h2>
        <p>CT University boasts state-of-the-art facilities including smart classrooms, advanced laboratories, digital library, and high-speed internet campus-wide.</p>

        <h2>6. Industry Partnerships</h2>
        <p>Strong connections with leading companies provide internship opportunities and enhance job prospects after graduation.</p>

        <h2>7. Comprehensive Support System</h2>
        <p>From airport pickup to settlement support, we ensure your transition to life in India is smooth and stress-free.</p>

        <h2>8. Safety and Security</h2>
        <p>CT University campus provides 24/7 security, medical facilities, and a safe environment for international students.</p>

        <h2>9. Growing Alumni Network</h2>
        <p>Join over 100 Zambian students already studying at CT University and benefit from a strong support network.</p>

        <h2>10. Career Opportunities</h2>
        <p>India's booming economy offers post-study work opportunities, while the global recognition of your degree opens doors worldwide.</p>

        <h2>Start Your Journey Today</h2>
        <p>Apply now for the July 2026 intake and begin your educational adventure in India. Our team is ready to guide you every step of the way.</p>
      `
    }
  }

  const post = blogPosts[id] || blogPosts['visa-guide-2026']

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-6 group">
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>
          <div className="mb-4">
            <span className="px-3 py-1 bg-accent-500 rounded-full text-sm font-semibold">
              {post.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{
                lineHeight: '1.8',
                fontSize: '1.125rem'
              }}
            />

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-gray-900">Share this article</h3>
                <button className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                  <Share2 className="w-4 h-4" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p className="text-lg mb-6">Apply now for July 2026 intake with 50% scholarship</p>
            <Link to="/apply" className="inline-block bg-accent-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent-600 transition-colors">
              Apply Now
            </Link>
          </div>
        </div>
      </article>

      <style>{`
        .prose h2 {
          font-size: 1.75rem;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 1rem;
          color: #1f2937;
        }
        .prose h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          color: #374151;
        }
        .prose p {
          margin-bottom: 1.5rem;
          color: #4b5563;
        }
        .prose ul {
          margin-left: 1.5rem;
          margin-bottom: 1.5rem;
          list-style-type: disc;
        }
        .prose li {
          margin-bottom: 0.5rem;
          color: #4b5563;
        }
        .prose strong {
          color: #1f2937;
          font-weight: 600;
        }
      `}</style>
    </div>
  )
}

export default BlogPost