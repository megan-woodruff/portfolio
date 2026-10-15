import type { ReactNode } from 'react'

import { NavBar } from './NavBar'

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <footer>
        <div className="footerContent">
          © {new Date().getFullYear()}. Made in Seattle.
          Built with{' '}
          <a className="link" href="https://nextjs.org">
            Next.js.
          </a>
        </div>
      </footer>
    </>
  )
}
