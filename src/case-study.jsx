import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Footer, Header } from './components/SiteShell.jsx'
import caseStudies from './projects/caseStudies.js'
import i18n from './i18n.js'
import { initializeTelemetry, trackPageView } from './telemetry.js'

function CaseStudyApp({ CaseStudy, locale, slug }) {
  return (
    <>
      <Header caseStudy locale={locale} />
      <main id="main-content"><CaseStudy /></main>
      <Footer caseStudy locale={locale} />
    </>
  )
}

const path = window.location.pathname.split('/').filter(Boolean)
const hasLocalizedPath = ['en', 'de'].includes(path[0])
const locale = hasLocalizedPath ? path[0] : i18n.language
const slug = path.at(-1)
const content = caseStudies[slug]
const container = document.getElementById('root')

initializeTelemetry(import.meta.env.VITE_APPINSIGHTS_CONNECTION_STRING)
i18n.changeLanguage(locale)
document.documentElement.lang = locale

if (!hasLocalizedPath && locale === 'de') {
  window.location.replace(`/de/projects/${encodeURIComponent(slug)}`)
} else {
  if (!content) {
    throw new Error(`No React case study is registered for URL slug "${slug}".`)
  }

  if (!container) {
    throw new Error('The React case-study entry point requires an element with id="root".')
  }

  trackPageView(`case-study:${locale}:${slug}`, slug)

  createRoot(container).render(
    <StrictMode>
      <CaseStudyApp CaseStudy={content} locale={locale} slug={slug} />
    </StrictMode>,
  )
}
