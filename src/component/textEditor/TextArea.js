import React, { Component } from 'react'

export default class TextEditor extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this._handleInputChange = this._handleInputChange.bind(this)
    this.oDoc = React.createRef()
    this.sDefTxt = null
  }

  _handleInputChange(event) {
    this.setState({
      input: event.target.value,
      staticInput: event.target.value,
    })
  }

  componentDidMount() {
    this.sDefTxt = this.oDoc.current.innerHTML
  }

  formatDoc(sCmd, sValue) {
    // var oDoc = document.getElementById('text-preview')
    document.execCommand(sCmd, false, sValue)
    this.oDoc.current.focus()
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
        this.oDoc.current.innerHTML +
        '</body></html>'
    )
    oPrntWin.document.close()
  }

  render() {
    return (
      <div className="text-editor-container">
        <div className="row">
          <div className="col">
            <div id="toolBar1">
              <select
                onChange={event => {
                  this.formatDoc('formatblock', event.target.value)
                }}
                defaultValue="formatting">
                <option value="" disabled hidden>
                  - formatting -
                </option>
                <option value="h1">Title 1</option>
                <option value="h2">Title 2</option>
                <option value="h3">Title 3</option>
                <option value="h4">Title 4</option>
                <option value="h5">Title 5</option>
                <option value="h6">Subtitle</option>
                <option value="p">Paragraph</option>
                <option value="pre">Preformatted</option>
              </select>
              <select
                onChange={event => {
                  this.formatDoc('fontname', event.target.value)
                }}
                defaultValue="font">
                <option className="heading" value="font">
                  - font -
                </option>
                <option value="Arial">Arial</option>
                <option value="Arial Black">Arial Black</option>
                <option value="Courier New">Courier New</option>
                <option value="Times New Roman">Times New Roman</option>
              </select>
              <select
                onChange={event => {
                  this.formatDoc('fontsize', event.target.value)
                }}>
                <option className="heading" value="size">
                  - size -
                </option>
                <option value="1">Very small</option>
                <option value="2">A bit small</option>
                <option value="3">Normal</option>
                <option value="4">Medium-large</option>
                <option value="5">Big</option>
                <option value="6">Very big</option>
                <option value="7">Maximum</option>
              </select>
              <select
                onChange={event => {
                  this.formatDoc('forecolor', event.target.value)
                }}>
                <option
                  className="heading"
                  value=""
                  disabled
                  hidden
                  defaultValue>
                  - color -
                </option>
                <option value="black">Black</option>
                <option value="white">White</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
              </select>
              <select
                onChange={event => {
                  this.formatDoc('backcolor', event.target.value)
                }}>
                <option
                  className="heading"
                  value=""
                  disabled
                  hidden
                  defaultValue>
                  - background -
                </option>
                <option value="black">Black</option>
                <option value="white">White</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
              </select>
            </div>
            <div id="toolBar2">
              <img
                className="intLink"
                alt="Clean"
                title="Clean"
                onClick={() =>
                  (document.getElementById(
                    'text-preview'
                  ).innerHTML = this.sDefTxt)
                }
                src="data:image/gif;base64,R0lGODlhFgAWAIQbAD04KTRLYzFRjlldZl9vj1dusY14WYODhpWIbbSVFY6O7IOXw5qbms+wUbCztca0ccS4kdDQjdTLtMrL1O3YitHa7OPcsd/f4PfvrvDv8Pv5xv///////////////////yH5BAEKAB8ALAAAAAAWABYAAAV84CeOZGmeaKqubMteyzK547QoBcFWTm/jgsHq4rhMLoxFIehQQSAWR+Z4IAyaJ0kEgtFoLIzLwRE4oCQWrxoTOTAIhMCZ0tVgMBQKZHAYyFEWEV14eQ8IflhnEHmFDQkAiSkQCI2PDC4QBg+OAJc0ewadNCOgo6anqKkoIQA7"
              />
              <img
                className="intLink"
                alt="Print"
                title="Print"
                onClick={() => this.printDoc()}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABGdBTUEAALGPC/xhBQAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9oEBxcZFmGboiwAAAAIdEVYdENvbW1lbnQA9syWvwAAAuFJREFUOMvtlUtsjFEUx//n3nn0YdpBh1abRpt4LFqtqkc3jRKkNEIsiIRIBBEhJJpKlIVo4m1RRMKKjQiRMJRUqUdKPT71qpIpiRKPaqdF55tv5vvusZjQTjOlseUkd3Xu/3dPzusC/22wtu2wRn+jG5So/OCDh8ycMJDflehMlkJkVK7KUYN+ufzA/RttH76zaVocDptRxzQtNi3mRWuPc+6cKtlXZ/sddP2uu9uXlmYXZ6Qm8v4Tz8lhF1H+zDQXt7S8oLMXtbF4e8QaFHjj3kbP2MzkktHpiTjp9VH6iHiA+whtAsX5brpwueMGdONdf/2A4M7ukDs1JW662+XkqTkeUoqjKtOjm2h53YFL15pSJ04Zc94wdtibr26fXlC2mzRvBccEbz2kiRFD414tKMlEZbVGT33+qCoHgha81SWYsew0r1uzfNylmtpx80pngQQ91LwVk2JGvGnfvZG6YcYRAT16GFtW5kKKfo1EQLtfh5Q2etT0BIWF+aitq4fDbk+ImYo1OxvGF03waFJQvBCkvDffRyEtxQiFFYgAZTHS0zwAGD7fG5TNnYNTp8/FzvGwJOfmgG7GOx0SAKKgQgDMgKBI0NJGMEImpGDk5+WACEwEd0ywblhGUZ4Hw5OdUekRBLT7DTgdEgxACsIznx8zpmWh7k4rkpJcuHDxCul6MDsmmBXDlWCH2+XozSgBnzsNCEE4euYV4pwCpsWYPW0UHDYBKSWu1NYjENDReqtKjwn2+zvtTc1vMSTB/mvev/WEYSlASsLimcOhOBJxw+N3aP/SjefNL5GePZmpu4kG7OPr1+tOfPyUu3BecWYKcwQcDFmwFKAUo90fhKDInBCAmvqnyMgqUEagQwCoHBDc1rjv9pIlD8IbVkz6qYViIBQGTJPx4k0XpIgEZoRN1Da0cij4VfR0ta3WvBXH/rjdCufv6R2zPgPH/e4pxSBCpeatqPrjNiso203/5s/zA171Mv8+w1LOAAAAAElFTkSuQmCC"
              />
              <img
                className="intLink"
                alt="Undo"
                title="Undo"
                onClick={() => {
                  this.formatDoc('undo')
                }}
                src="data:image/gif;base64,R0lGODlhFgAWAOMKADljwliE33mOrpGjuYKl8aezxqPD+7/I19DV3NHa7P///////////////////////yH5BAEKAA8ALAAAAAAWABYAAARR8MlJq7046807TkaYeJJBnES4EeUJvIGapWYAC0CsocQ7SDlWJkAkCA6ToMYWIARGQF3mRQVIEjkkSVLIbSfEwhdRIH4fh/DZMICe3/C4nBQBADs="
              />
              <img
                className="intLink"
                alt="Redo"
                title="Redo"
                onClick={() => {
                  this.formatDoc('redo')
                }}
                src="data:image/gif;base64,R0lGODlhFgAWAMIHAB1ChDljwl9vj1iE34Kl8aPD+7/I1////yH5BAEKAAcALAAAAAAWABYAAANKeLrc/jDKSesyphi7SiEgsVXZEATDICqBVJjpqWZt9NaEDNbQK1wCQsxlYnxMAImhyDoFAElJasRRvAZVRqqQXUy7Cgx4TC6bswkAOw=="
              />
              <img
                className="intLink"
                alt="Remove formatting"
                title="Remove formatting"
                onClick={() => {
                  this.formatDoc('removeFormat')
                }}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABGdBTUEAALGPC/xhBQAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB9oECQMCKPI8CIIAAAAIdEVYdENvbW1lbnQA9syWvwAAAuhJREFUOMtjYBgFxAB501ZWBvVaL2nHnlmk6mXCJbF69zU+Hz/9fB5O1lx+bg45qhl8/fYr5it3XrP/YWTUvvvk3VeqGXz70TvbJy8+Wv39+2/Hz19/mGwjZzuTYjALuoBv9jImaXHeyD3H7kU8fPj2ICML8z92dlbtMzdeiG3fco7J08foH1kurkm3E9iw54YvKwuTuom+LPt/BgbWf3//sf37/1/c02cCG1lB8f//f95DZx74MTMzshhoSm6szrQ/a6Ir/Z2RkfEjBxuLYFpDiDi6Af///2ckaHBp7+7wmavP5n76+P2ClrLIYl8H9W36auJCbCxM4szMTJac7Kza////R3H1w2cfWAgafPbqs5g7D95++/P1B4+ECK8tAwMDw/1H7159+/7r7ZcvPz4fOHbzEwMDwx8GBgaGnNatfHZx8zqrJ+4VJBh5CQEGOySEua/v3n7hXmqI8WUGBgYGL3vVG7fuPK3i5GD9/fja7ZsMDAzMG/Ze52mZeSj4yu1XEq/ff7W5dvfVAS1lsXc4Db7z8C3r8p7Qjf///2dnZGxlqJuyr3rPqQd/Hhyu7oSpYWScylDQsd3kzvnH738wMDzj5GBN1VIWW4c3KDon7VOvm7S3paB9u5qsU5/x5KUnlY+eexQbkLNsErK61+++VnAJcfkyMTIwffj0QwZbJDKjcETs1Y8evyd48toz8y/ffzv//vPP4veffxpX77z6l5JewHPu8MqTDAwMDLzyrjb/mZm0JcT5Lj+89+Ybm6zz95oMh7s4XbygN3Sluq4Mj5K8iKMgP4f0////fv77//8nLy+7MCcXmyYDAwODS9jM9tcvPypd35pne3ljdjvj26+H2dhYpuENikgfvQeXNmSl3tqepxXsqhXPyc666s+fv1fMdKR3TK72zpix8nTc7bdfhfkEeVbC9KhbK/9iYWHiErbu6MWbY/7//8/4//9/pgOnH6jGVazvFDRtq2VgiBIZrUTIBgCk+ivHvuEKwAAAAABJRU5ErkJggg=="
              />
              <img
                className="intLink"
                alt="Bold"
                title="Bold"
                onClick={() => {
                  this.formatDoc('bold')
                }}
                src="data:image/gif;base64,R0lGODlhFgAWAID/AMDAwAAAACH5BAEAAAAALAAAAAAWABYAQAInhI+pa+H9mJy0LhdgtrxzDG5WGFVk6aXqyk6Y9kXvKKNuLbb6zgMFADs="
              />
              <img
                className="intLink"
                alt="Italic"
                title="Italic"
                onClick={() => {
                  this.formatDoc('italic')
                }}
                src="data:image/gif;base64,R0lGODlhFgAWAKEDAAAAAF9vj5WIbf///yH5BAEAAAMALAAAAAAWABYAAAIjnI+py+0Po5x0gXvruEKHrF2BB1YiCWgbMFIYpsbyTNd2UwAAOw=="
              />
              <img
                className="intLink"
                alt="Underline"
                title="Underline"
                onClick={() => {
                  this.formatDoc('underline')
                }}
                src="data:image/gif;base64,R0lGODlhFgAWAKECAAAAAF9vj////////yH5BAEAAAIALAAAAAAWABYAAAIrlI+py+0Po5zUgAsEzvEeL4Ea15EiJJ5PSqJmuwKBEKgxVuXWtun+DwxCCgA7"
              />
              <img
                className="intLink"
                alt="Left align"
                title="Left align"
                onClick={() => {
                  this.formatDoc('justifyleft')
                }}
                src="data:image/gif;base64,R0lGODlhFgAWAID/AMDAwAAAACH5BAEAAAAALAAAAAAWABYAQAIghI+py+0Po5y02ouz3jL4D4JMGELkGYxo+qzl4nKyXAAAOw=="
              />
              <img
                className="intLink"
                alt="Center align"
                title="Center align"
                onClick={() => {
                  this.formatDoc('justifycenter')
                }}
                src="data:image/gif;base64,R0lGODlhFgAWAID/AMDAwAAAACH5BAEAAAAALAAAAAAWABYAQAIfhI+py+0Po5y02ouz3jL4D4JOGI7kaZ5Bqn4sycVbAQA7"
              />
              <img
                className="intLink"
                alt="Right align"
                title="Right align"
                onClick={() => {
                  this.formatDoc('justifyright')
                }}
                src="data:image/gif;base64,R0lGODlhFgAWAID/AMDAwAAAACH5BAEAAAAALAAAAAAWABYAQAIghI+py+0Po5y02ouz3jL4D4JQGDLkGYxouqzl43JyVgAAOw=="
              />
              <img
                className="intLink"
                alt="Numbered list"
                title="Numbered list"
                onClick={() => {
                  this.formatDoc('insertorderedlist')
                }}
                src="data:image/gif;base64,R0lGODlhFgAWAMIGAAAAADljwliE35GjuaezxtHa7P///////yH5BAEAAAcALAAAAAAWABYAAAM2eLrc/jDKSespwjoRFvggCBUBoTFBeq6QIAysQnRHaEOzyaZ07Lu9lUBnC0UGQU1K52s6n5oEADs="
              />
              <img
                className="intLink"
                alt="Dotted list"
                title="Dotted list"
                onClick={() => {
                  this.formatDoc('insertunorderedlist')
                }}
                src="data:image/gif;base64,R0lGODlhFgAWAMIGAAAAAB1ChF9vj1iE33mOrqezxv///////yH5BAEAAAcALAAAAAAWABYAAAMyeLrc/jDKSesppNhGRlBAKIZRERBbqm6YtnbfMY7lud64UwiuKnigGQliQuWOyKQykgAAOw=="
              />
              <img
                className="intLink"
                alt="Quote"
                title="Quote"
                onClick={() => {
                  this.formatDoc('formatblock', 'blockquote')
                }}
                src="data:image/gif;base64,R0lGODlhFgAWAIQXAC1NqjFRjkBgmT9nqUJnsk9xrFJ7u2R9qmKBt1iGzHmOrm6Sz4OXw3Odz4Cl2ZSnw6KxyqO306K63bG70bTB0rDI3bvI4P///////////////////////////////////yH5BAEKAB8ALAAAAAAWABYAAAVP4CeOZGmeaKqubEs2CekkErvEI1zZuOgYFlakECEZFi0GgTGKEBATFmJAVXweVOoKEQgABB9IQDCmrLpjETrQQlhHjINrTq/b7/i8fp8PAQA7"
              />
              <img
                className="intLink"
                alt="Delete indentation"
                title="Delete indentation"
                onClick={() => {
                  this.formatDoc('outdent')
                }}
                src="data:image/gif;base64,R0lGODlhFgAWAMIHAAAAADljwliE35GjuaezxtDV3NHa7P///yH5BAEAAAcALAAAAAAWABYAAAM2eLrc/jDKCQG9F2i7u8agQgyK1z2EIBil+TWqEMxhMczsYVJ3e4ahk+sFnAgtxSQDqWw6n5cEADs="
              />
              <img
                className="intLink"
                alt="Add indentation"
                title="Add indentation"
                onClick={() => {
                  this.formatDoc('indent')
                }}
                src="data:image/gif;base64,R0lGODlhFgAWAOMIAAAAADljwl9vj1iE35GjuaezxtDV3NHa7P///////////////////////////////yH5BAEAAAgALAAAAAAWABYAAAQ7EMlJq704650B/x8gemMpgugwHJNZXodKsO5oqUOgo5KhBwWESyMQsCRDHu9VOyk5TM9zSpFSr9gsJwIAOw=="
              />
              <img
                className="intLink"
                alt="Hyperlink"
                title="Hyperlink"
                onClick={() => {
                  var sLnk = prompt('Write the URL here', 'http://')
                  if (sLnk && sLnk !== '' && sLnk !== 'http://') {
                    this.formatDoc('createlink', sLnk)
                  }
                }}
                src="data:image/gif;base64,R0lGODlhFgAWAOMKAB1ChDRLY19vj3mOrpGjuaezxrCztb/I19Ha7Pv8/f///////////////////////yH5BAEKAA8ALAAAAAAWABYAAARY8MlJq7046827/2BYIQVhHg9pEgVGIklyDEUBy/RlE4FQF4dCj2AQXAiJQDCWQCAEBwIioEMQBgSAFhDAGghGi9XgHAhMNoSZgJkJei33UESv2+/4vD4TAQA7"
              />
              <img
                className="intLink"
                alt="Cut"
                title="Cut"
                onClick={() => {
                  this.formatDoc('cut')
                }}
                src="data:image/gif;base64,R0lGODlhFgAWAIQSAB1ChBFNsRJTySJYwjljwkxwl19vj1dusYODhl6MnHmOrpqbmpGjuaezxrCztcDCxL/I18rL1P///////////////////////////////////////////////////////yH5BAEAAB8ALAAAAAAWABYAAAVu4CeOZGmeaKqubDs6TNnEbGNApNG0kbGMi5trwcA9GArXh+FAfBAw5UexUDAQESkRsfhJPwaH4YsEGAAJGisRGAQY7UCC9ZAXBB+74LGCRxIEHwAHdWooDgGJcwpxDisQBQRjIgkDCVlfmZqbmiEAOw=="
              />
              <img
                className="intLink"
                alt="Copy"
                title="Copy"
                onClick={() => {
                  this.formatDoc('copy')
                }}
                src="data:image/gif;base64,R0lGODlhFgAWAIQcAB1ChBFNsTRLYyJYwjljwl9vj1iE31iGzF6MnHWX9HOdz5GjuYCl2YKl8ZOt4qezxqK63aK/9KPD+7DI3b/I17LM/MrL1MLY9NHa7OPs++bx/Pv8/f///////////////yH5BAEAAB8ALAAAAAAWABYAAAWG4CeOZGmeaKqubOum1SQ/kPVOW749BeVSus2CgrCxHptLBbOQxCSNCCaF1GUqwQbBd0JGJAyGJJiobE+LnCaDcXAaEoxhQACgNw0FQx9kP+wmaRgYFBQNeAoGihCAJQsCkJAKOhgXEw8BLQYciooHf5o7EA+kC40qBKkAAAGrpy+wsbKzIiEAOw=="
              />
              <img
                className="intLink"
                alt="Paste"
                title="Paste"
                onClick={() => {
                  this.formatDoc('paste')
                }}
                src="data:image/gif;base64,R0lGODlhFgAWAIQUAD04KTRLY2tXQF9vj414WZWIbXmOrpqbmpGjudClFaezxsa0cb/I1+3YitHa7PrkIPHvbuPs+/fvrvv8/f///////////////////////////////////////////////yH5BAEAAB8ALAAAAAAWABYAAAWN4CeOZGmeaKqubGsusPvBSyFJjVDs6nJLB0khR4AkBCmfsCGBQAoCwjF5gwquVykSFbwZE+AwIBV0GhFog2EwIDchjwRiQo9E2Fx4XD5R+B0DDAEnBXBhBhN2DgwDAQFjJYVhCQYRfgoIDGiQJAWTCQMRiwwMfgicnVcAAAMOaK+bLAOrtLUyt7i5uiUhADs="
              />
            </div>
          </div>
        </div>
        <div
          id="text-preview"
          ref={this.oDoc}
          className="editable-div"
          contentEditable={true}
        />
      </div>
    )
  }
}
