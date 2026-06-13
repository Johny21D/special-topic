// ============ DEPARTMENTS ============
const DEPARTMENTS = {
  CSE: 'Computer Science & Engineering',
  WDD: 'Web & Computer Programming',
  ECEN: 'Electrical & Computer Engineering',
  ITM: 'Information Technology Management',
  CYBER: 'Cybersecurity',
  MATH: 'Mathematics',
  ENG: 'English',
  REL: 'Religion',
  COMM: 'Communication',
  PHYS: 'Physics',
  BUS: 'Business',
  SOC: 'Sociology',
  POLSC: 'Political Science',
  ART: 'Art',
  NUTR: 'Nutrition',
  BYUI: 'BYU-Idaho Experience',
  DS: 'Data Science',
  AI: 'Artificial Intelligence',
};

// ============ COURSE CATALOG ============
// Based on BYU-Idaho Software Engineering & Cybersecurity 2025-2026 sequences
const CATALOG = [
  // ---- BYUI / Foundations ----
  { id: 'BYUI 101', name: 'Experience BYU-Idaho',              credits: 1, type: 'General Education', dept: 'BYUI', prereq: [] },

  // ---- CSE Major (Software Engineering core) ----
  { id: 'CSE 110',  name: 'Introduction to Programming',        credits: 2, type: 'Major', dept: 'CSE',  prereq: [] },
  { id: 'CSE 111',  name: 'Programming with Functions',         credits: 2, type: 'Major', dept: 'CSE',  prereq: ['CSE 110'] },
  { id: 'CSE 130',  name: 'Algorithm Design',                   credits: 2, type: 'Major', dept: 'CSE',  prereq: ['CSE 111'] },
  { id: 'CSE 131',  name: 'Modularization Design',              credits: 2, type: 'Major', dept: 'CSE',  prereq: ['CSE 111'] },
  { id: 'CSE 170',  name: 'Technical Teamwork',                 credits: 2, type: 'Major', dept: 'CSE',  prereq: [] },
  { id: 'CSE 199R', name: 'Freshman Discovery Project',         credits: 2, type: 'Major', dept: 'CSE',  prereq: ['CSE 111'] },
  { id: 'CSE 210',  name: 'Programming with Classes',           credits: 2, type: 'Major', dept: 'CSE',  prereq: ['CSE 111'] },
  { id: 'CSE 212',  name: 'Programming with Data Structures',   credits: 2, type: 'Major', dept: 'CSE',  prereq: ['CSE 111'] },
  { id: 'CSE 230',  name: 'Encapsulation Design',               credits: 3, type: 'Major', dept: 'CSE',  prereq: ['CSE 210'] },
  { id: 'CSE 231',  name: 'Inheritance Design',                 credits: 2, type: 'Major', dept: 'CSE',  prereq: ['CSE 230'] },
  { id: 'CSE 232',  name: 'Designing Data Structures',          credits: 2, type: 'Major', dept: 'CSE',  prereq: ['CSE 212'] },
  { id: 'CSE 270',  name: 'Software Testing',                   credits: 3, type: 'Major', dept: 'CSE',  prereq: ['CSE 210'] },
  { id: 'CSE 272',  name: 'Software Lifecycle Models',          credits: 2, type: 'Major', dept: 'CSE',  prereq: ['CSE 270'] },
  { id: 'CSE 300',  name: 'Professional Readiness',             credits: 1, type: 'Major', dept: 'CSE',  prereq: [] },
  { id: 'CSE 310',  name: 'Applied Programming',                credits: 3, type: 'Major', dept: 'CSE',  prereq: ['CSE 210'] },
  { id: 'CSE 325',  name: '.NET Software Development',          credits: 3, type: 'Major', dept: 'CSE',  prereq: ['CSE 310'] },
  { id: 'CSE 331',  name: 'Design Patterns',                    credits: 2, type: 'Major', dept: 'CSE',  prereq: ['CSE 230'] },
  { id: 'CSE 340',  name: 'Web Backend Development',            credits: 3, type: 'Major', dept: 'CSE',  prereq: ['CSE 210'] },
  { id: 'CSE 370',  name: 'Software Engineering Principles',    credits: 2, type: 'Major', dept: 'CSE',  prereq: ['CSE 310'] },
  { id: 'CSE 372',  name: 'Requirements Elicitation',           credits: 2, type: 'Major', dept: 'CSE',  prereq: ['CSE 270'] },
  { id: 'CSE 381',  name: 'Systems & Networks',                 credits: 3, type: 'Major', dept: 'CSE',  prereq: ['CSE 212'] },
  { id: 'CSE 398',  name: 'Internship',                         credits: 3, type: 'Major', dept: 'CSE',  prereq: ['CSE 370'] },
  { id: 'CSE 399R', name: 'Product Development Project',        credits: 2, type: 'Major', dept: 'CSE',  prereq: ['CSE 310'] },
  { id: 'CSE 430',  name: 'Architectural Design',               credits: 2, type: 'Major', dept: 'CSE',  prereq: ['CSE 331'] },
  { id: 'CSE 450',  name: 'Machine Learning',                   credits: 3, type: 'Major', dept: 'CSE',  prereq: ['CSE 310'] },
  { id: 'CSE 453',  name: 'Computer Security',                  credits: 3, type: 'Major', dept: 'CSE',  prereq: ['CSE 381'] },
  { id: 'CSE 471',  name: 'UX Research',                        credits: 3, type: 'Major', dept: 'CSE',  prereq: ['CSE 270'] },
  { id: 'CSE 490',  name: 'Senior Project',                     credits: 3, type: 'Major', dept: 'CSE',  prereq: ['CSE 450'] },
  { id: 'CSE 499',  name: 'Senior Project',                     credits: 3, type: 'Major', dept: 'CSE',  prereq: ['CSE 370'] },
  { id: 'CSE 499a', name: 'Senior Project A',                   credits: 2, type: 'Major', dept: 'CSE',  prereq: ['CSE 370'] },
  { id: 'CSE 499b', name: 'Senior Project B',                   credits: 1, type: 'Major', dept: 'CSE',  prereq: ['CSE 499a'] },
  { id: 'CSE 290R', name: 'Special Topics',                     credits: 2, type: 'Elective', dept: 'CSE', prereq: [] },

  // ---- WDD (Web Development) ----
  { id: 'WDD 130',  name: 'Web Fundamentals',                   credits: 2, type: 'Major', dept: 'WDD', prereq: [] },
  { id: 'WDD 131',  name: 'Dynamic Web Fundamentals',           credits: 2, type: 'Major', dept: 'WDD', prereq: ['WDD 130'] },
  { id: 'WDD 231',  name: 'Web Frontend Development I',         credits: 2, type: 'Major', dept: 'WDD', prereq: ['WDD 131'] },
  { id: 'WDD 331R', name: 'Advanced CSS',                       credits: 2, type: 'Major', dept: 'WDD', prereq: ['WDD 231'] },
  { id: 'WDD 360',  name: 'Full Stack Foundations',             credits: 3, type: 'Major', dept: 'WDD', prereq: ['WDD 231', 'CSE 340'] },
  { id: 'WDD 430',  name: 'Web Full-Stack Development',         credits: 3, type: 'Major', dept: 'WDD', prereq: ['WDD 360'] },

  // ---- ECEN (Computer Engineering) ----
  { id: 'ECEN 106', name: 'Computer Systems',                   credits: 2, type: 'Core', dept: 'ECEN', prereq: [] },
  { id: 'ECEN 240', name: 'Fundamentals of Digital Systems',    credits: 3, type: 'Major', dept: 'ECEN', prereq: [] },
  { id: 'ECEN 260', name: 'Microprocessor Based Systems Design',credits: 3, type: 'Major', dept: 'ECEN', prereq: ['ECEN 240'] },
  { id: 'ECEN 324', name: 'Computer Architecture',              credits: 3, type: 'Major', dept: 'ECEN', prereq: ['ECEN 260'] },
  { id: 'ECEN 361', name: 'Embedded Systems',                   credits: 3, type: 'Major', dept: 'ECEN', prereq: ['ECEN 324'] },

  // ---- ITM (IT Management / Cloud) ----
  { id: 'ITM 101',  name: 'Intro to Cloud Technologies',        credits: 2, type: 'Core', dept: 'ITM', prereq: [] },
  { id: 'ITM 111',  name: 'Intro to Databases',                 credits: 3, type: 'Core', dept: 'ITM', prereq: [] },
  { id: 'ITM 112',  name: 'Intro to Linux',                     credits: 2, type: 'Core', dept: 'ITM', prereq: [] },
  { id: 'ITM 220',  name: 'SQL',                                credits: 3, type: 'Core', dept: 'ITM', prereq: [] },
  { id: 'ITM 300',  name: 'Cloud Foundations',                  credits: 3, type: 'Core', dept: 'ITM', prereq: ['ITM 220'] },
  { id: 'ITM 350',  name: 'IT Management and DevOps',           credits: 3, type: 'Major', dept: 'ITM', prereq: ['ITM 300'] },

  // ---- CYBER (Cybersecurity) ----
  { id: 'CYBER 201', name: 'Cybersecurity Fundamentals',        credits: 2, type: 'Major', dept: 'CYBER', prereq: [] },
  { id: 'CYBER 240', name: 'Networking',                        credits: 3, type: 'Major', dept: 'CYBER', prereq: [] },
  { id: 'CYBER 301', name: 'Systems Security I',                credits: 3, type: 'Major', dept: 'CYBER', prereq: ['CYBER 201'] },
  { id: 'CYBER 340', name: 'Network Defense',                   credits: 3, type: 'Major', dept: 'CYBER', prereq: ['CYBER 240'] },
  { id: 'CYBER 341', name: 'Penetration Testing',               credits: 3, type: 'Major', dept: 'CYBER', prereq: ['CYBER 340'] },
  { id: 'CYBER 370', name: 'Incident Response',                 credits: 3, type: 'Major', dept: 'CYBER', prereq: ['CYBER 301'] },
  { id: 'CYBER 375', name: 'Digital Forensics',                 credits: 3, type: 'Major', dept: 'CYBER', prereq: ['CYBER 370'] },
  { id: 'CYBER 450', name: 'Cloud Security',                    credits: 3, type: 'Major', dept: 'CYBER', prereq: ['CYBER 340', 'ITM 300'] },
  { id: 'CYBER 470', name: 'Risk Management & Compliance',      credits: 3, type: 'Major', dept: 'CYBER', prereq: ['CYBER 370'] },

  // ---- Math ----
  { id: 'MATH 100A', name: 'Arithmetic',                        credits: 3, type: 'General Education', dept: 'MATH', prereq: [] },
  { id: 'MATH 101',  name: 'Intermediate Algebra',              credits: 4, type: 'General Education', dept: 'MATH', prereq: [] },
  { id: 'MATH 108',  name: 'Prep for Calculus',                 credits: 3, type: 'Core', dept: 'MATH', prereq: [] },
  { id: 'MATH 109',  name: 'Precalculus',                       credits: 5, type: 'Core', dept: 'MATH', prereq: [] },
  { id: 'MATH 111',  name: 'Trigonometry',                      credits: 2, type: 'Core', dept: 'MATH', prereq: [] },
  { id: 'MATH 112',  name: 'Calculus I',                        credits: 4, type: 'Core', dept: 'MATH', prereq: ['MATH 108'] },
  { id: 'MATH 113',  name: 'Calculus II',                       credits: 3, type: 'Core', dept: 'MATH', prereq: ['MATH 112'] },
  { id: 'MATH 213',  name: 'Multivariable Calculus',            credits: 4, type: 'Core', dept: 'MATH', prereq: ['MATH 112'] },
  { id: 'MATH 215',  name: 'Multivariable & Vector Calculus',   credits: 4, type: 'Core', dept: 'MATH', prereq: ['MATH 113'] },
  { id: 'MATH 221',  name: 'Social Science Statistics',         credits: 3, type: 'Core', dept: 'MATH', prereq: [] },
  { id: 'MATH 221A', name: 'Business Statistics',               credits: 3, type: 'Core', dept: 'MATH', prereq: [] },
  { id: 'MATH 221B', name: 'Biostatistics',                     credits: 3, type: 'Core', dept: 'MATH', prereq: [] },

  // ---- English / Writing ----
  { id: 'ENG 150', name: 'Writing and Reasoning',               credits: 3, type: 'General Education', dept: 'ENG', prereq: [] },
  { id: 'ENG 101', name: 'Writing and Reasoning',               credits: 3, type: 'General Education', dept: 'ENG', prereq: [] },
  { id: 'ENG 201', name: 'Technical Writing',                   credits: 3, type: 'General Education', dept: 'ENG', prereq: ['ENG 101'] },
  { id: 'ENG 301', name: 'Advanced Writing',                    credits: 3, type: 'General Education', dept: 'ENG', prereq: ['ENG 201'] },

  // ---- Religion ----
  { id: 'REL 121',  name: 'Book of Mormon',                     credits: 2, type: 'Religion', dept: 'REL', prereq: [] },
  { id: 'REL 122',  name: 'Book of Mormon II',                  credits: 2, type: 'Religion', dept: 'REL', prereq: ['REL 121'] },
  { id: 'REL 200C', name: 'The Eternal Family',                 credits: 2, type: 'Religion', dept: 'REL', prereq: [] },
  { id: 'REL 225C', name: 'Foundations of the Restoration',     credits: 2, type: 'Religion', dept: 'REL', prereq: [] },
  { id: 'REL 250C', name: 'Jesus Christ and the Gospel',        credits: 2, type: 'Religion', dept: 'REL', prereq: [] },
  { id: 'REL 275C', name: 'Teachings of the Book of Mormon',    credits: 2, type: 'Religion', dept: 'REL', prereq: ['REL 121'] },
  { id: 'REL 280A', name: 'Answering My Gospel Questions A',    credits: 1, type: 'Religion', dept: 'REL', prereq: [] },
  { id: 'REL 280B', name: 'Answering My Gospel Questions B',    credits: 1, type: 'Religion', dept: 'REL', prereq: ['REL 280A'] },
  { id: 'REL 290A', name: 'The Divine Gift of Forgiveness A',   credits: 1, type: 'Religion', dept: 'REL', prereq: [] },
  { id: 'REL 290B', name: 'The Divine Gift of Forgiveness B',   credits: 1, type: 'Religion', dept: 'REL', prereq: ['REL 290A'] },
  { id: 'REL 333',  name: 'Teachings of Living Prophets',       credits: 2, type: 'Religion', dept: 'REL', prereq: [] },
  { id: 'REL 342',  name: 'Church History',                     credits: 2, type: 'Religion', dept: 'REL', prereq: [] },
  { id: 'REL 351',  name: 'World Religions',                    credits: 2, type: 'Religion', dept: 'REL', prereq: [] },
  { id: 'REL 352',  name: 'Christian History',                  credits: 2, type: 'Religion', dept: 'REL', prereq: [] },

  // ---- Communication ----
  { id: 'COMM 101', name: 'Fundamentals of Communication',      credits: 3, type: 'General Education', dept: 'COMM', prereq: [] },
  { id: 'COMM 230', name: 'Interpersonal Communication',        credits: 3, type: 'General Education', dept: 'COMM', prereq: [] },

  // ---- Physics ----
  { id: 'PHYS 121', name: 'Fundamental Physics',                credits: 3, type: 'General Education', dept: 'PHYS', prereq: [] },
  { id: 'PHYS 221', name: 'Physics I',                          credits: 4, type: 'General Education', dept: 'PHYS', prereq: ['MATH 112'] },

  // ---- Business ----
  { id: 'BUS 200',  name: 'Small Business Management',          credits: 3, type: 'Elective', dept: 'BUS', prereq: [] },
  { id: 'BUS 201',  name: 'Principles of Business',             credits: 3, type: 'Elective', dept: 'BUS', prereq: [] },
  { id: 'BUS 301',  name: 'Advanced Writing in Professional Settings', credits: 3, type: 'General Education', dept: 'BUS', prereq: ['ENG 201'] },
  { id: 'BUS 321',  name: 'Organizational Leadership',          credits: 3, type: 'General Education', dept: 'BUS', prereq: [] },

  // ---- Other GE / Arts / Social Science ----
  { id: 'SOC 111',   name: 'Introduction to Sociology',         credits: 3, type: 'General Education', dept: 'SOC', prereq: [] },
  { id: 'POLSC 150', name: 'Introduction to Comparative Politics', credits: 3, type: 'General Education', dept: 'POLSC', prereq: [] },
  { id: 'ART 231',   name: 'Design Thinking',                   credits: 3, type: 'General Education', dept: 'ART', prereq: [] },
  { id: 'NUTR 150',  name: 'Essentials of Human Nutrition',     credits: 3, type: 'General Education', dept: 'NUTR', prereq: [] },

  // ---- Data Science / AI (Electives) ----
  { id: 'DS 250', name: 'Data Science Programming',             credits: 2, type: 'Elective', dept: 'DS', prereq: ['CSE 111'] },
  { id: 'AI 101', name: 'AI Fundamentals',                       credits: 1, type: 'Elective', dept: 'AI', prereq: [] },
];

// ============ SEMESTERS ============
const SEMESTERS = [
  { id: 'F24', label: 'Fall 2024' },
  { id: 'W25', label: 'Winter 2025' },
  { id: 'S25', label: 'Spring 2025' },
  { id: 'F25', label: 'Fall 2025' },
  { id: 'W26', label: 'Winter 2026' },
  { id: 'S26', label: 'Spring 2026' },
  { id: 'F26', label: 'Fall 2026' },
  { id: 'W27', label: 'Winter 2027' },
];

// Semesters considered "in the past" for Completed/Transferred status
const PAST_SEMESTERS = ['F24', 'W25', 'S25', 'F25', 'W26'];

// ============ REQUIREMENTS ============
const REQUIREMENTS = {
  'General Education': {
    tabs: [
      {
        label: 'Cornerstone Requirement',
        total: 8,
        desc: 'Take these courses:',
        courses: ['REL 200C', 'REL 225C', 'REL 250C', 'REL 275C'],
      },
      {
        label: 'Writing',
        total: 6,
        desc: 'Take these courses:',
        courses: ['ENG 101', 'ENG 201'],
      },
      {
        label: 'Quantitative Reasoning',
        total: 4,
        desc: 'Take any one course:',
        courses: ['MATH 112', 'MATH 221', 'MATH 221A', 'MATH 221B'],
      },
      {
        label: 'First Semester',
        total: 3,
        desc: 'Take any one course:',
        courses: ['COMM 101', 'PHYS 121', 'BYUI 101'],
      },
      {
        label: 'Breadth Courses 1',
        total: 6,
        desc: 'Take any two courses:',
        courses: ['COMM 230', 'PHYS 221', 'AI 101', 'SOC 111', 'POLSC 150', 'ART 231', 'NUTR 150'],
      },
    ],
  },
  'Degree': {
    tabs: [
      {
        label: 'Programming Foundations',
        total: 12,
        desc: 'Required foundational courses:',
        courses: ['CSE 110', 'CSE 111', 'CSE 130', 'CSE 131', 'CSE 170', 'CSE 199R'],
      },
      {
        label: 'OOP & Data Structures',
        total: 13,
        desc: 'Required major courses:',
        courses: ['CSE 210', 'CSE 212', 'CSE 230', 'CSE 231', 'CSE 232', 'CSE 270'],
      },
      {
        label: 'Web Development',
        total: 12,
        desc: 'Required web courses:',
        courses: ['WDD 130', 'WDD 131', 'WDD 231', 'WDD 331R', 'WDD 360', 'WDD 430'],
      },
      {
        label: 'Systems & Cloud',
        total: 13,
        desc: 'Required systems courses:',
        courses: ['ECEN 106', 'ITM 220', 'ITM 300', 'CSE 381'],
      },
      {
        label: 'Software Engineering Capstone',
        total: 14,
        desc: 'Required senior courses:',
        courses: ['CSE 300', 'CSE 310', 'CSE 370', 'CSE 398', 'CSE 490', 'CSE 499', 'CSE 499a', 'CSE 499b'],
      },
      {
        label: 'Math Requirement',
        total: 12,
        desc: 'Take these courses:',
        courses: ['MATH 108', 'MATH 112', 'MATH 113', 'MATH 213'],
      },
    ],
  },
  'Electives': {
    tabs: [
      {
        label: 'CSE Electives',
        total: 14,
        desc: 'Choose CSE elective courses:',
        courses: ['CSE 290R', 'CSE 325', 'CSE 331', 'CSE 340', 'CSE 372', 'CSE 399R', 'CSE 430', 'CSE 450', 'CSE 453', 'CSE 471'],
      },
      {
        label: 'Cybersecurity',
        total: 14,
        desc: 'Cybersecurity emphasis courses:',
        courses: ['CYBER 201', 'CYBER 240', 'CYBER 301', 'CYBER 340', 'CYBER 341', 'CYBER 370', 'CYBER 375', 'CYBER 450', 'CYBER 470', 'ITM 101', 'ITM 111', 'ITM 112'],
      },
      {
        label: 'Embedded Systems',
        total: 12,
        desc: 'Embedded systems emphasis courses:',
        courses: ['ECEN 240', 'ECEN 260', 'ECEN 324', 'ECEN 361'],
      },
      {
        label: 'General Electives',
        total: 20,
        desc: 'Other elective courses:',
        courses: ['DS 250', 'AI 101', 'BUS 200', 'BUS 201', 'BUS 321', 'ITM 350'],
      },
    ],
  },
};

// ============ DEFAULT PLAN ============
const DEFAULT_PLAN = {};
