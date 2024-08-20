import React, { useState } from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSuccessMessage('Thank you! Your submission has been received!');
      setErrorMessage('');
    } else {
      setErrorMessage('Oops! Something went wrong while submitting the form');
      setSuccessMessage('');
    }
  };

  return (
    <div className={styles.mainSection}>
      <div className={styles.wContainer}>
        <div className={styles.sectionHeading}>
          <h2 className={styles.white}>Stay in Touch</h2>
          <div className={styles.medDivider}></div>
        </div>
        <div className={styles.formWrapper}>
          <form onSubmit={handleSubmit} className="w-clearfix">
            <input
              className={styles.field}
              maxLength="256"
              name="email"
              placeholder="Enter your email address"
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="submit"
              className={styles.submitButton}
              value="Submit"
            />
          </form>
          {successMessage && (
            <div className={styles.successMessage}>
              <p>{successMessage}</p>
            </div>
          )}
          {errorMessage && (
            <div className={styles.wFormFail}>
              <p>{errorMessage}</p>
            </div>
          )}
        </div>
      </div>
      <div className={styles.footerSection}>
        <div className={styles.wContainer}>
          <div className="w-row">
            <div className="w-col w-col-4 w-col-small-4">
              <a
                href="https://escape-free-template.webflow.io/"
                aria-current="page"
                className={styles.footerLogo}
              >
                <div className={styles.longText}>Escape.</div>
              </a>
            </div>
            <div className={styles.footerLinks}>
              <a
                href="https://escape-free-template.webflow.io/"
                aria-current="page"
                className={styles.footerLink}
              >
                Home
              </a>
              <a
                href="https://escape-free-template.webflow.io/categories"
                className={styles.footerLink}
              >
                Categories
              </a>
              <a
                href="https://escape-free-template.webflow.io/about"
                className={styles.footerLink}
              >
                About
              </a>
              <a
                href="https://escape-free-template.webflow.io/contact"
                className={styles.footerLink}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
