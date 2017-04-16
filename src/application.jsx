import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { buildStore } from 'utils/build_store'
import _applicationStyle from './application.scss'

const store = buildStore()

render(
  (<Provider store={store}>
    <div>
      app
    </div>
  </Provider>),
  document.getElementById('app'),
)
