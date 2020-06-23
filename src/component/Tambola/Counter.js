import React from 'react'
import _ from 'underscore'
import { Button } from '@material-ui/core'

const Counter = props => {
  const {
    last,
    current,
    fetching,
    handleUpdate,
    gameEnd,
    handleNewGame,
  } = props

  return (
    <div className="tambola-play-area">
      <div className="tambola-play-area-container">
        <div className="tambola-pa-flex">
          <div className="tambola-pa-last-num">
            <div>{last === null ? '--' : last}</div>
            <div>Last Number</div>
          </div>
          <div className="tambola-pa-last-num">
            <div>{current === null ? '--' : current}</div>
            <div>Current Number</div>
          </div>
          <div className="tambola-pa-button">
            <Button
              variant="contained"
              color="primary"
              disabled={fetching || gameEnd}
              onClick={() => handleUpdate()}>
              {gameEnd ? 'Game Over' : current === null ? 'Start' : 'Next'}
            </Button>
          </div>
        </div>
        <Button
          variant="contained"
          color="secondary"
          style={{ textAlign: 'center' }}
          onClick={handleNewGame}>
          New Game
        </Button>
      </div>
    </div>
  )
}

export default Counter
