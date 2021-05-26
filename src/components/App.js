import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Menu from './Menu';
import HomePage from './views/home-page/HomePage';
import PostsPage from './views/posts-page/PostsPage';
import BirdsPage from './views/birds-page/BirdsPage';
import Login from './views/login-page/Login';
import ProtectedRoute from './ProtectedRoute';
import SecretPage from './views/secret-page/SecretPage';

// Main component of the application that renders all the other components
export default function App() {
  return (
    <React.Fragment>
      <Header />
      <Router>
        <Menu />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/posts' component={PostsPage} />
          <Route exact path='/birds' component={BirdsPage} />
          <ProtectedRoute path={'/secret'} component={SecretPage} />
          <Route exact path='/login' component={Login} />
          <Redirect to='/' />          
        </Switch>
      </Router>
    </React.Fragment>
  );
}