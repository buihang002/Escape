import Line from '../../Line/Line';
import styles from '../Section/Section.module.css';

const Section = () => {
  const titles= [
    {na: 'Featured Posts'},
    
    {na: 'Most Recent'}
  ]
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
<Line />
  <div className={styles.postsPage}>
    <section className={styles.featuredSection}>
    <h2>{titles[0].na}</h2>
      <div className={styles.featuredGrid}>
        {featuredPosts.map((post, index) => (
          <div key={index} className={styles.postCard}>
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
    </section>

    <section className={styles.recentSection}>
    <h2>{titles[1].na}</h2>
      <div className={styles.recentGrid}>
        {recentPosts.map((post, index) => (
          <div key={index} className={styles.postCard}>
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
    </section>
  </div>
  </>
);
};
export default Section;