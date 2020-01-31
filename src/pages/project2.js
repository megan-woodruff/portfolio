import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Project 2" />
    <h1>Hi from project 2</h1>
    <p>Welcome to project 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
