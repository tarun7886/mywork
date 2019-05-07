import React from 'react'
import { Link } from 'react-router-dom'
import _ from 'underscore'
import { Nav } from 'react-bootstrap'
import classNames from 'classnames'

const ModulesBar = props => {
  var output = []
  var i = 0

  _.map(props.modules, (module, key) => {
    output.push(
      <Nav.Item
        key={i}
        className={classNames({
          active: key === props.activeModule,
        })}>
        <Link
          to={`/home/${key}`}
          onClick={() => {
            props.activateModule(key)
          }}
          className="nav-link padding10">
          <span className={` icon-class marginlr10`}>
            <img src={require(`../images/${key}.png`)} />
          </span>
          {module}
        </Link>
      </Nav.Item>
    )
    i++
  })

  return <Nav className="navbar-nav">{output}</Nav>
}
export default ModulesBar
