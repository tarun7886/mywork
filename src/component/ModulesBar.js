import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import _ from 'underscore'
import { Nav, Navbar } from 'react-bootstrap'

const ModulesBar = props => {
  var output = []
  _.map(props.modules, (module, key) => {
    output.push(
      <Nav.Item>
        <Link to={`/home/${key}`} className="nav-link">
          {module}
        </Link>
      </Nav.Item>
    )
  })

  return <Nav className="navbar-nav">{output}</Nav>
}
export default ModulesBar
