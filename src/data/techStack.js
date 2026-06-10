// Simple Icons slug → https://cdn.simpleicons.org/{slug}/{hex-without-#}
export const techCategories = [
  {
    id: 'frontend',
    title: 'Frontend',
    techs: [
      { name: 'HTML',        slug: 'html5',        color: '#E34F26' },
      { name: 'CSS',         slug: 'css',          color: '#1572B6' },
      { name: 'JavaScript',  slug: 'javascript',   color: '#F7DF1E' },
      { name: 'TypeScript',  slug: 'typescript',   color: '#3178C6' },
      { name: 'React',       slug: 'react',        color: '#61DAFB' },
      { name: 'Next.js',     slug: 'nextdotjs',    color: '#000000' },
      { name: 'Tailwind',    slug: 'tailwindcss',  color: '#06B6D4' },
      { name: 'Bootstrap',   slug: 'bootstrap',    color: '#7952B3' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    techs: [
      { name: 'Node.js',     slug: 'nodedotjs',    color: '#339933' },
      { name: 'Express',     slug: 'express',      color: '#000000' },
      { name: 'Python',      slug: 'python',       color: '#3776AB' },
      { name: 'Flask',       slug: 'flask',        color: '#000000' },
      { name: 'Java',        slug: 'java',         color: '#007396' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    techs: [
      { name: 'MongoDB',     slug: 'mongodb',      color: '#47A248' },
      { name: 'MySQL',       slug: 'mysql',        color: '#4479A1' },
      { name: 'Firebase',    slug: 'firebase',     color: '#FFCA28' },
    ],
  },
  {
    id: 'aiml',
    title: 'AI / ML',
    techs: [
      { name: 'Python',      slug: 'python',       color: '#3776AB' },
      { name: 'NumPy',       slug: 'numpy',        color: '#013243' },
      { name: 'Pandas',      slug: 'pandas',       color: '#150458' },
      { name: 'Scikit-learn',slug: 'scikitlearn',  color: '#F7931E' },
      { name: 'TensorFlow',  slug: 'tensorflow',   color: '#FF6F00' },
    ],
  },
  {
    id: 'vcs',
    title: 'Version Control',
    techs: [
      { name: 'Git',         slug: 'git',          color: '#F05032' },
      { name: 'GitHub',      slug: 'github',       color: '#181717' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Design',
    techs: [
      { name: 'Figma',       slug: 'figma',        color: '#F24E1E' },
      { name: 'Canva',       slug: 'canva',        color: '#00C4CC' },
      { name: 'VS Code',     slug: 'visualstudiocode', color: '#007ACC' },
    ],
  },
]

export const techStack = techCategories.flatMap(c => c.techs)
