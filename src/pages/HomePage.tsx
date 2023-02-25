import React from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from '@mui/material'
import { Footer, Navbar } from '../layout/index'
import { profile } from '../assets/index'
import '../stylesheets/homepage.scss'

const HomePage = () => {
  const { t } = useTranslation()

  return (
    <main className='pb-5'>
      <Navbar />
      <Container maxWidth='sm'>
        <div className="d-flex flex-column align-center text-center">
          <img src={profile} alt='profile picture' className='profile-image mb-3'/>
          <div className='d-flex align-center'>
            <h2 className='mt-0 mb-2 mr-1'>{t('homepage.name')}</h2>
            {t('homepage.title')}
          </div>
          <span className='quote'>
            {t('homepage.quote')}
          </span>
        </div>
        <div className='mb-5'>
          <div className='bio mb-1'>Bio</div>
          <div>
            <span className='mr-2'>1995</span>
            {t('homepage.bio')}
          </div>
          <div>
            <span className='mr-2'>2021</span>
            {t('homepage.ntu')}
          </div>
          <div>
            <span className='mr-2'>2021</span>
            {t('homepage.lewagon')}
          </div>
        </div>
      </Container>
      <Footer />
    </main>
  )
}

export default HomePage
