'use client'

import { type ReactNode, useEffect, useRef } from 'react'

type CaseStudySectionProps = {
  title: string
  children: ReactNode
  defaultOpen?: boolean
}

export function CaseStudySection({
  title,
  children,
  defaultOpen = false,
}: CaseStudySectionProps) {
  const detailsRef = useRef<HTMLDetailsElement>(null)

  useEffect(() => {
    const details = detailsRef.current
    if (!details) return

    details.open = defaultOpen

    const revealHashTarget = () => {
      const hash = decodeURIComponent(window.location.hash.slice(1))
      if (!hash) return

      const target = document.getElementById(hash)
      if (!target || !details.contains(target)) return

      details.open = true
      requestAnimationFrame(() => target.scrollIntoView({ block: 'start' }))
    }

    revealHashTarget()
    window.addEventListener('hashchange', revealHashTarget)
    return () => window.removeEventListener('hashchange', revealHashTarget)
  }, [defaultOpen])

  return (
    <details
      ref={detailsRef}
      className="caseStudySection"
      open={defaultOpen || undefined}>
      <summary>
        <h2>{title}</h2>
      </summary>
      <div className="caseStudySectionContent">{children}</div>
    </details>
  )
}
