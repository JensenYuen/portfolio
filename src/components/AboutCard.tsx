import React from 'react'
import { CardContent, Typography } from '@mui/material'
import '../stylesheets/aboutcard.scss'

interface Props {
  title?: string
  altText: string
  src: string
  description: string
}

const AboutCard = ({ title, src, altText, description }: Props) => {
  return (
    <CardContent className='about-card'>
      <img className='about-image' src={src} alt={altText} loading='lazy' />
      <Typography variant="h6">{title}</Typography>
      <Typography variant="subtitle2" sx={{ textWrap: 'wrap' }}>
        {description}
      </Typography>
    </CardContent>
  )
}

export default AboutCard
