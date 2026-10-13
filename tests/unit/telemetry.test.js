import assert from 'node:assert/strict'
import test from 'node:test'
import {
  createApplicationInsightsConfig,
  createPrivacyTelemetryInitializer,
  createTelemetryController,
  sanitizePageUrl,
} from '../../src/telemetry.js'

function createFakeClient() {
  return {
    initializers: [],
    pageViews: [],
    loadCount: 0,
    addTelemetryInitializer(initializer) {
      this.initializers.push(initializer)
    },
    loadAppInsights() {
      this.loadCount += 1
    },
    trackPageView(pageView) {
      this.pageViews.push(pageView)
    },
  }
}

test('missing connection string skips initialization', () => {
  let createCount = 0
  const telemetry = createTelemetryController({
    createClient: () => {
      createCount += 1
      return createFakeClient()
    },
  })

  assert.equal(telemetry.initialize(' '), null)
  assert.equal(createCount, 0)
})

test('initializes once with privacy-focused SDK configuration', () => {
  const client = createFakeClient()
  let createCount = 0
  let config
  const telemetry = createTelemetryController({
    createClient: (sdkConfig) => {
      createCount += 1
      config = sdkConfig
      return client
    },
  })

  assert.equal(telemetry.initialize('InstrumentationKey=test'), client)
  assert.equal(telemetry.initialize('InstrumentationKey=test'), client)
  assert.equal(createCount, 1)
  assert.equal(client.loadCount, 1)
  assert.equal(client.initializers.length, 1)
  assert.deepEqual(config, createApplicationInsightsConfig('InstrumentationKey=test'))
  assert.equal(config.disableCookiesUsage, true)
  assert.equal(config.isStorageUseDisabled, true)
  assert.equal(config.enableSessionStorageBuffer, false)
  assert.equal(config.disableAjaxTracking, true)
  assert.equal(config.disableFetchTracking, true)
  assert.equal(config.disableExceptionTracking, true)
  assert.equal(config.enableAutoRouteTracking, false)
  assert.equal(config.enableAjaxPerfTracking, false)
  assert.equal(config.enableRequestHeaderTracking, false)
  assert.equal(config.enableResponseHeaderTracking, false)
  assert.equal(config.enablePerfMgr, false)
})

test('tracks route page views once and excludes query strings and fragments', () => {
  const client = createFakeClient()
  const telemetry = createTelemetryController({
    createClient: () => client,
    getPageUrl: () => 'https://www.cicconesoftware.com/?email=private#contact',
  })
  telemetry.initialize('InstrumentationKey=test')

  assert.equal(telemetry.trackPageView('main:home', 'Home'), true)
  assert.equal(telemetry.trackPageView('main:home', 'Home'), false)
  assert.equal(telemetry.trackPageView('main:contact', 'Contact'), true)
  assert.equal(client.pageViews.length, 2)
  assert.deepEqual(client.pageViews[0], {
    name: 'Home',
    uri: 'https://www.cicconesoftware.com/',
  })
  assert.deepEqual(client.pageViews[1], {
    name: 'Contact',
    uri: 'https://www.cicconesoftware.com/',
  })
  assert.equal(JSON.stringify(client.pageViews).includes('email=private'), false)
  assert.equal(JSON.stringify(client.pageViews).includes('#contact'), false)
})

test('telemetry initializer permits only clean page views and removes identifiers', () => {
  const initializer = createPrivacyTelemetryInitializer()
  const pageView = {
    baseType: 'PageviewData',
    baseData: {
      name: 'Contact',
      uri: 'https://example.com/contact?email=private#form',
      refUri: 'https://example.com/?token=private',
      id: 'page-view-id',
      properties: { email: 'private' },
      measurements: { value: 1 },
      duration: '00:00:01.000',
    },
    tags: {
      'ai.user.id': 'user-id',
      'ai.session.id': 'session-id',
      'ai.device.id': 'device-id',
      'ai.device.browser': 'test-browser',
      'ai.location.ip': '127.0.0.1',
      'ai.location.country': 'test-country',
      'ai.operation.id': 'operation-id',
    },
    ext: {
      user: { id: 'user-id' },
      device: { id: 'device-id' },
      session: { id: 'session-id' },
    },
  }

  assert.equal(initializer(pageView), true)
  assert.equal(pageView.baseData.name, 'Contact')
  assert.equal(pageView.baseData.uri, 'https://example.com/contact')
  assert.equal('refUri' in pageView.baseData, false)
  assert.equal('id' in pageView.baseData, false)
  assert.equal('properties' in pageView.baseData, false)
  assert.equal('duration' in pageView.baseData, false)
  assert.deepEqual(pageView.tags, {})
  assert.deepEqual(pageView.ext, {})
  assert.equal(initializer({ baseType: 'RemoteDependencyData' }), false)
  assert.equal(initializer({ baseType: 'PageViewPerformanceData' }), false)
})

test('sanitizer removes query parameters and fragments from page URLs', () => {
  assert.equal(
    sanitizePageUrl('/projects/tripsentinel/?source=email#details', 'https://example.com/'),
    'https://example.com/projects/tripsentinel/',
  )
  assert.equal(sanitizePageUrl('http://[invalid'), null)
  assert.equal(sanitizePageUrl('javascript:alert(1)'), null)
})

test('SDK initialization failures do not escape into application startup', () => {
  const originalWarn = console.warn
  console.warn = () => {}
  try {
    const telemetry = createTelemetryController({
      createClient: () => {
        throw new Error('SDK failure')
      },
    })
    assert.doesNotThrow(() => telemetry.initialize('InstrumentationKey=test'))
    assert.equal(telemetry.initialize('InstrumentationKey=test'), null)
  } finally {
    console.warn = originalWarn
  }
})
