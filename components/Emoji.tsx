export function Emoji({
  variant = 'great',
}: {
  variant?: 'great' | 'okay' | 'bad'
}) {
  const symbols = {
    great: '✅',
    okay: '⚠️',
    bad: '⛔',
  }

  return (
    <span style={{ marginRight: 6 }} role="img" aria-label={variant}>
      {symbols[variant]}
    </span>
  )
}
