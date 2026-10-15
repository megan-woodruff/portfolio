import { ProjectCard } from '@/components/ProjectCard'

import { projectGroups } from '@/lib/projects'

export default function HomePage() {
  return (
    <>
      <section className="splash">
        <h1>Hello! I&apos;m Megan.</h1>
        <h3>
          I am a design technologist who thrives in the messy middle between
          design concept and scaled development.
        </h3>
      </section>
      <section className="projectDisplay" id="projectDisplay">
        <div className="projectContentContainer">
          {projectGroups.map((group) => (
            <div className="projectGroup" key={group.title}>
              <h2 className="projectGroupTitle">{group.title}</h2>
              <div className="projectGroupCards">
                {group.projects.map((project) => (
                  <ProjectCard
                    key={project.slug}
                    title={project.title}
                    location={project.location}
                    description={project.description}
                    slug={project.slug}
                    image={project.image}
                    alt={project.alt}
                    locked={project.locked}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
