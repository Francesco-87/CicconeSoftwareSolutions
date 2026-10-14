export function getCaseStudyLocale() {
  const firstPathSegment = window.location.pathname.split('/').filter(Boolean)[0]
  return firstPathSegment === 'de' ? 'de' : 'en'
}

export function getProjectsHref() {
  return `/${getCaseStudyLocale()}/projects`
}
