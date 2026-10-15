# Megan Woodruff portfolio

Personal portfolio built with Next.js, React, TypeScript, and Sass. It is
deployed on Netlify.

## Local development

Use Node 24 (the version is pinned in `.nvmrc`):

```sh
npm ci
npm run dev
```

The site is available at `http://localhost:3000`.

## Quality checks

```sh
npm run lint
npm run typecheck
npm test
npm run build
npm run test:e2e
```

Pull requests run linting, type checks, unit tests, a production build, and
Playwright route tests in GitHub Actions.

## Media

Optimized videos and their poster frames live in `public/videos`. They are
H.264, silent, and start playing as soon as the file header arrives. Set
`NEXT_PUBLIC_MEDIA_BASE_URL` to move the video files to another object store
or CDN; poster images stay on this site. Copy `.env.example` to `.env.local`
for local overrides.
When changing hosts, also allow the new origin in the `img-src` and `media-src`
directives in `netlify.toml`.

Images used by live routes remain in `src/images` and are optimized by
`next/image`. The resume and manifest icon live in `public`.

## Deployment

Netlify configuration is committed in `netlify.toml`. Set these optional
environment variables in Netlify:

- `NEXT_PUBLIC_SITE_URL`: canonical production URL
- `NEXT_PUBLIC_MEDIA_BASE_URL`: replacement media host
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`: GA4 measurement ID
