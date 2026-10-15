import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { CaseStudyShell } from '@/components/CaseStudyShell'
import { PasswordGate } from '@/components/PasswordGate'
import { hasPortfolioAccess } from '@/lib/access'
import { getProject, projects } from '@/lib/projects'

type ProjectRouteProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return projects
    .filter((project) => project.slug !== 'armoire_mobile')
    .map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({
  params,
}: ProjectRouteProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project || project.slug === 'armoire_mobile') return {}

  return {
    title: project.title,
    description: project.locked ? undefined : project.description,
    alternates: { canonical: `/${project.slug}` },
    robots: project.locked ? { index: false, follow: false } : undefined,
  }
}

export default async function ProjectRoute({ params }: ProjectRouteProps) {
  const { slug } = await params
  const project = getProject(slug)

  if (!project || project.slug === 'armoire_mobile') notFound()

  if (project.locked && !(await hasPortfolioAccess())) {
    return <PasswordGate title={project.title} />
  }

  return (
    <CaseStudyShell
      title={project.title}
      description={project.description}
      location={project.location}
      date={project.date}
    />
  )
}
