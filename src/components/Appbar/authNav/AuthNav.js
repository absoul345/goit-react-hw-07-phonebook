import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../../routes';
import styles from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div>
      <NavLink
        to={routes.register}
        exact
        className={styles.authLink}
        activeClassName={styles.authLinkActive}
      >
        Registration
      </NavLink>
      <NavLink
        to={routes.login}
        exact
        className={styles.authLink}
        activeClassName={styles.authLinkActive}
      >
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
