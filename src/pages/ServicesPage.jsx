import { useTranslation } from 'react-i18next'

export default function ServicesPage() {
  const { t } = useTranslation()
  const services = t('services.items', { returnObjects: true })

  return (
    <div className="page-wrapper">
      <section className="service-section section-base section-divider">
        <div className="container">
          <h1 className="section-title">{t('services.title')}</h1>
          <p>{t('services.intro')}</p>
          <ul>
            {services.map((service) => <li key={service}>{service}</li>)}
          </ul>
        </div>
      </section>
    </div>
  )
}
