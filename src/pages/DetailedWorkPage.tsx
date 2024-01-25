import React, { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import { Breadcrumbs } from '../components'
import '../stylesheets/aboutpage.scss'
import { Typography } from '@mui/material'

interface DetailedWorkInfo {
  title: string
  created_in: string
  subText: string
  description: string
  source: string
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
        source: t('work.popugraph.source')
      },
      prevport: {
        title: t('work.prevport.title'),
        created_in: t('work.prevport.created_in'),
        subText: t('work.prevport.subtext'),
        description: t('work.prevport.description'),
        source: t('work.prevport.source')
      },
      caseconnect: {
        title: t('work.caseconnect.title'),
        created_in: t('work.caseconnect.created_in'),
        subText: t('work.caseconnect.subtext'),
        description: t('work.caseconnect.description'),
        source: t('work.caseconnect.source')
      },
      offgrid: {
        title: t('work.offgrid.title'),
        created_in: t('work.offgrid.created_in'),
        subText: t('work.offgrid.subtext'),
        description: t('work.offgrid.description'),
        source: t('work.offgrid.source')
      },
      scubadoo: {
        title: t('work.scubadoo.title'),
        created_in: t('work.scubadoo.created_in'),
        subText: t('work.scubadoo.subtext'),
        description: t('work.scubadoo.description'),
        source: t('work.scubadoo.source')
      }
    }
    setWorkDetails(works[path[1]])
  }, [path[1]])

  return (
    <>
      <Breadcrumbs prevPath={path[0]} currPath={path[1]}/>
      <>
        <h2>{workDetails?.title}</h2>
      </>
      <Typography variant='subtitle1'>
        {workDetails?.description}

      </Typography>
      <ul className='about-details'>
        <li className='pb-1'>
          <span className='li-title mr-2'>title</span>info
        </li>
        <li className='pb-1'>
          <span className='li-title mr-2'>title</span>info
        </li>
        <li className='pb-1'>
          <span className='li-title mr-2'>title</span>info
        </li>
        <li className='pb-1'>
          <span className='li-title mr-2'>title</span>info
        </li>
      </ul>
    </>
  )
}

export default DetailedWorkPage
