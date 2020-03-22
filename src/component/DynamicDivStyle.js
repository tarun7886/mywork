import React, { Component } from 'react'
import $ from 'jquery'

import './styles.css'

class DynamicDiv extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: props.text,
      width: 0,
      hovering: false,
    }
  }
  componentWillMount() {
    const { text } = this.props
    var o = $('<div></div>')
      .text(text)
      .css({
        position: 'absolute',
        float: 'left',
        'white-space': 'nowrap',
        visibility: 'hidden',
      })
      .appendTo($('body'))

    var width = o.width()
    o.remove()
    this.setState({
      width: width,
    })
  }

  onMouseOver() {
    this.setState({
      hovering: true,
    })
  }
  onMouseOut() {
    this.setState({
      hovering: false,
    })
  }

  render() {
    const { width, text, hovering } = this.state
    var style = {
      maxWidth: hovering && width,
    }
    return (
      <div className="background">
        <div
          className="container"
          style={{ width: width + 10 }}
          onMouseOver={this.onMouseOver.bind(this)}
          onMouseOut={this.onMouseOut.bind(this)}>
          <span className="text-wrap" style={style}>
            {text}
          </span>
          <span className="icon-cross" style={{ opacity: hovering ? 1 : 0 }}>
            X
          </span>
        </div>
      </div>
    )
  }
}
export default DynamicDiv
