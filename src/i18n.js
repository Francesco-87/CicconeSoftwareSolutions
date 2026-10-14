import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.js'
import de from './locales/de.js'
import { detectPreferredLanguage } from './languageDetection.js'

const localeFromPath = window.location.pathname.split('/').filter(Boolean)[0]
const supportedLocaleFromPath = ['en', 'de'].includes(localeFromPath) ? localeFromPath : null

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    de: { translation: de },
  },
  lng: supportedLocaleFromPath || detectPreferredLanguage(
    globalThis.navigator?.languages,
    globalThis.navigator?.language,
  ),
  fallbackLng: 'en',
  supportedLngs: ['en', 'de'],
  initImmediate: false,
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
