import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="notFound contentWrapper">
      <h1>Page not found</h1>
      <p>The page you requested does not exist.</p>
      <Link href="/">Return to the portfolio</Link>
    </section>
  )
}
