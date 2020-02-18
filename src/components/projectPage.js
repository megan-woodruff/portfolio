import React from "react"
import '../components/styles.scss'
import './projectPage.scss'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from 'gatsby-image/withIEPolyfill'


const ProjectPage = ({ title, description, imageSource, stats, children }) => {
    return (
        <Layout>
            <SEO title={title} />
            <Img className="headerImage" objectFit="cover" objectPosition="top center" fluid={imageSource} alt="Placeholder alt text for now" />
                <div className="projectContent">
                    <div className="overviewCard">
                        <div className="heading">
                            <h3 className="title">{title}</h3>
                            <h2 className="description">{description}</h2>
                        </div>
                        <div className="stats">
                            {stats}
                        </div>
                    </div>
                    <div className="contentBody">
                        {children}
                    </div>
                 </div>
        
        </Layout>
    )
}

export default ProjectPage
