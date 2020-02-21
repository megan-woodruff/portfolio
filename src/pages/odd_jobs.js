import React from "react"
import ProjectPage from '../components/projectPage'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image/withIEPolyfill'

const OddJobs = () => {
  const data = useStaticQuery(graphql`
    query {
      oddjobsimage: file(relativePath: { eq: "oddjobsmockup.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      oddjobstimeline: file(relativePath: { eq: "oddjobstimeline.png" }) {
        childImageSharp {
          fluid(maxWidth: 960) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      informationarchitecture: file(relativePath: { eq: "oddjobsIA.png" }) {
        childImageSharp {
          fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid
          }
        }
      }
      scenario1: file(relativePath: { eq: "oddjobsscenario1.png" }) {
        childImageSharp {
          fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid
          }
        }
      }
      scenario2: file(relativePath: { eq: "oddjobsscenario2.png" }) {
        childImageSharp {
          fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid
          }
        }
      }
      scenario3: file(relativePath: { eq: "oddjobsscenario3.png" }) {
        childImageSharp {
          fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid
          }
        }
      }
      firstdraft: file(relativePath: { eq: "oddjobsfirstdraftarrows.png" }) {
        childImageSharp {
          fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid
          }
        }
      }
      james: file(relativePath: { eq: "james.png" }) {
        childImageSharp {
          fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
  <ProjectPage 
    title="OddJobs" 
    location="University of Washington"
    description="Connecting users with independent service providers in their community"
    imageSource={data.oddjobsimage.childImageSharp.fluid}
    stats={getStats()}
  >
    <>
    <div className="bodyTextWrapper overview">
        <h2>Project Overview</h2>
        <p>Odd Jobs was an open-ended class assignment to prototype key purchasing flows for a native, mobile peer-to-peer service-finding application.</p>
    </div>
    <Img className="projectImage" fluid={data.oddjobstimeline.childImageSharp.fluid}></Img>
    <div className="bodyTextWrapper">
        <h2>Persona</h2>
        <p>I was assigned a persona from which to draw inspiration throughout the design process. Due to the scope of the project, the emphasis here was decidedly <strong>not</strong> on conducting research to develop the persona myself. Instead, I was to assume that I was given this persona by UX researchers on my team.</p>
    </div>
    <div className="columnLayout">
      <div className="column personaImageContainer">
        <Img className="personaImage" fluid={data.james.childImageSharp.fluid}></Img>
      </div>
      <div className="column personaText" >
        <h4>James</h4> 
        <h5>Apartment Manager at Crescent Square Apartments</h5>
        <p>James owns Crescent Square apartments in Redmond, WA. Among other apartment management responsibilities, he works to update and maintain apartment facilities based on resident feedback.</p>
        <p>Busy with his management responsibilities and not very “handy” himself, James has little gardening or maintenance expertise and no intention of completing any of the needed gardening or maintenance work for Crescent Square on his own.</p>
        <p>Amidst rising prices in the growing urban area, he is, however, searching for a best-value way to update and maintain his apartment facilities. He values fair prices, efficiency, and maximizing the positive optics associated with facility updates.</p>
      </div>
    </div>

    <div className="bodyTextWrapper">
        <h2>Persona Scenarios</h2>
        <p>From this persona, I developed three key user scenarios that I believed would be critical to successful use of the application. In choosing these scenarios, I tried to avoid relatively routine application flows, such as sign-up or payment, as I believed those would be the least critical to test with potential users.</p>
        <h3>Scenario 1</h3>
        <h4>The flowers on the Crescent Square community rooftop are dying. James needs to find a gardener to replace them.</h4>
        <ul>
            <li>James may be moving between this search process and other tasks</li>
            <li>James’ highest priority is hitting his target budget for the total cost of flower replacement</li>
            <li>James doesn’t care about the exact details of the flowers to be planted, he just wants them to look good</li>
            <li>James doesn’t want to take the time to get the exact measurements of his garden in order to get a quote</li>
        </ul>
      </div>
      <Img className="projectImage" fluid={data.scenario1.childImageSharp.fluid}></Img>
      <div className="bodyTextWrapper">
        <h3>Scenario 2</h3>
        <h4>Having gotten a good quote from a gardener he likes, James needs to work with her to schedule a date, time, and meeting place for the work</h4>
        <ul>
            <li>James needs to find an available time that will fit into his work schedule</li>
            <li>James needs to understand how long the work is likely to take</li>
            <li>James needs to show the gardener where to park and where to meet him on the day of service</li>
            <li>James needs to add the planting service time to his calendar once finalized</li>
        </ul>
      </div>
      <Img className="projectImage" fluid={data.scenario2.childImageSharp.fluid}></Img>
      <div className="bodyTextWrapper">
        <h3>Scenario 3</h3>
        <h4>At the chosen appointment time, James needs to meet the gardener in person, give her access to his rooftop garden, and then pay her for the work once completed</h4>
        <ul>
            <li>James only wants to worry about interacting with the gardener once she arrives - he doesn’t want to stand around waiting for her</li>
            <li>James does not want to pay for the work until it is complete</li>
            <li>James wants to quickly understand the final price of the work once it is completed</li>
            <li>James will be onsite at the apartment complex for the duration of the gardener’s work</li>
        </ul>
      </div>
      <Img className="projectImage" fluid={data.scenario3.childImageSharp.fluid}></Img>
      <div className="bodyTextWrapper">
          <h2>Information Architecture</h2>
          <p>Using the above scenarios as guideposts, I then developed a breadth-first information architecture for the buyer component of the application.</p>
      </div>
      <Img className="projectImage" fluid={data.informationarchitecture.childImageSharp.fluid}></Img>
      <div className="bodyTextWrapper">
          <h2>Prototype First Draft</h2>
          <p>I developed the first draft of the prototype using Figma. The focus of this prototype was to test out the core flows and design patterns at a lower fidelity in order to solicit feedback for the final prototype.</p>
      </div>
      <Img className="projectImage" fluid={data.firstdraft.childImageSharp.fluid}></Img>
      <div className="iframeWrapper">
        <iframe style={{border: 'none', webkitTransform:'scale(0.75)', mozTransform: 'scale(0.75)'}} width="418" height="742" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FwkaebGozQmKCXPAUgCSlH6%2FDesign-Project-1-Draft-1%3Fnode-id%3D1%253A1304%26viewport%3D895%252C228%252C0.16364175081253052%26scaling%3Dmin-zoom" allowfullscreen></iframe>
      </div>
      <div className="bodyTextWrapper">
          <h2>Final Prototype</h2>
          <p>For the final prototype, I integrated feedback from my instructor and worked to add color and imagery to bring the flows closer to full fidelity. The following pieces of feedback influenced the flow changes that I made:</p>
          <ul>
            <li>Though price is important to our persona, a service provider's individual rate is not itself an especially important metric. It should be de-prioritized in the hierarchy.</li>
            <li>Certain service request requirements in the flow (request name, request photo) are unnecessary, and should be removed or made optional when creating a request.</li>
            <li>After creating a service request, a user's next call-to-action is not obvious. Providing a user with immediate matches to their request on the same page as the request will help continue this flow.</li>
          </ul>
      </div>
      <div className="columnLayout">
          <p>Final prototype assets coming soon</p>
        </div>
    </>
  </ProjectPage>
)}

const getStats = () => (
  <>
      <div className="stat">
          <h5>Project Background</h5>
          <h6>Individual class project in UW Interaction Design & Prototyping Course</h6>
      </div>
      <div className="stat">
          <h5>Timeline</h5>
          <h6>3 weeks</h6>
      </div>
      <div className="stat">
          <h5>Responsibilities</h5>
          <h6>Information Architecture</h6>
          <h6>Interaction Design</h6>
      </div>
  </>
)

export default OddJobs
