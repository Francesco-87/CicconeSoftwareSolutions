import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Footer, Header } from './components/SiteShell.jsx'

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

if (!content) {
  throw new Error(`No React case study is registered for URL slug "${slug}".`)
}

if (!container) {
  throw new Error('The React case-study entry point requires an element with id="root".')
}

createRoot(container).render(
  <StrictMode>
    <CaseStudyApp CaseStudy={content} />
  </StrictMode>,
)
