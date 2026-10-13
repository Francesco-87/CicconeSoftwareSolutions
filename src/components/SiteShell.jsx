export function Header({ caseStudy = false }) {
  const pageHref = (page) => caseStudy ? `/#${page}` : `#${page}`

  return (
    <header>
      <div className="header-container">
        <div className="logo-container">
          <a href={caseStudy ? '/' : '#home'} aria-label="Ciccone Software Solutions home">
            <img src="/img/LogoFull.svg" alt="Ciccone Software Solutions Logo" className="ciccone-logo" />
          </a>
        </div>
        <nav aria-label="Main navigation">
          <a href={pageHref('about')}>About</a>
          <a href={pageHref('services')}>Services</a>
          <a href={pageHref('projects')}>Projects</a>
          <a href={pageHref('contact')}>Contact</a>
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
  return (
    <footer>
      <div className="footer-links">
        <a href={caseStudy ? '/#contact' : '#contact'}>Contact</a>
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
