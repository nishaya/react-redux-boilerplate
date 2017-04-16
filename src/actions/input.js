import { createAction } from 'redux-actions'
import { INPUT_KEY_DOWN, INPUT_KEY_UP } from 'actions/action_types'

export default {
  keyDown: createAction(INPUT_KEY_DOWN, key => ({ key }), (key, meta) => ({ ...meta })),
  keyUp: createAction(INPUT_KEY_UP, key => ({ key }), (key, meta) => ({ ...meta })),
}
