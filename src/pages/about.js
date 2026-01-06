import React from 'react'
import '../components/styles.scss'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Img from 'gatsby-image/withIEPolyfill'
import { useStaticQuery, graphql } from 'gatsby'

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      profile: file(relativePath: { eq: "MeganWoodruff.jpeg" }) {
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
          alt="Megan Woodruff, smiling on an Alaskan cruise"
          className="aboutImage"
          fluid={data.profile.childImageSharp.fluid}
        ></Img>
        <div className="aboutText">
          <h2>
            <span className="emphasis">Thank you</span> for visiting my
            portfolio!
          </h2>
          <p>
            My name is Megan, and I'm a design technologist that enjoys a
            healthy mix of interaction design, prototyping, and front-end
            engineering.
          </p>
          <p>
            I'm currently working at{' '}
            <a
              href="https://nytimes.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none',
                fontWeight: 'bold',
              }}
            >
              The New York Times
            </a>
            , where I focus on creating native News prototypes that drive
            internal alignment and product strategy.
            <br />
            <br />
            When I'm not designing or coding, I love playing volleyball,
            knitting, doing yoga, reading, and spending time in the PNW outdoors
            with friends.{' '}
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default About
