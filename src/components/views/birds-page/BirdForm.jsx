import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBird } from '../../../store/birds/birdActions';

// Component that renders the input form for adding a new bird to store
export default function BirdForm() {
  // React-Redux hook that enables dispatching actions to store
  const dispatch = useDispatch();
  // Local state for the input field
  const [birdName, setBirdName] = useState('');

  // Function to handle the submitting of the data from the input form
  function handleSubmit(event) {
    event.preventDefault();
    dispatch(addBird(birdName));
    setBirdName('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <p className='mb-1'>Add Bird</p>
        <input type='text' onChange={e => setBirdName(e.target.value)} value={birdName} />
      </label>
      <div>
        <button type='submit' className='mt-2 btn btn-primary'>Add</button>
      </div>
    </form>
  );
}