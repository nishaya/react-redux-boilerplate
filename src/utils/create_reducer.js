// @flow

import type Action from 'types/action'

type Handlers = {
  [string]: (action: Action, state: Object) => Object,
}

// from http://redux.js.org/docs/recipes/ReducingBoilerplate.html#generating-reducers
export default function createReducer(initialState: Object, handlers: Handlers) {
  return function reducer(state: Object = initialState, action: Action) {
    if ({}.hasOwnProperty.call(handlers, action.type)) {
      return handlers[action.type](state, action)
    }
    return state
  }
}
