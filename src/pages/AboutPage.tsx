import React from 'react'
import { Container } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { ABOUT } from '../constants'
import { AboutCard } from '../components'
import '../stylesheets/aboutpage.scss'

interface AboutInfo {
  title: string
  altText: string
  description: string
  src: string
}

const AboutPage = () => {
  const { t } = useTranslation()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const renderInfo = () => {
    const cards = ABOUT.map((about: AboutInfo) => {
      return (
        <AboutCard
          key={t(about.title)}
          className='about-image'
          src={t(about.src)}
          altText={t(about.altText)}
          description={t(about.description)}
        />
      )
    })
    return cards
  }

  return (
    <Container maxWidth='sm'>
      <div className='mb-5'>
        <div className='about-title mt-0 mb-1'>Tech</div>
        <span>{t('about.subtext')}</span><br/>
      </div>
      <div className='about-grid'>
        {renderInfo()}
      </div>
    </Container>
  )
}

export default AboutPage
