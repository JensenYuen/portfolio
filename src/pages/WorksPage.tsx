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
  source: string
  link: string
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
  // <a href='https://opendata.resas-portal.go.jp/' target='_blank' rel='noreferrer'>resas API</a>
  const works: worksInfo[] = [
    {
      title: t('work.popugraph.title'),
      subText: t('work.popugraph.subtext'),
      description: t('work.popugraph.description'),
      source: t('work.popugraph.source'),
      link: t('work.popugraph.link'),
      key: 'popuGraph'
    },
    {
      title: t('work.prevport.title'),
      subText: t('work.prevport.subtext'),
      description: t('work.prevport.description'),
      source: t('work.prevport.source'),
      link: t('work.prevport.link'),
      key: 'prevPort'
    },
    {
      title: t('work.gathersg.title'),
      subText: t('work.gathersg.subtext'),
      description: t('work.gathersg.description'),
      source: t('work.gathersg.source'),
      link: t('work.gathersg.link'),
      key: 'gathersg'
    },
    {
      title: t('work.offgrid.title'),
      subText: t('work.offgrid.subtext'),
      description: t('work.offgrid.description'),
      source: t('work.offgrid.source'),
      link: t('work.offgrid.link'),
      key: 'offgrid'
    },
    {
      title: t('work.scubadoo.title'),
      subText: t('work.scubadoo.subtext'),
      description: t('work.scubadoo.description'),
      source: t('work.scubadoo.source'),
      link: t('work.scubadoo.link'),
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
            <img src={images[work.key]} className="work-image mb-2" loading='lazy'/>
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
    <main className='pb-5'>
      <Navbar />
      <Container maxWidth='sm'>
        <div className='mb-5'>
          <div className='work-title mt-0 mb-1'>Works</div>
          <span>Personal/official works that I had contributed in developing.</span><br/>
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
