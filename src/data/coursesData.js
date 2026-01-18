export const accommodationOptions = [
  {
    id: 'non-ac-3-seater',
    name: 'Non-AC 3-Seater',
    price: 1700,
    includes: ['Shared room (3 students)', 'All meals included', 'Laundry service', 'Wi-Fi access', 'Study desk & storage']
  },
  {
    id: 'ac-3-seater',
    name: 'AC 3-Seater',
    price: 2000,
    includes: ['AC shared room (3 students)', 'All meals included', 'Laundry service', 'Wi-Fi access', 'Study desk & storage']
  },
  {
    id: 'non-ac-2-seater',
    name: 'Non-AC 2-Seater',
    price: 2000,
    includes: ['Shared room (2 students)', 'All meals included', 'Laundry service', 'Wi-Fi access', 'Study desk & storage']
  },
  {
    id: 'ac-2-seater',
    name: 'AC 2-Seater with Attached Washroom',
    price: 2600,
    includes: ['AC shared room (2 students)', 'Private bathroom', 'All meals included', 'Laundry service', 'Wi-Fi access', 'Study desk & storage']
  }
]

export const processSteps = [
  {
    id: 1,
    title: "Submit Application",
    description: "Complete online application form with required documents",
    timeline: "Day 1",
    icon: "FileText"
  },
  {
    id: 2,
    title: "Pay Consultation Fee",
    description: "$20 USD consultation fee to ZeroAI Technologies",
    timeline: "Day 1",
    icon: "CreditCard"
  },
  {
    id: 3,
    title: "Receive Offer Letter",
    description: "Get offer letter from CT University within 30 minutes",
    timeline: "Within 30 mins",
    icon: "Mail"
  },
  {
    id: 4,
    title: "Pay Registration Fee",
    description: "$500 USD registration fee (deductible from first year tuition)",
    timeline: "Day 2-3",
    icon: "CreditCard"
  },
  {
    id: 5,
    title: "Get Acceptance Letter",
    description: "Receive official acceptance letter within 24 hours",
    timeline: "Within 24 hours",
    icon: "FileText"
  },
  {
    id: 6,
    title: "Apply for Visa",
    description: "Submit visa application at Indian Embassy (visa fee paid directly to embassy)",
    timeline: "Week 1-2",
    icon: "Plane"
  },
  {
    id: 7,
    title: "Book Flight",
    description: "Book your flight to India (flight costs are your responsibility)",
    timeline: "Week 3-4",
    icon: "Plane"
  },
  {
    id: 8,
    title: "Arrival & Tour",
    description: "Free airport pickup + your chosen 3-day India tour + settlement support",
    timeline: "Day 1-5",
    icon: "MapPin"
  }
]

// CT University Courses
export const ctUniversityCourses = {
  "Engineering & Technology": [
    { id: 1, name: "B.Tech Computer Science Engineering", duration: 4, feeUSD: 6400, feeAfterScholarship: 3200 },
    { id: 2, name: "B.Tech CSE - Cyber Security & Forensics", duration: 4, feeUSD: 7400, feeAfterScholarship: 3700 },
    { id: 3, name: "B.Tech CSE - AI & Data Science (IBM)", duration: 4, feeUSD: 7400, feeAfterScholarship: 3700 },
    { id: 4, name: "B.Tech Mechanical Engineering", duration: 4, feeUSD: 6400, feeAfterScholarship: 3200 },
    { id: 5, name: "B.Tech Civil Engineering", duration: 4, feeUSD: 6000, feeAfterScholarship: 3000 },
    { id: 6, name: "B.Tech Electrical Engineering", duration: 4, feeUSD: 6000, feeAfterScholarship: 3000 },
    { id: 7, name: "Diploma in Computer Science", duration: 3, feeUSD: 6000, feeAfterScholarship: 3000 },
    { id: 8, name: "M.Tech Computer Science", duration: 2, feeUSD: 6000, feeAfterScholarship: 3000 },
    { id: 9, name: "M.Tech Mechanical - Production Technology", duration: 2, feeUSD: 6000, feeAfterScholarship: 3000 },
    { id: 10, name: "M.Tech Civil Engineering", duration: 2, feeUSD: 6000, feeAfterScholarship: 3000 }
  ],
  "Pharmaceutical Sciences": [
    { id: 11, name: "Diploma in Pharmacy", duration: 2, feeUSD: 8600, feeAfterScholarship: 4300 },
    { id: 12, name: "B.Pharmacy", duration: 4, feeUSD: 8600, feeAfterScholarship: 4300 },
    { id: 13, name: "Pharm.D", duration: 6, feeUSD: 9000, feeAfterScholarship: 4500 },
    { id: 14, name: "M.Pharmacy - Pharmaceutics", duration: 2, feeUSD: 9000, feeAfterScholarship: 4500 },
    { id: 15, name: "M.Pharmacy - Pharmacology", duration: 2, feeUSD: 9000, feeAfterScholarship: 4500 },
    { id: 16, name: "M.Pharmacy - Pharmaceutical Chemistry", duration: 2, feeUSD: 9000, feeAfterScholarship: 4500 },
    { id: 17, name: "Pharm.D Post-Baccalaureate", duration: 3, feeUSD: 9000, feeAfterScholarship: 4500 }
  ],
  "Healthcare & Paramedical": [
    { id: 18, name: "B.Sc Medical Laboratory Technology", duration: 4, feeUSD: 6400, feeAfterScholarship: 3200 },
    { id: 19, name: "B.Sc Anesthesia Technology", duration: 4, feeUSD: 6000, feeAfterScholarship: 3000 },
    { id: 20, name: "B.Sc Medical Radiology & Imaging", duration: 4, feeUSD: 6400, feeAfterScholarship: 3200 },
    { id: 21, name: "Bachelor of Physiotherapy (BPT)", duration: 4.5, feeUSD: 6600, feeAfterScholarship: 3300 },
    { id: 22, name: "Bachelor of Optometry", duration: 4, feeUSD: 6000, feeAfterScholarship: 3000 },
    { id: 23, name: "M.Optometry", duration: 2, feeUSD: 9000, feeAfterScholarship: 4500 },
    { id: 24, name: "M.Sc Medical Radiology & Imaging", duration: 2, feeUSD: 9000, feeAfterScholarship: 4500 },
    { id: 25, name: "Post Matric Diploma Medical Lab Tech", duration: 3, feeUSD: 6000, feeAfterScholarship: 3000 }
  ],
  "Law": [
    { id: 26, name: "B.A. LL.B (5 Year Integrated)", duration: 5, feeUSD: 6600, feeAfterScholarship: 3300 },
    { id: 27, name: "B.Com LL.B (5 Year Integrated)", duration: 5, feeUSD: 6400, feeAfterScholarship: 3200 },
    { id: 28, name: "LL.B (3 Year)", duration: 3, feeUSD: 7000, feeAfterScholarship: 3500 },
    { id: 29, name: "LL.M Criminal Law (1 Year)", duration: 1, feeUSD: 7000, feeAfterScholarship: 3500 },
    { id: 30, name: "LL.M Corporate Law (1 Year)", duration: 1, feeUSD: 7000, feeAfterScholarship: 3500 },
    { id: 31, name: "LL.M Criminal Law (2 Years)", duration: 2, feeUSD: 7000, feeAfterScholarship: 3500 },
    { id: 32, name: "LL.M Corporate Law (2 Years)", duration: 2, feeUSD: 7000, feeAfterScholarship: 3500 }
  ],
  "Management Studies": [
    { id: 33, name: "BBA (Bachelor of Business Admin)", duration: 3, feeUSD: 5600, feeAfterScholarship: 2800 },
    { id: 34, name: "BBA with Bajaj Finserv Specialization", duration: 3, feeUSD: 6400, feeAfterScholarship: 3200 },
    { id: 35, name: "BBA Business Analytics AI (IBM)", duration: 3, feeUSD: 6800, feeAfterScholarship: 3400 },
    { id: 36, name: "B.Com (Hons)", duration: 3, feeUSD: 5600, feeAfterScholarship: 2800 },
    { id: 37, name: "MBA", duration: 2, feeUSD: 7000, feeAfterScholarship: 3500 },
    { id: 38, name: "MBA Dual Specialization", duration: 2, feeUSD: 6600, feeAfterScholarship: 3300 },
    { id: 39, name: "MBA AI for Managers", duration: 2, feeUSD: 6600, feeAfterScholarship: 3300 },
    { id: 40, name: "MBA Business Analytics (IBM)", duration: 2, feeUSD: 7000, feeAfterScholarship: 3500 },
    { id: 41, name: "MBA International", duration: 2, feeUSD: 7000, feeAfterScholarship: 3500 },
    { id: 42, name: "Diploma in Business Administration", duration: 3, feeUSD: 5600, feeAfterScholarship: 2800 }
  ],
  "Computer Applications & IT": [
    { id: 43, name: "BCA (Bachelor Computer Applications)", duration: 3, feeUSD: 6400, feeAfterScholarship: 3200 },
    { id: 44, name: "BCA Hons Cyber Security & Forensics", duration: 3, feeUSD: 7400, feeAfterScholarship: 3700 },
    { id: 45, name: "BCA Hons AI & Data Science (IBM)", duration: 3, feeUSD: 5600, feeAfterScholarship: 2800 },
    { id: 46, name: "MCA (Master Computer Applications)", duration: 2, feeUSD: 6600, feeAfterScholarship: 3300 },
    { id: 47, name: "MCA AI & Data Science (IBM)", duration: 2, feeUSD: 6600, feeAfterScholarship: 3300 },
    { id: 48, name: "MCA Cyber Security & Forensics (IBM)", duration: 2, feeUSD: 6600, feeAfterScholarship: 3300 }
  ],
  "Hotel Management & Tourism": [
    { id: 49, name: "Diploma in Culinary Arts", duration: 1.5, feeUSD: 5000, feeAfterScholarship: 2500 },
    { id: 50, name: "Advance Diploma Hotel Management", duration: 2, feeUSD: 5000, feeAfterScholarship: 2500 },
    { id: 51, name: "Bachelor Hotel Management", duration: 3, feeUSD: 5000, feeAfterScholarship: 2500 },
    { id: 52, name: "Bachelor of ATM (Aviation, Travel, Tourism)", duration: 3, feeUSD: 5000, feeAfterScholarship: 2500 },
    { id: 53, name: "Bachelor ATM Hons", duration: 4, feeUSD: 5600, feeAfterScholarship: 2800 },
    { id: 54, name: "BHMCT (Hotel Mgt & Catering Tech)", duration: 4, feeUSD: 5600, feeAfterScholarship: 2800 },
    { id: 55, name: "PG Diploma Hotel Mgt & Tourism", duration: 1, feeUSD: 6400, feeAfterScholarship: 3200 },
    { id: 56, name: "M.Sc Hotel Mgt & Tourism", duration: 2, feeUSD: 6400, feeAfterScholarship: 3200 }
  ],
  "Design & Innovation": [
    { id: 57, name: "Advance Diploma Fashion Design", duration: 2, feeUSD: 5600, feeAfterScholarship: 2800 },
    { id: 58, name: "Advance Diploma Multimedia & Animation", duration: 2, feeUSD: 5600, feeAfterScholarship: 2800 },
    { id: 59, name: "B.Sc Fashion Design", duration: 3, feeUSD: 5600, feeAfterScholarship: 2800 },
    { id: 60, name: "B.Sc Multimedia & Animation", duration: 3, feeUSD: 5600, feeAfterScholarship: 2800 },
    { id: 61, name: "B.Voc Beauty & Wellness", duration: 3, feeUSD: 5000, feeAfterScholarship: 2500 }
  ],
  "Humanities & Social Sciences": [
    { id: 62, name: "Bachelor of Arts (BA)", duration: 3, feeUSD: 5600, feeAfterScholarship: 2800 },
    { id: 63, name: "Bachelor of Social Work Hons", duration: 3, feeUSD: 5600, feeAfterScholarship: 2800 },
    { id: 64, name: "B.Sc Hons Clinical Psychology", duration: 3, feeUSD: 5600, feeAfterScholarship: 2800 },
    { id: 65, name: "M.Sc Clinical Psychology", duration: 2, feeUSD: 5600, feeAfterScholarship: 2800 }
  ]
}

// CT Group Institutions Courses
export const ctGroupCourses = {
  "Engineering & Technology": [
    { id: 101, name: "B.Tech Computer Science", duration: 4, feeUSD: 10000, feeAfterScholarship: 5000 },
    { id: 102, name: "B.Tech AI & Machine Learning", duration: 4, feeUSD: 10000, feeAfterScholarship: 5000 },
    { id: 103, name: "B.Tech Mechanical Engineering", duration: 4, feeUSD: 8000, feeAfterScholarship: 4000 },
    { id: 104, name: "B.Tech Electronics & Communication", duration: 4, feeUSD: 8000, feeAfterScholarship: 4000 },
    { id: 105, name: "B.Tech Electrical Engineering", duration: 4, feeUSD: 7600, feeAfterScholarship: 3800 },
    { id: 106, name: "B.Tech Civil Engineering", duration: 4, feeUSD: 7000, feeAfterScholarship: 3500 },
    { id: 107, name: "B.Architecture", duration: 5, feeUSD: 7000, feeAfterScholarship: 3500 }
  ],
  "Pharmaceutical Sciences": [
    { id: 108, name: "Diploma in Pharmacy", duration: 3, feeUSD: 4400, feeAfterScholarship: 2200 },
    { id: 109, name: "B.Pharmacy", duration: 4, feeUSD: 6000, feeAfterScholarship: 3000 },
    { id: 110, name: "Pharm.D", duration: 6, feeUSD: 10000, feeAfterScholarship: 5000 },
    { id: 111, name: "Pharm.D Post-Baccalaureate", duration: 3, feeUSD: 8000, feeAfterScholarship: 4000 },
    { id: 112, name: "M.Pharmacy", duration: 2, feeUSD: 8000, feeAfterScholarship: 4000 }
  ],
  "Medical & Healthcare": [
    { id: 113, name: "B.Physiotherapy", duration: 4.5, feeUSD: 9000, feeAfterScholarship: 4500 },
    { id: 114, name: "B.Sc Medical Lab Sciences", duration: 3, feeUSD: 5000, feeAfterScholarship: 2500 },
    { id: 115, name: "B.Sc Nutrition & Dietetics", duration: 3, feeUSD: 5000, feeAfterScholarship: 2500 },
    { id: 116, name: "B.Sc Biotechnology", duration: 3, feeUSD: 5000, feeAfterScholarship: 2500 },
    { id: 117, name: "M.Sc Biotechnology", duration: 2, feeUSD: 5000, feeAfterScholarship: 2500 }
  ],
  "Business & Management": [
    { id: 118, name: "BBA", duration: 3, feeUSD: 5000, feeAfterScholarship: 2500 },
    { id: 119, name: "B.Com Hons", duration: 3, feeUSD: 5000, feeAfterScholarship: 2500 },
    { id: 120, name: "B.Com LLB", duration: 5, feeUSD: 5000, feeAfterScholarship: 2500 },
    { id: 121, name: "BA LLB", duration: 5, feeUSD: 5000, feeAfterScholarship: 2500 },
    { id: 122, name: "MBA", duration: 2, feeUSD: 6000, feeAfterScholarship: 3000 },
    { id: 123, name: "M.Sc Fashion Design", duration: 2, feeUSD: 5000, feeAfterScholarship: 2500 }
  ],
  "Hotel Management & Tourism": [
    { id: 124, name: "Diploma Culinary Arts & Food Production", duration: 1.5, feeUSD: 4400, feeAfterScholarship: 2200 },
    { id: 125, name: "BHM (Bachelor Hotel Management)", duration: 4, feeUSD: 5000, feeAfterScholarship: 2500 },
    { id: 126, name: "BTTM (Travel & Tourism Management)", duration: 4, feeUSD: 5000, feeAfterScholarship: 2500 },
    { id: 127, name: "B.Sc Hotel & Hospitality Admin", duration: 3, feeUSD: 5000, feeAfterScholarship: 2500 },
    { id: 128, name: "M.Sc Hotel Management", duration: 2, feeUSD: 6000, feeAfterScholarship: 3000 }
  ],
  "Computer Applications": [
    { id: 129, name: "BCA", duration: 3, feeUSD: 5000, feeAfterScholarship: 2500 },
    { id: 130, name: "MCA", duration: 3, feeUSD: 6000, feeAfterScholarship: 3000 },
    { id: 131, name: "B.Sc Animation & Multimedia", duration: 3, feeUSD: 5000, feeAfterScholarship: 2500 }
  ],
  "Arts & Design": [
    { id: 132, name: "BA (Bachelor of Arts)", duration: 3, feeUSD: 5000, feeAfterScholarship: 2500 },
    { id: 133, name: "B.Sc Fashion Designing", duration: 3, feeUSD: 5000, feeAfterScholarship: 2500 },
    { id: 134, name: "B.Design Interior", duration: 4, feeUSD: 5000, feeAfterScholarship: 2500 },
    { id: 135, name: "BJMC (Journalism & Mass Communication)", duration: 3, feeUSD: 5000, feeAfterScholarship: 2500 }
  ]
}