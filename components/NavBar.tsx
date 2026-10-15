import Link from 'next/link'

export function NavBar() {
  return (
    <header className="navBar">
      <div className="navBarContentContainer">
        <h2>
          <Link href="/" className="link">
            Megan Woodruff
          </Link>
        </h2>
        <nav className="navBarButtons" aria-label="Primary navigation">
          <Link href="/" className="navLink">
            Work
          </Link>
          <Link href="/about" className="navLink">
            About
          </Link>
          <a className="navLink" href="/Megan-Woodruff-Resume.pdf">
            Resume
          </a>
        </nav>
      </div>
    </header>
  )
}
