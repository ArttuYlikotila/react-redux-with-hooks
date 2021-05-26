import { useDispatch } from 'react-redux';
import { incrementBird, decrementBird, removeBird } from '../../../store/birds/birdActions';

// Component that renders the data of a single bird passed in as a prop and enables user
// to increment or decrement the value "views" of that bird object and remove a bird from store
export default function Bird({bird}) {
  // React-Redux hook that enables dispatching actions to store
  const dispatch = useDispatch();

  return (
    <li className='mb-2'>
      <h4>
        {bird.name}
        <button className='ms-2 btn btn-danger' onClick={() => dispatch(removeBird(bird.name))}>
          Remove
        </button>
      </h4>
      <div>
        Views: {bird.views}
        <button className='ms-2 me-2 btn btn-success' onClick={() => dispatch(incrementBird(bird.name))}>
          +
        </button>
        <button className='btn btn-danger' onClick={() => dispatch(decrementBird(bird.name))}>
          -
        </button>
      </div>
    </li>
  );
}