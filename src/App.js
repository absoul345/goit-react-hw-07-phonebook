import React, { Component } from 'react';
import { authOperations } from './redux/auth';
import { connect } from 'react-redux';
import Appbar from './components/Appbar/AppBar';
import Container from './components/container/Container';
import Main from './components/main/Main';

export class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <Container>
        <Appbar />
        <Main />
      </Container>
    );
  }
}

const mapDispatchToProps = { onGetCurrentUser: authOperations.getCurrentUser };

export default connect(null, mapDispatchToProps)(App);
