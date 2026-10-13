export default function ContactPage() {
  return (
    <section className="contact-section section-base">
      <form action="https://formspree.io/f/meolyver" method="POST" className="card contact-form">
        <input type="hidden" name="_subject" value="New message from your website" />
        <label className="hp" aria-hidden="true">
          Leave this field empty
          <input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" />
        </label>
        <div className="field">
          <label htmlFor="email">Your email</label>
          <input id="email" name="email" type="email" className="input" required autoComplete="email" placeholder="you@example.com" />
        </div>
        <div className="field">
          <label htmlFor="message">Your message</label>
          <textarea id="message" name="message" className="textarea" required rows="6" placeholder="How can we help?" />
        </div>
        <p className="privacy-note">
          When you submit this form, your email address and message are sent to Formspree, which processes the submission
          and forwards it to me by email. I use the information to respond to your inquiry and may keep the email in my
          inbox until I delete it. Formspree may process data in the United States and other countries where it operates.
          See the{' '}
          <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
            Formspree Privacy Policy
          </a>{' '}
          for details about its processing.
        </p>
        <label className="consent">
          <input type="checkbox" name="consent" required />
          I agree to the processing of my data for the purpose of this inquiry.
        </label>
        <button type="submit" className="button">Send</button>
      </form>
    </section>
  )
}
