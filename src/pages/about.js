import React from "react"
import "../components/styles.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image/withIEPolyfill"
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
        <Img
          alt="Megan Woodruff, smiling on a bridge in Prague, Czech Republic"
          className="aboutImage"
          fluid={data.profile.childImageSharp.fluid}
        ></Img>
        <div className="aboutText">
          <h2>Thank you for visiting my portfolio!</h2>
          <p>
            I am a Seattle-based creative technologist passionate about
            cross-discipline collaboration in UX. Initially educated as a
            computer engineer, I have become fascinated by the ways that design
            and engineering can work together to build experiences that truly
            put users first.
          </p>
          <p>
            I am currently working as a UX Engineer at{" "}
            <a
              href="https://armoire.style"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "black",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Armoire Style
            </a>
            , a clothing rental subscription startup. In the evenings, I am
            working towards my Masters in Human-Centered Design and Engineering
            from the University of Washington. When I'm not working or
            schooling, I love playing volleyball, reading, and cooking.{" "}
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default About
