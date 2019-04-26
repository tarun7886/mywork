import React, { Component } from 'react'

export default class TextEditor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
    }
    this._handleInputChange = this._handleInputChange.bind(this)
  }

  _handleInputChange(event) {
    this.setState({ input: event.target.value })
  }

  render() {
    return (
      <textarea
        className="text-area-main"
        placeholder={'Enter Text'}
        onChange={this._handleInputChange}
        value={this.state.input}
      />
    )
  }
}
