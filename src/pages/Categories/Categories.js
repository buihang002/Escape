import React from 'react';
import CategoryCard from '../../components/modules/Body/CategoryCard/CategoryCard';
import styles from './Categories.module.css';

const categories = [
  { title: 'Nature', imageUrl: 'path/to/nature-image.jpg' },
  { title: 'Photography', imageUrl: 'path/to/photography-image.jpg' },
  { title: 'Relaxation', imageUrl: 'path/to/relaxation-image.jpg' },
  { title: 'Vacation', imageUrl: 'path/to/vacation-image.jpg' },
  { title: 'Travel', imageUrl: 'path/to/travel-image.jpg' },
  { title: 'Adventure', imageUrl: 'path/to/adventure-image.jpg' },
];

const Categories = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Categories</h1>
      <div className={styles.grid}>
        {categories.map((category, index) => (
          <CategoryCard key={index} title={category.title} imageUrl={category.imageUrl} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
