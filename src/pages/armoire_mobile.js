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
      pocWalkthrough: file(relativePath: { eq: "Mobile-POC.mp4" }) {
        name,
        publicURL
      } 
      pocLogin: file(relativePath: { eq: "Mobile-POCLogin.mp4" }) {
        name,
        publicURL
      } 
      pocCloset: file(relativePath: { eq: "Mobile-POCCloset.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pocPDP: file(relativePath: { eq: "Mobile-POCPDP.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      technicalArchitecture: file(relativePath: { eq: "Mobile-TechnicalArchitectureTransparent.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
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
            Upon successful launch, the apps quickly became the primary platform for over 70% of Armoire's users engagement. Their improved UX and native capabilities also increased user retention. 
        </p>
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
      <div id="customerDemand" className="bodyTextWrapper intro">
        <h2>Context and Requirements</h2>
        <h3 className="subhead">Why build an app?</h3>
        <h4>Customer demand</h4>
        <p>
          When I conducted my first set of user interviews with Armoire members in May 2020, <em>every single interviewee</em> identified a mobile app as their number one ask for our tech team. This user mandate for a mobile app was clear and unrelenting across multiple customer surveys and interviews. Though Armoire's web app contained all of the core functionality needed to rent clothing, users wanted the workflow to be seemlessly integrated on their mobile devices.
        </p>
        <h4>Business imperative</h4>
        <p>
          The business case was also compelling. Key competitors in our market (Rent the Runway, Nuuly, Stitchfix) all had mobile apps. Delivering a mobile app would also unlock native-only capabilities that could increase user convenience, engagement, and ultimately, satisfaction.
        </p>  
      </div>
      <div id="mvpRequirements" className="bodyTextWrapper">
        <h3>MVP Requirements</h3>
        <p>To make the transition to mobile smooth for our members, the MVP would require building almost all of Armoire's existing functionality into the mobile app. The app would be able to use the same server APIs and protocol as our web app, so the technical effort was almost entirely on the client side.</p> 
      </div>
      <table>
          <thead>
            <tr>
              <th>Feature Area</th>
              <th>Required Features</th>
              <th>Existing Experience</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <th>Closet</th>
            <td>
              <ul>
                <li>Finding and saving styles</li>
                <li>Product list views (sections)</li>
                <li>Product details page</li>
              </ul>
            </td>
            <td>

            </td>
          </tr>
          <tr>
            <th>Search</th>
            <td>
              <ul>
                <li>
                  Search inventory and user-generated content
                </li>
              </ul>
            </td>
            <td></td>
          </tr>
          <tr>
            <th>Case</th>
            <td>
              <ul>
                <li>Selection and confirmation of rentals</li>
                <li>Package tracking</li>
                <li>Reviewing + returning items</li>
                <li>Purchasing items</li>
              </ul>
            </td>
            <td></td>
          </tr>
          <tr>
            <th>PWR Feed</th>
            <td>
              <ul>
                  <li>Viewing and sharing looks to the members-only style feed</li>
                  <li>Commenting and liking looks</li>
                  <li>Viewing other users' profiles</li>
                  <li>Updating personal profile</li>
                  <li>Following other members</li>
                </ul>
            </td>
            <td></td>
          </tr>
          <tr>
            <th>Notifications</th>
            <td>
              <ul>
                  <li>Notifications inbox</li>
                  <li>Notifications settings</li>
                  <li>Push Notification integration</li>
                </ul>
            </td>
            <td></td>
          </tr>
          <tr>
            <th>Account</th>
            <td>
              <ul>
                <li>Subscription updates</li>
                <li>Shipping and billing updates</li>
                <li>Return tracking</li>
                <li>Account and password management</li>
                <li>Rewards</li>
              </ul>
            </td>
            <td></td>
          </tr>
          </tbody>
        </table>
      <div className="bodyTextWrapper">
        <h2>Technical Design</h2>
        <h3>Investigation</h3>
        <p>
          My first goal was to determine an overarching framework and platform for the app's development.
        </p>
        <p>
          As a web developer with React experience, I held a strong bias towards building Android and iOS apps using a common <a href="https://reactnative.dev/" target="_blank">React Native</a> codebase. However, with 85% of Armoire's user base on iOS, I also did not want to rule out the potential advantages of writing a native app on iOS only.
        </p>
        <p>
          I spent the first two weeks of the project investigating the technical limitations of React Native by building a proof-of-concept prototype. I used the <a href="https://docs.expo.dev/workflow/already-used-react-native/#expo-managed-workflow" target="_blank">Expo Managed Framework</a> to minimize development startup time and to also answer questions about the advantages and limitations of using it longterm vs a bare React Native app. The table below lists the technical considerations I weighed after two weeks of research and prototyping.
        </p>
        </div>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>iOS Native (Swift)</th>
              <th>React Native </th>
              <th>React Native + Expo Managed</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <th>App startup speed and performance</th>
            <td>✅  Fastest</td>
            <td>⚠️  Slower than native ios app</td>
            <td>⚠️  Slower than native ios app</td>
          </tr>
          <tr>
            <th>App bundle size</th>
            <td>✅  Smallest</td>
            <td>⚠️  Larger</td>
            <td>⛔  Largest. All Expo packages are required in JS bundle.</td>
          </tr>
          <tr>
            <th>Native Code</th>
            <td>⛔  Required</td>
            <td>⚠️  Minimal. Primarily needed for configuring third-party packages, Push Notifications, and Deeplinks. Estimated 10% of work.</td>
            <td>✅  Not required. Completely abstracted away by Expo.</td>
          </tr>
          <tr>
            <th>Developer Learning Curve</th>
            <td>⛔  Highest</td>
            <td>⚠️  Minimal</td>
            <td>✅  Lowest</td>
          </tr>
          <tr>
            <th>Push Notification Support</th>
            <td>✅  Rich</td>
            <td>✅  Rich</td>
            <td>⛔  Minimal. Only supported through Expo Notifications Service.</td>
          </tr>
          <tr>
            <th>Process for builds and submissions</th>
            <td>⛔  Difficult. Would need to build manually each time, or invest in third-party build and submit provider.</td>
            <td>✅  Easy. Can use Expo Application Services with some initial configuration.</td>
            <td>✅  Easiest. Can use Expo Application Services with minimal configuration.</td>
          </tr>
          <tr>
            <th>Process for publishing small updates</th>
            <td>⛔  Time-consuming. App store submission and review required for every update.</td>
            <td>✅  Small updates that don’t impact JS packages can be published “over the air” with Expo, without app store review.</td>
            <td>✅  Small updates that don’t impact JS packages can be published “over the air” with Expo, without app store review.</td>
          </tr>
          <tr>
            <th>Android app</th>
            <td>⛔  Out of scope</td>
            <td>⚠️  Supported with minimal Android-only configuration and testing</td>
            <td>✅  Automatically supported with no extra work.</td>
          </tr>
          <tr>
            <th>Support for critical third-party packages (Stripe, Intercom)</th>
            <td>✅  Complete support</td>
            <td>✅  Near-complete support. Packages in development at time of investigation.</td>
            <td>⛔  Minimal. Any package that requires native configuration cannot be used.</td>
          </tr>
          </tbody>
        </table>
      <div className="bodyTextWrapper">
        <h3>Proof of Concept</h3>
        <p>
          The proof of concept I created had a basic login screen, tab navigation, a closet screen with horizontal sliding sections, and the bones of a product details page. I also tested out image upload, state management with mobx, font customizations, and using Sass as a styling preprocessor.
        </p>
      </div>
        <div className="mobileScreens">
        <video
            autoPlay={true}
            loop
            alt={""}
            className="mobileScreen"
            muted>
            <source 
              src={data.pocLogin.publicURL} 
              type="video/mp4" />
          </video> 
          <div className="mobileScreen">
            <Img
              alt="Basic product details page"
              fluid={data.pocPDP.childImageSharp.fluid}/>
          </div>
          <video
            autoPlay={true}
            loop
            alt={""}
            className="mobileScreen"
            muted>
            <source 
              src={data.pocWalkthrough.publicURL} 
              type="video/mp4" />
          </video> 
      </div>
      <div style={{ marginTop: 60 }} className="bodyTextWrapper" id="technicalArchitecture">
    
        <h3>Final Technical Architecture</h3>
        <p>Using my analysis and proof of concept I developed a high-level technical architecture for the app.</p>
        <p>
          Since I knew Armoire's target users largely used high-end devices on strong data connections, I decided that the speed and size advantages of a native-built iOS app were not worth its high development learning curve and slow update cadence. Additionally, building in React Native would mean that Armoire would be alone amongst its competitors in offering users an Android app.
        </p>
        <p>
          Though the Expo Managed workflow initially seemed like a winner based on its extremely low start-up cost and complete abstraction of all native code, I identified enough limitations in Expo's Push Notification infrastructure and support for critical third-party libraries (e.g. Stripe, Intercom) to decide that a bare React Native app was the best framework for this project.
        </p>
        <p>
          From this base, I used React Native documentation, forums, and community-vetted packages to outline a basic architecture (below) for the various required pieces of functionality in the MVP. 
        </p>
        
      </div>
      <Img
        style={{ maxWidth: 800, margin: '0 auto'}}
        alt=""
        fluid={data.technicalArchitecture.childImageSharp.fluid}/>
      <div id="informationArchitecture" className="bodyTextWrapper">
        <h2>Foundational UX Development</h2>
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
        <h2 className="sectionHeading">Final Product</h2>
        <p className="">The mobile apps were released in early April 2021 and are available for download on the <a
            href="https://apps.apple.com/us/app/armoire-style/id1560230748"
            target="_blank"
            rel="noopener noreferrer"
          >Apple</a> and <a href="https://play.google.com/store/apps/details?id=style.armoire.armoiremobile&hl=en_US&gl=US" target="_blank"
            rel="noopener noreferrer"
          >Google Play</a> stores. They have maintained 99.9% crash-free rates since launch and have received 4.5+ star reviews. </p>
      </div>
      <div className="bodyTextWrapper ">
        <h2 className="sectionHeading">Reflection</h2>
        <p>
          I'm extremely proud of what I was able to produce in six months. This project required me to learn extensively, prioritize rigorously, and communicate my decisions effectively. I learned to trust my own judgment and ability to figure things out. It allowed me to flex both my engineering and UX design muscles in a way that truly delighted our customer base.
        </p>
        <p>
          Quite ironically, when this project was first pitched, I was hesitant to take the lead on it. I'm extremely grateful that my manager pushed me to do so and provided support and guidance throughout; I would not be the technologist I am today otherwise!
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
