import React from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from '@mui/material'
import { IMG_URL, TIMELINE_CONTENT } from '../constants'
import {
  Timeline, TimelineItem, TimelineSeparator, TimelineConnector,
  TimelineContent, TimelineDot, TimelineOppositeContent,
  timelineOppositeContentClasses
} from '@mui/lab'
import '../stylesheets/homepage.scss'

const HomePage = () => {
  const { t } = useTranslation()

  const renderTimelineItems = () => {
    const timelineItems = TIMELINE_CONTENT.map((timeline, index) => {
      return (
        <TimelineItem key={timeline.key}
          sx={{
            [`& .${timelineOppositeContentClasses.root}`]: { flex: 0.3 }
          }}>
          <TimelineOppositeContent color="textSecondary">
            {timeline.year}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot variant='outlined' color={index % 2 === 0 ? 'primary' : 'secondary'} />
            {index === TIMELINE_CONTENT.length - 1 ? <></> : <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent>{t(timeline.content)}</TimelineContent>
        </TimelineItem>
      )
    })

    return timelineItems
  }

  return (
    <Container maxWidth='sm'>
      <div className='d-flex flex-column align-center text-center'>
        <img src={IMG_URL.profile} alt='profile picture' className='profile-image mb-3' loading='lazy'/>
        <div className='display'>
          <h2 className='name'>{t('homepage.name')}</h2>
          <span className='job-title'>{t('homepage.title')}</span>
        </div>
        <span className='quote'>
          {t('homepage.quote')}
        </span>
      </div>
      <div className='mb-5 mt-3'>
        <div className='bio mb-1'>Bio</div>
        <Timeline position="right">
          {renderTimelineItems()}
        </Timeline>
      </div>
    </Container>
  )
}

export default HomePage
