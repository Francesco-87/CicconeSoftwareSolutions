import { useTranslation } from 'react-i18next'
import { Link, useParams } from 'react-router-dom'
import projects from '../data/projects.json'

export default function ProjectsPage() {
  const { t } = useTranslation()
  const { locale } = useParams()
  const visibleProjects = projects.filter((project) => (
    (project.caseStudy && project.slug?.trim()) || (!project.caseStudy && project.url?.trim())
  ))

  return (
    <div className="projects-page">
      <section className="projects-section section-base section-divider" id="projects-section">
        <div className="container">
          <h1>{t('projects.title')}</h1>
          <p className="lead">{t('projects.lead')}</p>
          <div className="cards-grid projects-grid">
            {visibleProjects.map((project) => {
              const projectText = t(`projects.items.${project.slug || project.title}`, {
                returnObjects: true,
                defaultValue: project,
              })
              const tags = [...(projectText.industry || project.industry || []), ...(project.tech || [])]

              const card = (
                <>
                  <figure className="project-thumb">
                    <img
                      src={project.thumb1x || project.thumb || ''}
                      srcSet={project.thumb1x && project.thumb2x ? `${project.thumb1x} 1x, ${project.thumb2x} 2x` : undefined}
                      alt={projectText.title || t('projects.projectAlt')}
                      width="200"
                      loading="lazy"
                      decoding="async"
                    />
                  </figure>
                  <div className="project-body">
                    <h2 className="project-title">{projectText.title || t('projects.untitled')}</h2>
                    <p className="project-summary">{projectText.summary || ''}</p>
                    <ul className="project-meta">
                      {tags.map((tag) => <li className="badge" key={tag}>{tag}</li>)}
                    </ul>
                    {projectText.outcome && <div className="project-outcome">{projectText.outcome}</div>}
                    <span className="project-cta">
                      {t(project.caseStudy ? 'common.readCaseStudy' : 'common.visitSite')}
                    </span>
                  </div>
                </>
              )

              return project.caseStudy
                ? (
                    <Link
                      className="card project-card"
                      to={`/${locale}/projects/${encodeURIComponent(project.slug.trim())}`}
                      key={project.slug}
                    >
                      {card}
                    </Link>
                  )
                : (
                    <a
                      className="card project-card"
                      href={project.url}
                      key={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {card}
                    </a>
                  )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
