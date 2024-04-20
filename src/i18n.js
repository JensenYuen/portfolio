import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { translationEN, translationJA } from './translations'

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
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    lng: lang,
    fallbackLng: ['en', 'ja'],
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    },
    resources
  })

i18n.changeLanguage()

export default i18n
