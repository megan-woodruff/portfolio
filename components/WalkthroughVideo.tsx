import { posterUrl, videoUrl } from '@/lib/media'

type WalkthroughVideoProps = {
  filename: string
  label: string
  className?: string
}

export function WalkthroughVideo({
  filename,
  label,
  className,
}: WalkthroughVideoProps) {
  return (
    <video
      className={className}
      poster={posterUrl(filename)}
      preload="none"
      autoPlay
      loop
      muted
      playsInline
      aria-label={label}>
      <source src={videoUrl(filename)} type="video/mp4" />
    </video>
  )
}
