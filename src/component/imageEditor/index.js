import React, { Component } from 'react'
import $ from 'jquery'
import _ from 'underscore'
import classNames from 'classnames'
import ReactAvatarEditor from 'react-avatar-editor'

export default class ImageEditor extends Component {
  constructor() {
    super()
    this.state = {
      imageInput: null,
      canvasFilter: '',
      zoom: 1.2,
      rotate: 0,
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleUpload = this.handleUpload.bind(this)
    this.straightenerValue = 0
  }

  handleFileChange(dataUri) {
    this.setState({
      imageInput: dataUri,
    })
  }

  handleUpload() {
    $(this.imageInputRef).trigger('click')
  }

  handleInput(event) {
    var reader = new FileReader()
    var file = event.target.files[0]
    reader.onload = function(img) {
      this.handleFileChange(img.target.result)
    }.bind(this)
    reader.readAsDataURL(file)
  }

  handleEditing(e, type) {
    const currentValue = parseFloat(e.target.value)
    if (type === 'rotate') {
      let rotate = this.state.rotate
      let previousScale = this.straightenerValue
      let degree = currentValue - previousScale
      rotate = rotate + degree
      this.straightenerValue = currentValue
      this.setState({ rotate: rotate })
    } else {
      this.setState({
        type: currentValue,
      })
    }
  }

  render() {
    let imageUploaded = !_.isNull(this.state.imageInput)
    let UploadButton = (
      <button
        onClick={this.handleUpload}
        className={classNames('upload-btn btn btn-150 btn-primary', {
          'change-photo': imageUploaded,
        })}>
        {' '}
        {imageUploaded ? 'Change Image' : ' Upload '}{' '}
      </button>
    )
    return (
      <div className="image-editor-wrapper">
        <div className="row">
          <div className="col col-sm-6">
            <ReactAvatarEditor
              image={this.state.imageInput}
              border={[150, 50]}
              width={300}
              height={300}
              filters={this.state.canvasFilter}
              borderRadius={75}
              scale={this.state.zoom}
            />
            <form action="" ref={c => (this.inputForm = c)}>
              <input
                type="file"
                accept="image/*"
                name="image"
                onChange={this.handleInput}
                ref={c => (this.imageInputRef = c)}
                id="image-input"
                className="display-none"
              />
            </form>
            {UploadButton}
          </div>
          <div className="col col-sm-6" />
        </div>
      </div>
    )
  }
}
