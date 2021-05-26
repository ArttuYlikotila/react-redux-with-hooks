// Import action type constants -> this is one way of importing them, other files show another way
import * as constants from './../constants/postsConstants';

// The initial state object that is used for this reducer when the app is first loaded
export const initialState = {
  posts: [],
  loading: false,
  hasErrors: false
}

// Posts reducer
export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case constants.GET_POSTS_STARTED:
      // Make a shallow copy of the state with spread operator
      // and change "loading" property before returning the new state
      return {
        ...state, 
        loading: true
      };
    case constants.GET_POSTS_SUCCESS:
      // Make a shallow copy of the state with spread operator and change
      // properties "posts" and "loading" before returning the new state
      return {
        ...state, 
        posts: action.posts,
        loading: false
      };
    case constants.GET_POSTS_FAILURE:
      // Make a shallow copy of the state with spread operator and change
      // properties "loading" and "hasErrors" before returning the new state
      return {
        ...state,
        loading: false,
        hasErrors: true
      };
    default:
      return state;
  }
}