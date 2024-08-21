import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contactPage}>
      <div className={styles.banner}>
        <h1>Let's Connect</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.connect}>
          <h2>Connect with Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. 
            Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          </p>
          <ul className={styles.socialLinks}>
            <li> Follow us on Twitter</li>
            <li> Like us on Facebook</li>
            <li> Follow us on Instagram</li>
          </ul>
        </div>
        <div className={styles.form}>
          <h2>Send a Request</h2>
          <form>
            <div className={styles.formGroup}>
              <label>Name:</label>
              <input type="text" placeholder="Enter your name" />
            </div>
            <div className={styles.formGroup}>
              <label>Email Address:</label>
              <input type="email" placeholder="Enter your email address" />
            </div>
            <div className={styles.formGroup}>
              <label>Message:</label>
              <textarea placeholder="Say what you need to say..." />
            </div>
            <button type="submit" className={styles.submitButton}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
