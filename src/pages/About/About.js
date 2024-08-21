import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.banner}>
        <h1>We love writing</h1>
      </div>
      <div className={styles.content}>
        <img src="https://assets.website-files.com/5e4b1929fccc7f2575de825e/5e4b1929fccc7f1c02de82bd_looking-to-lake-prof.jpg" alt="Scenic" />
        <div className={styles.text}>
          <p>
            The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content.
          </p>
          <p>
            A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
