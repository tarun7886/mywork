import React, { Component } from 'react'
import ModulesBar from '../component/ModulesBar'
import TextEditor from '../component/textEditor/index'
import { Container, Row, Col } from '../../node_modules/react-bootstrap'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ImageEditor from '../component/imageEditor'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      modules: { 'text-editor': 'Text Editor', 'image-editor': 'Image Editor' },
      activeModule: 'text-editor',
    }
    this.activateModule = this.activateModule.bind(this)
  }

  activateModule(mod) {
    this.setState({
      activeModule: mod,
    })
  }

  render() {
    return (
      <Router>
        <Container fluid>
          <Row>
            <div className="  modules-left-bar padding0">
              <ModulesBar
                modules={this.state.modules}
                activeModule={this.state.activeModule}
                activateModule={this.activateModule}
              />
            </div>
            <div className="padding20 ">
              <Route path={`/home`} exact component={TextEditor} />
              <Route path={`/home/text-editor`} component={TextEditor} />
              <Route
                exact
                path={'/home/image-editor'}
                component={ImageEditor}
              />
            </div>
          </Row>
        </Container>
      </Router>
    )
  }
}
export default Home
