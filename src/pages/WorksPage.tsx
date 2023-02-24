import { Container } from '@mui/material'
import React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useTranslation } from 'react-i18next'
import { Footer, Navbar } from '../layout'
import '../stylesheets/workspage.scss'

interface worksInfo {
  title: string
  subText: string
  description: string
  source?: string
  link?: string
}

const WorksPage = () => {
  const { t } = useTranslation()
  const [expanded, setExpanded] = React.useState<string | false>(false)

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }

  const works: worksInfo[] = [
    { title: 'Population graph', subText: 'React SPA', description: 'SPA using react', source: 'https://github.com/JensenYuen/population-graph', link: 'https://jensenyuen.github.io/popu-graph/' },
    { title: 'Portfolio (previous)', subText: 'React SPA', description: 'previous_description', source: 'https://github.com/JensenYuen/my-page', link: 'https://jensenyuen.github.io/my-page/' },
    { title: 'GatherSg', subText: 'Government service', description: 'gathersg_description', link: 'https://gather.gov.sg/' },
    { title: 'OffGrid', subText: 'Product development', description: 'offgrid_description', source: 'https://github.com/eztree/offgrid' },
    { title: 'Scubadoo', subText: 'Product development', description: 'scubadoo_description', source: 'https://github.com/suansen/scubadoo' }
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
          <span>Personal/offical works that I had contributed in developing</span>
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
