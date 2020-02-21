import React from "react"
import '../components/styles.scss'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from 'gatsby-image/withIEPolyfill'
import { useStaticQuery, graphql } from "gatsby"


const About = () => { 
  const data = useStaticQuery(graphql`
    query {
      profile: file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="About" />
      <div className="contentWrapper aboutWrapper">
        <Img className="aboutImage" fluid={data.profile.childImageSharp.fluid}></Img>
        <div className="aboutText">
          <h2>Thank you for visiting my portfolio!</h2>
          <p>I am a Seattle-based creative technologist who is passionate about cross-discipline collaboration in UX. Initially educated as a computer engineer, I have become fascinated by the ways that design and engineering can work together to build experiences that truly put users first.</p> 
          <p>I am currently working as a Technical Product Manager at Intentional Futures, a strategy and UX consultancy. In the evenings, I am working towards my Masters in Human-Centered Design and Engineering from the University of Washington. When I'm not working or schooling, I love playing volleyball, reading, and cooking. </p>
        </div>
      </div>
    </Layout>
  )
}

export default About
