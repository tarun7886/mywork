import { handleActions } from 'redux-actions'
import {
  SAVE_DATA_DONE,
  SAVE_DATA_INIT,
  SAVE_DATA_FAIL,
} from '../actions/TextEditor'
import $ from 'jquery'

const textEditorState = {
  textHtml: '',
}

export const TextEditor = handleActions(
  {
    [SAVE_DATA_DONE]: (state, action) => {
      let newState = $.extend({}, state, true)
      newState.textHtml = action.payload
      return newState
    },
  },
  textEditorState
)
