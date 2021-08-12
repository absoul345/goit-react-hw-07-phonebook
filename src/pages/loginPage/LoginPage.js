import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';
import Login from '../../components/login/Login';

export class LoginPage extends Component {
  state = { email: '', password: '' };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onLogin(this.state);
    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;
    return (
      <>
        <Login
          email={email}
          password={password}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        ;
      </>
    );
  }
}

const mapDispatchToProps = { onLogin: authOperations.logIn };

export default connect(null, mapDispatchToProps)(LoginPage);
