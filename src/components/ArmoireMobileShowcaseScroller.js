import React, { useEffect, useRef, useState } from 'react'
import Img from 'gatsby-image/withIEPolyfill'
import './ArmoireMobileShowcaseScroller.scss'
import { useStaticQuery, graphql } from 'gatsby'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'

const CARD_SIZE = 264
const NUM_CARDS = 15

const ArmoireMobileShowcaseScroller = () => {
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
      case: file(relativePath: { eq: "Mobile-Case.png" }) {
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
      closetDetailsVideo: file(
        relativePath: { eq: "Mobile-ClosetDetails.mp4" }
      ) {
        name
        publicURL
      }
      closetSections: file(relativePath: { eq: "Mobile-ClosetSections.mp4" }) {
        name
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
      feed: file(relativePath: { eq: "Mobile-Feed.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      feedOverview: file(relativePath: { eq: "Mobile-FeedOverview.mp4" }) {
        name
        publicURL
      }
      feedProfileWalkthrough: file(relativePath: { eq: "Mobile-Profile.mp4" }) {
        name
        publicURL
      }
      feedProfile: file(relativePath: { eq: "Mobile-EditProfile.png" }) {
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
      welcome: file(relativePath: { eq: "Mobile-Welcome.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const [scrollButtonEnabled, setScrollButtonEnabled] = useState({
    left: false,
    right: true,
  })

  const scrollerRef = useRef()

  const onScrollRight = () => {
    const scrollTo = scrollerRef.current.scrollLeft + CARD_SIZE * 3

    scrollerRef.current.scrollTo({
      left: scrollTo,
      behavior: 'smooth',
    })
    checkScrollButtonEnabledState(scrollTo)
  }

  const onScrollLeft = () => {
    const scrollTo = scrollerRef.current.scrollLeft - CARD_SIZE * 3
    scrollerRef.current.scrollTo({
      left: scrollTo,
      behavior: 'smooth',
    })
    checkScrollButtonEnabledState(scrollTo)
  }

  const getCurrentScrollState = () => {
    return scrollerRef.current.scrollLeft
  }

  const checkScrollButtonEnabledState = scrollTo => {
    setScrollButtonEnabled({
      left: scrollTo > 10,
      right: scrollTo < 2500,
    })
  }

  useEffect(() => {
    const eventListener = () => {
      const current = getCurrentScrollState()
      console.log(current)
      checkScrollButtonEnabledState(current)
    }
    scrollerRef.current.addEventListener('scroll', eventListener)

    return () => {
      scrollerRef.current.removeEventListener('scroll', eventListener)
    }
  }, [])

  return (
    <div className="armoireMobileShowcase">
      <div ref={scrollerRef} className="showcaseScroller">
        <div className="showcaseAsset">
          <Img
            alt="Closet section page, containing a two column layout of product thumbnails, with sort and filter buttons pinned to the bottom of the page"
            fluid={data.welcome.childImageSharp.fluid}
          />
        </div>
        <video
          autoPlay={true}
          loop
          alt={
            'Closet section layouts. Home page containing horizontally sliding section previews, which link to full section pages with filters'
          }
          className="showcaseAsset"
          muted
        >
          <source src={data.closetSections.publicURL} type="video/mp4" />
        </video>
        <div className="showcaseAsset">
          <Img
            alt="Closet section page, containing a two column layout of product thumbnails, with sort and filter buttons pinned to the bottom of the page"
            fluid={data.closetSection.childImageSharp.fluid}
          />
        </div>
        <div className="showcaseAsset">
          <Img
            alt="Closet Filters modal, which shows options for filtering by Category, Occasion, Season, Color, Pattern, and other style attributes"
            fluid={data.closetFilters.childImageSharp.fluid}
          />
        </div>
        <video
          autoPlay={true}
          loop
          alt={
            'Product Details page, which shows an image slider containing product images, product name and description, sizing information, and reviews'
          }
          className="showcaseAsset"
          muted
        >
          <source src={data.closetDetailsVideo.publicURL} type="video/mp4" />
        </video>
        <div className="showcaseAsset">
          <Img alt="" fluid={data.search.childImageSharp.fluid} />
        </div>
        <div className="showcaseAsset">
          <Img alt="" fluid={data.case.childImageSharp.fluid} />
        </div>
        <div className="showcaseAsset">
          <Img alt="" fluid={data.account.childImageSharp.fluid} />
        </div>
        <div className="showcaseAsset">
          <Img alt="" fluid={data.feed.childImageSharp.fluid} />
        </div>
        <div className="showcaseAsset">
          <Img alt="" fluid={data.feedProfile2.childImageSharp.fluid} />
        </div>
        <div className="showcaseAsset">
          <Img alt="" fluid={data.feedProfile.childImageSharp.fluid} />
        </div>
        <video autoPlay={true} loop alt={''} className="showcaseAsset" muted>
          <source src={data.feedOverview.publicURL} type="video/mp4" />
        </video>
        <video autoPlay={true} loop alt={''} className="showcaseAsset" muted>
          <source
            src={data.feedProfileWalkthrough.publicURL}
            type="video/mp4"
          />
        </video>
        <div className="showcaseAsset">
          <Img alt="" fluid={data.notifications.childImageSharp.fluid} />
        </div>
        <div className="showcaseAsset">
          <Img alt="" fluid={data.welcome.childImageSharp.fluid} />
        </div>
      </div>
      <div>
        <div className="titleScroll">
          <h3 className="title">Armoire Mobile</h3>
          <div className="scrollButtons">
            <button
              onClick={onScrollLeft}
              disabled={!scrollButtonEnabled.left}
              className="scrollButton"
            >
              <LeftArrow />
            </button>
            <button
              disabled={!scrollButtonEnabled.right}
              onClick={onScrollRight}
              className="scrollButton"
            >
              <RightArrow />
            </button>
          </div>
        </div>
        <div className="description">
          <p>
            <i>
              The Armoire mobile app allows users to save, select, and rent
              contemporary styles from high-end brands. I built the app with
              React Native and released it in early April 2021 on both iOS and
              Android.
            </i>
          </p>
          <p className="finePrint">
            Note: All profile images and names shown are either my own or those
            of users with accounts marked explicitly as "public".
          </p>
        </div>
      </div>
    </div>
  )
}

export default ArmoireMobileShowcaseScroller
