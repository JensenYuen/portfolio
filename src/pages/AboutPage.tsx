import React from 'react'
import { Container } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { materialUi, reactLogo } from '../assets/index'
import { GridCard } from '../components'
import '../stylesheets/aboutpage.scss'

interface techInfo {
  title: string
  altText: string
  description: string
  imgSrc: string
}

const AboutPage = () => {
  const { t } = useTranslation()
  const aboutTech: techInfo[] = [
    {
      title: t('about.react.title'),
      altText: t('about.react.altText'),
      description: t('about.react.description'),
      imgSrc: reactLogo
    },
    {
      title: t('about.materialui.title'),
      altText: t('about.materialui.altText'),
      description: t('about.materialui.description'),
      imgSrc: materialUi
    }
  ]

  const renderCards = () => {
    const cards = aboutTech.map(tech => {
      return (
        <GridCard
          key={tech.title}
          className='about-image'
          title={tech.title}
          altText={tech.altText}
          imgSrc={tech.imgSrc}
          description={tech.description}
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
