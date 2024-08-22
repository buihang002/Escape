import React from 'react';
import styles from '../Line/Line.module.css';
import { Link } from 'react-router-dom';
const Line = () => {
  return (
    <nav className={styles.nav}>
    <ul>
      <li><Link to="/nature">Nature</Link></li>
      <li><Link to="/photography">Photography</Link></li>
      <li><Link to="/relaxation">Relaxation</Link></li>
      <li><Link to="/vacation">Vacation</Link></li>
      <li><Link to="/travel">Travel</Link></li>
      <li><Link to="/adventure">Adventure</Link></li>
    </ul>
  </nav>

  );
};

export default Line;
