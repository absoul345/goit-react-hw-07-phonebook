import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../../redux/auth';
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
            to="/goit-react-hw-07-phonebook"
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
              to="/contacts"
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
