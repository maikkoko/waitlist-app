import { combineReducers } from 'redux'

import counter from './counter'
import routes from './routes'
import queue from './queue'

const reducers = combineReducers({
  counter,
  routes,
  queue
})

export default reducers
