import Image, { type StaticImageData } from 'next/image'

import { WalkthroughVideo } from '@/components/WalkthroughVideo'
import { images } from '@/lib/media'

type ShowcaseItem =
  | { kind: 'image'; src: StaticImageData; alt: string }
  | { kind: 'video'; filename: string; label: string }

const showcaseItems: ShowcaseItem[] = [
  {
    kind: 'image',
    src: images.welcome,
    alt: 'Mobile app welcome screen with login, sign up, and explore-as-guest actions.',
  },
  {
    kind: 'video',
    filename: 'Mobile-ClosetSections.mp4',
    label:
      'Mobile app closet walkthrough with horizontally sliding section previews.',
  },
  {
    kind: 'image',
    src: images.closetSection,
    alt: 'Closet section with a two-column product layout and pinned sort and filter actions.',
  },
  {
    kind: 'image',
    src: images.closetFilters,
    alt: 'Closet filters for category, occasion, season, color, pattern, and other attributes.',
  },
  {
    kind: 'video',
    filename: 'Mobile-ClosetDetails.mp4',
    label:
      'Product details walkthrough with photos, sizing information, and reviews.',
  },
  {
    kind: 'image',
    src: images.caseScreen,
    alt: 'Case page with selected, with-you, and returning item tabs.',
  },
  {
    kind: 'image',
    src: images.account,
    alt: 'Account overview with profile, support, membership, and account actions.',
  },
  {
    kind: 'image',
    src: images.feed,
    alt: 'Style Feed showing All, Following, and Similar Size tabs.',
  },
  {
    kind: 'video',
    filename: 'Mobile-FeedOverview.mp4',
    label: 'Style Feed walkthrough showing comments and member profiles.',
  },
  {
    kind: 'video',
    filename: 'Mobile-Profile.mp4',
    label:
      'Member profile walkthrough showing looks, rental history, sizes, and style stats.',
  },
  {
    kind: 'image',
    src: images.feedProfile,
    alt: 'Edit Profile dialog for location, bio, and privacy settings.',
  },
  {
    kind: 'image',
    src: images.notifications,
    alt: 'Notifications inbox with style game, package, and Style Feed updates.',
  },
]

export function ArmoireMobileShowcase() {
  return (
    <section className="armoireMobileShowcase" aria-label="Armoire Mobile">
      <div className="showcaseGrid">
        {showcaseItems.map((item, index) =>
          item.kind === 'image' ? (
            <Image
              key={`${item.src.src}-${index}`}
              className="showcaseAsset"
              src={item.src}
              alt={item.alt}
              sizes="(max-width: 790px) 45vw, 220px"
            />
          ) : (
            <WalkthroughVideo
              key={item.filename}
              filename={item.filename}
              label={item.label}
              className="showcaseAsset"
            />
          )
        )}
      </div>
    </section>
  )
}
