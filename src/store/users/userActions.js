// Import action type constants -> this is one way of importing them, other files show another way
import { LOGIN, LOG_OUT } from './userConstants';

// Redux action creators that return an action object
// Action to log user in
export function login(userName) {
  return {
    type: LOGIN,
    userName
  }
}

// Action to log user out
export function logout() {
  return {
    type: LOG_OUT
  }
}