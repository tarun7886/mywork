import React from 'react'

export const HomeIcon = props => {
  const { height = 50 } = props
  return (
    <div
      style={{
        transform: 'rotate(180deg)',
        display: 'inline-block',
      }}>
      <svg height={`${height}px`} width={`${height}px`} viewBox="0 0 100 100">
        <polyline
          points="0,0 100,50 0,50 100,0 50,0 0,100 100,50 0,100 0,0"
          style={{
            fill: 'none',
            stroke: 'black',
            strokeWidth: 3,
          }}
        />
        Sorry, your browser does not support inline SVG.
      </svg>
    </div>
  )
}
