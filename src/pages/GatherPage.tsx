import { Container } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import '../stylesheets/aboutpage.scss'

const GatherPage = () => {
  const { t } = useTranslation()

  return (
    <Container maxWidth='sm'>
      Hello world @ gather page
    </Container>
  )
}

export default GatherPage
