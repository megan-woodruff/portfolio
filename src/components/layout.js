import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.scss"
import "./wrapper.scss"

const Layout = ({ children }) => {
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
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="contentWrapper">
        <main>{children}</main>
        <footer style={{fontSize: '1em', textAlign: 'right'}}>
          © {new Date().getFullYear()}. Made with  ☕ & ❤️ in Seattle. Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby.</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
