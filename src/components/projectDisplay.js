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
      solveImage: file(relativePath: { eq: "solveheader.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      oddJobsImage: file(relativePath: { eq: "oddjobsthumbnail.png" }) {
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
                    description="Helping postsecondary educators bring digital learning software into their classrooms" 
                    location="Every Learner Everywhere  |  Intentional Futures"
                    slug="solve" 
                    imageSource={data.solveImage.childImageSharp.fluid}
                    altText="Several tablet screens showing the home page, search page, and profile page of Solve"
                    />
                <ProjectCard 
                    className="project" 
                    title="OddJobs" 
                    location="University of Washington"
                    description="Connecting users with independent service providers in their community" 
                    slug="odd_jobs" 
                    imageSource={data.oddJobsImage.childImageSharp.fluid}
                    altText="Three mobile application screens shown on an iPhone over a gray background"
                />
                <ProjectCard
                    className="project"
                    title="Learning Session: Equity-Centered Technology Design"
                    location="Bill & Melinda Gates Foundation  |  Intentional Futures"
                    description="Helping education leaders at the Bill & Melinda Gates Foundation learn about the equitable design of edtech products"
                    slug="tech_learning_session"
                    imageSource={data.techLearningImage.childImageSharp.fluid}
                    altText="An open session booklet about inclusive design methodologies"
                />
            </div> 
        </div>
)
}

const ProjectCard = ({ title, description, location, slug, imageSource, altText }) => {

  return (
    <Link className="projectLink" to={`/${slug}`}>
        <div className="projectCard">
            <Img className="projectImage" objectFit="cover" objectPosition="50% 0" fluid={imageSource} alt={altText} />
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