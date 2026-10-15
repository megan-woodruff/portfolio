import { createHash, timingSafeEqual } from 'node:crypto'

import { cookies } from 'next/headers'

const COOKIE_NAME = 'portfolio-access'

function digest(value: string) {
  return createHash('sha256').update(value).digest()
}

export function portfolioPassword() {
  return process.env.PORTFOLIO_PASSWORD ?? 'hiremegan'
}

export function passwordsMatch(input: string, expected: string) {
  return timingSafeEqual(digest(input), digest(expected))
}

function accessToken() {
  return digest(`unlocked:${portfolioPassword()}`).toString('hex')
}

export async function hasPortfolioAccess() {
  const cookieStore = await cookies()
  const value = cookieStore.get(COOKIE_NAME)?.value
  if (!value) return false

  const expected = accessToken()
  if (value.length !== expected.length) return false
  return timingSafeEqual(Buffer.from(value), Buffer.from(expected))
}

export const portfolioAccessCookie = {
  name: COOKIE_NAME,
  value: accessToken,
}
