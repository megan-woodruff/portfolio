import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'

type ProjectCardProps = {
  title: string
  description: string
  location: string
  slug: string
  image: StaticImageData
  alt: string
}

export function ProjectCard({
  title,
  description,
  location,
  slug,
  image,
  alt,
}: ProjectCardProps) {
  return (
    <Link className="projectLink" href={`/${slug}`}>
      <article className="projectCard">
        <div className="projectImageFrame">
          <Image
            className="projectImage"
            src={image}
            alt={alt}
            sizes="(max-width: 790px) 90vw, 600px"
            priority
          />
        </div>
        <div className="projectInfo">
          <p className="projectLocation eyebrow">{location}</p>
          <h3 className="projectTitle">{title}</h3>
          <p className="projectDescription">{description}</p>
          <span className="projectCta" aria-hidden="true">
            View case study →
          </span>
        </div>
      </article>
    </Link>
  )
}
