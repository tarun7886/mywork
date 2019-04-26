import React, { Component } from 'react'
import ModulesBar from '../component/ModulesBar'
import TextEditor from '../component/textEditor/index'
import { Container, Row, Col } from '../../node_modules/react-bootstrap'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import About from './About'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      modules: { 'text-editor': 'Text Editor', 'image-editor': 'Image Editor' },
      activeModule: 'text-editor',
    }
    this.selectModule = this.selectModule.bind(this)
  }

  selectModule(mod) {
    this.setState({
      activateModule: mod,
    })
  }

  render() {
    return (
      <Router>
        <Container fluid>
          <Row>
            <Col xs={12} sm={2} md={2} lg={2} className="modules-left-bar">
              <ModulesBar
                modules={this.state.modules}
                activateMod={this.selectModule}
              />
            </Col>
            <Col xs={12} sm={10} md={10} lg={10} className="padding20">
              <Route path={`/home/text-editor`} component={TextEditor} />
              <Route exact path={'/home/image-editor'} component={About} />
            </Col>
          </Row>
        </Container>
      </Router>
    )
  }
}
export default Home
