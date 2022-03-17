import { REQUEST_FAILED } from '../actions/types'
import { POST_REVIEW, GET_REVIEW } from '../actions/types'
const initialState = {
  comentarios: []
}

const actionsObj = {
  [REQUEST_FAILED]: (state, payload) => ({
    ...state,
    err: payload
  }),
  [POST_REVIEW]: (state, payload) => {
    return {
      ...state
    }
  },
  [GET_REVIEW]: (state, payload) => {
    return {
      ...state,
      comentarios: payload
    }
  }
}

export const rootReducer = (state = initialState, action) => {
  if (!actionsObj.hasOwnProperty(action.type)) return state
  return actionsObj[action.type](state, action.payload)
}

