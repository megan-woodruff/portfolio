import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ProjectCard from "./projectCard"

import "./projectDisplay.scss"

const ProjectDisplay = () => {
  const data = useStaticQuery(graphql`
    query {
      armoireImage: file(relativePath: { eq: "armoire-mock.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      oddJobsImage: file(relativePath: { eq: "oddjobsmockup.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="projectDisplay" id="projectDisplay">
      <div className="projectContentContainer">
        {/* <ProjectCard
          className="project"
          title="Solve by Every Learner"
          description="Helping postsecondary educators bring digital learning software into their classrooms"
          location="Every Learner Everywhere  |  Intentional Futures"
          slug="solve"
          imageSource={data.solveImage.childImageSharp.fluid}
          altText="Several tablet screens showing the home page, search page, and profile page of Solve"
        /> */}
        {/* <ProjectCard
          className="project"
          title="OddJobs"
          location="University of Washington"
          description="Connecting users with independent service providers in their community"
          slug="odd_jobs"
          imageSource={data.oddJobsImage.childImageSharp.fluid}
          altText="Three mobile application screens shown on an iPhone over a gray background"
        /> */}
        {/* <ProjectCard
          className="project"
          title="Learning Session: Equity-Centered Technology Design"
          location="Bill & Melinda Gates Foundation  |  Intentional Futures"
          description="Helping education leaders at the Bill & Melinda Gates Foundation learn about the equitable design of edtech products"
          slug="tech_learning_session"
          imageSource={data.techLearningImage.childImageSharp.fluid}
          altText="An open session booklet about inclusive design methodologies"
        /> */}
        <ProjectCard 
          className="project"
          title="Armoire Mobile"
          location="Armoire Style"
          description="Bringing Armoire's personalized rental experience to Android and iOS."
          imageClass={"armoireImage"}
          slug="armoire_mobile"
          imageSource={data.armoireImage.childImageSharp.fluid}
          altText="Mock up of phones with screens showing Armoire's mobile app. Including a welcome screen, product details page, search results, and member feed."/>
      </div>
    </div>
  )
}

export default ProjectDisplay
