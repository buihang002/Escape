import React from "react";
import styles from "../modules/LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
      <div className={styles.overlay}>
        <nav className={styles.navbar}>
          <h1 className={styles.brand}>Escape.</h1>
          <ul className={styles.navLinks}>
            <li><a href="#home" className={styles.navLink}>HOME</a></li>
            <li><a href="#categories" className={styles.navLink}>CATEGORIES</a></li>
            <li><a href="#about" className={styles.navLink}>ABOUT</a></li>
            <li><a href="#contact" className={styles.navLink}>CONTACT</a></li>
          </ul>
        </nav>
        <div className={styles.content}>
          <h2>Let's do it together.</h2>
          <p>We travel the world in search of stories. Come along for the ride.</p>
          <button className={styles.ctaButton}>View Latest Posts</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
