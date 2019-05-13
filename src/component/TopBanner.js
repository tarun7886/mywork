import React, { Component } from 'react'

class TopBanner extends Component {
  render() {
    return (
      <div className="banner-container" id="top-banner">
        <a href="/home">
          <img src="" alt="Home" />
        </a>
        <a href="/about">
          <img src="" alt="About" />
        </a>
        <a href="/contact">
          <img src="" alt="Contact" />
        </a>
      </div>
    )
  }
}
export default TopBanner
