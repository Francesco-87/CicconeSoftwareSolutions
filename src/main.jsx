import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import './resources/css/variables.css'
import './resources/css/global.css'
import './resources/css/styles.css'

const container = document.getElementById('root')

if (!container) {
  throw new Error('The React entry point requires an element with id="root".')
}

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
