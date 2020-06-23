import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LayoutWorkspace from './LayoutWorkspace'
import { Header } from '../component/Header'
import RotatingNavigation from '../component/RotatingNavigation'
import LeftNavigation from '../component/LeftNav/LeftNavigation'

const Routes = () => {
  return (
    <Router basename={process.env.REACT_APP_BASE_HOST}>
      <Route path="/" component={Layout} />
    </Router>
  )
}

const Layout = (props) => {
  return (
    <div className="layout">
      <Header />
      <LeftNavigation />
      <RotatingNavigation />
      <LayoutWorkspace />
    </div>
  )
}

export default Routes
