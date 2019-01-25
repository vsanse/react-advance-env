import initialState from '../initialState'
import * as types from './types'
export default function userReducer(state = initialState.user, action) {
  switch (action.type) {
    case types.SIGN_IN:
      return {
        ...state,
        email: action.userInfo.email,
        displayName:action.userInfo.displayName,
      } 
    case types.SIGN_UP:
      return {
        ...state,
        name: action.userInfo.name,
        email: action.userInfo.email
      } 
    
    default:
      return state
  }
}