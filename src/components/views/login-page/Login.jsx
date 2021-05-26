import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { login } from '../../../store/users/userActions';

// Component that renders the page "Login"
export default function Login() {
  // React Router hook that enables to change the page programmatically
  const history = useHistory();
  // React-Redux hook that enables dispatching actions to store
  const dispatch = useDispatch();
  // Local state for the input fields, this state is an object
  const [formData, setFormData] = useState({
    userName: '',
    password: ''
  });

  // Function to handle the changes to local state
  function handleInput(event) {
    // Unpack the fields of the event object to variables with object destructuring
    const { name, value } = event.target;
    // Use object spread operator to make a shallow copy of current local state and update
    // the value of the property designated by name before setting the new state
    setFormData({...formData, [name]: value});
  }

  // Function to handle the submitting of the data from the input form.
  // Local state will be reset as the component unmounts when redirecting to another "page"
  // and therefore resetting the state separately is not needed
  function handleSubmit(event) {
    event.preventDefault();
    dispatch(login(formData.userName));
    // This will redirect the user back to homepage
    history.push('/');
  }

  return (
    <div className='container w-50'>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label className='form-label'>Username</label>
          <input
            type='text'
            className='form-control'
            name='userName'
            onChange={handleInput}
            value={formData.userName}
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Password</label>
          <input
            type='password'
            className='form-control'
            name='password'
            onChange={handleInput}
            value={formData.password}
          />
        </div>
        <button type='submit' className='btn btn-primary mt-3'>Login</button>
      </form>
    </div>
  );
}