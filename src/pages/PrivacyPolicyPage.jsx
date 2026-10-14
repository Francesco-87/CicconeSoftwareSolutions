import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function PrivacyPolicyPage() {
  const { locale = 'en' } = useParams()
  const { t } = useTranslation()
  const sections = t('privacy.sections', { returnObjects: true })

  return (
    <section className="privacy-section section-base">
      <article className="privacy-content card">
        <h1>{t('pageTitles.privacyPolicy')}</h1>
        <p className="privacy-lead">{t('privacy.lead')}</p>
        <p className="privacy-contact-prompt">
          {t('privacy.contactPrompt')}{' '}
          <Link to={`/${locale}/contact`}>{t('privacy.contactLink')}</Link>.
        </p>
        {sections.map((section, index) => (
          <section key={section.heading} aria-labelledby={`privacy-heading-${index}`}>
            <h2 id={`privacy-heading-${index}`}>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {section.reference === 'formspree-security' && (
              <p>
                {section.referenceText}{' '}
                <a href="https://formspree.io/security/" target="_blank" rel="noopener noreferrer">
                  {section.referenceLink}
                </a>.
              </p>
            )}
          </section>
        ))}
        <p className="privacy-authority">
          {t('privacy.authorityPrompt')}{' '}
          <a href="https://www.datatilsynet.no/" target="_blank" rel="noopener noreferrer">
            {t('privacy.authorityLink')}
          </a>.
        </p>
      </article>
    </section>
  )
}
