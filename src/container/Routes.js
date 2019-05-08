import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import TopNavBar from '../component/TopNavBar'
import TopBanner from '../component/TopBanner'

function Routes() {
  return (
    <Router>
      <TopBanner />
      <TopNavBar />
      <Route path="/" exact component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Router>
  )
}
export default Routes
