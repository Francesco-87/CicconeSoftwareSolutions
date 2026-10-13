import { expect, test } from '@playwright/test'

const caseStudies = [
  ['booking-admin-dashboard', 'Booking & Operations Admin Dashboard'],
  ['booking-and-registry-system', 'Booking & Registration System'],
  ['mobile-goal-tracker', 'Mobile Goal Tracker'],
  ['tripsentinel', 'TripSentinel'],
]

test('main navigation switches views and supports browser history', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('main h1')).toHaveText('Build Your Digital Presence in Days, Not Weeks')

  const navigation = page.getByRole('navigation', { name: 'Main navigation' })
  await navigation.getByRole('link', { name: 'About' }).click()
  await expect(page).toHaveURL(/#about$/)
  await expect(page.locator('main h1')).toHaveText('Democratizing the Future of Technology for Every Business')

  await navigation.getByRole('link', { name: 'Services' }).click()
  await expect(page).toHaveURL(/#services$/)
  await expect(page.locator('main')).toContainText('Custom websites')

  await navigation.getByRole('link', { name: 'Projects' }).click()
  await expect(page).toHaveURL(/#projects$/)
  await expect(page.locator('main h1')).toHaveText('Projects')

  await navigation.getByRole('link', { name: 'Contact' }).click()
  await expect(page).toHaveURL(/#contact$/)
  const form = page.locator('main form')
  await expect(form).toBeVisible()
  await expect.poll(() => form.evaluate((element) => element.checkValidity())).toBe(false)
  await expect(page.locator('main')).toContainText('Formspree Privacy Policy')

  await page.goBack()
  await expect(page).toHaveURL(/#projects$/)
  await expect(page.locator('main h1')).toHaveText('Projects')
  await page.goForward()
  await expect(page.locator('main form')).toBeVisible()
})

test('contact form stays centered and readable on wide screens', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto('/#contact')

  const form = page.locator('main form')
  const bounds = await form.boundingBox()

  expect(bounds).not.toBeNull()
  expect(bounds.width).toBeLessThanOrEqual(720)
  expect(Math.abs(bounds.x + bounds.width / 2 - 720)).toBeLessThanOrEqual(1)
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

  await expect(page).toHaveURL(/\/#projects$/)
  await expect(page.locator('main h1')).toHaveText('Projects')
})
