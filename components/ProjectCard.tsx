import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'

type ProjectCardProps = {
  title: string
  description: string
  location: string
  slug: string
  image?: StaticImageData
  alt?: string
  locked?: boolean
}

export function ProjectCard({
  title,
  description,
  location,
  slug,
  image,
  alt,
  locked = false,
}: ProjectCardProps) {
  return (
    <Link
      className="projectLink"
      href={`/${slug}`}
      aria-label={`${locked ? 'Unlock' : 'View'} ${title} case study`}>
      <article className={`projectCard${image ? '' : ' projectCardText'}`}>
        {image ? (
          <div className="projectImageFrame">
            <Image
              className="projectImage"
              src={image}
              alt={alt ?? ''}
              sizes="(max-width: 790px) 90vw, 600px"
              priority
            />
          </div>
        ) : null}
        <div className="projectInfo">
          <p className="projectLocation eyebrow">{location}</p>
          <h3 className="projectTitle">{title}</h3>
          <p className="projectDescription">{description}</p>
          <span className="projectCta" aria-hidden="true">
            {locked ? 'Unlock case study' : 'View case study'} →
          </span>
        </div>
      </article>
    </Link>
  )
}
