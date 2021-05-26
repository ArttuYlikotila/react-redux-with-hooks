import { combineReducers } from 'redux';
import postsReducer from './posts/postsReducer';
import birdReducer from './birds/birdReducer';
import userReducer from './users/userReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  birds: birdReducer,
  user: userReducer,
});

export default rootReducer;