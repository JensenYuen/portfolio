import { CardContent } from '@mui/material'
import React from 'react'

interface Props {
  className: string
  title: string
  altText: string
  src: string
  description: string
}

const GridCard = ({ className, title, src, altText, description }: Props) => {
  return (
    <CardContent>
      <img key={title} src={src} alt={altText} className={className} loading='lazy'/>
      <h3 className='mt-1 mb-0 text-center'>{title}</h3>
      <p className='mt-0 mb-0 text-center'>{description}</p>
    </CardContent>
  )
}

export default GridCard
