import React, { useEffect, useState } from 'react'
import { Container } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { GridCard } from '../components'
import { WORKS_DATA } from '../constants'
import '../stylesheets/workspage.scss'

const WorksPage = () => {
  const navigate = useNavigate()
  const [workSelected, setWorkSelected] = useState(false)
  const { t } = useTranslation()
  const { state } = useLocation()

  useEffect(() => {
    setWorkSelected(state.workSelected)
  }, [state.workSelected])

  const handleClick = (link: string) => {
    setWorkSelected(true)
    navigate(`/works/${link}`, { state: { workSelected: true } })
  }

  const renderCards = () => {
    const cards = WORKS_DATA.map((work) => {
      return (
        <div key={work.title} onClick={() => { handleClick(work.link) }}>
          <GridCard
            className='work-image'
            title={t(work.title)}
            altText={work.altText}
            description={t(work.subText)}
            src={work.src}
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
