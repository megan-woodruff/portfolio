import React from "react"
import ProjectPage from '../components/projectPage'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image/withIEPolyfill'

const Solve = () => {
  const data = useStaticQuery(graphql`
    query {
      solveImage: file(relativePath: { eq: "everylearner2.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      solveiav1: file(relativePath: { eq: "solveiaversion1.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      solveiav2: file(relativePath: { eq: "solveiaversion2.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      solvetecharchitecture: file(relativePath: { eq: "solvearchitecture.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kitassetrelationship: file(relativePath: { eq: "kitassetrelationship.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kitassetexample: file(relativePath: { eq: "kitassetexample.png" }) {
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
      title="Solve by Every Learner" 
      description="Helping postsecondary educators bring digital learning software into their classrooms" 
      location="Intentional Futures"
      imageSource={data.solveImage.childImageSharp.fluid}
      stats={getStats()}
    >
      <>
        <div className="bodyTextWrapper">
            <h2>Project Overview</h2>
            <p>Intentional Futures is one of 12 partner organizations in the Every Learner Everywhere digital learning solutions network. This network is working to <strong>help postsecondary institutions use digital learning software to improve student success in entry-level courses</strong>. As the network grows a body of resources related to this work, our team was tasked with building a <strong>knowledge management solution</strong> to help organize and promote the network's thought leadership.</p>
        </div>
        <div className="columnLayout">
          <p>Project timeline coming soon</p>
        </div>
        <div className="bodyTextWrapper">
            <h2>Defining User Needs</h2>
            <p>For the initial build of the platform, we chose to focus on the needs of two user groups whose buy-in would be key to eventual platform adoption and success: faculty at postsecondary institutions and Every Learner Everywhere content team.</p>
            <h3>Institution Faculty</h3>
            <p>Our access to faculty and administrators at postsecondary institutions was unfortunately extremely limited (as was our time and budget to do user research). We addressed this constraint by interviewing Every Learner Network partners who were working directly with faculty to better understand their user needs.</p>
            {/* <p>Our first core user is a Biology instructor at Houston Community College. She . Already weighed down by the ongoing demands of teaching 3 sections of biology each term, Martha has very limited free time _____. She is excited about the potential for increasing student success in her courses, but she is unsure of how adaptive courseware will contribute to this goal. </p> */}
            </div>
           
           <div className="columnLayout">
            <p>Persona coming soon</p>
           </div>
            
            <div className="bodyTextWrapper">
            <h3>Every Learner Everywhere Content Team</h3>
            <p>We conducted 1-on-1 interviews with the Every Learner Everywhere content and "backbone" teams to understand their content editing, management, and analytics needs related to the platform.</p>
        </div>
        <div className="columnLayout">
            <p>Persona coming soon</p>
           </div>
        <div className="bodyTextWrapper">
            <h2>Information Architecture</h2>
            <p>One of this project's key challenges was a contractual platform completion date set for months before the creation of almost all of the resources that would live on it. Thus, rather than developing the platform with a specific scale or content medium in mind, we had to approach the architecture iteratively and work from "knowns" about existing resources and assumptions about the future state of resources.</p>
            <h3>Knowns & Assumptions</h3>
            <ul>
              <li>Text, image, and pdf are the primary mediums currently used by content creators. Video is also used but is less common.</li>
              <li>Current published resources in this space are often extremely long (8 pages or more).</li>
              <li>Current published resources in this space are stored across disparate websites / journals and generally do not build cohesively off of one another. </li>
              <li>The platform will eventually hold content from 12 or more different authors, who may create content on overlapping topics but using different styles and mediums.</li>
              <li>Though we may be able to encourage content creators towards creating more interactive resources, it is unlikely that they will make drastic changes away from their current medium.</li>
            </ul>
            <h3>Developing Content Princples</h3>
            <p>Our team recognized a clear tension between the current state of content in the space and our persona's need for actionable, digestible information that could help get her questions answered without getting bogged down by finding filtering through resources. We also recognized that, over time, a set of long, over-scoped resources would become untenable for content managers as well, as every iteration on a resource would require a major effort. </p>
            <p>We hoped to solve these problems by pushing the content to be:</p>
            <ul>
              <li><strong>Modular:</strong> Broken down into standalone, digestible chunks such that no single resource is overwhelming or "tries to do everything"</li>
              <li><strong>Action-oriented:</strong> Recognizing that users do not think about topics in terms of resources, but in terms of the outcomes they want to achieve.</li>
              <li><strong>Sequenced:</strong> Brought together in one place to create a sequenced, self-paced experience for the user.</li>
            </ul>
            <p>With these goals in mind, we developed definitions for two key content types on the platform: resources and toolkits</p>
            </div> 
            <div className="columnLayout">
                <div className="column">
                    <h4>Resource</h4>
                    <p><strong>Definition:</strong> The smallest unit of information that a user can take in. A resource is standalone, high-quality, and can be consumed in one sitting.</p>
                    <p><strong>Example:</strong> A research brief, a case study, a worksheet, a video</p>
                    <p><strong>Principles:</strong> A resource should achieve a clearly scoped objective, should be sourced from the field, and should have a length and form appropriate for its contents.</p>
              </div>
                <div className="column">
                    <h4>Toolkit</h4>
                    <p><strong>Definition:</strong> A system of resources and associated written context that work together to answer a key user question.</p>
                    <p><strong>Example:</strong> A research brief, case study, worksheet, and FAQ document that work in combination to help a user understand how to measure the impact of digital learning on their student outcomes.</p>
                    <p><strong>Principles:</strong> A toolkit's key question should be outcome-orientated and should clearly specify a stakeholder as its audience. A toolkit should generally contain 2-6 resources.</p>
                </div>
            </div>
            <div className="bodyTextWrapper">
              <p>Next, we created a hierarchical relationship between content topics, toolkits, and resources.</p>
            </div>
            <div className="columnLayout">
              <div className="column" style={{width: '70%'}}>
                <Img style={{borderRadius: '8px'}} fluid={data.kitassetrelationship.childImageSharp.fluid}></Img>
              </div>
              <div className="column" style={{width: '20%'}}>
                <p>This mapping lays out the relationship between high-level topics, questions that faculty might have related to those topics, and the resources that can be configured to help answer those questions.</p>
              </div>
            </div>
            <div className="columnLayout">
              <div className="column" style={{width: '70%'}}>
                <Img style={{borderRadius: '8px'}} fluid={data.kitassetexample.childImageSharp.fluid}></Img>
              </div>
              <div className="column" style={{width: '20%'}}>
                <p>Expanding on this model, here is an example that shows how a set of related resources on impact studies might be configured into a toolkit to help answer a faculty member's question about measuring the impact of their digital learning implementation.</p>
              </div>
            </div>
            <div className="columnLayout">
              <p>Image of high fidelity toolkit & resource mock-ups coming soon</p>
            </div>
        <div className="bodyTextWrapper">
             <h3>Full Site Architecture</h3>
             <p>Once this base content hierarchy was in place and approved by network stakeholders, we developed a full information architecture for the initial platform build. We prioritized implementing functionality for the four forms of content we already knew were being used by content creators: text, image, video, and document downloads. Given the small number of initial resources, we also chose to de-prioritize search functionality and focus instead on browsing by topic.</p>
        </div>
        <Img className="projectImage" fluid={data.solveiav1.childImageSharp.fluid}></Img>
        <div className="bodyTextWrapper">
            <h2>Technical Architecture & Development</h2>
            <p>After creating this information architecture, our visual designer continued creating the basic page layouts and design specifications, while I conducted technical research to determine the best configuration of development resources for the build. Beyond budget, timing, and resource constraints, many of my technical decisions were guided heavily by the needs of the Every Learner Everywhere Content Team. The final architecture made use (among other technologies) of Google Cloud's Firebase platform and Flamelink.io content management system.</p>
          </div>
          <Img className="projectImage" fluid={data.solvetecharchitecture.childImageSharp.fluid}></Img>
          <div className="bodyTextWrapper">
            <h3>Flamelink.io Content Management System</h3>
            <p>The needs of our content team to work independently and manage a growing number of resources prompted me to choose Flamelink.io, a headless CMS solution, for this project. I knew that using a headless CMS would allow our content editors to add, edit, or remove resources from the platform without any intervention from developers, while still giving our team full control over how the content would look to end users. After detailed research on various headless CMS solutions, I chose Flamelink due to its:</p> 
            <ul>
              <li>Flexible, customizable content schemas that can include any configuration of rich text, images, documents, tables, and links</li>
              <li>Integration with a major cloud service provider (Google Cloud / Firebase)</li>
              <li>Out-of-the-box content editing web app, which relieved our team from the need to build a custom content editing interface</li>
              <li>Support for multiple users and multiple "content environments", which would allow content editors to preview changes before they go live</li>
            </ul>
            <h3>Content Management Flow</h3>
             {/* Preview environment for content editing. Integration with a major public cloud service provider. */}
        </div>
        <div className="columnLayout">
          <p>Schematic of content editing flow coming soon</p>
        </div>
        <div className="bodyTextWrapper">
          <h2>Iterating on the initial build</h2>
          <p>With the initial build of the platform in place, our team worked closely with Every Learner content managers to identify additional patterns that they wanted to support across our resources. For each of these areas, I worked with them to understand the content need and potential use scenarios (both existing and future), ran the UX sprints with our designers to generate ideas and converge on a feature design to meet these needs, wrote the technical feature spec for our development partners, and oversaw its development onto our production platform. Below is an updated information architecture that integrates the additional search and content type features that were added over time.</p>
        </div>
        <Img className="projectImage" fluid={data.solveiav2.childImageSharp.fluid}></Img>
        <div className="bodyTextWrapper">
          <h3>Search</h3>
        </div>
        <div className="columnLayout">
          <p>Needs, mockups, finals of search feature coming soon</p>
        </div>

        {/* <div className="bodyTextWrapper">
          <h3>Table</h3>
        </div> */}
        {/* <div className="bodyTextWrapper">
          <h3>Callout box</h3>
        </div> */}
        {/* <div className="bodyTextWrapper">
          <h3>Pull quote</h3>
        </div> */}
        <div className="bodyTextWrapper">
          <h3>Inline tag definitions</h3>
        </div>
        <div className="columnLayout">
          <p>Needs, mockups, finals of inline tag definition feature coming soon</p>
        </div>
        <div className="bodyTextWrapper">
          <h3>Self-assessment</h3>
        </div>
        <div className="columnLayout">
          <p>Needs, mockups, finals of self-assessment feature coming soon</p>
        </div>
        <div className="bodyTextWrapper">
            <h2>Reflections & Next Steps</h2>
            <p style={{display: 'inline'}}>Today, the platform is available live </p><a href="https://solve.everylearnereverywhere.org" target="_blank">here</a><p style={{display: 'inline'}}>. As the Every Learner Everywhere Network (and its body of resources) continues to grow over the next two years, I am excited to see the content mature into a set of actionable toolkits for faculty. Similarly, I believe that our iterative development process has set a standard for identifying and developing new content types that can make the content more interactive over time.</p> 
            
            <p>Were I to do this project over, I would advocate heavily for the following: </p>
              <ul>
                <li>Waiting to build the platform until more of the content was in place or more rigorously planned for creation</li>
                <li>Additional project budget and time solely devoted to user research</li>
                <li>Client commitment to a robust content strategy that ensures some degree of uniformity (in length, purpose, or form) across new resources that are developed</li>
              </ul>
        </div>
      
      </>
    </ProjectPage>
  )
}

const getStats = () => (
  <>
      <div className="stat">
          <h5>Client</h5>
          <h6>Every Learner Everywhere</h6>
      </div>
      <div className="stat">
          <h5>Timeline</h5>
          <h6>8 months</h6>
      </div>
      <div className="stat">
          <h5>Responsibilities</h5>
          <h6>Stakeholder Analysis</h6>
          <h6>Information Architecture</h6>
          <h6>Technical Site Architecture</h6>
          <h6>Feature Specifications</h6>
          <h6>UX & Dev Sprint Management</h6>
      </div>
      <div className="stat">
          <h5>Collaborators</h5>
          <h6>Scott Thompson, Visual Designer</h6>
          <h6>Ilona Chebotareva, Strategist</h6>
          <h6>Rich Crandall, Project Sponsor</h6>
          <h6>Andela, Development Partners</h6>
      </div>
  </>
)

export default Solve
