import React from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import Img from 'gatsby-image/withIEPolyfill'
import './projectDisplay.scss'

const ProjectDisplay = () => {

    const data = useStaticQuery(graphql`
    query {
      techLearningImage: file(relativePath: { eq: "techlearning.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      solveImage: file(relativePath: { eq: "everylearnermock.png" }) {
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
        <div className="projectDisplay">
            <div className="projectContentContainer">
                <ProjectCard 
                    className="project" 
                    title="Solve by Every Learner" 
                    description="Helping postsecondary educators learn collectively and connect with peers" 
                    location="Intentional Futures"
                    // skills={["User research", "software architecture design", "product management"]}
                    slug="solve" 
                    imageSource={data.solveImage.childImageSharp.fluid}
                    />
                <ProjectCard
                    className="project"
                    title="Learning Session: Equity-Centered Technology Design"
                    location="Bill & Melinda Gates Foundation"
                    description="Helping education leaders at the Bill & Melinda Gates Foundation learn about the equitable design of edtech products"
                    slug="tech_learning_session"
                    imageSource={data.techLearningImage.childImageSharp.fluid}
                />
                <ProjectCard 
                    className="project" 
                    title="OddJobs" 
                    // skills={["User journey mapping", "IA development", "prototyping"]}
                    location="University of Washington"
                    description="Connecting users with independent service providers in their community" 
                    slug="odd_jobs" 
                    imageSource={data.oddJobsImage.childImageSharp.fluid}
                />
                {/* <ProjectCard 
                    className="project" 
                    title="Rx Connect" 
                    description="Helping primary care providers understand a patient's potential prescription drug costs" 
                    location="University of Washington"
                    // skills={["User research", "problem definition", "prototyping"]}
                    slug="rx_connect" 
                    imageSource={data.placeholderImage.childImageSharp.fluid}
                    /> */}
            </div> 
        </div>
)
}

const ProjectCard = ({ title, description, location, slug, imageSource }) => {

  return (
    <Link className="projectLink" to={`/${slug}`}>
        <div className="projectCard">
            <Img className="projectImage" objectFit="cover" objectPosition="50% 0" fluid={imageSource} alt="Digital application in use" />
            <div className="projectInfo">
                <div>
                    <h3 className="projectTitle">{title}</h3>
                    <h5 className="projectLocation">{location}</h5>
                </div>
                <h4 className="projectDescription">{description}</h4>
            </div>
             
        </div>
    </Link>
  )
}

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
}

export default ProjectDisplay