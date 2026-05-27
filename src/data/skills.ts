export interface SkillGroup {
  category: string
  icon:     string
  items:    string[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    icon:     'code',
    items:    ['TypeScript', 'JavaScript (ES6+)', 'C#', 'Python', 'C/C++'],
  },
  {
    category: 'Frontend Libraries/Frameworks',
    icon:     'web',
    items:    ['React', 'Vue.js', 'Knockout.js', 'Tailwind CSS'],
  },
  {
    category: 'Backend & Cloud',
    icon:     'layers',
    items:    ['Node.js', '.NET Framework', 'AWS Amplify', 'GraphQL', 'DynamoDB', 'Azure'],
  },
  {
    category: 'Testing',
    icon:     'bug_report',
    items:    ['Vitest', 'Jest', 'NUnit', 'Playwright'],
  },
  {
    category: 'DevOps & Tooling',
    icon:     'construction',
    items:    ['Git', 'Vite', 'Rspack', 'Webpack', 'CI/CD', 'ESLint', 'GitHub Actions'],
  },
  {
    category: 'Engineering',
    icon:     'precision_manufacturing',
    items:    ['ROS', 'MATLAB', 'Simulink', 'Fusion 360', 'Arduino'],
  },
]
