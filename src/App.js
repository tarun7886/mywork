import React, { Component } from 'react'
import './App.css'
import './styles/main.scss'
import Main from './container/Main'

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
        <Main />
      </div>
    )
  }
}

export default App
