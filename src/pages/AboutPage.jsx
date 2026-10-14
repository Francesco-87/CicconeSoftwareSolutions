import { useTranslation } from 'react-i18next'

const valueIcons = [
  <>
    <path d="M12 3l7 3v6c0 5-3.5 9-7 9s-7-4-7-9V6l7-3z" fill="currentColor" opacity=".15" />
    <path d="M12 3l7 3v6c0 5-3.5 9-7 9s-7-4-7-9V6l7-3zm0 0v18" fill="none" stroke="currentColor" strokeWidth="1.2" opacity=".25" />
    <path d="M9.2 12.6l1.8 1.8 3.8-3.8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </>,
  <>
    <path d="M8.5 12.5l2 2a2 2 0 002.8 0l2.2-2.2a2 2 0 000-2.8l-1.7-1.7a2 2 0 00-2.8 0L9 7.8" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 12l4-4M21 12l-4-4" fill="none" stroke="currentColor" strokeWidth="1.2" opacity=".4" />
  </>,
  <>
    <path d="M3 19h18" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M6 15l4-4 3 3 5-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </>,
]

export default function AboutPage() {
  const { t } = useTranslation()
  const heroLines = t('about.heroLines', { returnObjects: true })
  const outcomes = t('about.outcomes', { returnObjects: true })
  const values = t('about.values', { returnObjects: true })
  const offers = t('about.offers', { returnObjects: true })

  return (
    <div className="about-page">
      <section className="about-header section-divider section-divider--bowtie" id="about-header">
        <div className="container">
          <h1>{t('about.heroTitle')}</h1>
          <p>
            {heroLines.map((line, index) => (
              <span key={line}>{line}{index < heroLines.length - 1 && <br />}</span>
            ))}
          </p>
        </div>
      </section>

      <section className="about-story section-base section-divider section-divider--lr" id="about-story">
        <div className="container">
          <h2 className="section-title">{t('about.storyTitle')}</h2>
          <div className="story-card card">
            <span className="story-badge" aria-hidden="true">{t('about.storyBadge')}</span>
            <p className="story-lead">{t('about.storyLead')}</p>
            <p>{t('about.storyBody')}</p>
          </div>
        </div>
      </section>

      <section className="mission-vision section-base section-divider section-divider--rl" id="mission-vision">
        <div className="container">
          <h2 className="section-title">{t('about.missionVisionTitle')}</h2>
          <div className="mission-vision-grid">
            <article className="mv-card card">
              <span className="mv-icon" aria-hidden="true" />
              <h3 className="mv-title">{t('about.missionTitle')}</h3>
              <p className="mv-text">{t('about.missionText')}</p>
            </article>
            <article className="mv-card card">
              <span className="mv-icon" aria-hidden="true" />
              <h3 className="mv-title">{t('about.visionTitle')}</h3>
              <p className="mv-text">{t('about.visionText')}</p>
            </article>
          </div>
          <h3 className="visually-hidden">{t('about.outcomesLabel')}</h3>
          <ul className="mv-chips" aria-label={t('about.outcomesLabel')}>
            {outcomes.map((outcome) => <li className="mv-chip" key={outcome}>{outcome}</li>)}
          </ul>
        </div>
      </section>

      <section id="about-me" className="about-me section-base section-divider section-divider--lr">
        <div className="container">
          <h2 className="section-title">{t('about.aboutMeTitle')}</h2>
          <p className="lead">
            {t('about.greeting')} <strong>Ciccone Software Solutions</strong>.
            {' '}{t('about.aboutMeLead')}
          </p>
          <article className="about-me_content card">
            <h3>{t('about.myStoryTitle')}</h3>
            <p>{t('about.myStoryText')}</p>
            <h3>{t('about.whyTitle')}</h3>
            <p>{t('about.whyText')}</p>
            <h3>{t('about.whoTitle')}</h3>
            <p>{t('about.whoText')}</p>
            <h3>{t('about.funFactTitle')}</h3>
            <p>{t('about.funFactText')}</p>
          </article>
        </div>
      </section>

      <section className="values section-base section-divider section-divider--rl" aria-labelledby="values-title">
        <div className="container">
          <h2 id="values-title" className="section-title">{t('about.valuesTitle')}</h2>
          <p className="values__tagline">{t('about.valuesTagline')}</p>
          <div className="values__grid" role="list" aria-label={t('about.valuesLabel')}>
            {values.map(([title, text], index) => (
              <article className="card value-card" role="listitem" key={title}>
                <div className="value-card__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" className="icon" aria-hidden="true">{valueIcons[index]}</svg>
                </div>
                <h3 className="value-card__title">{title}</h3>
                <p className="value-card__body">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="service-cards section-base" id="service-cards">
        <div className="container">
          <h2 className="section-title">{t('about.offersTitle')}</h2>
          <div className="cards-grid">
            {offers.map(([title, description]) => (
              <div className="card service-card" key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
