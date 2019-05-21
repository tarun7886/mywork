import { createAction } from 'redux-actions'

const Prefix = 'TextEditor.'

export const SAVE_DATA_DONE = Prefix + 'SAVE_DATA_DONE'
// export const SAVE_DATA_FAIL = Prefix + 'SAVE_DATA_FAIL'
// export const SAVE_DATA_INIT = Prefix + 'SAVE_DATA_INIT'

const saveDataDone = createAction(SAVE_DATA_DONE)
// const saveDataInit = createAction(SAVE_DATA_INIT)
// const saveDataFail = createAction(SAVE_DATA_FAIL)

export const saveInputText = textHtml => {
  return dispatch => {
    dispatch(saveDataDone(textHtml))
  }
}
