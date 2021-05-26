// Import action type constants -> this is one way of importing them, other files show another way
import * as constants from '../constants/birdConstants';

// The initial state array of objects that is used for this reducer when the app is first loaded
const initialState = [
  {
    name: 'robin',
    views: 1
  }
];

// Birds reducer
export default function birdsReducer(state = initialState, action) {
  switch (action.type) {
    case constants.ADD_BIRD:
      return [
        // Return a shallow copy of the state made with spread operator and add 
        // a new object to end of the new array
        ...state,
        {
          name: action.name,
          views: 1
        }
      ];
    case constants.INCREMENT_BIRD:
      // Return a new array made with mapping through the previous state
      return state.map((bird) => {
        // If the current object has the same name as the name in the action,
        // return a shallow copy of the object with incremented view property
        if (bird.name === action.name) {
          return {
            ...bird,
            views: bird.views + 1
          }
        }
        // If iterated object is not a match, return the object unchanged
        return bird;
      });
    case constants.DECREMENT_BIRD:
      // Return a new array made with mapping through the previous state
      return state.map((bird) => {
        // If the current object has the same name as the name in the action and
        // the amount of views is more than 0, return a shallow copy of the 
        // object with decremented view property
        if (bird.name === action.name && bird.views > 0) {
          return {
            ...bird,
            views: bird.views - 1
          }
        }
        // If iterated object is not a match or the views is 0, return the object unchanged
        return bird;
      });
    case constants.REMOVE_BIRD:
      // Return a new array made with filtering through the previous state and removing 
      // the bird object named in the action
      return state.filter((bird) => {
        // Return false if the name matches -> do not include this object in the new array
        if (bird.name === action.name) {
          return false;
        }
        // If the name does not match, return true -> include this object in the new array
        return true;
      });
      // Filtering can be done with an one line arrow function like below
     //return state.filter((bird) => bird.name !== action.name);
    default:
      return state;
  }
}