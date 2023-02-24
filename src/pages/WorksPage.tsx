import React from 'react'
import { Container } from '@mui/material'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useTranslation } from 'react-i18next'
import { Footer, Navbar } from '../layout'
import { gathersg, offgrid, scubadoo, prevPort, popuGraph } from '../assets/index'
import '../stylesheets/workspage.scss'

type ObjectLiteral = Record<string, any>
interface worksInfo {
  title: string
  subText: string
  description: string
  key: string
  source?: string
  link?: string
}

const WorksPage = () => {
  const { t } = useTranslation()
  const [expanded, setExpanded] = React.useState<string | false>(false)

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }

  const images: ObjectLiteral = {
    popuGraph,
    prevPort,
    gathersg,
    offgrid,
    scubadoo
  }

  const works: worksInfo[] = [
    {
      title: 'Population graph',
      subText: 'React SPA',
      description: 'Resas API was used to obtain population data, while highcharts was used to plot and display the data.',
      source: 'https://github.com/JensenYuen/population-graph',
      link: 'https://jensenyuen.github.io/popu-graph/',
      key: 'popuGraph'
    },
    {
      title: 'Portfolio (previous)',
      subText: 'React SPA',
      description: 'previous_description',
      source: 'https://github.com/JensenYuen/my-page',
      link: 'https://jensenyuen.github.io/my-page/',
      key: 'prevPort'
    },
    {
      title: 'GatherSg',
      subText: 'Government service',
      description: 'gathersg_description',
      link: 'https://gather.gov.sg/',
      key: 'gathersg'
    },
    {
      title: 'OffGrid',
      subText: 'Product development',
      description: 'offgrid_description',
      source: 'https://github.com/eztree/offgrid',
      key: 'offgrid'
    },
    {
      title: 'Scubadoo',
      subText: 'Product development',
      description: 'scubadoo_description',
      source: 'https://github.com/suansen/scubadoo',
      key: 'scubadoo'
    }
  ]

  const renderAccordion = () => {
    const accordion = works.map((work, index) => {
      return (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          className="mb-4">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}bh-content`}
            id={`panel${index}bh-header`}
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              {work.title}
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>{work.subText}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <img src={images[work.key]} className="work-image mb-2" />
            <Typography>
              {work.description}
            </Typography>
          </AccordionDetails>
        </Accordion>
      )
    })

    return accordion
  }

  return (
    <main>
      <Navbar />
      <Container maxWidth='sm'>
        <div className='mb-5'>
          <div className='work-title mt-0 mb-1'>Works</div>
          <span>Personal/offical works that I had contributed in developing.</span><br/>
          <span>Works are arranged from newest to oldest work.</span>
        </div>
        <div>
          {renderAccordion()}
        </div>
      </Container>
      <Footer />
    </main>
  )
}

export default WorksPage
