import Image, { type StaticImageData } from 'next/image'
import { type ReactNode } from 'react'

type ProjectPageProps = {
  title: string
  description: string
  date: string
  imageAlt: string
  stats: ReactNode
  children: ReactNode
  imageSource: StaticImageData
}

export function ProjectPage({
  title,
  description,
  date,
  imageAlt,
  stats,
  children,
  imageSource,
}: ProjectPageProps) {
  return (
    <>
      <Image
        className="headerImage"
        src={imageSource}
        alt={imageAlt}
        priority
        sizes="(max-width: 960px) 100vw, 960px"
      />
      <div className="projectContent">
        <div className="overviewCard">
          <div className="heading">
            <div className="headingText">
              <h1 className="title">{title}</h1>
              <h2 className="description">{description}</h2>
            </div>
            <p className="date eyebrow">{date}</p>
          </div>
          <div className="stats">{stats}</div>
        </div>
        <div className="contentBody">{children}</div>
      </div>
    </>
  )
}
