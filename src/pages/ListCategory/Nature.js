import React from 'react';
import NatureCard from '../../components/modules/Body/ListCategoriesCard/NatureCard/NatureCard';
import styles from './Nature.module.css';

const nature = [
  { title: 'Nature', imageUrl: 'https://png.pngtree.com/background/20221126/original/pngtree-starry-universe-astrolabe-blue-purple-glowing-background-picture-image_1965316.jpg' },
  
];

const Nature = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Nature</h1>
      <div className={styles.grid}>
        {nature.map((naturecard) => (
          <NatureCard key={naturecard.title} title={naturecard.title} imageUrl={naturecard.imageUrl} />
        ))}
      </div>
    </div>
  );
};

export default Nature;
