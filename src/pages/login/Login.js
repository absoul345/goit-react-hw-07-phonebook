import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';
import LoginComponent from '../../components/loginComponent/LoginComponent';

export class Login extends Component {
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
        <LoginComponent
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

export default connect(null, mapDispatchToProps)(Login);
