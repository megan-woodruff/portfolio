'use server'

import { cookies } from 'next/headers'

import {
  passwordsMatch,
  portfolioAccessCookie,
  portfolioPassword,
} from '@/lib/access'

export async function unlockPortfolio(
  _previous: { error: string | null },
  formData: FormData
) {
  const password = String(formData.get('password') ?? '')

  if (!passwordsMatch(password, portfolioPassword())) {
    return { error: 'That password doesn’t match.' }
  }

  const cookieStore = await cookies()
  cookieStore.set(portfolioAccessCookie.name, portfolioAccessCookie.value(), {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
  })

  return { error: null }
}
