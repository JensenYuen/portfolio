import React, { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import { Breadcrumbs } from '../components'
import { Typography } from '@mui/material'
import '../stylesheets/aboutpage.scss'

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
    const works: Record<string, DetailedWorkInfo> = {
      popugraph: {
        title: t('work.popugraph.title'),
        created_in: t('work.popugraph.created_in'),
        subText: t('work.popugraph.subtext'),
        description: t('work.popugraph.description'),
        source: t('work.popugraph.source'),
        link: t('work.popugraph.link'),
        stack: t('work.popugraph.stack')
      },
      caseconnect: {
        title: t('work.caseconnect.title'),
        created_in: t('work.caseconnect.created_in'),
        subText: t('work.caseconnect.subtext'),
        description: t('work.caseconnect.description'),
        source: t('work.caseconnect.source'),
        link: t('work.caseconnect.link'),
        stack: t('work.caseconnect.stack')
      },
      offgrid: {
        title: t('work.offgrid.title'),
        created_in: t('work.offgrid.created_in'),
        subText: t('work.offgrid.subtext'),
        description: t('work.offgrid.description'),
        source: t('work.offgrid.source'),
        link: t('work.offgrid.link'),
        stack: t('work.offgrid.stack')
      },
      scubadoo: {
        title: t('work.scubadoo.title'),
        created_in: t('work.scubadoo.created_in'),
        subText: t('work.scubadoo.subtext'),
        description: t('work.scubadoo.description'),
        source: t('work.scubadoo.source'),
        link: t('work.scubadoo.link'),
        stack: t('work.scubadoo.stack')
      }
    }
    setWorkDetails(works[path[1]])
  }, [path[1]])

  const renderWorkList = () => (
    <ul className='about-details'>
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
    </>
  )
}

export default DetailedWorkPage
