import React from 'react';
import styles from './PatientEducation.module.css';

const PatientEducation = () => {
  return (
    <>
      <div className={styles.gridContainer}>
        <div className={styles.imgWrapper}
             data-aos="zoom-in-right"
             data-aos-delay="100"
             data-aos-duration="1000"
             data-aos-once="false"
             data-aos-easing="ease-in"
        >
          <img src="https://images.pexels.com/photos/3771821/pexels-photo-3771821.jpeg?auto=compress" alt="" className={styles.img} />
        </div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Daily Oral Care Routine</h2>
          <ul className={styles.ulList}>
            <li><strong>Brushing:</strong> Brush twice a day with fluoride toothpaste for at least two minutes.</li>
            <li><strong>Flossing:</strong> Floss daily to remove plaque and food particles between teeth.</li>
            <li><strong>Mouthwash:</strong> Use an antimicrobial or fluoride mouthwash to strengthen enamel and fight bacteria.</li>
            <li><strong>Diet & Hydration:</strong> Avoid sugary foods and drinks; drink plenty of water to wash away food debris.</li>
          </ul>
        </section>
      </div>

      <div className={styles.gridContainer}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Common Dental Issues and Prevention</h2>
          <ul className={styles.ulList}>
            <li><strong>Cavities:</strong> Caused by plaque buildup and sugary foods. Prevented by regular brushing and flossing.</li>
            <li><strong>Gum Disease:</strong> Symptoms include red, swollen gums and bleeding. Prevented by good oral hygiene and professional cleanings.</li>
            <li><strong>Bad Breath:</strong> Often caused by bacteria or food particles. Prevented by proper brushing, flossing, and staying hydrated.</li>
            <li><strong>Tooth Sensitivity:</strong> Caused by enamel erosion. Use desensitizing toothpaste and avoid acidic foods.</li>
          </ul>
        </section>
        <div className={styles.imgWrapper}
             data-aos="fade-down"
             data-aos-delay="100"
             data-aos-duration="1000"
             data-aos-once="false"
             data-aos-easing="ease-in"
        >
          <img src="https://overlandparkcosmeticdentist.com/wp-content/uploads/2020/05/tooth-pain-causes-1024x682.jpg" alt="" className={styles.img} />
        </div>
      </div>

      <div className={styles.gridContainer}>
        <div className={styles.imgWrapper}
             data-aos="zoom-down"
             data-aos-delay="100"
             data-aos-duration="1000"
             data-aos-once="false"
             data-aos-easing="ease-in"
        >
          <img src="https://images.pexels.com/photos/5355730/pexels-photo-5355730.jpeg?auto=compress" alt="" className={styles.img} />
        </div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Importance of Regular Dental Visits</h2>
          <ul className={styles.ulList}>
            <li><strong>Checkups & Cleanings:</strong> Visit the dentist every six months for early detection of problems.</li>
            <li><strong>X-rays & Exams:</strong> Help identify hidden issues such as cavities or bone loss.</li>
            <li><strong>Professional Advice:</strong> Dentists provide tailored recommendations for your oral health needs.</li>
          </ul>
        </section>
      </div>

      <div className={styles.gridContainer}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Dental Procedures & Treatments</h2>
          <ul className={styles.ulList}>
            <li><strong>Fillings:</strong> Restore teeth affected by cavities.</li>
            <li><strong>Root Canals:</strong> Save infected teeth from extraction.</li>
            <li><strong>Crowns & Bridges:</strong> Restore function and appearance of damaged or missing teeth.</li>
            <li><strong>Braces & Aligners:</strong> Straighten teeth and correct bite issues.</li>
            <li><strong>Teeth Whitening:</strong> Improve the appearance of stained or discolored teeth.</li>
          </ul>
        </section>
        <div className={styles.imgWrapper}
             data-aos="fade-down-left"
             data-aos-delay="100"
             data-aos-duration="1000"
             data-aos-once="false"
             data-aos-easing="ease-in"
        >
          <img src="https://media.istockphoto.com/id/1129200700/photo/closeup-dental-braces-checkup.jpg?b=1&s=612x612&w=0&k=20&c=8qOl5HmB4gUqmT1HZUm7ACC4tCplFmFbE_LIv-WDKK4=" alt="" className={styles.img} />
        </div>
      </div>

      <div className={styles.gridContainer}>
        <div className={styles.imgWrapper} 
             data-aos="fade-right"
             data-aos-delay="100"
             data-aos-duration="1000"
             data-aos-once="false"
             data-aos-easing="ease-in"
        >
          <img src="https://img.freepik.com/free-photo/happy-afro-kid-regular-check-up-teeth-dental-clinic_651396-1411.jpg" alt="" className={styles.img} />
        </div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Pediatric Dental Care</h2>
          <ul className={styles.ulList}>
            <li><strong>First Dental Visit:</strong> Recommended by age one or when the first tooth appears.</li>
            <li><strong>Sealants & Fluoride:</strong> Prevent cavities in children.</li>
            <li><strong>Teething & Oral Habits:</strong> Proper care for baby teeth helps ensure a healthy smile.</li>
          </ul>
        </section>
      </div>

      <div className={styles.gridContainer}
           data-aos="fade-up"
           data-aos-delay="100"
           data-aos-duration="1000"
           data-aos-once="false"
           data-aos-easing="ease-in"
      >
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Emergency Dental Care</h2>
          <ul className={styles.ulList}>
            <li><strong>Toothache Relief:</strong> Rinse with warm water and use a cold compress.</li>
            <li><strong>Broken Tooth:</strong> Rinse mouth, save any fragments, and see a dentist immediately.</li>
            <li><strong>Knocked-Out Tooth:</strong> Keep the tooth moist and seek emergency dental care.</li>
          </ul>
        </section>
        <div className={styles.imgWrapper}
             data-aos="fade-down"
             data-aos-delay="100"
             data-aos-duration="1000"
             data-aos-once="false"
             data-aos-easing="ease-in"
        >
          <img src="https://img.freepik.com/free-photo/front-view-smiley-black-female-doctor_23-2149844635.jpg?ga=GA1.1.1393104245.1739823569" alt="" className={styles.img} />
        </div>
      </div>

      <section className={`${styles.conclusionSection} ${styles.textCenter}`}>
        <h2>Conclusion</h2>
        <p>Educating yourself on proper dental care is key to maintaining a healthy, beautiful smile. Practicing good oral hygiene, visiting the dentist regularly, and addressing issues early will ensure long-term dental health.</p>
      </section>
    </>
  );
};

export default PatientEducation;
