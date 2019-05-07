import React, { Component } from 'react'
import ReactAvatarEditor from 'react-avatar-editor'

export default class ImageEditor extends Component {
  render() {
    return (
      <div className="image-editor-wrapper">
        <ReactAvatarEditor />
      </div>
    )
  }
}
