import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectDisplay from '../components/projectDisplay'
import Splash from "../components/splash"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Splash />
    <ProjectDisplay />
  </Layout>
)

export default IndexPage
