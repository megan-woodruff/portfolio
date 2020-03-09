import React from "react"
import "../components/styles.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Rx Connect" />
    <div style={{ minHeight: "20rem" }} className="contentWrapper">
      <h1>Rx Connect</h1>
      <p>
        Helping primary care providers understand a patient's potential
        prescription drug costs
      </p>
    </div>
  </Layout>
)

export default SecondPage
