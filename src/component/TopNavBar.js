import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class TopNavBar extends Component {
  render() {
    return (
      <Navbar
        sticky="top"
        expand="lg"
        bg="dark"
        variant="dark"
        className="top-nav-bar">
        <Link to="/home" className="navbar-brand">
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
