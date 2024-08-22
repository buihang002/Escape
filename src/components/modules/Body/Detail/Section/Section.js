import Line from '../../Line/Line';
import styles from '../Section/Section.module.css';
import Text from '../../../Header/Text/Text';
import Navbar from '../../../Header/Navbar/Navbar';


const Section = ({ title, children }) => {
  return (
    <>
      {/* <Line /> */}
      <div className={styles.postsPage}>
        <section className={styles.section}>
          <h2>{title}</h2>
       
            {children}
       
        </section>
      </div>
    </>
  );
};

export default Section;
