import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class TopNavBar extends Component {
  render() {
    return (
      <Navbar sticky="top" expand="lg" bg="dark" variant="dark">
        <Link to="/home" className="navbar-brand">
          Home
        </Link>
        <Nav className="mr-auto justify-content-end">
          <Link to="/contact" className="nav-link">
            Contacts
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </Nav>
      </Navbar>
    )
  }
}
export default TopNavBar
