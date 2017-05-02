// @flow

import createReducer from 'utils/create_reducer'
import { INPUT_KEY_DOWN, INPUT_KEY_UP } from 'actions/action_types'

const initialState = {
  pressedKeys: {},
}
export default createReducer(initialState, {
  [INPUT_KEY_DOWN]: (state, action) => (
    {
      ...state,
      pressedKeys: { ...state.pressedKeys, [action.payload.key]: true },
    }
  ),
  [INPUT_KEY_UP]: (state, action) => (
    {
      ...state,
      pressedKeys: { ...state.pressedKeys, [action.payload.key]: false },
    }
  ),
})
