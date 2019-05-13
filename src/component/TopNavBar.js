import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class TopNavBar extends Component {
  render() {
    return (
      <Navbar
        expand="lg"
        bg="white"
        variant="white"
        id="top-nav"
        className="top-nav-bar paddinglr20 is-invisible">
        <Link to="/home" className="topnav-main-link">
          Home
        </Link>
        <div className="topnav-right">
          <Link to="/contact" className="topnav-right-link">
            Contacts
          </Link>
          <Link to="/about" className="topnav-right-link">
            About
          </Link>
        </div>
      </Navbar>
    )
  }
}
export default TopNavBar
