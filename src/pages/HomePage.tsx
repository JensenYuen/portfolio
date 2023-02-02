import React from 'react'
import { useTranslation } from 'react-i18next'

const HomePage = () => {
  const { t } = useTranslation()

  return (
    <div>
      <p>
        {t('helloworld')}
      </p>
    </div>
  )
}

export default HomePage
