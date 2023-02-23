import React from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from '@mui/material'
import { Footer, Navbar } from '../layout/index'
import '../stylesheets/homepage.scss'

const HomePage = () => {
  const { t } = useTranslation()
  console.log(t)

  return (
    <main className='pb-5'>
      <Navbar />
      <Container maxWidth='sm'>
        <span>
          Hello! My name is Jensen. I am a fullstack developer.
        </span>
        <div>
          <div className='header'>Bio</div>
          <div>
            <span className='mr-2'>1995</span>
            Born in Singapore
          </div>
          <div>
            <span className='mr-2'>2021</span>
            Graduated from Nanyang Technological University, Bachelor of Engineering
            Specialization: Electronic Engineering (Microelectronics & Photonics)
          </div>
        </div>
      </Container>
      <Footer />
    </main>
  )
}

export default HomePage
