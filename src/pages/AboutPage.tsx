import { Container } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { materialUi, reactLogo } from '../assets/index'
import { GridCard } from '../components'
import { Footer, Navbar } from '../layout'
import '../stylesheets/aboutpage.scss'

const AboutPage = () => {
  const { t } = useTranslation()

  return (
    <main className='pb-5'>
      <Navbar />
      <Container maxWidth='md'>
        <div className='mb-5'>
          <div className='about-title mt-0 mb-1'>Created with</div>
          <span>A list of tech that I used to create this page.</span><br/>
        </div>
        <div className='grid-layout'>
          <GridCard
            className='about-image'
            title='React'
            altText='React image'
            imgSrc={reactLogo}
            description='React used for creating Single-page Applications (SPA)'/>
          <GridCard
            className='about-image'
            title='MaterialUI'
            altText='materialUi image'
            imgSrc={materialUi}
            description='A component library used for creating websites'/>
        </div>
      </Container>
      <Footer />
    </main>
  )
}

export default AboutPage
