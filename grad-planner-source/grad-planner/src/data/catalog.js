export const CATALOG = [
  // CSE Major
  { id: 'CSE 110', name: 'Introduction to Programming',        credits: 2, type: 'Major',            dept: 'CSE',  prereq: [] },
  { id: 'CSE 111', name: 'Programming with Functions',         credits: 2, type: 'Major',            dept: 'CSE',  prereq: ['CSE 110'] },
  { id: 'CSE 130', name: 'Intro to Programming w/Competency', credits: 3, type: 'Major',            dept: 'CSE',  prereq: [] },
  { id: 'CSE 131', name: 'Modularization Design',             credits: 2, type: 'Major',            dept: 'CSE',  prereq: ['CSE 111'] },
  { id: 'CSE 210', name: 'Programming with Classes',          credits: 2, type: 'Major',            dept: 'CSE',  prereq: ['CSE 111'] },
  { id: 'CSE 212', name: 'Programming w/Data Structures',     credits: 2, type: 'Major',            dept: 'CSE',  prereq: ['CSE 111'] },
  { id: 'CSE 230', name: 'Encapsulation Design',              credits: 2, type: 'Major',            dept: 'CSE',  prereq: ['CSE 210'] },
  { id: 'CSE 280', name: 'Discrete Mathematics',              credits: 3, type: 'Major',            dept: 'CSE',  prereq: ['CSE 111'] },
  { id: 'CSE 310', name: 'Applied Programming',               credits: 3, type: 'Major',            dept: 'CSE',  prereq: ['CSE 210'] },
  { id: 'CSE 340', name: 'App Development',                   credits: 3, type: 'Major',            dept: 'CSE',  prereq: ['CSE 210'] },
  { id: 'CSE 381', name: 'Systems & Networks',                credits: 3, type: 'Major',            dept: 'CSE',  prereq: ['CSE 212'] },
  { id: 'CSE 450', name: 'Machine Learning',                  credits: 3, type: 'Major',            dept: 'CSE',  prereq: ['CSE 310'] },
  { id: 'CSE 490', name: 'Senior Project',                    credits: 3, type: 'Major',            dept: 'CSE',  prereq: ['CSE 450'] },
  { id: 'CSE 290R',name: 'Special Topics',                    credits: 2, type: 'Elective',         dept: 'CSE',  prereq: [] },

  // Math
  { id: 'MATH 100A',name: 'Arithmetic',                       credits: 3, type: 'General Education',dept: 'MATH', prereq: [] },
  { id: 'MATH 101', name: 'Intermediate Algebra',             credits: 4, type: 'General Education',dept: 'MATH', prereq: [] },
  { id: 'MATH 108', name: 'Prep for Calculus',                credits: 3, type: 'Core',             dept: 'MATH', prereq: [] },
  { id: 'MATH 109', name: 'Precalculus',                      credits: 5, type: 'Core',             dept: 'MATH', prereq: [] },
  { id: 'MATH 111', name: 'Trigonometry',                     credits: 2, type: 'Core',             dept: 'MATH', prereq: [] },
  { id: 'MATH 112', name: 'Calculus I',                       credits: 4, type: 'Core',             dept: 'MATH', prereq: ['MATH 108'] },
  { id: 'MATH 113', name: 'Calculus II',                      credits: 3, type: 'Core',             dept: 'MATH', prereq: ['MATH 112'] },
  { id: 'MATH 213', name: 'Multivariable Calculus',           credits: 4, type: 'Core',             dept: 'MATH', prereq: ['MATH 112'] },
  { id: 'MATH 215', name: 'Multivariable & Vector Calculus',  credits: 4, type: 'Core',             dept: 'MATH', prereq: ['MATH 113'] },
  { id: 'MATH 221A',name: 'Business Statistics',              credits: 3, type: 'Core',             dept: 'MATH', prereq: [] },
  { id: 'MATH 221B',name: 'Biostatistics',                    credits: 3, type: 'Core',             dept: 'MATH', prereq: [] },
  { id: 'MATH 221C',name: 'Social Science Statistics',        credits: 3, type: 'Core',             dept: 'MATH', prereq: [] },

  // English
  { id: 'ENG 101',  name: 'Writing and Reasoning',            credits: 3, type: 'General Education',dept: 'ENG',  prereq: [] },
  { id: 'ENG 201',  name: 'Technical Writing',                credits: 3, type: 'General Education',dept: 'ENG',  prereq: ['ENG 101'] },

  // Religion
  { id: 'REL 121',  name: 'Book of Mormon',                   credits: 2, type: 'Religion',         dept: 'REL',  prereq: [] },
  { id: 'REL 200',  name: 'The Eternal Family',               credits: 2, type: 'Religion',         dept: 'REL',  prereq: [] },
  { id: 'REL 225',  name: 'Foundations of the Restoration',   credits: 2, type: 'Religion',         dept: 'REL',  prereq: [] },
  { id: 'REL 250C', name: 'Jesus Christ: Everlasting Gospel', credits: 2, type: 'Religion',         dept: 'REL',  prereq: [] },
  { id: 'REL 275',  name: 'Teachings of Book of Mormon',      credits: 2, type: 'Religion',         dept: 'REL',  prereq: ['REL 121'] },
  { id: 'REL 333',  name: 'Teachings of Living Prophets',     credits: 2, type: 'Religion',         dept: 'REL',  prereq: [] },

  // Communication
  { id: 'COMM 101', name: 'Fundamentals of Communication',    credits: 3, type: 'General Education',dept: 'COMM', prereq: [] },
  { id: 'COMM 230', name: 'Interpersonal Communication',      credits: 3, type: 'General Education',dept: 'COMM', prereq: [] },

  // Physics
  { id: 'PHYS 121', name: 'Fundamental Physics',              credits: 3, type: 'General Education',dept: 'PHYS', prereq: [] },
  { id: 'PHYS 221', name: 'Physics I',                        credits: 4, type: 'General Education',dept: 'PHYS', prereq: ['MATH 112'] },

  // ITM
  { id: 'ITM 220',  name: 'SQL',                              credits: 3, type: 'Core',             dept: 'ITM',  prereq: [] },
  { id: 'ITM 300',  name: 'Business Systems',                 credits: 3, type: 'Core',             dept: 'ITM',  prereq: [] },

  // Data Science / AI
  { id: 'DS 250',   name: 'Data Science Programming',         credits: 2, type: 'Elective',         dept: 'DS',   prereq: ['CSE 111'] },
  { id: 'AI 101',   name: 'AI Fundamentals',                  credits: 1, type: 'Elective',         dept: 'AI',   prereq: [] },

  // Business
  { id: 'BUS 201',  name: 'Principles of Business',           credits: 3, type: 'Elective',         dept: 'BUS',  prereq: [] },
  { id: 'BUS 301',  name: 'Business Communication',           credits: 3, type: 'Elective',         dept: 'BUS',  prereq: ['BUS 201'] },
];
