import React from 'react'
import { Container } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { GridCard } from '../components'
import { ABOUT } from '../constants'
import '../stylesheets/aboutpage.scss'

interface techInfo {
  title: string
  altText: string
  description: string
  imgSrc: string
}

const AboutPage = () => {
  const { t } = useTranslation()

  const renderCards = () => {
    const cards = ABOUT.map((tech: techInfo) => {
      return (
        <GridCard
          key={tech.title}
          className='about-image'
          title={t(tech.title)}
          altText={t(tech.altText)}
          imgSrc={t(tech.imgSrc)}
          description={t(tech.description)}
        />
      )
    })
    return cards
  }

  return (
    <Container maxWidth='md'>
      <div className='mb-5'>
        <div className='about-title mt-0 mb-1'>Tech</div>
        <span>{t('about.subtext')}</span><br/>
      </div>
      <div className='about-grid'>
        {renderCards()}
      </div>
    </Container>
  )
}

export default AboutPage
