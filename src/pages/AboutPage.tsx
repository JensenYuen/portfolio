import { Container } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Footer, Navbar } from '../layout'

const AboutPage = () => {
  const { t } = useTranslation()

  return (
    <main>
      <Navbar />
      <Container maxWidth='sm'>
        <div>
          <p>
            {t('aboutpage.title')}
          </p>
        </div>
      </Container>
      <Footer />
    </main>
  )
}

export default AboutPage
