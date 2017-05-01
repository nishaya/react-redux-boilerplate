// @flow

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import InputActions from 'actions/input'

class IndexComponent extends Component {
  static propTypes = {
    keyDown: PropTypes.func.isRequired,
    keyUp: PropTypes.func.isRequired,
    pressedKeys: PropTypes.shape().isRequired,
  }

  componentDidMount() {
    document.addEventListener('keydown', event => this.props.keyDown(event.key))
    document.addEventListener('keyup', event => this.props.keyUp(event.key))
  }

  render() {
    return (<div>
      Pressed Keys: {
        Object.keys(this.props.pressedKeys).filter(key => this.props.pressedKeys[key]).join(', ')
      }
    </div>)
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
