import React from 'react';
import logo from '../assets/logo.png'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom';

const Footer = ({ width, companyName }) => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.header}>
          <img src={logo} alt="" width={width} />
          <h2>{companyName}</h2>
        </div>
        <div className={styles.content}>
          <div className={styles.section}>
            <h2>Company</h2>
            <ul>
            <li> <Link to="/"> home</Link></li>
            <li >About</li>
            <li> <Link to="/contact" >Contact</Link></li>
            <li >Products</li>

            </ul>
          </div>
          <div className={styles.section}>
            <h2>Socials</h2>
            <ul>
              <li>Twitter</li>
              <li>Linkedin</li>
              <li>Facebook</li>
              <li>Instagram</li>
              
            </ul>
          </div>
          <div className={styles.section}>
            <h2>Product</h2>
            <ul>
              <li>ToothBrushes</li>
              <li>Toothpaste</li>
              <li>MouthWash</li>  
            </ul>
          </div>
          <div className={styles.section}>
          <div className= {styles.special}>
          <h2>Education</h2>
            <ul>
            <li> <Link to="/DentalReserch"  > Dental Reserch </Link></li> 
            <li> <Link to="/PatientEducation" > Patient Education </Link></li>
            <li> <Link to="/ProfessionalEducation" > Professional Education </Link></li>   
            </ul>
          </div>
          </div>
        </div>
        <div className={styles.copyright}>
          &copy; Copyright 2025 {companyName}
        </div>
      </footer>
    </>
  );
};

export default Footer;