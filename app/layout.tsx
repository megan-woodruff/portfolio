import type { Metadata } from 'next'
import Script from 'next/script'
import type { ReactNode } from 'react'

import { SiteShell } from '@/components/SiteShell'

import './globals.scss'

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.URL ??
  process.env.DEPLOY_PRIME_URL ??
  'http://localhost:3000'
const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Megan Woodruff',
    template: '%s | Megan Woodruff',
  },
  description: 'Design technologist based in Seattle, WA.',
  authors: [{ name: 'Megan Woodruff' }],
  openGraph: {
    type: 'website',
    siteName: 'Megan Woodruff',
    description: 'Design technologist based in Seattle, WA.',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@megan-woodruff',
  },
  manifest: '/manifest.webmanifest',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <SiteShell>{children}</SiteShell>
        {gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}');`}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  )
}
