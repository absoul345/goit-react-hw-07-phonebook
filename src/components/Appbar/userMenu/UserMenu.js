import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../../redux/auth';
import styles from './UserMenu.module.css';
import userAvatar from './thief.png';

const UserMenu = ({ avatar, email, onLogout }) => {
  return (
    <div className={styles.userContainer}>
      <img src={avatar} alt="" width="30" className={styles.userAvatar} />
      <span className={styles.loginText}>Welcome,{email}</span>
      <button className={styles.userLogoutBtn} type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  email: authSelectors.getUserEmail(state),
  avatar: userAvatar,
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
