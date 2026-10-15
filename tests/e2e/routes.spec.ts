import { expect, test } from '@playwright/test'

const routes = [
  { path: '/', heading: "Hello! I'm Megan." },
  { path: '/about', heading: /Thank you.*visiting my portfolio/ },
  { path: '/armoire_mobile', heading: 'Armoire Mobile' },
]

for (const route of routes) {
  test(`${route.path} renders without browser errors`, async ({ page }) => {
    const errors: string[] = []
    page.on('console', (message) => {
      if (message.type() === 'error') errors.push(message.text())
    })
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto(route.path, { waitUntil: 'domcontentloaded' })

    await expect(
      page.getByRole('heading', { name: route.heading }).first()
    ).toBeVisible()
    await expect(page.getByRole('navigation')).toBeVisible()
    expect(errors).toEqual([])
  })
}

test('navigation links are stable', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByRole('link', { name: 'Resume' })).toHaveCount(0)
  await page.getByRole('link', { name: 'About' }).click()
  await expect(page).toHaveURL(/\/about$/)
})

test('case study sections progressively disclose detail', async ({ page }) => {
  await page.goto('/armoire_mobile', { waitUntil: 'domcontentloaded' })

  const context = page
    .locator('details')
    .filter({ hasText: 'Context and Requirements' })
  const launch = page
    .locator('details')
    .filter({ hasText: 'Launch and Reception' })

  await expect(context).not.toHaveAttribute('open', '')
  await expect(launch).toHaveAttribute('open', '')

  await page.getByRole('link', { name: 'strong user demand' }).click()
  await expect(context).toHaveAttribute('open', '')
  await expect(page).toHaveURL(/#customerDemand$/)
})

test('unknown routes render the custom 404', async ({ page }) => {
  const response = await page.goto('/missing-page')

  expect(response?.status()).toBe(404)
  await expect(
    page.getByRole('heading', { name: 'Page not found' })
  ).toBeVisible()
})
