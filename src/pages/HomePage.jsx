const services = [
  'Domain & Email Setup',
  'Secure Static Hosting & SSL',
  'Brand & Logo Design',
  'Responsive Multi-Language Builds',
]

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
  return (
    <div className="home-page" id="home">
      <section className="hero section-divider section-divider--bowtie" id="hero">
        <div className="container">
          <h1>Build Your Digital Presence in Days, Not Weeks</h1>
          <p>I handle domains, hosting, design and deployment—so you focus on running your business.</p>
          <a href="#projects">View Portfolio</a>
        </div>
      </section>

      <section className="services section-divider section-divider--lr" id="what-i-do">
        <div className="container">
          <h2 className="services-title">What I Do</h2>
          <ul className="services-list">
            {services.map((service) => <li className="services-card card" key={service}>{service}</li>)}
          </ul>
        </div>
      </section>

      <section className="tech-stack section-divider section-divider--rl">
        <div className="container">
          <h2>My Tech Stack</h2>
          <div className="tech-items">
            {technologies.map(([name, image, className]) => (
              <div className="tech-item" key={name}>
                <img src={`/img/${image}`} alt={`${name} logo`} className={`tech-icon ${className || ''}`.trim()} />
                <span className="tech-label">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="statistics" id="statistics">
        <h2 className="statistics-title">By the Numbers</h2>
        <ul className="statistics-grid">
          {[
            ['25+', 'Projects'],
            ['2+', 'Years Experience'],
            ['5+', 'Countries'],
          ].map(([number, label]) => (
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
