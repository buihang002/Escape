import React from 'react';
import styles from '../Text/Text.module.css';
import Navbar from '../Navbar/Navbar';
const Text= () => {
  return (
    <div className={styles.landingPage}>
      {/* <Navbar />   */}

        <div className={styles.content}>
          <h2>Let's do it together.</h2>
          <p>We travel the world in search of stories. Come along for the ride.</p>
          <button className={styles.ctaButton}>View Latest Posts</button>
        </div>
</div>

  );
};

export default Text;
