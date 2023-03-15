import React from 'react'
import { Breadcrumbs as Breadcrumb, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import '../stylesheets/breadcrumbs.scss'

interface props {
  prevPath: string
  currPath: string
}

const Breadcrumbs = ({ prevPath, currPath }: props) => {
  return (
      <div>
        <Breadcrumb aria-label="breadcrumb">
          <Link
            className='breadcrumb-links'
            to={`/${prevPath}`}
            state={{ workSelected: false }}>
            {prevPath}
          </Link>
          <Typography color="text.primary">{currPath}</Typography>
        </Breadcrumb>
      </div>
  )
}

export default Breadcrumbs
