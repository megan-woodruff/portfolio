import React from "react"
import ProjectPage from "../components/projectPage"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import "../components/armoireMobile.scss"

const ArmoireMobile = () => {
  const data = useStaticQuery(graphql`
    query {
      header: file(relativePath: { eq: "armoire-mock.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      account: file(relativePath: { eq: "Mobile-Account.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      closet: file(relativePath: { eq: "Mobile-Closet.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      closetDetails: file(relativePath: { eq: "Mobile-ClosetDetails.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      closetDetailsVideo: file(relativePath: { eq: "Mobile-ClosetDetails.mp4" }) {
        name,
        publicURL
      }
      closetSections: file(relativePath: { eq: "Mobile-ClosetSections.mp4" }) {
        name,
        publicURL
      }
      closetSection: file(relativePath: { eq: "Mobile-ClosetSection.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      closetFilters: file(relativePath: { eq: "Mobile-Filters.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      search: file(relativePath: { eq: "Mobile-SearchResults.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      case: file(relativePath: { eq: "Mobile-MyCase.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      feed: file(relativePath: { eq: "Mobile-Feed.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      feedOverview: file(relativePath: { eq: "Mobile-FeedOverview.mp4" }) {
        name,
        publicURL
      }
      feedProfileWalkthrough: file(relativePath: { eq: "Mobile-Profile.mp4" }) {
        name,
        publicURL
      }
      feedProfile: file(relativePath: { eq: "Mobile-FeedProfile.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      feedProfile2: file(relativePath: { eq: "Mobile-FeedProfile1.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      notifications: file(relativePath: { eq: "Mobile-Notification.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
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
      description="Increasing member engagement and retention by delivering an easy-to-use, performant mobile app"
      stats={getStats()}
      imageSource={data.header.childImageSharp.fluid}
      imageAlt="Mock up of phones with screens showing Armoire's mobile app. Including a welcome screen, product details page, search results, and member feed."
    >
      <>
      <div className="bodyTextWrapper overview">
        <h2>Project Overview</h2>
        <p>
           In response to <a href="#customerDemand">strong user demand</a>, I led the end-to-end creation of Armoire's mobile app. In addition to developing an ambitious <a href="#mvpRequirements">MVP feature set</a>, I designed the app's <a href="#technicalArchitecture">technical architecture</a>, devised its <a href="#informationArchitecture">IA and navigation</a>, and built its <a href="#componentLibrary">UI component library</a>. Along the way, I learned to optimize JavaScript performance and React Native animations, and I pushed to improve existing product experiences whenever possible.
          </p>
          <p>
            Upon successful launch, the apps were quickly adopted by more than 60% of Armoire's user base and received overwhelmingly positive reviews. Their improved UX and native capabilities increased user engagement and retention. 
        </p>
      </div>
      <div id="customerDemand" className="bodyTextWrapper intro">
        <h2>Context and Requirements</h2>
        <h3 className="subhead">Why build an app?</h3>
        <p>
          When I conducted my first set of user interviews with Armoire members in May 2020, <em>every single interviewee</em> identified a mobile app as their number one ask for our tech team.
        </p>
        <p>
          This was not a coincidence; the user mandate for a mobile app was clear and unrelenting across multiple customer surveys and interviews. Though Armoire's web experience ...</p>
        <p>The business case was also compelling:
          <ul className="mt-3">
            <li>Key competitors in our market (Rent the Runway, Nuuly, Stitchfix) all had mobile apps available on iOS</li>
            <li>Mobile apps would unlock native-only capabilities that could increase user convenience and engagement</li>
          </ul>
        </p>  
      </div>
      <div id="mvpRequirements" className="bodyTextWrapper">
        <h3>MVP Requirements</h3>
        <p>To make the transition to mobile smooth for our members, I knew the MVP would require building almost all of Armoire's existing functionality into the mobile app. The app would be able to use the same server APIs and protocol as our web app, so the technical effort was almost entirely on the client side.</p> 
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Features</th>
              <th>Existing Experience</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <th>Closet</th>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>Search</th>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>Case</th>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>PWR Feed</th>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>Notifications</th>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>Account</th>
            <td></td>
            <td></td>
          </tr>
          </tbody>
        </table>
      </div>
      <div id="technicalArchitecture" className="bodyTextWrapper">
        <h2>Technical Design</h2>
        <h3>Investigation and Proof of Concept</h3>
        <p>
          As a web developer with React experience, I held a strong bias towards building Android and iOS apps using a common React Native codebase. However, with 85% of Armoire's user base on iOS, I also did not want to rule out the potential advantages of writing a native app on iOS only.
        </p>
        <p>
          I spent the first two weeks of the project investigating the technical limitations of React Native by building a proof-of-concept prototype. I used the Expo Managed Framework to minimize startup time and to answer questions about the advantages and limitations of the Expo Managed framework vs a bare React Native app. The table below lists the technical considerations I weighed after two weeks of research and prototyping.
          </p>
        <h3>Technical Architecture</h3>
      </div>
      <div id="informationArchitecture" className="bodyTextWrapper">
        <h2>Foundational UX Design</h2>
        <h3>Information Architecture and Navigation</h3>
        <h3>Component Library</h3>
      </div>
      <div id="performanceAnimations" className="bodyTextWrapper">
        <h2>Technical Challenges</h2>
        <h3>JavaScript Performance</h3>
        <h3>React Native Animations</h3>
        <h3>React Native Webviews</h3>
        {/* <h3></h3> */}
      </div>
      <div id="uxOptimizations" className="bodyTextWrapper">
        <h2>UX Improvements</h2>
        <h3>Auto-selecting size on product pages</h3>
        <h3>Feed item previews</h3>
        <h3>Sticky filter actions</h3>
        <h3>Account hierarchy</h3>
      </div>

      <div className="bodyTextWrapper overview">
        <h3 className="sectionHeading">Download the App</h3>
        <p className="">The released mobile apps are available for download on the <a
            href="https://apps.apple.com/us/app/armoire-style/id1560230748"
            target="_blank"
            rel="noopener noreferrer"
          >Apple</a> and <a href="https://play.google.com/store/apps/details?id=style.armoire.armoiremobile&hl=en_US&gl=US" target="_blank"
            rel="noopener noreferrer"
          >Google Play</a> stores. I will be publishing more soon on the development process, technical challenges, UX improvements, and outcomes. In the meantime, feel free to download and explore the app or check out the overview below.</p>
      </div>
      <div className="bodyTextWrapper">
        <h4 className="appSection first">My Closet</h4>
        <p>A user's closet contains their personalized recommendations, favorited styles, and seasonal sections curated by Armoire stylists.</p>
      </div>
      <div className="mobileScreens">
        <div className="mobileScreen">
          <Img
            alt="Closet home page containing horizontally scrolling sections"
            fluid={data.closet.childImageSharp.fluid}/>
        </div>
        <div className="mobileScreen">
          <Img
            alt="Closet section page, containing a two column layout of product thumbnails, with sort and filter buttons pinned to the bottom of the page"
            fluid={data.closetSection.childImageSharp.fluid}/>
        </div>
        <div className="mobileScreen">
          <Img
            alt="Closet Filters modal, which shows options for filtering by Category, Occasion, Season, Color, Pattern, and other style attributes"
            fluid={data.closetFilters.childImageSharp.fluid}/>
        </div>
        <div className="mobileScreen">
          <Img
            alt="Product Details page, which shows an image slider containing product images, product name and description, sizing information, and reviews"
            fluid={data.closetDetails.childImageSharp.fluid}/>
        </div>
      </div>
      <div className="walkthroughs">
        <video
          autoPlay={true}
          loop
          alt={"Closet section layouts. Home page containing horizontally sliding section previews, which link to full section pages with filters"}
          className="walkthroughVideo"
          muted>
          <source 
            src={data.closetSections.publicURL} 
            type="video/mp4" />
        </video> 
        <video
          autoPlay={true}
          loop
          alt={"Closet details page, containing product photos, reviews, sizes, and add to case button"}
          className="walkthroughVideo"
          muted>
          <source 
            src={data.closetDetailsVideo.publicURL} 
            type="video/mp4" />
        </video> 
      </div>
      <div className="bodyTextWrapper">
        <h4 className="appSection">My Case, Notifications, and Account</h4>
        <p>
          A user's "case" is where they choose the styles they are going to rent next, as well as where they keep track of styles they have with them or are returning.
        </p>
        <p>
          The Account section supports the business functionality of My Case, allowing the user to view and edit the features of their account that are less likely to change. 
        </p>
        <p>
          Notifications holds in-app notifications about a user's rentals (e.g. shipping status) as well as social notifications from the Feed. These notifications are also sent as Push Notifications to members who opt in.
        </p>
      </div>
      <div className="mobileScreens">
        <div className="mobileScreen">
          <Img
            alt=""
            fluid={data.case.childImageSharp.fluid}/>
        </div>
        <div className="mobileScreen">
          <Img
            alt=""
            fluid={data.notifications.childImageSharp.fluid}/>
        </div>
        <div className="mobileScreen">
          <Img
            alt=""
            fluid={data.account.childImageSharp.fluid}/>
        </div>
      </div>
      <div className="bodyTextWrapper">
        <h4 className="appSection">"PWR Feed"</h4>
        <p>The PWR Feed is a in-product community where users can post images of their rented styles and discover outfit inspiration from other members. Members can post looks, like and comment on posts, favorite tagged styles, and follow other members within the feed.</p>
        <p>
          <i>
          Note: All profiles shown in the images and videos below are either my own or those of members who have set their profiles to "public".
          </i>
        </p>
      </div>
      <div className="mobileScreens">
        <div className="mobileScreen">
          <Img
            alt=""
            fluid={data.feed.childImageSharp.fluid}/>
        </div>
        <div className="mobileScreen">
          <Img
            alt=""
            fluid={data.feedProfile2.childImageSharp.fluid}/>
        </div>
        <div className="mobileScreen">
          <Img
            alt=""
            fluid={data.feedProfile.childImageSharp.fluid}/>
        </div>
      </div>
      <div className="walkthroughs">
        <video
          autoPlay={true}
          loop
          alt={""}
          className="walkthroughVideo"
          muted>
          <source 
            src={data.feedOverview.publicURL} 
            type="video/mp4" />
        </video> 
        <video
          autoPlay={true}
          loop
          alt={""}
          className="walkthroughVideo"
          muted>
          <source 
            src={data.feedProfileWalkthrough.publicURL} 
            type="video/mp4" />
        </video> 
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
      <h6>UX Design</h6>
      <h6>Engineering</h6>
    </div>
    <div className="stat">
      <h5>Collaborators</h5>
      <h6>Tristan Rees, CTO</h6>
      <h6>Katrina Taylor, Head of UX</h6>
      <h6>Ryan Baerwolf, Full-Stack Engineer</h6>
    </div>
  </>
)

export default ArmoireMobile
