import React from 'react'
import { createStore, combineReducers } from 'redux'
import * as TextEditor from './TextEditor'
import * as ImageEditor from './ImageEditor'
import $ from 'jquery'

export const ConfigureStore = () => {
  var reducer = $.extend({}, TextEditor)
  reducer = $.extend(reducer, ImageEditor)

  const store = createStore(
    combineReducers(reducer),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  return store
}
