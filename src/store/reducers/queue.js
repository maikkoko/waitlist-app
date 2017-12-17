import update from 'immutability-helper'

/*
 * Actions
 */

const NAME = 'waitlist-app/queue'
const ADD_NEW_ITEM = `${NAME}/ADD_NEW_ITEM`
const ADD_NEW_LIST = `${NAME}/ADD_NEW_LIST`

/*
 * Action Creators
 */

export const newList = () => {
  return {
    type: ADD_NEW_LIST
  }
}

export const newItem = queueItem => {
  return {
    type: ADD_NEW_ITEM,
    payload: queueItem
  }
}

/*
 * Reducer
 */

const initialState = {
  idGen: 0,
  list: {
    0: []
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NEW_LIST:
      const newId = state.idGen + 1

      return {
        idGen: newId,
        list: {
          ...state.list,
          [newId]: []
        }
      }

    case ADD_NEW_ITEM:
      return update(state, { list: { $push: action.payload } })

    default:
      return state
  }
}
