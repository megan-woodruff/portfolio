import React from "react"
import '../components/styles.scss'

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Odd Jobs" />
    <div style={{minHeight: '20rem'}} className="contentWrapper">
      <h1>Odd Jobs</h1>
      <p>Connecting users with independent service providers in their community</p>
    </div>
  </Layout>
)

export default SecondPage
