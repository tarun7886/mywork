import React, { Component } from 'react'
import { Modal, ModalBody, ModalFooter, ModalTitle } from 'react-bootstrap'
import _ from 'underscore'
import classNames from 'classnames'

class PreviewModal extends Component {
  constructor() {
    super()
    this.state = {
      backgroundClass: '',
    }
    this.handleBackgroundSelect = this.handleBackgroundSelect.bind(this)
  }
  handleBackgroundSelect(event) {
    let dataset = event.currentTarget.dataset
    let backgroundClass = dataset.background
    this.setState({
      backgroundClass,
    })
  }
  render() {
    const { showModal, closeModal, innerHtml } = this.props
    let tiles = []
    let colors = [
      'red-white',
      'orange-white',
      'green-white',
      'yellow-white',
      'blue-white',
    ]
    _.map(colors, (value, key) => {
      tiles.push(
        <div
          className={`preview-tile ${value}`}
          data-background={value}
          key={key}
          onClick={this.handleBackgroundSelect}
        />
      )
    })
    return (
      <Modal
        bsPrefix="modal"
        show={showModal}
        autoFocus={true}
        enforceFocus={true}
        restoreFocus={true}
        dialogClassName="text-preview-modal"
        size="lg"
        onHide={closeModal}
        restoreFocus={true}>
        <ModalTitle bsPrefix="modal-header">
          Preview
          <button className="text-button" onClick={closeModal}>
            <span className="material-icons">close</span>
          </button>
        </ModalTitle>
        <ModalBody
          id="preview-main"
          bsPrefix={classNames('modal-body', this.state.backgroundClass)}
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
