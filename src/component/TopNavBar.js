import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class TopNavBar extends Component {
  render() {
    return (
      <div id="top-nav" className="top-nav-bar paddinglr20 shadow">
        <div className="topnav topnav-left">
          <Link to="/home" className="topnav-link-home">
            Home
          </Link>
        </div>
        <div className="topnav topnav-right">
          <Link to="/contact" className="topnav-link-contact">
            Contacts
          </Link>
          <Link to="/about" className="topnav-link-about">
            About
          </Link>
        </div>
      </div>
    )
  }
}
export default TopNavBar
