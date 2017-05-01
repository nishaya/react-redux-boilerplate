// @flow

// from http://redux.js.org/docs/recipes/ReducingBoilerplate.html#generating-reducers
export default function createReducer(initialState: Object, handlers: Object) {
  return function reducer(state: Object = initialState, action: Object) {
    if ({}.hasOwnProperty.call(handlers, action.type)) {
      return handlers[action.type](state, action)
    }
    return state
  }
}
