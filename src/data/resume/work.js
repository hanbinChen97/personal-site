/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'RWTH Aachen University',
    position: 'Scientific Researcher',
    url: 'https://www.rwth-aachen.de/',
    startDate: '2021-09-01',
    endDate: '2024-11-01',
    summary: 'Conducted research on cyclic processes related to energy storage systems as part of a DFG-funded project. Specialized in subsurface engineering and numerical modeling.',
    highlights: [
      'Published three papers on energy storage mechanisms and applications',
      'Presented at the European Geosciences Union (EGU) Conference',
      'Developed multi-physics constitutive models for rock mass behavior in MOOSE',
      'Conducted numerical simulations in reservoir engineering using Python, C++ (with MOOSE), and FEM',
      'Analyzed THM coupled effects and rock formation instability under varying loading conditions',
      'Worked collaboratively in a multidisciplinary and international team',
    ],
  },
  {
    name: 'Self-Employed Entrepreneur',
    position: 'Product Procurement and Sales',
    url: 'https://deyan-tian.com',
    startDate: '2017-08-01',
    endDate: '2019-08-01',
    summary: 'Operated an independent business focused on product procurement and sales in Berlin, Germany.',
    highlights: [
      'Managed product procurement and sales operations',
      'Developed business strategies and market analysis',
      'Built customer relationships and managed client communications',
    ],
  },
  {
    name: 'Geo-Mechanical Engineering Internship',
    position: 'Intern',
    url: 'https://www.rwth-aachen.de/',
    startDate: '2017-01-01',
    endDate: '2017-06-01',
    summary: 'Worked as an intern in the field of geo-mechanical engineering in Chongqing, China.',
    highlights: [
      'Assisted in site investigations and data collection',
      'Supported analysis of geological and mechanical properties',
      'Contributed to engineering reports and documentation',
    ],
  },
];

export default work;
