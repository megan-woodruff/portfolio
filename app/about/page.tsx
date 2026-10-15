import type { Metadata } from 'next'
import Image from 'next/image'

import { images } from '@/lib/media'

export const metadata: Metadata = {
  title: 'About',
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return (
    <div className="contentWrapper aboutWrapper">
      <Image
        alt="Megan Woodruff smiling in front of an Alaskan glacier"
        className="aboutImage"
        src={images.profile}
        sizes="(max-width: 790px) 50vw, 340px"
        priority
      />
      <div className="aboutText">
        <h1>
          <span className="emphasis">Thank you</span> for visiting my portfolio!
        </h1>
        <p>
          My name is Megan, and I&apos;m a design technologist who enjoys a
          healthy mix of interaction design, prototyping, and front-end
          engineering.
        </p>
        <p>
          I&apos;m currently working at{' '}
          <a
            href="https://nytimes.com"
            target="_blank"
            rel="noopener noreferrer">
            The New York Times
          </a>
          , where I focus on creating native News prototypes that drive internal
          alignment and product strategy.
          <br />
          <br />
          When I&apos;m not designing or coding, I love playing volleyball,
          knitting, doing yoga, reading, and spending time in the PNW outdoors
          with friends.
        </p>
      </div>
    </div>
  )
}
