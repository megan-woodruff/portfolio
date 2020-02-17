import React from "react"
import ProjectPage from '../components/projectPage'
import { useStaticQuery, graphql } from "gatsby"

const Solve = () => {
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
      title="Solve by Every Learner" 
      description="Helping postsecondary educators bring adaptive pedagogy into their classrooms" 
      location="Intentional Futures"
      imageSource={data.solveImage.childImageSharp.fluid}
    />
  )
}

export default Solve
