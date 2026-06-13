// ============ DEPARTMENTS ============
const DEPARTMENTS = {
  CSE: 'Computer Science & Engineering',
  MATH: 'Mathematics',
  ENG: 'English',
  REL: 'Religion',
  COMM: 'Communication',
  PHYS: 'Physics',
  ITM: 'Information Technology',
  BUS: 'Business',
  DS: 'Data Science',
  AI: 'Artificial Intelligence',
  GS: 'General Studies',
};

// ============ COURSE CATALOG ============
const CATALOG = [
  // CSE Major
  { id: 'CSE 110', name: 'Introduction to Programming',        credits: 2, type: 'Major',            dept: 'CSE',  prereq: [] },
  { id: 'CSE 111', name: 'Programming with Functions',         credits: 2, type: 'Major',            dept: 'CSE',  prereq: ['CSE 110'] },
  { id: 'CSE 130', name: 'Intro to Programming w/Competency',  credits: 3, type: 'Major',            dept: 'CSE',  prereq: [] },
  { id: 'CSE 131', name: 'Modularization Design',              credits: 2, type: 'Major',            dept: 'CSE',  prereq: ['CSE 111'] },
  { id: 'CSE 210', name: 'Programming with Classes',           credits: 2, type: 'Major',            dept: 'CSE',  prereq: ['CSE 111'] },
  { id: 'CSE 212', name: 'Programming w/Data Structures',      credits: 2, type: 'Major',            dept: 'CSE',  prereq: ['CSE 111'] },
  { id: 'CSE 230', name: 'Encapsulation Design',               credits: 2, type: 'Major',            dept: 'CSE',  prereq: ['CSE 210'] },
  { id: 'CSE 280', name: 'Discrete Mathematics',               credits: 3, type: 'Major',            dept: 'CSE',  prereq: ['CSE 111'] },
  { id: 'CSE 310', name: 'Applied Programming',                credits: 3, type: 'Major',            dept: 'CSE',  prereq: ['CSE 210'] },
  { id: 'CSE 340', name: 'App Development',                    credits: 3, type: 'Major',            dept: 'CSE',  prereq: ['CSE 210'] },
  { id: 'CSE 381', name: 'Systems & Networks',                 credits: 3, type: 'Major',            dept: 'CSE',  prereq: ['CSE 212'] },
  { id: 'CSE 450', name: 'Machine Learning',                   credits: 3, type: 'Major',            dept: 'CSE',  prereq: ['CSE 310'] },
  { id: 'CSE 490', name: 'Senior Project',                     credits: 3, type: 'Major',            dept: 'CSE',  prereq: ['CSE 450'] },
  { id: 'CSE 290R',name: 'Special Topics',                     credits: 2, type: 'Elective',         dept: 'CSE',  prereq: [] },

  // Math
  { id: 'MATH 100A',name: 'Arithmetic',                        credits: 3, type: 'General Education',dept: 'MATH', prereq: [] },
  { id: 'MATH 101', name: 'Intermediate Algebra',              credits: 4, type: 'General Education',dept: 'MATH', prereq: [] },
  { id: 'MATH 108', name: 'Prep for Calculus',                 credits: 3, type: 'Core',             dept: 'MATH', prereq: [] },
  { id: 'MATH 109', name: 'Precalculus',                       credits: 5, type: 'Core',             dept: 'MATH', prereq: [] },
  { id: 'MATH 111', name: 'Trigonometry',                      credits: 2, type: 'Core',             dept: 'MATH', prereq: [] },
  { id: 'MATH 112', name: 'Calculus I',                        credits: 4, type: 'Core',             dept: 'MATH', prereq: ['MATH 108'] },
  { id: 'MATH 113', name: 'Calculus II',                       credits: 3, type: 'Core',             dept: 'MATH', prereq: ['MATH 112'] },
  { id: 'MATH 213', name: 'Multivariable Calculus',            credits: 4, type: 'Core',             dept: 'MATH', prereq: ['MATH 112'] },
  { id: 'MATH 215', name: 'Multivariable & Vector Calculus',   credits: 4, type: 'Core',             dept: 'MATH', prereq: ['MATH 113'] },
  { id: 'MATH 221A',name: 'Business Statistics',               credits: 3, type: 'Core',             dept: 'MATH', prereq: [] },
  { id: 'MATH 221B',name: 'Biostatistics',                     credits: 3, type: 'Core',             dept: 'MATH', prereq: [] },
  { id: 'MATH 221C',name: 'Social Science Statistics',         credits: 3, type: 'Core',             dept: 'MATH', prereq: [] },

  // English
  { id: 'ENG 101',  name: 'Writing and Reasoning',             credits: 3, type: 'General Education',dept: 'ENG',  prereq: [] },
  { id: 'ENG 201',  name: 'Technical Writing',                 credits: 3, type: 'General Education',dept: 'ENG',  prereq: ['ENG 101'] },

  // Religion
  { id: 'REL 121',  name: 'Book of Mormon',                    credits: 2, type: 'Religion',         dept: 'REL',  prereq: [] },
  { id: 'REL 200',  name: 'The Eternal Family',                credits: 2, type: 'Religion',         dept: 'REL',  prereq: [] },
  { id: 'REL 225',  name: 'Foundations of the Restoration',    credits: 2, type: 'Religion',         dept: 'REL',  prereq: [] },
  { id: 'REL 250C', name: 'Jesus Christ: Everlasting Gospel',  credits: 2, type: 'Religion',         dept: 'REL',  prereq: [] },
  { id: 'REL 275',  name: 'Teachings of Book of Mormon',       credits: 2, type: 'Religion',         dept: 'REL',  prereq: ['REL 121'] },
  { id: 'REL 333',  name: 'Teachings of Living Prophets',      credits: 2, type: 'Religion',         dept: 'REL',  prereq: [] },

  // Communication
  { id: 'COMM 101', name: 'Fundamentals of Communication',     credits: 3, type: 'General Education',dept: 'COMM', prereq: [] },
  { id: 'COMM 230', name: 'Interpersonal Communication',       credits: 3, type: 'General Education',dept: 'COMM', prereq: [] },

  // Physics
  { id: 'PHYS 121', name: 'Fundamental Physics',               credits: 3, type: 'General Education',dept: 'PHYS', prereq: [] },
  { id: 'PHYS 221', name: 'Physics I',                         credits: 4, type: 'General Education',dept: 'PHYS', prereq: ['MATH 112'] },

  // ITM
  { id: 'ITM 220',  name: 'SQL',                               credits: 3, type: 'Core',             dept: 'ITM',  prereq: [] },
  { id: 'ITM 300',  name: 'Business Systems',                  credits: 3, type: 'Core',             dept: 'ITM',  prereq: [] },

  // Data Science / AI
  { id: 'DS 250',   name: 'Data Science Programming',          credits: 2, type: 'Elective',         dept: 'DS',   prereq: ['CSE 111'] },
  { id: 'AI 101',   name: 'AI Fundamentals',                   credits: 1, type: 'Elective',         dept: 'AI',   prereq: [] },

  // Business
  { id: 'BUS 201',  name: 'Principles of Business',            credits: 3, type: 'Elective',         dept: 'BUS',  prereq: [] },
  { id: 'BUS 301',  name: 'Business Communication',            credits: 3, type: 'Elective',         dept: 'BUS',  prereq: ['BUS 201'] },
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
        courses: ['REL 200', 'REL 225', 'REL 250C', 'REL 275'],
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
        courses: ['MATH 112', 'MATH 221A', 'MATH 221B', 'MATH 221C'],
      },
      {
        label: 'First Semester',
        total: 3,
        desc: 'Take any one course:',
        courses: ['COMM 101', 'PHYS 121'],
      },
      {
        label: 'Breadth Courses 1',
        total: 6,
        desc: 'Take any two courses:',
        courses: ['COMM 230', 'PHYS 221', 'AI 101'],
      },
    ],
  },
  'Degree': {
    tabs: [
      {
        label: 'Major Core',
        total: 20,
        desc: 'Required major courses:',
        courses: ['CSE 110', 'CSE 111', 'CSE 210', 'CSE 212', 'CSE 280', 'CSE 310', 'CSE 381', 'CSE 450', 'CSE 490'],
      },
      {
        label: 'Math Requirement',
        total: 12,
        desc: 'Take these courses:',
        courses: ['MATH 108', 'MATH 112', 'MATH 113', 'MATH 213'],
      },
      {
        label: 'Systems',
        total: 6,
        desc: 'Take these courses:',
        courses: ['ITM 220', 'ITM 300'],
      },
    ],
  },
  'Electives': {
    tabs: [
      {
        label: 'Electives',
        total: 20,
        desc: 'Choose elective courses to complete your degree:',
        courses: ['CSE 290R', 'DS 250', 'AI 101', 'BUS 201', 'BUS 301', 'CSE 230', 'CSE 131', 'CSE 340'],
      },
    ],
  },
};

// ============ DEFAULT PLAN ============
const DEFAULT_PLAN = {
  F24: ['CSE 110', 'ENG 101', 'REL 121', 'MATH 108'],
  W25: ['CSE 111', 'ENG 201', 'REL 200', 'MATH 112'],
  F25: ['CSE 210', 'CSE 212', 'REL 225', 'PHYS 121'],
  W26: ['CSE 310', 'CSE 280', 'REL 333', 'COMM 101'],
  F26: ['REL 121', 'CSE 212', 'ITM 220', 'DS 250', 'AI 101'],
  W27: ['CSE 230', 'CSE 450', 'REL 275'],
};
