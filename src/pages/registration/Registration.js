import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Registration.module.css';
import { authOperations } from '../../redux/auth';

export class Registration extends Component {
  state = { name: '', email: '', password: '' };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onRegister(this.state);
    this.setState({ name: '', email: '', password: '' });
  };
  render() {
    const { name, email, password } = this.state;
    return (
      <div className={styles.registerContainer}>
        <h1 className={styles.registerHeader}>Registration Page</h1>
        <form
          className={styles.registerForm}
          onSubmit={this.handleSubmit}
          autoComplete="off"
        >
          <label className={styles.registerLable}>
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            ></input>
          </label>
          <label className={styles.registerLable}>
            Email:
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            ></input>
          </label>
          <label className={styles.registerLable}>
            Password:
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            ></input>
          </label>
          <button className={styles.registerBtn} type="submit">
            Registration
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = { onRegister: authOperations.register };

export default connect(null, mapDispatchToProps)(Registration);
