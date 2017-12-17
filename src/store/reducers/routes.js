import { ActionConst } from 'react-native-router-flux'

const initialState = {
  scene: {
    title: 'Home',
    routeName: 'home'
  }
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // focus action is dispatched when a new screen comes into focus
    case ActionConst.FOCUS:
      return {
        ...state,
        scene: action.params
      }

    // ...other actions

    default:
      return state
  }
}
