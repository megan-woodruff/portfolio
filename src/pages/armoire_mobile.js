import React from 'react'
import ArmoireMobileShowcaseScroller from '../components/ArmoireMobileShowcaseScroller'
import ProjectPage from '../components/projectPage'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'
import '../components/armoireMobile.scss'
import Emoji from '../components/Emoji'

const ArmoireMobile = () => {
  const data = useStaticQuery(graphql`
    query {
      animation1: file(relativePath: { eq: "Mobile-Animation1.mp4" }) {
        name
        publicURL
      }
      animation2: file(relativePath: { eq: "Mobile-Animation2.mp4" }) {
        name
        publicURL
      }
      animation3: file(relativePath: { eq: "Mobile-Animation3.mp4" }) {
        name
        publicURL
      }
      header: file(relativePath: { eq: "armoire-mock.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      accountMainOld: file(relativePath: { eq: "Mobile-AccountMainOld.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      accountMembershipOld: file(
        relativePath: { eq: "Mobile-MembershipOld.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      accountRewardsOld: file(relativePath: { eq: "Mobile-RewardsOld.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      caseOld: file(relativePath: { eq: "Mobile-CaseOld.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      casePurchaseOld: file(relativePath: { eq: "Mobile-PurchaseOld.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      caseReviewOld: file(relativePath: { eq: "Mobile-ReviewsOld.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      closetFilterSectionNew: file(
        relativePath: { eq: "Mobile-FilterSectionNew.mp4" }
      ) {
        name
        publicURL
      }
      closetFilterSectionOld: file(
        relativePath: { eq: "Mobile-FilterSectionOld.mp4" }
      ) {
        name
        publicURL
      }
      autoSizeSelect: file(relativePath: { eq: "Mobile-AutoSizeSelect.mp4" }) {
        name
        publicURL
      }
      autoSizeSelectFeed: file(
        relativePath: { eq: "Mobile-AutoSizeSelectFeed.mp4" }
      ) {
        name
        publicURL
      }
      closetHomeOld: file(relativePath: { eq: "Mobile-ClosetHomeOld.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      closetSectionOld: file(
        relativePath: { eq: "Mobile-ClosetSectionOld.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      feedOld: file(relativePath: { eq: "Mobile-PWRFeedOld.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      feedCommentOld: file(relativePath: { eq: "Mobile-FeedCommentOld.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      feedProfileOld: file(relativePath: { eq: "Mobile-FeedProfileOld.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      feedQuickViewBefore: file(
        relativePath: { eq: "Mobile-FeedQuickViewBefore.mp4" }
      ) {
        name
        publicURL
      }
      feedQuickView: file(relativePath: { eq: "Mobile-FeedQuickView.mp4" }) {
        name
        publicURL
      }
      navigationOldDesktop: file(
        relativePath: { eq: "Mobile-WebNavOldDesktopCondensed.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      navigationOldFlyout: file(
        relativePath: { eq: "Mobile-WebNavOldFlyout.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      navigationOldMobile: file(
        relativePath: { eq: "Mobile-WebNavOldMobile.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      navigationArchitecture1: file(
        relativePath: { eq: "Mobile-NavArch1.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      navigationArchitecture2: file(
        relativePath: { eq: "Mobile-NavArch2.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      navigationArchitecture3: file(
        relativePath: { eq: "Mobile-NavArch3.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      navigationArchitectureFinal: file(
        relativePath: { eq: "Mobile-NavArchFinal.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      navigationDeeplinks: file(
        relativePath: { eq: "Mobile-NavDeeplinks.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      searchOld: file(relativePath: { eq: "Mobile-SearchOld.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      searchResultsOld: file(
        relativePath: { eq: "Mobile-SearchResultsOld.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      performance1: file(relativePath: { eq: "Mobile-Perf1.mp4" }) {
        name
        publicURL
      }
      pocWalkthrough: file(relativePath: { eq: "Mobile-POC.mp4" }) {
        name
        publicURL
      }
      pocLogin: file(relativePath: { eq: "Mobile-POCLogin.mp4" }) {
        name
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
      closetPdpOld: file(relativePath: { eq: "Mobile-PdpOld.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      technicalArchitecture: file(
        relativePath: { eq: "Mobile-TechnicalArchitectureTransparent.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      notificationsOld: file(
        relativePath: { eq: "Mobile-NotificationsOld.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      notificationsOld2: file(
        relativePath: { eq: "Mobile-NotificationsOld1.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      webview1: file(relativePath: { eq: "Mobile-Webview1.mp4" }) {
        name
        publicURL
      }
      webview2: file(relativePath: { eq: "Mobile-Webview2.png" }) {
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
            In response to <a href="#customerDemand">strong user demand</a>, I
            led the end-to-end creation of Armoire's mobile app. In addition to
            developing about 80% of its{' '}
            <a href="#mvpRequirements">MVP feature set</a>, I designed the app's{' '}
            <a href="#technicalArchitecture">technical architecture</a>, devised
            its <a href="#informationArchitecture">IA and navigation</a>, and
            built its UI component library. Along the way, I learned to optimize
            JavaScript performance and React Native animations, and I pushed to
            {'  '}
            <a href="#uxImprovements">improve existing product</a> experiences
            whenever possible.
          </p>
          <p>
            Upon <a href="#launch">successful launch</a>, the apps quickly
            became the primary platform for over 75% of Armoire's user
            engagement. Their improved UX and native capabilities also increased
            user retention.
          </p>
        </div>

        <ArmoireMobileShowcaseScroller />

        <div id="customerDemand" className="bodyTextWrapper intro">
          <h2>Context and Requirements</h2>
          <h3 className="subhead">Why build an app?</h3>
          <h4>Customer demand</h4>
          <p>
            When I conducted my first set of user interviews with Armoire
            members in May 2020, <em>every single interviewee</em> identified a
            mobile app as their number one ask for our tech team. This user
            mandate for a mobile app was clear and unrelenting across multiple
            customer surveys and interviews. Though Armoire's web app contained
            all of the core functionality needed to rent clothing, users wanted
            the workflow to be seemlessly integrated on their mobile devices.
          </p>
          <h4>Business imperative</h4>
          <p>
            The business case was also compelling. Key competitors in our market
            (Rent the Runway, Nuuly, Stitchfix) all had mobile apps. Delivering
            a mobile app would also unlock native-only capabilities that could
            increase user convenience, engagement, and ultimately, satisfaction.
          </p>
        </div>
        <div id="mvpRequirements" className="bodyTextWrapper idNavigationInset">
          <h3>MVP Requirements</h3>
          <p>
            To make the transition to mobile smooth for our members, the MVP
            would require building almost all of Armoire's existing
            functionality into the mobile app. The app would be able to use the
            same server APIs and protocol as our web app, so the technical
            effort was almost entirely on the client side.
          </p>
        </div>
        <table>
          <thead>
            <tr>
              <th>Feature Area</th>
              <th>Required Features</th>
              <th>Previous Experience on Mobile Web</th>
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
                <div className="mobileScreensTable">
                  <div className="mobileScreenTable">
                    <Img
                      alt="Snapshot of mobile web closet home page containing horizontally scrolling sections and welcome message."
                      fluid={data.closetHomeOld.childImageSharp.fluid}
                    />
                  </div>
                  <div className="mobileScreenTable">
                    <Img
                      alt="Snapshot of mobile web closet section page titled 'Your Favorites'. Dropdown to toggle availability and small filter button up top. Two column list view of products."
                      fluid={data.closetSectionOld.childImageSharp.fluid}
                    />
                  </div>
                  <div className="mobileScreenTable">
                    <Img
                      alt="Snapshot of mobile web product details page containing product's brand name, name, star rating, photo scroller, dropdown size selector, and add to case button."
                      fluid={data.closetPdpOld.childImageSharp.fluid}
                    />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th>Search</th>
              <td>
                <ul>
                  <li>Search inventory and user-generated content</li>
                </ul>
              </td>
              <td>
                <div className="mobileScreensTable">
                  <div className="mobileScreenTable">
                    <Img
                      alt="Snapshot of mobile web search bar at the top of the page. Text field is empty, with 5 suggested searches overlayed underneath."
                      fluid={data.searchOld.childImageSharp.fluid}
                    />
                  </div>
                  <div className="mobileScreenTable">
                    <Img
                      alt="Snapshot of mobile web search results. Search is for Spring blazer and shows an availability dropdown, filter entrypoint, and start of two column list view."
                      fluid={data.searchResultsOld.childImageSharp.fluid}
                    />
                  </div>
                </div>
              </td>
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
              <td>
                <div className="mobileScreensTable">
                  <div className="mobileScreenTable">
                    <Img
                      alt="Snapshot of mobile web case 'flyout'. Flyout contains instructions to add items to case, as well as tabs for selected, with, and returning items."
                      fluid={data.caseOld.childImageSharp.fluid}
                    />
                  </div>
                  <div className="mobileScreenTable">
                    <Img
                      alt="Mobile web snapshot of view within Case to purchase an item. Item purchase details, including total and payment information are shown."
                      fluid={data.casePurchaseOld.childImageSharp.fluid}
                    />
                  </div>
                  <div className="mobileScreenTable">
                    <Img
                      alt="Mobile web snapshot of view to select the items to review."
                      fluid={data.caseReviewOld.childImageSharp.fluid}
                    />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th>PWR Feed</th>
              <td>
                <ul>
                  <li>
                    Viewing and sharing looks to the members-only style feed
                  </li>
                  <li>Commenting and liking looks</li>
                  <li>Viewing other users' profiles</li>
                  <li>Updating personal profile</li>
                  <li>Following other members</li>
                </ul>
              </td>
              <td>
                <div className="mobileScreensTable">
                  <div className="mobileScreenTable">
                    <Img
                      alt="Snapshot of mobile web PWR Feed. First post shows a blonde woman taking a mirror selfie of her rented cheetah print skirt."
                      fluid={data.feedOld.childImageSharp.fluid}
                    />
                  </div>
                  <div className="mobileScreenTable">
                    <Img
                      alt="Snapshot of mobile web feed item. Post shows a woman wearing a blue dress. The ability to leave a comment is shown with a text input pinned to the bottom of the page."
                      fluid={data.feedCommentOld.childImageSharp.fluid}
                    />
                  </div>
                  <div className="mobileScreenTable">
                    <Img
                      alt="Snapshot of mobile web feed profile. Profile shows a woman with brown hair, profile details, as well as sliding sections containing posted looks, rental history, sizes, and style stats."
                      fluid={data.feedProfileOld.childImageSharp.fluid}
                    />
                  </div>
                </div>
              </td>
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
              <td>
                <div className="mobileScreensTable">
                  <div className="mobileScreenTable">
                    <Img
                      alt="Snapshot of mobile web notifications input. Notifications are listed in a vertically scrolling view."
                      fluid={data.notificationsOld2.childImageSharp.fluid}
                    />
                  </div>
                  <div className="mobileScreenTable">
                    <Img
                      alt="Snapshot of mobile web notifications settings. Settings for receipt of membership, feed, and announcement notifications are shown."
                      fluid={data.notificationsOld.childImageSharp.fluid}
                    />
                  </div>
                </div>
              </td>
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
              <td>
                <div className="mobileScreensTable">
                  <div className="mobileScreenTable">
                    <Img
                      alt="Snapshot of mobile web account overview page, with basic information about the user's membership, billing, and shipping selections."
                      fluid={data.accountMainOld.childImageSharp.fluid}
                    />
                  </div>
                  <div className="mobileScreenTable">
                    <Img
                      alt="Snapshot of mobiel web membership page. Shows selected plan, as well as options to skip a month and cancel membership."
                      fluid={data.accountMembershipOld.childImageSharp.fluid}
                    />
                  </div>
                  <div className="mobileScreenTable">
                    <Img
                      alt="Snapshot of mobile web account rewards page. Shows tabs for available, redeemed, and expired rewards."
                      fluid={data.accountRewardsOld.childImageSharp.fluid}
                    />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="bodyTextWrapper">
          <h2>Technical Design</h2>
          <h3>Investigation</h3>
          <p>
            My first goal was to determine an overarching framework and platform
            for the app's development.
          </p>
          <p>
            As a web developer with React experience, I held a strong bias
            towards building Android and iOS apps using a common{' '}
            <a
              href="https://reactnative.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Native
            </a>{' '}
            codebase. However, with 85% of Armoire's user base on iOS, I also
            did not want to rule out the potential advantages of writing a
            native app on iOS only.
          </p>
          <p>
            I spent the first two weeks of the project investigating the
            technical limitations of React Native by building a proof-of-concept
            prototype. I used the{' '}
            <a
              href="https://docs.expo.dev/workflow/already-used-react-native/#expo-managed-workflow"
              target="_blank"
              rel="noopener noreferrer"
            >
              Expo Managed Framework
            </a>{' '}
            to minimize development startup time and to also answer questions
            about the advantages and limitations of using it longterm vs a bare
            React Native app. The table below lists the technical considerations
            I weighed after two weeks of research and prototyping.
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
              <td>
                <Emoji variant="great" /> Fastest
              </td>
              <td>
                <Emoji variant="okay" /> Slower than native ios app
              </td>
              <td>
                <Emoji variant="okay" /> Slower than native ios app
              </td>
            </tr>
            <tr>
              <th>App bundle size</th>
              <td>
                <Emoji variant="great" /> Smallest
              </td>
              <td>
                <Emoji variant="okay" /> Larger
              </td>
              <td>
                <Emoji variant="bad" /> Largest. All Expo packages are required
                in JS bundle.
              </td>
            </tr>
            <tr>
              <th>Native Code</th>
              <td>
                <Emoji variant="bad" /> Required
              </td>
              <td>
                <Emoji variant="okay" /> Minimal. Primarily needed for
                configuring third-party packages, Push Notifications, and
                Deeplinks. Estimated 10% of work.
              </td>
              <td>
                <Emoji variant="great" /> Not required. Completely abstracted
                away by Expo.
              </td>
            </tr>
            <tr>
              <th>Developer Learning Curve</th>
              <td>
                <Emoji variant="bad" /> Highest
              </td>
              <td>
                <Emoji variant="okay" /> Minimal
              </td>
              <td>
                <Emoji variant="great" /> Lowest
              </td>
            </tr>
            <tr>
              <th>Push Notification Support</th>
              <td>
                <Emoji variant="great" /> Rich
              </td>
              <td>
                <Emoji variant="great" /> Rich
              </td>
              <td>
                <Emoji variant="bad" /> Minimal. Only supported through Expo
                Notifications Service.
              </td>
            </tr>
            <tr>
              <th>Process for builds and submissions</th>
              <td>
                <Emoji variant="bad" /> Difficult. Would need to build manually
                each time, or invest in third-party build and submit provider.
              </td>
              <td>
                <Emoji variant="great" /> Easy. Can use Expo Application
                Services with some initial configuration.
              </td>
              <td>
                <Emoji variant="great" /> Easiest. Can use Expo Application
                Services with minimal configuration.
              </td>
            </tr>
            <tr>
              <th>Process for publishing small updates</th>
              <td>
                <Emoji variant="bad" /> Time-consuming. App store submission and
                review required for every update.
              </td>
              <td>
                <Emoji variant="great" /> Small updates that don’t impact JS
                packages can be published “over the air” with Expo, without app
                store review.
              </td>
              <td>
                <Emoji variant="great" /> Small updates that don’t impact JS
                packages can be published “over the air” with Expo, without app
                store review.
              </td>
            </tr>
            <tr>
              <th>Android app</th>
              <td>
                <Emoji variant="bad" /> Out of scope
              </td>
              <td>
                <Emoji variant="okay" /> Supported with minimal Android-only
                configuration and testing
              </td>
              <td>
                <Emoji variant="great" /> Automatically supported with no extra
                work.
              </td>
            </tr>
            <tr>
              <th>
                Support for critical third-party packages (Stripe, Intercom)
              </th>
              <td>
                <Emoji variant="great" /> Complete support
              </td>
              <td>
                <Emoji variant="great" /> Near-complete support. Packages in
                development at time of investigation.
              </td>
              <td>
                <Emoji variant="bad" /> Minimal. Any package that requires
                native configuration cannot be used.
              </td>
            </tr>
          </tbody>
        </table>
        <div className="bodyTextWrapper">
          <h3>Proof of Concept</h3>
          <p>
            The proof of concept I created had a basic login screen, tab
            navigation, a closet screen with horizontal sliding sections, and
            the bones of a product details page. I also tested out image upload,
            state management with mobx, font customizations, and using Sass as a
            styling preprocessor.
          </p>
        </div>
        <div className="mobileScreens">
          <video
            autoPlay={true}
            loop
            alt={
              'Walkthrough of basic login screen with Armoire logo, and text inputs for email and password. User logs in and is taken to closet home screen containing sliding sections.'
            }
            className="mobileScreen"
            muted
          >
            <source src={data.pocLogin.publicURL} type="video/mp4" />
          </video>
          <div className="mobileScreen">
            <Img
              alt="Snapshot of very basic product details page, containing product brand name, name, add to case button, and some basic details about the item."
              fluid={data.pocPDP.childImageSharp.fluid}
            />
          </div>
          <video
            autoPlay={true}
            loop
            alt={
              'Walkthrough of horizontally sliding closet sections on the home screen. User clicks on an a product and is taken to the basic product details page.'
            }
            className="mobileScreen"
            muted
          >
            <source src={data.pocWalkthrough.publicURL} type="video/mp4" />
          </video>
        </div>
        <div
          className="bodyTextWrapper idNavigationInset"
          id="technicalArchitecture"
        >
          <h3>Technical Architecture</h3>
          <p>
            Using my analysis and proof of concept I developed a high-level
            technical architecture for the app.
          </p>
          <p>
            Since I knew Armoire's target users largely used high-end devices on
            strong data connections, I decided that the speed and size
            advantages of a native-built iOS app were not worth its high
            development learning curve and slow update cadence. Additionally,
            building in React Native would mean that Armoire would be alone
            amongst its competitors in offering users an Android app.
          </p>
          <p>
            Though the Expo Managed workflow initially seemed like a winner
            based on its extremely low start-up cost and complete abstraction of
            all native code, I identified enough limitations in Expo's Push
            Notification infrastructure and support for critical third-party
            libraries (e.g. Stripe, Intercom) to decide that a bare React Native
            app was the best framework for this project.
          </p>
          <p>
            From this base, I used React Native documentation, forums, and
            community-vetted packages to outline a basic architecture (below)
            for the various required pieces of functionality in the MVP.
          </p>
        </div>
        <Img
          style={{ maxWidth: 800, margin: '0 auto' }}
          alt="Technical architecture overview for the mobile app. Technologies depicted include React Native, Expo, Yarn, React Navigation, Sass, Prop Types, Mobx, Intercom, Stripe, Sentry, Segment, and OneSignal."
          fluid={data.technicalArchitecture.childImageSharp.fluid}
        />
        <div id="informationArchitecture" className="bodyTextWrapper">
          <h2>Foundational UX Development</h2>
          <p>
            For the first month of the project, I focused on increasing the
            total surface area of the app by developing its information
            architecture and global UI components.
          </p>
          <h3>Information Architecture and Navigation</h3>
          <p>
            One of the first UX challenges I had to tackle was determining how
            to translate the existing web app’s navigation structure into a
            mobile app hierarchy with only 5 main tabs.
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '24px auto',
          }}
        >
          <div style={{ width: '65%' }}>
            <Img
              style={{ margin: 16 }}
              alt="Snapshot of the navigation bar on the Armoire web desktop app. Contains entries for Search, Closet, Feed, Case, Notifications, Referrals, and Account"
              fluid={data.navigationOldDesktop.childImageSharp.fluid}
            />
            <Img
              style={{ margin: 16 }}
              alt="Snapshot of navigation bar on Armoire web mobile. Shows icons for Search, Feed, Case, and Notifications, as well as hamburger menu button."
              fluid={data.navigationOldMobile.childImageSharp.fluid}
            />
          </div>
          <Img
            style={{ width: '22%', margin: 16 }}
            alt="Snapshot of flyout menu on Armoire web mobile. Vertically scrolling entries for Closet, Feed, Style Profile, Rental History, Account, Help, Referrals, Shop, Year in Review, and Sign Out"
            fluid={data.navigationOldFlyout.childImageSharp.fluid}
          />
        </div>
        <div className="bodyTextWrapper">
          <p>
            {' '}
            As the screen grabs above demonstrate, the existing website
            hierarchy was extremely flat and shallow, which didn’t lend itself
            well to the limited real estate of a mobile app. The diagram below
            represents the core sections, screens, and actions I identified in
            the existing web app hierarchy.
          </p>
        </div>
        <div style={{ margin: '48px auto', textAlign: 'center' }}>
          <h5 style={{ marginBottom: 8 }}>Step 1: Identify IA of web app</h5>
          <Img
            alt="Diagram containing the web information architecture of Armoire. Entries for Closet, Search, Case, Feed, Notifications, Referrals, Style Profile, and Account."
            fluid={data.navigationArchitecture1.childImageSharp.fluid}
          />
        </div>

        <div className="bodyTextWrapper">
          <p>
            I realized that certain “flows”, for example, reviewing or
            purchasing an item, would actually be best performed{' '}
            <em>without</em> the app tab bar present, to increase user focus on
            the task and decrease the chance of accidentally leaving before the
            action is complete. Those flows are highlighted above in teal.
          </p>
          <p>
            In the second diagram I grouped those flows together into one
            “Modals” object, with the idea that these screens would live outside
            or “on top” of the tab navigator and be opened globally throughout
            the app. I also moved Referrals and Style Profile within the account
            section, as they weren't deep enough to warrant their own section.
            This reduced the number of contenders for the 5 spots in the tab
            navigator down to 6.
          </p>
        </div>
        <div style={{ margin: '48px auto', textAlign: 'center' }}>
          <h5 style={{ marginBottom: 8 }}>
            Step 2: Group modals and consolidate account
          </h5>
          <Img
            alt="Second iteration of information architecture, where account has been consolidated to include Style Profile and Referrals, and a modals section has been created to contain globally-accessible user flows."
            fluid={data.navigationArchitecture2.childImageSharp.fluid}
          />
        </div>

        <div className="bodyTextWrapper">
          <p>
            From here, I worked in the opposite direction, asking: when is it{' '}
            <em>most</em> important that a user have access to the tab bar?
            Other than initial login, I determined that this was right after a
            user adds an item to their case. At this point, a user needs visual
            confirmation that the item was added, and an understanding of where
            to view their “case” of selected items.
          </p>
          <p>
            Due to the many connections between product pages, feed items, and
            user profiles, 5 of the 6 remaining app areas would need to navigate
            to a product page. These connections are shown below, followed by an
            updated diagram that highlights their presence in the information
            architecture.
          </p>
        </div>

        <Img
          style={{ margin: '48px auto' }}
          alt="Screenshots and annotation outlining the various connections between product details, feed item, and user profile pages in the web app."
          fluid={data.navigationDeeplinks.childImageSharp.fluid}
        />
        <div style={{ margin: '48px auto', textAlign: 'center' }}>
          <h5 style={{ marginBottom: 8 }}>
            Step 3: Identify connections to product page
          </h5>
          <Img
            alt="Information architecture diagram identifying these same connections between product details, feed items, and user profiles."
            fluid={data.navigationArchitecture3.childImageSharp.fluid}
          />
        </div>

        <div className="bodyTextWrapper">
          <p>
            Since Account was the only area that didn't require deeplinking to
            product pages, and because its actions would be completed least
            often, I opted to also move it “above” the tab navigator. To make
            sure it would still be visible to users, I added links to it in the
            Closet home page, Closet section page, and Case home page headers.
          </p>
        </div>
        <div style={{ margin: '48px auto', textAlign: 'center' }}>
          <h5>Step 4: Finalize navigation + information architecture</h5>
          <Img
            style={{ maxWidth: 800, margin: '0 auto' }}
            alt="Final version of information architecture, with account and modals moved 'above' the tab navigator, which contains closet, search, case, feed, and notifications. All of the tab navigators contain a copy of the product details page."
            fluid={data.navigationArchitectureFinal.childImageSharp.fluid}
          />
        </div>
        <div id="performanceAnimations" className="bodyTextWrapper">
          <h2>Technical Challenges</h2>
          <p>
            I had never used React Native or built a mobile app prior to this
            project; it naturally came with a huge number of technical hurdles
            and learnings.
          </p>
          <h3>JavaScript Performance</h3>
          <p>
            Compared to ReactJS, one of the biggest differences I discovered in
            React Native was the impact of unnecessary re-renders and JS
            performance oversights on the usability of the app. I had to debug
            rigorously and implement best practices, including performance
            optimizers like React Native FlatList, useMemo, useCallback, and
            props comparison to avoid unnecessary re-renders of components.
            Additionally, I learned to use the React Native InteractionManager
            to delay the start of JS-intensive tasks until after navigation
            transitions completed, in order to keep the perceived performance of
            the app high.
          </p>
          <div className="mobileScreens">
            <div className="mobileScreenWithCopy">
              <video
                autoPlay={true}
                loop
                alt={
                  'Walkthrough video showing a user clicking from a horizontally scrolling closet section into a list view'
                }
                className="walkthroughVideo"
                muted
              >
                <source src={data.performance1.publicURL} type="video/mp4" />
              </video>
              <h5 className="screenCaption">
                React Native Flatlist was essential for creating performant
                product list views, as were PureComponent and useMemo.
                runAfterInteractions facilitated a quick transition to and from
                each list view, by delaying data load.
              </h5>
            </div>
            <div className="mobileScreenWithCopy">
              <video
                autoPlay={true}
                loop
                alt={
                  'Walkthrough showing a user clicking the Filter button from a vertically scrolling list view. The filter modal immediately pops up and shows placeholder content. Shortly after, all of the filter options load.'
                }
                className="walkthroughVideo"
                muted
              >
                <source
                  src={data.closetFilterSectionNew.publicURL}
                  type="video/mp4"
                />
              </video>
              <h5 className="screenCaption">
                Modal screens, such as the list view filter modal, were
                lazy-loaded to increase transition performance. Placeholder
                components were rendered while loaded to decrease perceived idle
                time.
              </h5>
            </div>
          </div>
          <h3>React Native Animations</h3>
          <p>
            CSS animations are not supported in React Native. To build core
            micro-interactions in the mobile app, I had to learn how to use the
            Animated framework in React Native. These animations could be
            offloaded to the native driver in order to keep the single-threaded
            JS queue clear, but in order to do so, I had to only animate
            native-supported properties (e.g. opacity, transform).
          </p>
          <div className="mobileScreens">
            <div className="mobileScreenWithCopy">
              <video
                autoPlay={true}
                loop
                alt={
                  'Walkthrough of user clicking the heart icon on product thumbnails. This expands to reveal the option to favorite or dislike an item. Once one of those options is clicked, the options collapse.'
                }
                className="walkthroughVideo"
                muted
              >
                <source src={data.animation1.publicURL} type="video/mp4" />
              </video>
            </div>
            <div className="mobileScreenWithCopy">
              <video
                autoPlay={true}
                loop
                alt={
                  'Add to Case button on product page is clicked. Text changes to "So stylish!" as the case icon expands and contracts, and a check mark animates in. The button then changes to white and says "Remove from Case"'
                }
                className="walkthroughVideo"
                muted
              >
                <source src={data.animation2.publicURL} type="video/mp4" />
              </video>
            </div>
            <div className="mobileScreenWithCopy">
              <video
                autoPlay={true}
                loop
                alt={
                  'Pull to refresh animation on the feed home screen. Users pulls down at the top of the content and a loading indicator circles for 1.5 seconds, then disappears.'
                }
                className="walkthroughVideo"
                muted
              >
                <source src={data.animation3.publicURL} type="video/mp4" />
              </video>
            </div>
          </div>
          <h3>Working with WebViews</h3>
          <p>
            Certain features required using React Native Webviews to render
            existing web application screens or custom HTML and JS within the
            native app. In particular, I used Webviews to create a
            security-compliant native Stripe component (before Stripe released a
            React Native package), and to render the web version of our
            onboarding style quiz, which I didn't want to spend time duplicating
            for an app that would prioritize the needs of subscribed members.
          </p>
          <div className="mobileScreens">
            <div className="mobileScreenWithCopy">
              <h5 className="screenCaption">Stripe Webview</h5>
              <video
                autoPlay={true}
                loop
                alt={
                  'Stripe webview walkthrough. User clicks "Add Card" and an "Update Payment Method" modal opens. User types in payment card details and clicks "Update"'
                }
                className="walkthroughVideo"
                muted
              >
                <source src={data.webview1.publicURL} type="video/mp4" />
              </video>
            </div>
            <div className="">
              <h5 className="screenCaption">Style Quiz Webview</h5>
              <div className="mobileScreen">
                <Img
                  alt="Snapshot of 'Complete your style profile' modal, which shows a question in the web style quiz rendered natively in the mobile app."
                  fluid={data.webview2.childImageSharp.fluid}
                />
              </div>
            </div>
          </div>
        </div>
        <div id="uxImprovements" className="bodyTextWrapper idNavigationInset">
          <h2>UX Improvements</h2>
          <p>
            I used the development of existing product in a new codebase as an
            opportunity to improve UX whenever possible. Below are a few
            examples where I used customer feedback and prototyping to make
            thoughtful product improvements.
          </p>
          <h3>Style list view optimizations</h3>
          <p>
            In our web product list views, it was easy for users to lose their
            browsing context and forgot about the filter actions available to
            them. On the mobile app, I added sticky filter and sort buttons, as
            well as a retractable page header which was hidden and revealed
            based on the scroll state.
          </p>
        </div>
        <div className="mobileScreens">
          <div>
            <h5 className="screenCaption">Old list view (mobile web)</h5>
            <video
              autoPlay={true}
              loop
              alt={
                'Walkthrough of old mobile web product list view. As user scrolls, the filter actions scroll away and are not accessible.'
              }
              className="walkthroughVideo"
              muted
            >
              <source
                src={data.closetFilterSectionOld.publicURL}
                type="video/mp4"
              />
            </video>
          </div>
          <div>
            <h5 className="screenCaption">New list view (mobile app)</h5>
            <video
              autoPlay={true}
              loop
              alt={
                'Walkthrough of native app list view. As a user scrolls, the sort and filter buttons stay sticky to the bottom of the screen, and can be pushed from there to open up filter options'
              }
              className="walkthroughVideo"
              muted
            >
              <source
                src={data.closetFilterSectionNew.publicURL}
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        <div className="bodyTextWrapper">
          <h3>Feed product previews</h3>
          <p>
            In the web version of the Style Feed, users had to navigate to a
            product page to get basic information about a product and add it to
            their Case. This process of navigating back and forth between the
            feed and product pages was exhausting and likely decreasing user
            satisfaction with the feed.
          </p>
          <p>
            In the mobile app, I added a product preview drawer that allows
            users to see more information about an item when they click on it,
            without losing the browsing context of the Feed.
          </p>
        </div>
        <div className="mobileScreens">
          <div>
            <h5 className="screenCaption">
              Previous feed navigation (mobile web)
            </h5>
            <video
              autoPlay={true}
              loop
              alt={
                'Walkthrough of the old mobile web feed. User clicks into to multiple product pages, views them, then navigates back to the feed.'
              }
              className="walkthroughVideo"
              muted
            >
              <source
                src={data.feedQuickViewBefore.publicURL}
                type="video/mp4"
              />
            </video>
          </div>
          <div>
            <h5 className="screenCaption">Feed quick view (mobile app)</h5>
            <video
              autoPlay={true}
              loop
              alt={
                'Walkthrough of new native app feed. User clicks into product, which opens a drawer quick view of the item. User adds a size medium to their case, then clicks back onto the feed.'
              }
              className="walkthroughVideo"
              muted
            >
              <source src={data.feedQuickView.publicURL} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="bodyTextWrapper">
          <h3>Auto-selecting user sizes</h3>
          <p>
            Even though all Armoire users complete a 15-minute style and size
            quiz when signing up, that information was not always being used to
            save users time in the product. I added functionality to pre-select
            a user's size on their profile when viewing product pages and
            product previews.
          </p>
        </div>
        <div className="mobileScreens">
          <div>
            <h5 className="screenCaption">Autoselect on product page</h5>
            <video
              autoPlay={true}
              loop
              alt={
                'Walkthrough of automatic size selection. User clicks into a floral dress and her recommended Size S is automatically selected.'
              }
              className="walkthroughVideo"
              muted
            >
              <source src={data.autoSizeSelect.publicURL} type="video/mp4" />
            </video>
          </div>
          <div>
            <h5 className="screenCaption">Autoselect on product preview</h5>
            <video
              autoPlay={true}
              loop
              alt={
                'Walkthrough of automatic size selection on the feed product preview. User clicks open the product preview for an item and a recommended Size XS is already selected for her'
              }
              className="walkthroughVideo"
              muted
            >
              <source
                src={data.autoSizeSelectFeed.publicURL}
                type="video/mp4"
              />
            </video>
          </div>
        </div>

        <div id="launch" className="bodyTextWrapper overview idNavigationInset">
          <h2 className="sectionHeading">Launch and Reception</h2>
          <p className="">
            The mobile apps were released in early April 2021 and are available
            for download on the{' '}
            <a
              href="https://apps.apple.com/us/app/armoire-style/id1560230748"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apple
            </a>{' '}
            and{' '}
            <a
              href="https://play.google.com/store/apps/details?id=style.armoire.armoiremobile&hl=en_US&gl=US"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Play
            </a>{' '}
            stores. They have maintained 99.9% crash-free rates since launch and
            have received an average rating of 4.9 / 5.
          </p>
        </div>
        <div className="bodyTextWrapper">
          <p>
            Qualitatively, Armoire users have expressed immense satisfaction
            with the mobile app, and many have even sent me personal
            "thank-yous" for the work. Quantitatively, the results are similarly
            encouraging.
          </p>
          <ul>
            <li>
              Members who use the mobile app in their first 30 days are 28% more
              likely to continue their membership after their trial, and 15%
              more likely to be retained month to month
            </li>
            <li>83% of all Style Feed engagement occurs on the mobile app</li>
            <li>
              75% of <em>all</em> active user engagement occurs on the mobile
              app
            </li>
          </ul>
        </div>
        <div className="bodyTextWrapper ">
          <h2 className="sectionHeading">Reflection</h2>
          <p>
            I'm extremely proud of what I was able to produce in six months.
            This project required me to learn extensively, prioritize
            rigorously, and communicate my decisions effectively. It allowed me
            to flex both my engineering and UX design muscles towards an outcome
            that truly delighted Armoire's customer base.
          </p>
          <p>
            Quite ironically, when this project was first pitched, I was
            hesitant to take the lead on it. I'm extremely grateful that my
            manager pushed me to do so and provided support and guidance
            throughout; I would not be the technologist I am today otherwise!
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
      <h6>Armoire Style</h6>
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
