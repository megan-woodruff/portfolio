                 
import React from "react"
import ProjectPage from '../components/projectPage'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image/withIEPolyfill'

const TechLearningSession = () => {
    const data = useStaticQuery(graphql`
    query {
        techlearning: file(relativePath: { eq: "techlearning.png" }) {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        affinity1: file(relativePath: { eq: "hcdrisksaffinity.png" }) {
            childImageSharp {
            fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
            }
            }
        }
        affinity2: file(relativePath: { eq: "hcdrisksaffinity2.png" }) {
            childImageSharp {
            fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
            }
            }
        }
        hcdprocessmap: file(relativePath: { eq: "hcdprocessmap.png" }) {
            childImageSharp {
            fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
            }
            }
        }
        riskmitigation: file(relativePath: { eq: "riskmitigation.png" }) {
            childImageSharp {
            fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
            }
            }
        }
        productdemos: file(relativePath: { eq: "productdemos.png" }) {
            childImageSharp {
            fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
            }
            }
        }
        risksofhcdfinal: file(relativePath: { eq: "risksofhcdfinal.png" }) {
            childImageSharp {
            fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
            }
            }
        }
        methodologyoverlay: file(relativePath: { eq: "methodologyoverlay.png" }) {
            childImageSharp {
            fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
            }
            }
        }
        methodology1: file(relativePath: { eq: "methodology.png" }) {
            childImageSharp {
            fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
            }
            }
        }
        methodology2: file(relativePath: { eq: "methodology2.png" }) {
            childImageSharp {
            fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
            }
            }
        }
        codejumperdemo: file(relativePath: { eq: "codejumperdemo.jpg" }) {
            childImageSharp {
            fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
            }
            }
        }
        codejumperdemo2: file(relativePath: { eq: "codejumperdemo2.jpg" }) {
            childImageSharp {
            fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
            }
            }
        }
        codejumperdemo3: file(relativePath: { eq: "codejumperdemo3.jpg" }) {
            childImageSharp {
            fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
            }
            }
        }
        codejumperdemo4: file(relativePath: { eq: "codejumperdemo4.jpg" }) {
            childImageSharp {
            fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
            }
            }
        }
        codejumperdemo5: file(relativePath: { eq: "codejumperdemo5.jpg" }) {
            childImageSharp {
            fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
            }
            }
        }
        techlearningtimeline: file(relativePath: { eq: "techlearningtimeline.png" }) {
            childImageSharp {
            fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
            }
            }
        }
        contentsequence: file(relativePath: { eq: "contentsequence.png" }) {
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
        title="Learning Session: Equity-Centered Technology Design"
        location="Bill & Melinda Gates Foundation"
        description="Helping education leaders at the Bill & Melinda Gates Foundation learn about the equitable design of edtech products"
        imageClass={"techImage"}
        stats={getStats()}
    >
        <>
            <div className="bodyTextWrapper overview">
                <h2>Project Overview</h2>
                <p>Clients at the Bill & Melinda Gates foundation asked our team at Intentional Futures to create a <strong>three-hour learning session</strong> on <strong>equitable technology design in the edtech space</strong>. The session was to be designed and delivered for 30-40 Senior Program Officers from the K-12, postsecondary, and “P-16 Solutions” education teams at the Foundation.</p>
            </div>
            <Img className="projectImage" fluid={data.techlearningtimeline.childImageSharp.fluid}></Img>
            <div className="bodyTextWrapper">
                <h2>Research</h2>
                <h3>Guiding Questions</h3>
                <p>Our research process was aimed at developing both a detailed picture of our session attendees’ existing topic understanding and needs, and quickly ramping up to the session content ourselves. The following questions guided these two research workstreams, which were completed in parallel.</p>
            </div>
            <div className="columnLayout">
                <div className="column">
                    <h4>Session Attendees</h4>
                    <ol>
                        <li>What efforts already exist within the Gates Foundation related to diversity, equity, and inclusion? How familiar are our attendees with these efforts?</li>
                        <li>Where are session attendees in their journey towards integrating equity into their work?</li>
                        <li>How familiar are session attendees with the human-centered product design process?</li>
                        <li>To what attendee projects and job responsibilities might this content be most relevant?</li>
                    </ol>
                </div>
                <div className="column">
                    <h4>Session Content</h4>
                    <ol>
                        <li>What key problems emerge when the human-centered design process is conducted without applying equity?</li>
                        <li>Who are the experts in equitable product design, and what do they think is most essential for us to understand about the field?</li>
                        <li>What tools or methodologies exist that can help practitioners conduct the HCD process with equity at its center?</li>
                        <li>What existing edtech products exemplify the use of an equitable HCD process?</li>
                    </ol>
                </div>
            </div>
            <div className="bodyTextWrapper">
                <h3>Research Methods</h3>
                <h4>Session Attendees</h4>
                <ul>
                    <li>2-on-1 semi-structured interviews with 8 session attendees</li>
                </ul>
                <h4>Session Content</h4>
                <ul>
                    <li>Desk research on equitable human-centered design methodologies</li>
                    <li>Desk research on edtech products designed to benefit underrepresented students</li>
                    <li>2-on-1 semi-structured interviews with experts in equitable HCD</li>
                    <li>2-on-1 semistructured interviews with edtech product teams contributing to positive outcomes for underrepresented students</li>
                </ul>

                <h2>Defining Session Goals</h2>
                <h3>Audience Needs</h3>
                <p>From our interviews, we determined that our session attendees:</p>
                <ul>
                    <li>Were familiar with diversity, equity, and inclusion efforts within the Foundation, but did not necessarily have uniform definitions for DEI or how they should apply it</li>
                    <li>Had not used the human-centered design process directly in their work</li>
                    <li>Had worked directly with grantees who use human-centered design</li>
                    <li>Were actively contributing to program and curriculum design work that aimed to benefit underrepresented students</li>
                    <li>Recognized equity as a core component of their work, but were at varying points in their journey towards applying it tangibly</li>
                </ul>
                <h3>Session Goals</h3>
                <p>From these needs, we prioritized the following session goals:</p>
                <ol>
                    <li>Help attendees develop a vocabulary that they can use to talk to their grantees about equitable human-centered design</li>
                    <li>Introduce human-centered design as a framework that can also be applied to attendees’ program and curriculum design work</li>
                    <li>Help attendees understand the pitfalls of human-centered design when applied without an equity focus</li>
                    <li>Show attendees examples of how equitable design methodologies can produce more equitable product outcomes for underrepresented students</li>
                    <li>Point attendees to experts and resources that can help them to continue their journey towards equitable work after the session is over</li>
                </ol>
            
                <h2>Content Architecture</h2>
                <p>Our team acknowledged the breadth and complexity of the topics we were hoping to present to attendees in just three hours. With this challenge in mind, we decided to develop a framework to help attendees “connect the dots” between the <strong>risks of human-centered design</strong>, <strong>equitable design methodologies</strong>, and <strong>product outcomes that benefit underrepresented students</strong>.</p>
                <h3>Identifying Risks of Human-Centered Design</h3>
                <p>Through our desk research and interviews with HCD experts, we came across several problems and product outcomes that occurred when human-centered design was conducted without an equity focus. We believed that these could be mapped to higher-level themes, and we completed a <strong>sticky note identification and affinity mapping</strong> exercise to determine them.</p>
            </div>
            <Img className="projectImage" fluid={data.affinity1.childImageSharp.fluid}></Img>
            <Img className="projectImage" fluid={data.affinity2.childImageSharp.fluid}></Img>
            <div className="bodyTextWrapper">
                <p>From this affinity mapping the team crafted definitions for each of the five "risk areas" that emerged.</p>
            </div>
            <div className="columnLayout">
                <div className="column">
                    <h4>Status Quo Design</h4> 
                    <p>Placing higher value on quantitative data at the expense of qualitative data often leads to solutions that benefit those at the center and cause further harm to those at the margins.</p>
                </div>
                <div className="column">
                    <h4>Misrepresentation of Users</h4> 
                    <p>A lack of diversity on design teams and unchecked personal biases of designers may lead to incorrect and stereotypical categorizations of underrepresented users.</p>
                </div>
                <div className="column">
                    <h4>Uneven Power Dynamics</h4> 
                    <p>Designers having the power to define who to solve for, what to solve, and how often creates a nonreciprocal relationship with their user communities.</p>
                </div>
                <div className="column">
                    <h4>Techno-solutionism</h4> 
                    <p>The belief that technology alone can solve hard societal problems leads to solutions that treat symptoms of systemic oppression rather than root causes.</p>
                </div>
                <div className="column">
                    <h4>Accountability Deficit</h4> 
                    <p>When teams don’t take account of the intentional and/or unintentional outcomes a solution may pose, they are at risk of amplifying oppressive forces that advances harm against marginalized populations.
                    </p>
                </div>
            </div>
            <div className="bodyTextWrapper">
                <h3>Integrating Equity-Centered Methodologies</h3>
                <p>Our next step was to connect <strong>equity-centered methodologies</strong> to this framework. From our research, we came to understand an equity-centered methodology as providing equity-centered principles for design, as well as specific examples,tools, or recommendations related to those principles.</p>
                <p>We identified four methodologies that were most relevant to the session: Microsoft's Inclusive Design, equityXdesign, Asset-Based Community Development Design, and Participatory Design. We then attempted to map the ways that each of these methodologies would augment the traditional human-centered design process through a simple journey mapping of its phases.
                </p>
            </div>
            <Img className="projectImage" fluid={data.hcdprocessmap.childImageSharp.fluid}></Img>
            <div className="bodyTextWrapper">
                <p>Though this mapping was helpful in parsing out the recommendations of each methodology, we found several flaws in it.</p>
                <ul>
                    <li>Each methodology makes recommendations at a different altitude
                        <ul>
                            <li>equityXdesign, for example, provides a broad set of equitable design principles, but provides fewer specific recommended methods by which to practice them</li>
                            <li>Inclusive design, on the other hand, goes deep on specific methods that push design teams to design for previously marginalized populations</li>
                        </ul>
                    </li>
                    <li>There is not a 1:1 mapping between an equitable design methodology and the design methods that are employed
                        <ul>
                            <li>Multiple design methodologies might, for example, prompt a product team to conduct a co-design workshop with attendees</li>
                            <li>Situationally, a design methodology might suggest a different design method depending on the time, resources, and user access that is available</li>
                        </ul>
                    </li>
                    <li>Product design teams might employ equitable design methods without necessarily being conscious of the broader equitable methodology from which they are drawing.</li>
                </ul>
                <p>For these reasons, we chose to move away from trying to force-fit these methodologies directly onto an HCD process map. Instead, we developed a mapping of equitable methodologies to the HCD risk areas that they most effectively help address.</p>
            </div>
            <Img className="projectImage" fluid={data.riskmitigation.childImageSharp.fluid}></Img>
            <div className="bodyTextWrapper">
                <p>This risk mitigation mapping doubled as a clear take-home message to session attendees: using a mixed-methodology approach when doing equity-centered design is essential, as different methodologies will help you mitigate the different risk areas of HCD. These methodologies are also not “plug-and-play”, but require thoughtful application in the context of the project in order to determine their tangible recommendations.</p>
                <h3>Connecting to Edtech Product Examples</h3>
                <p>Our final step was to connect these methodologies to <strong>tangible edtech product demos</strong>. After narrowing our edtech product research to six product "exemplars" we wanted to demo in the session, we interviewed the product teams to understand their design process and methods.</p> 
                <p>We then connected each process to the principles and  methods of one or more equity-centered design methodologies. An early mapping for the three products that I personally demoed is below.</p>
            </div>
            <Img className="projectImage" fluid={data.productdemos.childImageSharp.fluid}></Img>
            <div className="bodyTextWrapper">
                <h2>Session Booklet & Presentation</h2>
                <p>As we moved closer to the session date, we worked with our visual designer to sequence our content and bring our frameworks to life for attendees. We collaborated to develop the following content sequence:</p>
            </div>
            <Img className="projectImage" fluid={data.contentsequence.childImageSharp.fluid}></Img>
            <div className="bodyTextWrapper">
                <p>and to craft the final booklet and deck. Below are excerpts from these materials which display the final version of our framework and the connections we made between our various pieces of content.</p>
            </div>
            <Img className="projectImage" fluid={data.risksofhcdfinal.childImageSharp.fluid}></Img>
            <Img className="projectImage" fluid={data.methodologyoverlay.childImageSharp.fluid}></Img>
            <Img className="projectImage" fluid={data.methodology1.childImageSharp.fluid}></Img>
            <Img className="projectImage" fluid={data.methodology2.childImageSharp.fluid}></Img>
            <Img className="projectImage" fluid={data.codejumperdemo.childImageSharp.fluid}></Img>
            <Img className="projectImage" fluid={data.codejumperdemo2.childImageSharp.fluid}></Img>
            <Img className="projectImage" fluid={data.codejumperdemo3.childImageSharp.fluid}></Img>
            <Img className="projectImage" fluid={data.codejumperdemo4.childImageSharp.fluid}></Img>
            <Img className="projectImage" fluid={data.codejumperdemo5.childImageSharp.fluid}></Img>
            <div className="bodyTextWrapper">
                <h2>Session Delivery</h2>
                <p>The session was delivered on December 3, 2019 to about 30 program officers in Seattle, as well as 10 who joined remotely. In addition to the content laid out above, we also welcomed guest speakers from Greater Good Studio and Google, and integrated discussion and activity moments to help attendees apply the content.</p>
                <p>Attendee reception to the session was overwhelmingly positive. 9 of 10 respondents to the post-session survey "Strongly Agreed" that the session was a good use of their time (the other "Agreed"). Several also left positive comments about the value of the session:</p>
            </div>
            <div className="columnLayout">
                <p>"Great work by iF researching and distilling the different design methodologies and providing taking a solid crack and sense-making across the approaches."</p>
                <p>"The content is timely and immediately applicable to current work."</p>
                <p>"Deeply connected to strategic decisions we're actively making. Relevant across full P-16 landscape."</p>
            </div>
            <div className="bodyTextWrapper">
                <h2>Reflections</h2>
                <p>Given more time, I would have loved to have created an even more clear visual connection between our product demos and the equitable methodologies we covered.</p>
            </div>
        </>
    </ProjectPage>
)}

const getStats = () => (
    <>
        <div className="stat">
            <h5>Client</h5>
            <h6>Bill & Melinda Gates Foundation</h6>
        </div>
        <div className="stat">
            <h5>Timeline</h5>
            <h6>8 weeks</h6>
        </div>
        <div className="stat">
            <h5>Responsibilities</h5>
            <h6>Subject Matter Research</h6>
            <h6>Stakeholder Research</h6>
            <h6>Content Architecture</h6>
            <h6>Booklet & Presentation Development</h6>
        </div>
        <div className="stat">
            <h5>Collaborators</h5>
            <h6>Tina Moore, Project Lead</h6>
            <h6>Rich Crandall, Project Sponsor</h6>
            <h6>Victor Moreno, Visual Designer</h6>
        </div>
    </>
)

export default TechLearningSession
                    