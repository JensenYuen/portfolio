import { Container } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Navbar } from '../layout'

const WorksPage = () => {
  const { t } = useTranslation()

  return (
    <>
      <Navbar />
      <Container maxWidth='sm'>
        <div>
          <p>
            {t('workspage.title')}
          </p>
        </div>
      </Container>
    </>
  )
}

export default WorksPage
