import React, { Component } from 'react'
import { func } from 'prop-types'
import { Router, Scene, Reducer } from 'react-native-router-flux'
import { connect } from 'react-redux'

import Home from './Home'
import Counter from './Counter'

class Routes extends Component {
  static propTypes = {
    dispatch: func
  }

  reducerCreate = params => {
    const defaultReducer = new Reducer(params)
    return (state, action) => {
      this.props.dispatch(action)
      return defaultReducer(state, action)
    }
  }

  render() {
    return (
      <Router createReducer={this.reducerCreate}>
        <Scene key="root">
          <Scene key="home" component={Home} title="Home" initial hideNavBar />
          <Scene key="counter" component={Counter} title="Counter" hideNavBar />
        </Scene>
      </Router>
    )
  }
}

export default connect()(Routes)
