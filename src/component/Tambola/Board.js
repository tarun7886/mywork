import React, { useState } from 'react'
import _ from 'underscore'

const NUM = [...Array(90).keys()].map(i => i + 1)

const Board = props => {
  const { calledNums = [1, 3, 4, 5, 6], last, current } = props
  return (
    <div className="tambola-board">
      <div className="tambola-board-container">
        <div className="tambola-board-flex">
          {_.map(NUM, (value, key) => {
            return (
              <NumberTile
                available={!_.contains(calledNums, value)}
                lastCalled={last === value}
                current={current === value}
                number={value}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default Board

const NumberTile = props => {
  const {
    number,
    available = true,
    lastCalled = false,
    current = false,
  } = props

  return (
    <div className="tambola-num-outer">
      <div
        className="tambola-num-inner"
        style={{
          '--number': number,
          background: lastCalled
            ? 'red'
            : current
            ? '#60f360'
            : !available
            ? '#46b0ff'
            : null,
        }}></div>
    </div>
  )
}
