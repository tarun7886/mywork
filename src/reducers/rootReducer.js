import { createStore, combineReducers } from 'redux'
import { TextEditor } from './TextEditor'
import { ImageEditor } from './ImageEditor'

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      TextEditor: TextEditor,
      ImageEditor: ImageEditor,
    })
  )
  return store
}
