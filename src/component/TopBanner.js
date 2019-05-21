import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class TopBanner extends Component {
  render() {
    return (
      <div className="banner-container" id="top-banner">
        <Link to="/home">
          <img src="" alt="Home" />
        </Link>
        <Link to="/about">
          <img src="" alt="About" />
        </Link>
        <Link to="/contact">
          <img src="" alt="Contact" />
        </Link>
      </div>
    )
  }
}
export default TopBanner
