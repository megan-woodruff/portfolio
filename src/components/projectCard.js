import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image/withIEPolyfill'
import { Link } from 'gatsby'
import './projectCard.scss'

const ProjectCard = ({
  title,
  description,
  location,
  slug,
  imageSource,
  altText,
}) => {
  return (
    <Link className="projectLink" to={`/${slug}`}>
      <div className="projectCard">
        <Img
          className="projectImage"
          objectFit="cover"
          objectPosition="50% 0"
          fluid={imageSource}
          alt={altText}
        />
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

export default ProjectCard
