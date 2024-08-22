import React from 'react';
import CategoryCard from '../../components/modules/Body/CategoryCard/CategoryCard';
import styles from './Categories.module.css';

const categories = [
  { title: 'Nature', imageUrl: 'https://png.pngtree.com/background/20221126/original/pngtree-starry-universe-astrolabe-blue-purple-glowing-background-picture-image_1965316.jpg' },
  { title: 'Photography', imageUrl: 'https://png.pngtree.com/background/20221126/original/pngtree-starry-universe-astrolabe-blue-purple-glowing-background-picture-image_1965316.jpg' },
  { title: 'Relaxation', imageUrl: 'https://png.pngtree.com/background/20221126/original/pngtree-starry-universe-astrolabe-blue-purple-glowing-background-picture-image_1965316.jpg' },
  { title: 'Vacation', imageUrl: 'https://png.pngtree.com/background/20221126/original/pngtree-starry-universe-astrolabe-blue-purple-glowing-background-picture-image_1965316.jpg' },
  { title: 'Travel', imageUrl: 'https://png.pngtree.com/background/20221126/original/pngtree-starry-universe-astrolabe-blue-purple-glowing-background-picture-image_1965316.jpg' },
  { title: 'Adventure', imageUrl: 'https://png.pngtree.com/background/20221126/original/pngtree-starry-universe-astrolabe-blue-purple-glowing-background-picture-image_1965316.jpg' },
];

const Categories = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Categories</h1>
      <div className={styles.grid}>
        {categories.map((category) => (
          <CategoryCard key={category.title} title={category.title} imageUrl={category.imageUrl} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
