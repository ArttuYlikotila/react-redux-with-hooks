// Import action type constants -> this is one way of importing them, other files show another way
import { GET_POSTS_STARTED, GET_POSTS_SUCCESS, GET_POSTS_FAILURE } from '../constants/postsConstants';

// Redux action creators that return an action object
// Action to start the fetching of data
export function getPostsStarted() {
  return {
    type: GET_POSTS_STARTED
  }
}

// Action to handle successful fetch
export function getPostsSuccess(posts) {
  return {
    type: GET_POSTS_SUCCESS,
    posts
  }
}

// Action to handle unsuccessful fetch
export function getPostsFailure() {
  return {
    type: GET_POSTS_FAILURE
  }
}

// Combine all actions in an asynchronous thunk
export function fetchPosts() {
  return async (dispatch) => {
    dispatch(getPostsStarted());

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1');
      const data = await response.json();

      dispatch(getPostsSuccess(data));
    } 
    catch (error) {
      dispatch(getPostsFailure());
    }
  }
}