import React from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from '@mui/material'
import { Footer, Navbar } from '../layout/index'
import profile from '../assets/profile.png'
import '../stylesheets/homepage.scss'

const HomePage = () => {
  const { t } = useTranslation()

  return (
    <main className='pb-5'>
      <Navbar />
      <Container maxWidth='sm'>
        <div className="d-flex flex-column align-center text-center mb-5">
          <img src={profile} alt='profile picture' className='profile-image mb-3'/>
          <div className='d-flex align-center'>
            <h2 className='mt-0 mb-2 mr-1'>Jensen Yuen</h2>
            (Software Engineer)
          </div>
          <span className='quote'>
            Hello, I aspire to be a fullstack web developer!
          </span>
        </div>
        <div className='mb-5'>
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
          <div>
            <span className='mr-2'>2021</span>
            Completed Web Development Course from LeWagon
          </div>
        </div>
      </Container>
      <Footer />
    </main>
  )
}

export default HomePage
