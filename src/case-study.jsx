import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Footer, Header } from './components/SiteShell.jsx'
import { initializeTelemetry, trackPageView } from './telemetry.js'

import BookingAdminDashboardCaseStudy from './projects/booking-admin-dashboard/CaseStudy.jsx'
import BookingAndRegistryCaseStudy from './projects/booking-and-registry-system/CaseStudy.jsx'
import MobileGoalTrackerCaseStudy from './projects/mobile-goal-tracker/CaseStudy.jsx'
import TripSentinelCaseStudy from './projects/tripsentinel/CaseStudy.jsx'

const caseStudies = {
  'booking-admin-dashboard': BookingAdminDashboardCaseStudy,
  'booking-and-registry-system': BookingAndRegistryCaseStudy,
  'mobile-goal-tracker': MobileGoalTrackerCaseStudy,
  tripsentinel: TripSentinelCaseStudy,
}

const caseStudyNames = {
  'booking-admin-dashboard': 'Booking Admin Dashboard',
  'booking-and-registry-system': 'Booking and Registry System',
  'mobile-goal-tracker': 'Mobile Goal Tracker',
  tripsentinel: 'TripSentinel',
}

function CaseStudyApp({ CaseStudy }) {
  return (
    <>
      <Header caseStudy />
      <main id="main-content"><CaseStudy /></main>
      <Footer caseStudy />
    </>
  )
}

const slug = window.location.pathname.split('/').filter(Boolean).at(-1)
const content = caseStudies[slug]
const container = document.getElementById('root')

initializeTelemetry(import.meta.env.VITE_APPINSIGHTS_CONNECTION_STRING)

if (!content) {
  throw new Error(`No React case study is registered for URL slug "${slug}".`)
}

if (!container) {
  throw new Error('The React case-study entry point requires an element with id="root".')
}

trackPageView(`case-study:${slug}`, caseStudyNames[slug])

createRoot(container).render(
  <StrictMode>
    <CaseStudyApp CaseStudy={content} />
  </StrictMode>,
)
