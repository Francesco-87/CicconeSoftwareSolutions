import { useEffect } from 'react'
import { BrowserRouter, Navigate, Outlet, Route, Routes, useLocation, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Footer, Header } from './components/SiteShell.jsx'
import AboutPage from './pages/AboutPage.jsx'
import CaseStudyPage from './pages/CaseStudyPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import HomePage from './pages/HomePage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import i18n from './i18n.js'
import { trackPageView } from './telemetry.js'

const pageNames = {
  about: 'about',
  contact: 'contact',
  home: 'home',
  projects: 'projects',
  services: 'services',
}

const caseTitleKeys = {
  'booking-admin-dashboard': 'case.bookingAdmin.title',
  'booking-and-registry-system': 'case.bookingRegistry.title',
  'mobile-goal-tracker': 'case.mobileTracker.title',
  tripsentinel: 'case.tripSentinel.title',
}

function MainSiteLayout() {
  const { locale } = useParams()
  const location = useLocation()
  const { t } = useTranslation()
  const segments = location.pathname.split('/').filter(Boolean)
  const page = segments[1] || 'home'
  const projectSlug = page === 'projects' ? segments[2] : undefined
  const isSupportedLocale = i18n.options.supportedLngs.includes(locale)

  useEffect(() => {
    if (!isSupportedLocale) return
    if (i18n.language !== locale) i18n.changeLanguage(locale)
    document.documentElement.lang = locale
    const title = projectSlug && caseTitleKeys[projectSlug]
      ? t(caseTitleKeys[projectSlug])
      : t(`pageTitles.${pageNames[page] || 'home'}`)
    document.title = `${title} | Ciccone Software Solutions`
    if (pageNames[page]) {
      trackPageView(`main:${locale}:${page}`, t(`common.${pageNames[page]}`))
    }
  }, [isSupportedLocale, locale, page, projectSlug, t])

  if (!isSupportedLocale) return <Navigate to="/en" replace />
  if (!pageNames[page]) return <Navigate to={`/${locale}`} replace />

  return (
    <>
      <Header locale={locale} currentPage={page} caseStudy={Boolean(projectSlug)} />
      <main id="main-content"><Outlet /></main>
      <Footer locale={locale} />
    </>
  )
}

function LegacyHashRedirect() {
  const location = useLocation()
  const legacyPage = location.hash.slice(1)
  const target = pageNames[legacyPage] && legacyPage !== 'home'
    ? `/en/${legacyPage}`
    : '/en'

  return <Navigate to={target} replace />
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LegacyHashRedirect />} />
        <Route path="/:locale" element={<MainSiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="projects/:slug" element={<CaseStudyPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to=".." replace />} />
        </Route>
        <Route path="*" element={<Navigate to="/en" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
