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
      description="Armoire's mobile app, designed and developed for iOS and Android"
      stats={getStats()}
      imageSource={data.header.childImageSharp.fluid}
      imageAlt="Mock up of phones with screens showing Armoire's mobile app. Including a welcome screen, product details page, search results, and member feed."
    >
      <>
      <div className="bodyTextWrapper overview">
        <h2>Project Overview</h2>
        <p><i>Armoire is a consumer clothing rental company that offers its members access to a personalized closet of high-end styles</i></p>
        <p>
          When I conducted my first set of user interviews with Armoire members in May 2020, <em>every single interviewee</em> identified a mobile app as their number one ask for our tech team.</p>
      </div>
      <div className="bodyTextWrapper intro">
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
          Below is a brief overview of the app that describes its basic scenarios and helps communicate the scope of this project. I will be adding more information about my design process, technical decisions, and challenges soon.
        </p>
      </div>
      <div className="bodyTextWrapper">
        <h2 className="sectionHeading" >App Overview</h2>
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
      <h6>Interaction Design</h6>
      <h6>Front-End Engineering</h6>
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
