import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
      <div className={styles.overlay}>
        <nav className={styles.navbar}>
          
          <h1 className={styles.brand}>Escape.</h1>
          <nav>
          <ul className={styles.navLinks}>
            <li><a href="/" className={styles.navLink}>HOME</a></li>
            <li><a href="/categories" className={styles.navLink}>CATEGORIES</a></li>
            <li><a href="/about" className={styles.navLink}>ABOUT</a></li>
            <li><a href="/contact" className={styles.navLink}>CONTACT</a></li>
          </ul>
          </nav>
        </nav>
      </div>

  );
};

export default Navbar;
