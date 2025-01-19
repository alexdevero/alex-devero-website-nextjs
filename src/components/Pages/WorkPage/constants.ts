export const workPageInfo = [
  { label: 'Company', keys: ['company'], delimiter: ', ', useList: false, link: false },
  { label: 'Position', keys: ['position'], delimiter: ', ', useList: false, link: false },
  { label: 'Year', keys: ['yearFrom', 'yearTo'], delimiter: ' - ', useList: false, link: false },
  { label: 'Tech stack', keys: ['technologies'], delimiter: ', ', useList: false, link: false },
  {
    label: 'Main responsibilities',
    keys: ['responsibilities'],
    delimiter: ', ',
    useList: true,
    link: false,
  },
  { label: 'Case Study', keys: ['caseStudy'], delimiter: ', ', useList: false, link: true },
] as const
