// Import action type constants -> this is one way of importing them, other files show another way
import { LOGIN, LOG_OUT } from './userConstants';

// The initial state object that is used for this reducer when the app is first loaded
const initialState = {
  userName: '',
  loggedIn: false
};

// User reducer
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      // Return new state
      return {
        userName: action.userName,
        loggedIn: true
      };
    case LOG_OUT:
      // Return new state
      return {
        userName: '',
        loggedIn: false
      };
    default:
      return state;
  };
}