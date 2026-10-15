'use client'

import { useActionState } from 'react'

import { unlockPortfolio } from '@/app/access/actions'

export function PasswordGate({ title }: { title: string }) {
  const [state, formAction, pending] = useActionState(unlockPortfolio, {
    error: null as string | null,
  })

  return (
    <section className="passwordGate">
      <p className="eyebrow">Private case study</p>
      <h1>{title}</h1>
      <p>This project is private. Enter the password to read it.</p>
      <form action={formAction}>
        <label htmlFor="portfolio-password">Password</label>
        <input
          id="portfolio-password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
        />
        {state.error ? (
          <p className="passwordError" role="alert">
            {state.error}
          </p>
        ) : null}
        <button type="submit" disabled={pending}>
          {pending ? 'Checking…' : 'Continue'}
        </button>
      </form>
    </section>
  )
}
