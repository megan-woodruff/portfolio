import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./navBar.scss"
import resume from '../images/WoodruffResume.pdf'

const NavBar = ({ siteTitle }) => (
  <header className="navBar">
    <div className="navBarContentContainer">
        <div>
          <h2>
            <Link to="/" className="link">
              {/* {siteTitle} */}
            </Link>
          </h2>
        </div>
        <div className="navBar">
          <Link to="/" className="navLink">
            Work
          </Link>
          <Link to="/about" className="navLink">
            About
          </Link>
          <a className="navLink" href={resume}>
            Resume
          </a>
        </div>
    </div>
  </header>
)

NavBar.propTypes = {
  siteTitle: PropTypes.string,
}

NavBar.defaultProps = {
  siteTitle: ``,
}

export default NavBar
