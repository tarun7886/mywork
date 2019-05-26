import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import TopNavBar from '../component/TopNavBar'
import TopBanner from '../component/TopBanner'
import NotFoundPage from '../component/NotFoundPage'
import MainFooter from '../component/Footer'

class Routes extends Component {
  render() {
    return (
      <Router>
        <TopBanner />
        <TopNavBar />
        <Switch>
          <Route path="/error/404" exact component={NotFoundPage} />
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="*" exact={true} component={NotFoundPage} />
        </Switch>
        <MainFooter />
      </Router>
    )
  }
}
export default Routes
