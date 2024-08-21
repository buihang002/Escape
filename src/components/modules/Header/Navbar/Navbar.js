// import React from 'react';
// import styles from './Navbar.module.css';
// import About from '../../../../pages/About/About';
// import Categories from '../../../../pages/Categories/Categories';
// import Contact from '../../../../pages/Contact/Contact';
// import { Route, Link, Routes } from 'react-router-dom';
// const Navbar = () => {
//   return (
//       <div className={styles.overlay}>
//         <nav className={styles.navbar}>
          
//           <h1 className={styles.brand}>Escape.</h1>
//           <nav>
//           <ul className={styles.navLinks}>
//             <li><Link to="/" className={styles.navLink}>HOME</Link></li>
//             <li><Link to="/categories" className={styles.navLink}>CATEGORIES</Link></li>
//             <li><Link to="/about" className={styles.navLink}>ABOUT</Link></li>
//             <li><Link to="/contact" className={styles.navLink}>CONTACT</Link></li>
//           </ul>
//           </nav>
//         </nav>

//       </div>

//   );
// };

// export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.overlay}>
      <nav className={styles.navbar}>
        <h1 className={styles.brand}>Escape.</h1>
        <ul className={styles.navLinks}>
          <li><Link to="/" className={styles.navLink}>HOME</Link></li>
          <li><Link to="/categories" className={styles.navLink}>CATEGORIES</Link></li>
          <li><Link to="/about" className={styles.navLink}>ABOUT</Link></li>
          <li><Link to="/contact" className={styles.navLink}>CONTACT</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
