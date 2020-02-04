import React from "react"
import '../components/styles.scss'

import Layout from "../components/layout"
import SEO from "../components/seo"

const TechLearningSession = () => (
  <Layout>
    <SEO title="Equity-Centered Design" />
    <div style={{minHeight: '20rem'}} className="contentWrapper">
      <h1>Learning Session: Equity-Centered Technology Design</h1>
      <p>Helping education leaders at the Bill & Melinda Gates Foundation learn about the equitable design of edtech products</p>
    </div>
  </Layout>
)

export default TechLearningSession