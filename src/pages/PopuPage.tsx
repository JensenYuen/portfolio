import { Container } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import '../stylesheets/aboutpage.scss'

const PopuPage = () => {
  const { t } = useTranslation()

  return (
    <Container maxWidth='sm'>
      Hello world @ popu page
    </Container>
  )
}

export default PopuPage
