import React from "react"
import ProjectPage from "../components/projectPage"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

const ArmoireMobile = () => {
  const data = useStaticQuery(graphql`
    query {
      armoireImage: file(relativePath: { eq: "armoire-mock.png" }) {
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
      title="Armoire Mobile"
      location="Armoire Style"
      description="Designing + building Armoire's first mobile app"
      imageClass={"armoireImage"}
      stats={getStats()}
      imageSource={data.armoireImage.childImageSharp.fluid}
      imageAlt="Mock up of phones with screens showing Armoire's mobile app. Including a welcome screen, product details page, search results, and member feed."
    >
      <>
      <div className="bodyTextWrapper overview">
          <h2>Project Overview</h2>
        <p>
          When I conducted my first set of user interviews with Armoire members in May 2020, <em>every single interviewee</em> identified a mobile app as their number one ask for our tech team.</p>
      </div>
      
          <div class="bodyTextWrapper">
          <p>Between October 2020 and March 2021, I led the product development efforts for this app. My individual contributions towards this effort spanned initial investigation and design of our tech stack, development our UI component system in React Native, development of roughly 80% of the app's features, and deployment of our apps to the <a
                href="https://apps.apple.com/us/app/armoire-style/id1560230748"
                target="_blank"
                rel="noopener noreferrer"
              > Apple </a> and <a href="https://play.google.com/store/apps/details?id=style.armoire.armoiremobile&hl=en_US&gl=US" target="_blank"
                rel="noopener noreferrer"
              >Google Play</a> stores.
          </p>
            <p>
            Within 1 month of launch, more than <strong>50%</strong> of our user base had adopted the Armoire mobile apps – the apps are now Armoire's primary platform for user engagement. They have 5-star reviews on the App Stores and have maintained a <strong>99.9% crash-free rate since</strong> launch. 
            </p>
            <p>
              <strong>Coming soon:</strong> I used this move to mobile as an opportunity to make improvements on our existing user experience. I'll highlight some of the key technical + product decisions made during the process of building this app, as well as some of its unique feature adds for members.
            </p>
            <p>
              Until then, the apps are available for public download + guest exploration at the app store links above. If you would like to more thoroughly explore, feel free to reach out at me@meganewoodruff.com
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
      <h6>6 months</h6>
    </div>
    <div className="stat">
      <h5>Responsibilities</h5>
      <h6>Project Lead</h6>
      <h6>Information Architecture</h6>
      <h6>Interaction Design</h6>
      <h6>Front-End Engineering</h6>
    </div>
    <div className="stat">
      <h5>Collaborators</h5>
      <h6>Ryan Baerwolf, Full-Stack Engineer</h6>
      <h6>Katrina Taylor, Head of UX</h6>
      <h6>Tristan Rees, CTO</h6>
    </div>
  </>
)

export default ArmoireMobile
