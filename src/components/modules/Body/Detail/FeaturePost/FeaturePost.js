import React from 'react';
import styles from './FeaturePost.module.css';

const FeaturedPosts = () => {
  const featuredPosts = [
    {
      category: 'Photography',
      title: 'The Road Ahead',
      description: 'The road ahead might be paved - it might not be.',
      author: 'Mat Vogels',
      date: 'September 25, 2015',
      imageUrl: 'https://vnn-imgs-f.vgcloud.vn/2019/05/24/22/dia-diem-ngam-mua-vang-tam-coc-dep-nhat-ninh-binh-1.jpg',
    },
    {
      category: 'Adventure',
      title: 'From Top Down',
      description: 'Once a year, go someplace you’ve never been before.',
      author: 'William Wong',
      date: 'September 25, 2015',
      imageUrl: 'https://2img.net/h/imgs.abduzeedo.com/files/articles/misty-nature-photography/1.jpg',
    },
  ];

  return (
    <>
           <div className={styles.grid}>
      {featuredPosts.map((post) => (
  
        <div key={post.title} className={styles.postCard}>
          <img src={post.imageUrl} alt={post.title} />
          <div className={styles.postInfo}>
            <span className={styles.category}>{post.category}</span>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <div className={styles.postFooter}>
              <span>{post.author}</span>
              <span>{post.date}</span>
            </div>
          </div>
        </div>
      
      ))}
        </div>
    </>
  );
};

export default FeaturedPosts;
