import { createActions } from 'redux-actions'

const Prefix = 'TextEditor.'

export const SAVE_DATA_DONE = Prefix + 'SAVE_DATA_DONE'
export const SAVE_DATA_FAIL = Prefix + 'SAVE_DATA_FAIL'
export const SAVE_DATA_INIT = Prefix + 'SAVE_DATA_INIT'

const saveDataDone = createActions('SAVE_DATA_DONE')
const saveDataInit = createActions('SAVE_DATA_INIT')
const saveDataFail = createActions('SAVE_DATA_FAIL')

export function saveText({ textHtml }) {
  return dispatch => {
    dispatch(saveDataDone(textHtml))
  }
}
