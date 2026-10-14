import { expect, test } from '@playwright/test'

const caseStudies = [
  ['booking-admin-dashboard', 'Booking & Operations Admin Dashboard'],
  ['booking-and-registry-system', 'Booking & Registration System'],
  ['mobile-goal-tracker', 'Mobile Goal Tracker'],
  ['tripsentinel', 'TripSentinel'],
]

const germanCaseStudyTitles = {
  'booking-admin-dashboard': 'Buchungs- und Betriebs-Dashboard',
  'booking-and-registry-system': 'Buchungs- und Registrierungssystem',
  'mobile-goal-tracker': 'Mobiler Ziel-Tracker',
  tripsentinel: 'TripSentinel',
}

test('main navigation switches views and supports browser history', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveURL(/\/en$/)
  await expect(page.locator('main h1')).toHaveText('Build Your Digital Presence in Days, Not Weeks')

  const navigation = page.getByRole('navigation', { name: 'Main navigation' })
  await navigation.getByRole('link', { name: 'About' }).click()
  await expect(page).toHaveURL(/\/en\/about$/)
  await expect(page.locator('main h1')).toHaveText('Democratizing the Future of Technology for Every Business')

  await navigation.getByRole('link', { name: 'Services' }).click()
  await expect(page).toHaveURL(/\/en\/services$/)
  await expect(page.locator('main')).toContainText('Custom websites')

  await navigation.getByRole('link', { name: 'Projects' }).click()
  await expect(page).toHaveURL(/\/en\/projects$/)
  await expect(page.locator('main h1')).toHaveText('Projects')

  await navigation.getByRole('link', { name: 'Contact' }).click()
  await expect(page).toHaveURL(/\/en\/contact$/)
  const form = page.locator('main form')
  await expect(form).toBeVisible()
  await expect.poll(() => form.evaluate((element) => element.checkValidity())).toBe(false)
  await expect(page.locator('main')).toContainText('Formspree Privacy Policy')
  await expect(form.getByRole('link', { name: 'Privacy Policy', exact: true })).toHaveAttribute(
    'href',
    '/en/privacy-policy',
  )
  await expect(form.locator('input[type="email"]')).toHaveCount(1)
  await expect(form.locator('textarea')).toHaveCount(1)
  await expect(form.locator('input[type="checkbox"]')).toHaveAttribute('required', '')
  await expect(form.locator('input[type="checkbox"]')).toHaveAccessibleName(
    'I agree to the processing of my data for the purpose of this inquiry.',
  )
  await expect(form).toHaveAttribute('action', 'https://formspree.io/f/meolyver')
  await expect(form).toHaveAttribute('method', 'POST')

  await page.goBack()
  await expect(page).toHaveURL(/\/en\/projects$/)
  await expect(page.locator('main h1')).toHaveText('Projects')
  await page.goForward()
  await expect(page.locator('main form')).toBeVisible()
})

test('privacy policy is available in English and German on desktop and mobile', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto('/en/privacy-policy')

  await expect(page).toHaveTitle('Privacy Policy | Ciccone Software Solutions')
  await expect(page.locator('main')).toContainText('Norwegian sole proprietorship')
  await expect(page.locator('main')).toContainText('Azure Static Web Apps')
  await expect(page.locator('main')).toContainText('Application Insights')
  await expect(page.locator('main')).toContainText('Google Fonts')
  await expect(page.locator('main')).toContainText('Formspree CAPTCHA')
  await expect(page.locator('main')).toContainText('90 days')
  await expect(page.locator('main')).toContainText('does not mean that Formspree permanently deletes')
  await expect(page.locator('main').getByRole('link', { name: 'Formspree security', exact: true })).toHaveAttribute(
    'href',
    'https://formspree.io/security/',
  )
  await expect(page.locator('footer').getByRole('link', { name: 'Privacy Policy' })).toHaveAttribute(
    'href',
    '/en/privacy-policy',
  )
  await expect(page.locator('footer .footer-links')).toHaveCSS('flex-direction', 'column')
  await expect(page.locator('footer .footer-links')).toHaveCSS('align-items', 'center')
  await expect(page.locator('main').getByRole('link', { name: 'Contact form' })).toHaveAttribute(
    'href',
    '/en/contact',
  )

  await page.setViewportSize({ width: 375, height: 812 })
  await expect.poll(() => page.locator('main').evaluate((element) => element.scrollWidth <= element.clientWidth)).toBe(true)

  await page.goto('/de/privacy-policy')
  await expect(page.locator('html')).toHaveAttribute('lang', 'de')
  await expect(page).toHaveTitle('Datenschutzerklärung | Ciccone Software Solutions')
  await expect(page.locator('main')).toContainText('norwegisches Einzelunternehmen')
  await expect(page.locator('main')).toContainText('Google Fonts')
  await expect(page.locator('main')).toContainText('Formspree-CAPTCHA')
  await expect(page.locator('main')).toContainText('90 Tage')
  await expect(page.locator('main')).toContainText('nicht, dass Formspree die Einsendungen nach 30 Tagen endgültig löscht')
  await expect(page.locator('footer').getByRole('link', { name: 'Datenschutzerklärung' })).toHaveAttribute(
    'href',
    '/de/privacy-policy',
  )
  await expect.poll(() => page.locator('main').evaluate((element) => element.scrollWidth <= element.clientWidth)).toBe(true)
})

test('contact form stays centered and readable on wide screens', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto('/en/contact')

  const section = page.locator('main .contact-section')
  const sectionBounds = await section.boundingBox()
  const form = page.locator('main form')
  const bounds = await form.boundingBox()

  expect(sectionBounds).not.toBeNull()
  expect(sectionBounds.width).toBeLessThanOrEqual(1200)
  expect(Math.abs(sectionBounds.x + sectionBounds.width / 2 - 720)).toBeLessThanOrEqual(1)
  expect(bounds).not.toBeNull()
  expect(bounds.width).toBeLessThanOrEqual(720)
  expect(Math.abs(bounds.x + bounds.width / 2 - 720)).toBeLessThanOrEqual(1)
})

test('legacy hash links redirect to the equivalent route', async ({ page }) => {
  await page.goto('/#about')

  await expect(page).toHaveURL(/\/en\/about$/)
  await expect(page.locator('main h1')).toHaveText('Democratizing the Future of Technology for Every Business')
})

test('locale-prefixed pages load directly and after refresh', async ({ page }) => {
  await page.goto('/en/services')
  await expect(page.locator('main')).toContainText('Custom websites')

  await page.reload()
  await expect(page).toHaveURL(/\/en\/services$/)
  await expect(page.locator('main')).toContainText('Custom websites')
})

test('browser language selects German before rendering and creates no browser storage', async ({ browser }) => {
  const preferences = [
    { languages: ['de'], expected: 'de' },
    { languages: ['de-DE'], expected: 'de' },
    { languages: ['de-AT'], expected: 'de' },
    { languages: ['de-CH'], expected: 'de' },
    { languages: ['en-US'], expected: 'en' },
    { languages: ['fr-FR'], expected: 'en' },
    { languages: ['fr-FR', 'de-DE'], expected: 'en' },
    { languages: [], language: 'de-DE', expected: 'de' },
  ]

  for (const { languages, language = languages[0], expected } of preferences) {
    const context = await browser.newContext()
    await context.addInitScript(({ preferredLanguages, preferredLanguage }) => {
      Object.defineProperty(navigator, 'languages', {
        configurable: true,
        get: () => preferredLanguages,
      })
      Object.defineProperty(navigator, 'language', {
        configurable: true,
        get: () => preferredLanguage,
      })
    }, { preferredLanguages: languages, preferredLanguage: language })

    const page = await context.newPage()
    await page.goto('/')
    await expect(page).toHaveURL(new RegExp(`/${expected}$`))
    await expect(page.locator('html')).toHaveAttribute('lang', expected)
    await expect(page.locator('main h1')).toBeVisible()
    await expect.poll(() => page.evaluate(() => ({
      cookies: document.cookie,
      localStorage: localStorage.length,
      sessionStorage: sessionStorage.length,
    }))).toEqual({ cookies: '', localStorage: 0, sessionStorage: 0 })
    await context.close()
  }
})

test('German browser preference selects the localized case study', async ({ browser }) => {
  const context = await browser.newContext()
  await context.addInitScript(() => {
    Object.defineProperty(navigator, 'languages', { configurable: true, get: () => ['de-CH'] })
    Object.defineProperty(navigator, 'language', { configurable: true, get: () => 'de-CH' })
  })

  const page = await context.newPage()
  await page.goto('/projects/tripsentinel/')
  await expect(page).toHaveURL(/\/de\/projects\/tripsentinel$/)
  await expect(page.locator('html')).toHaveAttribute('lang', 'de')
  await expect(page.locator('main h1')).toHaveText('TripSentinel')
  await expect(page.locator('main')).toContainText('Überblick')
  await context.close()
})

test('German About page is translated and switches back to English', async ({ page }) => {
  await page.goto('/en/about')
  const languageSelector = page.getByRole('combobox', { name: 'Select language' })
  await expect(languageSelector).toBeEnabled()
  await languageSelector.selectOption('de')

  await expect(page).toHaveURL(/\/de\/about$/)
  await expect(page.locator('html')).toHaveAttribute('lang', 'de')
  await expect(page).toHaveTitle('Über mich | Ciccone Software Solutions')
  await expect(page.getByRole('combobox', { name: 'Sprache auswählen' })).toBeEnabled()
  await expect(page.locator('main h1')).toHaveText('Die Zukunft der Technologie für jedes Unternehmen zugänglich machen')
  await expect(page.locator('main')).toContainText('Unsere Geschichte')
  await expect(page.locator('main')).toContainText('Wofür ich stehe')
  await expect(page.locator('main')).toContainText('Laufende Wartung')

  await page.locator('footer').getByRole('link', { name: 'Kontakt' }).click()
  await expect(page).toHaveURL(/\/de\/contact$/)
  await expect(page.locator('main')).toContainText('Ihre E-Mail-Adresse')
  await page.locator('footer').getByRole('link', { name: 'Datenschutzerklärung' }).click()
  await expect(page).toHaveURL(/\/de\/privacy-policy$/)
  await expect(page.locator('main h1')).toHaveText('Datenschutzerklärung')
  await page.getByRole('combobox', { name: 'Sprache auswählen' }).selectOption('en')
  await expect(page).toHaveURL(/\/en\/privacy-policy$/)
  await page.locator('footer').getByRole('link', { name: 'Contact' }).click()
  await expect(page).toHaveURL(/\/en\/contact$/)
  await expect(page.locator('main')).toContainText('Your email')
  await page.getByRole('navigation', { name: 'Main navigation' }).getByRole('link', { name: 'About' }).click()
  await expect(page).toHaveURL(/\/en\/about$/)

  await expect(page.locator('main h1')).toHaveText('Democratizing the Future of Technology for Every Business')
  await expect(page.locator('html')).toHaveAttribute('lang', 'en')
})

test('German routes translate every main page and preserve the page when switching languages', async ({ page }) => {
  await page.goto('/de')
  await expect(page.locator('html')).toHaveAttribute('lang', 'de')
  await expect(page.locator('main h1')).toHaveText('Ihr digitaler Auftritt – in Tagen statt Wochen')
  await expect(page.locator('main')).toContainText('Was ich mache')

  await page.goto('/de/services')
  await expect(page.locator('main h1')).toHaveText('Leistungen')
  await expect(page.locator('main')).toContainText('Individuelle Websites')

  await page.goto('/de/projects')
  await expect(page.locator('main h1')).toHaveText('Projekte')
  await expect(page.locator('main')).toContainText('Mobiler Ziel-Tracker')

  await page.goto('/de/contact')
  await expect(page.locator('main')).toContainText('Ihre E-Mail-Adresse')
  await expect(page.locator('main')).toContainText('Datenschutzerklärung von Formspree')
  await expect(page.getByRole('button', { name: 'Senden' })).toBeVisible()

  await page.getByRole('combobox', { name: 'Sprache auswählen' }).selectOption('en')
  await expect(page).toHaveURL(/\/en\/contact$/)
  await expect(page.locator('main')).toContainText('Your email')
})

test('German case-study route translates content and keeps its project when switching languages', async ({ page }) => {
  await page.goto('/de/projects/booking-admin-dashboard')
  await expect(page.locator('html')).toHaveAttribute('lang', 'de')
  await expect(page.locator('main h1')).toHaveText('Buchungs- und Betriebs-Dashboard')
  await expect(page.locator('main')).toContainText('Überblick')
  await expect(page.locator('main')).not.toContainText('The Booking & Operations Admin Dashboard')
  await expect(page.locator('.case-study-wrapper')).toHaveCSS('max-width', '1200px')
  await expect(page.locator('.case-meta')).toHaveCSS('flex-direction', 'column')

  await page.getByRole('combobox', { name: 'Sprache auswählen' }).selectOption('en')
  await expect(page).toHaveURL(/\/en\/projects\/booking-admin-dashboard$/)
  await expect(page.locator('main h1')).toHaveText('Booking & Operations Admin Dashboard')
  await expect(page.locator('main')).toContainText('Overview')
})

for (const [slug] of caseStudies) {
  test(`${slug} has a German localized route`, async ({ page }) => {
    await page.goto(`/de/projects/${slug}`)
    await expect(page.locator('html')).toHaveAttribute('lang', 'de')
    await expect(page.locator('main h1')).toHaveText(germanCaseStudyTitles[slug])
    await expect(page.locator('main')).toContainText('Überblick')
    if (slug === 'tripsentinel') {
      await expect(page.locator('main')).not.toContainText(
        "This keeps the system focused on confirming a user's safe return",
      )
    }
  })
}

test('legacy case-study URL can switch to its German localized route', async ({ page }) => {
  await page.goto('/projects/tripsentinel/')
  await page.getByRole('combobox', { name: 'Select language' }).selectOption('de')

  await expect(page).toHaveURL(/\/de\/projects\/tripsentinel$/)
  await expect(page.locator('main')).toContainText('Überblick')
  await expect(page.getByRole('link', { name: '← Alle Projekte' })).toHaveAttribute('href', '/de/projects')
})

for (const [slug, heading] of caseStudies) {
  test(`${slug} loads directly with metadata and working images`, async ({ page }) => {
    await page.goto(`/projects/${slug}/`)

    await expect(page.locator('main h1')).toHaveText(heading)
    await expect(page.locator('header')).toBeVisible()
    await expect(page.locator('footer')).toBeVisible()
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      'href',
      `https://www.cicconesoftware.com/projects/${slug}/`,
    )
    await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
      'content',
      `https://www.cicconesoftware.com/projects/${slug}/`,
    )

    await page.locator('main img').evaluateAll((images) => {
      images.forEach((image) => {
        image.loading = 'eager'
      })
    })
    await expect.poll(
      () => page.locator('main img').evaluateAll((images) => (
        images.every((image) => image.complete && image.naturalWidth > 0)
      )),
    ).toBe(true)
  })
}

test('case-study back link returns to the projects view', async ({ page }) => {
  await page.goto('/projects/tripsentinel/')
  await page.getByRole('link', { name: 'All projects' }).click()

  await expect(page).toHaveURL(/\/en\/projects$/)
  await expect(page.locator('main h1')).toHaveText('Projects')
})
