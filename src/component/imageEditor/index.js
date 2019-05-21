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
      brightness: 1,
      contrast: 1,
      opacity: 1,
      saturate: 0,
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleUpload = this.handleUpload.bind(this)
    this.handleEditing = this.handleEditing.bind(this)
    this.straightenerValue = 0
  }

  componentDidMount() {
    this.cropPanel.addEventListener('click', () => {
      $('#crop-tabs').slideToggle()
    })
    this.filterPanel.addEventListener('click', () => {
      $('#filter-tabs').slideToggle()
    })
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

  handleEditing(e) {
    const currentValue = parseFloat(e.target.value)
    const type = e.target.dataset.name
    if (type === 'straighten') {
      let rotate = this.state.rotate
      let previousScale = this.straightenerValue
      let degree = currentValue - previousScale
      rotate = rotate + degree
      this.straightenerValue = currentValue
      this.setState({ rotate: rotate })
    } else {
      this.setState({
        [type]: currentValue,
      })
    }
  }

  getSliderBackgroundStyle(element) {
    let width = 0
    switch (element) {
      case 'zoom':
        width = ((parseFloat(this.state.zoom) - 0.5) / 1.5) * 100
        break
      case 'straighten':
        width = ((parseFloat(this.straightenerValue) + 45) / 90) * 100
        break
      case 'brightness':
        width = ((parseFloat(this.state.brightness) - 0.5) / 1.5) * 100
        break
      case 'contrast':
        width = ((parseFloat(this.state.contrast) - 0.5) / 1.5) * 100
        break
      case 'opacity':
        width = parseFloat(this.state.opacity) * 100
        break
      case 'saturate':
        width = ((parseFloat(this.state.saturate) - 0.5) / 1.5) * 100
        break
      default:
        width = 0
    }
    return `linear-gradient(to right, gray 0%,orange ${width}%,#dadada ${width}%,#dadada 100%)`
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
    let cropValues = [
      {
        name: 'zoom',
        min: 0.5,
        max: 2,
        step: 0.01,
        defaultValue: 1.2,
        func: this.handleEditing,
        value: this.state.zoom,
        style: this.getSliderBackgroundStyle('zoom'),
      },
      {
        name: 'straighten',
        min: -45,
        max: 45,
        step: 1,
        defaultValue: 0,
        func: this.handleEditing,
        value: this.state.straightenerValue,
        style: this.getSliderBackgroundStyle('straighten'),
      },
    ]
    let filterValues = [
      {
        name: 'brightness',
        min: 0.5,
        max: 2,
        step: 0.01,
        defaultValue: 1,
        func: this.handleEditing,
        value: this.state.brightness,
        style: this.getSliderBackgroundStyle('brightness'),
      },
      {
        name: 'contrast',
        min: 0.5,
        max: 2,
        step: 0.01,
        defaultValue: 1,
        func: this.handleEditing,
        value: this.state.contrast,
        style: this.getSliderBackgroundStyle('contrast'),
      },
      {
        name: 'opacity',
        min: 0,
        max: 1,
        step: 0.01,
        defaultValue: 1,
        func: this.handleEditing,
        value: this.state.opacity,
        style: this.getSliderBackgroundStyle('opacity'),
      },
      {
        name: 'saturate',
        min: 0.5,
        max: 2,
        step: 0.01,
        defaultValue: 0,
        func: this.handleEditing,
        value: this.state.saturate,
        style: this.getSliderBackgroundStyle('saturate'),
      },
    ]
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
            <div className="align-center">{UploadButton}</div>
          </div>
          <div className="col col-sm-6">
            <div className="img-panel-crop">
              <h3
                className="padding10 border-bottom-dark-gray margin0"
                ref={c => {
                  this.cropPanel = c
                }}>
                Crop
              </h3>
              <div id="crop-tabs" className="img-panel-tabs">
                {_.map(cropValues, (value, key) => {
                  return <InputRange {...value} key={key} />
                })}
              </div>
            </div>
            <br />
            <div className="img-panel-filter">
              <h3
                className="padding10 border-bottom-dark-gray margin0"
                ref={c => {
                  this.filterPanel = c
                }}>
                Filter
              </h3>
              <div id="filter-tabs" className="img-panel-tabs">
                {_.map(filterValues, (value, key) => {
                  return <InputRange {...value} key={key} />
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function InputRange(props) {
  const {
    min = 0,
    max = 1,
    step = 0.1,
    func = () => {},
    defaultValue = 0,
    style = '',
    name = '',
    value = 0,
  } = props
  return (
    <div className="img-panel-tab">
      <div className="margin0 padding20 paddingtb5 paddingb0 align-left">
        {`${name.toUpperCase()} : ${value}`}
      </div>
      <input
        type="range"
        name={name}
        data-name={name}
        onChange={e => func(e)}
        min={min}
        max={max}
        step={step}
        defaultValue={defaultValue}
        style={{ background: style }}
      />
    </div>
  )
}
