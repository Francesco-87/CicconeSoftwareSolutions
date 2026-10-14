export function detectPreferredLanguage(languages, language) {
  const preferredLanguage = (Array.isArray(languages) ? languages : [])
    .find((value) => typeof value === 'string' && value.trim()) || language

  return typeof preferredLanguage === 'string' && /^de(?:-|$)/i.test(preferredLanguage.trim())
    ? 'de'
    : 'en'
}
