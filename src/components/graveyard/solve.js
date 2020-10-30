import React from "react"
import ProjectPage from "../projectPage"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

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
      solvetecharchitecture: file(
        relativePath: { eq: "solvearchitecture.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kitassetrelationship: file(
        relativePath: { eq: "kitassetrelationship.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      contentanalysis: file(relativePath: { eq: "contentanalysis.png" }) {
        childImageSharp {
          fluid(maxWidth: 960) {
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
      homepage: file(relativePath: { eq: "homepage.png" }) {
        childImageSharp {
          fluid(maxWidth: 960) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      topicpage: file(relativePath: { eq: "topicpage.png" }) {
        childImageSharp {
          fluid(maxWidth: 960) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kitpage: file(relativePath: { eq: "kitpage.png" }) {
        childImageSharp {
          fluid(maxWidth: 960) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      resourcepage: file(relativePath: { eq: "resourcepage.png" }) {
        childImageSharp {
          fluid(maxWidth: 960) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      usercollection: file(relativePath: { eq: "usercollection.png" }) {
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
      imageAlt="Screen mockups of profile, home, resource, and topic page"
      stats={getStats()}
    >
      <>
        <div className="bodyTextWrapper overview">
          <h2>Project Overview</h2>
          <p>
            Intentional Futures is one of 12 partner organizations in the Every
            Learner Everywhere digital learning solutions network. This network
            is working to{" "}
            <strong>
              help postsecondary institutions use digital learning software to
              improve student success in entry-level courses
            </strong>
            .
          </p>
          <p>
            As the network grows a body of resources related to this work, our
            team was tasked with building a{" "}
            <strong>knowledge management solution</strong> to help organize and
            promote the network's thought leadership.
          </p>
        </div>
        <Img
          alt="Project timeline including user analysis, content analysis, information architecture, technical architecture, feature prioritization, software development for the initial release, and then iterative feature design and devleopment with ongoing releases"
          style={{ margin: "4rem 0", borderRadius: "8px" }}
          fluid={data.solvetimeline.childImageSharp.fluid}
        ></Img>
        <div className="bodyTextWrapper">
          <h2>User Research</h2>
          <div className="overview">
            <p>
              For the first iteration of the platform, I chose to focus our
              team's efforts on the needs of two user groups whose buy-in would
              be key to eventual platform adoption and success:{" "}
              <strong>Faculty at Postsecondary Institutions</strong> and the{" "}
              <strong>Every Learner Everywhere Content Team.</strong> We
              conducted first and second-hand interviews with these groups to
              develop the following personas.
            </p>
          </div>
        </div>

        <div className="columnLayout">
          <div className="column personaImageContainer">
            <Img
              alt="Faceless cartoon image of a woman in a suit"
              className="personaImage"
              fluid={data.faculty.childImageSharp.fluid}
            ></Img>
            <p className="caption">
              Our access to faculty and administrators at postsecondary
              institutions was unfortunately extremely limited. We addressed
              this constraint by conducting 1-on-1 interviews with four
              "technical assistance" partners who were working directly with
              these faculty.
            </p>
          </div>
          <div className="column personaText">
            <h3 style={{ marginTop: "0" }}>Institution Faculty</h3>
            <h4>Context</h4>
            <p>
              These faculty members were given a top-down directive to add
              adaptive digital learning to their courses as part of a grant
              funding agreement. They are already busy teaching courses and are
              thus concerned about how much extra work it may take to change
              their courses to include a digital learning solution. They are
              already using an online learning management system (LMS) in their
              courses, and thus have baseline level of technical literacy.
            </p>

            <h4>Motivations</h4>
            <p>
              {" "}
              They are motivated by the potential to make their teaching more
              engaging and data-driven. With evidence and clear directives, they
              are willing to learn how to do so using digital learning.
            </p>

            <h4>Knowledge Gathering Pain Points</h4>
            <ul>
              <li>
                Trying to find expertise, examples, or guides for doing this
                type of work is time-consuming and requires piecing information
                together from disparate sources.
              </li>
              <li>
                If they do sit down to research this topic, they often have to
                sift through extremely long documents (10 pages or more). They
                leave unsure of the action steps they should take from the
                information.
              </li>
            </ul>
          </div>
        </div>

        <div className="columnLayout">
          <div className="column personaText">
            <h3 style={{ marginTop: "0" }}>
              Every Learner Everywhere Content Team
            </h3>
            <h4>Context</h4>
            <p>
              The Every Learner Content Team is a small group of content
              strategists and writers. They are in charge of collaborating with
              12 network partners to prioritize content topics, research and
              draft content, determine the appropriate content form, manage
              content review workstreams, and then publish the resulting
              resources to the knowledge management platform. They have all used
              content editing or management platforms (e.g. Wordpress){" "}
            </p>

            <h4>Motivations</h4>
            <p>
              This team is motivated to help institutional faculty better
              understand what adpative digital learning is, how it can be used
              in the classroom, and how it can help achieve better student
              outcomes. They are also motivated by the platform's potential
              ability to promote the Every Learner network's brand and thought
              leadership in this space.
            </p>

            <h4>Knowledge Management Pain Points</h4>
            <ul>
              <li>
                The team feels pressure to maintain a consistent, high-quality
                collection of well-reviewed resources on the platform.
              </li>
              <li>
                Being able to properly review and vet every new piece of content
                with multiple stakeholders before offically publishing is very
                important to them.
              </li>
              <li>
                The team is concerned about being able to create and align 12
                network partners behind content standards and practices that
                will most benefit institution faculty.
              </li>
              <li>
                Ultimately, the team wants to be able to create, edit, and
                publish content independently of a technology team or intensive
                design resources.
              </li>
            </ul>
          </div>
          <div className="column personaImageContainer">
            <Img
              alt="Faceless cartoon image of a woman in a sweater"
              className="personaImage flipImage"
              fluid={data.assetteam.childImageSharp.fluid}
            ></Img>
            <p className="caption">
              We conducted 1-on-1 interviews with three Every Learner Everywhere
              content team members to understand their goals, motivation, and
              anticipated pain points from the content creation and management
              side.
            </p>
          </div>
        </div>

        <div className="bodyTextWrapper overview">
          <h2>Problem Definition</h2>
          <p>
            These personas' knowledge finding and knowledge management paint
            points guided our creation of the following "how might we"
            statements, which drove our thinking throughout the first build of
            the platform.
          </p>
          <p>
            1. How might we create a content experience that is cohesive,
            actionable, and digestible for institution faculty?
          </p>
          <p>
            2. How might we create a scalable content management system that
            gives the Every Learner team full control over content creation,
            review, and publishing?
          </p>
        </div>
        <div className="bodyTextWrapper">
          <h2>Information Architecture</h2>
          <div className="overview">
            <p>
              One of this project's key challenges was a contractual platform
              completion date set for{" "}
              <strong>
                months before the creation of almost all of the content
              </strong>{" "}
              that would live on it. Thus, rather than developing the platform
              with a specific scale or medium in mind, we had to approach the
              content architecture iteratively.
            </p>
          </div>
        </div>
        <div className="columnLayout">
          <div className="column personaImageContainer">
            <Img
              alt="Images of 4 documents on digital learning"
              className="personaImage"
              fluid={data.contentanalysis.childImageSharp.fluid}
            ></Img>
          </div>
          <div className="column personaText">
            <h3 style={{ marginTop: "1rem" }}>Content Analysis</h3>
            <h4>Process</h4>
            <p>
              We analyzed over 30 resources that had already been created by
              Network partners in this space (before the Network was formed), as
              well as some of the materials that were in progress for the
              platform.
            </p>
            <h4>Findings</h4>
            <ul>
              <li>
                Most resources were comprised almost entirely of text and image,
                though some contained video
              </li>
              <li>
                Most resources were 10 pages or longer, and were written by and
                for academics
              </li>
              <li>
                Each author wrote with a slightly different style and tone, and
                authors rarely built cohesively off of findings or work of
                another
              </li>
              <li>
                There was a large variety in altitudes at which resources were
                written, as well as the scope that they would try to cover
              </li>
            </ul>
          </div>
        </div>
        <div className="bodyTextWrapper">
          <h3>Content Principles</h3>
          <p>
            During this analysis, we recognized a clear tension between the
            existing state of content in this space and the pain points
            experienced by institution faculty who were looking to achieve
            outcomes in their courses. In order to encourage future content
            development by the Every Learner team to align with the design we
            created for the platform, we created the following overarching
            content principles.
          </p>
          <ul>
            <li>
              <strong>Modular:</strong> Broken down into standalone, digestible
              chunks such that no single resource is overwhelming or "tries to
              do everything".
            </li>
            <li>
              <strong>Action-oriented:</strong> Recognizing that users think
              about content in terms of the outcomes they want to achieve,
              rather than the resources they want to read.
            </li>
            <li>
              <strong>Sequenced:</strong> Brought together in one place to
              create a sequenced, self-paced experience for the user.
            </li>
          </ul>
          <p>
            With these principles in mind, we then developed definitions for the
            two primary content types we would support on the platform, as well
            as a hierarchy connecting them.
          </p>
        </div>
        <h4 className="imageHeading" style={{ marginTop: "3rem" }}>
          Content Type Definitions
        </h4>
        <div style={{ marginTop: "0" }} className="columnLayout">
          <div className="column">
            <h3>Resource</h3>
            <p>
              <strong>Definition:</strong> The smallest unit of information that
              a user can take in. A resource is standalone, high-quality, and
              can be consumed in one sitting.
            </p>
            <p>
              <strong>Example:</strong> A research brief, a case study, a
              worksheet, a video
            </p>
            <p>
              <strong>Principles:</strong> A resource should achieve a clearly
              scoped objective, should be sourced from the field, and should
              have a length and form appropriate for its contents.
            </p>
          </div>
          <div className="column">
            <h3>Toolkit</h3>
            <p>
              <strong>Definition:</strong> A system of resources and associated
              context that work together to answer a key user question.
            </p>
            <p>
              <strong>Example:</strong> A research brief, case study, worksheet,
              and FAQ document that work in combination to help a user
              understand how to measure the impact of digital learning on their
              student outcomes.
            </p>
            <p>
              <strong>Principles:</strong> A toolkit's key question should be
              outcome-orientated and should clearly specify a stakeholder as its
              audience. A toolkit should generally contain 2-6 resources.
            </p>
          </div>
        </div>
        <h4 className="imageHeading">Content Hierarchy</h4>
        <div className="photoGrid" style={{ marginTop: "0" }}>
          <div className="photoGridElement">
            <Img
              alt="A flow showing the relationship between topics, questions, toolkits, and resources. Resources are configured into toolkits to answer questions within a topic."
              fluid={data.kitassetrelationship.childImageSharp.fluid}
            ></Img>
            <p className="caption" style={{ marginBottom: "0" }}>
              This mapping lays out the relationship between high-level topics,
              questions that faculty might have related to those topics, and the
              resources that can be configured into a toolkit to help answer
              those questions.
            </p>
          </div>
          <div className="photoGridElement">
            <Img
              alt="A flow showing the topic, kit, resource relationship, with a specific example for a question users might have about course measurement"
              fluid={data.kitassetexample.childImageSharp.fluid}
            ></Img>
            <p className="caption" style={{ marginBottom: "0" }}>
              Expanding on this model, this example shows how a set of related
              resources on impact studies might be configured into a toolkit to
              help answer a faculty member's question about measuring the impact
              of their digital learning implementation.
            </p>
          </div>
        </div>
        <h4 className="imageHeading">Low-Fidelity Flow</h4>
        <Img
          alt="A home page to topic page to toolkit page flow in Figma"
          className="projectImage"
          fluid={data.kitassetflow.childImageSharp.fluid}
          style={{ marginTop: "0" }}
        ></Img>
        <div className="bodyTextWrapper">
          <h3>Full Site Architecture</h3>
          <p>
            Once this base content hierarchy and flow was in place and approved
            by network stakeholders, we developed the following full information
            architecture for the platform.
          </p>
        </div>

        <Img
          alt="Information architecture of the full site, including topic pages, toolkits, resources, and user profile page"
          className="projectImage"
          fluid={data.solveiav1.childImageSharp.fluid}
          style={{ marginBottom: "0" }}
        ></Img>
        <p className="caption">
          We prioritized implementing functionality for the four forms of
          content we already knew were being used by content creators: text,
          image, video, and document downloads. Given the small number of
          initial resources, we chose to de-prioritize search functionality and
          focus instead on topic browsing.
        </p>

        <div className="bodyTextWrapper">
          <h2>Technical Architecture</h2>
          <p>
            After creating this information architecture, our visual designer
            continued creating the basic page layouts and design specifications,
            while I conducted technical research to determine the best
            configuration of development resources for the build. Beyond budget,
            timing, and resource constraints, many of my technical decisions
            were guided heavily by the needs of the Every Learner Everywhere
            Content Team.
          </p>
        </div>
        <Img
          alt="Technical architecture diagram showing a Nodejs web application, which interacts with Firebase backend resources and a content management system"
          className="projectImage"
          fluid={data.solvetecharchitecture.childImageSharp.fluid}
        ></Img>
        <div className="bodyTextWrapper">
          <h2>Content Workflow Design</h2>
          <p>
            The needs of our content team to <strong>work independently</strong>{" "}
            and <strong>manage a growing number of resources</strong> prompted
            me to include{" "}
            <a
              href="htttps://flamelink.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Flamelink.io
            </a>
            , a headless CMS, as part of our architecture.
          </p>
          <p>
            Flamelink allows content editors to add, edit, or remove resources
            from the platform without any intervention from developers, using
            the content workflow I designed below.
          </p>
        </div>
        <div className="photoGrid">
          <div className="photoGridElement">
            <Img
              alt="Part one of the content workflow diagram, where content editors update content in their preview environment and can see their changes on the preview site immediately"
              fluid={data.cmsworkflow1.childImageSharp.fluid}
            ></Img>
            <p className="caption">
              1. Content editors can add and update content in a "preview"
              environment
            </p>
          </div>
          <div className="photoGridElement">
            <Img
              alt="Part two of the content workflow diagram, where stakeholders can view and approve content on the preview site"
              fluid={data.cmsworkflow2.childImageSharp.fluid}
            ></Img>
            <p className="caption">
              2. Stakeholders can approve changes in the preview environment
              before users see them
            </p>
          </div>
          <div className="photoGridElement">
            <Img
              alt="Part three of the content workflow diagram, where a content manager can push the content changes to the production / live website"
              fluid={data.cmsworkflow3.childImageSharp.fluid}
            ></Img>
            <p className="caption">
              3. Content admin can push changes from preview environment to the
              live platform
            </p>
          </div>
          <div className="photoGridElement">
            <Img
              alt="Part four of the content workflow diagram, where users can view the new content on the live site"
              fluid={data.cmsworkflow4.childImageSharp.fluid}
            ></Img>
            <p className="caption">
              4. Users can view the content on the live platform
            </p>
          </div>
        </div>
        <div className="bodyTextWrapper">
          <h2 style={{ marginTop: "1rem" }}>Technical Program Management</h2>
          <p>
            After designing this technical architecture, I onboarded three
            developers from{" "}
            <a
              href="https://andela.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Andela
            </a>{" "}
            to the project. Over the next 3.5 months, I did ongoing work to:
          </p>
          <ul>
            <li>Write feature specifications and tasks for developers</li>
            <li>Scope, plan, and manage development sprints</li>
            <li>Ensure alignment between our UX and development efforts</li>
            <li>Report out to stakeholders on development progress</li>
          </ul>
          <p>
            After these 3.5 months of development, we were able to ship a
            version 1 of the platform and allow content editors to begin
            uploading, editing, and publishing content for public use. The
            following features were shipped as part of this initial version.
          </p>
        </div>
        <div className="photoGrid">
          <div className="photoGridElement">
            <Img
              alt="Home page of site, with topics that a user can browse through"
              fluid={data.homepage.childImageSharp.fluid}
            ></Img>
            <p className="caption">
              Home page containing welcome text and digital learning topics that
              a user can browse through.
            </p>
          </div>
          <div className="photoGridElement">
            <Img
              alt="Topic page of site, which contains a brief definition of the topic, followed by toolkits and resources that have been tagged to the topic"
              fluid={data.topicpage.childImageSharp.fluid}
            ></Img>
            <p className="caption">
              Topic pages, each containing a brief definition of the topic,
              followed by the toolkits and resources that have been tagged to
              the topic.
            </p>
          </div>
          <div className="photoGridElement">
            <Img
              alt="Toolkit page of the site, which contains an introduction, topics covered, resources, and surrounding reading"
              fluid={data.kitpage.childImageSharp.fluid}
            ></Img>
            <p className="caption">
              Toolkit pages, each containing a key question, topics covered in
              the kit, and a resource walkthrough.
            </p>
          </div>
          <div className="photoGridElement">
            <Img
              alt="Resource page of site, which contains an introduction, a video, and text"
              fluid={data.resourcepage.childImageSharp.fluid}
            ></Img>
            <p className="caption">
              Resource pages, each containing a title and introduction, and some
              combination of text, image, video, and/or documents to be
              downloaded.
            </p>
          </div>
          <div className="photoGridElement">
            <Img
              alt="User collection on the site, which contains a user's profile and the resources they have saved to their collection"
              fluid={data.usercollection.childImageSharp.fluid}
            ></Img>
            <p className="caption">
              User collection page, containing a user's profile and the
              resources and toolkits they have added to their collection.
            </p>
          </div>
        </div>
        <div className="bodyTextWrapper">
          <h2 style={{ marginTop: "1rem" }}>Ongoing Feature Development</h2>
          <div className="overview">
            <p>
              With the initial build of the platform in place, I continued to
              work closely with the Every Learner content team to identify
              additional interaction and content patterns that they wanted to
              support across their resources.
            </p>
          </div>
          <p> For each of these instances, I:</p>
          <ul>
            <li>
              Worked with the content team to understand the content need /
              pattern and potential use scenarios (both existing and future)
            </li>
            <li>
              Determined the priority and feasibility of implementing a new
              feature to meet this need
            </li>
            <li>
              Ran UX sprints with our designers to generate feature ideas and
              converge on a design to meet these needs
            </li>
            <li>
              Wrote the technical feature spec for our development partners
            </li>
            <li>Oversaw its development onto our production platform</li>
          </ul>
        </div>
        <h4 className="imageHeading">Updated Information Architecture</h4>
        <Img
          alt="Update site architecture diagram, showing the additions of Search, Tables, and User Assessments"
          className="projectImage"
          fluid={data.solveiav2.childImageSharp.fluid}
          style={{ margin: "0 auto" }}
        ></Img>
        <p className="caption">
          This updated IA integrates the search, assessment, and content type
          features that were added as a result of our iterative feature
          development work.
        </p>
        <div className="bodyTextWrapper">
          <h3>Search feature</h3>
          <p>
            <strong>User need:</strong> "I need a more flexible mechanism for
            finding content, especially if I'm looking for something specific,
            or I'm not sure what topic most applies to my question."
          </p>
          <p>
            <strong>Feature:</strong> Cross-site search, including quick inline
            results, as well as a full search results page with filtering.
          </p>
        </div>
        <div className="videoWrapper">
          <iframe
            title="Inline search results demo"
            src="https://www.youtube.com/embed/asKf4aen8iw?controls=0&vq=hd1020&autoplay=1&loop=1&playlist=asKf4aen8iw"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p className="caption" style={{ marginTop: "0" }}>
            Inline search results, available from anywhere on the site
          </p>
        </div>
        <div className="videoWrapper">
          <iframe
            title="Full search results page demo"
            src="https://www.youtube.com/embed/CFnSy72EnSQ?controls=0&vq=hd1020&autoplay=1&loop=1&playlist=CFnSy72EnSQ"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p className="caption" style={{ marginTop: "0" }}>
            Full search results page with filtering
          </p>
        </div>
        <div className="bodyTextWrapper">
          <h3>User assessment feature</h3>
          <p>
            <strong>Content team need:</strong> "I want to recommend content to
            users based on their responses to survey questions. I also want to
            make some of our download-and-print worksheets more interactive
            within the site itself."
          </p>
          <p>
            <strong>Feature:</strong> Interactive user assessment component,
            including a set of multiple choice and ranking scale questions.
            Outputs a written recommendation as well as recommended resources
            for users.
          </p>
        </div>
        <div className="videoWrapper">
          <iframe
            title="Self-assessment demo"
            src="https://www.youtube.com/embed/85-3m8jygfs?controls=0&vq=hd1020&autoplay=1&loop=1&playlist=85-3m8jygfs"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p className="caption" style={{ marginTop: "0" }}>
            User assessment feature in use. This assessment was created for
            institution faculty to help determine their readiness to use digital
            learning in their classroom.
          </p>
        </div>
        <div className="bodyTextWrapper">
          <h3>Tables, Pull Quotes, Callout Box features</h3>
          <p>
            <strong>Content team need:</strong> "Our text-heavy resources can
            get monotonous and repetitive. We need some additional content types
            to add variety and to arrange supplementary content to create a
            clear hierarchy for users."
          </p>
          <p>
            <strong>Features:</strong> Tables, for arranging relational
            information. Pull quotes, for emphasizing key points and breaking up
            content. Callout boxes, for highlighting supplementary pieces of
            content and adding contrast to sections.
          </p>
        </div>
        <div className="photoGrid">
          <div className="photoGridElement">
            <Img
              alt="Table within a resource, containing an accessibility approach matrix"
              fluid={data.table1.childImageSharp.fluid}
            ></Img>
            <p className="caption">
              Table feature in use. Tables have a standard formatting that is
              applied, but allow a range of rich text and images in their
              contents.
            </p>
          </div>
          <div className="photoGridElement">
            <Img
              alt="Table within a resource, containing information about project titles and their role in conducting impact studies"
              fluid={data.table2.childImageSharp.fluid}
            ></Img>
            <p className="caption">
              Table feature in use. Tables have a standard formatting that is
              applied, but allow a range of rich text and images in their
              contents.
            </p>
          </div>
          <div className="photoGridElement">
            <Img
              alt="Large pull quote text within an asset, containing a quote from a director on digital learning innovations"
              fluid={data.pullquote.childImageSharp.fluid}
            ></Img>
            <p className="caption">Pull quote feature in use</p>
          </div>
          <div className="photoGridElement">
            <Img
              alt="A blue callout box column within an asset, containing a side bar on Adaptive Courseware in Biology"
              fluid={data.calloutbox.childImageSharp.fluid}
            ></Img>
            <p className="caption">Callout box feature in use</p>
          </div>
        </div>
        <div className="bodyTextWrapper">
          <h2 style={{ marginTop: "1rem" }}>Reflections & Next Steps</h2>
          <p>
            Today, the platform is available live{" "}
            <a
              href="https://solve.everylearnereverywhere.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            . As the Every Learner Everywhere Network (and its body of
            resources) continues to grow over the next two years, I am excited
            to see the content mature into a set of actionable toolkits for
            faculty. Similarly, I believe that our iterative development process
            has set a standard for identifying and developing new content types
            that can make the content more interactive over time.
          </p>

          <p>
            Were I to do this project over, I would advocate heavily for the
            following:{" "}
          </p>
          <ul>
            <li>
              Waiting to build the platform until more of the content was in
              place or more rigorously planned for creation
            </li>
            <li>
              Additional project budget and time solely devoted to user research
            </li>
            <li>
              Client commitment to a robust content strategy that ensures some
              degree of uniformity (in length, purpose, or form) across new
              resources that are developed
            </li>
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
      <h6>User Research</h6>
      <h6>Information Architecture</h6>
      <h6>Technical Architecture</h6>
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
