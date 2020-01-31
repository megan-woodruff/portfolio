import React from 'react'
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Image from './image'
import './projectDisplay.scss'

const ProjectDisplay = () => (
    <div className="projectContainer">
        <ProjectCard className="project" title="Project 1" description="This is project 1" slug="project1" />
        <ProjectCard className="project" title="Project 2" description="This is project 2" slug="project2" />
        <ProjectCard className="project" title="Project 3" description="This is project 3" slug="project3" />
    </div> 
)

const ProjectCard = ({ title, description, slug }) => (
    <Link className="projectLink" to={`/${slug}`}>
        <div>
            <h2>{title}</h2>
            <Image />
            <h4>{description}</h4>
        </div>
    </Link>
)

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
}

export default ProjectDisplay