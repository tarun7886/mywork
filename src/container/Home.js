import React, { Component } from 'react'
import $ from 'jquery'
import _ from 'underscore'
import ModulesBar from '../component/ModulesBar'
import TextEditor from '../component/textEditor/index'
import { Container, Row } from '../../node_modules/react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ImageEditor from '../component/imageEditor'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      modules: {
        'text-editor': 'Text Editor',
        'image-editor': 'Image Editor',
      },
      activeModule: 'text-editor',
    }
    this.activateModule = this.activateModule.bind(this)
  }

  activateModule(mod) {
    this.setState({
      activeModule: mod,
    })
  }

  componentWillMount() {
    let pathname = window.location.pathname
    pathname = pathname.split('/')
    if (_.size(pathname) > 2) {
      this.activateModule(pathname[2])
    }
  }

  componentDidMount() {
    $('head title')[0].innerText = `Home | Rest In peace`
  }

  render() {
    return (
      <Router>
        <Container fluid>
          <Row>
            <div className="modules-left-bar padding0">
              <ModulesBar
                modules={this.state.modules}
                activeModule={this.state.activeModule}
                activateModule={this.activateModule}
              />
            </div>
            <div className="padding20 module-panel-wrapper">
              <div className="padding20 module-panel">
                <Route path={`/`} exact component={TextEditor} />
                <Route path={`/home`} exact component={TextEditor} />
                <Route path={`/home/text-editor`} component={TextEditor} />
                <Route
                  exact
                  path={'/home/image-editor'}
                  component={ImageEditor}
                />
              </div>
            </div>
          </Row>
        </Container>
      </Router>
    )
  }
}
export default Home
