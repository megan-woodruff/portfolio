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
            I pride myself on being a user-driven design technologist with a
            knack for systems-thinking.
          </p>
          <p>
            With education in both Computer Engineering and Human-Centered
            Design, I can speak researcher, designer, and developer – and I
            thrive most when I can use this perspective to improve team
            collaboration and produce truly outstanding experiences.
          </p>
          <p>
            On the technical side, I am well-versed in the modern web and have a
            specific fondness for React (and more recently, React Native). I am
            known for ramping up to projects <i>fast</i> and tackling ambiguity
            with a steady, analytical approach.
          </p>
          <p>
            As might already be obvious, I like variety in my work. But my sweet
            spot is coding interactive prototypes and proof-of-concepts that can
            be used to refine and test mid-process ideas and help them reach
            their fullest potential.
          </p>
          <p>
            I am currently a Lead Design Technologist at{' '}
            <a
              href="https://armoire.style"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none',
                fontWeight: 'bold',
              }}
            >
              Armoire Style
            </a>
            , a personalized clothing rental service. When I'm not working, I
            love playing volleyball, challenging myself with new yoga poses, and
            cooking.{' '}
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default About
