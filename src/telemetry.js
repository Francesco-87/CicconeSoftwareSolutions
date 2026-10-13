import { ApplicationInsights } from '@microsoft/applicationinsights-web'

const identifyingTagPrefixes = [
  'ai.user.',
  'ai.session.',
  'ai.device.',
  'ai.location.',
  'ai.operation.',
]

export function createApplicationInsightsConfig(connectionString) {
  return {
    connectionString,
    disableCookiesUsage: true,
    isStorageUseDisabled: true,
    enableSessionStorageBuffer: false,
    disableDataLossAnalysis: true,
    disableAjaxTracking: true,
    disableFetchTracking: true,
    disableExceptionTracking: true,
    enableUnhandledPromiseRejectionTracking: false,
    enableAutoRouteTracking: false,
    enableAjaxPerfTracking: false,
    enableRequestHeaderTracking: false,
    enableResponseHeaderTracking: false,
    enablePerfMgr: false,
    autoTrackPageVisitTime: false,
  }
}

export function sanitizePageUrl(value, baseUrl = 'https://localhost/') {
  try {
    const url = new URL(value, baseUrl)
    if (!['http:', 'https:'].includes(url.protocol)) return null
    return `${url.origin}${url.pathname}`
  } catch {
    return null
  }
}

export function createPrivacyTelemetryInitializer() {
  return (item) => {
    if (item.baseType?.toLowerCase() !== 'pageviewdata') return false

    const baseData = item.baseData
    if (baseData) {
      if (baseData.uri) baseData.uri = sanitizePageUrl(baseData.uri)
      delete baseData.name
      delete baseData.refUri
      delete baseData.id
      delete baseData.properties
      delete baseData.measurements
      delete baseData.duration
    }

    if (item.tags) {
      for (const tag of Object.keys(item.tags)) {
        if (identifyingTagPrefixes.some((prefix) => tag.startsWith(prefix))) {
          delete item.tags[tag]
        }
      }
    }
    if (item.ext) {
      item.ext = {}
    }

    return true
  }
}

export function createTelemetryController({
  createClient = (config) => new ApplicationInsights({ config }),
  getPageUrl = () => globalThis.location?.href,
} = {}) {
  let client = null
  let initializationAttempted = false
  let lastPageViewKey = null

  function initialize(connectionString) {
    if (!connectionString?.trim()) return null
    if (client) return client
    if (initializationAttempted) return null

    initializationAttempted = true
    try {
      const instance = createClient(createApplicationInsightsConfig(connectionString))
      instance.addTelemetryInitializer(createPrivacyTelemetryInitializer())
      instance.loadAppInsights()
      client = instance
      return client
    } catch {
      console.warn('Application Insights could not be initialized; telemetry is disabled.')
      return null
    }
  }

  function trackPageView(routeKey) {
    if (!client || !routeKey || routeKey === lastPageViewKey) return false

    try {
      const uri = sanitizePageUrl(getPageUrl())
      if (!uri) return false
      client.trackPageView({ uri })
      lastPageViewKey = routeKey
      return true
    } catch {
      console.warn('Application Insights could not track a page view.')
      return false
    }
  }

  return { initialize, trackPageView }
}

const telemetry = createTelemetryController()

export const initializeTelemetry = telemetry.initialize
export const trackPageView = telemetry.trackPageView
