import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./AboutUs.module.css";
import htp from '../assets/htp.png'
import h1 from '../assets/h1.png'
import d from '../assets/d.png'
import dc from '../assets/dc.png'


const AboutUS = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

   const DocImages=[
    "https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?cs=srgb",
    "https://images.pexels.com/photos/5452291/pexels-photo-5452291.jpeg?cs=srgb",
    " https://images.pexels.com/photos/5867730/pexels-photo-5867730.jpeg?cs=srgb",
    "https://images.pexels.com/photos/5234464/pexels-photo-5234464.jpeg?cs=srgb"
   ]
  return (
    <div>
      <div className={styles.aboutusHeroSection}>
        <div>
          <div data-aos="fade-down" data-aos-easing="linear">
            <div className={styles.aboutusHeroText}>
              WE PROVIDE THE BEST <br /> DENTAL SERVICES<br />
              <button className={styles.aboutusPrimaryButton}>Primary</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.aboutusDepartmentSection}>
        <div className={styles.aboutusDepartmentHeader}>
          <b>OUR DEPARTMENT</b>
          <br />
          <span>
          We offer expert dental care, including preventive, cosmetic, orthodontic, 
          and restorative treatments, ensuring healthy and confident smiles.      </span>
        </div>
        <br /><br />
        <div className={styles.aboutusServicesContainer}>
  {[htp, h1, d, dc].map((src, index) => (
    <div key={index} className={styles.aboutusServiceItem}>
      <div data-aos="zoom-out-up">
        <img src={src} className={styles.aboutusServiceImage} alt="dental service" />
      </div>
      <br />
      {[
        "Providing top-quality dental care, ensuring healthy, confident smiles with advanced treatments and expert care.",
        "Our specialized dental services are tailored to meet your needs with the latest technology and personalized treatment plans.",
        "Experience expert care and innovative treatments designed to help you maintain optimal oral health and a beautiful smile.",
        "We focus on delivering gentle, effective care with a variety of services designed to support your long-term dental health."
      ][index]}
    </div>
  ))}
</div>

        <br /><br /><br />
        <button className={styles.aboutusPrimaryButton}>Primary</button>
      </div>
      
      <div className={styles.aboutusContentSection}>
        <div data-aos="fade-right" className={styles.aboutusContentContainer}>
          <img src=" https://images.pexels.com/photos/4269694/pexels-photo-4269694.jpeg?cs=srgb" className={styles.aboutusImage} alt="About us" />
          <div data-aos="fade-left">
          <div>
  <span className={styles.aboutusTitle}><b>ABOUT US</b></span>
  <br />
  <span className={styles.aboutusText}>
    We are dedicated to providing exceptional dental care with a focus
     on your comfort and long-term health.
  </span>
</div>

            <br /><br />
            <button className={styles.aboutusPrimaryButton}>Primary</button>
          </div>
        </div>
      </div>
      
      <div className={styles.aboutusDoctorsSection}>
        <div className={styles.aboutusDoctorsHeader}>
          OUR DOCTORS
          <br />
          <span>
          Meet our experienced team of doctors, committed to providing expert care and personalized treatment plans.

          </span>
        </div>
        <div data-aos="zoom-in" className={styles.aboutusDoctorsContainer}>
          {DocImages.map((src, index) => (
            <img key={index} src={src} className={styles.aboutusDoctorImage} alt="Doctor" />
          ))}
        </div>
        <br />
        <button className={styles.aboutusPrimaryButton}>Primary</button>
      </div>
    </div>
  );
};

export default AboutUS;