import React from 'react';
import styles from './NatureCard.module.css';

const NatureCard = ({ title, imageUrl }) => {
  return (
    <div className={styles.card} style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className={styles.overlay}></div>
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
};

export default NatureCard;
