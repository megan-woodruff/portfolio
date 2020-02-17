import React from "react"
import ProjectPage from '../components/projectPage'
import { useStaticQuery, graphql } from "gatsby"

const OddJobs = () => {
  const data = useStaticQuery(graphql`
    query {
      solveImage: file(relativePath: { eq: "stock_image_desk.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
  <ProjectPage 
    title="OddJobs" 
    location="University of Washington"
    description="Connecting users with independent service providers in their community"
    imageSource={data.solveImage.childImageSharp.fluid}
  />
)}

export default OddJobs
