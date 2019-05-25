import React, { Component } from 'react'
import { Modal, ModalBody, ModalFooter, ModalTitle } from 'react-bootstrap'
import _ from 'underscore'
import $ from 'jquery'

class PreviewModal extends Component {
  handleBackgroundSelect(event) {
    let backgroundClass = event.currentTarget.classList[1]
    $('#preview-main')[0].className = `modal-body ${backgroundClass}`
  }
  render() {
    const { showModal, closeModal, innerHtml } = this.props
    let tiles = []
    let colors = [
      'red-white',
      'blue-white',
      'green-white',
      'yellow-white',
      'orange-white',
    ]

    _.map(colors, (value, key) => {
      tiles.push(
        <div
          className={`preview-tile ${value}`}
          key={key}
          onClick={this.handleBackgroundSelect}
        />
      )
    })
    return (
      <Modal
        bsPrefix="modal"
        show={showModal}
        size={1000}
        onHide={closeModal}
        restoreFocus={true}>
        <ModalTitle bsPrefix="modal-header modal-text-preview-header">
          Preview
          <button className="text-button" onClick={closeModal}>
            X
          </button>
        </ModalTitle>
        <ModalBody
          id="preview-main"
          dangerouslySetInnerHTML={{
            __html: innerHtml,
          }}
        />
        <ModalFooter bsPrefix="modal-footer preview-background">
          <div>Choose Background</div>
          {tiles}
        </ModalFooter>
      </Modal>
    )
  }
}
export default PreviewModal
