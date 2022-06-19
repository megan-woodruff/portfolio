import React from 'react'

const LeftArrow = ({ height = 24 }) => {
  return (
    <svg
      width="61"
      height={height}
      viewBox="0 0 61 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="57.5"
        y1="16.5"
        x2="11.5"
        y2="16.5"
        stroke="white"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d="M2.18273 15.6642L19.7009 4.15505C20.3659 3.71817 21.25 4.19517 21.25 4.99082L21.25 28.0092C21.25 28.8048 20.3659 29.2818 19.7009 28.8449L2.18273 17.3358C1.58151 16.9408 1.58151 16.0592 2.18273 15.6642Z"
        fill="white"
        stroke="white"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default LeftArrow
