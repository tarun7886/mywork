import { handleActions } from 'redux-actions'
import { getLocalVariable } from '../services/helpers'
import $ from 'jquery'

const initialState = {
  leftNavPinned: getLocalVariable('pinned_left_nav', false),
}
export const LayoutReducer = handleActions(
  {
    TOGGLE_LEFT_NAV: (state) => {
      let newState = $.extend(true, {}, state)
      newState.leftNavPinned = !state.leftNavPinned
      localStorage.setItem('pinned_left_nav', newState.leftNavPinned)
      return newState
    },
  },
  initialState
)
