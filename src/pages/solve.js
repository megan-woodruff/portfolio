import React from "react"
import ProjectPage from '../components/projectPage'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image/withIEPolyfill'

const Solve = () => {
  const data = useStaticQuery(graphql`
    query {
      solvesnapshot: file(relativePath: { eq: "solveheader.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      solvetimeline: file(relativePath: { eq: "solvetimeline.png" }) {
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
      kitassetrelationship: file(relativePath: { eq: "kitasset.png" }) {
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
      kitassetflow: file(relativePath: { eq: "kitassetflow.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      faculty: file(relativePath: { eq: "faculty.png" }) {
        childImageSharp {
          fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid
          }
        }
      }
      assetteam: file(relativePath: { eq: "assetteam.png" }) {
        childImageSharp {
          fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid
          }
        }
      }
      cmsworkflow1: file(relativePath: { eq: "cmsworkflow1.png" }) {
        childImageSharp {
          fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid
          }
        }
      }
      cmsworkflow2: file(relativePath: { eq: "cmsworkflow2.png" }) {
        childImageSharp {
          fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid
          }
        }
      }
      cmsworkflow3: file(relativePath: { eq: "cmsworkflow3.png" }) {
        childImageSharp {
          fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid
          }
        }
      }
      cmsworkflow4: file(relativePath: { eq: "cmsworkflow4.png" }) {
        childImageSharp {
          fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid
          }
        }
      }
      table1: file(relativePath: { eq: "table1.png" }) {
        childImageSharp {
          fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid
          }
        }
      }
      table2: file(relativePath: { eq: "table2.png" }) {
        childImageSharp {
          fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid
          }
        }
      }
      pullquote: file(relativePath: { eq: "pullquote.png" }) {
        childImageSharp {
          fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid
          }
        }
      }
      calloutbox: file(relativePath: { eq: "calloutbox1.png" }) {
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
      title="Solve by Every Learner" 
      description="Helping postsecondary educators bring digital learning software into their classrooms" 
      location="Intentional Futures"
      imageClass={"solveImage"}
      imageSource={data.solvesnapshot.childImageSharp.fluid}
      stats={getStats()}
    >
      <>
        <div className="bodyTextWrapper overview">
            <h2>Project Overview</h2>
            <p>Intentional Futures is one of 12 partner organizations in the Every Learner Everywhere digital learning solutions network. This network is working to <strong>help postsecondary institutions use digital learning software to improve student success in entry-level courses</strong>.</p>
            <p>As the network grows a body of resources related to this work, our team was tasked with building a <strong>knowledge management solution</strong> to help organize and promote the network's thought leadership.</p>
        </div>
        <Img alt="Project timeline including user analysis, content analysis, information architecture, technical architecture, feature prioritization, software development for the initial release, and then iterative feature design and devleopment with ongoing releases" style={{borderRadius: '8px'}} fluid={data.solvetimeline.childImageSharp.fluid}></Img>
        <div className="bodyTextWrapper">
          <h2>Defining Core User Groups</h2>
          <div className="overview">
            <p>After getting ramped-up to the network and conducting a brief stakeholder analysis, we chose to focus on the needs of two user groups whose buy-in would be key to eventual platform adoption and success: <strong>faculty at postsecondary institutions</strong> and the <strong>Every Learner Everywhere content team.</strong></p>
          </div>           
        </div>
           
           <div className="columnLayout">
              <div className="column personaImageContainer">
                <Img alt="Faceless cartoon image of a woman in a suit" className="personaImage" fluid={data.faculty.childImageSharp.fluid}></Img>
                <p className="caption">Our access to faculty and administrators at postsecondary institutions was unfortunately extremely limited. We addressed this constraint by conducting 1-on-1 interviews with "technical assistance" partners who were working directly with these faculty to better understand their needs.</p>
              </div>
              <div className="column personaText">
                <h3 style={{marginTop: '0'}}>Institution Faculty</h3>
                <h4>Context</h4>
                <p>These faculty members were given a top-down directive to add adaptive digital learning to their courses as part of a grant funding agreement. They are already busy teaching courses and are thus concerned about how much extra work it may take to change their courses to include a digital learning solution. They are already using an online learning management system (LMS) in their courses, and thus have baseline level of technical literacy.</p>
                
                <h4>Motivations</h4>
                <p> They are motivated by the potential to make their teaching more engaging and data-driven. With evidence and clear directives, they are willing to learn how to do so using digital learning.</p>

                <h4>Knowledge Gathering Pain Points</h4>
                <ul>
                  <li>Trying to find expertise, examples, or guides for doing this type of work is time-consuming and requires piecing information together from disparate sources</li>
                  <li>If they do sit down to research this topic, they often have to sift through extremely long documents (10 pages or more). They leave unsure of the action steps they should take from the information.</li>
                </ul>
              </div>
           </div>
            
            <div className="columnLayout">
              <div className="column personaImageContainer">
                <Img alt="Faceless cartoon image of a woman in a sweater" className="personaImage" fluid={data.assetteam.childImageSharp.fluid}></Img>
                <p className="caption">We conducted 1-on-1 interviews with three Every Learner Everywhere content team members to understand their goals, motivation, and anticipated pain points from the content creation and management side.</p>
              </div>
              <div className="column personaText">
                <h3 style={{marginTop: '0'}}>Every Learner Everywhere Content Team</h3>
                <h4>Context</h4>
                <p>The Every Learner Content Team is a small group of content strategists and writers. They are in charge of collaborating with 12 network partners to prioritize content topics, research and draft content, determine the appropriate content form, manage content review workstreams, and then publish the resulting resources to the knowledge management platform. They have all used content editing or management platforms (e.g. Wordpress) </p>
                
                <h4>Motivations</h4>
                <p>This team is motivated to help institutional faculty better understand what adpative digital learning is, how it can be used in the classroom, and how it can help achieve better student outcomes. They are also motivated by the platform's potential ability to promote the Every Learner network's brand and thought leadership in this space.</p>

                <h4>Knowledge Management Pain Points</h4>
                <ul>
                  <li>The team feels pressure to maintain a consistent, high-quality collection of well-reviewed resources on the platform.</li> 
                  <li>Being able to properly review and vet every new piece of content with multiple stakeholders before offically publishing is very important to them.</li>
                  <li>The team is concerned about being able to create and align 12 network partners behind content standards and practices that will most benefit institution faculty</li>
                  <li>Ultimately, the team wants to be able to create, edit, and publish content independently of a technology team or intensive design resources.</li>
                </ul>
              </div>
           </div>
           
        <div className="bodyTextWrapper">
            <h2>Information Architecture</h2>
            <div className="overview">
              <p>One of this project's key challenges was a contractual platform completion date set for <strong>months before the creation of almost all of the content</strong> that would live on it. Thus, rather than developing the platform with a specific scale or medium in mind, we had to approach the architecture iteratively and work from "knowns" about existing resources and assumptions about the future state of resources.</p>
            </div>
            
        </div>
        <div className="columnLayout">
          <div className="column">
            <h3>Knowns</h3>
            <ul>
              <li>Text, image, and downloadable documents are the primary mediums currently used by content creators.</li>
              <li>Video is also used but is less common.</li>
              <li>Current published resources in this space are often extremely long (10 pages or more).</li>
              <li>Current published resources in this space are stored across disparate websites / journals and do not build cohesively. </li>
            </ul>
          </div>
          <div className="column">
           <h3>Assumptions</h3>
            <ul>
              <li>The platform will eventually hold content from 12 or more different authors</li> 
              <li>Different authors may create content on overlapping topics but using different styles and mediums.</li>
              <li>Though we may be able to encourage content creators towards creating more interactive resources, it is unlikely that drastic changes will occur in the short-term.</li>
            </ul>
          </div>
        </div>
        <div className="bodyTextWrapper">
            
            <h3>Developing Content Princples</h3>
            <p>Our team recognized a clear tension between the current state of content in the space and the faculty user's need for actionable, digestible information that could help them achieve outcomes. We also recognized that, over time, a set of long, over-scoped resources would become untenable for the content team as well, as every iteration on a resource would require a major effort. </p>
            <p>We hoped to solve these problems by pushing the content to be:</p>
            <ul>
              <li><strong>Modular:</strong> Broken down into standalone, digestible chunks such that no single resource is overwhelming or "tries to do everything"</li>
              <li><strong>Action-oriented:</strong> Recognizing that users think about content in terms of the outcomes they want to achieve</li>
              <li><strong>Sequenced:</strong> Brought together in one place to create a sequenced, self-paced experience for the user</li>
            </ul>
            <p>With these goals in mind, we developed definitions for two key content types on the platform: resources and toolkits.</p>
            </div> 
            <div className="columnLayout">
                <div className="column">
                    <h3>Resource</h3>
                    <p><strong>Definition:</strong> The smallest unit of information that a user can take in. A resource is standalone, high-quality, and can be consumed in one sitting.</p>
                    <p><strong>Example:</strong> A research brief, a case study, a worksheet, a video</p>
                    <p><strong>Principles:</strong> A resource should achieve a clearly scoped objective, should be sourced from the field, and should have a length and form appropriate for its contents.</p>
              </div>
                <div className="column">
                    <h3>Toolkit</h3>
                    <p><strong>Definition:</strong> A system of resources and associated context that work together to answer a key user question.</p>
                    <p><strong>Example:</strong> A research brief, case study, worksheet, and FAQ document that work in combination to help a user understand how to measure the impact of digital learning on their student outcomes.</p>
                    <p><strong>Principles:</strong> A toolkit's key question should be outcome-orientated and should clearly specify a stakeholder as its audience. A toolkit should generally contain 2-6 resources.</p>
                </div>
            </div>
            <div className="bodyTextWrapper">
              <p>Along with these definitions, we also developed the following hierarchical relationship between content topics, toolkits, and resources:</p>
            </div>
            <Img alt="A flow showing the relationship between topics, questions, toolkits, and resources. Resources are configured into toolkits to answer questions within a topic." className="projectImage"fluid={data.kitassetrelationship.childImageSharp.fluid}></Img>
            <div className="bodyTextWrapper" style={{margin: '2rem auto'}}>
              <p>This mapping lays out the relationship between high-level topics, questions that faculty might have related to those topics, and the resources that can be configured to help answer those questions.</p>
            </div>
              <Img alt="A flow showing the topic, kit, resource relationship, with a specific example for a question users might have about course measurement" className="projectImage" fluid={data.kitassetexample.childImageSharp.fluid}></Img>
            <div className="bodyTextWrapper">
              <p>Expanding on this model, here is an example that shows how a set of related resources on impact studies might be configured into a toolkit to help answer a faculty member's question about measuring the impact of their digital learning implementation.</p>
              <p>The assumption here is that these configured resources could each be produced by entirely different authors (maybe even at different times), but that they could be sequenced together with appropriate written context to create a cohesive experience for users. Below is a low-fidelity mock-up we then developed for this flow.</p>
            </div>
            <Img alt="A screenshot of a low-fidelity home page to topic page to toolkit page flow in Figma" className="projectImage" fluid={data.kitassetflow.childImageSharp.fluid}></Img>
        <div className="bodyTextWrapper">
             <h3>Full Information Architecture</h3>
             <p>Once this base content hierarchy and flow was in place and approved by network stakeholders, we developed a full information architecture for the initial platform build. We prioritized implementing functionality for the four forms of content we already knew were being used by content creators: text, image, video, and document downloads. Given the small number of initial resources, we chose to de-prioritize search functionality and focus instead on browsing by topic.</p>
        </div>
        <Img alt="Information architecture of the full site, including topic pages, toolkits, resources, and user profile page" className="projectImage" fluid={data.solveiav1.childImageSharp.fluid}></Img>
        <div className="bodyTextWrapper">
            <h2>Technical Architecture & Development</h2>
            <p>After creating this information architecture, our visual designer continued creating the basic page layouts and design specifications, while I conducted technical research to determine the best configuration of development resources for the build. Beyond budget, timing, and resource constraints, many of my technical decisions were guided heavily by the needs of the Every Learner Everywhere Content Team. The final architecture utilized an integration between Google Cloud's Firebase platform and Flamelink.io content management system.</p>
          </div>
          <Img alt="Technical architecture diagram showing a Nodejs web application, which interacts with Firebase backend resources and a content management system" className="projectImage" fluid={data.solvetecharchitecture.childImageSharp.fluid}></Img>
          <div className="bodyTextWrapper">
            <h2>Content Workflow Design</h2>
            <h3>Content Management System</h3>
            <p>The needs of our content team to work independently and manage a growing number of resources prompted me to include <a href="htttps://flamelink.io" target="_blank" rel="noopener noreferrer">Flamelink.io</a>, a headless CMS, as part of our architecture. Using a headless CMS allows content editors to add, edit, or remove resources from the platform without any intervention from developers. The fact that it's "headless" also means that our creative team has full control over how the content will appear to end users.</p> <p>After detailed research on various headless CMS solutions, I chose Flamelink due to its:</p> 
            <ul>
              <li>Flexible, customizable content schemas that can include any configuration of rich text, images, documents, tables, and links</li>
              <li>Integration with a major cloud service provider (Google Cloud Firebase)</li>
              <li>Out-of-the-box content editing web app, which relieved our team from the need to build a custom content-editing interface</li>
              <li>Support for multiple users and multiple "content environments", which would allow content editors to preview changes before published</li>
            </ul>
            <h3>Content Management Workflow</h3>
            <p>I designed the architecture requirements for integrating our platform with Flamelink around an ideal content workflow for the Every Learner content team, which is displayed below. This set-up allows content editors to add and update content in a "preview" environment, where changes can be made safely and approved by stakeholders long before they are pushed to users. Additionally, it gives a content manager exclusive access to hit "publish" on content changes, enabling change control while still elminating the need to involve developers for content changes.</p>
        </div>
        <Img alt="Part one of the content workflow diagram, where content editors update content in their preview environment and can see their changes on the preview site immediately" className="projectImage" fluid={data.cmsworkflow1.childImageSharp.fluid}></Img>
        <Img alt="Part two of the content workflow diagram, where stakeholders can view and approve content on the preview site" className="projectImage" fluid={data.cmsworkflow2.childImageSharp.fluid}></Img>
        <Img alt="Part three of the content workflow diagram, where a content manager can push the content changes to the production / live website" className="projectImage" fluid={data.cmsworkflow3.childImageSharp.fluid}></Img>
        <Img alt="Part four of the content workflow diagram, where users can view the new content on the live site" className="projectImage" fluid={data.cmsworkflow4.childImageSharp.fluid}></Img>
        <div className="bodyTextWrapper">
          <h3>Software Development</h3>
          <p>After designing this technical architecture, I onboarded three developers from <a href="https://andela.com/" target="_blank" rel="noopener noreferrer">Andela</a> to the project. Over the next 3.5 months, I did ongoing work to:</p> 
          <ul>
            <li>Write feature specifications and tasks for developers</li>
            <li>Scope, plan, and manage development sprints</li>
            <li>Ensure alignment between our UX aand development efforts</li>
            <li>Report out to stakeholders on development progress</li>
          </ul>
          <p>After these 3.5 months of development, we were able to ship a version 1 of the platform and allow content editors to begin uploading, editing, and publishing content for public use.</p>
        </div>
        <div className="bodyTextWrapper">
          <h2>Iterating on the initial build</h2>
          <p>With the initial build of the platform in place, I continued to work closely with the Every Learner content team to identify additional interaction and content patterns that they wanted to support across their resources with new features. For each of these instances, I:</p> 
          <ul>
            <li>Worked with the content team to understand the content need / pattern and potential use scenarios (both existing and future)</li>
            <li>Determined the priority and feasibility of implementing a new feature to meet this need</li>
            <li>Ran UX sprints with our designers to generate feature ideas and converge on a design to meet these needs</li>
            <li>Wrote the technical feature spec for our development partners</li>
            <li>Oversaw its development onto our production platform</li>
          </ul>
          
          <p>Below is an updated information architecture that integrates the features that were added as a result of this work, followed by a few examples of what these features look like in the product.</p>
        </div>
        <Img alt="Update site architecture diagram, showing the additions of Search, Tables, and User Assessments" className="projectImage" fluid={data.solveiav2.childImageSharp.fluid}></Img>
        <div className="bodyTextWrapper">
          <h3>Search</h3>
          <p><strong>User need:</strong> "I need a more flexible mechanism for finding content, especially if I'm looking for something specific, or I'm not sure what topic most applies to my question."</p>
          <p><strong>Feature:</strong> Cross-site search, including quick inline results, as well as a full search results page with filtering.</p>
        </div>
        <div className="videoWrapper">
          <h4>Inline search results, available from anywhere on the site</h4>
           <iframe title="Inline search results demo" src="https://www.youtube.com/embed/asKf4aen8iw?controls=0&vq=hd1020&autoplay=1&loop=1&playlist=asKf4aen8iw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="videoWrapper">
          <h4>Full search results page with filtering</h4>
           <iframe title="Full search results page demo" src="https://www.youtube.com/embed/CFnSy72EnSQ?controls=0&vq=hd1020&autoplay=1&loop=1&playlist=CFnSy72EnSQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="bodyTextWrapper">
          <h3>User assessment</h3>
          <p><strong>Content team need:</strong> "I want to recommend content to users based on their responses to survey questions. I also want to make some of our download-and-print worksheets more interactive within the site itself."</p>
          <p><strong>Feature:</strong> Interactive user assessment component, including a set of multiple choice and ranking scale questions. Outputs a written recommendation as well as recommended resources for users.</p>
        </div>
        <div className="videoWrapper">
          <h4>Live assessment for institution faculty that helps determine their readiness to use digital learning</h4>
          <iframe title="Self-assessment demo" src="https://www.youtube.com/embed/85-3m8jygfs?controls=0&vq=hd1020&autoplay=1&loop=1&playlist=85-3m8jygfs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="bodyTextWrapper">
          <h3>Tables, Pull Quotes, Callout Boxes</h3>
          <p><strong>Content team need:</strong> "Our text-heavy resources can get monotonous and repetitive. We need some additional content types to add variety and to arrange supplementary content to create a clear hierarchy for users."</p>
          <p><strong>Features:</strong> Tables, for arranging relational information. Pull quotes, for emphasizing key points and breaking up content. Callout boxes, for highlighting supplementary pieces of content and adding contrast to sections.</p>
        </div>
        <h4 style={{margin: '4rem 0 0 0'}}>Table feature in use. Tables have a standard formatting that is applied, but allow a range of rich text and images in their contents.</h4>
        <Img className="projectImage" alt="Table within a resource, containing an accessibility approach matrix" style={{borderRadius: '8px', marginTop: '1rem'}} fluid={data.table1.childImageSharp.fluid}></Img>
        <Img className="projectImage" alt="Table within a resource, containing information about project titles and their role in conducting impact studies" style={{borderRadius: '8px'}} fluid={data.table2.childImageSharp.fluid}></Img>

        <h4 style={{margin: '4rem 0 0 0'}}>Pull quote feature in use</h4>
        <Img className="projectImage" alt="Large pull quote text within an asset, containing a quote from a director on digital learning innovations" style={{borderRadius: '8px', marginTop: '1rem'}} fluid={data.pullquote.childImageSharp.fluid}></Img>
        <h4 style={{margin: '4rem 0 0 0'}}>Callout box feature in use</h4>
        <Img className="projectImage" alt="A blue callout box column within an asset, containing a side bar on Adaptive Courseware in Biology" style={{borderRadius: '8px', marginTop: '1rem'}} fluid={data.calloutbox.childImageSharp.fluid}></Img>

        <div style={{marginTop: '5rem'}} className="bodyTextWrapper">
            <h2 >Reflections & Next Steps</h2>
            <p>Today, the platform is available live <a href="https://solve.everylearnereverywhere.org" target="_blank" rel="noopener noreferrer">here</a>. As the Every Learner Everywhere Network (and its body of resources) continues to grow over the next two years, I am excited to see the content mature into a set of actionable toolkits for faculty. Similarly, I believe that our iterative development process has set a standard for identifying and developing new content types that can make the content more interactive over time.</p> 
            
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
          <h6>11 months</h6>
      </div>
      <div className="stat">
          <h5>Responsibilities</h5>
          <h6>Stakeholder Analysis</h6>
          <h6>Information Architecture</h6>
          <h6>Technical Site Architecture</h6>
          <h6>Feature Development and Specification</h6>
          <h6>UX & Developer Sprint Management</h6>
      </div>
      <div className="stat">
          <h5>Collaborators</h5>
          <h6>Scott Thompson, Visual Designer</h6>
          <h6>Ilona Chebotareva, Strategist</h6>
          <h6>Andela, Development Partners</h6>
          <h6>Rich Crandall, Project Sponsor</h6>
      </div>
  </>
)

export default Solve
