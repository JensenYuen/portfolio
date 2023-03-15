import React, { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import { Breadcrumbs } from '../components'
import '../stylesheets/aboutpage.scss'

interface DetailedWorkInfo {
  title: string
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
        subText: t('work.popugraph.subtext'),
        description: t('work.popugraph.description'),
        source: t('work.popugraph.source')
      },
      prevport: {
        title: t('work.prevport.title'),
        subText: t('work.prevport.subtext'),
        description: t('work.prevport.description'),
        source: t('work.prevport.source')
      },
      gathersg: {
        title: t('work.gathersg.title'),
        subText: t('work.gathersg.subtext'),
        description: t('work.gathersg.description'),
        source: t('work.gathersg.source')
      },
      offgrid: {
        title: t('work.offgrid.title'),
        subText: t('work.offgrid.subtext'),
        description: t('work.offgrid.description'),
        source: t('work.offgrid.source')
      },
      scubadoo: {
        title: t('work.scubadoo.title'),
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
      <h2>{workDetails?.title}</h2>
      <p>content about each product to be added</p>
    </>
  )
}

export default DetailedWorkPage
