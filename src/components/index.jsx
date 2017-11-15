// @flow

import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import InputActions from 'actions/input'

type Props = {
  keyDown: (key: string) => any,
  keyUp: (key: string) => any,
  pressedKeys: {},
}

class IndexComponent extends Component<Props> {
  componentDidMount() {
    document.addEventListener('keydown', (event: KeyboardEvent) => this.props.keyDown(event.key))
    document.addEventListener('keyup', (event: KeyboardEvent) => this.props.keyUp(event.key))
  }

  render() {
    return (
      <div>
        Pressed Keys: {
          Object.keys(this.props.pressedKeys).filter(key => this.props.pressedKeys[key]).join(', ')
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  pressedKeys: state.input.pressedKeys,
})

const mapDispatchToProps = dispatch => bindActionCreators(
  { ...InputActions },
  dispatch,
)

export default connect(mapStateToProps, mapDispatchToProps)(IndexComponent)
