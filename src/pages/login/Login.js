import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Login.module.css';
import { authOperations } from '../../redux/auth';

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
      <div className={styles.loginContainer}>
        <h1 className={styles.loginHeader}>Login Page</h1>
        <form
          className={styles.loginForm}
          onSubmit={this.handleSubmit}
          autoComplete="off"
        >
          <label className={styles.loginLable}>
            Email:
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            ></input>
          </label>
          <label className={styles.loginLable}>
            Password:
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            ></input>
          </label>
          <button className={styles.loginBtn} type="submit">
            Login
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = { onLogin: authOperations.logIn };

export default connect(null, mapDispatchToProps)(Login);
