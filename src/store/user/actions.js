import * as types from './types'
export function signIn(userInfo) {
  return { type: types.SIGN_IN, userInfo}
}
export function signUp(userInfo) {
  return { type: types.SIGN_UP, userInfo}
}