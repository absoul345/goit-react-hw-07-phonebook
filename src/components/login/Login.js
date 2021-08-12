import React from 'react';
import styles from './Login.module.css';

const Login = ({ email, password, handleChange, handleSubmit }) => {
  return (
    <div className={styles.loginContainer}>
      <h1 className={styles.loginHeader}>Login Page</h1>
      <form
        className={styles.loginForm}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <label className={styles.loginLable}>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          ></input>
        </label>
        <label className={styles.loginLable}>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          ></input>
        </label>
        <button className={styles.loginBtn} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
