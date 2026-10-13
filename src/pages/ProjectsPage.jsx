import projects from '../data/projects.json'

export default function ProjectsPage() {
  const visibleProjects = projects.filter((project) => (
    (project.caseStudy && project.slug?.trim()) || (!project.caseStudy && project.url?.trim())
  ))

  return (
    <div className="projects-page">
      <section className="projects-section section-base section-divider" id="projects-section">
        <div className="container">
          <h1>Projects</h1>
          <p className="lead">Selected client work with outcomes</p>
          <div className="cards-grid projects-grid">
            {visibleProjects.map((project) => {
              const isCaseStudy = Boolean(project.caseStudy)
              const href = isCaseStudy
                ? `${import.meta.env.BASE_URL}projects/${encodeURIComponent(project.slug.trim())}/`
                : project.url
              const tags = [...(project.industry || []), ...(project.tech || [])]

              return (
                <a
                  className="card project-card"
                  href={href}
                  key={project.slug || project.url}
                  target={isCaseStudy ? undefined : '_blank'}
                  rel={isCaseStudy ? undefined : 'noopener noreferrer'}
                >
                  <figure className="project-thumb">
                    <img
                      src={project.thumb1x || project.thumb || ''}
                      srcSet={project.thumb1x && project.thumb2x ? `${project.thumb1x} 1x, ${project.thumb2x} 2x` : undefined}
                      alt={project.title || 'Project'}
                      width="200"
                      loading="lazy"
                      decoding="async"
                    />
                  </figure>
                  <div className="project-body">
                    <h2 className="project-title">{project.title || 'Untitled'}</h2>
                    <p className="project-summary">{project.summary || ''}</p>
                    <ul className="project-meta">
                      {tags.map((tag) => <li className="badge" key={tag}>{tag}</li>)}
                    </ul>
                    {project.outcome && <div className="project-outcome">{project.outcome}</div>}
                    <span className="project-cta">{isCaseStudy ? 'Read case study →' : 'Visit site →'}</span>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
