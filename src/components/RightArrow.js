import React from 'react'

const RightArrow = ({ height = 24 }) => {
  return (
    <svg
      width="61"
      height={height}
      viewBox="0 0 61 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="3.5"
        y1="16.5"
        x2="49.5"
        y2="16.5"
        stroke="white"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <path
        d="M58.8173 17.3358L41.2991 28.8449C40.6341 29.2818 39.75 28.8048 39.75 28.0092L39.75 4.99082C39.75 4.19517 40.6341 3.71817 41.2991 4.15505L58.8173 15.6642C59.4185 16.0592 59.4185 16.9408 58.8173 17.3358Z"
        fill="white"
        stroke="white"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default RightArrow
