import { render, screen } from '@testing-library/react'
import type { ImgHTMLAttributes } from 'react'
import { describe, expect, it, vi } from 'vitest'

import { ProjectCard } from '@/components/ProjectCard'
import { images } from '@/lib/media'

vi.mock('next/image', () => ({
  default: (
    props: ImgHTMLAttributes<HTMLImageElement> & { priority?: boolean }
  ) => {
    const { priority, ...imageProps } = props
    void priority

    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img {...imageProps} src={String(imageProps.src)} />
    )
  },
}))

describe('ProjectCard', () => {
  it('links a project with its accessible name and image description', () => {
    render(
      <ProjectCard
        title="Armoire Mobile"
        description="A mobile app case study"
        location="Armoire Style"
        slug="armoire_mobile"
        image={images.armoireMock}
        alt="Armoire app screens"
      />
    )

    expect(
      screen.getByRole('link', { name: /Armoire Mobile/i })
    ).toHaveAttribute('href', '/armoire_mobile')
    expect(screen.getByAltText('Armoire app screens')).toBeInTheDocument()
  })
})
