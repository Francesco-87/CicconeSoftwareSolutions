import { useEffect, useState } from 'react'
import { Footer, Header } from './components/SiteShell.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import HomePage from './pages/HomePage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import { trackPageView } from './telemetry.js'

export default function App() {
  const getPageFromHash = () => {
    const page = window.location.hash.slice(1)
    return ['home', 'about', 'services', 'projects', 'contact'].includes(page) ? page : 'home'
  }
  const [page, setPage] = useState(getPageFromHash)

  useEffect(() => {
    const syncPageWithHash = () => {
      const nextPage = getPageFromHash()
      setPage(nextPage)
      const pageName = nextPage[0].toUpperCase() + nextPage.slice(1)
      trackPageView(`main:${nextPage}`, pageName)
    }

    syncPageWithHash()
    window.addEventListener('hashchange', syncPageWithHash)
    return () => window.removeEventListener('hashchange', syncPageWithHash)
  }, [])

  const pageContent = {
    home: <HomePage />,
    about: <AboutPage />,
    services: <ServicesPage />,
    projects: <ProjectsPage />,
    contact: <ContactPage />,
  }

  return (
    <>
      <Header />
      <main id="main-content">{pageContent[page]}</main>
      <Footer />
    </>
  )
}
