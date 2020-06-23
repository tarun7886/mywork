import React from 'react'
import _ from 'underscore'

const Winners = props => {
  const {
    people = [{ name: 'Tarun', won: ['Early Five', '5th Line'] }],
  } = props
  return (
    <div className="tambola-winners">
      <div className="tambola-winners-container">
        {_.map(people, (value, key) => {
          return <WinnerTile key={`${key}-${value.name}`} {...value} />
        })}
      </div>
    </div>
  )
}
export default Winners

const WinnerTile = props => {
  return (
    <div className="tambola-winners-tile">
      <div className="tambola-winners-name">{props.name}</div>
      <div className="tambola-winners-list">{props.won.join(', ')}</div>
    </div>
  )
}
