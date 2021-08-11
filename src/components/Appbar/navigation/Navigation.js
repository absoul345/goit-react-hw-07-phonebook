import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../../redux/auth';
import routes from '../../../routes';
import styles from './Navigation.module.css';

const Navigation = ({ isAuthenticated }) => {
  return (
    <nav>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <NavLink
            className={styles.navLink}
            activeClassName={styles.navItemActive}
            exact
            to={routes.home}
          >
            Home
          </NavLink>
        </li>
        {isAuthenticated && (
          <li className={styles.navItem}>
            <NavLink
              className={styles.navLink}
              activeClassName={styles.navItemActive}
              exact
              to={routes.contacts}
            >
              Contacts
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
