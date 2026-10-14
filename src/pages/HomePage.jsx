import { useTranslation } from 'react-i18next'
import { Link, useParams } from 'react-router-dom'

const technologies = [
  ['JavaScript', 'js.svg'],
  ['React', 'react-js.svg'],
  ['Node.js', 'node_js.svg'],
  ['HTML', 'html.svg'],
  ['CSS', 'css.svg'],
  ['SQL', 'MySQL.svg'],
  ['MongoDB', 'mongodb.svg', 'icon-big'],
  ['Git & GitHub', 'github.svg'],
  ['Java', 'java.svg'],
  ['Azure', 'azure.svg'],
]

export default function HomePage() {
  const { t } = useTranslation()
  const { locale } = useParams()
  const services = t('home.services', { returnObjects: true })
  const statistics = t('home.statistics', { returnObjects: true })

  return (
    <div className="home-page" id="home">
      <section className="hero section-divider section-divider--bowtie" id="hero">
        <div className="container">
          <h1>{t('home.heroTitle')}</h1>
          <p>{t('home.heroBody')}</p>
          <Link to={`/${locale}/projects`}>{t('home.viewPortfolio')}</Link>
        </div>
      </section>

      <section className="services section-divider section-divider--lr" id="what-i-do">
        <div className="container">
          <h2 className="services-title">{t('home.whatIDo')}</h2>
          <ul className="services-list">
            {services.map((service) => <li className="services-card card" key={service}>{service}</li>)}
          </ul>
        </div>
      </section>

      <section className="tech-stack section-divider section-divider--rl">
        <div className="container">
          <h2>{t('home.techStack')}</h2>
          <div className="tech-items">
            {technologies.map(([name, image, className]) => (
              <div className="tech-item" key={name}>
                <img src={`/img/${image}`} alt={`${name} ${t('common.logoSuffix')}`} className={`tech-icon ${className || ''}`.trim()} />
                <span className="tech-label">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="statistics" id="statistics">
        <h2 className="statistics-title">{t('home.statisticsTitle')}</h2>
        <ul className="statistics-grid">
          {statistics.map(([number, label]) => (
            <li className="stat-card" key={label}>
              <div className="stat-figure">
                <div className="stat-circle"><span className="stat-number">{number}</span></div>
                <p className="stat-label">{label}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
