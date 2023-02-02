import { Container } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Navbar } from '../layout'

const AboutPage = () => {
  const { t } = useTranslation()

  return (
    <>
      <Navbar />
      <Container maxWidth='sm'>
        <div>
          <p>
            {t('aboutpage.title')}
          </p>
        </div>
      </Container>
    </>
  )
}

export default AboutPage
