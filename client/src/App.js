import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import { selectCurrentUser } from './redux/user/user.selector';
import { checkUserSession } from './redux/user/userActions';

import Header from './components/Header';
import Spinner from './components/withSpinner/Spinner';
import ErrorBoundary from './components/ErrorBoundary';
// import Home from './pages/Home';
// import Shop from './pages/Shop';
// import CheckOut from './pages/CheckOut';
// import SignInAndSignUp from './pages/SignInAndSignUp';

const Home = lazy(() => import('./pages/Home'));
const Shop = lazy(() => import('./pages/Shop'));
const CheckOut = lazy(() => import('./pages/CheckOut'));
const SignInAndSignUp = lazy(() => import('./pages/SignInAndSignUp'));

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={Home} />
            <Route path='/shop' component={Shop} />
            <Route exact path='/checkout' component={CheckOut} />
            <Route
              exact
              path='/signin'
              render={() =>
                currentUser ? <Redirect to='/' /> : <SignInAndSignUp />
              }
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
