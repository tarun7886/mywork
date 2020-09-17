import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import TextEditor from '../component/textEditor'
import ImageEditor from '../component/ImageEditor'
import NotFoundPage from '../component/NotFoundPage'
import Home2 from './Home2'
import Tambola from '../component/Tambola'
import Finance from '../component/Finance'

const LayoutWorkspace = (props) => {
  return (
    <div
      className={`layout-workspace ${props.isOpen ? 'left-nav-pinned' : ''}`}>
      <Switch>
        <Route path="/error/404" exact component={NotFoundPage} />
        <Route path="/" exact component={Home2} />
        <Route path="/home" component={Home2} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path={`/text-editor`} component={TextEditor} />
        <Route path={'/image-editor'} component={ImageEditor} />
        <Route path={'/tambola'} component={Tambola} />
        <Route path={'/finance-tool'} component={Finance} />
        <Route path="*" exact={true} component={NotFoundPage} />
      </Switch>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isOpen: state.LayoutReducer.leftNavPinned,
  }
}

export default connect(mapStateToProps)(LayoutWorkspace)
