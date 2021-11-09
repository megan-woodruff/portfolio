import React from "react"
import ProjectPage from "../components/projectPage"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

const ArmoireYearInReview = () => {
  const data = useStaticQuery(graphql`
    query {
      armoireImage: file(relativePath: { eq: "yearinreviewmock.jpg" }) {
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
      title="Armoire 2020 Year In Review"
      location="Armoire Style"
      description="A personalized clothing rental year in review landing page and dynamically-generated, shareable images"
      imageClass={"yearInReviewMock"}
      stats={getStats()}
      imageSource={data.armoireImage.childImageSharp.fluid}
      imageAlt="Mock up of phones with screens showing Armoire's mobile app. Including a welcome screen, product details page, search results, and member feed."
    >
      <>
      <div className="bodyTextWrapper overview">
        <h2>Project Overview</h2>
        <p><i>Armoire is a consumer clothing rental company that offers its members access to a personalized closet of high-end styles</i></p>
        <p>
          As 2020 came to a close, the Armoire product team wanted to create a "rental recap" for each member that would:
        </p>
        <ul>
          <li>Teach them about their style preferences and rental behavior</li>
          <li>Highlight the value that Armoire had provided them over the past year</li>
          <li>Allow them to easily share their recap stats to within and beyond Armoire</li>
        </ul>
      </div>
      <div className="bodyTextWrapper">
        <h2>Key Technical Challenges</h2>
        <p>
          
        </p>
        <p>
        </p>
      </div>
      <div className="bodyTextWrapper">
        <h2>Final Product</h2>
        <p>
          
        </p>
        <p>
        </p>
      </div>
      <div className="bodyTextWrapper">
        <h2>Reflection</h2>
        <p>
          Given more time or the ability to work with more design collaborators, I would have loved to improve the visual design of this work, as I feel the current look is somewhat unfocused and detracts from the impact of the page.
        </p>
        <p>
          Additionally, it became clear after launch the the svg graphs I had created were not obviously interactive for users. Having more time to explore different data visualization patterns for these graphs would have been great, especially since I worked so hard to make sure they elegantly adapted to all sorts of data scenarios (low data, no data, unexpected ratios, etc.).
        </p>
      </div>
      </>
    </ProjectPage>
  )
}

const getStats = () => (
  <>
    <div className="stat">
      <h5>Company</h5>
      <h6>
        Armoire Style
      </h6>
    </div>
    <div className="stat">
      <h5>Timeline</h5>
      <h6>2 Weeks</h6>
    </div>
    <div className="stat">
      <h5>Responsibilities</h5>
      <h6>UX Design</h6>
      <h6>Front-End Engineering</h6>
    </div>
    <div className="stat">
      <h5>Collaborators</h5>
      <h6>Jeff Topham, Backend Engineer</h6>
    </div>
  </>
)

export default ArmoireYearInReview
