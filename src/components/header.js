import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.scss"
import resume from '../images/WoodruffResume.pdf'

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="headerContentContainer">
        <div>
          <h2>
            <Link to="/" className="link">
              {siteTitle}
            </Link>
          </h2>
        </div>
        <div className="navBar">
          <Link to="/about" className="navLink">
            About
          </Link>
          <Link to="/" className="navLink">
            Work
          </Link>
          <a className="navLink" href={resume}>
            Resume
          </a>
        </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
