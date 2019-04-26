import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import TopNavBar from '../component/TopNavBar'

function Routes() {
  return (
    <Router>
      <TopNavBar />
      <Route path="/" exact component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Router>
  )
}
export default Routes
