import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { initializeTelemetry } from './telemetry.js'
import './resources/css/variables.css'
import './resources/css/global.css'
import './resources/css/styles.css'
import './resources/css/home.css'
import './resources/css/about.css'
import './resources/css/services.css'
import './resources/css/projects.css'
import './resources/css/contact.css'
import './resources/css/privacy.css'

initializeTelemetry(import.meta.env.VITE_APPINSIGHTS_CONNECTION_STRING)

const container = document.getElementById('root')

if (!container) {
  throw new Error('The React entry point requires an element with id="root".')
}

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
