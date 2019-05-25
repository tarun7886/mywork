import React, { Component } from 'react'
import TextArea from './TextArea'
import PreviewModal from './PreviewModal'

export default class TextEditor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      innerHtml: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.togglePreview = this.togglePreview.bind(this)
  }

  handleInputChange(innerHtml) {
    this.setState({
      innerHtml: innerHtml,
    })
  }

  togglePreview() {
    this.setState({
      showModal: !this.state.showModal,
    })
  }

  render() {
    return (
      <div className="text-editor-wrapper">
        <TextArea handleInputChange={this.handleInputChange} />
        <div className="te-control-panel margintb10 align-center">
          <button
            className="btn btn-210 btn-primary marginlr10 align-center"
            onClick={this.togglePreview}>
            Preview
          </button>
          <button
            className="btn btn-210 btn-primary marginlr10 align-center"
            disabled
            onClick={this.togglePreview}>
            Save
          </button>
        </div>
        <PreviewModal
          showModal={this.state.showModal}
          closeModal={this.togglePreview}
          innerHtml={this.state.innerHtml}
        />
      </div>
    )
  }
}
