import React from "react"
import ProjectPage from "../components/projectPage"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

const AdaptableHome = () => {
  const data = useStaticQuery(graphql`
    query {
      adaptableHomeImage: file(relativePath: { eq: "adaptable_home_mock.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <ProjectPage
      title="Adaptable Design Website + Interactive Home Tour"
      location="University of Washington + The Adaptable House Project"
      description="Capstone final deliverable showcasing user research findings, design principles, and adaptable home features"
      imageClass={"armoireImage"}
      stats={getStats()}
      imageSource={data.adaptableHomeImage.childImageSharp.fluid}
      imageAlt="Mock up of phones with screens showing Armoire's mobile app. Including a welcome screen, product details page, search results, and member feed."
    >
      <>
        <div className="bodyTextWrapper overview">
          <h2>Project Overview</h2>
          <p>
            My University of Washington HCDE Masters Capstone Team worked with the Adaptable House Project to design a set of home features for individuals who experience mobility limitations. Through our research, synthesis, and design, we produced a set of adaptable design guidelines as well as 3D renderings of features we co-designed with individuals in our target user population.
          </p>
          <p>
            For our "Capstone Showcase", we wanted to create a final deliverable that:
          </p>
          <ul>
            <li>Allowed viewers to interact with and "explore" the designed home features</li>
            <li>Showed a clear connection between our designed features, our user research findings, and the adaptable design guidelines that these features exemplify</li>
            <li>Showcased the potential of the home in a compelling and memorable way</li>
          </ul>
        </div>
        <div className="bodyTextWrapper">
          <h2>
            Timeline + Responsibilities
          </h2>
          <p>
            With various project deadlines rapidly approaching, I took on the role of designing and building this interactive website and walkthrough experience. My teammate Sara drafted initial ideas for the walkthrough using Figma which served as inspiration, and Azima led direction for the site's visual design. Using SketchUp, React, SCSS, Gatsby, and Netlify, I built and deployed the website in 2.5 weeks. 
          </p>
        </div>
        <div className="bodyTextWrapper">
          <h2>
            Key Challenges
          </h2>
          <ul>
            <li>Identifying the best, most efficient process for creating and exporting "scenes" from our 3D rendering tool, SketchUp</li>
            <li>Defining a reusable code pattern for piecing the SketchUp exported assets and supporting copy into walkthroughs</li>
            <li>Identifying an interaction pattern for connecting the home features to both user research and design principles</li>
            <li>Making the website as performant as possible, despite its asset-heavy nature</li>
          </ul>
        </div>
        <div className="bodyTextWrapper">
          <h2>
            Final Product
          </h2>
          <p>
            You can view a snapshot of the home walkthrough in the video below, or visit the website to explore it at your own pace. If you want to learn more about our UX process for the entire 6-month capstone project, visit the our approach page. 
          </p>
        </div>
        <div className="bodyTextWrapper">
          <h2>
            Reflection
          </h2>
          <p>
            
          </p>
        </div>
      </>
    </ProjectPage>
  )
}

const getStats = () => (
  <>
    <div className="stat">
      <h5>Sponsor</h5>
      <h6>
        University of Washington + The Adaptable House Project
      </h6>
    </div>
    <div className="stat">
      <h5>Timeline</h5>
      <h6>2.5 Weeks</h6>
    </div>
    <div className="stat no-shrink">
      <h5>Responsibilities</h5>
      <h6>Interaction Design</h6>
      <h6>Front-End Engineering</h6>
      <h6>Home Tour Asset Development</h6>
    </div>
    <div className="stat no-shrink">
      <h5>Collaborators</h5>
      <h6>Azima Mansuri, Designer</h6>
      <h6>Sara Clayton, Designer</h6>
      <h6>Devri McNeal, Researcher</h6>
    </div>
  </>
)

export default AdaptableHome
