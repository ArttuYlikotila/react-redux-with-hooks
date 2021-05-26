import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import birdReducer from './birdReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  birds: birdReducer,
  user: userReducer,
});

export default rootReducer;