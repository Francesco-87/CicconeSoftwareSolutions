const values = [
  {
    title: 'Integrity & Clarity',
    text: 'Straight talk, no fluff. You’ll always know what’s worth doing, what isn’t, and why—so decisions are easy and budgets stay focused.',
    icon: (
      <>
        <path d="M12 3l7 3v6c0 5-3.5 9-7 9s-7-4-7-9V6l7-3z" fill="currentColor" opacity=".15" />
        <path d="M12 3l7 3v6c0 5-3.5 9-7 9s-7-4-7-9V6l7-3zm0 0v18" fill="none" stroke="currentColor" strokeWidth="1.2" opacity=".25" />
        <path d="M9.2 12.6l1.8 1.8 3.8-3.8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: 'Partnership, not projects',
    text: 'I collaborate closely, adapt with your business, and stay invested in results long after launch.',
    icon: (
      <>
        <path d="M8.5 12.5l2 2a2 2 0 002.8 0l2.2-2.2a2 2 0 000-2.8l-1.7-1.7a2 2 0 00-2.8 0L9 7.8" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 12l4-4M21 12l-4-4" fill="none" stroke="currentColor" strokeWidth="1.2" opacity=".4" />
      </>
    ),
  },
  {
    title: 'Build once, scale smart',
    text: 'Solutions are designed for tomorrow from day one—so you don’t outgrow your systems next year.',
    icon: (
      <>
        <path d="M3 19h18" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M6 15l4-4 3 3 5-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
]

const offers = [
  ['Full-Stack Setup', 'Register domains, configure DNS & professional email.'],
  ['Secure Hosting', 'Static sites on GitHub Pages with HTTPS & auto SSL.'],
  ['Brand & Design', 'Color palettes, typography, and custom logo creation.'],
  ['Responsive Dev', 'Lightweight, multi-language HTML/CSS/JS portfolios.'],
  ['Ongoing Maintenance', 'Automated SSL/DNS checks, dependency & spam monitoring.'],
]

export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-header section-divider section-divider--bowtie" id="about-header">
        <div className="container">
          <h1>Democratizing the Future of Technology for Every Business</h1>
          <p>
            At Ciccone Software Solutions, we believe technology is the future—<br />
            and every organization, from solo entrepreneurs<br />
            to global enterprises, deserves access to powerful, intuitive software.<br />
            We craft scalable solutions that empower you to innovate, grow,<br />
            and thrive in tomorrow’s digital landscape.
          </p>
        </div>
      </section>

      <section className="about-story section-base section-divider section-divider--lr" id="about-story">
        <div className="container">
          <h2 className="section-title">Our Story</h2>
          <div className="story-card card">
            <span className="story-badge" aria-hidden="true">The Backstory</span>
            <p className="story-lead">
              Founded in 2025 after helping family and friends get online, I saw how confusing domains, email, and hosting can be.
              My goal is to remove that friction for small businesses—clear guidance, lightweight builds, and automated deploys—so
              your site stays fast, secure, and easy to maintain.
            </p>
            <p>
              I use lightweight, standards-based tech and static hosting so sites stay fast, secure, and low-maintenance—without
              the agency price tag.
            </p>
          </div>
        </div>
      </section>

      <section className="mission-vision section-base section-divider section-divider--rl" id="mission-vision">
        <div className="container">
          <h2 className="section-title">Mission &amp; Vision</h2>
          <div className="mission-vision-grid">
            <article className="mv-card card">
              <span className="mv-icon" aria-hidden="true" />
              <h3 className="mv-title">Mission</h3>
              <p className="mv-text">Democratize web &amp; cloud tools with simple, affordable solutions.</p>
            </article>
            <article className="mv-card card">
              <span className="mv-icon" aria-hidden="true" />
              <h3 className="mv-title">Vision</h3>
              <p className="mv-text">Every small team confidently using modern tech—fast, secure, and low-maintenance.</p>
            </article>
          </div>
          <ul className="mv-chips" aria-label="Key outcomes">
            {['Fast', 'Secure', 'Easy to maintain'].map((item) => <li className="mv-chip" key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      <section id="about-me" className="about-me section-base section-divider section-divider--lr">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <p className="lead">
            Hi, I’m Francesco — founder of <strong>Ciccone Software Solutions</strong>.
            I help small businesses punch above their weight with smart, scalable web and cloud software.
          </p>
          <article className="about-me_content card">
            <h3>My Story</h3>
            <p>
              I started out building tools to streamline manual, repetitive workflows. After seeing how much time and cost this
              saved for small teams, I focused my work on creating lean systems that feel simple on the surface and solid underneath.
            </p>
            <h3>Why I Started Ciccone Software Solutions</h3>
            <p>
              Small businesses deserve the same quality and reliability as big enterprises — without the overhead. I focus on
              pragmatic architecture and clean execution so you get software that’s easy to use, easy to maintain, and ready to grow.
            </p>
            <h3>Who I Am</h3>
            <p>I’m a full-stack generalist who likes untangling tricky problems, crafting tidy code, and shipping software that makes everyday work easier.</p>
            <h3>Fun Fact</h3>
            <p>When I’m not coding, you’ll find me exploring coffee spots and sketching UI ideas — it keeps the creativity flowing.</p>
          </article>
        </div>
      </section>

      <section className="values section-base section-divider section-divider--rl" aria-labelledby="values-title">
        <div className="container">
          <h2 id="values-title" className="section-title">What I Stand For</h2>
          <p className="values__tagline">Three principles that guide every engagement.</p>
          <div className="values__grid" role="list" aria-label="Core values">
            {values.map(({ title, text, icon }) => (
              <article className="card value-card" role="listitem" key={title}>
                <div className="value-card__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" className="icon" aria-hidden="true">{icon}</svg>
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
          <h2 className="section-title">What I Offer</h2>
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
