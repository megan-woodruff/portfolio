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
      adaptableHomeImage: file(relativePath: { eq: "adaptable_design_mock.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      yearInReview: file(relativePath: { eq: "yearinreviewcombined.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="projectDisplay" id="projectDisplay">
      <div className="projectContentContainer">
        <ProjectCard 
          className="project"
          title="Armoire Mobile"
          location="Armoire Style"
          description="Increasing member engagement and retention by delivering an easy-to-use, performant mobile app"
          imageClass={"armoireImage"}
          slug="armoire_mobile"
          imageSource={data.armoireImage.childImageSharp.fluid}
          altText="Mock up of phones with screens showing Armoire's mobile app. Including a welcome screen, product details page, search results, and member feed."/>
         <ProjectCard 
          className="project"
          title="Armoire Year In Review"
          location="Armoire Style"
          description="Highlighting the value of an Armoire membership through year in review landing pages and dynamically-generated, shareable images"
          imageClass={"armoireImage"}
          slug="armoire_year_in_review"
          imageSource={data.yearInReview.childImageSharp.fluid}
          altText="Collage of screens with images of the Armoire Year in Review landing page and generated images"/>
         <ProjectCard 
          className="project"
          title="Adaptable Design Website + Interactive Home Tour"
          location="University of Washington + The Adaptable House Project"
          description="Capstone project final deliverable showcasing user research findings, design principles, and adaptable home features"
          imageClass={"armoireImage"}
          slug="adaptable_home"
          imageSource={data.adaptableHomeImage.childImageSharp.fluid}
          altText="Mock up of phones with screens showing Armoire's mobile app. Including a welcome screen, product details page, search results, and member feed."/>
      </div>
    </div>
  )
}

export default ProjectDisplay
