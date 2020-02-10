import React from "react"
import '../components/styles.scss'
import './projectPage.scss'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from 'gatsby-image/withIEPolyfill'

const ProjectPage = ({ title, description, location, imageSource }) => (
  <Layout>
    <SEO title={title} />
   {imageSource && <Img className="headerImage" objectFit="cover" objectPosition="top center" fluid={imageSource} alt="Placeholder alt text for now" />}
    <div className="contentWrapper">
      <h1 className="title">{title}</h1>
      <h2>{location}</h2>
      <p>{description}</p>
    </div>
  </Layout>
)

export default ProjectPage
