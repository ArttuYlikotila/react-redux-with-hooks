import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/users/userActions';

// Navigation menu component for the application that renders links to other pages/components
export default function Menu() {
  // React-Redux hooks that enables interacting with the store
  const dispatch = useDispatch();
  const user = useSelector((state => state.user));

  // Function to log the user out -> dispatch logout action to userReducer
  function logUserOut() {
    dispatch(logout());
  }

  return (
    <div className='text-center border-bottom border-2 pb-1 mb-3'>
      <Link to='/' className='me-3'>Home</Link>
      <Link to='/posts' className='me-3'>Posts</Link>
      <Link to='/birds' className='me-3'>Birds</Link>
      { // Conditional rendering depending on if the user is logged in or not, could be combined
        user.loggedIn
        ? <Link to='/secret' className='me-3'>Secret</Link>
        : null
      }
      { !user.loggedIn
        ? <Link to='/login'>Login</Link>
        : <Link to='/' onClick={() => logUserOut()}>Log out</Link>
      }
    </div>
  );
}