'use client'

import Image, { type StaticImageData } from 'next/image'
import { useCallback, useRef, useState } from 'react'

import { images, videoUrl } from '@/lib/media'

import { ArrowIcon } from './ArrowIcon'

const CARD_SIZE = 264

type ShowcaseItem =
  | { kind: 'image'; src: StaticImageData; alt: string }
  | { kind: 'video'; filename: string; label: string }

const showcaseItems: ShowcaseItem[] = [
  {
    kind: 'image',
    src: images.welcome,
    alt: 'Mobile app welcome screen with login, sign up, and explore-as-guest actions.',
  },
  {
    kind: 'video',
    filename: 'Mobile-ClosetSections.mp4',
    label:
      'Mobile app closet walkthrough with horizontally sliding section previews.',
  },
  {
    kind: 'image',
    src: images.closetSection,
    alt: 'Closet section with a two-column product layout and pinned sort and filter actions.',
  },
  {
    kind: 'image',
    src: images.closetFilters,
    alt: 'Closet filters for category, occasion, season, color, pattern, and other attributes.',
  },
  {
    kind: 'video',
    filename: 'Mobile-ClosetDetails.mp4',
    label:
      'Product details walkthrough with photos, sizing information, and reviews.',
  },
  {
    kind: 'image',
    src: images.search,
    alt: 'Search results for jackets with a two-column product list.',
  },
  {
    kind: 'image',
    src: images.caseScreen,
    alt: 'Case page with selected, with-you, and returning item tabs.',
  },
  {
    kind: 'image',
    src: images.account,
    alt: 'Account overview with profile, support, membership, and account actions.',
  },
  {
    kind: 'image',
    src: images.feed,
    alt: 'Style Feed showing All, Following, and Similar Size tabs.',
  },
  {
    kind: 'video',
    filename: 'Mobile-FeedOverview.mp4',
    label: 'Style Feed walkthrough showing comments and member profiles.',
  },
  {
    kind: 'video',
    filename: 'Mobile-Profile.mp4',
    label:
      'Member profile walkthrough showing looks, rental history, sizes, and style stats.',
  },
  {
    kind: 'image',
    src: images.feedProfile,
    alt: 'Edit Profile dialog for location, bio, and privacy settings.',
  },
  {
    kind: 'image',
    src: images.notifications,
    alt: 'Notifications inbox with style game, package, and Style Feed updates.',
  },
]

export function ArmoireMobileShowcaseScroller() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [canScroll, setCanScroll] = useState({ left: false, right: true })

  const updateControls = useCallback(() => {
    const scroller = scrollerRef.current
    if (!scroller) return

    setCanScroll({
      left: scroller.scrollLeft > 10,
      right:
        scroller.scrollLeft < scroller.scrollWidth - scroller.clientWidth - 10,
    })
  }, [])

  const scroll = (direction: -1 | 1) => {
    scrollerRef.current?.scrollBy({
      left: direction * CARD_SIZE * 3,
      behavior: 'smooth',
    })
  }

  return (
    <section className="armoireMobileShowcase" aria-labelledby="showcase-title">
      <div
        ref={scrollerRef}
        className="showcaseScroller"
        onScroll={updateControls}>
        {showcaseItems.map((item, index) =>
          item.kind === 'image' ? (
            <Image
              key={`${item.src.src}-${index}`}
              className="showcaseAsset"
              src={item.src}
              alt={item.alt}
              sizes="240px"
            />
          ) : (
            <video
              key={item.filename}
              autoPlay
              loop
              playsInline
              preload="metadata"
              aria-label={item.label}
              className="showcaseAsset"
              muted>
              <source src={videoUrl(item.filename)} type="video/mp4" />
            </video>
          )
        )}
      </div>
      <div>
        <div className="titleScroll">
          <h3 className="title" id="showcase-title">
            Armoire Mobile
          </h3>
          <div className="scrollButtons">
            <button
              onClick={() => scroll(-1)}
              disabled={!canScroll.left}
              className="scrollButton"
              aria-label="Scroll showcase left">
              <ArrowIcon direction="left" />
            </button>
            <button
              disabled={!canScroll.right}
              onClick={() => scroll(1)}
              className="scrollButton"
              aria-label="Scroll showcase right">
              <ArrowIcon direction="right" />
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
            of users with accounts marked explicitly as &quot;public&quot;.
          </p>
        </div>
      </div>
    </section>
  )
}
