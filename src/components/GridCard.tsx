import React from 'react'

interface props {
  className: string
  title: string
  altText: string
  imgSrc: string
  description: string
}

const GridCard = ({ className, title, imgSrc, altText, description }: props) => {
  return (
    <div>
      <img src={imgSrc} alt={altText} className={className}/>
      <h3 className='mt-1 mb-0 text-center'>{title}</h3>
      <p className='mt-0 mb-0 text-center'>{description}</p>
    </div>
  )
}

export default GridCard
