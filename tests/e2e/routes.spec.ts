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

test('home groups the case studies', async ({ page }) => {
  await page.goto('/')

  await expect(
    page.getByRole('heading', { name: 'Writing and shipping production code' })
  ).toBeVisible()
  await expect(
    page.getByRole('heading', {
      name: 'Building design tooling and infrastructure',
    })
  ).toBeVisible()
  await expect(
    page.getByRole('heading', {
      name: 'Prototyping to influence product strategy',
    })
  ).toBeVisible()
  await expect(
    page.getByRole('link', { name: 'View Armoire Mobile case study' })
  ).toBeVisible()
  await expect(
    page.getByRole('link', {
      name: 'Unlock New York Times Liquid Glass case study',
    })
  ).toBeVisible()
})

test('locked case studies stay behind the password', async ({ page }) => {
  await page.goto('/ebay-web-components', { waitUntil: 'domcontentloaded' })

  await expect(
    page.getByRole('heading', { name: 'eBay Web Components' })
  ).toBeVisible()
  await expect(page.getByLabel('Password')).toBeVisible()
  await expect(
    page.getByRole('heading', { name: 'Project Overview' })
  ).toHaveCount(0)

  await page.getByLabel('Password').fill('nope')
  await page.getByRole('button', { name: 'Continue' }).click()
  await expect(page.getByRole('alert')).toBeVisible()

  await page.getByLabel('Password').fill('hiremegan')
  await page.getByRole('button', { name: 'Continue' }).click()
  await expect(
    page.getByRole('heading', { name: 'Project Overview' })
  ).toBeVisible()
})

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
