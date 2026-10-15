import Image, { type StaticImageData } from 'next/image'
import { type ReactNode } from 'react'

type ProjectPageProps = {
  title: string
  description: string
  imageAlt: string
  stats: ReactNode
  children: ReactNode
  imageSource: StaticImageData
}

export function ProjectPage({
  title,
  description,
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
            <h1 className="title">{title}</h1>
            <h2 className="description">{description}</h2>
          </div>
          <div className="stats">{stats}</div>
        </div>
        <div className="contentBody">{children}</div>
      </div>
    </>
  )
}
