import { useEffect } from 'react'
import { BrowserRouter, Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom'
import { Footer, Header } from './components/SiteShell.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import HomePage from './pages/HomePage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import { trackPageView } from './telemetry.js'

const pageNames = {
  about: 'About',
  contact: 'Contact',
  home: 'Home',
  projects: 'Projects',
  services: 'Services',
}

function MainSiteLayout() {
  const location = useLocation()
  const page = location.pathname.split('/').filter(Boolean)[1] || 'home'

  useEffect(() => {
    if (pageNames[page]) {
      trackPageView(`main:${page}`, pageNames[page])
    }
  }, [page])

  if (!pageNames[page]) {
    return <Navigate to="/en" replace />
  }

  return (
    <>
      <Header />
      <main id="main-content"><Outlet /></main>
      <Footer />
    </>
  )
}

function LegacyHashRedirect() {
  const location = useLocation()
  const legacyPage = location.hash.slice(1)
  const target = legacyPage === 'home' || !pageNames[legacyPage]
    ? '/en'
    : `/en/${legacyPage}`

  return <Navigate to={target} replace />
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LegacyHashRedirect />} />
        <Route path="/en" element={<MainSiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/en" replace />} />
        </Route>
        <Route path="*" element={<Navigate to="/en" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
