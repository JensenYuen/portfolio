import React from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from '@mui/material'
import { profile } from '../assets/index'
import '../stylesheets/homepage.scss'

const HomePage = () => {
  const { t } = useTranslation()

  return (
    <Container maxWidth='sm'>
      <div className="d-flex flex-column align-center text-center">
        <img src={profile} alt='profile picture' className='profile-image mb-3'/>
        <div className='display'>
          <h2 className='name'>{t('homepage.name')}</h2>
          <span className='job-title'>{t('homepage.title')}</span>
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
        <div>
          <span className='mr-2'>2023</span>
          {t('homepage.ehle')}
        </div>
        <div>
          <span className='mr-2'>2023</span>
          {t('homepage.ehle2')}
        </div>
        <div>
          <span className='mr-2'>2023</span>
          {t('homepage.current_job')}
        </div>
      </div>
    </Container>
  )
}

export default HomePage
