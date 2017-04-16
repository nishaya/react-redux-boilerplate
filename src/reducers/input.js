import createReducer from 'utils/create_reducer'
import { INPUT_KEY_DOWN } from 'actions/action_types'

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
})
