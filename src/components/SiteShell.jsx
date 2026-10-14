import { Link } from 'react-router-dom'

export function Header({ caseStudy = false }) {
  const pageHref = (page) => `/en${page ? `/${page}` : ''}`
  const siteLink = (href, children, props = {}) => caseStudy
    ? <a href={href} {...props}>{children}</a>
    : <Link to={href} {...props}>{children}</Link>

  return (
    <header>
      <div className="header-container">
        <div className="logo-container">
          {siteLink(pageHref(''), (
            <img src="/img/LogoFull.svg" alt="Ciccone Software Solutions Logo" className="ciccone-logo" />
          ), { 'aria-label': 'Ciccone Software Solutions home' })}
        </div>
        <nav aria-label="Main navigation">
          {siteLink(pageHref('about'), 'About')}
          {siteLink(pageHref('services'), 'Services')}
          {siteLink(pageHref('projects'), 'Projects')}
          {siteLink(pageHref('contact'), 'Contact')}
        </nav>
        <div className="language-selector">
          <svg className="icon-translate" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" />
          <select aria-label="Select language (coming soon)" className="language-select" disabled aria-disabled="true">
            <option value="en">EN</option>
            <option value="no">NO</option>
            <option value="es">ES</option>
            <option value="it">IT</option>
          </select>
        </div>
      </div>
    </header>
  )
}

export function Footer({ caseStudy = false }) {
  const contactHref = '/en/contact'

  return (
    <footer>
      <div className="footer-links">
        {caseStudy
          ? <a href={contactHref}>Contact</a>
          : <Link to={contactHref}>Contact</Link>}
      </div>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/francesco-ciccone-238300128" target="_blank" rel="noopener noreferrer">
          <img src="/img/linkedin-svgrepo-com.svg" alt="LinkedIn" />
        </a>
        <a href="https://github.com/Francesco-87" target="_blank" rel="noopener noreferrer">
          <img src="/img/github-svgrepo-com.svg" alt="GitHub" />
        </a>
      </div>
      <p>&copy; 2026 Ciccone Software Solutions. All rights reserved.</p>
    </footer>
  )
}
