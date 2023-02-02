import React from 'react'
import { useTranslation } from 'react-i18next'

const AboutPage = () => {
  const { t } = useTranslation()

  return (
    <div>
      <p>
        {t('aboutpage.title')}
      </p>
    </div>
  )
}

export default AboutPage