// Header.js
import React from 'react';
import { Outlet,NavLink } from 'react-router-dom';
import styles from '../css/header.module.css'

const Header = () => {
  return (
    <div >
    <header className={styles.container}>
      <h1 className={styles.title}>Habit Tracker</h1>
      <br />
      <nav className={styles.nav}>
        <NavLink to="/" className={({isActive})=>isActive? `${styles.link} ${styles.active}`:styles.link}  >Home</NavLink>
      </nav>
    </header>
    <Outlet />
    </div>

  );
};

export default Header;
