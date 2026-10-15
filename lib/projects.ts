import { images } from '@/lib/media'

export type Project = {
  title: string
  location: string
  description: string
  slug: string
  date?: string
  image?: (typeof images)[keyof typeof images]
  alt?: string
  /** When true, the case study is withheld until the portfolio password is entered. */
  locked: boolean
}

export type ProjectGroup = {
  title: string
  projects: Project[]
}

export const projectGroups: ProjectGroup[] = [
  {
    title: 'Writing and shipping production code',
    projects: [
      {
        title: 'Armoire Mobile',
        location: 'Armoire Style',
        description:
          'Increasing member engagement and retention by delivering an easy-to-use, performant mobile app',
        slug: 'armoire_mobile',
        date: 'Oct 2021 – May 2022',
        image: images.armoireMock,
        alt: "Mockups showing the welcome screen, product details, search results, and member feed in Armoire's mobile app.",
        locked: false,
      },
      {
        title: 'eBay Web Components',
        location: 'eBay',
        description: 'Case study in progress.',
        slug: 'ebay-web-components',
        locked: true,
      },
    ],
  },
  {
    title: 'Building design tooling and infrastructure',
    projects: [
      {
        title: 'eBay Playbook Documentation',
        location: 'eBay',
        description: 'Case study in progress.',
        slug: 'ebay-playbook',
        locked: true,
      },
      {
        title: 'New York Times Prototype Hub',
        location: 'The New York Times',
        description: 'Case study in progress.',
        slug: 'nyt-prototype-hub',
        locked: true,
      },
      {
        title: 'New York Times Content Import',
        location: 'The New York Times',
        description: 'Case study in progress.',
        slug: 'nyt-content-import',
        locked: true,
      },
    ],
  },
  {
    title: 'Prototyping to influence product strategy',
    projects: [
      {
        title: 'New York Times Home Envisioning',
        location: 'The New York Times',
        description: 'Case study in progress.',
        slug: 'nyt-home-envisioning',
        locked: true,
      },
      {
        title: 'New York Times Multimodal',
        location: 'The New York Times',
        description: 'Case study in progress.',
        slug: 'nyt-multimodal',
        locked: true,
      },
      {
        title: 'New York Times Liquid Glass',
        location: 'The New York Times',
        description: 'Case study in progress.',
        slug: 'nyt-liquid-glass',
        locked: true,
      },
    ],
  },
]

export const projects = projectGroups.flatMap((group) => group.projects)

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}
