// Import action type constants -> this is one way of importing them, other files show another way
import { ADD_BIRD, INCREMENT_BIRD, DECREMENT_BIRD, REMOVE_BIRD } from './birdConstants';

// Redux action creators that return an action object
// Action to add a bird
export function addBird(name) {
  return {
    type: ADD_BIRD,
    name
  }
}

// Action to increment the views of a bird
export function incrementBird(name) {
  return {
    type: INCREMENT_BIRD,
    name
  }
}

// Action to increment the views of a bird
export function decrementBird(name) {
  return {
    type: DECREMENT_BIRD,
    name
  }
}

// Action to remove a bird from store
export function removeBird(name) {
  return {
    type: REMOVE_BIRD,
    name
  }
}