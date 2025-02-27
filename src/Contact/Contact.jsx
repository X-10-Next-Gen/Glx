import React from "react";
import styles from './Contact.module.css';
// import ContactImg from '../assets/ContactImg.webp';// Update with your actual image path
import Contact from '../assets/Contact.jpg'

const HeroSection = ({companyName , companyNumber}) => {
  return (
<>

<section className={styles.heroSection}>
      <div className={styles.content} 
                data-aos="zoom-in"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos-once="false"
                data-aos-easing="ease-in"
      >
        <h1>
          <span className={styles.lightText}>Get in Touch</span>
          <br />
          <span className={styles.boldText}>Contact Us</span>
        </h1>
        <p>
          Have any questions or need assistance? We’d love to hear from you!
          Reach out to us, and we’ll get back to you as soon as possible.
        </p>
        <div className={styles.contactInfo}>
          <p><strong>Email:</strong> support@example.com</p>
          <p><strong>Phone:</strong> +234 123 456 7890</p>
          <p><strong>Address:</strong> Lagos, Nigeria</p>
        </div>
      </div>
      <div className={styles.imageContainer}           
          data-aos="fade-down"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-once="false"
          data-aos-easing="ease-in">
        <img src={Contact} alt="Contact Us Illustration" />
      </div>









      
    </section>

  <div className={styles.contact_container}
                  data-aos="zoom-in"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                  data-aos-once="false"
                  data-aos-easing="ease-in"
  >
      <h1 className={styles.contact_heading}>Contact {companyName} Office</h1>
      <div className={styles.contact_card}>
        <p className={styles.contact_text}>Let’s Keep Your Smile Healthy!</p>
        <p className={styles.contact_text}>Book an appointment or learn more about our dental care services.</p>
        <p className={styles.contact_text}>
          Need Immediate Attention? If you’re facing a dental emergency, we’ll do our best to fit you in right away.
        </p>
        <button className={styles.contact_button}>Call 00</button>
        <button className={styles.contact_button}>Book Appointment</button>
      </div>
    </div>

  <div className={styles.mainContainer}>
  <h1>Get in Touch with{companyName}</h1>
      <div className={styles.contactContainer}>
        {/* Map Section */}
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.0751154443283!2d3.3308147735051064!3d6.6375939218300415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b91e0f25e6fb7%3A0xa6d996600f665ed6!2sThe%20Geek%20Center%20Ogba%20(APTECH)!5e0!3m2!1sen!2sng!4v1739707540775!5m2!1sen!2sng"
            width="100%"
            height="450"
            style={{ border: '0' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
  
        {/* Contact Details Section */}
        <div className={styles.detailsSection}>
          <p className={styles.infoTitle}>📞 Phone Number</p>
          <p className={styles.phoneDetails}>📞(343) 600-7481</p>
          <p className={styles.hoursTitle}>⌚ Business Hours</p>
  
          <ul className={styles.hoursList}>
            <li className={styles.hoursEntry}>Monday: <span className={styles.lightWeight}>08:00 am - 05:00 pm</span></li>
            <li className={styles.hoursEntry}>Tuesday: <span className={styles.lightWeight}>08:00 am - 05:00 pm</span></li>
            <li className={styles.hoursEntry}>Wednesday: <span className={styles.lightWeight}>08:00 am - 05:00 pm</span></li>
            <li className={styles.hoursEntry}>Thursday: <span className={styles.lightWeight}>08:00 am - 05:00 pm</span></li>
            <li className={styles.hoursEntry}>Friday: <span className={styles.lightWeight}>08:00 am - 01:00 pm</span></li>
            <li className={styles.hoursEntry}>Saturday: <span className={styles.lightWeight}>Closed</span></li>
            <li className={styles.hoursEntry}>Sunday: <span className={styles.lightWeight}>Closed</span></li>
          </ul>
  
          <p className={styles.locationHeading}>🔻 Address</p>
          <p className={styles.locationText}>Oyemekun Bus Stop, 5b College Rd, Ogba, Lagos 101232, Lagos</p>
        </div>
      </div>
  </div>
</>
  );
};

export default HeroSection;
