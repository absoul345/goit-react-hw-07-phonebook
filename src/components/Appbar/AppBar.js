import React from 'react';
import { connect } from 'react-redux';
import Navigation from './navigation/Navigation';
import UserMenu from './userMenu/UserMenu';
import AuthNav from './authNav/AuthNav';
import styles from './AppBar.module.css';
import { authSelectors } from '../../redux/auth';

const Appbar = ({ isAuthenticated }) => {
  return (
    <header className={styles.header}>
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getAuthenticated(state),
});

export default connect(mapStateToProps)(Appbar);
