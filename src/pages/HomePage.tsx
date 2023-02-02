import React from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from '@mui/material'
import { Navbar } from '../layout/index'

const HomePage = () => {
  const { t } = useTranslation()

  return (
    <>
      <Navbar />
      <Container maxWidth='sm'>
        <div>
          <p>
            {t('helloworld')}
          </p>
        </div>
      </Container>
    </>
  )
}

export default HomePage
