import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import * as TextEditor from './TextEditor'
import * as ImageEditor from './ImageEditor'
import * as LayoutReducer from './LayoutReducer'
import $ from 'jquery'

let middleware = applyMiddleware(thunk, logger)

export const ConfigureStore = () => {
  var reducer = $.extend({}, TextEditor)
  reducer = $.extend(reducer, ImageEditor)
  reducer = $.extend(reducer, LayoutReducer)

  const store = createStore(combineReducers(reducer), middleware)

  return store
}
