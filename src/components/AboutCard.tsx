import React from 'react'
import { CardContent, Typography } from '@mui/material'

interface props {
  className?: string
  title?: string
  altText: string
  src: string
  description: string
}

const AboutCard = ({ className, title, src, altText, description }: props) => {
  return (
    <CardContent>
      <img className={className} src={src} alt={altText} />
      <Typography variant="body2" sx={{ textWrap: 'wrap' }}>
        {description}
      </Typography>
    </CardContent>
  )
}

export default AboutCard
