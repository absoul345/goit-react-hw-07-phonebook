import React, { Suspense, lazy, Component } from 'react';
import { Switch } from 'react-router-dom';
import { authOperations } from './redux/auth';
import { connect } from 'react-redux';
import routes from './routes';
import Appbar from './components/Appbar/AppBar';
import Container from './components/container/Container';
import Loader from './components/loader/Loader';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const HomePage = lazy(() =>
  import('./pages/home/HomePage' /* webpackChunkName: "home" */),
);

const PhonebookPage = lazy(() =>
  import('./pages/phonebook/Phonebook' /* webpackChunkName: "phonebook" */),
);

const LoginPage = lazy(() =>
  import('./pages/login/Login' /* webpackChunkName: "login" */),
);

const RegistrPage = lazy(() =>
  import('./pages/registration/Registration' /* webpackChunkName: "registr" */),
);

export class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <Container>
        <Appbar />
        <Suspense fallback={<Loader />}>
          <Switch>
            <PublicRoute exact path={routes.home} component={HomePage} />
            <PrivateRoute
              exact
              path={routes.contacts}
              component={PhonebookPage}
              redirectTo="/login"
            />
            <PublicRoute
              exact
              path={routes.login}
              restricted
              component={LoginPage}
              redirectTo="/contacts"
            />
            <PublicRoute
              exact
              path={routes.register}
              restricted
              component={RegistrPage}
              redirectTo="/contacts"
            />
          </Switch>
        </Suspense>
      </Container>
    );
  }
}

const mapDispatchToProps = { onGetCurrentUser: authOperations.getCurrentUser };

export default connect(null, mapDispatchToProps)(App);
