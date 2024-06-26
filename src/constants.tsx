// Image URL
export const IMGURL = {
  profile: 'https://res.cloudinary.com/dwxeen3eo/image/upload/v1713037235/portfolio_use/profile_ls5wa1.png',
  offgrid: 'https://res.cloudinary.com/dwxeen3eo/image/upload/v1713037158/portfolio_use/offgrid_tk01oz.png',
  scubadoo: 'https://res.cloudinary.com/dwxeen3eo/image/upload/v1713037153/portfolio_use/scubadoo_bzuafx.png',
  popugraph: 'https://res.cloudinary.com/dwxeen3eo/image/upload/v1713037148/portfolio_use/popuGraph_m9qcd1.png',
  caseconnet: 'https://res.cloudinary.com/dwxeen3eo/image/upload/v1713037130/portfolio_use/caseConnect_u6mqi4.png',
  react: 'https://res.cloudinary.com/dwxeen3eo/image/upload/v1713037143/portfolio_use/reactLogo_lhz1mi.png',
  materialui: 'https://res.cloudinary.com/dwxeen3eo/image/upload/v1713037134/portfolio_use/materialUi_hr4yyb.png'
}

// Image Data
export const IMGDATA = {
  offgrid: [{
    img: IMGURL.offgrid,
    title: 'Main page',
    featured: true
  }],
  scubadoo: [{
    img: IMGURL.scubadoo,
    title: 'Main page',
    featured: true
  }],
  popugraph: [{
    img: IMGURL.popugraph,
    title: 'App page',
    featured: true
  }],
  caseconnect: [{
    img: IMGURL.caseconnet,
    title: 'Caseconnet',
    featured: true
  }]
}

// Works Info
export const WORKSDATA = [
  { // popugraph
    title: 'work.popugraph.title',
    subText: 'work.popugraph.subtext',
    altText: 'Image of popu-graph site',
    created_in: 'work.popugraph.created_in',
    description: 'work.popugraph.description',
    source: 'work.popugraph.source',
    stack: 'work.popugraph.stack',
    url: 'work.popugraph.link',
    imgSrc: IMGURL.popugraph,
    link: 'popugraph'
  },
  { // caseconnet
    title: 'work.caseconnect.title',
    altText: 'Image of caseconnect site',
    subText: 'work.caseconnect.subtext',
    created_in: 'work.caseconnect.created_in',
    description: 'work.caseconnect.description',
    source: 'work.caseconnect.source',
    url: 'work.caseconnect.link',
    stack: 'work.caseconnect.stack',
    imgSrc: IMGURL.caseconnet,
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
    imgSrc: IMGURL.offgrid,
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
    imgSrc: IMGURL.scubadoo,
    link: 'scubadoo'
  }
]

// Navbar links
export const NAVLINKS = [
  { text: 'Jensen Yuen', link: '' },
  { text: 'Works', link: 'works' },
  { text: 'About', link: 'about' },
  { text: 'Source', link: 'https://github.com/JensenYuen/portfolio' }
]

// About page
export const ABOUT = [
  {
    title: 'about.react.title',
    altText: 'about.react.altText',
    description: 'about.react.description',
    imgSrc: IMGURL.react
  },
  {
    title: 'about.materialui.title',
    altText: 'about.materialui.altText',
    description: 'about.materialui.description',
    imgSrc: IMGURL.materialui
  }
]
