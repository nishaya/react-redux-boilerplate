import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import InputActions from 'actions/input'

class IndexComponent extends Component {
  static propTypes = {
    keyDown: PropTypes.func.isRequired,
  }

  render() {
    return (<div>
      index
    </div>)
  }
}

const mapStateToProps = state => ({
  pressedKeys: state.input.keyDown,
})

const mapDispatchToProps = dispatch => bindActionCreators(
  { ...InputActions },
  dispatch,
)

export default connect(mapStateToProps, mapDispatchToProps)(IndexComponent)
