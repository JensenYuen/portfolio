import React, { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import { Breadcrumbs, ImageSet } from '../components'
import { Typography } from '@mui/material'
import { WORKS_DATA } from '../constants'
import '../stylesheets/workspage.scss'

interface DetailedWorkInfo {
  title: string
  created_in: string
  subText: string
  description: string
  source: string
  link: string
  stack: string
}

const DetailedWorkPage = () => {
  const { t } = useTranslation()
  const location = useLocation()
  const [workDetails, setWorkDetails] = useState<DetailedWorkInfo>()
  const path = location.pathname.split('/').filter(path => path)

  useMemo(() => {
    const workDetails = WORKS_DATA.find((work) => work.link === path[1])
    setWorkDetails({
      title: t(workDetails?.title ?? ''),
      created_in: t(workDetails?.created_in ?? ''),
      subText: t(workDetails?.subText ?? ''),
      description: t(workDetails?.description ?? ''),
      source: t(workDetails?.source ?? ''),
      link: t(workDetails?.url ?? ''),
      stack: t(workDetails?.stack ?? '')
    })
  }, [path[1]])

  const renderWorkList = () => (
    <ul className='details-work'>
       {
        (workDetails?.link !== '') &&
        <>
          <li className='pb-1'>
            <span className='li-title mr-2'>Website</span>
            <a href={workDetails?.link} target='_blank' rel='noreferrer'>
              {workDetails?.link}
            </a>
          </li>
        </>
      }
      {
        (workDetails?.source !== '') &&
        <>
          <li className='pb-1'>
            <span className='li-title mr-2'>Source</span>
            <a href={workDetails?.source} target='_blank' rel='noreferrer'>
              {workDetails?.source}
            </a>
          </li>
        </>
      }
      <li className='pb-1'>
        <span className='li-title mr-2'>Stack</span>{workDetails?.stack}
      </li>
      <li className='pb-1'>
        <span className='li-title mr-2'>Developed in</span>{workDetails?.created_in}
      </li>
    </ul>
  )

  return (
    <>
      <Breadcrumbs prevPath={path[0]} currPath={path[1]}/>
      <h2>{workDetails?.title}</h2>
      <Typography variant='subtitle1'>
        {workDetails?.description}
      </Typography>
      {renderWorkList()}
      <div className='d-flex jc-c'>
        <ImageSet work={path[1]}/>
      </div>
    </>
  )
}

export default DetailedWorkPage
