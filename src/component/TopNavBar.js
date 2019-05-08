import React, { Component } from 'react'
import $ from 'jquery'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class TopNavBar extends Component {
  componentDidMount() {
    document.addEventListener('scroll', () => {
      console.log(window.innerHeight)
    })
  }
  render() {
    return (
      <Navbar
        sticky="top"
        expand="lg"
        bg="white"
        variant="white"
        className="top-nav-bar border-bottom-gray">
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
