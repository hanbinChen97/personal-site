const skills = [
  {
    title: 'MOOSE Framework',
    competency: 5,
    category: ['Numerical Modeling', 'Tools', 'Subsurface Engineering'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'Data Analysis', 'Subsurface Engineering', 'ML Engineering'],
  },
  {
    title: 'C++',
    competency: 4,
    category: ['Languages', 'Numerical Modeling'],
  },
  {
    title: 'FEM',
    competency: 5,
    category: ['Numerical Modeling', 'Subsurface Engineering'],
  },
  {
    title: 'HPC',
    competency: 4,
    category: ['Tools', 'Numerical Modeling'],
  },
  {
    title: 'Rock Mechanics',
    competency: 5,
    category: ['Subsurface Engineering', 'Geo-engineering'],
  },
  {
    title: 'Constitutive Modeling',
    competency: 5,
    category: ['Numerical Modeling', 'Subsurface Engineering'],
  },
  {
    title: 'THM-coupled Modeling',
    competency: 5,
    category: ['Numerical Modeling', 'Subsurface Engineering'],
  },
  {
    title: 'LaTeX',
    competency: 4,
    category: ['Tools', 'Documentation'],
  },
  {
    title: 'Reservoir Data Analysis',
    competency: 4,
    category: ['Data Analysis', 'Subsurface Engineering'],
  },
  {
    title: 'Parameter Optimization',
    competency: 4,
    category: ['Data Analysis', 'Numerical Modeling'],
  },
  {
    title: 'Inelastic Analysis',
    competency: 5,
    category: ['Numerical Modeling', 'Subsurface Engineering'],
  },
  {
    title: 'Geo-storage Systems',
    competency: 5,
    category: ['Subsurface Engineering', 'Energy Storage'],
  },
  {
    title: 'Algorithm Optimization',
    competency: 3,
    category: ['Numerical Modeling', 'Programming'],
  },
  {
    title: 'Coupled Physics Modeling',
    competency: 5,
    category: ['Numerical Modeling', 'Subsurface Engineering'],
  },
  {
    title: 'Subsurface Instability Analysis',
    competency: 4,
    category: ['Numerical Modeling', 'Subsurface Engineering'],
  },
  {
    title: 'Creep-Fatigue Modeling',
    competency: 5,
    category: ['Numerical Modeling', 'Subsurface Engineering'],
  },
  {
    title: 'Jupyter',
    competency: 3,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Numpy',
    competency: 4,
    category: ['Data Science', 'Data Engineering', 'Python'],
  },
  {
    title: 'Pandas',
    competency: 4,
    category: ['Data Engineering', 'ML Engineering', 'Python'],
  },
  {
    title: 'Matplotlib',
    competency: 3,
    category: ['Data Engineering', 'ML Engineering', 'Python'],
  },
  {
    title: 'Git',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'MATLAB',
    competency: 4,
    category: ['Languages', 'Numerical Modeling'],
  },
  {
    title: 'German',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'English',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Chinese',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'Japanese',
    competency: 1,
    category: ['Languages'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index % colors.length],
  }));

export { categories, skills };
