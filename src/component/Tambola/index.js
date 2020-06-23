import $ from 'jquery'
import React from 'react'
import Board from './Board'
import Counter from './Counter'
import Winners from './Winners'
import ChatArea from './ChatArea'
import _ from 'underscore'
import { w3cwebsocket as W3CWebSocket } from 'websocket'
import Websocket from 'react-websocket'
import socketIOClient from 'socket.io-client'

// const client = new W3CWebSocket('ws://127.0.0.1:8000')

const calledNums = []

class Tambola extends React.Component {
  constructor() {
    super()
    this.state = {
      last: null,
      current: null,
      gameEnd: false,
      fetching: false,
      endpoint: 'http://localhost:8000/',
    }
    this.socket = null
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  componentDidMount() {
    // client.onopen = () => {
    //   console.log('WebSocket Client Connected')
    // }
    // client.onmessage = message => {
    //   console.log(message)
    //   message = JSON.parse(message)
    //   this.setState({
    //     ...message,
    //   })
    //   calledNums.push(message.current)
    // }
    // const { endpoint } = this.state
    // this.socket = socketIOClient(endpoint)
    // this.socket.on('FromAPI', data => {
    //   const current = data
    //   calledNums.push(current)
    //   if (this.state.current !== null) {
    //     this.setState({
    //       last: this.state.current,
    //     })
    //   }
    //   this.setState({ current, fetching: false })
    // })
  }

  componentWillUnmount() {
    // client.onclose = () => {
    //   console.log('WebSocket Client Disconnected')
    // }
  }

  handleDataChange(message) {
    console.log(message)
    message = JSON.parse(message)
    this.setState({
      ...message,
    })
    calledNums.push(message.current)
  }

  handleButtonClick() {
    this.setState({
      fetching: true,
    })
    // this.socket.emit('FromAPI', this.getNumber(calledNums))
    // $.ajax({
    //   method: 'GET',
    //   url: 'http://localhost:8000/number',
    // })
    //   .then(() => console.log('success'))
    //   .catch(e => {
    //     console.log(e)
    //     this.setState({
    //       fetching: false,
    //     })
    //   })
    // let current = this.getNumber(calledNums)
    // let object = {}
    // if (!_.isNull(this.state.current)) {
    //   object.last = this.state.current
    // }
    // object.current = current
    // object.fetching = false
    // console.log(object)
    // client.send(JSON.stringify(object))
  }

  handleNewGame() {
    calledNums.length = 0
    this.setState({
      current: null,
      last: null,
    })
  }

  componentDidUpdate() {
    if (_.size(calledNums) >= 90) {
      if (!this.state.gameEnd) {
        this.setState({
          gameEnd: true,
        })
      }
    }
  }

  getNumber(calledNums) {
    let count = 1
    let N
    while (true && count < 1000) {
      count++
      N = Math.floor(Math.random() * 90) + 1
      if (!_.contains(calledNums, N)) {
        return N
      }
    }

    return N
  }

  render() {
    return (
      <div className="tambola">
        <Counter
          calledNums={calledNums}
          {...this.state}
          handleUpdate={this.handleButtonClick}
          handleNewGame={this.handleNewGame.bind(this)}
        />
        <Board calledNums={calledNums} {...this.state} />
        <Winners />
      </div>
    )
  }
}

export default Tambola
