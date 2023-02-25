import { Container } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { materialUi, reactLogo } from '../assets/index'
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
          <div>
            <img src={reactLogo} alt="React image" className='about-image'/>
            <span>React used for creating Single-page Applications(SPA)</span>
          </div>
          <div>
            <img src={materialUi} alt="material Ui image" className='about-image'/>
            <span>Component library used for creating websites</span>
          </div>
        </div>
      </Container>
      <Footer />
    </main>
  )
}

export default AboutPage
