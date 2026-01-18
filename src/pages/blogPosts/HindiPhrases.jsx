import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, Share2, BookOpen } from 'lucide-react'

const HindiPhrases = () => {
  return (
    <article className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link
            to="/blog"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Essential Hindi Phrases for Students in India
          </h1>

          <div className="flex items-center justify-between flex-wrap gap-4 text-gray-600">
            <div className="flex items-center space-x-4">
              <span>By Lottie Mukuka</span>
              <span>•</span>
              <span>January 12, 2026</span>
              <span>•</span>
              <span>10 min read</span>
            </div>
            <button className="flex items-center space-x-2 text-primary-600 hover:text-primary-700">
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-8 md:p-12 prose prose-lg max-w-none"
        >
          <p className="lead text-xl text-gray-700 mb-6">
            Learning basic Hindi will significantly enhance your experience as an international student in India. While most Indians speak English, knowing these essential phrases will help you connect with locals, navigate daily situations, and show respect for Indian culture.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Basic Greetings & Politeness</h2>
          
          <div className="bg-primary-50 p-6 rounded-lg mb-6">
            <ul className="space-y-3">
              <li><strong>Namaste</strong> (नमस्ते) - Hello/Goodbye - The universal greeting in India</li>
              <li><strong>Shukriya / Dhanyavaad</strong> (धन्यवाद) - Thank you</li>
              <li><strong>Maaf kijiye</strong> (माफ़ कीजिये) - Sorry / Excuse me</li>
              <li><strong>Kripya</strong> (कृपया) - Please</li>
              <li><strong>Aap kaise hain?</strong> (आप कैसे हैं?) - How are you? (formal)</li>
              <li><strong>Main theek hoon</strong> (मैं ठीक हूँ) - I'm fine</li>
              <li><strong>Alvida / Phir milenge</strong> (अलविदा / फिर मिलेंगे) - Goodbye / See you again</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Introducing Yourself</h2>
          
          <div className="bg-primary-50 p-6 rounded-lg mb-6">
            <ul className="space-y-3">
              <li><strong>Mera naam _____ hai</strong> (मेरा नाम _____ है) - My name is _____</li>
              <li><strong>Aapka naam kya hai?</strong> (आपका नाम क्या है?) - What is your name?</li>
              <li><strong>Main Zambia se hoon</strong> (मैं ज़ाम्बिया से हूँ) - I am from Zambia</li>
              <li><strong>Aap kahan se hain?</strong> (आप कहाँ से हैं?) - Where are you from?</li>
              <li><strong>Aap se milkar khushi hui</strong> (आप से मिलकर ख़ुशी हुई) - Pleased to meet you</li>
              <li><strong>Main student hoon</strong> (मैं स्टूडेंट हूँ) - I am a student</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Essential Daily Phrases</h2>
          
          <div className="bg-primary-50 p-6 rounded-lg mb-6">
            <ul className="space-y-3">
              <li><strong>Haan / Nahi</strong> (हाँ / नहीं) - Yes / No</li>
              <li><strong>Theek hai</strong> (ठीक है) - Okay / Alright</li>
              <li><strong>Mujhe samajh nahi aaya</strong> (मुझे समझ नहीं आया) - I don't understand</li>
              <li><strong>Aap fir se keh sakte hain?</strong> (आप फिर से कह सकते हैं?) - Can you repeat that?</li>
              <li><strong>Kya aap English bolte hain?</strong> (क्या आप अंग्रेज़ी बोलते हैं?) - Do you speak English?</li>
              <li><strong>Mujhe madad chahiye</strong> (मुझे मदद चाहिए) - I need help</li>
              <li><strong>Mujhe doctor ki zarurat hai</strong> (मुझे डॉक्टर की ज़रूरत है) - I need a doctor</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Food & Restaurant</h2>
          
          <div className="bg-primary-50 p-6 rounded-lg mb-6">
            <ul className="space-y-3">
              <li><strong>Mujhe bhook lagi hai</strong> (मुझे भूख लगी है) - I'm hungry</li>
              <li><strong>Mujhe pyaas lagi hai</strong> (मुझे प्यास लगी है) - I'm thirsty</li>
              <li><strong>Paani chahiye</strong> (पानी चाहिए) - I need water</li>
              <li><strong>Khaana khaya?</strong> (खाना खाया?) - Have you eaten?</li>
              <li><strong>Ye kitne ka hai?</strong> (ये कितने का है?) - How much is this?</li>
              <li><strong>Bahut tasty hai</strong> (बहुत टेस्टी है) - Very tasty</li>
              <li><strong>Thoda kam mirchi</strong> (थोड़ा कम मिर्ची) - Less spicy please</li>
              <li><strong>Bill dijiye</strong> (बिल दीजिये) - Please give me the bill</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Directions & Transport</h2>
          
          <div className="bg-primary-50 p-6 rounded-lg mb-6">
            <ul className="space-y-3">
              <li><strong>Mujhe yahaan jana hai</strong> (मुझे यहाँ जाना है) - I want to go here</li>
              <li><strong>Ye kahan hai?</strong> (ये कहाँ है?) - Where is this?</li>
              <li><strong>Kitna door hai?</strong> (कितना दूर है?) - How far is it?</li>
              <li><strong>Seedhe jao</strong> (सीधे जाओ) - Go straight</li>
              <li><strong>Dayen / Bayen</strong> (दायें / बायें) - Right / Left</li>
              <li><strong>Ruko / Chalo</strong> (रुको / चलो) - Stop / Let's go</li>
              <li><strong>University kahan hai?</strong> (यूनिवर्सिटी कहाँ है?) - Where is the university?</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Numbers 1-10</h2>
          
          <div className="bg-primary-50 p-6 rounded-lg mb-6">
            <div className="grid grid-cols-2 gap-3">
              <div><strong>1 - Ek</strong> (एक)</div>
              <div><strong>2 - Do</strong> (दो)</div>
              <div><strong>3 - Teen</strong> (तीन)</div>
              <div><strong>4 - Chaar</strong> (चार)</div>
              <div><strong>5 - Paanch</strong> (पाँच)</div>
              <div><strong>6 - Che</strong> (छे)</div>
              <div><strong>7 - Saat</strong> (सात)</div>
              <div><strong>8 - Aath</strong> (आठ)</div>
              <div><strong>9 - Nau</strong> (नौ)</div>
              <div><strong>10 - Das</strong> (दस)</div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Everyday Words</h2>
          
          <div className="bg-primary-50 p-6 rounded-lg mb-6">
            <ul className="space-y-3">
              <li><strong>Accha / Bura</strong> (अच्छा / बुरा) - Good / Bad</li>
              <li><strong>Bara / Chota</strong> (बड़ा / छोटा) - Big / Small</li>
              <li><strong>Garam / Thanda</strong> (गरम / ठंडा) - Hot / Cold</li>
              <li><strong>Jaldi / Dheere</strong> (जल्दी / धीरे) - Fast / Slow</li>
              <li><strong>Bahut</strong> (बहुत) - Very / A lot</li>
              <li><strong>Kam / Jyaada</strong> (कम / ज़्यादा) - Less / More</li>
              <li><strong>Aaj / Kal</strong> (आज / कल) - Today / Tomorrow (or Yesterday)</li>
              <li><strong>Din / Raat</strong> (दिन / रात) - Day / Night</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Pro Tips for Learning Hindi</h2>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
            <ul className="space-y-3 list-disc list-inside">
              <li><strong>Practice with locals:</strong> Indians appreciate when foreigners try to speak Hindi, even if imperfect</li>
              <li><strong>Watch Bollywood movies:</strong> Great way to pick up conversational Hindi and cultural context</li>
              <li><strong>Use language apps:</strong> Duolingo, HindiPod101, and HelloTalk are excellent resources</li>
              <li><strong>Start simple:</strong> Master greetings and basic phrases before moving to complex sentences</li>
              <li><strong>Listen actively:</strong> Pay attention to how shopkeepers, drivers, and friends speak</li>
              <li><strong>Don't be shy:</strong> Making mistakes is part of learning - locals will help correct you</li>
            </ul>
          </div>

          <div className="bg-primary-100 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-bold text-primary-900 mb-3">🎓 Remember</h3>
            <p className="text-primary-800">
              You don't need to be fluent in Hindi to study in India. Most university classes are in English, and many Indians speak English well. However, learning these basic phrases will:
            </p>
            <ul className="mt-3 space-y-2 text-primary-800">
              <li>• Help you make Indian friends more easily</li>
              <li>• Make daily tasks like shopping and ordering food smoother</li>
              <li>• Show cultural respect and interest in Indian society</li>
              <li>• Enhance your overall experience living in India</li>
            </ul>
          </div>

          <p className="text-gray-700 mt-8">
            As you settle into life at CT University in Ludhiana, you'll naturally pick up more Hindi through daily interactions. Punjab also has its own language (Punjabi), but Hindi is widely understood and will serve you well throughout your studies.
          </p>

          <p className="text-gray-700 mt-6">
            <strong>Pro tip:</strong> Download a Hindi learning app before arriving in India and practice 10 minutes daily. By the time classes start, you'll already know enough to impress your classmates!
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-gradient-to-r from-primary-600 to-primary-800 rounded-xl p-8 text-center text-white"
        >
          <BookOpen className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Ready to Start Your India Journey?</h3>
          <p className="mb-6 text-gray-100">
            Apply to CT University and get your offer letter within 30 minutes!
          </p>
          <Link
            to="/apply"
            className="inline-block bg-accent-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent-600 transition-all"
          >
            Apply Now
          </Link>
        </motion.div>
      </div>
    </article>
  )
}

export default HindiPhrases