import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class TopBanner extends Component {
  render() {
    return (
      <div className="banner-container" id="top-banner">
        <Link to="/home">
          <span className="material-icons">home</span>
        </Link>
        <Link to="/about">
          <span className="material-icons">about</span>
        </Link>
        <Link to="/contact">
          <span className="material-icons">contact</span>
        </Link>
      </div>
    )
  }
}
export default TopBanner
