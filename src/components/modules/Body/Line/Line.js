import React from 'react';
import styles from '../Line/Line.module.css';

const Line = () => {
  return (
    <nav className={styles.nav}>
    <ul>
      <li><a href="/nature">Nature</a></li>
      <li><a href="/photography">Photography</a></li>
      <li><a href="/relaxation">Relaxation</a></li>
      <li><a href="/vacation">Vacation</a></li>
      <li><a href="/travel">Travel</a></li>
      <li><a href="/adventure">Adventure</a></li>
    </ul>
  </nav>

  );
};

export default Line;
