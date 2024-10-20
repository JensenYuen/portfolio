import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { translationEN, translationJA } from './locales'

const resources = {
  en: {
    translation: translationEN
  },
  ja: {
    translation: translationJA
  }
}

const lang = navigator.language.split('-')[0]

i18n
  .use(initReactI18next)
  .init({
    debug: false,
    lng: lang,
    fallbackLng: ['en', 'ja'],
    interpolation: {
      escapeValue: false
    },
    resources
  })

i18n.changeLanguage()

export default i18n
