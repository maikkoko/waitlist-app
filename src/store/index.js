import { createStore as _createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import Reactotron from 'reactotron-react-native'

const middleware = applyMiddleware(thunk)

// Action Dispatcher
export const createActionDispatchers = actionCreators => dispatch =>
  Object.keys(actionCreators).reduce((actionDispatchers, name) => {
    var actionCreator = actionCreators[name]
    if (typeof actionCreator == 'function') {
      actionDispatchers[name] = (...args) => dispatch(actionCreator(...args))
    }
    return actionDispatchers
  }, {})

// Store Initialization
export default function createStore(initialValue = {}) {
  let store

  if (process.env.NODE_ENV === 'development') {
    // Development mode with Redux DevTools support enabled.
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ shouldHotReload: true })
      : compose
    // Create the redux store.
    store = Reactotron.createStore(
      reducers,
      initialValue,
      composeEnhancers(middleware)
    )
  } else {
    // Production mode.
    store = _createStore(reducers, initialValue, middleware)
  }

  return store
}
