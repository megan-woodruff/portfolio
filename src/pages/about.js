import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <h1>Thank you for visiting my portfolio!</h1>
    <p>I am a Seattle-based creative technologist who is passionate about the power of cross-discipline collaboration in UX.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default About
