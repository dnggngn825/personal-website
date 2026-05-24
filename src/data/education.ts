export interface EducationEntry {
  period:      string
  degree:      string
  institution: string
  wam:         number
}

export const education: EducationEntry[] = [
  {
    period:      'Jul 2019 – Dec 2021',
    degree:      'Master of Engineering (Mechatronics)',
    institution: 'University of Melbourne',
    wam:         78.25,
  },
  {
    period:      'Jul 2016 – Jun 2019',
    degree:      'Bachelor of Science – Mechatronics',
    institution: 'University of Melbourne',
    wam:         74,
  },
]
