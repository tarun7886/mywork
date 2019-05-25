import React, { Component } from 'react'
import { connect } from 'react-redux'
import $ from 'jquery'
import _ from 'underscore'
import { saveInputText } from '../../actions/TextEditor'
import {
  COLOR_INPUT_FIELDS,
  SINGLE_INPUT_FIELDS_FIRST,
  SINGLE_INPUT_FIELDS_SECOND,
} from './constant'

class TextEditor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textHtml: '',
      focusContentEditable: false,
      styles: [
        'bold',
        'italic',
        'underline',
        'center-align',
        'left-align',
        'right-align',
        'justify-align',
      ],
      styleOptions: {
        font: '',
        color: '',
        size: '',
      },
      justToUpdateState: false,
      textAreaHeightSet: false,
    }
    this.toggleToUpdateState = this.toggleToUpdateState.bind(this)
    this.getSelectedStyles = this.getSelectedStyles.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleInputClick = this.handleInputClick.bind(this)
    this.formatDoc = this.formatDoc.bind(this)
    this.sDefTxt = null
  }

  componentWillUnmount() {
    const { saveInputText } = this.props
    let text = this.oDoc.innerHTML
    saveInputText(text)
  }

  componentDidMount() {
    const { textEditor } = this.props
    this.oDoc.innerHTML = textEditor.textHtml
    this.sDefTxt = this.oDoc.innerHTML
  }

  handleInputChange() {
    this.props.handleInputChange(this.oDoc.innerHTML)
    this.setState({
      textHtml: this.oDoc.innerHTML,
    })
  }

  handleInputClick(e) {
    let elm = e.currentTarget
    if (!_.isUndefined(elm)) {
      const { id } = elm.dataset
      $(`#${id}`).click()
    }
  }

  formatDoc(sCmd, sValue) {
    // var oDoc = document.getElementById('text-preview')
    document.execCommand(sCmd, false, sValue)
    this.oDoc.focus()
  }

  getSelectedString() {
    let selection = document.getSelection()
    let stringToBold = selection.toString()
    stringToBold = stringToBold
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')

    return stringToBold
  }

  printDoc() {
    var oPrntWin = window.open(
      '',
      '_blank',
      'width=450,height=470,left=400,top=100,menubar=yes,toolbar=no,location=no,scrollbars=yes'
    )
    oPrntWin.document.open()
    oPrntWin.document.write(
      '<!doctype html><html><head><title>Print</title></head><body onload="print();">' +
        this.oDoc.innerHTML +
        '</body></html>'
    )
    oPrntWin.document.close()
  }

  componentDidUpdate() {
    this.getSelectedStyles()
    if (!this.state.textAreaHeightSet) {
      this.setHeightAt400()
    }
  }

  setHeightAt400() {
    var pussy = this.oDoc
    if (!_.isUndefined(pussy)) {
      if (pussy.scrollHeight > 400) {
        this.oDoc.setAttribute('style', 'height : 400px ; overflow-y : scroll;')
        this.setState({
          textAreaHeightSet: true,
        })
      }
    }
  }

  getSelectedStyles() {
    setTimeout(() => {
      var mapping = {
        B: 'bold',
        I: 'italic',
        U: 'underline',
        center: 'center-align',
        left: 'left-align',
        right: 'right-align',
        justify: 'justify-align',
      }
      var cursor = window.getSelection()
      var node = cursor.anchorNode
      if (_.isNull(node)) {
        return
      }
      this.removeActiveClass()
      while (true) {
        if (node.nodeName === 'DIV' || node.nodeName === 'BLOCKQUOTE') {
          if (!_.isEmpty(node.style.textAlign)) {
            $(`#style-${mapping[node.style.textAlign]}`).addClass('active')
          }
          break
        } else if (
          _.contains(['B', 'I', 'U', '#text', 'FONT', 'SPAN'], node.nodeName)
        ) {
          if (
            node.nodeName !== '#text' &&
            node.nodeName !== 'FONT' &&
            node.nodeName !== 'SPAN'
          ) {
            $(`#style-${mapping[node.nodeName]}`).addClass('active')
          }
          node = node.parentElement
        } else {
          break
        }
      }
    }, 50)
  }

  removeActiveClass() {
    let ar = [
      'bold',
      'italic',
      'underline',
      'center-align',
      'left-align',
      'right-align',
      'justify-align',
    ]
    _.map(ar, value => {
      $(`#style-${value}`).removeClass('active')
    })
  }

  toggleToUpdateState() {
    this.setState({
      focusContentEditable: false,
    })
  }

  render() {
    return (
      <div className="text-editor-container">
        <div className="row margin0">
          <div className="function-panel">
            <div className="toolbar-2 margintb5">
              {_.map(SINGLE_INPUT_FIELDS_FIRST, (value, key) => {
                return (
                  <EditorTool key={key} {...value} format={this.formatDoc} />
                )
              })}
              {_.map(COLOR_INPUT_FIELDS, (value, key) => {
                return (
                  <ColorInput
                    key={key}
                    {...value}
                    func={this.handleInputClick}
                    format={this.formatDoc}
                  />
                )
              })}
              {_.map(SINGLE_INPUT_FIELDS_SECOND, (value, key) => {
                return (
                  <EditorTool key={key} {...value} format={this.formatDoc} />
                )
              })}
              <button
                className="text-button tool-icon"
                onClick={() => {
                  var sLnk = prompt('Write the URL here', 'http://')
                  if (sLnk && sLnk !== '' && sLnk !== 'http://') {
                    this.formatDoc('createlink', sLnk)
                  }
                }}>
                <span className="material-icons"> insert_link </span>
              </button>
              <button
                className="text-button tool-icon"
                onClick={() => this.printDoc()}>
                <span className="material-icons"> print </span>
              </button>
            </div>
          </div>
        </div>
        <div
          id="text-preview"
          contentEditable={true}
          ref={c => {
            this.oDoc = c
          }}
          className="editable-div padding10"
          placeholder="Your thoughts..."
          onInput={this.handleInputChange}
          onFocus={this.toggleToUpdateState}
          onBlur={this.toggleToUpdateState}
          onKeyDown={this.getSelectedStyles}
          onKeyPress={this.getSelectedStyles}
          onMouseDown={this.getSelectedStyles}
        />
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    textEditor: state.TextEditor,
  }
}

export default connect(
  mapStateToProps,
  { saveInputText }
)(TextEditor)

const EditorTool = props => {
  const { name = '', icon = '', id = '', value = '' } = props
  return (
    <button
      title={name}
      id={_.isEmpty(id) ? name : id}
      className="text-button tool-icon"
      onClick={() => props.format(name, value)}>
      <span className="material-icons"> {icon} </span>
    </button>
  )
}

const ColorInput = ({ name, icon, func, format }) => {
  return [
    <input
      type="color"
      className="display-none"
      id={`style-${name}`}
      onChange={e => format(name, e.target.value)}
    />,
    <button
      className="text-button tool-icon"
      alt="something"
      data-id={`style-${name}`}
      onClick={func}>
      <span className="material-icons"> {icon} </span>
    </button>,
  ]
}
