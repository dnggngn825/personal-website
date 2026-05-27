export interface Certification {
  name:    string
  issuer:  string
  date:    string
  expires?: string
}

export const certifications: Certification[] = [
  {
    name:   'Microsoft Certified: Azure Fundamentals',
    issuer: 'Microsoft',
    date:   'May 2026',
  },
  {
    name:   'Deep Learning Specialization',
    issuer: 'DeepLearning.AI',
    date:   'Mar 2020',
  },
]
