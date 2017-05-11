// @flow

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import RedBox from 'redbox-react'
import { buildStore } from 'utils/build_store'
import IndexComponent from 'components/index'
import _applicationStyle from './application.scss'

const store = buildStore()
const root = document.getElementById('app')

try {
  render(
    (<Provider store={store}>
      <div>
        <IndexComponent />
      </div>
    </Provider>),
    root,
  )
} catch (e) {
  render(<RedBox error={e} />, root)
}
