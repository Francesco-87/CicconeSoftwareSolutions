import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.js'
import de from './locales/de.js'

const localeFromPath = window.location.pathname.split('/').filter(Boolean)[0]

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    de: { translation: de },
  },
  lng: localeFromPath === 'de' ? 'de' : 'en',
  fallbackLng: 'en',
  supportedLngs: ['en', 'de'],
  keySeparator: false,
  nsSeparator: false,
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
})

export default i18n
