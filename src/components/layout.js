import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import NavBar from "./navBar"
import "./layout.scss"

const Layout = ({ children, projectPage }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <NavBar
        siteTitle={data.site.siteMetadata.title}
        projectPage={projectPage}
      />
      <div>
        <main style={{ backgroundColor: projectPage && "white" }}>
          {children}
        </main>
        <footer>
          <div className="footerContent">
            © {new Date().getFullYear()}. Made with ☕ & ❤️ in Seattle. Built
            with
            {` `}
            <a className="link" href="https://www.gatsbyjs.org">
              Gatsby.
            </a>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
