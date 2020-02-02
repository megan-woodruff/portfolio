import React from "react"

import '../components/styles.scss'
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Solve by Every Learner" />
    <div style={{minHeight: '20rem'}} className="contentWrapper">
      <h1>Solve by Every Learner</h1>
      <p>Helping postsecondary educators learn collectively and connect with peers</p>
    </div>
  </Layout>
)

export default SecondPage
