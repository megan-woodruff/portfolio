import React from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import Img from 'gatsby-image'
import './projectDisplay.scss'

// import desktop from '../images/stock_image_desk.jpg'
// import mobile from '../images/stock_image_mobile.jpg'
const desktop = "stock_image_desk.jpg"
const mobile = "stock_image_mobile.jpg"

const ProjectDisplay = () => (
    <div className="projectDisplay">
        <div className="projectContentContainer">
            <ProjectCard 
                className="project" 
                title="Solve by Every Learner" 
                description="Helping postsecondary educators learn collectively and connect with peers" 
                location="Intentional Futures"
                // skills={["User research", "software architecture design", "product management"]}
                slug="solve" 
                imageSource={mobile}
                />
            <ProjectCard
                className="project"
                title="Learning Session: Equity-Centered Technology Design"
                location="Bill & Melinda Gates Foundation"
                description="Helping education leaders at the Bill & Melinda Gates Foundation learn about the equitable design of edtech products"
                slug="tech_learning_session"
                imageSource={desktop}
            />
            <ProjectCard 
                className="project" 
                title="OddJobs" 
                // skills={["User journey mapping", "IA development", "prototyping"]}
                location="University of Washington"
                description="Connecting users with independent service providers in their community" 
                slug="odd_jobs" 
                imageSource={mobile}
            />
            <ProjectCard 
                className="project" 
                title="Rx Connect" 
                description="Helping primary care providers understand a patient's potential prescription drug costs" 
                location="University of Washington"
                // skills={["User research", "problem definition", "prototyping"]}
                slug="rx_connect" 
                imageSource={desktop}
                />
        </div> 
    </div>
)

const ProjectCard = ({ title, description, location, slug, imageSource }) => {

 const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "stock_image_desk.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Link className="projectLink" to={`/${slug}`}>
        <div className="projectCard">
            {/* <img className="projectImage" src={imageSource} alt="Digital application in use"/>  */}
            <Img className="projectImage" objectFit="cover" fluid={data.placeholderImage.childImageSharp.fluid} alt="Digital application in use" />
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