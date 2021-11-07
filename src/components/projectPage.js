import React from "react"
import "../components/styles.scss"
import "./projectPage.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

export default class ProjectPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollToTopVisible: false,
    }
    this.overviewRef = React.createRef()
    this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll = () => {
    let element = this.overviewRef.current

    /**
     * To-do: see if we can optimize this to not happen
     * on every single scroll motion
     */
    if (element) {
      let { height, top } = element.getBoundingClientRect()
      if (top + (Math.round(height) - 200) <= 0) {
        this.setState({ scrollToTopVisible: true })
      } else {
        this.setState({ scrollToTopVisible: false })
      }
    }
  }

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  render() {
    const {
      title,
      description,
      imageAlt,
      // imageClass,
      stats,
      children,
      imageSource,
    } = this.props

    return (
      <Layout projectPage={false}>
        <SEO title={title} />
        <Img
          className="headerImage"
          objectFit="cover"
          objectPosition="top center"
          fluid={imageSource}
          alt={imageAlt}
        />
        {/* <div className={`headerImage ${imageClass}`} style={{background: `url(${imageSource})`}}></div> */}
        <div className="projectContent">
          <div className="overviewCard" ref={this.overviewRef}>
            <div className="heading">
              <h3 className="title">{title}</h3>
              <h2 className="description">{description}</h2>
            </div>
            <div className="stats">{stats}</div>
          </div>

          <div className="contentBody">{children}</div>
          <button
            className={`scrollToTop ${this.state.scrollToTopVisible &&
              "visible"}`}
            onClick={this.scrollToTop}
          ></button>
        </div>
        {/* <div className="projectPageFooter">
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
        </div> */}
      </Layout>
    )
  }
}
