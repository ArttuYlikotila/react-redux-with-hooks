import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

// This is sort of a HOC, Higher Order Component, a component that returns another
// component. The role of this component is to check if the user is logged in and
// decide what kind of route component to return based on that state. This web-site
// https://ui.dev/react-router-v4-protected-routes-authentication/ has been used as
// an information source.
export default function ProtectedRoute({component: Component, ...rest}) {
  // React-Redux hook that enables getting the state out of the store
  const user = useSelector((state => state.user));

  return (
    <Route {...rest} render={(props) => (
      user.loggedIn === true
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  );
}