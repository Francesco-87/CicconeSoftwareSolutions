import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export function Header({ caseStudy = false, locale = 'en', currentPage }) {
  const { t } = useTranslation()
  const pageHref = (page) => `/${locale}${page ? `/${page}` : ''}`
  const siteLink = (href, children, props = {}) => caseStudy
    ? <a href={href} {...props}>{children}</a>
    : <Link to={href} {...props}>{children}</Link>
  const switchLocale = (nextLocale) => {
    const path = window.location.pathname.split('/').filter(Boolean)
    const route = ['en', 'de'].includes(path[0]) ? path.slice(1) : path
    const destination = route[0] === 'projects' && route.length > 1
      ? `/${nextLocale}/projects/${route[1]}`
      : `/${nextLocale}${route.length ? `/${route.join('/')}` : ''}`
    window.location.assign(destination)
  }

  return (
    <header>
      <div className="header-container">
        <div className="logo-container">
          {siteLink(pageHref(''), (
            <img src="/img/LogoFull.svg" alt={t('common.logoAlt')} className="ciccone-logo" />
          ), { 'aria-label': t('common.home') })}
        </div>
        <nav aria-label={t('common.navigation')}>
          {siteLink(pageHref('about'), t('common.about'), currentPage === 'about' ? { 'aria-current': 'page' } : {})}
          {siteLink(pageHref('services'), t('common.services'), currentPage === 'services' ? { 'aria-current': 'page' } : {})}
          {siteLink(pageHref('projects'), t('common.projects'), currentPage === 'projects' ? { 'aria-current': 'page' } : {})}
          {siteLink(pageHref('contact'), t('common.contact'), currentPage === 'contact' ? { 'aria-current': 'page' } : {})}
        </nav>
        <div className="language-selector">
          <svg className="icon-translate" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" />
          <select
            aria-label={t('common.selectLanguage')}
            className="language-select"
            value={locale}
            onChange={(event) => switchLocale(event.target.value)}
          >
            <option value="en">EN</option>
            <option value="de">DE</option>
          </select>
        </div>
      </div>
    </header>
  )
}

export function Footer({ caseStudy = false, locale = 'en' }) {
  const { t } = useTranslation()
  const contactHref = `/${locale}/contact`

  return (
    <footer>
      <div className="footer-links">
        {caseStudy
          ? <a href={contactHref}>{t('common.contact')}</a>
          : <Link to={contactHref}>{t('common.contact')}</Link>}
      </div>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/francesco-ciccone-238300128" target="_blank" rel="noopener noreferrer">
          <img src="/img/linkedin-svgrepo-com.svg" alt="LinkedIn" />
        </a>
        <a href="https://github.com/Francesco-87" target="_blank" rel="noopener noreferrer">
          <img src="/img/github-svgrepo-com.svg" alt="GitHub" />
        </a>
      </div>
      <p>&copy; 2026 Ciccone Software Solutions. {t('common.footerRights')}</p>
    </footer>
  )
}
