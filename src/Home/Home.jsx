import React from 'react';
import styles from './Home.module.css';
import logo from '../assets/logo.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Home = ({ companyName ,width }) => {
  const dentalImages = [
    "https://images.pexels.com/photos/4269696/pexels-photo-4269696.jpeg", // Dental tools on a tray
    "https://images.pexels.com/photos/3845766/pexels-photo-3845766.jpeg", // Patient smiling in a dental chair
    "https://images.pexels.com/photos/5355843/pexels-photo-5355843.jpeg", // Close-up of dental equipment
    "https://images.pexels.com/photos/3779709/pexels-photo-3779709.jpeg", // Dentist and assistant working on a patient
    ];
  
  return (
    <div className={styles.container}>
      <div id="myCarousel" className={`carousel slide ${styles.carousel}`} data-ride="carousel">
        {/* Indicators */}
        <ol className="carousel-indicators">
          {[...Array(4)].map((_, index) => (
            <li
              key={index}
              data-target="#myCarousel"
              data-slide-to={index}
              className={index === 0 ? 'active' : ''}
            ></li>
          ))}
        </ol>

        {/* Carousel Items */}
        <div className={`carousel-inner ${styles.carouselInner}`}>
    {dentalImages.map((image, index) => (
      <div key={index} className={`item ${index === 0 ? 'active' : ''} ${styles.carouselItem}`}>
        <img src={image} alt={`Dental Slide ${index + 1}`} className={styles.carouselImage} />
        <div className="carousel-caption">{/* Add captions if needed */}</div>
      </div>
    ))}
  </div>

        {/* Left and Right Controls */}
        <a className={`left carousel-control ${styles.left}`} href="#myCarousel" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left"></span>
          <span className={styles.srOnly}></span>
        </a>
        <a className={`right carousel-control ${styles.right}`} href="#myCarousel" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right"></span>
          <span className={styles.srOnly}></span>
        </a>
      </div>
      <div className={styles.gridContainer}>
  <div className={styles.textBlock}      
          data-aos="zoom-in-down"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-once="false"
          data-aos-easing="ease-in-sine"
          >
    <h2 className={styles.heading}>Welcome to {companyName}</h2>
    <p className={styles.paragraph}>
      At {companyName}, we believe that a healthy smile is the key to confidence and well-being. 
      Our dedicated team is committed to providing gentle, high-quality dental care in a comfortable 
      and friendly environment. Whether you need a routine check-up, cosmetic enhancements, or 
      advanced dental treatments, we’re here to help you achieve and maintain a beautiful, healthy smile.
    </p>
    <p className={styles.paragraph}>
      Your comfort is our priority, and we take the time to listen to your concerns, answer your 
      questions, and tailor treatments to your needs. Book an appointment today and experience 
      dentistry with a personal touch!
    </p>
    <h2 className={styles.highlight}>✨ Your Smile, Our Passion! ✨</h2>
  </div>
  <div className={styles.imageContainer}   
          data-aos="zoom-in-up"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-once="false"
           data-aos-easing="ease-in-sine"
          >
    <img src="https://images.pexels.com/photos/6502166/pexels-photo-6502166.jpeg?cs=srgb" alt="Dental Care" className={styles.image} />
  </div>
</div>

<div className={styles.servicesGrid}>
  {[
    { title: "General Service", text: "A selection of general dentistry services." },
    { title: "Cosmetic Dentistry", text: "Enhance your smile with whitening, veneers, and more." },
    { title: "Orthodontics", text: "Straighten teeth with braces or clear aligners." },
    { title: "Oral Surgery", text: "Expert care for extractions, implants, and more." },
    { title: "Pediatric Dentistry", text: "Gentle and specialized care for children." },
    { title: "Periodontics", text: "Gum disease treatment and prevention." },
  ].map((service, index) => (
    <div
      key={index}
      className={styles.serviceBox}
      data-aos="fade-down"
      data-aos-delay="100"
      data-aos-duration="1000"
      data-aos-once="false"
      data-aos-easing="ease-in"
    >
      <img src={logo} alt="React Logo" width={width} />
      <span className={styles.separator}></span>
      <h2 className={styles.serviceTitle}>{service.title}</h2>
      <h3 className={styles.serviceText}>{service.text}</h3>
    </div>
  ))}
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
        <p className={styles.phoneDetails}>📞(123) 456-7890</p>
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

        <p className={styles.locationHeading}>🔻 Address : Oyemekun Bus Stop, 5b College Rd, Ogba, Lagos 101232, Lagos</p>
      </div>
    </div>
</div>



<div className={styles.bookContainer}>
      <h1 className={styles.bookHeading}>
        "Your Comfort, Our Priority – A Home Away from Home!"
      </h1>
      <p className={styles.bookParagraph}>
        "Become a part of our family – Join {companyName} today!"
      </p>
      <button className={styles.bookButton}>Book An Appointment</button>
    </div>
















 </div>   
  );
};

export default Home;
