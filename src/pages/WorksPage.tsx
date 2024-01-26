import React, { useEffect, useState } from 'react'
import { Container } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { caseconnect, offgrid, scubadoo, popuGraph } from '../assets/index'
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
      title: t('work.caseconnect.title'),
      altText: 'Image of caseconnect site',
      subText: t('work.caseconnect.subtext'),
      link: 'caseconnect',
      imgSrc: caseconnect
    },
    {
      title: t('work.offgrid.title'),
      subText: t('work.offgrid.subtext'),
      altText: 'Image of offgrid site',
      link: 'offgrid',
      imgSrc: offgrid
    },
    {
      title: t('work.scubadoo.title'),
      subText: t('work.scubadoo.subtext'),
      altText: 'Image of scubadoo site',
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
