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
        <Image
          className="projectImage"
          src={image}
          alt={alt}
          sizes="(max-width: 790px) 90vw, 600px"
          priority
        />
        <div className="projectInfo">
          <div>
            <h3 className="projectTitle">{title}</h3>
            <h5 className="projectLocation">{location}</h5>
          </div>
          <h4 className="projectDescription">{description}</h4>
        </div>
      </article>
    </Link>
  )
}
