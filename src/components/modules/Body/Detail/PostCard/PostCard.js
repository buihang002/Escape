import styles from '../PostCard/PostCard.module.css';

const PostCard = ({ category, title, description, author, date, imageUrl }) => (
  <div className={styles.postCard}>
    <img src={imageUrl} alt={title} />
    <div className={styles.postContent}>
      <span className={styles.category}>{category}</span>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className={styles.postInfo}>
        <span>{author}</span>
        <span>{date}</span>
      </div>
    </div>
  </div>
);


export default PostCard;