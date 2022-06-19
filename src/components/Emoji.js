import React from 'react'

const Emoji = ({ variant = 'great' }) => {
  let emojiSymbol = ''

  switch (variant) {
    case 'great':
      emojiSymbol = `✅`
      break
    case 'okay':
      emojiSymbol = `⚠️`
      break
    case 'bad':
    default:
      emojiSymbol = `⛔`
  }

  return (
    <span style={{ marginRight: 6 }} role="img" aria-label={variant}>
      {emojiSymbol}
    </span>
  )
}

export default Emoji
