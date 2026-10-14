import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function ContactPage() {
  const { t, i18n } = useTranslation()
  const locale = i18n.resolvedLanguage || 'en'

  return (
    <section className="contact-section section-base">
      <form action="https://formspree.io/f/meolyver" method="POST" className="card contact-form">
        <input type="hidden" name="_subject" value={t('contact.subject')} />
        <label className="hp" aria-hidden="true">
          {t('contact.honeypot')}
          <input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" />
        </label>
        <div className="field">
          <label htmlFor="email">{t('contact.emailLabel')}</label>
          <input
            id="email"
            name="email"
            type="email"
            className="input"
            required
            autoComplete="email"
            placeholder={t('contact.emailPlaceholder')}
          />
        </div>
        <div className="field">
          <label htmlFor="message">{t('contact.messageLabel')}</label>
          <textarea
            id="message"
            name="message"
            className="textarea"
            required
            rows="6"
            placeholder={t('contact.messagePlaceholder')}
          />
        </div>
        <p className="privacy-note">
          {t('contact.privacyBefore')}{' '}
          <Link to={`/${locale}/privacy-policy`}>{t('common.privacyPolicy')}</Link>.{' '}
          {t('contact.privacyAnd')}{' '}
          <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
            {t('contact.privacyLink')}
          </a>{' '}
          {t('contact.privacyAfter')}
        </p>
        <label className="consent">
          <input type="checkbox" name="consent" required />
          {t('contact.consent')}
        </label>
        <button type="submit" className="button">{t('contact.send')}</button>
      </form>
    </section>
  )
}
