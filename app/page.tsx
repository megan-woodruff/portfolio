import type { Metadata } from 'next'

import { ProjectCard } from '@/components/ProjectCard'
import { images } from '@/lib/media'

export const metadata: Metadata = {
  title: { absolute: 'Work | Megan Woodruff' },
  alternates: { canonical: '/' },
}

export default function HomePage() {
  return (
    <>
      <section className="splash">
        <h1>Hello! I&apos;m Megan.</h1>
        <h3>
          I&apos;m a design technologist with a focus on{' '}
          <span className="emphasis">interaction design</span> +{' '}
          <span className="emphasis">front-end development</span> on web and
          mobile
        </h3>
      </section>
      <section className="projectDisplay" id="projectDisplay">
        <div className="projectContentContainer">
          <ProjectCard
            title="Armoire Mobile"
            location="Armoire Style"
            description="Increasing member engagement and retention by delivering an easy-to-use, performant mobile app"
            slug="armoire_mobile"
            image={images.armoireMock}
            alt="Mockups showing the welcome screen, product details, search results, and member feed in Armoire's mobile app."
          />
          <p className="moreProjectsText">
            <b>
              It turns out keeping a portfolio up to date is basically a full
              time job!
            </b>
            <br />
            I&apos;m adding projects that reflect my most recent work and
            expertise. Check back soon for more.
          </p>
        </div>
      </section>
    </>
  )
}
