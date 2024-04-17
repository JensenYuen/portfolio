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
  {
    title: 'work.popugraph.title',
    subText: 'work.popugraph.subtext',
    altText: 'Image of popu-graph site',
    link: 'popugraph',
    imgSrc: IMGURL.popugraph
  },
  {
    title: 'work.caseconnect.title',
    altText: 'Image of caseconnect site',
    subText: 'work.caseconnect.subtext',
    link: 'caseconnect',
    imgSrc: IMGURL.caseconnet
  },
  {
    title: 'work.offgrid.title',
    subText: 'work.offgrid.subtext',
    altText: 'Image of offgrid site',
    link: 'offgrid',
    imgSrc: IMGURL.offgrid
  },
  {
    title: 'work.scubadoo.title',
    subText: 'work.scubadoo.subtext',
    altText: 'Image of scubadoo site',
    link: 'scubadoo',
    imgSrc: IMGURL.scubadoo
  }
]
