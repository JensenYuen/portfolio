// Image URL
export const IMG_URL = {
  profile: 'https://res.cloudinary.com/dwxeen3eo/image/upload/v1713037235/portfolio_use/profile_ls5wa1.png',
  offgrid: 'https://res.cloudinary.com/dwxeen3eo/image/upload/v1713037158/portfolio_use/offgrid_tk01oz.png',
  scubadoo: 'https://res.cloudinary.com/dwxeen3eo/image/upload/v1713037153/portfolio_use/scubadoo_bzuafx.png',
  popugraph: 'https://res.cloudinary.com/dwxeen3eo/image/upload/v1713037148/portfolio_use/popuGraph_m9qcd1.png',
  caseconnect: 'https://res.cloudinary.com/dwxeen3eo/image/upload/v1713037130/portfolio_use/caseConnect_u6mqi4.png',
  react: 'https://res.cloudinary.com/dwxeen3eo/image/upload/v1729276178/portfolio_use/reactLogo_lhz1mi.png',
  materialui: 'https://res.cloudinary.com/dwxeen3eo/image/upload/v1729276187/portfolio_use/materialUi_hr4yyb.png',
  i18n: 'https://res.cloudinary.com/dwxeen3eo/image/upload/v1729275175/i18n_x9h3n7.png',
  responsive: 'https://res.cloudinary.com/dwxeen3eo/image/upload/v1729276301/RWD_axxri7.png'
}

// Image Data
export const IMG_DATA = {
  offgrid: [{
    img: IMG_URL.offgrid,
    title: 'Main page',
    featured: true
  }],
  scubadoo: [{
    img: IMG_URL.scubadoo,
    title: 'Main page',
    featured: true
  }],
  popugraph: [{
    img: IMG_URL.popugraph,
    title: 'App page',
    featured: true
  }],
  caseconnect: [{
    img: IMG_URL.caseconnect,
    title: 'caseconnect',
    featured: true
  }]
}

// Works Info
export const WORKS_DATA = [
  { // popugraph
    title: 'work.popugraph.title',
    subText: 'work.popugraph.subtext',
    altText: 'Image of population graph site',
    created_in: 'work.popugraph.created_in',
    description: 'work.popugraph.description',
    source: 'work.popugraph.source',
    stack: 'work.popugraph.stack',
    url: 'work.popugraph.link',
    src: IMG_URL.popugraph,
    link: 'popugraph'
  },
  { // caseconnect
    title: 'work.caseconnect.title',
    altText: 'Image of caseconnect site',
    subText: 'work.caseconnect.subtext',
    created_in: 'work.caseconnect.created_in',
    description: 'work.caseconnect.description',
    source: 'work.caseconnect.source',
    url: 'work.caseconnect.link',
    stack: 'work.caseconnect.stack',
    src: IMG_URL.caseconnect,
    link: 'caseconnect'
  },
  { // offgrid
    title: 'work.offgrid.title',
    subText: 'work.offgrid.subtext',
    altText: 'Image of offgrid site',
    created_in: 'work.offgrid.created_in',
    description: 'work.offgrid.description',
    source: 'work.offgrid.source',
    url: 'work.offgrid.link',
    stack: 'work.offgrid.stack',
    src: IMG_URL.offgrid,
    link: 'offgrid'
  },
  { // scubadoo
    title: 'work.scubadoo.title',
    subText: 'work.scubadoo.subtext',
    altText: 'Image of scubadoo site',
    created_in: 'work.scubadoo.created_in',
    description: 'work.scubadoo.description',
    source: 'work.scubadoo.source',
    url: 'work.scubadoo.link',
    stack: 'work.scubadoo.stack',
    src: IMG_URL.scubadoo,
    link: 'scubadoo'
  }
]

// Navbar links
export const NAV_LINKS = [
  { text: 'Jensen Yuen', link: '' },
  { text: 'Works', link: 'works' },
  { text: 'About', link: 'about' },
  { text: 'Source', link: 'https://github.com/JensenYuen/portfolio' }
]

// About page
export const ABOUT = [
  {
    title: 'about.responsive.title',
    description: 'about.responsive.description',
    src: IMG_URL.responsive,
    altText: 'responsive web design icon'
  },
  {
    title: 'about.i18n.title',
    description: 'about.i18n.description',
    src: IMG_URL.i18n,
    altText: 'responsive web design icon'
  },
  {
    title: 'about.react.title',
    description: 'about.react.description',
    src: IMG_URL.react,
    altText: 'responsive web design icon'
  },
  {
    title: 'about.materialUI.title',
    description: 'about.materialUI.description',
    src: IMG_URL.materialui,
    altText: 'responsive web design icon'
  }
]
