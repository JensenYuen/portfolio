import React, { useEffect, useState } from 'react'
import { Container } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { gathersg, offgrid, scubadoo, prevPort, popuGraph } from '../assets/index'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { GridCard } from '../components'
import '../stylesheets/workspage.scss'

export type ObjectLiteral = Record<string, any>
interface worksInfo {
  title: string
  subText: string
  altText: string
  link: string
  imgSrc: string
}

const WorksPage = () => {
  const navigate = useNavigate()
  const [workSelected, setWorkSelected] = useState(false)
  const { t } = useTranslation()
  const { state } = useLocation()

  useEffect(() => {
    setWorkSelected(state.workSelected)
  }, [state.workSelected])

  const works: worksInfo[] = [
    {
      title: t('work.popugraph.title'),
      subText: t('work.popugraph.subtext'),
      altText: 'Image of popu-graph site',
      link: 'popugraph',
      imgSrc: popuGraph
    },
    {
      title: t('work.prevport.title'),
      subText: t('work.prevport.subtext'),
      altText: 'Image of prevPort site',
      link: 'prevport',
      imgSrc: prevPort
    },
    {
      title: t('work.gathersg.title'),
      altText: 'Image of GatherSG site',
      subText: t('work.gathersg.subtext'),
      link: 'gathersg',
      imgSrc: gathersg
    },
    {
      title: t('work.offgrid.title'),
      altText: 'Image of offgrid site',
      subText: t('work.offgrid.subtext'),
      link: 'offgrid',
      imgSrc: offgrid
    },
    {
      title: t('work.scubadoo.title'),
      altText: 'Image of scubadoo site',
      subText: t('work.scubadoo.subtext'),
      link: 'scubadoo',
      imgSrc: scubadoo
    }
  ]

  const handleClick = (link: string) => {
    setWorkSelected(true)
    navigate(`/works/${link}`, { state: { workSelected: true } })
  }

  const renderCards = () => {
    const cards = works.map((work) => {
      return (
        <div key={work.title} onClick={() => { handleClick(work.link) }}>
          <GridCard
            className='work-image'
            title={work.title}
            altText={work.altText}
            imgSrc={work.imgSrc}
            description={work.subText}
          />
        </div>
      )
    })
    return cards
  }

  return (
    <Container maxWidth='sm'>
      {
        !workSelected && <>
          <div className='mb-5'>
            <div className='work-title mt-0 mb-1'>Works</div>
            <span>{t('work.subtext')}</span><br/>
            <span>{t('work.subtext2')}</span>
            <div className='work-grid mt-5'>
              {renderCards()}
            </div>
          </div>
        </>
      }
      <Outlet />
    </Container>
  )
}

export default WorksPage
