// @flow

import createReducer from 'utils/create_reducer'
import { INPUT_KEY_DOWN, INPUT_KEY_UP } from 'actions/action_types'
import type Action from 'types/action'

type InputPayload = {
  key: string;
}

type InputState = {
  pressedKeys: { [string]: boolean };
}

const initialState: InputState = {
  pressedKeys: {},
}

export default createReducer(initialState, {
  [INPUT_KEY_DOWN]: (state: InputState, action: Action<InputPayload>): InputState => (
    {
      ...state,
      pressedKeys: { ...state.pressedKeys, [action.payload.key]: true },
    }
  ),
  [INPUT_KEY_UP]: (state: InputState, action: Action<InputPayload>): InputState => (
    {
      ...state,
      pressedKeys: { ...state.pressedKeys, [action.payload.key]: false },
    }
  ),
})
