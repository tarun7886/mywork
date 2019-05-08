import React, { Component } from 'react'
import './App.css'
import './styles/main.scss'
import Routes from './container/Routes'

class App extends Component {
  componentDidMount() {
    // Let the document know when the mouse is being used,
    // so accessibility styling can be removed.

    document.body.addEventListener('mousedown', function() {
      document.body.classList.add('using-mouse')
    })

    document.body.addEventListener('keydown', function() {
      document.body.classList.remove('using-mouse')
    })
  }
  render() {
    return (
      <div>
        <Routes />
      </div>
    )
  }
}

export default App
