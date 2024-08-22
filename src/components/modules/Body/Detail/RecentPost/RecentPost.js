import React from 'react';
import styles from './RecentPosts.module.css';

const RecentPosts = () => {
    const recentPosts = [
        {
          category: 'Nature',
          title: 'Still Standing Tall',
          description: 'Life begins at the end of your comfort zone.',
          author: 'William Wong',
          date: '6/25/2018',
          imageUrl: 'https://st.quantrimang.com/photos/image/2020/12/25/Hinh-chuc-buoi-sang-19.jpg',
        },
        {
          category: 'Photography',
          title: 'Sunny Side Up',
          description: 'No place is ever as bad as they tell you it’s going to be.',
          author: 'Mat Vogels',
          date: '6/25/2018',
          imageUrl: 'https://st.quantrimang.com/photos/image/2020/12/25/Hinh-chuc-buoi-sang-19.jpg',
        },
        {
          category: 'Relaxation',
          title: 'Water Falls',
          description: 'We travel not to escape life, but for life not to escape us.',
          author: 'Mat Vogels',
          date: '6/25/2018',
          imageUrl: 'https://st.quantrimang.com/photos/image/2020/12/25/Hinh-chuc-buoi-sang-19.jpg',
        },
        {
          category: 'Vacation',
          title: 'Through the Mist',
          description: 'Travel makes you see what a tiny place you occupy in the world.',
          author: 'William Wong',
          date: '6/25/2018',
          imageUrl: 'https://st.quantrimang.com/photos/image/2020/12/25/Hinh-chuc-buoi-sang-19.jpg',
        },
        {
          category: 'Motivation',
          title: 'Awaken Early',
          description: 'Not all those who wander are lost.',
          author: 'Mat Vogels',
          date: '6/25/2018',
          imageUrl: 'https://st.quantrimang.com/photos/image/2020/12/25/Hinh-chuc-buoi-sang-19.jpg',
        },
        {
          category: 'Adventure',
          title: 'Try it Always',
          description: 'The world is a book, and those who do not travel read only one page.',
          author: 'William Wong',
          date: '6/25/2018',
          imageUrl: 'https://st.quantrimang.com/photos/image/2020/12/25/Hinh-chuc-buoi-sang-19.jpg',
        },
      ];

  return (
    <>
        <div className={styles.grid}>
      {recentPosts.map((post) => (
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

export default RecentPosts;
