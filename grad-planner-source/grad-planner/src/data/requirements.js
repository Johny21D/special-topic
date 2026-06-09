export const REQUIREMENTS = {
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
