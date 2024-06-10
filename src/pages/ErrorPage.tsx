import React from 'react'
import { Button, Container, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import '../stylesheets/errorpage.scss'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
  const { t } = useTranslation()
  const nav = useNavigate()

  const handleClick = () => {
    nav('/')
  }

  return (
    <Container maxWidth='sm'>
      <div className='error-page'>
        <Typography variant="h1" gutterBottom>404</Typography>
        <Typography variant='subtitle1' gutterBottom>{t('error.altText')}</Typography>
        <Typography variant='body1' className='subText' gutterBottom>{t('error.subText')}</Typography>
        <Button variant='outlined' onClick={handleClick}>GO TO HOMEPAGE</Button>
      </div>
    </Container>
  )
}

export default ErrorPage
