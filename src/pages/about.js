import React from 'react'
import '../components/styles.scss'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Img from 'gatsby-image/withIEPolyfill'
import { useStaticQuery, graphql } from 'gatsby'

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
          <h2>
            <span className="emphasis">Thank you</span> for visiting my
            portfolio!
          </h2>
          <p>
            I'm a design technologist with a focus on front-end engineering, prototyping, and systems design. I love working on cross-discipline teams to solve intricate problems.
          </p>
          <p>
            My technical experience is rooted in front-end web development and cross-platform native development, with a specific fondness for React and, more recently, React Native. I'm known for ramping up to projects <em>fast</em> and tackling ambiguity with a steady, analytical approach.
          </p>
          <p>
            I'm currently a Design Technology Lead at{" "}
            <a
              href="https://ebay.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none',
                fontWeight: 'bold',
              }}
            >
              eBay
            </a>. When I'm not working, I love playing volleyball, reading, doing yoga, cooking, and spending time with my friends.{" "}
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default About
