import React from "react"
import ProjectPage from "../components/projectPage"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

const ArmoireYearInReview = () => {
  const data = useStaticQuery(graphql`
    query {
      armoireImage: file(relativePath: { eq: "yearinreviewcombined.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      inspiration1: file(relativePath: { eq: "yir-inspo.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      inspiration2: file(relativePath: { eq: "yir-inspo2.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      inspiration3: file(relativePath: { eq: "yir-inspo3.gif" }) {
        name,
        publicURL
      }
      topBrands: file(relativePath: { eq: "yir-brands.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      topStyles: file(relativePath: { eq: "yir-styles.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      summary: file(relativePath: { eq: "yir-summary.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      walkthrough: file(relativePath: { eq: "yir-walkthrough.mp4" }) {
        name,
        publicURL
      }
    }
  `)

  return (
    <ProjectPage
      title="Armoire 2020 Year In Review"
      location="Armoire Style"
      description="Personalized clothing rental year in review landing pages and dynamically-generated, shareable images"
      stats={getStats()}
      imageSource={data.armoireImage.childImageSharp.fluid}
      imageAlt="Mock up of screens from Armoire Year in Review landing page"
    >
      <>
      <div className="bodyTextWrapper overview">
        <h2>Project Overview</h2>
        <p><i>Armoire is a consumer clothing rental company that offers its members access to a personalized closet of high-end styles.</i></p>
        <p>
          As 2020 came to a close, the Armoire product team wanted to create a memorable, personalized "rental recap" for each member that would:
        </p>
        <ul>
          <li>Teach them about their style preferences and rental behavior</li>
          <li>Highlight the value that Armoire had provided to them in 2020</li>
          <li>Allow them to easily share their recap within and beyond Armoire</li>
        </ul>
      </div>
      <div className="bodyTextWrapper">
        <h2>Timeline + Responsibilities</h2>
        <p>
          For the most part, this project was a solo effort. With the problem statement defined by the broader team, I owned the technical investigation, design, and front-end development of the finished product. I worked with our lead backend engineer to define the desired parameters and response for a new rental stats API. I also sought feedback from my co-workers throughout the process. I took the 2020 Year in Review from concept to finished product in roughly 2 weeks. 
        </p>
      </div>
      <div className="bodyTextWrapper">
        <h2>Technical Investigation</h2>
        <p>
          In my initial technical investigation, I focused on finding the best method for creating some sort of dynamically-generated asset (likely an image or video) for each member that they could save and share on social media. Inspiration included Spotify's Year in Review photos and Facebook's friendversary videos.
        </p>
      </div>
      <div className="imageRow">
        <div style={{ width: 162, height: 320 }} className="image">
          <Img
            alt=""
            fluid={data.inspiration1.childImageSharp.fluid}/>
        </div>
        <div style={{ width: 300, height: 320 }} className="image">
          <Img
            alt=""
            fluid={data.inspiration2.childImageSharp.fluid}/>
        </div>
        <div style={{ height: 320 }} className="image">
          {/* <Img
            alt=""
            fluid={data.inspiration3.childImageSharp.fluid}/> */}
        </div>
      </div>
      <div className="bodyTextWrapper">
        <p>
          At that point in time, Armoire had a Django/Python backend and a Vue/HTML/Javascript web app. I investigated three potential methods for asset generation within these architectures:
        </p>
        <ul>
          <li><a href="https://pillow.readthedocs.io/en/stable/">Pillow</a> – Python Image Processing library</li>
          <li><a href="https://zulko.github.io/moviepy/">MoviePy</a> – Python module for video editing</li>
          <li><a href="https://www.npmjs.com/package/html2canvas">html2Canvas</a> – Node library that takes "screenshots" of websites</li>
        </ul>
        <p>
          After researching the advantages and limitations of each of these libraries, I created rough proof-of-concepts for each method of asset generation. I used these to evaluate various aspects of the potential Year in Review asset generation processes and end-user experiences.
        </p>
        </div>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Python Library (Pillow or MoviePy)</th>
              <th>html2Canvas</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <th>Asset Generation Process</th>
            <td>Assets are generated once for all clients via a Python script run on the server.</td>
            <td>Assets are generated via JavaScript, which is run on the user's browser when their Year in Review landing page is loaded.</td>
          </tr>
          <tr>
            <th>Asset Storage</th>
            <td>Generated assets need to stored in an AWS s3 bucket. Urls to access these assets will also need to be stored on the database.</td>
            <td>Assets will be available for download by the user from the landing page after generation. They will not need to be stored in any other way.</td>
          </tr>
          <tr>
            <th>Asset Consistency</th>
            <td>Assets will be generated on the same server for all clients and should thus be 100% consistent.</td>
            <td>Some potential for inconsistencies in asset generation across browsers. However, more than 95% of users are on Chrome and Safari, and html2Canvas is supported on all major browsers.</td>
          </tr>
          <tr>
            <th>Personal Technical Learning Curve</th>
            <td>High</td>
            <td>Low</td>
          </tr>
          <tr>
            <th>Visual Layouts Available</th>
            <td>Limited</td>
            <td>Akin to options available for HTML web layouts. Only a few small gaps in support for certain CSS properties.</td>
          </tr>
          <tr>
            <th>Time to build complementary landing page?</th>
            <td>Limited – If using Movie.Py, likely not in scope.</td>
            <td>Yes – Required for asset generation. Code can be shared across landing page layouts and the generated images.</td>
          </tr>
          <tr>
            <th>Perceived performance</th>
            <td>Fast – Asset generation happens before the user interacts with the experience.</td>
            <td>Slower – The browser has to generateassets when the experience is loaded, so the initial load time will be roughly 6 seconds or longer.</td>
          </tr>
          </tbody>
        </table>
        <div className="bodyTextWrapper">
        <p>
          There was clearly no "perfect" solution, especially considering I only had 2 weeks to complete the project. I ultimately chose to work with html2Canvas because I believed that the combination of an interactive, exploratory landing page and shareable images would be most engaging and memorable for our users. 
        </p>
        <p>
          Perceived performance, though important, was a lower-tier consideration for this experience, because is was not mission critical. 
        </p>
        <p>
          This method of generating images from html layouts on the browser was admittedly unconventional, but I found it to be worth it because it enabled rapid iteration (which often characterizes web development) and allowed me to reuse code between the image layouts and landing page elements.
        </p>
        <p>
        </p>
      </div>
      <div className="bodyTextWrapper">
        <h2>Content + Design</h2>
        <p>
          To determine the Year in Review content, I crowd-sourced ideas from Armoire members and my co-workers using Slack and Facebook channels, asking what they would like to learn about their own rental habits.
        </p>
        <p>
        </p>
      </div>
      <div className="bodyTextWrapper">
        <h2>Additional Technical Learnings</h2>
        <h3>SVG Shapes + Patterns</h3>
        <h3>Social Sharing Actions</h3>
        
        <p>
         
        </p>
        <p>
        </p>
      </div>
      <div className="bodyTextWrapper">
        <h2>Final Product</h2>
        <h3>Walkthrough Video</h3>
      </div>
      <div className="generatedImages">
      <video
        autoPlay={true}
        loop
        alt={""}
        style={{ width: '100%', marginBottom: 48, marginTop: 24, marginLeft: 0, marginRight: 0 }}
        muted>
        <source 
          src={data.walkthrough.publicURL} 
          type="video/mp4" />
        </video> 
      </div>
      <div className="bodyTextWrapper">
        <h3>Generated Images</h3>
      </div>
      <div className="imageRow">
        <div className="image" style={{ width: 208 }}>
          <Img
            alt=""
            fluid={data.topStyles.childImageSharp.fluid}/>
        </div>
        <div className="image" style={{ width: 328 }}>
          <Img
            alt=""
            fluid={data.summary.childImageSharp.fluid}/>
        </div>
        <div className="image">
          <Img
            alt=""
            fluid={data.topBrands.childImageSharp.fluid}/>
        </div>
      </div>
      <div className="bodyTextWrapper">
        <h2>Reflection</h2>
        <p>
          Given more time or the ability to work with more design collaborators, I would have loved to improve the visual design of this work, as I feel it is somewhat heavy and dense. I also would have liked to add more movement / animation to the overall flow.
        </p>
        <p>
          Additionally, it became clear after launch that the SVG graphs I had created were not as obviously interactive to users as I had hoped. Having more time to explore and test different data visualization patterns for these graphs would have been ideal, especially since I worked so hard to make sure they elegantly adapted to all sorts of data scenarios.
        </p>
        <p>
          In all, I'm very proud of what I was able to produce in 2 weeks, and the way I was able to create shareable images using html canvas. Reception of the feature was extremely positive, with several members sharing their rental stats both on our in-product feed and on their social media channels. 
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
