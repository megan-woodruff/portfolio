import React from 'react'
import { Link } from "gatsby"
import PropTypes from "prop-types"
// import Image from './image'
import image from '../images/gatsby-astronaut.png'
import './projectDisplay.scss'

const ProjectDisplay = () => (
    <div className="projectDisplay">
        <div className="projectContentContainer">
            <ProjectCard 
                className="project" 
                title="OddJobs" 
                skills={["User journey mapping", "IA development", "Prototyping"]}
                description="Connecting users with independent service providers in their community" 
                slug="odd_jobs" 
            />
            <ProjectCard 
                className="project" 
                title="RxConnect" 
                description="Helping primary care providers understand a patient's potential prescription drug costs" 
                skills={["Generative research", "Problem definition", "Prototyping"]}
                slug="rx_connect" />
            <ProjectCard 
                className="project" 
                title="Collective Edu" 
                description="Helping educators learn collectively and connect with peers" 
                skills={["Research", "User journey mapping", "Prototyping"]}
                slug="every_learner_community" />
        </div> 
    </div>
)

const ProjectCard = ({ title, description, skills, slug }) => (
    <Link className="projectLink" to={`/${slug}`}>
        <div className="projectCard">
            <div className="projectInfo">
                <h3 className="projectTitle">{title}</h3>
                <h4 className="projectDescription">{description}</h4>
                    {
                        skills.map(skill => (<h5 className="projectSkill">{skill}</h5>))
                    }
            </div>
            <img className="projectImage" src={image}/>
        </div>
    </Link>
)

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
}

export default ProjectDisplay