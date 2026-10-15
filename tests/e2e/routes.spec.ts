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

test('navigation and resume links are stable', async ({ page }) => {
  await page.goto('/')

  await page.getByRole('link', { name: 'About' }).click()
  await expect(page).toHaveURL(/\/about$/)
  await expect(page.getByRole('link', { name: 'Resume' })).toHaveAttribute(
    'href',
    '/Megan-Woodruff-Resume.pdf'
  )
})

test('unknown routes render the custom 404', async ({ page }) => {
  const response = await page.goto('/missing-page')

  expect(response?.status()).toBe(404)
  await expect(
    page.getByRole('heading', { name: 'Page not found' })
  ).toBeVisible()
})
