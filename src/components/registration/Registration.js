import React from 'react';
import styles from './Registration.module.css';

const Registration = ({
  name,
  email,
  password,
  handleSubmit,
  handleChange,
}) => {
  return (
    <div className={styles.registerContainer}>
      <h1 className={styles.registerHeader}>Registration Page</h1>
      <form
        className={styles.registerForm}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <label className={styles.registerLable}>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          ></input>
        </label>
        <label className={styles.registerLable}>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          ></input>
        </label>
        <label className={styles.registerLable}>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          ></input>
        </label>
        <button className={styles.registerBtn} type="submit">
          Registration
        </button>
      </form>
    </div>
  );
};

export default Registration;
