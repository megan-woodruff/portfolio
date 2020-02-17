                 
import React from "react"
import ProjectPage from '../components/projectPage'
import { useStaticQuery, graphql } from "gatsby"

const TechLearningSession = () => {
    const data = useStaticQuery(graphql`
    query {
      techlearning: file(relativePath: { eq: "techlearning.png" }) {
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
        title="Learning Session: Equity-Centered Technology Design"
        location="Bill & Melinda Gates Foundation"
        description="Helping education leaders at the Bill & Melinda Gates Foundation learn about the equitable design of edtech products"
        imageSource={data.techlearning.childImageSharp.fluid}
    />
)}

export default TechLearningSession
                    